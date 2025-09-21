import Image from "next/image";
import PageWrapper from "../wrapper";

export default function Contact_Us() {
  return (
    <PageWrapper>
        <div className="flex items-center justify-center mt-[20px] mb-2">
            <Image
                src="/form-with-logo.png" 
                alt="Temp. Contact Form"
                width={400}
                height={400}
            />
        </div>
    </PageWrapper>
  );
}
