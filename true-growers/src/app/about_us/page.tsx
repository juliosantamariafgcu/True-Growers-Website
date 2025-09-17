import Image from "next/image";
import PageWrapper from "../wrapper";

export default function AboutUs() {
  return (
    <PageWrapper>
      <div>
        {/* Hero Section */}
        <div className="relative h-[320px] w-full">
          <Image
            src="/cannabis-sativa-L.jpg"
            alt="Cannabis background"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="font-heading text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
              About Us
            </h1>
          </div>
        </div>

        {/* Company Overview */}
        <div className="px-8 py-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold mb-6 tracking-tight">
            Who We Are
          </h2>
          <p className="font-body text-base leading-relaxed text-gray-700 dark:text-gray-200">
            Founded in 20XX, our company is dedicated to cultivating rare,
            high-quality medical cannabis for healthcare facilities. Our focus
            is on purity, consistency, and innovation in every strain we grow.
            With state-of-the-art facilities and a commitment to responsible
            practices, we aim to set a new standard for medical-grade cannabis.
          </p>
        </div>

        {/* Growing Methods */}
        <div className="px-8 py-16 bg-[#D2E4D6] dark:bg-[#36593D]">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12 tracking-tight">
            Professional Methods & Growing Techniques
          </h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Purity */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-1">
                <Image
                  src="/cannabis-sativa-L.jpg"
                  alt="Purity cultivation"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="order-2 md:order-2">
                <h3 className="font-heading text-2xl font-semibold mb-4">Purity</h3>
                <p className="font-body text-base leading-relaxed text-gray-700 dark:text-gray-200">
                  Every plant we cultivate is grown under tightly controlled conditions
                  to ensure absolute purity. We never use harmful pesticides or synthetic
                  additives, and our labs test for over 50 contaminants before any
                  product leaves our facility. Our cultivation process emphasizes
                  cleanliness, precision, and patient safety — ensuring healthcare
                  providers can trust every product to be uncompromised in quality.
                </p>
              </div>
            </div>

            {/* Rarity */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-heading text-2xl font-semibold mb-4">Rarity</h3>
                <p className="font-body text-base leading-relaxed text-gray-700 dark:text-gray-200">
                  We specialize in cultivating rare strains with unique cannabinoid and
                  terpene profiles that are difficult to find elsewhere. These genetics
                  are carefully selected for their medical potential and are bred under
                  conditions that maintain their integrity. By focusing on rare and
                  specialized strains, we provide healthcare facilities with exclusive
                  therapeutic options that support a wider range of patient needs.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/cannabis-sativa-L.jpg"
                  alt="Rare cannabis strains"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </div>

            {/* Quality */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-1">
                <Image
                  src="/cannabis-sativa-L.jpg"
                  alt="Quality control"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="order-2 md:order-2">
                <h3 className="font-heading text-2xl font-semibold mb-4">Quality</h3>
                <p className="font-body text-base leading-relaxed text-gray-700 dark:text-gray-200">
                  Quality is the cornerstone of our cultivation philosophy. Our
                  facilities use advanced hydroponics, precision climate control, and
                  sustainable practices to achieve consistent results every cycle. Each
                  harvest is tested for potency, consistency, and terpene profile,
                  ensuring healthcare providers can rely on products that deliver the
                  same therapeutic benefits every time. We don’t just grow cannabis —
                  we grow trust.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Meet the Team */}
        <div className="px-8 py-12">
          <h2 className="font-heading text-3xl font-semibold text-center mb-8 tracking-tight">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {["Alice Johnson", "Brian Lee", "Carla Martinez", "Julio Santamaria", "William Ward"].map((name, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-[#D2E4D6] dark:bg-[#36593D] hover:bg-[#4A9833] dark:hover:bg-[#346B24] transition-colors duration-300"
              >
                <Image
                  src="/blank-pfp.png"
                  alt={name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="font-heading text-lg font-semibold">{name}</h3>
                <p className="font-body text-sm text-gray-700 dark:text-gray-200">
                  Position Title
                </p>
                <p className="font-body mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Short professional bio goes here. Explains background,
                  expertise, and role in the company.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}