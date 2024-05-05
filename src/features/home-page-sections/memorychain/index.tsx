const Memorychain = () => {
    return (
        <section className="h-full pt-20 md:pt-[180px] bg-light-gray relative z-10">
            <div className="container lg:max-w-[1021px] lg:p-0 pin-panel">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                    <div className="lg:sticky top-20 lg:top-[180px] lg:h-full lg:pb-[calc(180px_+_70px_*_3)]">
                        <h2 className="lg:text-border text-2xl lg:text-[1.75rem] font-radiotechnika leading-[2.813rem] lg:leading-10 lg:text-border text-black">
                            MemoryChain - <br className="hidden lg:block" /> технология вечного сохранения памяти
                        </h2>
                    </div>
                    <div className="flex relative lg:h-[calc(300px_*_4_+_26px_*_3)] flex-col gap-4 lg:max-w-[435px] w-full">
                        <div className="lg:absolute right-0 top-0 lg:h-[calc(100%_-_210px)] w-full">
                            <div className="relative lg:sticky lg:top-[180px] bottom-0 border border-[#F2F1F433] z-10 bg-violet rounded-3xl h-[300px] pl-10 pr-3 flex items-center">
                                <p className="text-xl leading-8 tracking-[4%] text-white">
                                    Однажды записанные <br /> в блокчейн, данные не могут <br />
                                    быть изменены или удалены.
                                </p>
                                <div className="-z-10 absolute inset-x-0 inset-y-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/images/main/memorychain/img-1.png"
                                        alt="background"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:absolute right-0 top-[326px] lg:h-[calc(100%_-_466px)] w-full">
                            <div className="relative lg:sticky lg:top-[250px] border border-[#F2F1F433] z-10 bg-violet rounded-3xl h-[300px] pl-10 pr-3 flex items-center">
                                <p className="text-xl leading-8 tracking-[4%] text-white">
                                    Данные в блокчейне <br /> распределены по множеству <br /> узлов по всему миру, что{" "}
                                    <br /> делает систему устойчивой <br /> к сбоям и атакам.
                                </p>
                                <div className="-z-10 absolute inset-x-0 inset-y-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/images/main/memorychain/img-2.png"
                                        alt="background"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:absolute right-0 top-[652px] lg:h-[calc(100%_-_722px)] w-full">
                            <div className="relative lg:sticky lg:top-[320px] border border-[#F2F1F433] z-10 bg-violet rounded-3xl h-[300px] pl-10 pr-3 flex items-center">
                                <p className="text-xl leading-8 tracking-[4%] text-white">
                                    Каждый NFT является подтверждением подлинности <br /> и правильности информации{" "}
                                    <br /> о ваших героях и событиях
                                </p>
                                <div className="-z-10 absolute inset-x-0 inset-y-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/images/main/memorychain/img-3.png"
                                        alt="background"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:absolute right-0 top-[978px] lg:h-[calc(100%_-_978px)] w-full">
                            <div className="relative lg:sticky lg:top-[390px] border border-[#F2F1F433] z-10 bg-violet rounded-3xl h-[300px] pl-10 pr-3 flex items-center">
                                <p className="text-xl leading-8 tracking-[4%] text-white">
                                    Данные открыты в любой <br /> точке мира, облегчая доступ <br /> к информации для
                                    будущих <br /> поколений
                                </p>
                                <div className="-z-10 absolute inset-x-0 inset-y-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/images/main/memorychain/img-4.png"
                                        alt="background"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Memorychain };
