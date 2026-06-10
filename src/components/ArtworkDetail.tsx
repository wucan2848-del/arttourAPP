import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Calendar, MapPin } from 'lucide-react';
import type { Artwork } from '@/types';

interface Props {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtworkDetail({ artwork, isOpen, onClose }: Props) {
  if (!artwork) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#1A1714]/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 bottom-3 top-[8vh] z-50 sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2"
          >
            <div className="glass-panel-strong h-full overflow-hidden">
              <div className="relative h-56 sm:h-64">
                <img loading="lazy"
                  src={artwork.image}
                  alt={artwork.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/30 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute right-3 top-3 rounded-full bg-[#1A1714]/60 p-2 text-[#E8E3DE] backdrop-blur-sm transition-colors hover:bg-[#1A1714]/80"
                >
                  <X size={18} />
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-[#D4AF37]/20 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                  {artwork.room}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-display text-2xl font-bold text-white">
                    {artwork.title}
                  </h2>
                </div>
              </div>
              <div className="space-y-3 overflow-y-auto p-5" style={{ maxHeight: 'calc(100% - 16rem)' }}>
                <div className="flex flex-wrap gap-3 text-sm text-[#A39E99]">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-[#D4AF37]" />
                    {artwork.artist}
                  </span>
                  <span className="flex items-center gap-1.5 text-mono text-xs">
                    <Calendar size={14} className="text-[#D4AF37]" />
                    {artwork.year}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs">
                    <MapPin size={14} className="text-[#D4AF37]" />
                    {artwork.room}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#E8E3DE]/80">
                  {artwork.description}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
