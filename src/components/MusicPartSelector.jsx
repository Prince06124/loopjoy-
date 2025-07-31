import React, { useState } from "react";

export const MusicPartSelector = ({ song, onClose, onConfirm }) => {
  const [selectedStart, setSelectedStart] = useState(9);
  const totalBars = 30;
  const selectedDuration = 10;

  return (
    <div className="bg-[rgba(69,59,48,0.85)] backdrop-blur-[2px] rounded-2xl p-3 w-full relative">
        {/* Song Info */}
        <div className="flex justify-between items-center mb-1">
          <div className="text-white font-medium text-xs">{selectedStart}s selected</div>
          <div className="text-gray-400 text-xs">0:19 / {song.time}</div>
        </div>

        {/* Waveform Display */}
        <div className="mb-3 px-2">
          <div className="flex items-center justify-center gap-[1px] h-8 relative">
            {/* Light background behind selected area */}
            <div 
              className="absolute bg-[rgba(79,190,148,0.2)] h-full rounded-sm"
              style={{
                left: `${(selectedStart / totalBars) * 100}%`,
                width: `${(selectedDuration / totalBars) * 100}%`
              }}
            />
            {[...Array(totalBars)].map((_, i) => {
              const isSelected = i >= selectedStart && i < selectedStart + selectedDuration;
              const height = Math.random() * 20 + 10; // Shorter heights for waveform effect
              
              return (
                <div
                  key={i}
                  className={`w-1 cursor-pointer transition-colors relative z-10 ${
                    isSelected ? 'bg-[#4FBE94]' : 'bg-gray-500'
                  }`}
                  style={{ height: `${height}px` }}
                  onClick={() => setSelectedStart(Math.max(0, Math.min(i, totalBars - selectedDuration)))}
                />
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={onClose}
            className="flex-1 h-8 bg-[rgba(255,255,255,0.20)] rounded-lg text-white font-semibold text-xs"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              onConfirm && onConfirm({ start: selectedStart, duration: selectedDuration });
              onClose();
            }}
            className="flex-1 h-8 bg-[#4FBE94] rounded-lg text-white font-semibold text-xs"
          >
            Ok
          </button>
        </div>
    </div>
  );
};

export default MusicPartSelector;