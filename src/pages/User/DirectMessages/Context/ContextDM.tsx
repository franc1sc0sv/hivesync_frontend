import { ReactNode, createContext, useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { get_friends_by_user } from "../../../../api/social";
import { LoadingPage } from "../../../../components/routes/loadingPage";

export const DmContext = createContext({});

export const DmProvider = ({ children }: { children: ReactNode }) => {
  const [friends, serFriends] = useState();
  const [selectedChat, setSelectedChat] = useState();

  const { fecthData, isLoading } = useFetch({
    api_function: get_friends_by_user,
  });

  useEffect(() => {
    const fetching = async () => {
      console.log(await fecthData());
    };
    fetching();
  }, []);

  if (isLoading) return <LoadingPage />;

  return <DmContext.Provider value={{}}>{children}</DmContext.Provider>;
};
