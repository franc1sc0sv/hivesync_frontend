import useFakePages from "../../../../../store/useFakePage";
import { ShowFakePages } from "../../../../fakePages/ShowFakePages";
import { useSwipeHandler } from "../../hooks/useFakePageSwipeHandler";

import { MegaphoneIcon } from "../../../../Icons/megaphone";
// esta es donde sale la fakepage
export const Channel: React.FC = () => {
  const { addFakePage } = useFakePages();

  const handler = useSwipeHandler({
    onSwipedLeft: () => addFakePage({ title: "", children: <NoChannelSelected /> }),
  });

  return (
    <div className="flex flex-row items-center justify-center w-[100%] rounded-tl-lg rounded-bl-lg max-h-fit bg-overlay_2 screen_overlay">
      <div
        {...handler}
        // aca esta wea
        className="w-full h-full ml-auto rounded-tl-lg rounded-bl-lg bg-overlay_2 screen_overlay"
        onClick={() =>
          addFakePage({ title: "", children: <NoChannelSelected /> })
        }
      ></div>
      <ShowFakePages />
    </div>
  );
};

const NoChannelSelected: React.FC = () => {
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
  )
}