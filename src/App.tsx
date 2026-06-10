import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Clock, Ticket, Palette, Route, ChevronRight,
  Search, X, Building2, ArrowLeft
} from 'lucide-react';
import type { Artwork, View } from '@/types';
import { cities } from '@/data/cities';
import { museums, getMuseumsByCity, getMuseumById, searchMuseums } from '@/data/museums';
import { ArtworkCard } from '@/components/ArtworkCard';
import { ArtworkDetail } from '@/components/ArtworkDetail';
import { RouteSelector } from '@/components/RouteSelector';
import { ChatBot } from '@/components/ChatBot';
import './App.css';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [cityId, setCityId] = useState<string>('');
  const [museumId, setMuseumId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const currentCity = useMemo(() => cities.find(c => c.id === cityId), [cityId]);
  const currentMuseum = useMemo(() => getMuseumById(museumId), [museumId]);
  const searchResults = useMemo(() => searchMuseums(searchQuery), [searchQuery]);
  const isSearching = searchQuery.trim().length > 0;

  const openCity = useCallback((id: string) => {
    setCityId(id);
    setView('city');
  }, []);

  const openMuseum = useCallback((id: string) => {
    setMuseumId(id);
    setView('museum');
  }, []);

  const openArtwork = useCallback((a: Artwork) => {
    setSelectedArtwork(a);
    setDetailOpen(true);
  }, []);

  const goBack = useCallback(() => {
    if (view === 'museum') {
      setView('city');
      setMuseumId('');
    } else if (view === 'city') {
      setView('home');
      setCityId('');
    }
  }, [view]);

  return (
    <div className="min-h-[100dvh] bg-[#1A1714] text-[#E8E3DE]">
      <AnimatePresence mode="wait">
        {/* ===== HOME ===== */}
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero */}
            <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
              <img loading="lazy"
                src="/images/city-florence.jpg"
                alt="ArtSpace"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/50 to-[#1A1714]/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h1 className="text-display text-3xl font-bold text-white sm:text-4xl">
                    ArtSpace
                  </h1>
                  <p className="mt-2 text-sm text-[#A39E99]">
                    发现世界每个角落的艺术空间
                  </p>
                </motion.div>

                {/* Search */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 w-full max-w-md"
                >
                  <div className="glass-panel-strong flex items-center gap-3 px-4 py-3">
                    <Search size={18} className="shrink-0 text-[#A39E99]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="搜索城市、美术馆、展品或艺术家..."
                      className="flex-1 bg-transparent text-sm text-[#E8E3DE] placeholder-[#A39E99]/40 outline-none"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="text-[#A39E99] hover:text-white">
                        <X size={16} />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-5 pb-24">
              {/* Search Results */}
              <AnimatePresence>
                {isSearching && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6"
                  >
                    <h2 className="text-display text-lg font-semibold">
                      搜索结果
                      <span className="ml-2 text-sm font-normal text-[#A39E99]">
                        {searchResults.length} 个美术馆
                      </span>
                    </h2>
                    {searchResults.length === 0 ? (
                      <p className="mt-4 text-sm text-[#A39E99]">未找到匹配的美术馆</p>
                    ) : (
                      <div className="mt-4 grid grid-cols-1 gap-3">
                        {searchResults.map((m) => (
                          <MuseumListCard
                            key={m.id}
                            museum={m}
                            onClick={() => {
                              setCityId(m.cityId);
                              setMuseumId(m.id);
                              setView('museum');
                              setSearchQuery('');
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Popular Cities Tags */}
              {!isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => openCity(city.id)}
                        className="glass-pill flex items-center gap-1.5 px-4 py-2 text-sm text-[#A39E99] transition-all hover:bg-[#E8E3DE]/10 hover:text-[#E8E3DE]"
                      >
                        <MapPin size={12} />
                        {city.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* City Cards Grid */}
              {!isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <h2 className="text-display text-lg font-semibold">探索城市</h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {cities.map((city, i) => (
                      <motion.button
                        key={city.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openCity(city.id)}
                        className="group relative overflow-hidden rounded-2xl text-left"
                      >
                        <img loading="lazy"
                          src={city.image}
                          alt={city.name}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/90 via-[#1A1714]/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                            <MapPin size={10} />
                            {city.country}
                          </div>
                          <h3 className="mt-1 text-lg font-semibold text-white">{city.name}</h3>
                          <p className="text-xs text-[#A39E99]">{city.nameEn}</p>
                          <p className="mt-1 text-[11px] text-[#A39E99]/60">
                            {city.museumIds.length} 座美术馆
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* ===== CITY PAGE ===== */}
        {view === 'city' && currentCity && (
          <motion.div
            key="city"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* City Hero */}
            <div className="relative h-[35vh] min-h-[260px] overflow-hidden">
              <img loading="lazy" src={currentCity.image} alt={currentCity.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/40 to-[#1A1714]/30" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <button onClick={goBack} className="mb-3 flex items-center gap-1 text-sm text-[#A39E99] hover:text-white">
                  <ArrowLeft size={16} /> 返回
                </button>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <MapPin size={14} />
                  <span className="text-sm">{currentCity.country}</span>
                </div>
                <h1 className="text-display mt-1 text-2xl font-bold text-white sm:text-3xl">{currentCity.name}</h1>
                <p className="text-sm text-[#A39E99]">{currentCity.nameEn}</p>
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-5 pb-24 pt-6">
              <p className="text-sm leading-relaxed text-[#E8E3DE]/80">{currentCity.description}</p>

              <h2 className="text-display mt-6 text-lg font-semibold">
                美术馆
                <span className="ml-2 text-sm font-normal text-[#A39E99]">{currentCity.museumIds.length} 座</span>
              </h2>

              <div className="mt-4 space-y-3">
                {getMuseumsByCity(currentCity.id).map((m, i) => (
                  <motion.button
                    key={m.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => openMuseum(m.id)}
                    className="flex w-full items-center gap-4 rounded-2xl bg-[#E8E3DE]/[0.04] p-4 text-left ring-1 ring-white/5 transition-all hover:bg-[#E8E3DE]/[0.07]"
                  >
                    <img loading="lazy" src={m.image} alt={m.name} className="h-20 w-20 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-[#E8E3DE]">{m.name}</h3>
                      <p className="text-[11px] text-[#A39E99]">{m.nameEn}</p>
                      <p className="mt-1 line-clamp-2 text-xs text-[#A39E99]/70">{m.description}</p>
                      <div className="mt-2 flex items-center gap-3 text-[10px] text-[#A39E99]/50">
                        <span className="flex items-center gap-1"><Palette size={10} /> {m.artworks.length}件展品</span>
                        <span className="flex items-center gap-1"><Route size={10} /> {m.itineraries.length}条路线</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="shrink-0 text-[#A39E99]/30" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== MUSEUM PAGE ===== */}
        {view === 'museum' && currentMuseum && (
          <motion.div
            key="museum"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Museum Hero */}
            <div className="relative h-[45vh] min-h-[360px] overflow-hidden">
              <img loading="lazy" src={currentMuseum.image} alt={currentMuseum.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/40 to-[#1A1714]/30" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <button onClick={goBack} className="mb-3 flex items-center gap-1 text-sm text-[#A39E99] hover:text-white">
                  <ArrowLeft size={16} /> 返回
                </button>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Building2 size={14} />
                  <span className="text-sm">{currentMuseum.type === 'museum' ? '博物馆' : currentMuseum.type === 'gallery' ? '画廊' : '文化中心'}</span>
                </div>
                <h1 className="text-display mt-1 text-2xl font-bold text-white sm:text-3xl">{currentMuseum.name}</h1>
                <p className="text-sm text-[#A39E99]">{currentMuseum.nameEn}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#E8E3DE]/[0.06] px-3 py-1 text-xs text-[#A39E99]">
                    <Clock size={11} /> {currentMuseum.openHours}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#E8E3DE]/[0.06] px-3 py-1 text-xs text-[#A39E99]">
                    <Ticket size={11} /> {currentMuseum.ticket}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-5 pb-24">
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6 text-sm leading-relaxed text-[#E8E3DE]/80"
              >
                {currentMuseum.description}
              </motion.p>

              {/* Quick Nav */}
              <div className="grid grid-cols-2 gap-3">
                <NavCard
                  icon={<Palette size={20} />}
                  title="明星展品"
                  subtitle={`${currentMuseum.artworks.length} 件镇馆之宝`}
                  scrollTarget="artworks-section"
                  color="#D4AF37"
                />
                <NavCard
                  icon={<Route size={20} />}
                  title="游览路线"
                  subtitle={`${currentMuseum.itineraries.length} 种方案`}
                  scrollTarget="routes-section"
                  color="#D44B23"
                />
              </div>

              {/* Artworks */}
              <div id="artworks-section" className="mt-10 scroll-mt-6">
                <h2 className="text-display text-lg font-semibold">明星展品</h2>
                <p className="mt-1 text-sm text-[#A39E99]">
                  {currentMuseum.name}最珍贵的 {currentMuseum.artworks.length} 件杰作
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {currentMuseum.artworks.map((a, i) => (
                    <ArtworkCard key={a.id} artwork={a} index={i} onClick={openArtwork} />
                  ))}
                </div>
              </div>

              {/* Routes */}
              <div id="routes-section" className="mt-10 scroll-mt-6">
                <h2 className="text-display text-lg font-semibold">游览路线</h2>
                <p className="mt-1 text-sm text-[#A39E99]">根据你的时间，选择最适合的参观方案</p>
                <div className="mt-4">
                  <RouteSelector itineraries={Object.fromEntries(currentMuseum.itineraries.map(r => [r.duration, r]))} />
                </div>
              </div>
            </div>

            {/* AI Chat - with current museum context */}
            <ChatBot museum={currentMuseum} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Artwork Detail Modal */}
      <ArtworkDetail artwork={selectedArtwork} isOpen={detailOpen} onClose={() => setDetailOpen(false)} />

      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}

/* ===== Sub-components ===== */

function NavCard({ icon, title, subtitle, scrollTarget, color }: {
  icon: React.ReactNode; title: string; subtitle: string; scrollTarget: string; color: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' })}
      className="flex items-center gap-3 rounded-2xl bg-[#E8E3DE]/[0.04] p-4 text-left ring-1 ring-white/5 transition-all hover:bg-[#E8E3DE]/[0.07]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}15`, color }}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#E8E3DE]">{title}</p>
        <p className="text-[11px] text-[#A39E99]">{subtitle}</p>
      </div>
    </motion.button>
  );
}

function MuseumListCard({ museum, onClick }: { museum: typeof museums[0]; onClick: () => void }) {
  const city = cities.find(c => c.id === museum.cityId);
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl bg-[#E8E3DE]/[0.04] p-3 text-left ring-1 ring-white/5 transition-all hover:bg-[#E8E3DE]/[0.07]"
    >
      <img loading="lazy" src={museum.image} alt={museum.name} className="h-16 w-16 rounded-lg object-cover" />
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-[#E8E3DE]">{museum.name}</h3>
        <p className="text-[11px] text-[#A39E99]">{museum.nameEn}</p>
        {city && <p className="mt-0.5 text-[10px] text-[#D4AF37]">{city.name}，{city.country}</p>}
      </div>
      <ChevronRight size={14} className="shrink-0 text-[#A39E99]/30" />
    </motion.button>
  );
}
