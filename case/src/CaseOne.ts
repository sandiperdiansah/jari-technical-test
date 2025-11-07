import type { IFruit } from "@/types";

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: "Apel",
        fruitType: "IMPORT",
        stock: 10,
    },
    {
        fruitId: 2,
        fruitName: "Kurma",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 3,
        fruitName: "apel",
        fruitType: "IMPORT",
        stock: 50,
    },
    {
        fruitId: 4,
        fruitName: "Manggis",
        fruitType: "LOCAL",
        stock: 100,
    },
    {
        fruitId: 5,
        fruitName: "Jeruk Bali",
        fruitType: "LOCAL",
        stock: 10,
    },
    {
        fruitId: 5,
        fruitName: "KURMA",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 5,
        fruitName: "Salak",
        fruitType: "LOCAL",
        stock: 150,
    },
];

export class CaseOne {
    // 1. Buah apa saja yang dimiliki andi?
    public getFruits() {
        const unique = new Set(fruits.map((fruit) => fruit.fruitName.toLowerCase()));

        return Array.from(unique).map((fruitName) => {
            const str =  fruitName.split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1)).join(' ');
            return str
        });
    }

    // 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
    public getFruitsByType(): Record<string, String[]> {
        const fruitTypeMap: Record<string, Set<string>> = {};
        fruits.forEach((fruit) => {
            if (!fruitTypeMap[fruit.fruitType]) {
                fruitTypeMap[fruit.fruitType] = new Set();
            }
            fruitTypeMap[fruit.fruitType]?.add(fruit.fruitName.toLowerCase());
        });
        return Object.fromEntries(
            Object.entries(fruitTypeMap).map(([key, value]) => [key, Array.from(value)])
        );
    }

    // 3. Berapa total stock buah yang ada di masing-masing wadah?
    public getStockByType(): Record<string, number> {
        const stockTypeMap: Record<string, number> = {};
        fruits.forEach((fruit) => {
            stockTypeMap[fruit.fruitType] = (stockTypeMap[fruit.fruitType] ?? 0) + fruit.stock;
        });
        return stockTypeMap;
    }

    // 4. Apakah ada komentar terkait kasus di atas?
    public getComments(): string {
        return "Pada kasus di atas, terdapat beberapa duplikasi nama buah dengan variasi kapitalisasi yang berbeda. Hal ini menunjukkan pentingnya normalisasi data sebelum melakukan analisis lebih lanjut. Selain itu, penggunaan struktur data seperti Set sangat membantu dalam mengelola koleksi unik, terutama ketika berurusan dengan data yang mungkin memiliki entri duplikat.";
    }
}
