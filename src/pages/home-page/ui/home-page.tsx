import {
    Categories,
    Create,
    History,
    Memorychain,
    Poster,
    Things,
    Video,
    WhatNow,
} from "@/features/home-page-sections";
import { ParticlesComponent } from "@/shared/ui/particles";
import { Fragment } from "react/jsx-runtime";

const HomePage = () => {
    return (
        <Fragment>
            <main className="relative">
                <Poster />
                <Categories />
                <WhatNow />
                <History />
                <Things />
                <Create />
                <Memorychain />
                <Video />
                <ParticlesComponent />
            </main>
        </Fragment>
    );
};

export default HomePage;
