export const Input = ({
    placeholder,
    noMargin,
    className,
}: {
    placeholder: string;
    noMargin?: boolean;
    className?: string;
}) => {
    return (
        <input
            className={
                (!noMargin && "mb-[18px] lg:mb-7") +
                " w-full border rounded-[14px] bg-[#442E46] bg-opacity-10 border-[#452E47] border-opacity-25 p-[22px] text-sm " +
                className
            }
            type="text"
            placeholder={placeholder}
        />
    );
};
