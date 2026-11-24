import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] tracking-tightish transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none";

const variants = {
  primary: "bg-ink text-base hover:bg-gold hover:text-base",
  secondary: "border border-ink2/40 text-ink hover:border-gold hover:text-gold",
  ghost: "text-ink2 hover:text-gold underline underline-offset-4",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
