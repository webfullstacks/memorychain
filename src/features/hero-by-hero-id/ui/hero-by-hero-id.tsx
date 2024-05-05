import { countFormatService } from "@/shared/lib";
import AppImage from "@/shared/ui/image";
import dayjs from "dayjs";

import useHeroByHeroIdHook from "../model";

const HeroByHeroId = () => {
    const { hero, epochName } = useHeroByHeroIdHook();

    return (
        <main className="content pt-48 lg:pt-60">
            <div className="hero-main">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li>
                            <a href="">Главная</a>
                        </li>
                        <li>
                            <a>Герой</a>
                        </li>
                    </ul>
                    <div className="breadcrumbs-mob">
                        <a href="" className="breadcrumbs-mob__back">
                            <img src="/img/back.svg" alt="" />
                            <span>Вернуться</span>
                        </a>
                    </div>
                    <div className="hero-main__grid">
                        <div className="hero-main__col">
                            <div className="hero-main__img">
                                <AppImage fileId={hero?.mainPhotoId ?? ""} />
                            </div>
                        </div>
                        <div className="hero-main__col2">
                            <div className="hero-main__title h2">{hero?.heroName}</div>
                            <div className="hero-main__desc text24 text18-tablet">{epochName}</div>
                            <div className="props">
                                <div className="prop-item">
                                    <div className="prop-item__title">Родился:</div>
                                    <div className="prop-item__desc">
                                        {dayjs(hero?.birthDate).format("DD MMMM YYYY года")}
                                    </div>
                                </div>
                                <div className="prop-item">
                                    <div className="prop-item__title">Умер:</div>
                                    <div className="prop-item__desc">
                                        {dayjs(hero?.deathDate).format("DD MMMM YYYY года")}
                                    </div>
                                </div>
                                <div className="prop-item">
                                    <div className="prop-item__title">Звание:</div>
                                    <div className="prop-item__desc">{hero?.heroTitle}</div>
                                </div>
                                <div className="prop-item">
                                    <div className="prop-item__title">Наград:</div>
                                    <div className="prop-item__desc">
                                        {`${hero?.awards.length ?? 0} ${countFormatService(hero?.awards.length ?? 0, "Награда", "Награды", "Наград")}`}
                                    </div>
                                </div>
                                <div className="prop-item">
                                    <div className="prop-item__title">Документы и история:</div>
                                    <div className="prop-item__desc">{`${hero?.heroDocuments.length ?? 0} ${countFormatService(hero?.awards.length ?? 0, "документ", "документа", "документов")} в архиве`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-detail">
                <div className="container">
                    <div className="text">
                        <h3>{hero?.heroName}</h3>
                        <p>{hero?.heroDescription}</p>
                    </div>
                </div>
            </div>

            <div className="medals">
                <div className="container">
                    <div className="info-block">
                        <div className="h2">Ордена и медали героя</div>
                        <div className="text24 text18-tablet lh150">
                            Ниже представлен полный список наград “Орденов и медалей” героя.
                            <br />
                            {epochName}
                        </div>
                    </div>
                    <div className="medals__grid grid grid6 grid-tablet3 grid-mob2">
                        <a href="" className="medal-card _scale-img">
                            <div className="medal-card__img">
                                <img src="/img/medal.webp" alt="" />
                            </div>
                            <div className="medal-card__text">
                                <div className="medal-card__title text14 medium-text">Медаль</div>
                                <div className="medal-card__desc text14">Медаль «За отвагу»</div>
                            </div>
                        </a>

                        <a href="" className="medal-card _scale-img">
                            <div className="medal-card__img">
                                <img src="/img/medal2.webp" alt="" />
                            </div>
                            <div className="medal-card__text">
                                <div className="medal-card__title text14 medium-text">Медаль</div>
                                <div className="medal-card__desc text14">
                                    За восстановление предприятий чёрной металлургии юга
                                </div>
                            </div>
                        </a>

                        <a href="" className="medal-card _scale-img">
                            <div className="medal-card__img">
                                <img src="/img/medal3.webp" alt="" />
                            </div>
                            <div className="medal-card__text">
                                <div className="medal-card__title text14 medium-text">Медаль</div>
                                <div className="medal-card__desc text14">Партизану великой отечественной войны</div>
                            </div>
                        </a>

                        <a href="" className="medal-card _scale-img">
                            <div className="medal-card__img">
                                <img src="/img/medal4.webp" alt="" />
                            </div>
                            <div className="medal-card__text">
                                <div className="medal-card__title text14 medium-text">Медаль</div>
                                <div className="medal-card__desc text14">За оборону советского заполярья</div>
                            </div>
                        </a>

                        <a href="" className="medal-card _scale-img">
                            <div className="medal-card__img">
                                <img src="/img/medal5.webp" alt="" />
                            </div>
                            <div className="medal-card__text">
                                <div className="medal-card__title text14 medium-text">Медаль</div>
                                <div className="medal-card__desc text14">За взятие вены</div>
                            </div>
                        </a>

                        <a href="" className="medal-card _scale-img">
                            <div className="medal-card__img">
                                <img src="/img/medal6.webp" alt="" />
                            </div>
                            <div className="medal-card__text">
                                <div className="medal-card__title text14 medium-text">Медаль</div>
                                <div className="medal-card__desc text14">За боевые заслуги»</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroByHeroId;
