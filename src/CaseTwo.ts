export class CaseTwo {
    public run(input: number | number[]): void {
        if (typeof input === "number") {
            console.log(`Input: ${input}`);

            const result = this.generateFibonacci(input);
            console.log(`Output: ${result.join(", ")}`);
        } else {
            input.forEach((val) => {
                console.log(`Input: ${val}`);

                const result = this.generateFibonacci(val);
                console.log(`Output: ${result.join(", ")}`);
            });
        }
    }

    private generateFibonacci(n: number): number[] {
        if (n <= 0) return [];
        if (n === 1) return [0];

        const result = [0, 1];

        for (let i = 2; i < n; i++) {
            const nextFib = result[i - 1] + result[i - 2];
            result.push(nextFib);
        }

        return result;
    }
}
