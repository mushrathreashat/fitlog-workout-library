export const API_URL = 'https://api.abcz.workers.dev/api/fitlog';

export async function getWorkouts() {
  const response = await fetch(API_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error('Could not load workouts');
  const data = await response.json();
  return Array.isArray(data) ? data : data.data || [];
}

export async function getWorkout(id) {
  const response = await fetch(`${API_URL}/${id}`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Workout not found');
  const data = await response.json();
  return data?.data || data;
}
