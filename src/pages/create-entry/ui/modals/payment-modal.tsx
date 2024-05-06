import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { Link } from "react-router-dom";

const PaymentModal = ({ setShowPaymentModal }: { setShowPaymentModal: (showPaymentModal: boolean) => void }) => {
    return (
        <>
            <div className="justify-center items-start lg:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto mx-auto max-w-3xl ">
                    <div className="border-0 shadow-lg relative flex flex-col bg-[#F4F4F4] outline-none focus:outline-none py-[60px] px-6 lg:px-[87px] lg:rounded-[14px] lg:min-w-[810px] w-svw h-svh lg:w-auto lg:h-auto">
                        <h3 className="text-4xl font-bold mb-10 lg:mb-6">Оплата товара</h3>

                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10"
                            type="button"
                            onClick={() => setShowPaymentModal(false)}
                        >
                            <img src="/icons/close.svg" alt="close" />
                        </button>

                        <h4 className="text-2xl mb-6 opacity-70 font-bold">Адрес доставки</h4>

                        <div className="lg:flex justify-between items-center gap-5">
                            <Input placeholder="Страна" />
                            <Input placeholder="Город" />
                        </div>

                        <Input
                            className="mb-10"
                            placeholder="Адрес доставки (улица, дом, № подъезда, квартира)"
                            noMargin={true}
                        />

                        <h4 className="text-2xl mb-6 opacity-70 font-bold">Контакты</h4>

                        <Input className="mb-10" placeholder="Ваш телефон" noMargin={true} />

                        <div className="px-4 lg:px-0">
                            <div className="mb-10">
                                <h3 className="text-sm font-bold mb-5">
                                    Принятия{" "}
                                    <Link className="text-[#2F50FF] underline" to={"#"}>
                                        условии договора
                                    </Link>
                                </h3>

                                <div className="flex items-center gap-2 relative">
                                    <input
                                        id="terms"
                                        className="cursor-pointer peer w-6 h-6 relative appearance-none border border-[#452E4740] bg-[#442E4605] rounded-full focus:outline-none checked:bg-black checked:bg-opacity-70"
                                        type="checkbox"
                                    />

                                    <label className="text-sm opacity-70" htmlFor="terms">
                                        Принимаю условия
                                    </label>

                                    <img
                                        className="absolute t-1/2 left-1 pointer-events-none opacity-0 peer-checked:opacity-100"
                                        src="/icons/check.svg"
                                        alt="check"
                                    />
                                </div>
                            </div>

                            <Button className="self-start" size="small" onClick={() => setShowPaymentModal(false)}>
                                Перейти к оплате
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-50 fixed inset-0 z-40 bg-black" />
        </>
    );
};

export default PaymentModal;
