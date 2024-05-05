import { routes } from "@/shared/config";
import Breadcrumbs from "@/shared/ui/breadcrumbs";
import Button from "@/shared/ui/button";
import { useNavigate } from "react-router-dom";

const LkPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <Breadcrumbs page="Личный кабинет" />

            <h1 className="text-4xl font-bold">Личный кабинет пользователя</h1>

            <h2 className="text-lg lg:text-2xl mb-10 opacity-70">Добро пожаловать: Иван Иванович</h2>

            <div className="pb-[300px]">
                <h3 className="text-2xl mb-2 lg:text-[28px] lg:mb-6 opacity-70">Список ваших записей</h3>

                <p className="max-w-80 lg:max-w-xl mb-10 text-lg lg:text-2xl opacity-70">
                    Вы пока не добавили ни одной записи, нажмите на кнопку “Добавить запись” и создайте свою первую
                    запись о герое.
                </p>

                <Button onClick={() => navigate(routes.createEntry)} size="small">
                    Добавить запись о герое
                </Button>
                {/* 
                <h3 className="text-2xl mb-6 lg:text-[28px] lg:mb-6 opacity-70">Ваши активные записи</h3>

                <div className="lg:flex">
                    <div className="bg-[#442E46] bg-opacity-[0.02] pt-6 px-[18px] pb-4 rounded-[14px]">
                        <div className="mb-6">
                            <div></div>
                            <div className="text-sm font-bold">Мамоа Рихтер Аристархович</div>
                        </div>

                        <div className="text-xs">
                            <div className="mb-3 flex justify-between items-center">
                                <div>Номер ID:</div>
                                <div className="font-medium">334</div>
                            </div>

                            <div className="mb-3 flex justify-between items-center">
                                <div>Номер блока:</div>
                                <div className="font-medium">98550133</div>
                            </div>

                            <div className="mb-3 flex justify-between items-center">
                                <div>Hash code:</div>
                                <div className="font-medium p-1 bg-white rounded-full max-w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                    Ox5ad4e8dOx5ad4e8d
                                </div>
                            </div>

                            <div className="mb-5 flex justify-between items-center">
                                <div>Приватность</div>
                                <div className="font-medium">334</div>
                            </div>
                        </div>

                        <Button className="w-full" size="small">
                            tx: 1vasy...z3341
                        </Button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default LkPage;
