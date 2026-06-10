import { motion } from 'framer-motion';
import type { Artwork } from '@/types';

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
  onClick: (a: Artwork) => void;
}

export function ArtworkCard({ artwork, index, onClick }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={() => onClick(artwork)}
      className="group cursor-pointer"
    >
      <div className="glass-panel overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]">
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={artwork.image}
            alt={artwork.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/80 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-[#D4AF37]/20 px-2.5 py-1 text-[11px] font-medium text-[#D4AF37]">
            {artwork.room}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-display text-lg font-semibold text-[#E8E3DE]">
            {artwork.title}
          </h3>
          <p className="mt-0.5 text-xs text-[#A39E99]">{artwork.artist}</p>
          <p className="mt-1 text-[11px] text-mono text-[#A39E99]/50">
            {artwork.year}
          </p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#A39E99]/70">
            {artwork.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
