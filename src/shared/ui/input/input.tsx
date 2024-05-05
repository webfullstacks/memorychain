export const Input = ({ placeholder, noMargin }: { placeholder: string; noMargin?: boolean }) => {
    return (
        <input
            className={
                (!noMargin && "mb-[18px] lg:mb-7") +
                " w-full border rounded-[14px] bg-[#442E46] bg-opacity-10 border-[#452E47] border-opacity-25 p-[22px] text-sm"
            }
            type="text"
            placeholder={placeholder}
        />
    );
};
