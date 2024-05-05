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

            {/* <h3 className="text-3xl">Ваши активные записи</h3> */}

            <div className="pb-[300px]">
                <h3 className="text-2xl mb-2 lg:text-[28px] lg:mb-6 opacity-70">Список ваших записей</h3>

                <p className="max-w-80 lg:max-w-xl mb-10 text-lg lg:text-2xl opacity-70">
                    Вы пока не добавили ни одной записи, нажмите на кнопку “Добавить запись” и создайте свою первую
                    запись о герое.
                </p>

                <Button onClick={() => navigate(routes.createEntry)} size="small">
                    Добавить запись о герое
                </Button>
            </div>
        </div>
    );
};

export default LkPage;
