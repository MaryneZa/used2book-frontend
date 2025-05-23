export interface BookListCardProps {
  books: Book[];
}


export interface Book {
  id: number;
  title: string;
  author: string[];
  cover_image_url: string;
  rating?: number;
  description?: string;
  genres?: string[]; // Array of genres
  accessibility?: boolean; // Indicates if the book is accessible
  offer?: boolean; // Indicates if the book is on offer
  price?: number;
  sellerNote?: string;
  allow_offers?: boolean;
  status?: string;
  seller_id?: number;
  average_rating?: number;
  num_ratings?: number;
  reading_status?: number;
  language?: string;
  isbn?: string;
  publisher?: string;
  publish_date?: string;

  library_id?: number;
}

export interface SaleBook {
  id: number;
  title: string;
  author: string[];
  cover_image_url: string;
  rating: number;
  description?: string;
  genres?: string[]; // Array of genres
  accessibility?: boolean; // Indicates if the book is accessible
  offer?: boolean; // Indicates if the book is on offer
  price?: number;
  seller_note?: string;
  allow_offers?: boolean;
  status?: string;
  seller_id: number;
  book_id?: number;
  average_rating?: number;
  num_ratings?: number;
  image_urls?: string[];

  phone_number?: string;
}


