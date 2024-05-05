import Button from "@/shared/ui/button";

const History = () => {
    return (
        <section className="bg-light-gray relative z-10 pt-[70px] lg:pt-[295px]">
            <div className="container lg:max-w-[1021px] lg:p-0">
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                    <div>
                        <h2 className="lg:text-border text-2xl lg:text-[1.75rem] font-radiotechnika leading-[2.813rem] lg:leading-10 lg:text-border text-black">
                            Добавьте истории <br className="hidden lg:block" /> ваших героев
                        </h2>
                    </div>
                    <div className="lg:max-w-[424px]">
                        <div>
                            <h4 className="text-xl leading-8 font-bold">Таланкин Николай Иванович</h4>
                            <p className="mt-2.5 text-sm lg:font-bold leading-6">
                                Когда началась война, моему дедушке только-только исполнилось 24 года. Родился он в
                                деревне Титово Зарайского района Московской области. Незадолго до войны был призван на
                                срочную службу в ряды Красной Армии. К тому моменту он уже был женат на моей бабушке
                                Марии Николаевне. В армии вступил в партию, закончил школу политработников
                            </p>
                            <div className="mt-6">
                                <img loading="lazy" src="/images/main/history/ded.jpg" alt="Talankin Nikolay" />
                            </div>
                            <p className="mt-6 text-sm lg:font-bold leading-6">
                                После войны переехал с семьей в Коломну, работал на заводе, воспитывал детей: сына
                                Владимира и дочь Валентину, мою маму. Умер от тяжелой болезни в 1972 году.
                            </p>
                            <div className="pt-6 flex gap-3.5">
                                <Button className="!bg-[#412C43] hover:!bg-[#5A3E5C]" size="small">
                                    Награды
                                </Button>
                                <Button size="small">Документы</Button>
                            </div>
                        </div>
                        <div className="pt-11">
                            <a href="/" className="flex items-center gap-2.5 text-lg leading-7 font-bold">
                                Сохранить свою историю
                                <img src="/icons/arrow-right-black.svg" alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { History };
