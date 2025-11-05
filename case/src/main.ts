import { CaseOne } from "@/CaseOne";
import { CaseTwo } from "@/CaseTwo";

const caseOne = new CaseOne();
console.log("\n=== CASE 1 ===");

console.log("1. Buah apa saja yang dimiliki andi : ", caseOne.getFruits());
console.log(
    "2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah? : ",
    caseOne.getFruitsByType()
);
console.log(
    "3. Berapa total stock buah yang ada di masing-masing wadah? : ",
    caseOne.getStockByType()
);
console.log("4. Apakah ada komentar terkait kasus di atas? : ", caseOne.getComments());

const caseTwo = new CaseTwo();
console.log("\n\n=== CASE 2 ===");
console.log(
    "Case 2 -  Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar. Total komentar adalah : ",
    caseTwo.countComments()
);
