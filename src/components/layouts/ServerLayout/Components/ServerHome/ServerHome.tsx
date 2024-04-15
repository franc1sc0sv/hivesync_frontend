import { ChannelListProvider } from "../../Context/ChannelListContext";
import { ChannelList } from "./ChannelsList";
import { HeaderServer } from "./HeaderServer";

export const ServerHome = ({ specific_server_data }: { specific_server_data: SpecificServer }) => {
  return (
    <section className="h-full w-[85%] bg-overlay_2 rounded-overlay p-4 gap-6 flex flex-col ">
      <HeaderServer name={specific_server_data.name} />
      <ChannelListProvider>
        <ChannelList channels={specific_server_data.channels} />
      </ChannelListProvider>
    </section>
  );
};
