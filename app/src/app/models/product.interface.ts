// Contratto TypeScript che descrive la struttura di un'auto nel catalogo.
// Singola fonte di verità: tutti i componenti importano questa interfaccia.
export interface Product {
  name: string;
  price: number;
  description: string;
  brand: string;
  imageUrl: string;
  fuelType: string;
  year: number;
  horsepower: number;
}