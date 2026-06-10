import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star } from 'lucide-react';
import type { Itinerary } from '@/types';

interface Props {
  itineraries: Record<string, Itinerary>;
}

const durationLabels: Record<string, string> = {
  '1.5': '1.5 小时',
  '3': '3 小时',
  '5-6': '5-6 小时',
};

export function RouteSelector({ itineraries }: Props) {
  const [active, setActive] = useState<string>('3');
  const data = itineraries[active];

  return (
    <div className="space-y-4">
      {/* Duration tabs */}
      <div className="flex gap-2">
        {Object.keys(itineraries).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex-1 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
              active === key
                ? 'glass-panel-strong text-[#D4AF37] shadow-[0_4px_24px_rgba(212,175,55,0.1)]'
                : 'bg-[#E8E3DE]/[0.03] text-[#A39E99] hover:bg-[#E8E3DE]/[0.06]'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock size={14} />
              <span>{durationLabels[key]}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Route detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-5"
        >
          <h3 className="text-display text-lg font-semibold text-[#E8E3DE]">
            {data.title}
          </h3>
          <p className="mt-1 text-sm text-[#A39E99]">{data.description}</p>

          {/* Highlights */}
          <div className="mt-4 flex flex-wrap gap-2">
            {data.highlights.map((h) => (
              <span
                key={h}
                className="flex items-center gap-1 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]"
              >
                <Star size={10} />
                {h}
              </span>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-5 space-y-3">
            {data.steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[11px] font-semibold text-[#D4AF37]">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-[#E8E3DE]/80">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
