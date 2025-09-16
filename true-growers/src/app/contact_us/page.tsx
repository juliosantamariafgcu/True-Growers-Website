import Image from "next/image";
import PageWrapper from "../wrapper";

export default function Contact_Us() {
  return (
    <PageWrapper>
        <div className="flex items-center justify-center mt-[50px]">
            <Image
                src="/form-with-logo.png" 
                alt="Temp. Contact Form"
                width={450}
                height={450}
            />
        </div>
    </PageWrapper>
  );
}
