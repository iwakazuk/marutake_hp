export interface Room {
  id: string;
  name: string;
  price: number;
  size: number;
  floor: number;
  available: boolean;
  availableDate?: string;
  features: string[];
  images: string[];
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

