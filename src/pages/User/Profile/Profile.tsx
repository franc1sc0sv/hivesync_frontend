import { ProfileCover } from "./Components/Cover";
import { UserInformation } from "./Components/UserInformation";
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";


export const ProfilePage: React.FC = () => {
  return (
    <GeneralLayout showHeader={false}>
      <section className="flex flex-col justify-around w-full h-full">
        <ProfileCover />
        <UserInformation />
      </section>
    </GeneralLayout>
  );
};
