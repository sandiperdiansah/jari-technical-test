import { AvatarProps } from "@/components/shared/types";
import clsx from "clsx";
import Image from "next/image";

const Avatar = (props: AvatarProps) => {
    const { size = "md", src, alt = "avatar", ...rest } = props;

    return (
        <div
            className={clsx(
                "relative inline-block shrink-0 cursor-pointer overflow-hidden rounded-full",
                {
                    "size-8": size === "xs",
                    "size-10": size === "sm",
                    "size-12": size === "md",
                },
            )}
            {...rest}
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="100%"
                className="object-cover object-center"
            />
        </div>
    );
};

export default Avatar;
