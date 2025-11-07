"use client";

import For from "@/components/shared/For";
import { PinInputProps } from "@/components/shared/input/types";
import clsx from "clsx";
import { useCallback, useRef, useState } from "react";

const PinInput = (props: PinInputProps) => {
    const { each = 4, className, invalid, onComplete, onChange, ...rest } = props;
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [values, setValues] = useState<string[]>(Array(each).fill(""));

    const handleInputChange = useCallback(
        (index: number, value: string) => {
            if (!/^[0-9]$/.test(value) && value !== "") return;

            const newValues = [...values];
            newValues[index] = value;
            setValues(newValues);

            const pinValue = newValues.join("");
            onChange?.(pinValue);

            if (value && index < each - 1) {
                inputsRef.current[index + 1]?.focus();
            }

            if (pinValue.length === each) {
                onComplete?.(pinValue);
            }
        },
        [values, each, onChange, onComplete],
    );

    const handleKeyDown = useCallback(
        (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Backspace" && !values[index] && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        },
        [values],
    );

    const handlePaste = useCallback(
        (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const paste = e.clipboardData.getData("text");
            const pasteNumbers = paste.replace(/\D/g, "").slice(0, each);

            const newValues = [...values];
            for (let i = 0; i < pasteNumbers.length; i++) {
                newValues[i] = pasteNumbers[i];
            }
            setValues(newValues);

            const pinValue = newValues.join("");
            onChange?.(pinValue);

            if (pinValue.length === each) {
                onComplete?.(pinValue);
            }

            const nextIndex = Math.min(pasteNumbers.length, each - 1);
            inputsRef.current[nextIndex]?.focus();
        },
        [values, each, onChange, onComplete],
    );

    return (
        <div className="flex w-full items-center justify-center gap-3">
            <For each={[...Array(each)]}>
                {(_, i) => (
                    <input
                        className={clsx(
                            "size-12 rounded-md text-center ring-1 transition-colors focus:outline-none",
                            !invalid ? "input-primary" : "input-error",
                            className,
                        )}
                        ref={(el) => {
                            inputsRef.current[i] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        minLength={1}
                        maxLength={1}
                        placeholder="o"
                        autoComplete="off"
                        aria-label="pin"
                        value={values[i]}
                        onChange={(e) => handleInputChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        onPaste={handlePaste}
                        {...rest}
                    />
                )}
            </For>
        </div>
    );
};

export default PinInput;
