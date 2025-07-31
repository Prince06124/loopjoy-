import React from "react";

export const DesktopAddText = ({ onClose, onTextAdd }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8 p-4 md:p-9 w-[90%] max-w-[320px] md:max-w-[496px] bg-[#25282D] rounded-[20px] md:rounded-[32px] border border-[rgba(0,29,61,0.15)] relative">
        {/* Close button */}
        <div onClick={onClose} className="flex w-10 h-10 items-center justify-center absolute top-3 left-6 bg-[#ffffff45] rounded-full cursor-pointer z-20">
          <span className="text-white text-lg">×</span>
        </div>

        <div className="self-stretch text-center text-white font-quicksand text-[18px] md:text-[24px] font-bold leading-[140%] tracking-[-0.48px]">
          Add text
        </div>

        <div className="flex flex-col w-full">
          <textarea
            placeholder="Tell them something special..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex p-4 items-start gap-2 self-stretch bg-[rgba(255,255,255,0.06)] rounded-lg border-none outline-none resize-none h-20 mb-4 text-white [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[16px] leading-[140%] tracking-[-0.32px] placeholder-white placeholder-opacity-40"
            maxLength={50}
          />
          
          <div className="text-[12px] text-[#a2a8b4] font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] text-right mb-6">
            {text.length}/50
          </div>
        </div>

        <div className="flex gap-2 md:gap-3 w-full mt-4 md:mt-8">
          <button 
            onClick={onClose}
            className="flex h-[40px] md:h-[44px] px-4 md:px-6 justify-center items-center gap-[6px] flex-1 bg-[rgba(255,255,255,0.20)] rounded-[13px]"
          >
            <span className="text-white font-quicksand font-semibold">Cancel</span>
          </button>
          <button 
            onClick={() => {
              if (text.trim()) {
                onTextAdd && onTextAdd(text.trim());
                onClose();
              }
            }}
            className="flex h-[40px] md:h-[44px] px-4 md:px-6 justify-center items-center gap-[6px] flex-1 bg-[#4FBE94] rounded-[13px]"
          >
            <span className="text-white font-quicksand font-semibold">Ok</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopAddText;