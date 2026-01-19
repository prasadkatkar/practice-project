import { products } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="p-7">
      <div className="flex flex-col items-center mt-10 text-[36px] text-[#9E866A] font-semibold">
        <h1>OUR PRODUCT</h1>
        <img src="./endLine.png" alt="" />
      </div>
      <div className="shrink-0 justify-center gap-[54px] flex flex-wrap max-w-full mt-[40px] pb-5 bg-[#EFEFEF] p-7">
        {products.map((item) => (
          <Link
            href={`/product/${item.heading}`}
            key={item.heading}
            className="grow-0 flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <div className="max-w-full">
              <Image src={item.image1} alt="Bed" width={400} height={300} />
            </div>
            <div className="bg-white shadow-2xl w-50 flex flex-col text-center p-3 -mt-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <h1>{item.heading}</h1>
              <Image src={item.image2} alt="image" width={300} height={100} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
