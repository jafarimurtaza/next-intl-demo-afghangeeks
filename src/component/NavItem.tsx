import { Link } from "@/i18n/navigation";
import React from "react";

type NavItemProps = {
  href: string;
  label: string;
  highlight?: boolean;
};

export default function NavItem({ href, label, highlight }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center p-2 gap-2 text-white/90 hover:text-white transition-colors duration-200 mt-4 group"
    >
      <span
        className={`font-medium capitalize group-hover:text-white ${
          highlight ? "text-white underline !font-extrabold" : ""
        }`}
        style={{ fontSize: "var(--font-size-lg)" }}
      >
        {label}
      </span>
    </Link>
  );
}
