import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-300 py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link href={"/"} className="no-underline text-gray-500">
          ABC SHOPPING
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <Link
              href={"/"}
              className="no-underline text-gray-700 hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="no-underline text-gray-700 hover:text-black"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="no-underline text-gray-700 hover:text-black"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
