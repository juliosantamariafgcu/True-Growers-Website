import Image from "next/image";
import PageWrapper from "../wrapper";

export default function About_Us() {
  return (
    <PageWrapper>
      <div className="mt-[110px] mx-[90px] mb-2">

        <div className="float-left text-4xl mr-8 mb-4">
          About Us
        </div>

        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
          est laborum.
        </p>
    
        <div className="text-4xl mt-[50px]">Meet the Team</div>
        <div className="h-px bg-gray-400 mb-[50px]"></div>


        {/* Employee Cards */}
        <div className="mx-9">
          <div className="float-left">
            <Image
              src="/blank-pfp.png" 
              alt="Profile Photo"
              width={100}
              height={100}
            />
          </div>

          <div className="float-left text-lg mx-9">
            First Last
            <div className="clear-left text-sm">Position Held</div>
          </div>
          

          <div className="flex rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300 text-sm
          mt-10 p-5">
            autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
            autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
            autobiography 
          </div>
        </div>

        <div className="mx-9">
          <div className="float-right">
            <Image
              src="/blank-pfp.png" 
              alt="Profile Photo"
              width={100}
              height={100}
            />
          </div>

          <div className="float-right text-lg mx-9">
            First Last
            <div className="clear-right text-sm">Position Held</div>
          </div>
          

          <div className="flex rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300 text-sm
          mt-10 p-5">
            autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
            autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
            autobiography 
          </div>
        </div>

        <div className="mx-9">
          <div className="float-left">
            <Image
              src="/blank-pfp.png" 
              alt="Profile Photo"
              width={100}
              height={100}
            />
          </div>

          <div className="float-left text-lg mx-9">
            First Last
            <div className="clear-left text-sm">Position Held</div>
          </div>
          

          <div className="flex rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300 text-sm
          mt-10 p-5">
            autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
            autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
            autobiography 
          </div>
        </div>

        <div className="flex items-center justify-center mt-[50px]">
            <Image
              src="/form-with-logo.png" 
              alt="Temp. Contact Form"
              width={450}
              height={450}
            />
        </div>

      </div>
    </PageWrapper>
  );
}
