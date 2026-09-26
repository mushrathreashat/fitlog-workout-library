'use client';
import { useEffect, useMemo, useState } from 'react';
import WorkoutCard from './WorkoutCard';
import { ArrowDownUp, Search } from 'lucide-react';

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('duration');
  const [search, setSearch] = useState('');

  useEffect(() => { fetch('/api/workouts').then(r => r.json()).then(setWorkouts).catch(() => setWorkouts([])).finally(() => setLoading(false)); }, []);
  const filtered = useMemo(() => [...workouts].filter(w => `${w.name} ${w.muscleGroups?.join(' ')}`.toLowerCase().includes(search.toLowerCase())).sort((a,b) => sort === 'calories' ? b.caloriesBurned-a.caloriesBurned : sort === 'rating' ? b.rating-a.rating : a.duration-b.duration), [workouts, sort, search]);

  return <section id="library" className="container-fit scroll-mt-24 py-14">
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="display text-4xl uppercase">The Library</h2><p className="mt-1 text-sm text-[#858994]">Twelve lifts covering every major muscle group.</p></div><div className="flex flex-col gap-2 sm:flex-row"><label className="flex h-10 items-center gap-2 rounded-md border border-[#2a2d35] bg-[#101217] px-3 text-xs text-[#777b85]"><Search size={14}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search workouts" className="w-36 bg-transparent outline-none placeholder:text-[#62656e]"/></label><label className="flex h-10 items-center gap-2 rounded-md border border-[#2a2d35] bg-[#101217] px-3 text-xs text-[#a2a5ad]"><ArrowDownUp size={14}/><span>Sort By</span><select value={sort} onChange={e=>setSort(e.target.value)} className="bg-transparent outline-none"><option value="duration">Duration</option><option value="calories">Calories</option><option value="rating">Rating</option></select></label></div></div>
    {loading ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{Array.from({length:6}).map((_,i)=><div key={i} className="overflow-hidden rounded-xl border border-[#242730]"><div className="skeleton aspect-[1.7]"/><div className="space-y-3 p-4"><div className="skeleton h-3 w-20 rounded"/><div className="skeleton h-6 w-3/4 rounded"/><div className="skeleton h-3 w-1/2 rounded"/></div></div>)}</div> : filtered.length ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(w=><WorkoutCard key={w.id} workout={w}/>)}</div> : <div className="rounded-xl border border-[#252832] py-20 text-center text-sm text-[#777b85]">No workouts found.</div>}
  </section>;
}
