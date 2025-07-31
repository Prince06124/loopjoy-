import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DeleteConfirmationModal } from './Deletevideo';
import { DesktopChoose } from './ChooseMusic';
import { DesktopAddText } from './Addtext';
import { Addbg } from './Addbg';
import { MusicPartSelector } from './MusicPartSelector';
import { ChooseEmoji } from './ChooseEmoji';

export const RecordVideoMobile = () => {
  const [stream, setStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [currentFPS, setCurrentFPS] = useState(30);
  const [showRedButton, setShowRedButton] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [showPreviewButton, setShowPreviewButton] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showBgModal, setShowBgModal] = useState(false);
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [bgColor, setBgColor] = useState('#D0F4DE');
  const [showMusicPartSelector, setShowMusicPartSelector] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [confirmedMusic, setConfirmedMusic] = useState(null);
  const [overlayText, setOverlayText] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [pendingEmoji, setPendingEmoji] = useState(null);

  const handleSongSelected = (song) => {
    setSelectedSong(song);
    setShowMusicModal(false);
    setShowMusicPartSelector(true);
  };
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate();

  const formatTime = (seconds) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };

  const startRecording = () => {
    if (!stream) return;
    
    setRecordingTime(0);
    setIsRecording(true);
    setRecordedChunks([]);
    setVideoUrl(null);
    setIsPaused(false);
    setIsPlayingPreview(false);
    setShowPreviewButton(false);

    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);

    if (stream) {
      const options = { mimeType: 'video/webm; codecs=vp8' };
      const newMediaRecorder = new MediaRecorder(stream, options);
      
      const chunks = [];
      
      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      newMediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setShowPreviewButton(true);
      };

      mediaRecorderRef.current = newMediaRecorder;
      newMediaRecorder.start();
    }
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }

    setIsRecording(false);
    setRecordingTime(0);
    setShowRedButton(false);
    setIsPaused(false);

    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
      });
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setStream(null);
    }
  };

  const playPreviewVideo = () => {
    if (videoUrl && videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.srcObject = null;
      videoRef.current.controls = true;
      videoRef.current.play();
      setIsPlayingPreview(true);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30 }
        },
        audio: true
      });

      setStream(mediaStream);
      setShowRedButton(true);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.controls = false;
        await videoRef.current.play();
      }

      const videoTrack = mediaStream.getVideoTracks()[0];
      const settings = videoTrack.getSettings();
      setCurrentFPS(Math.round(settings.frameRate || 30));
    } catch (err) {
      console.error("Error accessing camera:", err);
      stopRecording();
    }
  };

  const handleRecordClick = () => {
    if (!stream) {
      requestCameraPermission();
    } else if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-4">
        <div className="font-quicksand text-lg font-bold">
          <span className="text-[#1E293B]">Loop</span>
          <span className="text-[#7C3AED]">Joy</span>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E2E8F0] hover:bg-gray-50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19 19" fill="none">
            <path d="M19 6.33323C19 7.6379 18.5044 8.9766 17.7484 10.2631C17.5315 9.71444 17.1974 9.20619 16.7437 8.7866C17.1586 7.94585 17.4167 7.1154 17.4167 6.33323C17.4167 4.18781 15.785 2.3749 13.8542 2.3749C12.0848 2.3749 11.077 3.09135 10.3977 3.71598L7.37042 6.5256C7.09096 6.80585 7.02446 7.2769 7.24138 7.57852C7.38308 7.77565 7.59129 7.8944 7.82642 7.9134C8.05996 7.93477 8.28638 7.84927 8.45025 7.68381L11.7539 4.5211L12.8488 5.66427L11.8687 6.6024L15.6267 9.90048C16.507 10.6731 16.724 11.9707 16.131 12.9183C15.766 13.501 15.1699 13.8929 14.4962 13.9918C14.4503 13.9981 14.4052 14.0037 14.3593 14.0076C14.3561 14.4154 14.2476 14.8191 14.0252 15.1754C13.6602 15.758 13.0641 16.1499 12.3904 16.2489C12.2439 16.2694 12.0983 16.2781 11.9526 16.271C11.9098 16.5734 11.8069 16.8679 11.6399 17.1347C11.2749 17.7174 10.6788 18.1085 10.0051 18.2074C9.89188 18.2241 9.77867 18.232 9.66704 18.232C9.10733 18.232 8.56425 18.0301 8.13833 17.6556L5.681 15.4516C3.08829 13.1099 0 9.62735 0 6.33323C0 3.2774 2.3085 0.791563 5.14583 0.791563C6.41488 0.791563 7.38863 1.08923 8.15258 1.47952L6.88671 2.65435C6.40379 2.48494 5.83379 2.3749 5.14583 2.3749C3.21496 2.3749 1.58333 4.18781 1.58333 6.33323C1.58333 8.45015 3.41446 11.2709 6.74104 14.2768L9.19046 16.4729C9.34642 16.6099 9.56254 16.6732 9.77629 16.6423C9.99321 16.6106 10.1792 16.4879 10.2988 16.2956C10.4809 16.0034 10.3906 15.5696 10.0922 15.3084L7.55329 12.8946L8.64262 11.7451L11.5892 14.527C11.7309 14.6505 11.9502 14.7154 12.1608 14.6821C12.3777 14.6505 12.5638 14.527 12.6833 14.3354C12.8654 14.0433 12.7751 13.6094 12.4767 13.3474L9.65833 10.7959L10.7152 9.61786L13.6776 12.2541C13.836 12.3934 14.0529 12.4584 14.2658 12.4251C14.4828 12.3934 14.6688 12.2699 14.7883 12.0784C14.9704 11.7862 14.8802 11.3524 14.5817 11.0904L10.72 7.70123L9.55621 8.8151C9.12 9.2521 8.51754 9.4991 7.89054 9.4991C7.06246 9.4991 6.36658 9.07477 5.95492 8.50319C5.28596 7.57377 5.42133 6.23348 6.27 5.38481L9.32187 2.55223C10.1468 1.7946 11.51 0.790771 13.8526 0.790771C16.6899 0.790771 18.9984 3.2766 18.9984 6.33244L19 6.33323Z" fill="#001D3D"/>
          </svg>
          <span className="text-[12px] text-[#1E293B] font-medium">245 Moments of kindness</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[6px]">
        <div className="w-full h-full bg-[rgba(127,71,254,0.10)]">
          <div className="h-full bg-[#7F47FE] w-[33.33%]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 pt-6">
        {/* Logo and Text Content */}
        <div className="flex flex-col items-center text-center mb-8">
          {/* Glowing Logo */}
          <div className="relative mb-6">
            <div className="relative w-[60px] h-[60px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 269 269" fill="none" className="absolute -left-12 -top-12">
                <g opacity="0.7" filter="url(#filter0_f_2111_476)">
                  <circle cx="134.867" cy="134.867" r="60.8667" fill="#FD4E86"/>
                </g>
                <defs>
                  <filter id="filter0_f_2111_476" x="0" y="0" width="269.733" height="269.733" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_2111_476"/>
                  </filter>
                </defs>
              </svg>
              <div className="absolute inset-0 blur-xl opacity-70">
                <img src="/image 282 (1).png" alt="Logo background" className="w-full h-full object-contain"/>
              </div>
              <img src="/image 282 (1).png" alt="Logo" className="relative z-10 w-full h-full object-contain"/>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-3 max-w-[300px]">
            <span className="uppercase font-quicksand text-[12px] font-bold leading-[120%] tracking-[-0.24px] text-[#7F47FE]">
              Their moment of joy starts here
            </span>
            <h2 className="font-quicksand text-[24px] font-bold leading-[140%] tracking-[-0.48px] text-[#001D3D]">
              Make Their Day With a Personal Video
            </h2>
            <p className="font-jakarta text-[12px] leading-[150%] text-[#001D3D] opacity-60">
              Send a quick video to say thanks, show support, or just make someone smile. It only takes a minute to brighten their day.
            </p>
          </div>
        </div>

        {/* Video Recording Interface */}
        <div className="flex-1 flex flex-col items-center">
          {/* Video Frame Container */}
          <div className="w-full max-w-[280px] rounded-[32px] flex items-center justify-center relative overflow-hidden mb-3 h-[460px]" style={{ backgroundColor: bgColor }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 w-[200%] h-[200%] bg-repeat opacity-85" 
              style={{ backgroundImage: 'url(/background.png)', transform: 'rotate(-15deg) translate(-25%, -25%)' }}/>
            
            {/* Song Tag - Appears at top when music is confirmed */}
            {confirmedMusic && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-[rgba(23,23,23,0.8)] backdrop-blur-sm rounded-full min-w-[120px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="white"/>
                  </svg>
                  <span className="text-white text-[10px] font-medium whitespace-nowrap">{confirmedMusic.name}</span>
                  <button 
                    onClick={() => setConfirmedMusic(null)}
                    className="ml-1 w-4 h-4 flex items-center justify-center text-white hover:bg-white/20 rounded-full"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
            
            {/* Text Overlay - Appears at bottom when text is added */}
            {overlayText && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[200px] z-30">
                <div className="flex items-center justify-center px-4 py-3 bg-[rgba(69,59,48,0.75)] backdrop-blur-[2px] relative">
                  <span className="text-white text-sm font-medium">{overlayText}</span>
                  <button 
                    onClick={() => setOverlayText(null)}
                    className="absolute right-3 w-5 h-5 flex items-center justify-center text-white hover:bg-white/20 rounded-full"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
            
            {/* Video Preview Frame */}
            <div 
              className="rounded-[32px] w-[200px] h-[410px] relative overflow-hidden z-10 shadow-[10px_10px_0px_rgba(0,0,0,0.1)] cursor-crosshair"
              onClick={(e) => {
                if (pendingEmoji) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const newEmoji = {
                    src: pendingEmoji,
                    x: x + 'px',
                    y: y + 'px',
                    id: Date.now()
                  };
                  setSelectedEmojis(prev => [...prev, newEmoji]);
                  setPendingEmoji(null);
                }
              }}
            >
              {/* Emoji Overlays - Inside video frame */}
              {selectedEmojis.map((emoji) => (
                <div
                  key={emoji.id}
                  className="absolute z-30 cursor-pointer"
                  style={{
                    left: emoji.x,
                    top: emoji.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEmojis(prev => prev.filter(e => e.id !== emoji.id));
                  }}
                >
                  <img
                    src={`/Emojis/${emoji.src}`}
                    alt="emoji"
                    className="w-8 h-8 hover:scale-110 transition-transform"
                  />
                </div>
              ))}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted={!isPlayingPreview}
                className="w-full h-full object-cover rounded-[32px]"
                style={{ display: (stream || isPlayingPreview) ? 'block' : 'none' }}
              />

              {!stream && !isPlayingPreview && (
                <img src="/rv-image-1.jpg" alt="Record Preview" className="w-full h-full object-cover rounded-[32px]"/>
              )}
              
              {/* Timer and FPS Display */}
              {(isRecording || (stream && showRedButton)) && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  {/* Timer Container */}
                  <div className="flex h-[34px] px-[13px] py-[12px] justify-between items-center rounded-full bg-[rgba(89,79,68,0.75)] backdrop-blur-[2px] gap-6">
                    {/* Timer */}
                    <span className={`font-jakarta text-[11.789px] font-semibold leading-none text-white tracking-[0.2px] ${(isRecording || isPaused) ? 'bg-[#F6313A] rounded-[29px] px-2 py-[5px] inline-flex items-center justify-center' : ''}`}>
                      {formatTime(recordingTime)}
                    </span>
                    
                    {/* HD and FPS Group */}
                    <div className="flex items-center gap-1">
                      {/* HD */}
                      <span className="text-white font-['Space_Grotesk'] text-[7.679px] font-medium leading-none tracking-[0.307px]">
                        HD
                      </span>
                      {/* Dot Separator */}
                      <span className="text-white text-[4px] leading-none opacity-80">●</span>
                      {/* FPS Counter */}
                      <span className="text-white font-['Space_Grotesk'] text-[7.679px] font-medium leading-none tracking-[0.307px]">
                        {currentFPS}FPS
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Preview Control Bar - Appears when preview is available */}
              {(showPreviewButton || isPlayingPreview) && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <div 
                    style={{
                      display: 'flex',
                      height: '34px',
                      padding: '12px 5px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexShrink: 0,
                      alignSelf: 'stretch',
                      borderRadius: '999px',
                      background: 'rgba(23, 23, 23, 0.53)',
                      backdropFilter: 'blur(2px)',
                      width: '186px'
                    }}
                  >
                    {/* Close Button - Left side */}
                    <button 
                      onClick={() => setShowDeleteModal(true)}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.27)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <img src="/XOutline.svg" alt="Close" width="12" height="12" />
                    </button>
                    
                    {/* Right side buttons group */}
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {/* Music/Cast Button */}
                      <button 
                        onClick={() => {
                          console.log('Music button clicked');
                          setShowMusicModal(true);
                        }}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.27)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <img src="/music_cast.svg" alt="Music" width="14" height="14" />
                      </button>
                      
                      {/* Text Button */}
                      <button 
                        onClick={() => setShowTextModal(true)}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.27)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <img src="/match_case.svg" alt="Text" width="14" height="14" />
                      </button>
                      
                      {/* Emoji/Reaction Button */}
                      <button 
                        onClick={() => setShowEmojiModal(true)}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.27)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <img src="/add_reaction.svg" alt="Reaction" width="14" height="14" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Play Preview Button - Appears after recording stops */}
              {showPreviewButton && videoUrl && !isPlayingPreview && (
                <button 
                  onClick={playPreviewVideo}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.29)] z-20"
                >
                  <img src="/play_arrow.svg" alt="Play" className="w-[30px] h-[35px]" />
                </button>
              )}
              
              {/* Record Button */}
              {!isPlayingPreview && !videoUrl && (
                <button 
                  onClick={handleRecordClick}
                  className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-[7px] z-10 
                    ${!showRedButton ? 'bottom-5 px-[12px] py-[7px] bg-[#789AF7] rounded-[12px]' : 
                      isRecording ? 'bottom-6 w-[45px] h-[45px] rounded-[6px]' : 'bottom-6 w-[64px] h-[64px] rounded-[50%]'
                    }
                  `}
                >
                  {showRedButton ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                      {isRecording ? (
                        <rect x="21.5" y="21.5" width="21" height="21" rx="6" fill="#F6313A"/>
                      ) : (
                        <circle cx="32" cy="32" r="20" fill="#F6313A"/>
                      )}
                      <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="5" fill="#F6313A"/>
                        <circle cx="9" cy="9" r="7.75" stroke="white" strokeWidth="1.5"/>
                      </svg>
                      <span className="text-white font-jakarta text-[14px] font-semibold leading-[140%] tracking-[-0.32px]">
                        RECORD
                      </span>
                    </>
                  )}
                </button>
              )}
              
              {/* Pause/Resume Button - Appears only when recording */}
              {isRecording && !isPaused && !videoUrl && (
                <button 
                  onClick={pauseRecording}
                  className="absolute bottom-6 left-1/2 -translate-x-[60px] flex items-center justify-center w-[45px] h-[45px] rounded-full"
                >
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="24" rx="4" fill="white"/>
                    <rect x="12" width="8" height="24" rx="4" fill="white"/>
                  </svg>
                </button>
              )}
              {isRecording && isPaused && !videoUrl && (
                <button 
                  onClick={resumeRecording}
                  className="absolute bottom-6 left-1/2 -translate-x-[60px] flex items-center justify-center w-[45px] h-[45px] rounded-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </button>
              )}
              
              {/* Music Part Selector - Inside video frame */}
              {showMusicPartSelector && selectedSong && (
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <MusicPartSelector
                    song={selectedSong}
                    onClose={() => setShowMusicPartSelector(false)}
                    onConfirm={(selection) => {
                      setConfirmedMusic(selectedSong);
                      setShowMusicPartSelector(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Background Change Button */}
          <div className="relative mt-3">
            <button 
              onClick={() => setShowBgModal(true)}
              className="inline-flex items-center gap-[6px] px-[12px] py-[8px] rounded-[999px] bg-[#FFFFFF] text-[#007AFF] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.05)] font-jakarta text-[11.789px] font-normal leading-[18.995px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill={bgColor}/>
              </svg>
              Change background
            </button>
            {showBgModal && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowBgModal(false)} />
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50">
                  <Addbg 
                    selectedColor={bgColor}
                    onColorSelect={(color) => { setBgColor(color); setShowBgModal(false); }} 
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer - Navigation */}
      <div className="flex items-center justify-between px-4 py-3 mt-auto border-t border-gray-100">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center h-[48px] px-5 gap-[6px] rounded-[16px] border-[1.5px] border-[#D9D9D9]">
          Back
        </button>
        <div className="flex flex-col items-center">
          <div className="text-[#64748B] text-[16px] font-quicksand">Step 1 of 4</div>
          <span className="font-quicksand text-[16px] font-[700] leading-[150%] tracking-[-0.18px] text-[#001D3D]">
            Record video
          </span>
        </div>
        <button 
          onClick={() => navigate('/sendgift')}
          className="flex items-center justify-center h-[48px] px-5 gap-[6px] rounded-[16px] bg-[#789AF7] text-white">
          Next
        </button>
      </div>

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={() => {
          setShowDeleteModal(false);
          stopRecording();
          navigate('/');
        }}
        isMobile={true}
      />
      {showMusicModal && <DesktopChoose onClose={() => setShowMusicModal(false)} onSongSelect={handleSongSelected} />}
      {showTextModal && <DesktopAddText onClose={() => setShowTextModal(false)} onTextAdd={(text) => setOverlayText(text)} />}
      {showEmojiModal && <ChooseEmoji onClose={() => setShowEmojiModal(false)} onEmojiSelect={(emoji) => {
        setPendingEmoji(emoji);
      }} />}

    </div>
  );
};