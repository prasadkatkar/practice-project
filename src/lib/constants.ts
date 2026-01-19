export interface ContactCard{
    city:string;
    address:string;
    mob:string;
    email:string;
}
export const contacts:Array<ContactCard>=[
    {
        city:"Kolhapur:",
        address:"9/1/3, Lonar Vasahat,Near Menon and Menon,Kolhapur 416005",
        mob:"9822453544",
        email:"kolhapur@kajavefurniture.com",

    },
    {
        city:"Satara:",
        address:"Yashoda Boys Hostel, Dalvi Complex,Near Hotel Pranjali, NH4,Khed Chowk,Satara 415003",
        mob:"9822072080",
        email:"satara@kajavefurniture.com",
    },
    {
        city:"Pune:",
        address:"Soulwood Ventures,Tiny Industrial Cooperative Estate Ltd, Plot No-3 & 4, Kondhwa Pisoli Road, Kondhwa Budrukh,Near Khadi Machine Chowk Pune-411048",
        mob:"9881729056",
        email:"pune@kajavefurniture.com",
    }

]

export const badges=[
    {
        name:"PURITY OF MATERIAL",
    },
    {
        name:"QUALITY OF ASSURANCE",
    },
    {
        name:"NO-COMPROMISE APPROACH",
    },
    {
        name:"ETHICAL DEALINGS",
    },
    {
        name:"VALUE FOR MONEY"
    }
]

export const visions=[
    {
        description:"Our vision is to be a leading and trusted brand of custom designed solid wooden lifestyle furniture products by providing world class manufacturing of finest quality products and superior customer service.",
        fundamental:"OUR VISION",
    },
    {
        description:"Our mission is to create value for our customers through Reliability, Flexibility, Integrity, and Speed in delivery.  We want every KAJAVE FURNITURE experience to be warm, happy, worry-free, and comfortable through Confidence and Trust.",
        fundamental:"OUR MISSION",
    }
]

export const factoryItems=[
    {
        image1:"./factory1.png",
        image2:"./factory2.png",
        description:"We make use of European beech wood for various furniture requirements of our clients. Our target audience for solid wooden furniture is of all age groups spread across all income groups. We offer the facility of buying furniture on finance through association with Bajaj Capital."
    },
    {
        image1:"./factory3.png",
        image2:"./factory4.png",
        description:"All process related to the production of our furniture right from the selection of the wood, cutting the wood, precision laser cutting, joinery, molding, sanding to polishing is done in our state of the art centralized workshop unit."
    },

]

export const products=[
    {
        image1:"/bed.png",
        heading:"BEDS & BEDSIDES",
        image2:"/endLine.png"

    },
    {
        image1:"/table.png",
        heading:"DINING TABLES",
        image2:"/endLine.png"

    },
    {
        image1:"/sofas.png",
        heading:"SOFAS",
        image2:"/endLine.png"

    },
    {
        image1:"/chair.png",
        heading:"CHAIRS",
        image2:"/endLine.png"

    },
     {
        image1:"/cbinet.png",
        heading:"CABINATES",
        image2:"/endLine.png"

    },
     {
        image1:"/sidebord.png",
        heading:"SIDEBOARDS",
        image2:"/endLine.png"

    }
     
]

export interface HomePage{
    image:string
}

export const HomeHeader:Array<HomePage>=[
    {
        image:"/home-sofa.jpg",
    },
    {
        image:"/home-chair.jpg",
    },
    {
        image:"/home-chair2.jpg",
    },
    {
        image:"/home-bed.jpg"
    }
]

export const ScrollBar=[
    {
        image:"/homescroll1.jpg",
        heading:"Wiru Sidetable 1D",
        name:"Bed & Bedsides",
        description:"Oak veneered cabinet. Solid oak legs. One oak or white drawer. HProduct must be attached to the wall, the product have a readyness but not special fixing scrwes or dowels.",

    },
     {
        image:"/homescroll2.jpg",
        heading:"KDC 02",
        name:"Chair",
        description:"This piece is well crafted in tenon and mortise joints made in seasoned white beech wood. Its twisted legs and short handle depicts minimalistic design which makes you feel comfortable. It is in natural finish.",

    },
    {
        image:"/homescroll3.jpg",
        heading:"KSO 19",
        name:"Sofa",
        description:"Sumptuous and comfortable, this sofa comes with a designer lumber support back. This royal piece makes you feel more relax. It’s a clean comfortable look that you will always love coming home. It is in walnut finish. We can customise according to size, finish and upholstery available in single-seater, double-seater, and three-seater.",

    },
    {
        image:"/homescroll4.jpg",
        heading:"KISO 02",
        name:"Indian Sitting",
        description:"This piece is well crafted in tenon and mortise joints made in seasoned white beech wood. This traditional piece of furniture is decorated with turned wooden members, this principle of design makes aesthetically it more beautiful and comfortable. It is in rose wood finish.",

    },
    {
        image:"/homescroll5.jpg",
        heading:"KDC 07",
        name:"Chair",
        description:"This piece is well crafted in tenon and mortise joints made in seasoned white beech wood. The semicircular back gives you a perfect comfort and bending legs gives a perfect grace. The unexceptional aesthetic makes everyone to love it. It is in walnut finish.",

    }

]
