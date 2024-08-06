import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center">
      <Image src="/logo.svg" width={128} height={128} alt="logo" />
    </Link>
  );
};

export default Logo;
