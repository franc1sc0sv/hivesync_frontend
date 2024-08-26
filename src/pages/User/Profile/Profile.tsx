import { ProfileCover } from "./Components/Cover";
import { UserInformation } from "./Components/UserInformation";
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { useSession } from "../../../store/user";

export const ProfilePage: React.FC = () => {
  const { user } = useSession();
  console.log(user);
  return (
    <GeneralLayout showHeader={false}>
      <section className="flex flex-col justify-around w-full h-full">
        <ProfileCover
          backgroundUrl={user?.backgroundUrl as string}
          profileUrl={user?.profileUrl as string}
          username={user?.username as string}
        />
        <UserInformation />
      </section>
    </GeneralLayout>
  );
};
