import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justiy-between items-center">
        <Link href={"/"}>
          <img
            src={"/logo.svg"}
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
            {}
        </div>
      </nav>
    </header>
  );
};

export default Header;
