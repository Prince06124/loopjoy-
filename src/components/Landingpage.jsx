import React from "react";
import { useNavigate } from "react-router-dom";

const DesktopLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex flex-col min-h-screen w-full relative">
      {/* Div that controls full width*/}
      <div className="flex flex-col min-h-screen" style={{ width: 'calc(100% - 580px)' }}>
        {/*LOGO*/}
        <div className="pl-20 pt-8">
          <div className="font-quicksand text-2xl font-bold" style={{ lineHeight: '120%' }}>
            <span style={{ color: '#001D3D' }}>Loop</span>
            <span style={{ color: '#789AF7' }}>Joy</span>
          </div>
        </div>
        {/*Content*/}
        <div className="flex-1 flex items-center">
          <div className="w-full pl-50">
            <div className="max-w-xl pr-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Fun. Personal. Not<br />
                Your Boring Last-<br />
                Minute Gift Card.
              </h1>
              <p className="text-lg text-gray-700 mt-6">
                LoopJoy lets you send animated messages that feel joyful, loving, or supportive—gift card optional.
                It's fast, emotional, and actually fun to receive.
              </p>
              <button 
                className="mt-8 flex items-center justify-center h-[77px] px-[29px] py-[24px] bg-[#789AF7] hover:bg-[#789AF7] text-white rounded-[18px] gap-[6px]"
                onClick={() => navigate("/record")}
              >
                Make someone smile today
              </button>
            </div>
          </div>
        </div>
        {/*Footer-buttons*/}
        <div className="pl-20 pb-6">
          <div className="flex gap-6 text-gray-600">
            <span className="cursor-pointer hover:text-gray-900 transition">2025 LoopJoy</span>
            <span className="cursor-pointer hover:text-gray-900 transition">Create an Account</span>
            <span className="cursor-pointer hover:text-gray-900 transition">Terms and Conditions</span>
            <span className="cursor-pointer hover:text-gray-900 transition">Privacy Policy</span>
          </div>
        </div>
      </div>
      {/*Images*/}
      <div className="absolute top-0 right-0 bottom-0 flex gap-3 pr-10">
        <div className="h-full">
          <img
            src="/side1.png"
            alt="Side Image 1"
            className="h-full w-[140px] md:w-[180px] lg:w-[250px] object-cover rounded-tr-none rounded-br-none rounded-tl-none rounded-bl-none rounded-r-2xl"
          />
        </div>
        <div className="h-full">
          <img
            src="/side2.png"
            alt="Side Image 2"
            className="h-full w-[140px] md:w-[180px] lg:w-[250px] object-cover rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none rounded-l-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const MobileLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex md:hidden min-h-screen w-full flex-col">
      {/*Content*/}
      <div className="flex-1 px-6 pt-8">
        <div className="font-quicksand text-2xl font-bold" style={{ lineHeight: '120%' }}>
          <span style={{ color: '#001D3D' }}>Loop</span>
          <span style={{ color: '#789AF7' }}>Joy</span>
        </div>
        <div className="w-full mt-8">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Fun. Personal. Not Your Boring Last-Minute Gift Card.
          </h1>
          <p className="text-base text-gray-700 mt-4">
            LoopJoy lets you send animated messages that feel joyful, loving, or supportive—gift card optional.
            It's fast, emotional, and actually fun to receive.
          </p>
          <button 
            className="w-full mt-6 flex items-center justify-center h-[77px] px-[29px] py-[24px] bg-[#789AF7] hover:bg-[#789AF7] text-white rounded-[18px] gap-[6px]"
            onClick={() => navigate("/record")}
          >
            Make someone smile today
          </button>
        </div>
      </div>

      {/*Images frame*/}
      <div className="w-screen mt-6">
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="aspect-[3/4]">
            <img
              src="/side3.png"
              alt="Mobile View Frame"
              className="w-full h-full object-cover rounded-tr-none rounded-br-none rounded-tl-none rounded-bl-none rounded-r-2xl rounded-l-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <DesktopLayout />
      <MobileLayout />
    </div>
  );
};

export default LandingPage;
