interface ownerCard {
  image: string;
  name: string;
  comment: string;
}
export default function Director() {
  const data: Array<ownerCard> = [
    {
      image: "./rajesh.png",
      name: "MR.RAJESH M KAJAVE(FOUNDER & MD)",
      comment:
        "Mr. Rajesh M. Kajave is the founder and Managing Director of KAJAVE FURNITURE. He envisioned the trustworthy brand ‘KAJAVE FURNITURE” in the year 2009 with a successful leap in the furniture industry.His immense knowledge and awareness in the furniture industry along with very professional and systematic management of the company affairs for over 10 years since commencement, has won him many repeat happy customers, appreciations and accolades. He firmly believes in the philosophy that furniture is not just about a product, it’s a true reflection of a person’s nature. ",
    },
    {
      image: "./kavita.png",
      name: "MRS.KAVITA R KAJAVE(Director)",
      comment:
        "She is our creative brain and heads all creative aspects in KAJAVE FURNITURE since inception. To add to it her caring and welcoming nature makes all our customers feel comfortable and at home. The foundations of happy relations are thereby built. ",
    },
    {
      image: "./mrunal.png",
      name: "AR.MRUNAL V KAJAVE(Director)",
      comment:
        " Ar. Mrunal V. Kajave is a born talented artist and professionally an architect as well as a successful interior designer by profession.She believes that every design speaks about one's personality and a soul brings liveliness in each product.  As a designer, her role is to make people feel comfortable with the product range.",
    },
    {
      image: "./veeren.png",
      name: "MRS.VEEREN R KAJAVE(Director)",
      comment:
        " Ar. Veeren R. Kajave has completed his formal education in the year 2015. He is the next generation entrepreneur and a strong force to propel brand KAJAVE FURNITURE to greater heights. He has a futuristic vision and also spearheads the strategy and design team. His focus is to make our customer's dreams come true with his creative ideas and experience. He believes in the principle that our customer’s interest and satisfaction is vital & of optimum importance.",
    },
  ];
  return (
    <div className="bg-[#F1F1F1] pb-[75px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[36px] mt-[30px] text-[#9E866A] font-bold">
          Directors & Promoters
        </h1>
        <img className="mb-[45px]" src="./endLine.png" alt="" />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((user) => (
          <div key={user.name} className=" ">
            <div className="w-[327px] flex justify-center -mb-25">
              <img src={user.image} alt="no Image" />
            </div>
            <div className="bg-[#9E866A] w-[327px] p-[20px] rounded-[20px]">
              <h3 className="text-[#FFEED3] mt-25 text-[10px] text-center mb-[15px]">
                {user.name}
              </h3>
              <p className="text-[#FFFFFF] text-[14px]">{user.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
