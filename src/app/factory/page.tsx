import { badges, factoryItems, visions } from "@/lib/constants";

export default function Factory() {
  return (
    <>
      <div className="pl-[63px] pr-[63px]">
        <div className="mt-[40px] flex flex-col items-center">
          <h1 className="text-[36px] text-[#9E866A]">FACTORY</h1>
          <img src="./endLine.png" alt="" />
        </div>
        <div className="bg-[#F1F1F1] mt-[38px] flex flex-col items-center pb-[32px]">
          <div className="pt-[32px]">
            <img src="./team.png" alt="" />
          </div>
          <div className="pr-[34px] pl-[32px]">
            <p>
              Our team of dedicated experts consists of experienced professional
              designers, skilled craftsmen, carpenters, quality control team,
              sales & marketing associates, material dispatch team and customer
              care executives. All our team members are regularly trained and
              groomed to ensure that they are all updated with the knowledge of
              latest designs, patterns, trends, types of equipment and essential
              know-how about our industry.
            </p>
            <br />
            <p>
              We ensure all compliances and statutory safety standards in our
              work environment. We do not employ child labor as per Govt. of
              Maharashtra, India directives. In order to keep our team members
              constantly motivated to perform and deliver, our management at
              regular intervals acknowledges their efforts and initiatives.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[#9E866A] text-[36px] font-semibold text-center mt-[33px]">
            Personalized Care & Consulting at <br />
            KAJAVE FURNITURE:
          </h1>
          <p className="mt-[33px] pl-[36px] pr-[32px]">
            Our professional design team is happy to assist you in all aspects
            of your furniture selection and purchase experience. Right from the
            point of understanding a customer&apos;s unique taste, to the right
            selection of richest fabrics, to the polish shades with meticulous
            attention to the minute details to bring every product alive, our
            designers are happy to assist at every step.{" "}
          </p>
          <p className="text-[#9E866A] mt-[17px] pl-[36px] text-center">
            We at Kajave Furniture firmly believe in our outlined USP&apos;s as
            follows:
          </p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap mt-[32px] pl-[115px] pr-[115px]">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="bg-[url('/badge.png')] w-[120px] h-[120px] flex items-center-safe"
            >
              <p className="max-w-full text-center text-white font-semibold text-[15px] relative">
                {badge.name}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#F1F1F1] flex items-center mt-[48px] pr-[35px] pb-[35px] shrink-0">
          {visions.map((vision) => (
            <div
              key={vision.description}
              className="pt-[35px] pl-[35px] size-[50%]"
            >
              <div className="border-2 border-[#9E866A] flex flex-col items-end grow-0">
                <p className="text-[#9E866A] p-2">{vision.description}</p>
                <br />
                <div className="bg-[#9E866A] w-30 text-center text-white p-2">
                  <h1>{vision.fundamental}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {factoryItems.map((item) => (
            <div key={item.description}>
              <div className="flex gap-3 items-center mb-2">
                <img src={item.image1} alt="" />
                <img src={item.image2} alt="" />
                <p>{item.description}</p>
              </div>
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
