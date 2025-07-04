import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function TopNav() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <LanguageSwitcher />
    </nav>
  );
}