import { NextResponse } from 'next/server';
import { getWorkouts } from '@/lib/api';

export async function GET() {
  try {
    const workouts = await getWorkouts();
    return NextResponse.json(workouts);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch workouts' }, { status: 500 });
  }
}
