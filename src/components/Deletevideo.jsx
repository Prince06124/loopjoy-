import React from "react";
import { useNavigate } from 'react-router-dom';

export const DeleteConfirmationModal = ({ isOpen, onClose, onDelete, isMobile = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Delete Confirmation Modal */}
      <div className={`flex flex-col items-center gap-[34px] p-6 md:p-12 relative bg-white rounded-[30px] md:rounded-[40px] shadow-2xl ${isMobile ? 'w-[90%] max-w-[340px]' : 'w-[455px]'}`}>
        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="absolute w-[102px] h-[102px] top-[-3px] left-[-3px] bg-[#fd4e86] rounded-[50.87px] blur-[41.52px] opacity-70" />

            <img
              className="relative w-[96.47px] h-[96.47px] object-cover"
              alt="Image"
              src="/image 282 (1).png"
            />
          </div>

          <div className={`relative self-stretch font-quicksand font-bold text-[#001d3d] ${isMobile ? 'text-[24px] leading-[30px]' : 'text-[31px] leading-[37.2px]'} text-center tracking-[-1.55px]`}>
            Are you 100% sure?
          </div>

          <p className={`relative self-stretch opacity-60 font-jakarta font-normal text-[#001d3d] text-center tracking-[0] ${isMobile ? 'text-base leading-[24px]' : 'text-lg leading-[27px]'}`}>
            Deleted videos cannot be recovered.
          </p>
        </div>

        <div className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <button 
            onClick={onClose}
            className={`flex items-center justify-center gap-1.5 px-[18px] py-0 relative flex-1 grow rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#789af7] cursor-pointer ${isMobile ? 'h-[56px]' : 'h-[68px]'}`}
          >
            <div className={`relative w-fit font-quicksand font-semibold text-[#789af7] tracking-[0] whitespace-nowrap ${isMobile ? 'text-base leading-[20px]' : 'text-lg leading-[22.6px]'}`}>
              Keep Editing
            </div>
          </button>

          <button 
            onClick={onDelete}
            className={`flex items-center justify-center gap-1.5 px-[18px] py-0 relative flex-1 grow bg-[#f6313a] rounded-2xl overflow-hidden cursor-pointer ${isMobile ? 'h-[56px]' : 'h-[68px]'}`}
          >
            <div className={`relative w-fit font-quicksand font-semibold text-white tracking-[0] whitespace-nowrap ${isMobile ? 'text-base leading-[20px]' : 'text-lg leading-[22.6px]'}`}>
              Delete It
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Keep the original component for backward compatibility
export const Deletevideo = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden">
      <DeleteConfirmationModal 
        isOpen={true}
        onClose={() => navigate('/record')}
        onDelete={() => navigate('/')}
        isMobile={isMobile}
      />
    </div>
  );
};