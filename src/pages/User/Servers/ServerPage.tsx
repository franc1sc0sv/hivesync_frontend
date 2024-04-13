import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { ServerLayout } from "../../../components/layouts/ServerLayout/ServerLayout.jsx";

export const ServerPage = () => {
  return (
    <GeneralLayout showHeader={false}>
      <ServerLayout />
    </GeneralLayout>
  );
};
