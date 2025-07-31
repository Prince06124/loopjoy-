import React, { useState, useEffect } from "react";

export const ChooseEmoji = ({ onClose, onEmojiSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const emojis = [
    "group0.svg", "layer-20.svg", "layer-21.svg", "layer-210.svg",
    "layer-211.svg", "layer-212.svg", "layer-213.svg", "layer-214.svg",
    "layer-22.svg", "layer-23.svg", "layer-24.svg", "layer-25.svg",
    "layer-26.svg", "layer-27.svg", "layer-28.svg", "layer-29.svg"
  ];

  const handleEmojiClick = (emoji) => {
    if (onEmojiSelect) {
      onEmojiSelect(emoji);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className={`bg-[#25282D] rounded-[32px] relative ${isMobile ? 'w-[90%] max-w-[360px] h-[85vh] max-h-[600px] p-6' : 'w-[500px] h-[600px] p-8'}`}>
        
        {/* Close button */}
        <div onClick={onClose} className="flex w-10 h-10 items-center justify-center absolute top-3 left-6 bg-[#ffffff45] rounded-full cursor-pointer z-20">
          <span className="text-white text-lg">×</span>
        </div>

        <div className={`flex flex-col items-center justify-center h-full ${isMobile ? 'gap-4' : 'gap-6'}`}>
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-white text-xl text-center tracking-[-0.48px] leading-[33.6px]">
            Choose Emoji
          </div>

          {/* Emoji Grid */}
          <div className={`grid grid-cols-4 gap-4 ${isMobile ? 'max-h-[400px]' : 'max-h-[450px]'} overflow-y-auto p-4 bg-[#ffffff0f] rounded-lg w-full`}>
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="w-12 h-12 flex items-center justify-center hover:bg-[#ffffff20] rounded-lg transition-colors cursor-pointer"
              >
                <img
                  src={`/Emojis/${emoji}`}
                  alt={`emoji-${index}`}
                  className="w-8 h-8"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseEmoji;