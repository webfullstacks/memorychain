import AppImage from "@/shared/ui/image";

import useGetEpochCardsListHook from "../model/use-get-epochs-hook";

const Categories = () => {
    const { epochCardsList, handleClickOnEpoch } = useGetEpochCardsListHook();

    return (
        <section className="bg-light-gray relative z-10">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:gap-7 lg:grid-cols-2">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 -mt-14 lg:-mt-16 relative z-10">
                        <div className="col-span-2 lg:col-span-4 relative rounded-[1.25rem] bg-[#4e3850] h-60 lg:h-[416px] flex justify-center items-center">
                            <h4 className="text-white font-bold text-[2.375rem] lg:text-[4rem] leading-[2.625rem] lg:leading-[6.875rem]">
                                Герои
                            </h4>
                        </div>
                        <div
                            className="lg:row-span-2 lg:col-span-2 relative p-[1.375rem] lg:px-8 lg:pt-12 rounded-[1.25rem] overflow-hidden bg-[#453C46F0] flex flex-col justify-end lg:justify-start"
                            onClick={() => handleClickOnEpoch(epochCardsList[0].epochId)}
                        >
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">Герои</p>
                            <h5 className="mt-1 lg:mt-4 font-bold text-white text-lg lg:text-[1.75rem] leading-6 lg:leading-8">
                                {epochCardsList[0]?.cardTitle}
                            </h5>
                            <div className="hidden lg:flex absolute bottom-10 left-8 items-center gap-2.5">
                                <p className="text-lg leading-7 text-white">Ознакомиться</p>
                                <img src="/icons/arrow-right-white.svg" alt="arrow right" />
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <AppImage
                                    fileId={epochCardsList[0]?.cardImageUrl ?? ""}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>

                        <div
                            className="lg:col-span-2 relative p-[1.375rem] lg:p-6 rounded-[1.25rem] overflow-hidden h-40 bg-[#AB8E81F0] flex flex-col justify-end"
                            onClick={() => handleClickOnEpoch(epochCardsList[1].epochId)}
                        >
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">Герои</p>
                            <h5 className="mt-1 lg:mt-1.5 font-bold text-white text-lg lg:text-2xl leading-6 lg:leading-9">
                                {epochCardsList[1]?.cardTitle}
                            </h5>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <AppImage
                                    fileId={epochCardsList[1]?.cardImageUrl ?? ""}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                        <div
                            className="relative p-[1.375rem] rounded-[1.25rem] lg:p-5 overflow-hidden h-40 bg-[#453C46CC] flex flex-col justify-end"
                            onClick={() => handleClickOnEpoch(epochCardsList[2].epochId)}
                        >
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">Герои</p>
                            <h5 className="mt-1 pr-2 font-bold text-white text-lg leading-6">
                                {epochCardsList[2]?.cardTitle}
                            </h5>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <AppImage
                                    fileId={epochCardsList[2]?.cardImageUrl ?? ""}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                        <div
                            className="relative p-[1.375rem] rounded-[1.25rem] lg:p-5 overflow-hidden h-40 bg-[#503D33E5] flex flex-col justify-end"
                            onClick={() => handleClickOnEpoch(epochCardsList[3].epochId)}
                        >
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">Герои</p>
                            <h5 className="mt-1 font-bold text-white text-lg leading-6">
                                {epochCardsList[3]?.cardTitle}
                            </h5>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <AppImage
                                    fileId={epochCardsList[3]?.cardImageUrl ?? ""}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:-mt-16 relative z-10">
                        <div className="col-span-2 lg:col-span-4 relative rounded-[1.25rem] bg-[#4e3850] z-10 h-60 lg:h-[416px] flex justify-center items-center">
                            <h4 className="text-white opacity-50 font-bold text-[2.375rem] lg:text-[4rem] leading-[2.625rem] lg:leading-[6.875rem]">
                                События
                            </h4>
                            <div className="absolute left-7 top-7 -z-10 opacity-50">
                                <img src="/icons/lock.svg" alt="lock" />
                            </div>
                        </div>
                        <div className="lg:row-span-2 lg:col-span-2 relative p-[1.375rem] lg:px-8 lg:pt-12 rounded-[1.25rem] overflow-hidden bg-[#151A2470] flex flex-col justify-end lg:justify-start">
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">События</p>
                            <h5 className="mt-1 lg:mt-4 font-bold text-white text-lg lg:text-[1.75rem] leading-6 lg:leading-8">
                                Свадьба
                            </h5>
                            <div className="hidden lg:flex absolute bottom-10 left-8 items-center gap-2.5">
                                <p className="text-lg leading-7 text-white">Ознакомиться</p>
                                <img src="/icons/arrow-right-white.svg" alt="arrow right" />
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <img
                                    src="/images/main/categories/event-1.jpg"
                                    className="opacity-5 w-full h-full object-cover"
                                    alt="event"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                        <div className="lg:col-span-2 relative p-[1.375rem] lg:p-6 rounded-[1.25rem] overflow-hidden h-40 bg-[#3C444670] flex flex-col justify-end">
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">События</p>
                            <h5 className="mt-1 lg:mt-1.5 font-bold text-white text-lg lg:text-2xl leading-6 lg:leading-9">
                                Рождение ребенка
                            </h5>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <img
                                    src="/images/main/categories/event-2.jpg"
                                    className="opacity-5 w-full h-full object-cover"
                                    alt="event"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                        <div className="relative p-[1.375rem] rounded-[1.25rem] lg:p-5 overflow-hidden h-40 bg-[#2F2D2770] flex flex-col justify-end">
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">События</p>
                            <h5 className="mt-1 pr-2 font-bold text-white text-lg leading-6">Личные рекорды</h5>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <img
                                    src="/images/main/categories/event-3.jpg"
                                    className="opacity-5 w-full h-full object-cover"
                                    alt="event"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                        <div className="relative p-[1.375rem] rounded-[1.25rem] lg:p-5 overflow-hidden h-40 bg-[#503D3370] flex flex-col justify-end">
                            <p className="text-white font-medium text-lg leading-[1.125rem] lg:leading-7">События</p>
                            <h5 className="mt-1 font-bold text-white text-lg leading-6">Первая покорённая вершина</h5>
                            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                                <img
                                    src="/images/main/categories/event-4.jpg"
                                    className="opacity-5 w-full h-full object-cover"
                                    alt="hero"
                                />
                            </div>
                            <div className="absolute right-4 top-4">
                                <img src="/icons/arrow-right-top.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
