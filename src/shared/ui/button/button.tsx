import cn from "classnames";
import { FC, PropsWithChildren } from "react";

type PropsButton = {
    type?: "primary" | "secondary";
    className?: string;
    size?: "normal" | "small";
    onClick?: () => void;
};

export const Button: FC<PropsWithChildren<PropsButton>> = ({
    children,
    type = "primary",
    className,
    size = "normal",
    onClick,
}) => {
    const variants = cn(
        "rounded-full font-sans text-white block",
        {
            "bg-beige": type === "primary",
            "py-2 px-4 lg:px-6 lg:py-3 border bg-[#F3EFEC24] text-sm font-bold leading-4 lg:leading-5":
                type === "secondary",
            "px-[2.125rem] py-5 font-bold text-base leading-6": type === "primary" && size === "normal",
            "px-[1.375rem] py-3 text-sm leading-[1.375rem]": type === "primary" && size === "small",
        },

        className,
    );

    return (
        <button className={variants} onClick={onClick}>
            {children}
        </button>
    );
};
