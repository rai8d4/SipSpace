import { Cafe } from './cafe';

export interface Visit {
  _id?: string;
  date: string;
  cafeId: string | Cafe;
  drinkName: string;
  drinkPrice: number;
  drinkRating: number;
  ambiance: string;
  productivityLevel: number;
  notes: string;
}