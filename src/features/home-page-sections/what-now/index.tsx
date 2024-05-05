import Button from "@/shared/ui/button";

const WhatNow = () => {
    return (
        <section className="pt-20 lg:pt-72 bg-light-gray relative z-10">
            <div className="container lg:max-w-[1021px] lg:p-0">
                <h2 className="lg:text-border text-[3.5rem] lg:text-[6rem] leading-[4.375rem] lg:leading-[5.778rem] text-center text-black font-radiotechnika">
                    Что теперь?
                </h2>
                <p className="text-sm lg:text-2xl mt-2.5 lg:mt-7 leading-6 lg:leading-10 lg:opacity-75 text-center font-radiotechnika">
                    Выберите категорию данных, которые хотите сохранить в MemoryChain
                </p>
                <div className="relative lg:flex lg:items-center bg-violet background-gradient-violet mt-10 lg:mt-24 lg:h-[621px] rounded-[1.25rem]">
                    <div className="lg:hidden h-full px-12 pt-14">
                        <img src="/images/main/now-what/qr.png" className="w-full h-full" alt="qr code" />
                    </div>
                    <div className="hidden lg:block h-full absolute right-0">
                        <img src="/images/main/now-what/qr-desktop.png" className="h-full" alt="qr code" />
                    </div>
                    <div className="pt-10 px-12 pb-16 lg:pt-0 lg:pl-28 lg:pr-0 lg:pb-0">
                        <h4 className="text-white font-bold text-[1.75rem] lg:text-[2.375rem] leading-[2.625rem] lg:leading-10">
                            Содзайте в ЛК
                        </h4>
                        <p className="mt-2.5 lg:mt-3 lg:font-bold text-white text-xl lg:text-2xl leading-8">
                            ваш крипто сейф в котором <br className="hidden lg:block" /> будет храниться ваша история
                        </p>
                        <Button type="secondary" className="mt-9">
                            Получить свой сейф
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { WhatNow };
