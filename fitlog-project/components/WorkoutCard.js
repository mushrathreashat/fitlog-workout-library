import Link from 'next/link';
import { Clock3, Flame, Star } from 'lucide-react';

export default function WorkoutCard({ workout }) {
  return <Link href={`/workouts/${workout.id}`} className="group overflow-hidden rounded-xl border border-[#272a33] bg-[#121419] transition hover:-translate-y-1 hover:border-[#444954]">
    <div className="aspect-[1.7] overflow-hidden bg-[#e9ebef]"><img src={workout.image} alt={workout.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"/></div>
    <div className="p-4">
      <div className="mb-3 flex flex-wrap gap-1.5">{workout.muscleGroups.map(tag => <span key={tag} className="rounded-full bg-lime px-2 py-1 text-[9px] font-extrabold uppercase text-black">{tag}</span>)}</div>
      <h3 className="display text-[23px] uppercase leading-none">{workout.name}</h3>
      <p className="mt-2 truncate text-xs text-[#858994]">{workout.equipment}</p>
      <div className="mt-4 flex items-center gap-3 border-t border-[#252832] pt-3 text-[10px] text-[#a1a5ae]">
        <span className="inline-flex items-center gap-1"><Clock3 size={12}/> {workout.duration} min</span><span className="inline-flex items-center gap-1"><Flame size={12}/> {workout.caloriesBurned} kcal</span><span className="inline-flex items-center gap-1"><Star size={12}/> {workout.rating}</span>
      </div>
    </div>
  </Link>;
}
