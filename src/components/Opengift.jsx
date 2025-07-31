import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DeleteConfirmationModal } from './Deletevideo';

const OpenGift = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDeleteVideo = () => {
    setShowDeleteModal(false);
    // Add your delete logic here
  };

  // Mobile View
  if (isMobile) {
    return (
      <div
        className="w-screen min-h-[1603px] bg-[#d0f4de] overflow-x-hidden relative"
        data-model-id="2111:28542"
      >
        <div className="relative h-[1603px]">
          <img
            className="absolute w-screen h-[1509px] top-[57px] left-0"
            alt="Frame"
            src="https://c.animaapp.com/md8nu4lc857Bsb/img/frame-48095759.svg"
          />

          {/* Header */}
          <div className="flex w-screen h-[80px] items-center justify-between px-5 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26]">
            <p className="relative w-fit font-['Quicksand'] font-bold text-[24px] leading-[28.8px]">
              <span className="text-[#001d3d]">Loop</span>
              <span className="text-[#789af7]">Joy</span>
            </p>

            <div className="flex items-center gap-2 px-4 py-2 rounded-[10px] border border-solid border-[#789af7] bg-white">
              <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.33323C19 7.6379 18.5044 8.9766 17.7484 10.2631C17.5315 9.71444 17.1974 9.20619 16.7437 8.7866C17.1586 7.94585 17.4167 7.1154 17.4167 6.33323C17.4167 4.18781 15.785 2.3749 13.8542 2.3749C12.0848 2.3749 11.077 3.09135 10.3977 3.71598L7.37042 6.5256C7.09096 6.80585 7.02446 7.2769 7.24138 7.57852C7.38308 7.77565 7.59129 7.8944 7.82642 7.9134C8.05996 7.93477 8.28638 7.84927 8.45025 7.68381L11.7539 4.5211L12.8488 5.66427L11.8687 6.6024L15.6267 9.90048C16.507 10.6731 16.724 11.9707 16.131 12.9183C15.766 13.501 15.1699 13.8929 14.4962 13.9918C14.4503 13.9981 14.4052 14.0037 14.3593 14.0076C14.3561 14.4154 14.2476 14.8191 14.0252 15.1754C13.6602 15.758 13.0641 16.1499 12.3904 16.2489C12.2439 16.2694 12.0983 16.2781 11.9526 16.271C11.9098 16.5734 11.8069 16.8679 11.6399 17.1347C11.2749 17.7174 10.6788 18.1085 10.0051 18.2074C9.89188 18.2241 9.77867 18.232 9.66704 18.232C9.10733 18.232 8.56425 18.0301 8.13833 17.6556L5.681 15.4516C3.08829 13.1099 0 9.62735 0 6.33323C0 3.2774 2.3085 0.791563 5.14583 0.791563C6.41488 0.791563 7.38863 1.08923 8.15258 1.47952L6.88671 2.65435C6.40379 2.48494 5.83379 2.3749 5.14583 2.3749C3.21496 2.3749 1.58333 4.18781 1.58333 6.33323C1.58333 8.45015 3.41446 11.2709 6.74104 14.2768L9.19046 16.4729C9.34642 16.6099 9.56254 16.6732 9.77629 16.6423C9.99321 16.6106 10.1792 16.4879 10.2988 16.2956C10.4809 16.0034 10.3906 15.5696 10.0922 15.3084L7.55329 12.8946L8.64262 11.7451L11.5892 14.527C11.7309 14.6505 11.9502 14.7154 12.1608 14.6821C12.3777 14.6505 12.5638 14.527 12.6833 14.3354C12.8654 14.0433 12.7751 13.6094 12.4767 13.3474L9.65833 10.7959L10.7152 9.61786L13.6776 12.2541C13.836 12.3934 14.0529 12.4584 14.2658 12.4251C14.4828 12.3934 14.6688 12.2699 14.7883 12.0784C14.9704 11.7862 14.8802 11.3524 14.5817 11.0904L10.72 7.70123L9.55621 8.8151C9.12 9.2521 8.51754 9.4991 7.89054 9.4991C7.06246 9.4991 6.36658 9.07477 5.95492 8.50319C5.28596 7.57377 5.42133 6.23348 6.27 5.38481L9.32187 2.55223C10.1468 1.7946 11.51 0.790771 13.8526 0.790771C16.6899 0.790771 18.9984 3.2766 18.9984 6.33244L19 6.33323Z" fill="#001D3D"/>
              </svg>
              <span className="font-['Quicksand'] font-semibold text-[14px] text-[#001d3d] leading-[22.6px]">
                245 Moments of kindness
              </span>
            </div>
          </div>

          {/* Gift Preview Title */}
          <div className="flex w-screen items-center justify-center py-4 absolute top-[80px] left-0 bg-white">
            <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[#001d3d] text-lg leading-[21.6px]">
              Gift preview
            </div>
          </div>

          {/* Main Content - keeping the same spacing */}
          <div className="px-5">
            <div className="flex flex-col w-full max-w-[341px] h-[740px] items-center justify-between p-[20.16px] absolute top-[148px] left-1/2 -translate-x-1/2 rounded-3xl overflow-hidden shadow-[15.12px_15.12px_0px_#0000001a] [background:url(https://c.animaapp.com/md8nu4lc857Bsb/img/frame-48095871.png)_50%_50%_/_cover]">
              {/* Video preview content remains the same */}
              <img
                className="relative self-stretch w-full flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/md8nu4lc857Bsb/img/frame-48095879.svg"
              />

              <div className="flex w-[89.5px] h-[89.5px] items-center justify-center gap-[22.37px] pl-[4.47px] pr-0 py-0 relative bg-[#ffffff4a] rounded-[2235.2px]">
                <img
                  className="relative w-[28.11px] h-[34.51px]"
                  alt="Play arrow"
                  src="https://c.animaapp.com/md8nu4lc857Bsb/img/play-arrow.svg"
                />
              </div>

              <div className="flex w-[342.71px] h-[60.48px] items-center gap-[90.72px] pl-[120.96px] pr-[16.38px] py-[22.68px] relative ml-[-20.79px] mr-[-20.79px] bg-[#171717ba] backdrop-blur-[2.52px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.52px)_brightness(100%)]">
                <div className="relative w-fit mt-[-0.20px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[17.6px] text-center tracking-[-0.35px] leading-[24.7px] whitespace-nowrap">
                  Hey there 👋
                </div>

                <button 
                  onClick={() => setShowDeleteModal(true)}
                  className="relative w-[15.12px] h-[15.12px] cursor-pointer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <img
                className="absolute w-[341px] h-[509px] top-[145px] left-0"
                alt="Group"
                src="https://c.animaapp.com/md8nu4lc857Bsb/img/group-9482.png"
              />
            </div>

            <div className="flex flex-col w-full max-w-[342px] items-center justify-center gap-[33px] p-6 absolute top-[913px] left-1/2 -translate-x-1/2 bg-white rounded-3xl border border-solid border-[#001d3d26]">
              {/* Gift card content remains the same */}
              <p className="relative self-stretch mt-[-1.00px] opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-sm text-center tracking-[0] leading-[21px]">
                José thought of you (and sent $50 💌)
              </p>

              <div className="flex flex-col items-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch w-full h-[148.93px] rounded-[15px] border border-solid border-black bg-[url(https://c.animaapp.com/md8nu4lc857Bsb/img/frame-48095681.svg)] bg-cover bg-[50%_50%]" />

                <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-transparent text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                      <span className="text-[#001d3d80]">Card number:</span>
                      <span className="text-[#001d3d]">&nbsp;</span>
                    </p>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                      b2fe2d79
                    </div>
                  </div>

                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d80] text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                      Expiration date:
                    </div>

                    <div className="relative w-[83px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                      09/26
                    </div>
                  </div>

                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d80] text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                      CVV:
                    </div>

                    <div className="relative w-[83px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                      1234
                    </div>
                  </div>
                </div>
              </div>

              <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-sm text-center tracking-[0] leading-[21px]">
                🔒 This gift card is secure and ready to use anywhere
                Visa/Mastercard is accepted online.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col w-screen items-center justify-center gap-4 px-5 py-6 absolute bottom-0 left-0 bg-white border-t border-[#001d3d26]">
            <div className="flex flex-col items-center gap-1">
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#001d3d] text-xs opacity-40">
                Step 3 of 4
              </span>
              <span className="font-['Quicksand'] font-bold text-[#001d3d] text-lg">
                Add gift card
              </span>
            </div>

            <div className="flex w-full gap-3">
              <button 
                onClick={() => navigate('/sendgift')} 
                className="flex-1 h-[48px] flex items-center justify-center rounded-[14px] border border-[#789af7] font-['Quicksand'] font-semibold text-[#789af7] text-base"
              >
                Back
              </button>
              <button 
                onClick={() => navigate('/checkout')} 
                className="flex-1 h-[48px] flex items-center justify-center rounded-[14px] bg-[#789af7] font-['Quicksand'] font-semibold text-white text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        
        <DeleteConfirmationModal 
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteVideo}
          isMobile={isMobile}
        />
      </div>
    );
  }

  // Desktop View
  return (
    <div className="w-full min-h-screen bg-[#d0f4de] overflow-hidden flex flex-col relative">
      <div className="relative w-full flex-1 flex flex-col">
        <img
          className="absolute w-full h-full top-[57px] left-0"
          alt="Frame"
          src="https://c.animaapp.com/md8hvmnoS3GudI/img/frame-48095759.svg"
          style={{ objectFit: 'cover', minWidth: '1200px' }}
        />

        <div className="flex w-full h-[79px] items-center justify-between px-8 py-0 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26]">
          <div className="font-quicksand text-xl font-bold">
            <span className="text-[#1E293B]">Loop</span>
            <span className="text-[#7C3AED]">Joy</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M19 6.33323C19 7.6379 18.5044 8.9766 17.7484 10.2631C17.5315 9.71444 17.1974 9.20619 16.7437 8.7866C17.1586 7.94585 17.4167 7.1154 17.4167 6.33323C17.4167 4.18781 15.785 2.3749 13.8542 2.3749C12.0848 2.3749 11.077 3.09135 10.3977 3.71598L7.37042 6.5256C7.09096 6.80585 7.02446 7.2769 7.24138 7.57852C7.38308 7.77565 7.59129 7.8944 7.82642 7.9134C8.05996 7.93477 8.28638 7.84927 8.45025 7.68381L11.7539 4.5211L12.8488 5.66427L11.8687 6.6024L15.6267 9.90048C16.507 10.6731 16.724 11.9707 16.131 12.9183C15.766 13.501 15.1699 13.8929 14.4962 13.9918C14.4503 13.9981 14.4052 14.0037 14.3593 14.0076C14.3561 14.4154 14.2476 14.8191 14.0252 15.1754C13.6602 15.758 13.0641 16.1499 12.3904 16.2489C12.2439 16.2694 12.0983 16.2781 11.9526 16.271C11.9098 16.5734 11.8069 16.8679 11.6399 17.1347C11.2749 17.7174 10.6788 18.1085 10.0051 18.2074C9.89188 18.2241 9.77867 18.232 9.66704 18.232C9.10733 18.232 8.56425 18.0301 8.13833 17.6556L5.681 15.4516C3.08829 13.1099 0 9.62735 0 6.33323C0 3.2774 2.3085 0.791563 5.14583 0.791563C6.41488 0.791563 7.38863 1.08923 8.15258 1.47952L6.88671 2.65435C6.40379 2.48494 5.83379 2.3749 5.14583 2.3749C3.21496 2.3749 1.58333 4.18781 1.58333 6.33323C1.58333 8.45015 3.41446 11.2709 6.74104 14.2768L9.19046 16.4729C9.34642 16.6099 9.56254 16.6732 9.77629 16.6423C9.99321 16.6106 10.1792 16.4879 10.2988 16.2956C10.4809 16.0034 10.3906 15.5696 10.0922 15.3084L7.55329 12.8946L8.64262 11.7451L11.5892 14.527C11.7309 14.6505 11.9502 14.7154 12.1608 14.6821C12.3777 14.6505 12.5638 12.5638 12.6833 14.3354C12.8654 14.0433 12.7751 13.6094 12.4767 13.3474L9.65833 10.7959L10.7152 9.61786L13.6776 12.2541C13.836 12.3934 14.0529 12.4584 14.2658 12.4251C14.4828 12.3934 14.6688 12.2699 14.7883 12.0784C14.9704 11.7862 14.8802 11.3524 14.5817 11.0904L10.72 7.70123L9.55621 8.8151C9.12 9.2521 8.51754 9.4991 7.89054 9.4991C7.06246 9.4991 6.36658 9.07477 5.95492 8.50319C5.28596 7.57377 5.42133 6.23348 6.27 5.38481L9.32187 2.55223C10.1468 1.7946 11.51 0.790771 13.8526 0.790771C16.6899 0.790771 18.9984 3.2766 18.9984 6.33244L19 6.33323Z" fill="#001D3D"/>
            </svg>
            <span className="text-[14px] text-[#1E293B] font-medium">245 Moments of kindness</span>
          </button>
        </div>

        <div className="flex flex-col w-[280px] h-[480px] items-center justify-between p-[10px] absolute top-[150px] left-[238px] rounded-[30px] overflow-hidden shadow-[14.37px_14.37px_0px_#0000001a] [background:url(https://c.animaapp.com/md8hvmnoS3GudI/img/frame-48095871.png)_50%_50%_/_cover]">
          <img
            className="relative self-stretch w-full flex-[0_0_auto]"
            alt="Frame"
            src="https://c.animaapp.com/md8hvmnoS3GudI/img/frame-48095879.svg"
          />

          <div className="flex w-[85.07px] h-[85.07px] items-center justify-center gap-[21.27px] pl-[4.25px] pr-0 py-0 relative bg-[#ffffff4a] rounded-[2124.61px]">
            <img
              className="relative w-[26.72px] h-[32.81px]"
              alt="Play arrow"
              src="https://c.animaapp.com/md8hvmnoS3GudI/img/play-arrow.svg"
            />
          </div>

          <div className="flex w-[325.75px] h-[57.49px] items-center gap-[86.23px] pl-[114.97px] pr-[15.57px] py-[21.56px] relative ml-[-19.76px] mr-[-19.76px] bg-[#171717ba] backdrop-blur-[2.4px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.4px)_brightness(100%)]">
            <div className="relative w-fit mt-[-0.01px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[16.8px] text-center tracking-[-0.34px] leading-[23.5px] whitespace-nowrap">
              Hey there 👋
            </div>

            <button 
              onClick={() => setShowDeleteModal(true)}
              className="relative w-[14.37px] h-[14.37px] cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <img
            className="absolute w-[325px] h-[484px] top-[138px] left-0"
            alt="Group"
            src="https://c.animaapp.com/md8hvmnoS3GudI/img/group-9482.png"
          />
        </div>

        <div className="flex flex-col w-[500px] items-center justify-center gap-[14px] px-8 py-4 absolute top-[150px] left-[619px] bg-white rounded-[30px]">
          <p className="relative self-stretch  opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg text-center tracking-[0] leading-[27px]">
            José thought of you (and sent $50 💌)
          </p>

          <div className="flex flex-col items-center justify-center gap-[8px] p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8fa] rounded-[32px]">
            <div className="relative self-stretch w-[390px] h-[203.59px] rounded-[15px] border border-solid border-black bg-[url(https://c.animaapp.com/md8hvmnoS3GudI/img/frame-48095681.svg)] bg-cover bg-[50%_50%]" />

            <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-transparent text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                  <span className="text-[#001d3d80]">Card number:</span>

                  <span className="text-[#001d3d]">&nbsp;</span>
                </p>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                  b2fe2d79
                </div>
              </div>

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d80] text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                  Expiration date:
                </div>

                <div className="relative w-[83px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                  09/26
                </div>
              </div>

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d80] text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                  CVV:
                </div>

                <div className="relative w-[83px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                  1234
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-[405px] opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
            🔒 This gift card is secure and ready to use anywhere
            Visa/Mastercard is accepted online.
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-2.5 px-[299px] py-[13px] absolute top-[79px] left-0 bg-white ">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg text-center tracking-[-0.36px] leading-[21.6px] whitespace-nowrap">
            Preview Your Masterpiece
          </div>
        </div>

        {/* Footer: ensure solid white background, no background icons visible */}
        <div className="flex items-center justify-between px-8 py-3 mt-auto border-t border-gray-100" style={{ background: '#fff', position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => navigate('/sendgift')}
            className="flex items-center justify-center h-[54px] px-6 gap-[6px] rounded-[16px] border-[1.5px] border-[#D9D9D9]">
            Back
          </button>
          <div className="flex flex-col items-center">
            <div className="text-[#64748B] text-[18px] font-quicksand">Step 3 of 4</div>
            <span className="font-quicksand text-[18px] font-[700] leading-[150%] tracking-[-0.18px] text-[#001D3D]">
              Add gift card
            </span>
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            className="flex items-center justify-center h-[54px] px-6 gap-[6px] rounded-[16px] bg-[#789AF7] text-white">
            Next
          </button>
        </div>
      </div>
      
      <DeleteConfirmationModal 
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDeleteVideo}
        isMobile={isMobile}
      />
    </div>
  );
};

export default OpenGift;