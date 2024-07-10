import { cn } from "@/lib/utils";
import Link from "next/link";

import Icon from "@/components/ui/icon";

interface SocialLinksProps {
  className?: string;
}

const links = [
  { name: "Facebook", href: "https://facebook.com/velomiko", icon: "Facebook" },
  {
    name: "Instagram",
    href: "https://instagram.com/velomiko",
    icon: "Instagram",
  },
  {
    name: "Youtube",
    href: "https://youtube.com/@velomiko",
    icon: "Youtube",
  },
];

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn(className, "flex flex-row gap-4")}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name={link.name} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
