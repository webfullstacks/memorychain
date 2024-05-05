import { useGetHeroesListHook } from "@/shared/stores/heroes";

const HeroesPage = () => {
    const { heroes } = useGetHeroesListHook();

    console.log(heroes);

    return <div></div>;
};

export default HeroesPage;
