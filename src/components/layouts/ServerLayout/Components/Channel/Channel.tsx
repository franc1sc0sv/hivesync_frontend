import useFakePages from "../../../../../store/useFakePage";
import { ShowFakePages } from "../../../../fakePages/ShowFakePages";
import { useSwipeHandler } from "../../hooks/useFakePageSwipeHandler";

export const Channel: React.FC = () => {
  const { addFakePage } = useFakePages();

  const handler = useSwipeHandler({
    onSwipedLeft: () => addFakePage({ title: "su", children: <ElChildren /> }),
  });

  return (
    <div className="flex flex-row items-center justify-center w-[100%] rounded-tl-lg rounded-bl-lg max-h-fit bg-overlay_2 screen_overlay">
      <div
        {...handler}
        className="w-full h-full ml-auto rounded-tl-lg rounded-bl-lg bg-overlay_2 screen_overlay"
        onClick={() =>
          addFakePage({ title: "Primer children", children: <ElChildren /> })
        }
      ></div>
      <ShowFakePages />
    </div>
  );
};

const ElChildren: React.FC = () => {
  const { addFakePage } = useFakePages();

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <p className="text-2xl text-custom_white">este es el primer children </p>

      <button
        onClick={() =>
          addFakePage({ title: "Segundo children", children: <Children2 /> })
        }
        className="text-2xl text-white bg-primary"
      >
        Llamemos a una segunda fake page
      </button>
    </div>
  );
};

const Children2: React.FC = () => {
  const { addFakePage } = useFakePages();

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <p className="text-2xl text-custom_white">
        este es el segundo children su{" "}
      </p>

      <button
        onClick={() =>
          addFakePage({ title: "Tercer children", children: <Children3 /> })
        }
        className="text-2xl text-white bg-primary"
      >
        Llamemos a una tercera fake page
      </button>
    </div>
  );
};

const Children3: React.FC = () => {
  const { addFakePage } = useFakePages();

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <p className="text-2xl text-custom_white">
        este es el tercer children wowowowo{" "}
      </p>

      <button
        onClick={() =>
          addFakePage({ title: "tercer children", children: <Children3 /> })
        }
        className="text-2xl text-white bg-primary"
      >
        Llamemos a una cuarta fake page
      </button>
    </div>
  );
};
