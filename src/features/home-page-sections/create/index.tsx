import { CreateSlider } from "./components/slider";

const Create = () => {
    return (
        <section className="bg-transparent pt-16 pb-24 lg:pt-32 relative overflow-hidden z-10">
            <div className="container lg:max-w-[1180px]">
                <p className="lg:hidden text-gradient font-radiotechnika text-center text-sm leading-3">
                    Создайте ценный
                </p>
                <p className="hidden lg:block font-radiotechnika text-gradient text-center text-lg leading-4">
                    Получите
                </p>
                <h2 className="font-radiotechnika text-4xl lg:text-[6rem] leading-9 lg:leading-[5.75rem] text-white text-center mt-5 lg:mt-7">
                    Уникальный
                </h2>
                <p className="lg:hidden font-radiotechnika text-center text-white mt-2.5 text-sm leading-6">
                    Передавайте свой ключ <br /> потомкам
                </p>
                <p className="hidden lg:block font-radiotechnika text-2xl leading-10 mt-6 text-center text-white opacity-75">
                    NTF ключ с вечной и не изменной записью в <br /> блокчейн
                </p>
            </div>
            <div className="relative w-full mt-12 overflow-hidden z-10 mx-auto lg:p-4 max-w-[1127px]">
                <div className="-mx-6 md:-mx-16 lg:mx-0">
                    <img src="/images/main/create/tree.png" className="w-full" loading="lazy" alt="tree" />
                </div>
                <div className="absolute w-[calc(100vw_+_20%)] h-full lg:w-full top-0 left-1/2 pr-6 lg:pr-12 -translate-x-1/2 -z-10">
                    <img
                        src="/images/vectors/circle-vectors.png"
                        className="h-full w-full object-contain animate-spin"
                        loading="lazy"
                        alt="vectors"
                    />
                </div>
            </div>
            <div className="container lg:max-w-[1180px]">
                <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-1.5 lg:gap-5 pt-6">
                    <div className="bg-white rounded-[1.25rem] px-4 pt-5 pb-4 lg:px-6 lg:pt-4 lg:pb-6">
                        <h5 className="font-radiotechnika text-violet opacity-10 text-[3.5rem] lg:text-[5rem] leading-[4.063rem] lg:leading-[6.875rem]">
                            01
                        </h5>
                        <p className="mt-4 lg:mt-0 text-[#1E1E1E] text-sm font-bold leading-6">
                            Обработка переданной <br /> вами информации
                        </p>
                    </div>
                    <div className="bg-white rounded-[1.25rem] px-4 pt-5 pb-4 lg:px-6 lg:pt-4 lg:pb-6">
                        <h5 className="font-radiotechnika text-violet opacity-10 text-[3.5rem] lg:text-[5rem] leading-[4.063rem] lg:leading-[6.875rem]">
                            02
                        </h5>
                        <p className="mt-4 lg:mt-0 text-[#1E1E1E] text-sm lg:text-base font-bold leading-6">
                            Создание уникальной <br /> записи в блок чейн
                        </p>
                    </div>
                    <div className="bg-white rounded-[1.25rem] px-4 pt-5 pb-4 lg:px-6 lg:pt-4 lg:pb-6">
                        <h5 className="font-radiotechnika text-violet opacity-10 text-[3.5rem] lg:text-[5rem] leading-[4.063rem] lg:leading-[6.875rem]">
                            03
                        </h5>
                        <p className="mt-4 lg:mt-0 text-[#1E1E1E] text-sm lg:text-base font-bold leading-6">
                            Генерация вашего <br /> личного NTF- ключа
                        </p>
                    </div>
                    <div className="bg-white rounded-[1.25rem] px-4 pt-5 pb-4 lg:px-6 lg:pt-4 lg:pb-6">
                        <h5 className="font-radiotechnika text-violet opacity-10 text-[3.5rem] lg:text-[5rem] leading-[4.063rem] lg:leading-[6.875rem]">
                            04
                        </h5>
                        <p className="mt-4 lg:mt-0 text-[#1E1E1E] text-sm lg:text-base font-bold leading-6">
                            Памятная стелла <br /> с QR кодом вашей истории
                        </p>
                    </div>
                </div>
                <div className="pt-6 lg:pt-11 px-4 lg:px-20">
                    <p className="text-center font-bold text-sm lg:text-xl leading-7 lg:leading-9 text-white">
                        Однажды записанные в блоекчейн, данные не могут быть изменены или удалены. Данные в блок чейне
                        распределены по множеству узлов по всему миру, что делает систему устойчивой к сбоям и атакам.
                    </p>
                </div>
            </div>

            <CreateSlider />
        </section>
    );
};

export { Create };
