import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#202229] bg-[#0d0f12]">
      <div className="container-fit flex min-h-[88px] flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <Link href="/" aria-label="FitLog home">
          <Logo />
        </Link>

        <p className="text-center text-xs text-[#6f737d] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}