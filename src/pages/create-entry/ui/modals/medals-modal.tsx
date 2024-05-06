import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";

const MedalsModal = ({ setShowMedalsModal }: { setShowMedalsModal: (showMedalsModal: boolean) => void }) => {
    return (
        <>
            <div className="justify-center items-start lg:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto mx-auto max-w-3xl ">
                    {/*content*/}
                    <div className="border-0 shadow-lg relative flex flex-col bg-[#F4F4F4] outline-none focus:outline-none py-[60px] px-6 lg:px-[87px] lg:rounded-[14px] lg:min-w-[810px] w-svw h-svh lg:w-auto lg:h-auto">
                        <h3 className="text-2xl font-bold mb-[18px] lg:mb-6">Список орденов и медалей</h3>

                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10"
                            type="button"
                            onClick={() => setShowMedalsModal(false)}
                        >
                            <img src="/icons/close.svg" alt="close" />
                        </button>

                        <Input className="mb-[60px]" placeholder="Введите название медали" noMargin={true} />

                        <div className="flex flex-col gap-[30px] mb-12 lg:mb-36">
                            <div className="flex items-center gap-4 relative">
                                <input
                                    id="first-medal"
                                    className="cursor-pointer peer w-[28px] h-[28px] relative appearance-none border border-[#452E4740] rounded-full focus:outline-none bg-[#442E4605] checked:bg-black checked:bg-opacity-70"
                                    type="checkbox"
                                />

                                <label className="max-w-80 block font-bold text-[#0000008C]" htmlFor="first-medal">
                                    Медаль «XX лет Рабоче-Крестьянской Красной Армии»
                                </label>

                                <img
                                    className="absolute t-1/2 left-1.5 pointer-events-none opacity-0 peer-checked:opacity-100"
                                    src="/icons/check.svg"
                                    alt="check"
                                />
                            </div>

                            <div className="flex items-center gap-4 relative">
                                <input
                                    id="second-medal"
                                    className="cursor-pointer peer w-[28px] h-[28px] relative appearance-none border border-[#452E4740] rounded-full focus:outline-none bg-[#442E4605] checked:bg-black checked:bg-opacity-70"
                                    type="checkbox"
                                />

                                <label className="max-w-80 block font-bold text-[#0000008C]" htmlFor="second-medal">
                                    Медаль “За отвагу”
                                </label>

                                <img
                                    className="absolute t-1/2 left-1.5 pointer-events-none opacity-0 peer-checked:opacity-100"
                                    src="/icons/check.svg"
                                    alt="check"
                                />
                            </div>

                            <div className="flex items-center gap-4 relative">
                                <input
                                    id="third-medal"
                                    className="cursor-pointer peer w-[28px] h-[28px] relative appearance-none border border-[#452E4740] bg-[#442E4605] rounded-full focus:outline-none  checked:bg-black checked:bg-opacity-70"
                                    type="checkbox"
                                />

                                <label className="max-w-80 block font-bold text-[#0000008C]" htmlFor="third-medal">
                                    Медаль “За боевые заслуги”
                                </label>

                                <img
                                    className="absolute t-1/2 left-1.5 pointer-events-none opacity-0 peer-checked:opacity-100"
                                    src="/icons/check.svg"
                                    alt="check"
                                />
                            </div>
                        </div>

                        <Button className="self-start" size="small" onClick={() => setShowMedalsModal(false)}>
                            Добавить медали
                        </Button>
                    </div>
                </div>
            </div>

            <div className="opacity-50 fixed inset-0 z-40 bg-black" />
        </>
    );
};

export default MedalsModal;
