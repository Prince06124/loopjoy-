
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendAnotherGift = () => {
    navigate('/checkout');
  };

  // Mobile View
  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#f8f9fa]">
        {/* Header */}
        <div className="flex w-full h-[72px] items-center justify-between px-4 bg-white border-b border-[#001d3d26]">
          <p className="[font-family:'Quicksand',Helvetica] font-bold text-2xl">
            <span className="text-[#001d3d]">Loop</span>
            <span className="text-[#789af7]">Joy</span>
          </p>

          <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-[10px] border border-solid border-[#789af7]">
            <div className="w-3.5 h-3.5">
              <img
                className="w-3.5 h-[13px]"
                alt="Vector"
                src="https://c.animaapp.com/md8rkeihb9axR9/img/vector-1.svg"
              />
            </div>
            <div className="[font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px]">
              245 Moments of kindness
            </div>
          </div>
        </div>

        {/* Purple Line */}
        <div className="w-full h-2 bg-[#7f47fe1a]">
          <div className="h-full bg-[#7f47fe]" />
        </div>

        {/* Main Content */}
        <div className="px-4 py-8">
          {/* Success Icon */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-[93.49px] h-[93.49px]">
              <div className="relative w-[95px] h-[88px] top-[3px]">
                <div className="absolute w-20 h-20 top-1 left-2 bg-[#50b87d] rounded-[40.07px] blur-[32.71px] opacity-70" />
                <div className="absolute w-[81px] h-[73px] top-2 left-[7px] rounded-[30.72px] rotate-[-12.19deg]">
                  <img
                    className="absolute w-[58px] h-[49px] top-[11px] left-3 rotate-[12.19deg] object-cover"
                    alt="Image"
                    src="https://c.animaapp.com/md8rkeihb9axR9/img/image.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="[font-family:'Quicksand',Helvetica] text-[#50b87d] tracking-[-0.36px] leading-[21.6px] font-bold text-lg mb-2">
              PAYMENT SUCCESSFUL! 🎉
            </div>
            <p className="[font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-[27px] tracking-[-0.54px] leading-[35.1px]">
              Hooray! Your gift's on the way!
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <p className="opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-base text-center leading-6">
              Thanks for spreading the love with LoopJoy. Your recipient's day
              is about to get a whole lot brighter thanks to you!
            </p>
            <p className="opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-base text-center leading-6">
              Need to send another gift? We're ready to make it happen!
            </p>
          </div>

          {/* Send Another Gift Button */}
          <button 
            onClick={handleSendAnotherGift}
            className="w-full h-12 flex items-center justify-center bg-[#789af7] rounded-2xl hover:bg-[#6a8ae7] transition-colors mb-12"
          >
            <span className="[font-family:'Quicksand',Helvetica] font-semibold text-white text-base leading-[22.6px]">
              Send another gift
            </span>
          </button>

          {/* Link Section */}
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center gap-2 p-2">
              <div className="w-[17px] h-[17px] bg-[url(https://c.animaapp.com/md8rkeihb9axR9/img/vector.svg)] bg-[100%_100%]" />
              <p className="w-[148px] opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-sm text-center leading-[21px]">
                See your payment breakdown below
              </p>
              <img
                className="w-6 h-6"
                alt="Keyboard double"
                src="https://c.animaapp.com/md8rkeihb9axR9/img/keyboard-double-arrow-down.png"
              />
            </div>
          </div>

          {/* Share Link */}
          <div className="mb-8">
            <p className="opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-sm text-center leading-[21px] mb-4">
              Let your recipient know you sent them a greeting by sharing with them
              the link below.
            </p>

            <div className="flex items-center gap-[15.7px] px-4 py-2 bg-white rounded-[9.92px] border-[1.5px] border-solid border-[#001d3d1a]">
              <div className="flex items-center gap-[4.13px] flex-1">
                <div className="w-[12.39px] h-[12.39px] opacity-30">
                  <img
                    className="w-[11px] h-[11px]"
                    alt="Vector"
                    src="https://c.animaapp.com/md8rkeihb9axR9/img/vector-2.svg"
                  />
                </div>
                <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[13.2px] leading-[19.8px]">
                  loopjoy.org/saddubdfhd4
                </div>
              </div>

              <button className="flex items-center justify-center px-5 py-2 bg-[#789af7] rounded-[7.44px] hover:bg-[#6a8ae7] transition-colors">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[13.2px] leading-[18.6px]">
                  Copy
                </span>
              </button>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-2xl border-[1.5px] border-solid border-[#001d3d26]">
            <div className="h-[59px] border-b border-[#001d3d1a] px-6 flex items-center">
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] font-bold text-lg leading-[27px]">
                Payment Summary
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[23.4px]">
                  LoopJoy Gift Card
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base tracking-[-0.32px] leading-6">
                  $50
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[23.4px]">
                  Your media
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base tracking-[-0.32px] leading-6">
                  $0
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4 border-t border-[#001d3d1a]">
              <div className="flex items-center justify-between">
                <div className="opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-lg leading-[27px]">
                  Subtotal
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base tracking-[-0.32px] leading-6">
                  $50.00
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-lg leading-[27px]">
                    Processing fee
                  </div>
                  <div className="w-[18px] h-[18px] opacity-40">
                    <img
                      className="w-[15px] h-[15px]"
                      alt="Vector"
                      src="https://c.animaapp.com/md8rkeihb9axR9/img/vector-3.svg"
                    />
                  </div>
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base tracking-[-0.32px] leading-6">
                  $3.95
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-[#001d3d1a]">
              <div className="flex items-center justify-between">
                <div className="opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-lg leading-[27px]">
                  Total
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-[32px] tracking-[-0.64px] leading-[48px]">
                  $53.95
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Header */}
      <div className="flex w-full h-16 items-center justify-between px-8 py-3 bg-white border-b border-gray-100">
        <div className="font-quicksand text-xl font-bold">
          <span className="text-[#1E293B]">Loop</span>
          <span className="text-[#7C3AED]">Joy</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M19 6.33323C19 7.6379 18.5044 8.9766 17.7484 10.2631C17.5315 9.71444 17.1974 9.20619 16.7437 8.7866C17.1586 7.94585 17.4167 7.1154 17.4167 6.33323C17.4167 4.18781 15.785 2.3749 13.8542 2.3749C12.0848 2.3749 11.077 3.09135 10.3977 3.71598L7.37042 6.5256C7.09096 6.80585 7.02446 7.2769 7.24138 7.57852C7.38308 7.77565 7.59129 7.8944 7.82642 7.9134C8.05996 7.93477 8.28638 7.84927 8.45025 7.68381L11.7539 4.5211L12.8488 5.66427L11.8687 6.6024L15.6267 9.90048C16.507 10.6731 16.724 11.9707 16.131 12.9183C15.766 13.501 15.1699 13.8929 14.4962 13.9918C14.4503 13.9981 14.4052 14.0037 14.3593 14.0076C14.3561 14.4154 14.2476 14.8191 14.0252 15.1754C13.6602 15.758 13.0641 16.1499 12.3904 16.2489C12.2439 16.2694 12.0983 16.2781 11.9526 16.271C11.9098 16.5734 11.8069 16.8679 11.6399 17.1347C11.2749 17.7174 10.6788 18.1085 10.0051 18.2074C9.89188 18.2241 9.77867 18.232 9.66704 18.232C9.10733 18.232 8.56425 18.0301 8.13833 17.6556L5.681 15.4516C3.08829 13.1099 0 9.62735 0 6.33323C0 3.2774 2.3085 0.791563 5.14583 0.791563C6.41488 0.791563 7.38863 1.08923 8.15258 1.47952L6.88671 2.65435C6.40379 2.48494 5.83379 2.3749 5.14583 2.3749C3.21496 2.3749 1.58333 4.18781 1.58333 6.33323C1.58333 8.45015 3.41446 11.2709 6.74104 14.2768L9.19046 16.4729C9.34642 16.6099 9.56254 16.6732 9.77629 16.6423C9.99321 16.6106 10.1792 16.4879 10.2988 16.2956C10.4809 16.0034 10.3906 15.5696 10.0922 15.3084L7.55329 12.8946L8.64262 11.7451L11.5892 14.527C11.7309 14.6505 11.9502 14.7154 12.1608 14.6821C12.3777 14.6505 12.5638 14.527 12.6833 14.3354C12.8654 14.0433 12.7751 13.6094 12.4767 13.3474L9.65833 10.7959L10.7152 9.61786L13.6776 12.2541C13.836 12.3934 14.0529 12.4584 14.2658 12.4251C14.4828 12.3934 14.6688 12.2699 14.7883 12.0784C14.9704 11.7862 14.8802 11.3524 14.5817 11.0904L10.72 7.70123L9.55621 8.8151C9.12 9.2521 8.51754 9.4991 7.89054 9.4991C7.06246 9.4991 6.36658 9.07477 5.95492 8.50319C5.28596 7.57377 5.42133 6.23348 6.27 5.38481L9.32187 2.55223C10.1468 1.7946 11.51 0.790771 13.8526 0.790771C16.6899 0.790771 18.9984 3.2766 18.9984 6.33244L19 6.33323Z" fill="#001D3D"/>
          </svg>
          <span className="text-[14px] text-[#1E293B] font-medium">245 Moments of kindness</span>
        </div>
      </div>

      {/* Purple Line */}
      <div className="w-full h-1 bg-[#7C3AED]" />

      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto px-8 py-16 flex justify-between items-start gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center max-w-[500px]">
          <div className="relative w-[118.68px] h-[118.68px] mb-8">
            <div className="relative w-[120px] h-28 top-1 -left-px">
              <div className="absolute w-[102px] h-[102px] top-[5px] left-2.5 bg-[#50b87d] rounded-[50.87px] blur-[41.52px] opacity-70" />
              <div className="absolute w-[103px] h-[92px] top-2.5 left-[9px] rounded-[39px] rotate-[-12.19deg]">
                <img
                  className="absolute w-[73px] h-[62px] top-3.5 left-[15px] rotate-[12.19deg] object-cover"
                  alt="Success Icon"
                  src="https://c.animaapp.com/md8qs0d63Qiy7P/img/image.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-full mb-8">
            <div className="[font-family:'Quicksand',Helvetica] font-bold text-[#50b87d] text-lg tracking-[-0.36px] leading-[21.6px]">
              WOOHOO! PAYMENT COMPLETE
            </div>
            <p className="[font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-4xl tracking-[-0.72px] leading-[50.4px]">
              You're Officially a Joy Dealer!
            </p>
          </div>

          <p className="opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 mb-8">
            Thanks for spreading the loop-joy! Your gift is on route, and your
            recipient's day is about to get a whole lot brighter.
          </p>

          <div className="w-full space-y-4 mb-8">
            <p className="opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6">
              We've created a special link especially for your recipient. Send it to
              them wherever they hang out online so they can see what we made together!
            </p>

            <div className="flex items-center gap-[15.7px] pl-[19.01px] pr-[6.61px] py-[6.61px] w-full bg-white rounded-[9.92px] border-[1.5px] border-solid border-[#001d3d1a]">
              <div className="flex items-center gap-[4.13px] flex-1">
                <div className="relative w-[12.39px] h-[12.39px] opacity-30">
                  <img
                    className="absolute w-[11px] h-[11px] top-px left-px"
                    alt="Link Icon"
                    src="https://c.animaapp.com/md8qs0d63Qiy7P/img/vector-1.svg"
                  />
                </div>
                <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[13.2px] tracking-[0] leading-[19.8px]">
                  loopjoy.org/saddubdfhd4
                </div>
              </div>

              <button className="flex items-center justify-center px-5 py-2 bg-[#789af7] rounded-[7.44px] hover:bg-[#6a8ae7] transition-colors">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[13.2px] leading-[18.6px]">
                  Copy
                </span>
              </button>
            </div>
          </div>

          <div className="w-full space-y-4">
            <p className="opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-base leading-6">
              <span className="font-bold">Want to send another gift?</span>
              <br />
              We get it, Loop-Joying is kinda addictive. We're ready for round 2
              when you are! 💪
            </p>

            <button 
              onClick={handleSendAnotherGift}
              className="w-full py-3 bg-[#789af7] text-white font-medium rounded-xl hover:bg-[#6a8ae7] transition-colors"
            >
              <span className="[font-family:'Quicksand',Helvetica] font-semibold text-white text-base leading-[22.6px]">
                Send another gift
              </span>
            </button>
          </div>
        </div>

        {/* Right Content - Payment Summary */}
        <div className="w-[400px] bg-white rounded-2xl border border-gray-100">
          <div className="p-6 border-b border-gray-50">
            <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg leading-[27px]">
              Payment Summary
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Gift Card Details */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-[126px] h-[69.62px] rounded-[6.9px] border-[0.29px] border-solid border-[#001d3d26] bg-[linear-gradient(332deg,rgba(167,197,255,0.67)_0%,rgba(255,223,235,0.67)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
                  <div className="absolute w-1 h-[70px] top-0 left-[61px] bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />
                  <div className="absolute w-1 h-[126px] -top-7 left-[61px] -rotate-90 bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />
                  <img
                    className="absolute w-[17px] h-[11px] top-[53px] left-[101px]"
                    alt="Card Detail"
                    src="https://c.animaapp.com/md8qs0d63Qiy7P/img/image-286.png"
                  />
                  <p className="absolute h-[7px] top-1 left-[7px] [font-family:'Quicksand',Helvetica] font-bold text-[6.2px] leading-[7.5px]">
                    <span className="text-[#001d3d]">Loop</span>
                    <span className="text-[#789af7]">Joy</span>
                  </p>
                  <img
                    className="absolute w-12 h-12 top-[15px] left-10 object-cover"
                    alt="Gift Card"
                    src="https://c.animaapp.com/md8qs0d63Qiy7P/img/image-288.png"
                  />
                  <div className="absolute top-[54px] left-[7px] flex items-end gap-[0.89px]">
                    <span className="font-bold text-[4.6px] text-[#001d3d]">$</span>
                    <div className="flex items-end">
                      <span className="font-bold text-[9.2px] text-[#001d3d]">50</span>
                      <span className="font-bold text-[5.5px] text-[#001d3d]">.00</span>
                    </div>
                  </div>
                  <div className="absolute top-1 left-[98px] font-semibold text-[#001d3d] text-[4.6px] leading-[6.9px]">
                    Gift Card
                  </div>
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base leading-[20.8px]">
                  LoopJoy Gift Card
                </div>
              </div>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg leading-[27px]">
                $50.00
              </span>
            </div>

            {/* Media Details */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-[128.64px] h-[76.53px] bg-[#001d3d1a] rounded-[6.6px] border-[0.66px] border-solid">
                  <div className="absolute w-[38px] h-[38px] top-[17px] left-11 opacity-[0.44]">
                    <img
                      className="absolute w-[30px] h-6 top-[7px] left-1"
                      alt="Media Icon"
                      src="https://c.animaapp.com/md8qs0d63Qiy7P/img/vector-3.svg"
                    />
                  </div>
                </div>
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base leading-[20.8px]">
                  Your media
                </span>
              </div>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg leading-[27px]">
                $0.00
              </span>
            </div>
          </div>

          <div className="p-6 border-t border-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-lg leading-[27px]">
                Subtotal
              </span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg leading-[27px]">
                $50.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-lg leading-[27px]">
                  Processing fee
                </span>
                <div className="w-[18px] h-[18px] opacity-40">
                  <img
                    className="w-[15px] h-[15px] mt-0.5 ml-0.5"
                    alt="Info Icon"
                    src="https://c.animaapp.com/md8qs0d63Qiy7P/img/vector.svg"
                  />
                </div>
              </div>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg leading-[27px]">
                $3.95
              </span>
            </div>
          </div>

          <div className="p-6 border-t border-gray-50">
            <div className="flex justify-between items-center">
              <span className="opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d] text-lg leading-[27px]">
                Total
              </span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-[32px] leading-[48px]">
                $53.95
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;