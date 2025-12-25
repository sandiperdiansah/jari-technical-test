export class CaseThree {
    public run(input: string | string[]): void {
        if (typeof input === "string") {
            console.log(`Input: ${input}`);

            const result = this.lengthOfLongestSubstring(input);
            console.log(`Output: ${result}`);
        } else {
            input.forEach((val) => {
                console.log(`Input: ${val}`);

                const result = this.lengthOfLongestSubstring(val);
                console.log(`Output: ${result}`);
            });
        }
    }

    private lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;
        let start = 0;
        const charIndexMap: Record<string, number> = {};

        for (let end = 0; end < s.length; end++) {
            const char = s[end];

            if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
                start = charIndexMap[char] + 1;
            }

            charIndexMap[char] = end;
            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}
