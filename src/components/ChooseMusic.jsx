import React, { useState, useEffect } from "react";
import { MusicPartSelector } from './MusicPartSelector';

export const DesktopChoose = ({ onClose, onSongSelect }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMusicSelector, setShowMusicSelector] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (songName, artist, time) => {
    const song = { name: songName, artist, time };
    if (onSongSelect) {
      onSongSelect(song);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className={`bg-[#25282d] rounded-[32px] relative ${isMobile ? 'w-[90%] max-w-[360px] h-[85vh] max-h-[600px] p-6' : 'w-[400px] h-[600px] p-8'}`}>




        {/* Close button */}
        <div onClick={onClose} className="flex w-10 h-10 items-center justify-center gap-4 p-[4.8px] absolute top-3.5 left-3.5 bg-[#ffffff45] rounded-full opacity-[0.79] cursor-pointer z-20">
          <span className="text-white text-lg">×</span>
        </div>

        <div className={`flex flex-col items-center justify-center h-full ${isMobile ? 'gap-4' : 'gap-1'}`}>
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-white text-xl text-center tracking-[-0.48px] leading-[33.6px]">
            Add audio
          </div>

          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2 p-4 relative flex-1 grow bg-[#ffffff0f] rounded-lg overflow-hidden">
              <div className="w-[17px] h-[17px] relative opacity-60">
                <img
                  className="absolute w-[17px] h-[17px] top-0.5 left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/mdmupd5syNyXFO/img/vector-1.svg"
                />
              </div>
              <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[22.4px] relative opacity-60">
                Search music
              </div>
            </div>
            <div onClick={onClose} className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[22.4px] whitespace-nowrap cursor-pointer">
              Cancel
            </div>
          </div>

          <div className={`flex flex-col items-start relative self-stretch w-full ${isMobile ? 'flex-1 overflow-y-auto' : 'flex-[0_0_auto]'}`}>
            {/* Music item 1 */}
            <div className="flex items-center gap-3 px-0 py-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-16 h-16 rounded [background:url(https://c.animaapp.com/mdmupd5syNyXFO/img/frame-48095803.png)_50%_50%_/_cover]" />
              <div className={`flex flex-col items-start relative flex-1 grow ${isMobile ? 'gap-1' : 'gap-3.5'}`}>
                <div className="relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-md tracking-[-0.36px] leading-[25.2px] whitespace-nowrap">
                  Healing Harmonies
                </div>
                <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    EchoWave
                  </div>
                  <div className="relative w-[3px] h-[3px] bg-[#d9d9d9] rounded-[1.5px] opacity-[0.62]" />
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    1:32
                  </div>
                </div>
              </div>
              <img
                className="relative w-7 h-7 cursor-pointer"
                alt="Play circle"
                src="https://c.animaapp.com/mdmupd5syNyXFO/img/play-circle.png"
                onClick={() => handleSongSelect('Healing Harmonies', 'EchoWave', '1:32')}
              />
            </div>

            {/* Music item 2 */}
            <div className="flex items-center gap-3 px-0 py-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/mdmupd5syNyXFO/img/frame-48095803-3.svg)] relative w-16 h-16 rounded bg-cover bg-[50%_50%]" />
              <div className={`flex flex-col items-start relative flex-1 grow ${isMobile ? 'gap-1' : 'gap-3.5'}`}>
                <div className="relative self-stretch mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-md tracking-[-0.36px] leading-[25.2px]">
                  Serenity Sounds
                </div>
                <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    SoulfulBeats
                  </div>
                  <div className="relative w-[3px] h-[3px] bg-[#d9d9d9] rounded-[1.5px] opacity-[0.62]" />
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    1:45
                  </div>
                </div>
              </div>
              <img
                className="relative w-7 h-7 cursor-pointer"
                alt="Play circle"
                src="https://c.animaapp.com/mdmupd5syNyXFO/img/play-circle-1.png"
                onClick={() => handleSongSelect('Serenity Sounds', 'SoulfulBeats', '1:45')}
              />
            </div>

            {/* Music item 3 */}
            <div className="flex items-center gap-3 px-0 py-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/mdmupd5syNyXFO/img/frame-48095803-2.svg)] relative w-16 h-16 rounded bg-cover bg-[50%_50%]" />
              <div className={`flex flex-col items-start relative flex-1 grow ${isMobile ? 'gap-1' : 'gap-3.5'}`}>
                <div className="relative self-stretch mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-md tracking-[-0.36px] leading-[25.2px]">
                  Tranquil Tunes
                </div>
                <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    RhythmFlow
                  </div>
                  <div className="relative w-[3px] h-[3px] bg-[#d9d9d9] rounded-[1.5px] opacity-[0.62]" />
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    1:58
                  </div>
                </div>
              </div>
              <img
                className="relative w-7 h-7 cursor-pointer"
                alt="Play circle"
                src="https://c.animaapp.com/mdmupd5syNyXFO/img/play-circle-2.png"
                onClick={() => handleSongSelect('Tranquil Tunes', 'RhythmFlow', '1:58')}
              />
            </div>

            {/* Music item 4 */}
            <div className="flex items-center gap-3 px-0 py-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/mdmupd5syNyXFO/img/frame-48095803-4.svg)] relative w-16 h-16 rounded bg-cover bg-[50%_50%]" />
              <div className={`flex flex-col items-start relative flex-1 grow ${isMobile ? 'gap-1' : 'gap-3.5'}`}>
                <div className="relative self-stretch mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-md tracking-[-0.36px] leading-[25.2px]">
                  Calm Reflections
                </div>
                <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    MelodicDreams
                  </div>
                  <div className="relative w-[3px] h-[3px] bg-[#d9d9d9] rounded-[1.5px] opacity-[0.62]" />
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    1:20
                  </div>
                </div>
              </div>
              <img
                className="relative w-7 h-7 cursor-pointer"
                alt="Play circle"
                src="https://c.animaapp.com/mdmupd5syNyXFO/img/play-circle-3.png"
                onClick={() => handleSongSelect('Calm Reflections', 'MelodicDreams', '1:20')}
              />
            </div>

            {/* Music item 5 */}
            <div className="flex items-center gap-3 px-0 py-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/mdmupd5syNyXFO/img/frame-48095803-5.svg)] relative w-16 h-16 rounded bg-cover bg-[50%_50%]" />
              <div className={`flex flex-col items-start relative flex-1 grow ${isMobile ? 'gap-1' : 'gap-3.5'}`}>
                <div className="relative self-stretch mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-md tracking-[-0.36px] leading-[25.2px]">
                  Peaceful Pathways
                </div>
                <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    ChillTunes
                  </div>
                  <div className="relative w-[3px] h-[3px] bg-[#d9d9d9] rounded-[1.5px] opacity-[0.62]" />
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    1:37
                  </div>
                </div>
              </div>
              <img
                className="relative w-7 h-7 cursor-pointer"
                alt="Play circle"
                src="https://c.animaapp.com/mdmupd5syNyXFO/img/play-circle-4.png"
                onClick={() => handleSongSelect('Peaceful Pathways', 'ChillTunes', '1:37')}
              />
            </div>

            {/* Music item 6 */}
            <div className="flex items-center gap-3 px-0 py-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/mdmupd5syNyXFO/img/frame-48095803-1.svg)] relative w-16 h-16 rounded bg-cover bg-[50%_50%]" />
              <div className={`flex flex-col items-start relative flex-1 grow ${isMobile ? 'gap-1' : 'gap-3.5'}`}>
                <div className="relative self-stretch mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-md tracking-[-0.36px] leading-[25.2px]">
                  Mindful Melodies
                </div>
                <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    HarmonyVibes
                  </div>
                  <div className="relative w-[3px] h-[3px] bg-[#d9d9d9] rounded-[1.5px] opacity-[0.62]" />
                  <div className={`relative w-fit mt-[-0.5px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a2a8b4] tracking-[-0.32px] leading-[22.4px] whitespace-nowrap ${isMobile ? 'text-sm' : 'text-md'}`}>
                    1:50
                  </div>
                </div>
              </div>
              <img
                className="relative w-7 h-7 cursor-pointer"
                alt="Play circle"
                src="https://c.animaapp.com/mdmupd5syNyXFO/img/play-circle-5.png"
                onClick={() => handleSongSelect('Mindful Melodies', 'HarmonyVibes', '1:50')}
              />
            </div>
          </div>


        </div>


      </div>
    </div>
  );
};

export default DesktopChoose;



