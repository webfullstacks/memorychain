import { routes } from "@/shared/config";
import useGetCountriesHook from "@/shared/stores/countries";
import Button from "@/shared/ui/button";
import { Link, useLocation } from "react-router-dom";

import useLkHook, { useHeaderHook } from "../model";

const Header = () => {
    const location = useLocation();
    const { handleLogin } = useLkHook();
    const { active } = useHeaderHook();

    useGetCountriesHook();

    return (
        <header
            className={`${!location.pathname.includes("/lk") && "fixed"} transition-all duration-1000 ${
                active || location.pathname.includes("/lk") ? "bg-violet" : "bg-transparent"
            } left-0 top-0 py-8 w-full z-20`}
        >
            <div className="container px-6">
                <div className="w-full flex justify-between items-center">
                    <Link to={routes.home}>
                        <img
                            className="w-[114px] lg:w-64"
                            alt="logo"
                            src="/images/logo-full-white.svg"
                            // fetchPriority="high"
                        />
                    </Link>

                    <div className="flex items-center gap-[22px] lg:gap-9">
                        <a href="/" className="text-sm font-bold text-white leading-5">
                            Помощь
                        </a>
                        <Button onClick={handleLogin} type="secondary">
                            Личный кабинет
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
