'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);
  const [toast, setToast] = useState('');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setPlan(JSON.parse(localStorage.getItem('fitlog-plan') || '[]'));
      setSaved(JSON.parse(localStorage.getItem('fitlog-saved') || '[]'));
      setDone(JSON.parse(localStorage.getItem('fitlog-done') || '[]'));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-plan', JSON.stringify(plan)); }, [plan, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-saved', JSON.stringify(saved)); }, [saved, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-done', JSON.stringify(done)); }, [done, hydrated]);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(window.__fitlogToast);
    window.__fitlogToast = window.setTimeout(() => setToast(''), 2400);
  };

  const addToPlan = (workout) => {
    if (plan.some(x => x.id === workout.id)) return showToast('Already in today\'s plan');
    if (plan.length >= 5) return showToast('Today\'s plan is full (5 lifts)');
    setPlan(prev => [...prev, workout]);
    showToast('Added to today\'s plan');
  };

  const removeFromPlan = (id) => {
    setPlan(prev => prev.filter(x => x.id !== id));
    setDone(prev => prev.filter(x => x !== id));
    showToast('Removed from today\'s plan');
  };

  const toggleSaved = (workout) => {
    if (saved.some(x => x.id === workout.id)) {
      setSaved(prev => prev.filter(x => x.id !== workout.id));
      showToast('Removed from saved');
    } else {
      setSaved(prev => [...prev, workout]);
      showToast('Saved for later');
    }
  };

  const markDone = (id) => {
    setDone(prev => prev.includes(id) ? prev : [...prev, id]);
    showToast('Workout marked as done');
  };

  const value = useMemo(() => ({ plan, saved, done, addToPlan, removeFromPlan, toggleSaved, markDone, showToast }), [plan, saved, done]);
  return <FitLogContext.Provider value={value}>{children}{toast && <div className="toast fixed bottom-5 right-5 z-[100] rounded-lg border border-lime/40 bg-[#171a20] px-4 py-3 text-sm font-semibold shadow-2xl">{toast}</div>}</FitLogContext.Provider>;
}

export const useFitLog = () => useContext(FitLogContext);
