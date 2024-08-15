
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { ServerProvider } from "../../../components/layouts/ServerLayout/Context/ServerContext.js";
import { NoServersLayout } from "../../../components/layouts/ServerLayout/ServerLayout.jsx";



export const NoServerPage = () => {
    return (
        <GeneralLayout showHeader={false}>
            <ServerProvider>
                <NoServersLayout />
            </ServerProvider>
        </GeneralLayout>
    );
};
