import { CaseOne } from "@/CaseOne";
import { CaseThree } from "@/CaseThree";
import { CaseTwo } from "@/CaseTwo";

const caseOne = new CaseOne();
const caseTwo = new CaseTwo();
const caseThree = new CaseThree();

console.log("\n>> Case One");
caseOne.run("A001");
caseOne.run(["A001", "A002"]);

console.log("\n>> Case Two");
caseTwo.run(5);
caseTwo.run([5, 10]);

console.log("\n>> Case Three");
caseThree.run("abcabcbb");
caseThree.run(["bbbbbb", "pwwkew"]);
