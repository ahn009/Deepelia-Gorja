export interface NavLink {
  label: string;
  path: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface BookReview {
  text: string;
  author: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  coverImage: string;
  reviews: BookReview[];
}

export interface Passion {
  src: string;
  label: string;
  alt: string;
}

export interface Country {
  name: string;
  year: string;
  label: string;
}

export interface SpeakingTopic {
  title: string;
  desc: string;
}

export interface SpeakingEvent {
  year: string;
  event: string;
  location: string;
  desc: string;
}
