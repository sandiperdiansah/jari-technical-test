import For from "@/components/shared/For";
import { DotProps } from "@/components/shared/types";
import clsx from "clsx";
import { memo } from "react";

const Dot = ({ count = 8, className, ...props }: DotProps) => {
    return (
        <For each={[...Array(count)]}>
            {() => (
                <span
                    className={clsx("block size-1 rounded-full bg-amber-600", className)}
                    aria-hidden="true"
                    {...props}
                ></span>
            )}
        </For>
    );
};

export default memo(Dot);
