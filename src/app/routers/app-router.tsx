import Layout from "@/app/layout";
import AdminPage from "@/pages/admin";
import AuthPage from "@/pages/auth";
import ContactInfo from "@/pages/contact-info";
import CreateEntry from "@/pages/create-entry";
import DraftPage from "@/pages/draft";
import HeroPage from "@/pages/hero";
import HeroesPage from "@/pages/heroes";
import HomePage from "@/pages/home-page";
import LkPage from "@/pages/lk";
import OfferPage from "@/pages/offer";
import PaySuccessPage from "@/pages/pay-success";
import PrivacyPage from "@/pages/privacy";
import UseragreementPage from "@/pages/useragreement";
import { routes } from "@/shared/config";
import { UserRole } from "@/shared/types";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./private-routes";

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: routes.home,
            element: <Layout />,
            children: [
                { index: true, element: <HomePage /> },
                { path: routes.yandexOAuthRedirectUri, element: <AuthPage /> },
                {
                    path: routes.lk,
                    element: <PrivateRoute />,
                    children: [
                        { index: true, element: <LkPage /> },
                        { path: routes.createDraft, element: <DraftPage /> },
                        {
                            path: routes.admin,
                            element: <PrivateRoute roles={[UserRole.admin]} />,
                            children: [{ index: true, element: <AdminPage /> }],
                        },
                        { path: routes.createEntry, element: <CreateEntry /> },
                        { path: routes.contactInfo, element: <ContactInfo /> },
                    ],
                },
                { path: routes.heroById, element: <HeroPage /> },
                { path: routes.heroes, element: <HeroesPage /> },
                { path: routes.successPay, element: <PaySuccessPage /> },
                { path: routes.useragreement, element: <UseragreementPage /> },
                { path: routes.privacy, element: <PrivacyPage /> },
                { path: routes.offer, element: <OfferPage /> },
                { path: routes.undefined, element: <div>page undefined</div> },
            ],
        },
    ]);

    return <RouterProvider router={routers} />;
};

export default AppRouter;
