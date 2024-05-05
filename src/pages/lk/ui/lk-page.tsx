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

                <h3 className="text-2xl mb-6 lg:text-[28px] lg:mb-6 opacity-70">Ваши активные записи</h3>

                <div className="lg:flex">
                    <div className="bg-[#442E46] bg-opacity-[0.02] pt-6 px-[18px] pb-4 rounded-[14px]">
                        <div className="mb-6 flex items-center gap-2.5">
                            <div className="w-12 h-12 rounded-full bg-[#452E47]" />
                            <div className="text-sm font-bold max-w-28">Мамоа Рихтер Аристархович</div>
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
                                <div className="flex bg-white rounded-full p-1 items-center">
                                    <span className="font-medium max-w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                        Ox5ad4e8dOx5ad4e8d
                                    </span>
                                    <button type="button">
                                        <img src="/icons/copy.svg" alt="copy" />
                                    </button>
                                </div>
                            </div>

                            <div className="mb-5 flex justify-between items-center">
                                <div>Приватность</div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-[35px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#452E4724]"></div>
                                </label>
                            </div>
                        </div>

                        <Button className="w-full" size="small">
                            tx: 1vasy...z3341
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LkPage;
