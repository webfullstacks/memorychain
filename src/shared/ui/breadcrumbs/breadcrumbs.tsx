import { useNavigate } from "react-router-dom";

export const Breadcrumbs = ({ page }: { page: string }) => {
    const navigate = useNavigate();
    const width = window.innerWidth;

    return (
        <div className="mt-6 mb-10 lg:mb-20">
            {width > 1024 ? (
                <div>Главная &#x2022; {page}</div>
            ) : (
                <button className="flex items-center gap-2" onClick={() => navigate(-1)}>
                    <img className="rotate-180" src="/icons/arrow-right-black.svg" alt="arrow right" />
                    <span>Вернуться</span>
                </button>
            )}
        </div>
    );
};
