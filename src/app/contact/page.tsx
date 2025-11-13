import { contacts } from "@/lib/constants";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center justify-center mt-6">
        <h1 className="text-[#9E866A] text-[36px] font-semibold">CONTACT US</h1>
        <img className="object-cover" src="./endLine.png" alt="" />
      </div>
      <div className="flex mt-10 w-[800px] gap-5 pb-8">
        {contacts.map((contact) => (
          <div key={contact.city}>
            <h1 className="text-[36px] font-semibold p-4">{contact.city}</h1>
            <p className="p-4">{contact.address}</p>
            <hr />
            <br />
            <p className="p-4">{contact.mob}</p>
            <hr />
            <br />
            <p className="p-4">{contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
