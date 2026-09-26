'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';
import { useFitLog } from '@/context/FitLogContext';

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { plan, saved } = useFitLog();

  const active = (p) =>
    path === p || (p !== '/' && path.startsWith(p));

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#202229] bg-[#090a0d]/95 backdrop-blur">
      <div className="container-fit flex h-[64px] items-center justify-between">
        <Link href="/" onClick={closeMenu} aria-label="FitLog home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              active('/')
                ? 'bg-lime text-black'
                : 'text-[#a2a5ad] hover:text-white'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              active('/my-plan')
                ? 'bg-lime text-black'
                : 'text-[#a2a5ad] hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/my-plan" className="text-xs text-[#a2a5ad]">
            Plan
            <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-lime px-1.5 py-0.5 font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan?tab=saved" className="text-xs text-[#a2a5ad]">
            Saved
            <span className="ml-1 text-[#e2e4e8]">{saved.length}</span>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white transition hover:bg-[#17191f] md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#202229] bg-[#0d0f13] px-5 py-4 md:hidden">
          <nav className="container-fit flex flex-col gap-2" aria-label="Mobile navigation">
            <Link
              onClick={closeMenu}
              href="/"
              className={`rounded-lg px-3 py-3 text-sm transition ${
                active('/')
                  ? 'bg-lime font-semibold text-black'
                  : 'text-[#a2a5ad] hover:bg-[#17191f] hover:text-white'
              }`}
            >
              Workouts
            </Link>

            <Link
              onClick={closeMenu}
              href="/my-plan"
              className={`rounded-lg px-3 py-3 text-sm transition ${
                active('/my-plan')
                  ? 'bg-lime font-semibold text-black'
                  : 'text-[#a2a5ad] hover:bg-[#17191f] hover:text-white'
              }`}
            >
              My Plan
              <span className="ml-1">{plan.length}</span>
            </Link>

            <Link
              onClick={closeMenu}
              href="/my-plan?tab=saved"
              className="rounded-lg px-3 py-3 text-sm text-[#a2a5ad] transition hover:bg-[#17191f] hover:text-white"
            >
              Saved
              <span className="ml-1">{saved.length}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}