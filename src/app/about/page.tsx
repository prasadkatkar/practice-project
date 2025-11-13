import Director from "@/components/Director";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function About() {
  return (
    <main>
      <div className="flex max-w-full pr-[63px] pl-[63px]">
        <div>
          <div className="flex flex-col items-center mt-[40px]">
            <h1 className="text-[#C3A989] text-[36px]">ABOUT US</h1>
            <img src="./Group.png" alt="" />
          </div>
          <div className="bg-[#F1F1F1]">
            <div className="pl-[40px] pt-[29px] pr-[26px] pb-[28px] mt-[78px]">
              <img src="./shop.png" alt="" />
            </div>
            <div className="text-wrap pl-[40px] pb-7">
              <p>
                Envisioned and Founded by{" "}
                <span className="font-bold">Mr. Rajesh Maruti Kajave</span> in
                the year 2010 with an honest initiative to provide{" "}
                <span className="text-[#C3A989]">
                  pure solid wooden, high quality finished furniture and
                  furniture products
                </span>{" "}
                across Western Maharashtra and Pan India. Under the experienced
                guidance and nurturing of Mr. Rajesh Kajave and Mrs. Kavita R.
                Kajave, the brand &ldquo;KAJAVE FURNITURE&ldquo; is very ably
                managed by the next generation entrepreneurs{" "}
                <span className="font-bold">
                  Ar. Veeren R. Kajave and Ar. Mrunal V. Kajave.
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="mt-[34px]">
            <p className="ml-[34]">
              Kajave Furniture is the fastest growing process driven branded
              Solid Wooden Furniture Manufacturer having a physical presence in
              Kolhapur, Satara and Pune in Maharashtra, India. Kajave Furniture
              has its multifarious lavish furniture showroom in Lonar Vasahat,
              Kolhapur which is spread over 7500 sq. <br />
              <br />
              ft of area. We create, innovate and customize classy solid wood
              furniture. We offer a variety of exclusive versatile wooden home
              furniture ranging from beds and bedside tables to dining tables,
              chairs, center tables, wooden sofa sets, wardrobes, along with
              exclusively only customized pure solid wooden accessories to name
              a few. Customized wooden furniture is only available in Kolhapur.
            </p>
            <br />
            <br />
            <p className="ml-[34]">
              Kajave Furniture is well known to provide{" "}
              <span className="text-[#9E866A]">
                customized design solutions in traditional, ethnic antique,
                contemporary and modern styles in solid wood.
              </span>{" "}
              With a successful beginning from initially a furniture
              distributor, to setting up our own factory and infrastructure to
              support, to manufacturing our branded furniture Kajave Furniture
              has taken a stride towards forwarding integrated progress.
            </p>
            <div className="flex flex-col items-center mt-[30px]">
              <img src="./endLine.png" alt="" />
            </div>
            <div>
              <div className="flex justify-center mt-[107px]">
                <img className="" src="./hall.jpg" alt="" />
              </div>
              <div className="flex gap-2 justify-center mt-5 mb-5">
                <Button variant="outline" size="icon-sm" aria-label="Previous">
                  <ArrowLeftIcon />
                </Button>
                <Button variant="outline" size="icon-sm" aria-label="Next">
                  <ArrowRightIcon />
                </Button>
              </div>
              <div className="bg-[#F1F1F1] -mt-60 pb-[30px]">
                <br />
                <br />
                <br />
                <p className="mt-40 ml-[34]">
                  The primary focus area is classy furniture for living room,
                  bedroom, lounge, theme restaurants and sit-outs. We also
                  provide made to order customized wooden furniture along with
                  complete home décor interior solutions based on specific
                  taste, designs, utility and requirements of our clients. We
                  provide quality assurance and warranty for all our furniture
                  products.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center bg-[#9E866A]">
              <h1 className="mt-[28px] text-white font-bold text-[36px]">
                THE PROCESS
              </h1>
              <img className="mb-[32px]" src="./endLine.png" alt="" />
            </div>
            <div className="flex ">
              <div className="bg-[#9E866A]">
                <img src="./pencil-draw.jpg" alt="" />
                <div className="flex gap-2 justify-center mt-5 mb-5">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    aria-label="Previous"
                  >
                    <ArrowLeftIcon />
                  </Button>
                  <Button variant="outline" size="icon-sm" aria-label="Next">
                    <ArrowRightIcon />
                  </Button>
                </div>
              </div>
              <div className="bg-[#C3A989] w-[50%]">
                <p className="pl-[20px] text-white">
                  Our professional design team is happy to assist you in all
                  aspects of your furniture selection and purchase experience.
                  Right from the point of understanding a customer&lsquo; unique
                  taste, to the right selection of richest fabrics, to the
                  polish shades with meticulous attention to the minute details
                  to bring every product alive, our designers are happy to
                  assist at every step. <br />
                  <br />
                  These processes involve detailing and ensure standardization
                  in volume, shape, figure, size and quality of the finished
                  furniture product. Our clients range from all segments such as
                  walk-in customers, word-of-mouth customers, high-networth
                  individuals, interior designers, architects, consultants and
                  so on.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[132px] mb-[54px]">
            <p>
              To contribute and give back to the society in some positive way
              the management team at Kajave Furniture has donated books to
              students of a local government school. Such social initiatives are
              a regularly undertaken by the organization. <br />
              To promote our brand and to communicate with our prospective
              customers we regularly participate in property Dalan exhibition at
              Kolhapur hosted by CREDAI Kolhapur. In the year 2018, we have also
              participated in the Aahar Ways exhibition at Goa. <br />
              The brand &ldquo;KAJAVE FURNITURE&ldquo; therefore is well known
              and synonymous for firmly believing in trust, honesty,
              transparency and ethical practices.
            </p>
          </div>
          <Director />
        </div>
      </div>
    </main>
  );
}
