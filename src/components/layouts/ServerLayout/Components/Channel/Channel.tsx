
import { ShowFakePages } from "../../../../fakePages/ShowFakePages";
import { useSwipeHandler } from "../../hooks/useFakePageSwipeHandler";
import { useChannelList } from "../../hooks/useChannelList";
import { useHandleChannelType } from "../../hooks/useHandleChannels";
import { MegaphoneIcon } from "../../../../Icons/megaphone";
import { TopChannelBar } from "./Components/topChannelBar";

export const Channel: React.FC = () => {
  const { actualChannel } = useChannelList();
 

 
  function* modalGenerator() {
    yield handleModal(actualChannel);
  }

  const handleModal = useHandleChannelType({
    channelToCompare: actualChannel,
    childrenFakePage: actualChannel ? <TopChannelBar /> : <NoChannelSelected />, // Fake page if no channel selected
    isntFirsTime: false,
  });

  // Create the generator instance
  const modalGenInstance = modalGenerator();

  // Handler for swipe
  const handler = useSwipeHandler({
    onSwipedLeft: () => {
      const { done } = modalGenInstance.next(); 
      if (done) {
        console.log("Modal action already executed.");
      }
    },
  });

  return (
    <div className="flex flex-row items-center justify-center w-[100%] rounded-tl-lg rounded-bl-lg bg-overlay_2 ">
      <div
        {...handler}
        className="w-full ml-auto rounded-tl-lg rounded-bl-lg bg-overlay_2 screen_overlay"
        onClick={() => {
          const { done } = modalGenInstance.next(); // Call the generator on click
          if (done) {
            console.log("Modal action already executed.");
          }
        }}
      ></div>
      <ShowFakePages />
    </div>
  );
};

export const NoChannelSelected: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full gap-6 p-4 rounded-overlay ">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col items-center rounded-lg justify-evenly gap-5 p-4">
          <MegaphoneIcon size={60} color="#fff" />
          <h1 className="text-3xl text-custom_white font-almarai text-center">
            No te quedes en silencio
          </h1>
          <p className="text-xl text-center text-custom_white">
            Selecciona un canal de texto o voz y únete a la charla
          </p>
        </div>
      </div>
    </section>
  );
};
