import { SpecificServerType } from "../../types/server";
import { ChannelList } from "./ChannelsList";
import { HeaderServer } from "./HeaderServer";

// SpecificServer
//aca, renderizamos no se q 
export const ServerHome = ({
  specific_server_data,
}: {
  specific_server_data: SpecificServerType;
}) => {
  return (
    <section className=" h-full w-[70%] bg-green rounded-overlay p-4 gap-6 flex flex-col ">
      <HeaderServer name={specific_server_data.name} />
      <ChannelList />
    </section>
  );
};
