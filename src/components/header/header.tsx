import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-2 flex justify-between items-center">
      <Link href="/" className="hover:opacity-50 transition-opacity duration-300">
        <Image
          src="/assets/images/vm-logo.svg"
          alt="velomiko logo"
          width={120}
          height={84}
        />
      </Link>
      <ul className="flex gap-4">
        <li>
          <Button variant="link">
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/gear">Gear</Link>
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
