import Breadcrumbs from "@/shared/ui/breadcrumbs";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { useState } from "react";

import DocumentsModal from "./modals/documents-modal";
import MedalsModal from "./modals/medals-modal";
import PaymentModal from "./modals/payment-modal";

const CreateEntry = () => {
    const [showMedalsModal, setShowMedalsModal] = useState<boolean>(false);
    const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
    const [showDocumentsModal, setShowDocumentsModal] = useState<boolean>(false);

    return (
        <div className="container">
            <Breadcrumbs page="Создание записи" />

            <div className="max-w-[620px] mx-auto">
                <h1 className="text-4xl font-bold mb-10 max-w-72 lg:max-w-full">Создание записи героя</h1>

                <div className="mb-10">
                    <h2 className="text-2xl mb-[18px] lg:mb-6 opacity-70 font-bold">Основная информация</h2>

                    <Input placeholder="Имя героя" />

                    <div className="lg:flex justify-between items-center gap-5">
                        <Input placeholder="Дата рождения (ДД.ММ.ГГ)" />
                        <Input placeholder="Дата смерти (ДД.ММ.ГГ)" />
                    </div>

                    <Input placeholder="Страна рождения героя" />

                    <Input placeholder="Звание героя" />

                    <textarea
                        className="w-full h-56 mb-[18px] lg:mb-7 border rounded-[14px] bg-[#442E46] bg-opacity-10 border-[#452E47] border-opacity-25 p-[22px] resize-none"
                        placeholder="Описание и информация о истории героя"
                    />

                    <div className="flex justify-between items-center gap-7">
                        <div className="w-36 h-36 bg-[#442E46] opacity-[0.02] rounded-[14px]" />
                        <div>
                            <h3 className="text-sm font-bold mb-1">Фотография героя</h3>

                            <p className="max-w-52 lg:max-w-md text-xs lg:text-sm mb-5 opacity-70">
                                К размещению подходят фото со следующими параметрами: Форматы: jpg, jpeg, png.
                                Максимальный размер 1200х1600px, минимальный 400х600px. Вес изображения не более 10мб
                            </p>

                            <button className="flex items-center gap-1.5">
                                <span className="text-sm underline opacity-70">Прикрепить фотографию</span>
                                <img src="/icons/paperclip.svg" alt="arrow right" />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl mb-6 opacity-70 font-bold">Документы и награды</h2>

                    <div className="mb-10">
                        <h3 className="text-sm font-bold mb-1">Документ героя</h3>

                        <p className="max-w-lg text-xs lg:text-sm mb-5 opacity-70">
                            К размещению подходят фото со следующими параметрами: Форматы: jpg, jpeg, png. Максимальный
                            размер 1200х1600px, минимальный 400х600px. Вес изображения не более 10мб
                        </p>

                        <button className="flex items-center" onClick={() => setShowDocumentsModal(true)}>
                            <span className="text-sm underline opacity-70">Добавить документ героя</span>
                            <img src="/icons/arrow-right-black.svg" alt="arrow right" />
                        </button>

                        {showDocumentsModal && <DocumentsModal setShowDocumentsModal={setShowDocumentsModal} />}
                    </div>

                    <div className="mb-10">
                        <h3 className="text-sm font-bold mb-1">Медали и ордена героя</h3>

                        <p className="max-w-lg text-xs lg:text-sm mb-5 opacity-70">
                            К размещению подходят фото со следующими параметрами: Форматы: jpg, jpeg, png. Максимальный
                            размер 1200х1600px, минимальный 400х600px. Вес изображения не более 10мб
                        </p>

                        <button className="flex items-center" onClick={() => setShowMedalsModal(true)}>
                            <span className="text-sm underline opacity-70">Добавить медали и ордена</span>
                            <img src="/icons/arrow-right-black.svg" alt="arrow right" />
                        </button>

                        {showMedalsModal && <MedalsModal setShowMedalsModal={setShowMedalsModal} />}
                    </div>

                    <div className="mb-10">
                        <h3 className="text-sm font-bold mb-5">Приватность карточки героя</h3>

                        <div className="flex items-center gap-2">
                            <input
                                id="checkbox"
                                className="w-6 h-6 rounded-full border border-[#452E47] border-opacity-25 bg-[#442E46] bg-opacity-[0.02]"
                                type="checkbox"
                            />
                            <label className="text-sm opacity-70" htmlFor="checkbox">
                                Сделать карточку публичной
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mb-24 lg:mb-32">
                    <Button size="small" onClick={() => setShowPaymentModal(true)}>
                        Перейти к оплате
                    </Button>

                    {showPaymentModal && <PaymentModal setShowPaymentModal={setShowPaymentModal} />}
                </div>
            </div>
        </div>
    );
};

export default CreateEntry;
