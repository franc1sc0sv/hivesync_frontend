import { ChannelListProvider } from "../../Context/ChannelListContext";
import { ChannelList } from "./ChannelsList";
import { HeaderServer } from "./HeaderServer";

// SpecificServer

export const ServerHome = ({
  specific_server_data,
}: {
  specific_server_data: SpecificServer;
}) => {
  if (!specific_server_data.channels.length) return <p>Loading . . </p>;

  return (
    <section className="h-full w-[70%] bg-overlay_2 rounded-overlay p-4 gap-6 flex flex-col ">
      <HeaderServer name={specific_server_data.name} />
      <ChannelListProvider>
        <ChannelList channels={specific_server_data.channels} />
      </ChannelListProvider>
    </section>
  );
};
