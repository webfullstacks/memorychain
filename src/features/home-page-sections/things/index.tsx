const Things = () => {
    return (
        <section className="py-16 lg:py-44 bg-light-gray relative z-10">
            <div className="container lg:max-w-[1021px] lg:p-0">
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                    <div>
                        <h2 className="lg:text-border text-2xl lg:text-[1.75rem] font-radiotechnika leading-[2.813rem] lg:leading-10 lg:text-border text-black">
                            Загрузите дорогие <br className="hidden lg:block" /> вам вещи в блок чейн
                        </h2>
                    </div>
                    <div className="lg:max-w-[424px] w-full">
                        <div className="flex gap-4 flex-nowrap">
                            <div className="flex gap-4 flex-col w-full">
                                <div className="thing-card cursor-pointer bg-[url('/images/main/things/old-man.jpg')] bg-cover h-56 rounded-[1.25rem] z-10 relative overflow-hidden flex justify-center items-center">
                                    <h4 className="font-bold text-sm leading-5 text-white">Наши герои</h4>
                                    <div className="-z-10 absolute top-0 left-0 bottom-0 right-0 hover:bg-[#452E47A6] transition-all active:bg-[#452E47E5]"></div>
                                </div>
                                <div className="thing-card cursor-pointer bg-[url('/images/main/things/docs.jpg')] bg-cover h-56 rounded-[1.25rem] z-10 relative overflow-hidden flex justify-center items-center">
                                    <h4 className="font-bold text-sm leading-5 text-white">Документы</h4>
                                    <div className="-z-10 absolute top-0 left-0 bottom-0 right-0 hover:bg-[#452E47A6] transition-all active:bg-[#452E47E5]"></div>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col w-full">
                                <div className="thing-card cursor-pointer bg-[url('/images/main/things/awards.jpg')] bg-cover h-40 rounded-[1.25rem] z-10 relative overflow-hidden flex justify-center items-center">
                                    <h4 className="font-bold text-sm leading-5 text-white">Награды</h4>
                                    <div className="-z-10 absolute top-0 left-0 bottom-0 right-0 hover:bg-[#452E47A6] transition-all active:bg-[#452E47E5]"></div>
                                </div>
                                <div className="cursor-pointer h-56 flex flex-col pt-8 items-center rounded-[1.25rem] bg-violet">
                                    <div>
                                        <img
                                            loading="lazy"
                                            className="w-28 h-32"
                                            src="/images/main/things/code.png"
                                            alt="history"
                                        />
                                    </div>
                                    <h4 className="font-bold text-sm leading-5 text-white mt-5">Добавить историю</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Things };
