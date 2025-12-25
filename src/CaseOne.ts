type Person = {
    code: string;
    name: string;
    parent: string | null;
};

const people: Person[] = [
    { code: "A001", name: "Wati", parent: null },
    { code: "A002", name: "Wira", parent: "A001" },
    { code: "A003", name: "Andi", parent: "A002" },
    { code: "A004", name: "Bagus", parent: "A002" },
    { code: "A005", name: "Siti", parent: "A001" },
    { code: "A006", name: "Hasan", parent: "A005" },
    { code: "A007", name: "Abdul", parent: "A006" },
];

export class CaseOne {
    public run(input: string | string[]): void {
        if (typeof input === "string") {
            console.log(`Input: ${input}`);
            const descendants = this.getDescendants(input);

            console.log("Output:");
            descendants.forEach((name) => console.log(name));
        } else {
            input.forEach((input) => {
                console.log(`Input: ${input}`);
                const descendants = this.getDescendants(input);

                console.log("Output:");
                descendants.forEach((name) => console.log(name));
            });
        }
    }

    private getDescendants(parentCode: string): string[] {
        const result: string[] = [];
        const children = people.filter((p) => p.parent === parentCode);

        for (const child of children) {
            result.push(child.name);
            const grandChildren = this.getDescendants(child.code);
            result.push(...grandChildren);
        }
        return result;
    }
}
