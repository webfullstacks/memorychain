import { routes } from "@/shared/config";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-violet py-8 text-white">
            <div className="container">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
                    <div className="lg:hidden mx-auto w-fit">
                        <img
                            src="/images/logo-full-white-colors.svg"
                            loading="lazy"
                            className="mix-blend-color-dodge"
                            alt="logo"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <img src="/images/logo-full-white.svg" loading="lazy" className="h-16" alt="logo" />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-11 items-center lg:opacity-70">
                        <a className="lg:hidden" href="mailto:Dust_Design@yandex.com" target="_blank">
                            Dust_Design@yandex.com
                        </a>
                        <a href="/" className="text-sm leading-5">
                            Главная
                        </a>
                        <a href="/" className="text-sm leading-5">
                            Наши герои
                        </a>
                        <a href="/" className="text-sm leading-5">
                            Помощь
                        </a>
                    </div>
                </div>
                <span className="block my-6 lg:mt-2 lg:mb-6 mx-4 lg:mx-0 h-[1px] bg-[#EAEAEA14]" />
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div>
                        <a className="hidden lg:block" href="mailto:Dust_Design@yandex.com" target="_blank">
                            Dust_Design@yandex.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row-reverse gap-6 lg:gap-11">
                        <Link to={routes.useragreement} className="text-sm leading-5 opacity-90">
                            Пользовательское соглашение
                        </Link>
                        <a className="text-sm leading-5 opacity-90" href="/">
                            Политика обработки персональных данных
                        </a>
                        <p className="text-sm leading-5 opacity-70">2024 все права защищены</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
