import Image from "next/image";

export default function About_Us() {
  return (
    <div className="mt-[110px] mx-[90px] mb-[70px]">

      <div className="float-left text-5xl mr-8 mb-4">
        About Us
      </div>

      <p>
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

      {/* Employee Cards */}
      <div className="mx-9">
        <div className="float-left">
          <Image
            src="/blank-pfp.png" 
            alt="Profile Photo"
            width={120}
            height={120}
          />
        </div>

        <div className="float-left text-2xl mx-9">
          First Last
          <div className="clear-left text-base">Position Held</div>
        </div>
        

        <div className="flex rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300 
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
            width={120}
            height={120}
          />
        </div>

        <div className="float-right text-2xl mx-9">
          First Last
          <div className="clear-right text-base">Position Held</div>
        </div>
        

        <div className="flex rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300 
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
            width={120}
            height={120}
          />
        </div>

        <div className="float-left text-2xl mx-9">
          First Last
          <div className="clear-left text-base">Position Held</div>
        </div>
        

        <div className="flex rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300 
        mt-10 p-5">
          autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
          autobiography autobiography autobiography autobiography autobiography autobiography autobiography 
          autobiography 
        </div>
      </div>

    </div>
  );
}
