import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingState = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigateToCheckout = () => {
    navigate('/payment');
  };

  // Mobile View
  if (isMobile) {
    return (
      <div
        className="w-[390px] h-[844px] bg-[#f8f9fa]"
        data-model-id="2111:29230"
      >
        <div className="relative h-[844px] bg-[url(https://c.animaapp.com/md8qnvjtrRV2Mo/img/frame-48095759.svg)] bg-[100%_100%]">
          <div className="flex w-[390px] h-[72px] items-center justify-between px-6 py-0 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26]">
            <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[28.8px] whitespace-nowrap">
              <span className="text-[#001d3d]">Loop</span>
              <span className="text-[#789af7]">Joy</span>
            </p>

            <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-[10px] border border-solid border-[#789af7]">
              <div className="relative w-3.5 h-3.5">
                <img
                  className="absolute w-3.5 h-[13px] top-px left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/md8qnvjtrRV2Mo/img/vector.svg"
                />
              </div>

              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
                245 Moments of kindness
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[390px] h-2 items-start gap-2 absolute top-[72px] left-0 bg-[#7f47fe1a]">
            <div className="relative flex-1 self-stretch w-full grow bg-[#7f47fe]" />
          </div>

          <div className="flex flex-col w-[301px] items-center gap-[21px] absolute top-[264px] left-[45px]">
            <img
              className="relative w-[55.15px] h-[55.15px] object-cover"
              alt="Image"
              src="https://c.animaapp.com/md8qnvjtrRV2Mo/img/image-14.png"
            />

            <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#635bff] text-base text-center tracking-[0] leading-6">
                ALMOST THERE…
              </div>

              <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[32px] text-center tracking-[-0.64px] leading-[38.4px]">
                Payment processing…joy in the making!
              </p>
            </div>

            <div 
              onClick={handleNavigateToCheckout}
              className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              Give us a moment…
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div
      className="w-full h-screen bg-[#f8f9fa] overflow-hidden"
      data-model-id="2111:13067"
    >
      <div className="relative w-full h-full bg-[url(https://c.animaapp.com/md7elizhDnAGWm/img/frame-48095759.svg)] bg-[100%_100%]">
        <div className="flex w-full h-[79px] items-center justify-between px-8 pt-4 pb-4 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26]">
          <div className="font-quicksand text-xl font-bold">
            <span className="text-[#1E293B]">Loop</span>
            <span className="text-[#7C3AED]">Joy</span>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M19 6.33323C19 7.6379 18.5044 8.9766 17.7484 10.2631C17.5315 9.71444 17.1974 9.20619 16.7437 8.7866C17.1586 7.94585 17.4167 7.1154 17.4167 6.33323C17.4167 4.18781 15.785 2.3749 13.8542 2.3749C12.0848 2.3749 11.077 3.09135 10.3977 3.71598L7.37042 6.5256C7.09096 6.80585 7.02446 7.2769 7.24138 7.57852C7.38308 7.77565 7.59129 7.8944 7.82642 7.9134C8.05996 7.93477 8.28638 7.84927 8.45025 7.68381L11.7539 4.5211L12.8488 5.66427L11.8687 6.6024L15.6267 9.90048C16.507 10.6731 16.724 11.9707 16.131 12.9183C15.766 13.501 15.1699 13.8929 14.4962 13.9918C14.4503 13.9981 14.4052 14.0037 14.3593 14.0076C14.3561 14.4154 14.2476 14.8191 14.0252 15.1754C13.6602 15.758 13.0641 16.1499 12.3904 16.2489C12.2439 16.2694 12.0983 16.2781 11.9526 16.271C11.9098 16.5734 11.8069 16.8679 11.6399 17.1347C11.2749 17.7174 10.6788 18.1085 10.0051 18.2074C9.89188 18.2241 9.77867 18.232 9.66704 18.232C9.10733 18.232 8.56425 18.0301 8.13833 17.6556L5.681 15.4516C3.08829 13.1099 0 9.62735 0 6.33323C0 3.2774 2.3085 0.791563 5.14583 0.791563C6.41488 0.791563 7.38863 1.08923 8.15258 1.47952L6.88671 2.65435C6.40379 2.48494 5.83379 2.3749 5.14583 2.3749C3.21496 2.3749 1.58333 4.18781 1.58333 6.33323C1.58333 8.45015 3.41446 11.2709 6.74104 14.2768L9.19046 16.4729C9.34642 16.6099 9.56254 16.6732 9.77629 16.6423C9.99321 16.6106 10.1792 16.4879 10.2988 16.2956C10.4809 16.0034 10.3906 15.5696 10.0922 15.3084L7.55329 12.8946L8.64262 11.7451L11.5892 14.527C11.7309 14.6505 11.9502 14.7154 12.1608 14.6821C12.3777 14.6505 12.5638 14.527 12.6833 14.3354C12.8654 14.0433 12.7751 13.6094 12.4767 13.3474L9.65833 10.7959L10.7152 9.61786L13.6776 12.2541C13.836 12.3934 14.0529 12.4584 14.2658 12.4251C14.4828 12.3934 14.6688 12.2699 14.7883 12.0784C14.9704 11.7862 14.8802 11.3524 14.5817 11.0904L10.72 7.70123L9.55621 8.8151C9.12 9.2521 8.51754 9.4991 7.89054 9.4991C7.06246 9.4991 6.36658 9.07477 5.95492 8.50319C5.28596 7.57377 5.42133 6.23348 6.27 5.38481L9.32187 2.55223C10.1468 1.7946 11.51 0.790771 13.8526 0.790771C16.6899 0.790771 18.9984 3.2766 18.9984 6.33244L19 6.33323Z" fill="#001D3D"/>
            </svg>
            <span className="text-[14px] text-[#1E293B] font-medium">245 Moments of kindness</span>
          </button>
        </div>

        <div className="flex flex-col w-full h-2 items-start gap-2 absolute top-[83px] left-0.5 bg-[#7f47fe1a]">
          <div className="relative flex-1 self-stretch w-full grow bg-[#7f47fe]" />
        </div>

        <div className="flex flex-col w-[437px] items-center gap-[21px] absolute top-[150px] left-1/2 transform -translate-x-1/2">
          <img
            className="relative w-[55.15px] h-[55.15px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/md7elizhDnAGWm/img/image-14.png"
          />

          <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#635bff] text-lg text-center tracking-[0] leading-[27px]">
              JOY LOADING…
            </div>

            <p className="relative max-w-[811px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[52px] text-center tracking-[-1.04px] leading-[62.4px]">
              We're processing your payment faster than you can say
              "loop-de-loop joy explosion"!
            </p>
          </div>

          <div 
            onClick={handleNavigateToCheckout}
            className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg text-center tracking-[0] leading-[27px] cursor-pointer hover:opacity-80 transition-opacity"
          >
            Hang tight…
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;