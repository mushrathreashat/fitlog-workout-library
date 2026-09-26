import { Dumbbell } from 'lucide-react';

export default function Logo() {
  return <div className="flex items-center gap-2"><Dumbbell size={19} strokeWidth={3} className="text-lime rotate-[-25deg]"/><span className="display text-[20px] tracking-wide">FITLOG</span></div>;
}
