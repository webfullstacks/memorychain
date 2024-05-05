import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";

const DocumentsModal = ({
    setShowDocumentsModal,
}: {
    setShowDocumentsModal: (showDocumentsModal: boolean) => void;
}) => {
    return (
        <>
            <div className="justify-center items-start lg:my-10 flex overflow-x-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto mx-auto max-w-3xl ">
                    <div className="border-0 shadow-lg relative flex flex-col bg-[#F4F4F4] outline-none focus:outline-none py-[60px] px-6 lg:px-[87px] lg:rounded-[14px] lg:min-w-[810px] w-svw min-h-svh lg:w-auto lg:min-h-auto">
                        <h3 className="text-2xl font-bold mb-[18px] lg:mb-6">Добавить описание</h3>

                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10"
                            type="button"
                            onClick={() => setShowDocumentsModal(false)}
                        >
                            <img src="/icons/close.svg" alt="close" />
                        </button>

                        <div className="flex flex-col justify-center items-center bg-[#442E4605] bg-opacity-[0.02] py-[105px] mb-[18px] lg:mb-7 rounded-[14px] border border-dashed border-[#452E4740]">
                            <img className="mb-8" src="/icons/gallery-add.svg" alt="add" />

                            <div className="text-[18px] font-bold text-black mb-2">Загрузите документ</div>

                            <p className="text-sm text-opacity-70 mb-5 max-w-80 text-center">
                                Перетащите со своего пк фаил в формате: PDF, Jpeg, PNG фаил должен весить не более 10 мб
                            </p>

                            <button
                                className="flex items-center gap-2 text-sm text-opacity-70 mb-5 max-w-80 text-center underline"
                                type="button"
                            >
                                <span>Загрузить документ</span>
                                <img src="/icons/clipboard-add.svg" alt="add to clipboard" />
                            </button>
                        </div>

                        <Input className="mb-[18px] lg:mb-7" placeholder="Название документа" noMargin={true} />

                        <textarea
                            className="w-full h-56 mb-[18px] lg:mb-10 border rounded-[14px] bg-[#442E46] bg-opacity-10 border-[#452E47] border-opacity-25 p-[22px] resize-none"
                            placeholder="Описание к документу"
                        />

                        <Button className="self-start" size="small" onClick={() => setShowDocumentsModal(false)}>
                            Добавить документ
                        </Button>
                    </div>
                </div>
            </div>

            <div className="opacity-50 fixed inset-0 z-40 bg-black" />
        </>
    );
};

export default DocumentsModal;
