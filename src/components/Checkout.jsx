import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState("Year");
  const [deliveryMethod, setDeliveryMethod] = useState("email");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleSendNow = () => {
    navigate('/loadingstate');
  };

  // Mobile View
  if (isMobile) {
    return (
      <div className="relative w-[390px] h-[2116px] bg-[#f8f9fa]">
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
                src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-4.svg"
              />
            </div>

            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Moments of kindness
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col w-[390px] h-2 items-start gap-2 absolute top-[72px] left-0 bg-[#7f47fe1a]">
          <div className="relative flex-1 self-stretch w-full grow bg-[#7f47fe]" />
        </div>

        {/* Your Details Section */}
        <div className="flex flex-col w-[342px] items-start pt-0 pb-6 px-0 absolute top-[130px] left-6 bg-white rounded-2xl border-[1.5px] border-solid border-[#001d3d26]">
          <div className="flex flex-col items-start justify-center gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#001d3d1a]">
            <div className="self-stretch mt-[-1.00px] font-bold text-base tracking-[0] leading-6 relative [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d]">
              Your details
            </div>
          </div>

          <div className="flex flex-col items-start gap-[13px] pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Full name
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <input 
                type="text"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 bg-transparent border-none outline-none w-full"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col h-[167px] items-start gap-[13px] pt-6 pb-0 px-6 relative self-stretch w-full">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              What's your email address?
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <div className="relative w-5 h-5 opacity-40">
                <img
                  className="absolute w-4 h-[13px] top-[3px] left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-1.svg"
                />
              </div>

              <input 
                type="email"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 bg-transparent border-none outline-none w-full"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="relative self-stretch opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-sm tracking-[0] leading-[21px]">
              We'll let you know when they view your message
            </p>
          </div>

          <div className="flex-col w-[342px] items-start pl-6 pr-8 pt-6 pb-0 flex-[0_0_auto] flex gap-2 relative">
            <div className="relative w-[296px] h-[246px] mr-[-10.00px]">
              <p className="absolute w-[290px] top-0 left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px]">
                How should we send your gift?
              </p>

              <div className="flex flex-col w-[294px] items-start gap-4 absolute top-[46px] left-0">
                <div 
                  className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border-[1.5px] border-solid border-[#001d3d1a] cursor-pointer"
                  onClick={() => setDeliveryMethod("link")}
                >
                  <div className="relative w-5 h-5 opacity-40">
                    <img
                      className="absolute w-[17px] h-2 top-1.5 left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector.svg"
                    />
                  </div>

                  <div className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                    Send via link
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Radio button"
                    src={deliveryMethod === "link" 
                      ? "https://c.animaapp.com/md8p6p6uIOANLl/img/radio-button-checked.png"
                      : "https://c.animaapp.com/md8p6p6uIOANLl/img/radio-button-unchecked.png"}
                  />
                </div>

                <div 
                  className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a] cursor-pointer"
                  onClick={() => setDeliveryMethod("phone")}
                >
                  <div className="w-5 h-5 relative opacity-40">
                    <img
                      className="absolute w-4 h-4 top-0.5 left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-6.svg"
                    />
                  </div>

                  <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] relative">
                    Phone number
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Radio button"
                    src={deliveryMethod === "phone"
                      ? "https://c.animaapp.com/md8p6p6uIOANLl/img/radio-button-checked.png"
                      : "https://c.animaapp.com/md8p6p6uIOANLl/img/radio-button-unchecked-1.png"}
                  />
                </div>

                <div 
                  className={`h-14 items-center px-4 py-0 self-stretch w-full rounded-2xl border-[1.5px] border-solid ${deliveryMethod === "email" ? "border-[#001d3d]" : "border-[#001d3d1a]"} flex gap-2 relative cursor-pointer`}
                  onClick={() => setDeliveryMethod("email")}
                >
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-4 h-[13px] top-[3px] left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-1.svg"
                    />
                  </div>

                  <div className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                    example@email.com
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Radio button checked"
                    src={deliveryMethod === "email"
                      ? "https://c.animaapp.com/md8p6p6uIOANLl/img/radio-button-checked.png"
                      : "https://c.animaapp.com/md8p6p6uIOANLl/img/radio-button-unchecked.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="flex flex-col w-[342px] items-start pt-0 pb-6 px-0 absolute top-[796px] left-6 bg-white rounded-2xl border-[1.5px] border-solid border-[#001d3d26]">
          <div className="flex flex-col items-start justify-center gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#001d3d1a]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-base tracking-[0] leading-6">
              How would you like to pay?
            </p>
          </div>

          <div className="flex flex-col items-start gap-[13px] pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Name on card
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <input 
                type="text"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 bg-transparent border-none outline-none w-full"
                placeholder="Enter name"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[13px] pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Debit/Credit card number
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <input 
                type="text"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 bg-transparent border-none outline-none w-full"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />

              <img
                className="relative w-9 h-[22.52px]"
                alt="Image"
                src="https://c.animaapp.com/md8p6p6uIOANLl/img/image-286.png"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[13px] pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Expiration date
            </div>

            <select 
              className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full bg-[#ebebeb] rounded-2xl border border-solid border-[#001d3d1a] appearance-none cursor-pointer"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="Month">Month</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

            <select 
              className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full bg-[#ebebeb] rounded-2xl border border-solid border-[#001d3d1a] appearance-none cursor-pointer"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="Year">Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>

          <div className="flex flex-col items-start gap-[19px] pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Security code
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <input 
                type="text"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 bg-transparent border-none outline-none w-full"
                placeholder="1234"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="flex flex-col w-[342px] items-start absolute top-[1451px] left-6 bg-white rounded-2xl border-[1.5px] border-solid border-[#001d3d26]">
          <div className="relative self-stretch w-full h-[59px] border-b [border-bottom-style:solid] border-[#001d3d1a]">
            <div className="absolute top-[22px] left-6 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
              Order summary
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-[22px] p-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[9px] relative flex-[0_0_auto]">
              <div className="flex w-[294px] items-center justify-between relative flex-[0_0_auto]">
                <div className="relative w-[169px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[23.4px]">
                  LoopJoy Gift Card
                </div>

                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                    $50.00
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center justify-center relative flex-[0_0_auto] cursor-pointer">
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#007aff] text-base tracking-[-0.32px] leading-[22.6px] whitespace-nowrap">
                  Edit amount
                </div>

                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-1.5 h-2.5 top-[5px] left-[7px]"
                    alt="Vector"
                    src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-[9px] relative flex-[0_0_auto]">
              <div className="flex w-[294px] items-center justify-between relative flex-[0_0_auto]">
                <div className="w-[169px] font-semibold text-lg tracking-[-0.36px] leading-[23.4px] relative [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d]">
                  Your media
                </div>

                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                    $0
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center justify-center relative flex-[0_0_auto] cursor-pointer">
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#007aff] text-base tracking-[-0.32px] leading-[22.6px] whitespace-nowrap">
                  Edit media
                </div>

                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-1.5 h-2.5 top-[5px] left-[7px]"
                    alt="Vector"
                    src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#001d3d1a]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Subtotal
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                $50.00
              </div>
            </div>

            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                  Processing fee
                </div>

                <div className="relative w-[18px] h-[18px] opacity-40">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="https://c.animaapp.com/md8p6p6uIOANLl/img/vector-8.svg"
                  />
                </div>
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                $3.95
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#001d3d1a]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Total
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-[32px] tracking-[-0.64px] leading-[48px] whitespace-nowrap">
                $53.95
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col w-[390px] items-center justify-center gap-8 px-6 py-7 absolute top-[1946px] left-0 bg-white border-t [border-top-style:solid] border-[#001d3d26]">
          <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
              Step 4 of 4
            </div>

            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-lg tracking-[-0.18px] leading-[27px] whitespace-nowrap">
              Checkout
            </div>
          </div>

          <div className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <button 
              onClick={handleGoBack}
              className="flex h-12 items-center justify-center gap-1.5 px-[18px] py-0 relative flex-1 grow rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#789af7]"
            >
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#789af7] text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Back
              </div>
            </button>

            <button 
              onClick={handleSendNow}
              className="flex h-12 items-center justify-center gap-1.5 px-[18px] py-0 relative flex-1 grow bg-[#789af7] rounded-2xl overflow-hidden"
            >
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Send now
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="relative w-full h-[1457px] bg-[#f8f9fa] overflow-hidden">
      {/* Header */}
      <div className="h-full w-full flex flex-col bg-white">
        <div className="flex items-center justify-between px-8 pt-4 pb-4">
          <div className="font-quicksand text-xl font-bold">
            <span className="text-[#1E293B]">Loop</span>
            <span className="text-[#7C3AED]">Joy</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M19 6.33323C19 7.6379 18.5044 8.9766 17.7484 10.2631C17.5315 9.71444 17.1974 9.20619 16.7437 8.7866C17.1586 7.94585 17.4167 7.1154 17.4167 6.33323C17.4167 4.18781 15.785 2.3749 13.8542 2.3749C12.0848 2.3749 11.077 3.09135 10.3977 3.71598L7.37042 6.5256C7.09096 6.80585 7.02446 7.2769 7.24138 7.57852C7.38308 7.77565 7.59129 7.8944 7.82642 7.9134C8.05996 7.93477 8.28638 7.84927 8.45025 7.68381L11.7539 4.5211L12.8488 5.66427L11.8687 6.6024L15.6267 9.90048C16.507 10.6731 16.724 11.9707 16.131 12.9183C15.766 13.501 15.1699 13.8929 14.4962 13.9918C14.4503 13.9981 14.4052 14.0037 14.3593 14.0076C14.3561 14.4154 14.2476 14.8191 14.0252 15.1754C13.6602 15.758 13.0641 16.1499 12.3904 16.2489C12.2439 16.2694 12.0983 16.2781 11.9526 16.271C11.9098 16.5734 11.8069 16.8679 11.6399 17.1347C11.2749 17.7174 10.6788 18.1085 10.0051 18.2074C9.89188 18.2241 9.77867 18.232 9.66704 18.232C9.10733 18.232 8.56425 18.0301 8.13833 17.6556L5.681 15.4516C3.08829 13.1099 0 9.62735 0 6.33323C0 3.2774 2.3085 0.791563 5.14583 0.791563C6.41488 0.791563 7.38863 1.08923 8.15258 1.47952L6.88671 2.65435C6.40379 2.48494 5.83379 2.3749 5.14583 2.3749C3.21496 2.3749 1.58333 4.18781 1.58333 6.33323C1.58333 8.45015 3.41446 11.2709 6.74104 14.2768L9.19046 16.4729C9.34642 16.6099 9.56254 16.6732 9.77629 16.6423C9.99321 16.6106 10.1792 16.4879 10.2988 16.2956C10.4809 16.0034 10.3906 15.5696 10.0922 15.3084L7.55329 12.8946L8.64262 11.7451L11.5892 14.527C11.7309 14.6505 11.9502 14.7154 12.1608 14.6821C12.3777 14.6505 12.5638 14.527 12.6833 14.3354C12.8654 14.0433 12.7751 13.6094 12.4767 13.3474L9.65833 10.7959L10.7152 9.61786L13.6776 12.2541C13.836 12.3934 14.0529 12.4584 14.2658 12.4251C14.4828 12.3934 14.6688 12.2699 14.7883 12.0784C14.9704 11.7862 14.8802 11.3524 14.5817 11.0904L10.72 7.70123L9.55621 8.8151C9.12 9.2521 8.51754 9.4991 7.89054 9.4991C7.06246 9.4991 6.36658 9.07477 5.95492 8.50319C5.28596 7.57377 5.42133 6.23348 6.27 5.38481L9.32187 2.55223C10.1468 1.7946 11.51 0.790771 13.8526 0.790771C16.6899 0.790771 18.9984 3.2766 18.9984 6.33244L19 6.33323Z" fill="#001D3D"/>
            </svg>
            <span className="text-[14px] text-[#1E293B] font-medium">245 Acts of kindness Shared</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col w-full h-2 items-start gap-2 absolute top-[83px] left-0.5 bg-[#7f47fe1a]">
        <div className="relative flex-1 self-stretch w-full grow bg-[#7f47fe]" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start gap-8 absolute top-[146px] left-[149px]">
        {/* Your Details Section */}
        <div className="flex flex-col w-[672px] h-[625px] items-start pt-0 pb-8 px-0 bg-white rounded-[32px] border-[1.5px] border-solid border-[#001d3d26]">
          <div className="relative self-stretch w-full h-[77px] border-b [border-bottom-style:solid] border-[#001d3d1a]">
            <div className="top-[31px] left-8 font-bold text-lg tracking-[0] leading-[27px] whitespace-nowrap absolute [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d]">
              Your details
            </div>
          </div>

          {/* Full Name Field */}
          <div className="flex flex-col items-start gap-2 pt-4 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Full name
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <input 
                type="text"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] bg-transparent border-none outline-none w-full"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col h-[139px] items-start gap-[19px] pt-6 pb-0 px-8 relative self-stretch w-full">
            <div className="relative self-stretch w-full h-[110px] mr-[-2.00px]">
              <div className="absolute w-[608px] top-0 left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
                What's your email address?
              </div>

              <div className="absolute w-[608px] h-[78px] top-8 left-0">
                <div className="flex w-[608px] h-14 items-center gap-2 px-4 py-0 absolute top-0 left-0 rounded-2xl border border-solid border-[#001d3d1a]">
                  <div className="relative w-5 h-5 opacity-40">
                    <img
                      className="absolute w-4 h-[13px] top-[3px] left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-8.svg"
                    />
                  </div>
                  <input 
                    type="email"
                    className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] bg-transparent border-none outline-none w-full"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="absolute w-[548px] h-2.5 top-[68px] left-0">
                  <div className="relative w-[550px] h-2.5">
                    <p className="absolute w-[548px] top-0 left-0 opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-sm tracking-[0] leading-[21px]">
                      We'll let you know when they view your message
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="flex flex-col w-[672px] items-start gap-2 pt-6 pb-0 px-8 relative flex-[0_0_auto]">
            <div className="relative w-[375px] h-[246px]">
              <p className="absolute w-[373px] top-0 left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px]">
                How should we send your gift?
              </p>

              <div className="flex flex-col w-[373px] items-start gap-4 absolute top-[46px] left-0">
                <div 
                  className="flex w-[373px] h-14 items-center gap-2 px-4 py-0 relative rounded-2xl border-[1.5px] border-solid border-[#001d3d1a] cursor-pointer"
                  onClick={() => setDeliveryMethod("link")}
                >
                  <div className="relative w-5 h-5 opacity-40">
                    <img
                      className="absolute w-[17px] h-2 top-1.5 left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-6.svg"
                    />
                  </div>

                  <div className="relative flex-1 opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                    Send via link
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Radio button"
                    src={deliveryMethod === "link" 
                      ? "https://c.animaapp.com/md7cxlyinOv89W/img/radio-button-checked.png" 
                      : "https://c.animaapp.com/md7cxlyinOv89W/img/radio-button-unchecked.png"}
                  />
                </div>

                <div 
                  className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a] cursor-pointer"
                  onClick={() => setDeliveryMethod("phone")}
                >
                  <div className="w-5 h-5 relative opacity-40">
                    <img
                      className="absolute w-4 h-4 top-0.5 left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-1.svg"
                    />
                  </div>

                  <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] relative opacity-40">
                    Phone number
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Radio button"
                    src={deliveryMethod === "phone" 
                      ? "https://c.animaapp.com/md7cxlyinOv89W/img/radio-button-checked.png" 
                      : "https://c.animaapp.com/md7cxlyinOv89W/img/radio-button-unchecked-1.png"}
                  />
                </div>

                <div 
                  className={`flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border-[1.5px] border-solid ${deliveryMethod === "email" ? "border-[#001d3d]" : "border-[#001d3d1a]"} cursor-pointer`}
                  onClick={() => setDeliveryMethod("email")}
                >
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-4 h-[13px] top-[3px] left-0.5"
                      alt="Vector"
                      src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-8.svg"
                    />
                  </div>

                  <div className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                    example@email.com
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Radio button checked"
                    src={deliveryMethod === "email" 
                      ? "https://c.animaapp.com/md7cxlyinOv89W/img/radio-button-checked.png" 
                      : "https://c.animaapp.com/md7cxlyinOv89W/img/radio-button-unchecked.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="flex flex-col w-[672px] items-start pt-0 pb-8 px-0 bg-white rounded-[32px] border-[1.5px] border-solid border-[#001d3d26]">
          <div className="relative self-stretch w-full h-[77px] border-b [border-bottom-style:solid] border-[#001d3d1a]">
            <p className="absolute top-[31px] left-8 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
              How would you like to pay?
            </p>
          </div>

          {/* Name on Card */}
          <div className="flex flex-col items-start gap-2 pt-4 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Name on card
            </div>

            <div className="flex h-14 items-center gap-2 px-4 py-0 relative self-stretch w-full rounded-2xl border border-solid border-[#001d3d1a]">
              <input 
                type="text"
                className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] bg-transparent border-none outline-none w-full"
                placeholder="Enter name"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>
          </div>

          {/* Card Number */}
          <div className="flex flex-col items-start gap-[11px] pt-4 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Debit/Credit card number
            </div>

            <div className="relative w-[607px] h-14">
              <div className="flex w-[607px] h-14 items-center justify-between px-4 py-0 relative rounded-2xl border border-solid border-[#001d3d1a]">
                <input 
                  type="text"
                  className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] bg-transparent border-none outline-none w-full"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <img
                  className="relative w-9 h-[22.52px]"
                  alt="Image"
                  src="https://c.animaapp.com/md7cxlyinOv89W/img/image-286-1.png"
                />
              </div>
            </div>
          </div>

          {/* Expiration Date */}
          <div className="flex flex-col items-start gap-2 pt-4 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Expiration date
            </div>

            <div className="w-[296px] flex items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[150px] h-14 items-center gap-2 px-4 py-0 relative bg-[#ebebeb] rounded-2xl border border-solid border-[#001d3d1a]">
                <select 
                  className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="Month">Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <div className="relative w-6 h-6 pointer-events-none">
                  <img
                    className="absolute w-3 h-[7px] top-2 left-1.5"
                    alt="Vector"
                    src="https://c.animaapp.com/md7cxlyinOv89W/img/vector.svg"
                  />
                </div>
              </div>

              <div className="flex h-14 items-center gap-2 px-4 py-0 relative flex-1 grow bg-[#ebebeb] rounded-2xl border border-solid border-[#001d3d1a]">
                <select 
                  className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="Year">Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>

                <div className="relative w-6 h-6 pointer-events-none">
                  <img
                    className="absolute w-3 h-[7px] top-2 left-1.5"
                    alt="Vector"
                    src="https://c.animaapp.com/md7cxlyinOv89W/img/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Security Code */}
          <div className="flex flex-col items-start gap-2 pt-4 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#001d3d] text-base tracking-[-0.32px] leading-6">
              Security code
            </div>

            <div className="w-[150px] flex items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[150px] h-14 items-center gap-2 px-4 py-0 relative bg-white rounded-2xl border border-solid border-[#001d3d1a]">
                <input 
                  type="text"
                  className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base tracking-[0] leading-6 bg-transparent border-none outline-none w-full"
                  placeholder="1234"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="flex flex-col w-[438px] items-start pt-0 pb-8 px-0 absolute top-[146px] left-[853px] bg-white rounded-[32px] border-[1.5px] border-solid border-[#001d3d26]">
        <div className="relative self-stretch w-full h-[77px] border-b [border-bottom-style:solid] border-[#001d3d1a]">
          <div className="absolute top-[31px] left-8 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            Order summary
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-[22px] px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
          {/* Gift Card Item */}
          <div className="flex items-start justify-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[126px] h-[69.62px] rounded-[6.9px] border-[0.29px] border-solid border-[#001d3d26] bg-[linear-gradient(332deg,rgba(167,197,255,0.67)_0%,rgba(255,223,235,0.67)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
              <div className="absolute w-1 h-[70px] top-0 left-[61px] bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />
              <div className="absolute w-1 h-[126px] -top-7 left-[61px] -rotate-90 bg-[linear-gradient(0deg,rgba(229,57,53,1)_0%,rgba(127,32,29,1)_48%,rgba(229,57,53,1)_100%)]" />
              <img
                className="absolute w-[17px] h-[11px] top-[53px] left-[101px]"
                alt="Image"
                src="https://c.animaapp.com/md7cxlyinOv89W/img/image-286.png"
              />
              <p className="absolute h-[7px] top-1 left-[7px] [font-family:'Quicksand',Helvetica] font-bold text-transparent text-[6.2px] tracking-[0] leading-[7.5px] whitespace-nowrap">
                <span className="text-[#001d3d]">Loop</span>
                <span className="text-[#789af7]">Joy</span>
              </p>
              <img
                className="absolute w-12 h-12 top-[15px] left-10 object-cover"
                alt="Image"
                src="https://c.animaapp.com/md7cxlyinOv89W/img/image-288.png"
              />
              <div className="inline-flex items-end justify-center gap-[0.89px] absolute top-[54px] left-[7px]">
                <div className="self-stretch w-[3.16px] mt-[-0.22px] font-bold text-[4.6px] tracking-[-0.09px] leading-[6.4px] relative [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d]">
                  $
                </div>
                <div className="inline-flex items-end relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.29px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[9.2px] tracking-[-0.55px] leading-[9.2px] whitespace-nowrap">
                    50
                  </div>
                  <div className="relative w-fit ml-[-1.15px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-[5.5px] tracking-[-0.33px] leading-[5.5px] whitespace-nowrap">
                    .00
                  </div>
                </div>
              </div>
              <div className="absolute top-1 left-[98px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-[4.6px] tracking-[0] leading-[6.9px] whitespace-nowrap">
                Gift Card
              </div>
            </div>

            <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[106px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-base tracking-[-0.32px] leading-[20.8px]">
                  LoopJoy Gift Card
                </div>
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                    $50.00
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center justify-center relative flex-[0_0_auto] cursor-pointer">
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#007aff] text-base tracking-[-0.32px] leading-[22.6px] whitespace-nowrap">
                  Edit amount
                </div>
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-1.5 h-2.5 top-[5px] left-[7px]"
                    alt="Vector"
                    src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Media Item */}
          <div className="flex items-start justify-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[128.64px] h-[76.53px] mt-[-1.32px] mb-[-1.32px] ml-[-1.32px] bg-[#001d3d1a] rounded-[6.6px] border-[0.66px] border-solid" />
            <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
              <div className="h-[27px] relative self-stretch w-full">
                <div className="w-[126px] top-0.5 left-0 font-semibold text-base tracking-[-0.32px] leading-[20.8px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d]">
                  Your media
                </div>
                <div className="inline-flex items-center justify-center gap-2 absolute top-0 left-[210px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                    $0
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center justify-center relative flex-[0_0_auto] cursor-pointer">
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#007aff] text-base tracking-[-0.32px] leading-[22.6px] whitespace-nowrap">
                  Edit media
                </div>
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-1.5 h-2.5 top-[5px] left-[7px]"
                    alt="Vector"
                    src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="absolute w-[38px] h-[38px] top-[17px] left-11 opacity-[0.44]">
              <img
                className="absolute w-[30px] h-6 top-[7px] left-1"
                alt="Vector"
                src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-3.svg"
              />
            </div>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="flex flex-col items-start gap-2 px-8 py-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#001d3d1a]">
          <div className="flex w-[374px] items-center justify-between relative flex-[0_0_auto]">
            <div className="relative w-fit opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
              Subtotal
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
              $50.00
            </div>
          </div>

          <div className="flex w-[374px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Processing fee
              </div>
              <div className="relative w-[18px] h-[18px] opacity-40">
                <img
                  className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/md7cxlyinOv89W/img/vector-7.svg"
                />
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
              $3.95
            </div>
          </div>
        </div>

        {/* Total Section */}
        <div className="flex flex-col items-start gap-2 pt-6 pb-0 px-8 flex-[0_0_auto] border-t [border-top-style:solid] border-[#001d3d1a] relative self-stretch w-full">
          <div className="flex w-[374px] items-center justify-between relative flex-[0_0_auto]">
            <div className="relative w-fit opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
              Total
            </div>
            <div className="w-fit mt-[-1.00px] font-semibold text-[32px] tracking-[-0.64px] leading-[48px] whitespace-nowrap relative [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#001d3d]">
              $53.95
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex w-full h-[79px] items-center justify-between px-8 py-3 absolute bottom-0 left-0 bg-white border-t [border-top-style:solid] border-[#001d3d26]">
        <button 
          onClick={handleGoBack}
          className="flex items-center justify-center h-[54px] px-6 gap-[6px] rounded-[16px] border-[1.5px] border-[#D9D9D9] cursor-pointer hover:bg-gray-50 transition-colors"
        >
          Back
        </button>

        <div className="inline-flex flex-col items-center justify-center gap-3">
          <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
            Step 4 of 4
          </div>
          <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-lg tracking-[-0.18px] leading-[27px] whitespace-nowrap">
            Checkout
          </div>
        </div>

        <button 
          onClick={handleSendNow}
          className="flex items-center justify-center h-[54px] px-6 gap-[6px] rounded-[16px] bg-[#789AF7] text-white cursor-pointer hover:bg-[#6a8ae7] transition-colors"
        >
          Send now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
