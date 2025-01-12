export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string;
  priceRange: string;
  sortBy: string;
}

export interface ThemeState {
  theme: 'light' | 'dark';
  highContrast: boolean;
}