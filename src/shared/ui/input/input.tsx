export const Input = ({ placeholder }: { placeholder: string }) => {
    return (
        <input
            className="mb-[18px] lg:mb-7 w-full border rounded-[14px] bg-[#442E46] bg-opacity-10 border-[#452E47] border-opacity-25 p-[22px]"
            type="text"
            placeholder={placeholder}
        />
    );
};
