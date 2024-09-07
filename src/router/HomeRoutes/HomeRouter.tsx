import { RouteObject } from "react-router-dom";

import { IndexPage } from "../../pages/Home/Index/IndexPage";
import { ComunityPage } from "../../pages/Home/Comunity/ComunityPage";
import { ComunityIndividualPage } from "../../pages/Home/ComunityIndividual/ComunityIndividualPage";
import { LoginPage } from "../../pages/Auth/Login/LoginPage";
import { SingUpPage } from "../../pages/Auth/SingUp/SingUpPage";
import { RecoverPage } from "../../pages/Auth/Recover/RecoverPage";
import { UnsecureRoutes } from "../../components/auth/UnsecureRoutes";
import { IaTesting } from "../../pages/testing/ia/iaTesting";

export const HomeRoutes: RouteObject = {
  caseSensitive: true,
  path: "/",
  element: <UnsecureRoutes />,
  children: [
    { index: true, element: <IndexPage /> },

    { path: "/comunity", element: <ComunityPage /> },
    { path: "/comunity/:id", element: <ComunityIndividualPage /> },

    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SingUpPage /> },
    { path: "/recover", element: <RecoverPage /> },
    { path: "/iaTesting", element: <IaTesting /> },
  ],
};
