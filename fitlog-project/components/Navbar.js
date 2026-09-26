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
  const active = (p) => path === p || (p === '/' && path === '/') || (p !== '/' && path.startsWith(p));
  return <header className="sticky top-0 z-50 border-b border-[#202229] bg-[#090a0d]/95 backdrop-blur">
    <div className="container-fit flex h-[64px] items-center justify-between">
      <Link href="/" onClick={() => setOpen(false)}><Logo /></Link>
      <nav className="hidden items-center gap-2 md:flex">
        <Link href="/" className={`rounded-full px-4 py-2 text-xs font-semibold transition ${active('/') ? 'bg-lime text-black' : 'text-[#a2a5ad] hover:text-white'}`}>Workouts</Link>
        <Link href="/my-plan" className={`rounded-full px-4 py-2 text-xs font-semibold transition ${active('/my-plan') ? 'bg-lime text-black' : 'text-[#a2a5ad] hover:text-white'}`}>My Plan</Link>
      </nav>
      <div className="hidden items-center gap-6 md:flex">
        <Link href="/my-plan" className="text-xs text-[#a2a5ad]">Plan <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-lime px-1.5 py-0.5 font-bold text-black">{plan.length}</span></Link>
        <Link href="/my-plan?tab=saved" className="text-xs text-[#a2a5ad]">Saved <span className="ml-1 text-[#e2e4e8]">{saved.length}</span></Link>
      </div>
      <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="border-t border-[#202229] bg-[#0d0f13] px-5 py-4 md:hidden">
      <div className="container-fit flex flex-col gap-2">
        <Link onClick={() => setOpen(false)} href="/" className="rounded-lg px-3 py-3 text-sm">Workouts</Link>
        <Link onClick={() => setOpen(false)} href="/my-plan" className="rounded-lg px-3 py-3 text-sm">My Plan <span className="ml-1 text-lime">{plan.length}</span></Link>
        <Link onClick={() => setOpen(false)} href="/my-plan?tab=saved" className="rounded-lg px-3 py-3 text-sm">Saved <span className="ml-1 text-[#aaa]">{saved.length}</span></Link>
      </div>
    </div>}
  </header>;
}
