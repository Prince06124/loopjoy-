import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Sendgift = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [giftAmount, setGiftAmount] = useState(50);
  const [selectedAmount, setSelectedAmount] = useState(50);
  
  const handleAmountChange = (amount) => {
    setGiftAmount(amount);
    setSelectedAmount(amount);
  };
  
  const handleIncrement = () => {
    setGiftAmount(prevAmount => prevAmount + 10);
  };
  
  const handleDecrement = () => {
    if (giftAmount > 10) {
      setGiftAmount(prevAmount => prevAmount - 10);
    }
  };
  
  const predefinedAmounts = [30, 100, 250, 500];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Mobile View
  if (isMobile) {
    return (
      <div className="relative w-[390px] h-[1286px] bg-[#f8f9fa]" data-model-id="2111:28466">
        {/* Header */}
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
                src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/vector.svg"
              />
            </div>

            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Moments of kindness
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col w-[390px] h-2 items-start gap-2 absolute top-[72px] left-0 bg-[#7f47fe1a]">
          <div className="relative flex-1 w-[285px] grow bg-[#7f47fe]" />
        </div>

        {/* Title Section */}
        <div className="flex flex-col w-[342px] items-center justify-center gap-4 absolute top-[98px] left-6">
          <div className="relative w-[83.07px] h-[83.07px]">
            <div className="relative w-[84px] h-[78px] top-[3px]">
              <div className="absolute w-[71px] h-[71px] top-1 left-[7px] bg-[#ffe187] rounded-[35.61px] blur-[29.07px] opacity-70" />

              <div className="absolute w-[72px] h-16 top-[7px] left-1.5 rounded-[27.3px] rotate-[-12.19deg]">
                <img
                  className="absolute w-[46px] h-10 top-[9px] left-[13px] rotate-[12.19deg]"
                  alt="Image"
                  src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/image.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#7f47fe] text-base text-center tracking-[-0.32px] leading-[19.2px]">
              ENTER GIFT CARD AMOUNT
            </div>

            <p className="relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-[27px] text-center tracking-[-0.54px] leading-[35.1px]">
              Enter how much you want to gift
            </p>

            <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
              Euismod amet sed non tellus consectetur. In vel volutpat ultrices
              mollis in.
            </p>
          </div>
        </div>

        {/* Gift Card Preview */}
        <div className="absolute w-[342px] h-[189px] top-[407px] left-6 rounded-[18.74px] border-[0.78px] border-solid border-[#001d3d26] bg-[linear-gradient(332deg,rgba(167,197,255,0.67)_0%,rgba(255,223,235,0.67)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="absolute w-2.5 h-[189px] top-0 left-[166px] bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />

          <div className="absolute w-2.5 h-[342px] top-[-77px] left-[166px] -rotate-90 bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />

          <img
            className="absolute w-[47px] h-[29px] top-36 left-[274px]"
            alt="Image"
            src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/image-286.png"
          />

          <p className="absolute h-5 top-2.5 left-[19px] [font-family:'Quicksand',Helvetica] font-bold text-transparent text-[16.9px] tracking-[0] leading-[20.2px] whitespace-nowrap">
            <span className="text-[#001d3d]">Loop</span>
            <span className="text-[#789af7]">Joy</span>
          </p>

          <img
            className="absolute w-[131px] h-[131px] top-10 left-[109px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/image-288.png"
          />

          <div className="inline-flex items-end justify-center gap-[2.42px] absolute top-[147px] left-[19px]">
            <div className="relative self-stretch w-[8.59px] mt-[-0.61px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[12.5px] tracking-[-0.25px] leading-[17.5px] font-bold text-[#001d3d]">
              $
            </div>

            <div className="inline-flex items-end relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-0.78px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[25px] tracking-[-1.50px] leading-[25.0px] whitespace-nowrap">
                {giftAmount}
              </div>

              <div className="ml-[-3.12px] text-[14.8px] tracking-[-0.89px] leading-[14.8px] relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] whitespace-nowrap">
                .00
              </div>
            </div>
          </div>

          <div className="absolute top-3 left-[265px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-[12.5px] tracking-[0] leading-[18.7px] whitespace-nowrap">
            Gift Card
          </div>
        </div>

        {/* Amount Selection Section */}
        <div className="flex flex-col w-[342px] items-center justify-center gap-[33px] p-6 absolute top-[637px] left-6 bg-white rounded-3xl border border-solid border-[#001d3d26]">
          <div className="flex flex-col items-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-16 h-16 object-cover"
                alt="Image"
                src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/image-287.png"
              />

              <div className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-2xl text-center tracking-[-0.48px] leading-[33.6px]">
                  Select an amount
                </div>

                <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
                  Enter or choose the amount you want to add to your giftcard
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-[74px] items-center justify-between px-[11px] py-0 relative self-stretch w-full rounded-2xl border-[1.5px] border-solid border-[#001d3d1a]">
                <button 
                  className="relative w-8 h-6 flex items-center justify-center cursor-pointer rounded-full bg-[#f8f9fa]"
                  onClick={handleDecrement}
                >
                  <div className="w-4 h-0.5 bg-[#001d3d]"></div>
                </button>

                <div className="inline-flex items-end justify-center gap-[3.11px] relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[11px] mt-[-0.78px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-base tracking-[-0.32px] leading-[22.4px] font-bold text-[#001d3d]">
                    $
                  </div>

                  <div className="inline-flex items-end relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[32px] tracking-[-1.92px] leading-8 whitespace-nowrap">
                      {giftAmount}
                    </div>

                    <div className="-ml-1 text-[19px] tracking-[-1.14px] leading-[19px] relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] whitespace-nowrap">
                      .00
                    </div>
                  </div>
                </div>

                <button 
                  className="relative w-8 h-6 flex items-center justify-center cursor-pointer rounded-full bg-[#f8f9fa]"
                  onClick={handleIncrement}
                >
                  <div className="w-4 h-0.5 bg-[#001d3d]"></div>
                  <div className="w-0.5 h-4 bg-[#001d3d] absolute"></div>
                </button>

                <img
                  className="absolute w-0.5 h-[74px] top-px left-[45px]"
                  alt="Line"
                  src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/line-1-1.svg"
                />

                <img
                  className="absolute w-0.5 h-[72px] top-px left-[248px]"
                  alt="Line"
                  src="https://c.animaapp.com/md8f6jxzZ5L8JM/img/line-1.svg"
                />
              </div>

              <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
                or select an amount from below
              </p>

              <div className="flex flex-wrap items-center justify-center gap-[8px_8px] relative self-stretch w-full flex-[0_0_auto]">
                {predefinedAmounts.map((amount) => (
                  <div 
                    key={amount} 
                    className="relative w-[75px] h-9 cursor-pointer"
                    onClick={() => handleAmountChange(amount)}
                  >
                    <div className="relative w-[73px] h-9 rounded-[50px]">
                      <div 
                        className={`absolute w-[73px] h-9 top-0 left-0 rounded-[50px] border border-solid ${
                          selectedAmount === amount 
                            ? "bg-[#789af7] border-[#789af7]" 
                            : "bg-white border-[#001d3d] opacity-20"
                        }`}
                      />
                      <div 
                        className={`absolute top-2 left-0 right-0 text-center [font-family:'Quicksand',Helvetica] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap font-bold ${
                          selectedAmount === amount ? "text-white" : "text-[#001d3d]"
                        }`}
                      >
                        ${amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col w-[390px] items-center justify-center gap-8 px-6 py-7 absolute top-[1116px] left-0 bg-white border-t [border-top-style:solid] border-[#001d3d26]">
          <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
              Step 2 of 4
            </div>

            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-lg tracking-[-0.18px] leading-[27px] whitespace-nowrap">
              Add gift card
            </div>
          </div>

          <div className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <button 
              onClick={() => navigate('/record')}
              className="flex h-12 items-center justify-center gap-1.5 px-[18px] py-0 relative flex-1 grow rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#789af7] cursor-pointer"
            >
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#789af7] text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Back
              </div>
            </button>

            <button 
              onClick={() => navigate('/opengift')}
              className="flex h-12 items-center justify-center gap-1.5 px-[18px] py-0 relative flex-1 grow bg-[#789af7] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Add gift
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-4 pb-4">
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

      {/* Progress Bar */}
      <div className="w-full h-[8px]">
        <div className="w-full h-full bg-[rgba(127,71,254,0.10)]">
          <div className="h-full bg-[#7F47FE] w-[66.66%]"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 grid grid-cols-2 gap-4 px-8 transform scale-[0.93] origin-top">
        {/* LEFT - Logo and Content Section */}
        <div className="flex flex-col justify-center items-end -mt-5">
          <div className="relative">
            <div className="flex flex-col items-start gap-12 w-[438px] ml-24">
              {/* Glowing Logo */}
              <div className="relative">
                <div className="relative w-20 h-20 ml-5 position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 269 269" fill="none" className="absolute -left-16 -top-16">
                    <g opacity="0.7" filter="url(#filter0_f_2111_476)">
                      <circle cx="134.867" cy="134.867" r="60.8667" fill="#FFE187"/>
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
              <div className="flex flex-col gap-4">
                <span className="uppercase font-quicksand text-[14px] font-[700] leading-[120%] tracking-[-0.36px] text-[#7F47FE] block">
                  CHOOSE YOUR GIFT AMOUNT HERE
                </span>
                <h2 className="font-quicksand text-[32px] font-[700] leading-[140%] tracking-[-0.72px] text-[#001D3D] w-[360px]">
                  What's Your Joy Budget?
                </h2>
                <p className="font-jakarta text-[14px] font-[400] leading-[150%] text-[#001D3D] opacity-60 w-[360px]">
                  Select how much you want to give. Hey, generosity looks good on you ☺
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* RIGHT - Gift Card and Amount Selection */}
        <div className="flex flex-col items-center mt-3 justify-center gap-3">
          {/* Gift Card */}
          <div className="w-[438px] h-[242px] rounded-3xl border border-solid border-[#001d3d26] bg-[linear-gradient(332deg,rgba(167,197,255,0.67)_0%,rgba(255,223,235,0.67)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] relative">
            <div className="absolute w-[13px] h-[242px] top-0 left-[213px] bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />
            <div className="absolute w-[13px] h-[438px] top-[-98px] left-[212px] -rotate-90 bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />
            <img
              className="absolute w-[60px] h-[37px] top-[185px] left-[351px]"
              alt="Image"
              src="https://c.animaapp.com/md77p8znN916dT/img/image-286.png"
            />
            <p className="absolute h-[26px] top-[13px] left-6 font-quicksand font-bold text-transparent text-[21.6px] tracking-[0] leading-[25.9px] whitespace-nowrap">
              <span className="text-[#001d3d]">Loop</span>
              <span className="text-[#789af7]">Joy</span>
            </p>
            <img
              className="absolute w-[167px] h-[167px] top-[51px] left-[139px] object-cover"
              alt="Image"
              src="https://c.animaapp.com/md77p8znN916dT/img/image-288.png"
            />
            <div className="inline-flex items-end justify-center gap-[3.11px] absolute top-[188px] left-6">
              <div className="relative self-stretch w-[11px] mt-[-0.78px] font-jakarta font-bold text-[#001d3d] text-base tracking-[-0.32px] leading-[22.4px]">
                $
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-jakarta font-bold text-[#001d3d] text-[33px] gap-0.5 tracking-[-0.5px] leading-8 whitespace-nowrap">
                  {giftAmount}
                </div>
                <div className="relative w-fit -ml-1 font-jakarta font-bold text-[#001d3d] text-[19px] tracking-[-0.5px] leading-[19px] whitespace-nowrap">
                  .00
                </div>
              </div>
            </div>
            <div className="absolute top-[15px] left-[340px] font-jakarta font-semibold text-[#001d3d] text-base tracking-[0] leading-6 whitespace-nowrap">
              Gift Card
            </div>
          </div>
          
          {/* Amount Selection */}
          <div className="flex flex-col w-[438px] items-center justify-center gap-[33px] p-2 bottom-1 bg-white rounded-3xl border border-solid border-[#001d3d26]">
            <div className="flex flex-col items-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-[3px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-quicksand font-bold text-[#001d3d] text-2xl tracking-[-0.48px] leading-[33.6px]">
                    Select an amount
                  </div>
                  <p className="relative self-stretch opacity-60 font-jakarta font-normal text-[#001d3d] text-base tracking-[0] leading-6">
                    Enter or choose the amount you want to add to your giftcard
                  </p>
                </div>
                <img
                  className="relative w-24 h-24 object-cover"
                  alt="Image"
                  src="https://c.animaapp.com/md77p8znN916dT/img/image-287.png"
                />
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[390px] h-[74px] items-center justify-between px-[11px] py-0 relative rounded-2xl border-[1.5px] border-solid border-[#001d3d1a]">
                  <button 
                    className="flex items-center justify-center w-6 h-6 cursor-pointer"
                    onClick={handleDecrement}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="#001D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className="inline-flex items-end justify-center gap-[3.11px] relative flex-[0_0_auto]">
                    <div className="relative self-stretch w-[11px] mt-[-0.78px] font-jakarta font-bold text-[#001d3d] text-base tracking-[-0.32px] leading-[22.4px]">
                      $
                    </div>
                    <div className="inline-flex items-end relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-jakarta font-bold text-[#001d3d] text-[32px] tracking-[-0.5px] leading-8 whitespace-nowrap">
                        {giftAmount}
                      </div>
                      <div className="relative w-fit -ml-1 font-jakarta font-bold text-[#001d3d] text-[19px] tracking-[-0.5px] leading-[19px] whitespace-nowrap">
                        .00
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={handleIncrement}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="#001D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <img
                    className="absolute w-0.5 h-[74px] top-px left-[45px]"
                    alt="Line"
                    src="https://c.animaapp.com/md77p8znN916dT/img/line-1-1.svg"
                  />
                  <img
                    className="absolute w-0.5 h-[72px] top-px left-[344px]"
                    alt="Line"
                    src="https://c.animaapp.com/md77p8znN916dT/img/line-1.svg"
                  />
                </div>
                <p className="relative self-stretch opacity-60 font-jakarta font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
                  or select an amount from below
                </p>
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  {predefinedAmounts.map((amount) => (
                    <div 
                      key={amount} 
                      className="relative w-[75px] h-9 cursor-pointer"
                      onClick={() => handleAmountChange(amount)}
                    >
                      <div className="relative w-[73px] h-9 rounded-[50px]">
                        <div 
                          className={`absolute w-[73px] h-9 top-0 left-0 rounded-[50px] border border-solid ${
                            selectedAmount === amount 
                              ? "bg-[#789af7] border-[#789af7]" 
                              : "bg-white border-[#001d3d] opacity-20"
                          }`}
                        />
                        <div 
                          className={`absolute top-2 left-0 right-0 text-center font-quicksand text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap font-bold ${
                            selectedAmount === amount ? "text-white" : "text-[#001d3d]"
                          }`}
                        >
                          ${amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Navigation */}
      <div className="flex items-center justify-between px-8 py-3 mt-auto border-t border-gray-100">
        <button 
          onClick={() => navigate('/record')}
          className="flex items-center justify-center h-[54px] px-6 gap-[6px] rounded-[16px] border-[1.5px] border-[#D9D9D9]">
          Back
        </button>
        <div className="flex flex-col items-center">
          <div className="text-[#64748B] text-[18px] font-quicksand">Step 2 of 4</div>
          <span className="font-quicksand text-[18px] font-[700] leading-[150%] tracking-[-0.18px] text-[#001D3D]">
            Add gift card
          </span>
        </div>
        <button 
          onClick={() => navigate('/opengift')}
          className="flex items-center justify-center h-[54px] px-6 gap-[6px] rounded-[16px] bg-[#789AF7] text-white">
          Add gift
        </button>
      </div>
    </div>
  );
};

export default Sendgift;