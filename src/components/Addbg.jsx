import React from "react";

const colorGrid = [
  // Row 1
  [
    "#fddbe9", "#f1ede4", "#fed1de", "#e71b29", "#ff9d2e",
    "#f5d147", "#f5f16e", "#fcefba", "#f5d145",
  ],
  // Row 2
  [
    "#f5f16e", "#fdf1bb", "#d0f4de", "#b3dbc9", "#b5d9ab",
    "#58b155", "#5b8f69", "#748977", "#79cacd",
  ],
  // Row 3
  [
    "#d7e3f8", "#a0cfeb", "#83add9", "#5780ac", "#4f6c8f",
    "#7284d6", "#c3b1e7", "#e5dcf5", "#7284d6",
  ],
];

export const Addbg = ({ onColorSelect, selectedColor = '#D0F4DE', className = "" }) => {
  const handleClick = (color) => {
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  return (
    <div className={"bg-white rounded-xl p-2 flex flex-col gap-1 shadow-lg relative " + className}>
      {colorGrid.map((row, i) => (
        <div key={i} className="flex flex-row gap-1 justify-center">
          {row.map((color, j) => (
            <div
              key={j}
              className="rounded-full w-4 h-4 cursor-pointer transition-all duration-200 hover:scale-110 relative flex items-center justify-center"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(color)}
            >
              {selectedColor === color && (
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      ))}
      {/* Triangle arrow pointing down */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
    </div>
  );
};
