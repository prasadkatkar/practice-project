import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <nav className="p-4 border-b-2 bg-white">
        <div className="">
          <div className="flex justify-between">
            <img src="./logo-nav.png" alt="logo" />

            <div className="space-x-4 mr-150 font-medium mt-4">
              <Link href="/" className="text-[#80776A] hover:text-gray-300">
                Home
              </Link>
              <Link
                href="/product"
                className="text-[#80776A] hover:text-gray-300"
              >
                Products
              </Link>
              <Link
                href="/factory"
                className="text-[#80776A] hover:text-gray-300"
              >
                Factory
              </Link>
              <Link
                href="/designers"
                className="text-[#80776A] hover:text-gray-300"
              >
                Designers
              </Link>
              <Link
                href="/contact"
                className="text-[#80776A] hover:text-gray-300"
              >
                Contact US
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/about"
                className="text-[#80776A] active:text-gray-900  font-medium"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
