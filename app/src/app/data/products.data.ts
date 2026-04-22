import { Product } from '../models/product.interface';

// Dati iniziali del catalogo: 8 auto caricate all'avvio dell'app (nessun backend).
export const PRODUCTS: Product[] = [
    {
      name: "Volvo XC60 Recharge T6",
      price: 58000,
      description: "SUV premium ibrido plug-in con trazione integrale, sicurezza avanzata e interni minimalisti.",
      brand: "Volvo",
      imageUrl: "https://www.autotecnica.org/wp-content/uploads/2018/11/IMG_5161.jpeg",
      fuelType: "Ibrido Plug-in",
      year: 2023,
      horsepower: 340
    },
    {
      name: "Tesla Model 3 Long Range",
      price: 52000,
      description: "Berlina elettrica con grande autonomia e prestazioni elevate.",
      brand: "Tesla",
      imageUrl: "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2024/09/14/1726316929-tesla-model-3-long-range-2024-prova-autonomia-01.jpg?_=1726316929",
      fuelType: "Elettrico",
      year: 2023,
      horsepower: 325
    },
    {
      name: "Toyota Corolla Hybrid",
      price: 32000,
      description: "Compatta ibrida affidabile ed efficiente nei consumi.",
      brand: "Toyota",
      imageUrl: "https://scene7.toyota.eu/is/image/toyotaeurope/COR0004b_25_WEB_crop:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
      fuelType: "Ibrido",
      year: 2022,
      horsepower: 140
    },
    {
      name: "Fiat 500 Hybrid",
      price: 18000,
      description: "City car iconica italiana, compatta e perfetta per la città.",
      brand: "Fiat",
      imageUrl: "https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2025/07/fiat-500-hybrid-2025-07_03.jpg",
      fuelType: "Mild Hybrid",
      year: 2022,
      horsepower: 70
    },
    {
      name: "Jeep Wrangler Rubicon",
      price: 70000,
      description: "Fuoristrada puro, progettato per terreni estremi e avventure off-road.",
      brand: "Jeep",
      imageUrl: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/t0fwdwothjz7ffi7tt8t.jpg",
      fuelType: "Benzina",
      year: 2023,
      horsepower: 270
    },
    {
      name: "BMW Serie 3 320i",
      price: 48000,
      description: "Berlina sportiva premium con guida dinamica e comfort elevato.",
      brand: "BMW",
      imageUrl: "https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00035219.JPG",
      fuelType: "Benzina",
      year: 2023,
      horsepower: 184
    },
    {
      name: "Audi Q5 40 TDI",
      price: 60000,
      description: "SUV premium con tecnologia avanzata e ottimo comfort di guida.",
      brand: "Audi",
      imageUrl: "https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/primo_contatto_galleria/2020/12/audi-q5-2020-12.jpg",
      fuelType: "Diesel",
      year: 2022,
      horsepower: 204
    },
    {
      name: "Volkswagen Golf 8 1.5 TSI",
      price: 30000,
      description: "Hatchback versatile, una delle auto più vendute in Europa.",
      brand: "Volkswagen",
      imageUrl: "https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00065269.JPG",
      fuelType: "Benzina",
      year: 2023,
      horsepower: 150
    }
  ];

