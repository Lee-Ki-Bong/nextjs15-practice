import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="px-5 py-3 bg-white shadow-sm ">
      <nav className="flex justify-between item-center">
        <Link href="/">
          <Image
            src="http://placehold.co/144x30"
            alt="logo"
            width={144}
            height={30}
          />
        </Link>

        <div className="flex items-center gap-5"></div>
      </nav>
    </header>
  );
}

export default Navbar;
