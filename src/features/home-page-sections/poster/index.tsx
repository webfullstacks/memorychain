import { routes } from "@/shared/config";
import Button from "@/shared/ui/button";
import { Link } from "react-router-dom";

const Poster = () => {
    return (
        <section id="poster" className="pt-48 lg:pt-60 bg-transparent relative z-10 overflow-hidden">
            <div className="container relative z-10">
                <p className=" text-center text-sm lg:text-lg lg:leading-4 lg:tracking-[0.24em] leading-none font-radiotechnika text-gradient">
                    Создайте ценный
                </p>
                <h1 className="lg:text-border-white mt-5 lg:mt-6 text-center text-[3.5rem] lg:text-[6rem] leading-[3.375rem] lg:leading-[5.778rem] tracking-[.14em] text-white font-radiotechnika">
                    Архив
                </h1>
                <p className="mt-2.5 lg:mt-6 text-center text-white text-sm lg:text-2xl lg:tracking-[.04em] leading-6 font-radiotechnika">
                    передавайте свой ключ <br className="lg:hidden" /> потомкам
                </p>
                <div>
                    <Link to={routes.heroes}>
                        <Button className="mx-auto mt-10 lg:mt-16">Узнать своих героев</Button>
                    </Link>
                </div>
            </div>
            <div className="relative z-10 pt-[15%] lg:pt-36 mt-12 md:mt-14 px-7 lg:px-28 max-w-[1184px] mx-auto">
                <div>
                    <img src="/images/main/poster/tree.png" alt="tree" className="w-full block" fetchPriority="high" />
                </div>
                <div className="absolute -z-10 top-0 w-[calc(100vw_+_2%)] lg:w-full left-1/2 -translate-x-1/2 right-0">
                    <img
                        src="/images/vectors/circle-vectors.png"
                        alt="vectors"
                        className="w-full animate-spin"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </section>
    );
};

export { Poster };
