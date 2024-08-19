import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { ServerProvider } from "../../../components/layouts/ServerLayout/Context/ServerContext.js";
import { ServerLayout } from "../../../components/layouts/ServerLayout/ServerLayout.jsx";
import { NoServersLayout } from "../../../components/layouts/ServerLayout/ServerLayout.jsx";

export const ServerPage = () => {
  return (
    <GeneralLayout showHeader={false}>
      <ServerProvider>
        <ServerLayout />
      </ServerProvider>
    </GeneralLayout>
  );
};

export const NoServerPage = () => {
  return (
    <GeneralLayout showHeader={false}>
      <ServerProvider>
        <NoServersLayout />
      </ServerProvider>
    </GeneralLayout>
  );
};
