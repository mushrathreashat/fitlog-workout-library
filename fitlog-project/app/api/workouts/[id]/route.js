import { NextResponse } from 'next/server';
import { getWorkout } from '@/lib/api';

export async function GET(request, { params }) {
  try {
    const workout = await getWorkout(params.id);
    return NextResponse.json(workout);
  } catch (error) {
    return NextResponse.json({ message: 'Workout not found' }, { status: 404 });
  }
}
