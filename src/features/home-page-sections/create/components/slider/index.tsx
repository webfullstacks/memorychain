import Button from "@/shared/ui/button";
import Splide from "@splidejs/splide";
import { useEffect } from "react";

import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

const CreateSlider = () => {
    useEffect(() => {
        new Splide(".splide", {
            arrows: false,
            perPage: 1,
            width: "100%",
            height: "100%",
            snap: true,
            wheel: true,
            direction: "ttb",
            releaseWheel: true,
            breakpoints: {
                1024: { direction: "ltr", wheel: false },
            },
        }).mount();
    }, []);

    return (
        <div className="splide pt-12 lg:pt-40">
            <div className="splide__track">
                <ul className="splide__list lg:h-96">
                    <li className="splide__slide">
                        <div className="container lg:max-w-[1180px]">
                            <div className="h-full flex flex-col lg:flex-row lg:justify-between">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="/images/main/create/create.png"
                                        className="h-full lg:h-96"
                                        alt="create"
                                    />
                                </div>
                                <div className="w-full lg:max-w-[390px] pt-12 lg:pb-16 lg:pt-6 h-56 lg:h-auto flex gap-3 flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-[1.75rem] lg:text-4xl leading-10 lg:leading-[3.5rem] text-white text-center lg:text-start">
                                            Как начать <br className="hidden lg:block" /> пользоваться?
                                        </h4>
                                        <p className="mt-2 lg:mt-8 text-white text-center lg:text-start text-2xl leading-9">
                                            Создайте новую запись
                                        </p>
                                    </div>
                                    <div>
                                        <Button type="secondary" className="mx-auto lg:mx-0">
                                            Получить свой сейф
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className="container lg:max-w-[1180px]">
                            <div className="h-full flex flex-col lg:flex-row lg:justify-between">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="/images/main/create/fill.png"
                                        className="h-full lg:h-96"
                                        alt="fill"
                                    />
                                </div>
                                <div className="w-full lg:max-w-[390px] pt-12 lg:pb-16 lg:pt-6 h-56 lg:h-auto flex gap-3 flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-[1.75rem] lg:text-4xl leading-10 lg:leading-[3.5rem] text-white text-center lg:text-start">
                                            Как начать <br className="hidden lg:block" /> пользоваться?
                                        </h4>
                                        <p className="mt-2 lg:mt-8 text-white text-center lg:text-start text-2xl leading-9">
                                            Заполните данные <br className="lg:hidden" /> для нового героя
                                        </p>
                                    </div>
                                    <div>
                                        <Button type="secondary" className="mx-auto lg:mx-0">
                                            Получить свой сейф
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className="container lg:max-w-[1180px]">
                            <div className="h-full flex flex-col lg:flex-row lg:justify-between">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="/images/main/create/pay.png"
                                        className="h-full lg:h-96"
                                        alt="pay"
                                    />
                                </div>
                                <div className="w-full lg:max-w-[390px] pt-12 lg:pb-16 lg:pt-6 h-56 lg:h-auto flex gap-3 flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-[1.75rem] lg:text-4xl leading-10 lg:leading-[3.5rem] text-white text-center lg:text-start">
                                            Как начать <br className="hidden lg:block" /> пользоваться?
                                        </h4>
                                        <p className="mt-2 lg:mt-8 text-white text-center lg:text-start text-2xl leading-9">
                                            Оплатите услугу по карте
                                        </p>
                                    </div>
                                    <div>
                                        <Button type="secondary" className="mx-auto lg:mx-0">
                                            Получить свой сейф
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className="container lg:max-w-[1180px]">
                            <div className="h-full flex flex-col lg:flex-row lg:justify-between">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="/images/main/create/get.png"
                                        className="h-full lg:h-96"
                                        alt="get"
                                    />
                                </div>
                                <div className="w-full lg:max-w-[390px] pt-12 lg:pb-16 lg:pt-6 h-56 lg:h-auto flex gap-3 flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-[1.75rem] lg:text-4xl leading-10 lg:leading-[3.5rem] text-white text-center lg:text-start">
                                            Как начать <br className="hidden lg:block" /> пользоваться?
                                        </h4>
                                        <p className="mt-2 lg:mt-8 text-white text-center lg:text-start text-2xl leading-9">
                                            Получите личнй кошелек сейф, после проверки
                                        </p>
                                    </div>
                                    <div>
                                        <Button type="secondary" className="mx-auto lg:mx-0">
                                            Получить свой сейф
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { CreateSlider };
