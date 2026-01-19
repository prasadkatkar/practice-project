import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 border-b-2 bg-white shrink-0">
      <div className="flex justify-between grow-0">
        <img src="./logo-nav.png" alt="logo" />

        <div className="space-x-4 mr-150 font-medium mt-4">
          <Link href="/" className="text-[#80776A] hover:text-gray-300">
            Home
          </Link>
          <Link href="/product" className="text-[#80776A] hover:text-gray-300">
            Products
          </Link>
          <Link href="/factory" className="text-[#80776A] hover:text-gray-300">
            Factory
          </Link>
          <Link href="/about" className="text-[#80776A] hover:text-gray-300">
            About us
          </Link>
          <Link href="/contact" className="text-[#80776A] hover:text-gray-300">
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
}
