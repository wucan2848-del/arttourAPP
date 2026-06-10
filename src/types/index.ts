export interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  description: string;
  image: string;
  room?: string;
}

export interface Itinerary {
  duration: string;
  title: string;
  description: string;
  steps: string[];
  highlights: string[];
}

export interface Museum {
  id: string;
  name: string;
  nameEn: string;
  cityId: string;
  type: 'museum' | 'gallery' | 'cultural_center';
  description: string;
  image: string;
  openHours: string;
  ticket: string;
  address: string;
  artworks: Artwork[];
  itineraries: Itinerary[];
  knowledge: Record<string, string>;
}

export interface City {
  id: string;
  name: string;
  nameEn: string;
  country: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
  museumIds: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type View = 'home' | 'city' | 'museum';
