import Breadcrumbs from "@/shared/ui/breadcrumbs";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";

export const ContactInfo = () => {
    return (
        <div className="container">
            <Breadcrumbs page="Создание записи" />

            <div className="max-w-[620px] mx-auto">
                <h1 className="text-4xl font-bold mb-10 max-w-72 lg:max-w-full">Контактная информация</h1>

                <div className="mb-10">
                    <h2 className="text-2xl mb-[18px] lg:mb-6 opacity-70 font-bold">Основная информация</h2>

                    <Input placeholder="ФИО" />

                    <div className="lg:flex justify-between items-center gap-5">
                        <Input placeholder="Почта" />
                        <Input placeholder="Телефон" />
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl mb-[18px] lg:mb-6 opacity-70 font-bold">Адрес доставки</h2>

                    <div className="lg:flex justify-between items-center gap-5">
                        <Input placeholder="Страна" />
                        <Input placeholder="Город" />
                    </div>

                    <Input placeholder="Адрес доставки (улица, дом, № подъезда, квартира)" />
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl mb-[18px] lg:mb-6 opacity-70 font-bold">Безопасность</h2>

                    <Input placeholder="Пароль" />
                    <Input placeholder="Новый пароль" noMargin={true} />

                    <div className="mt-2 lg:ps-5 text-sm">Мы отправили на почту ссылку с подтвердением изменении</div>
                </div>

                <div className="mb-24 lg:mb-32">
                    <Button size="small">Сохранить изменения</Button>
                </div>
            </div>
        </div>
    );
};
