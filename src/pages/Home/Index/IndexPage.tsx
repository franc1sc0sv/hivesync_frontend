type Fonts = "amiko" | "almarai" | "anaheim";

type PropsFontBox = {
  font: Fonts;
};

type PropsColorBox = {
  color: Color;
};

type Color = {
  name: string;
  value: string;
  propiertie: string;
};

const fonts: Array<Fonts> = ["amiko", "almarai", "anaheim"];

const colorsArray: Array<Color> = [
  { name: "primary", value: "#45156B", propiertie: "bg-primary" },
  { name: "secondary", value: "#382C6C", propiertie: "bg-secondary" },
  { name: "light_blue", value: "#486CFF", propiertie: "bg-light_blue" },
  { name: "custom_white", value: "#FFFFFE", propiertie: "bg-custom_white" },
  { name: "gray", value: "#8C8C8C", propiertie: "bg-gray" },
  { name: "overlay_1", value: "#19161D", propiertie: "bg-overlay_1" },
  { name: "overlay_2", value: "#2E2934", propiertie: "bg-overlay_2" },
  { name: "overlay_3", value: "#141414", propiertie: "bg-overlay_3" },
];

export const IndexPage = () => {
  return (
    <main className="grid w-full h-screen grid-rows-2 p-10 bg-overlay_1">
      <section className="grid w-full grid-cols-3 gap-10 place-items-center">
        {fonts.map((x) => (
          <FontsBox font={x} />
        ))}
      </section>
      <section className="grid grid-cols-4 gap-8 place-items-center">
        {colorsArray.map((x) => (
          <ColorBox color={x} />
        ))}
      </section>
    </main>
  );
};

const FontsBox: React.FC<PropsFontBox> = ({ font }) => {
  return (
    <div
      className={`relative flex flex-col w-full gap-2 p-5 text-white rounded-lg bg-overlay_2 font-${font}`}
    >
      <p className="absolute text-5xl transform -translate-x-1/2 -top-14 left-1/2 ">
        {font}
      </p>
      <p className="text-5xl font-extrabold capitalize ">lorem ipsum</p>
      <p className="text-3xl font-bold capitalize">lorem ipsum</p>
      <p className="text-xl font-medium capitalize">lorem ipsum</p>
    </div>
  );
};

const ColorBox: React.FC<PropsColorBox> = ({ color }) => {
  const { name, value, propiertie } = color;
  const optionalStyle = propiertie === "bg-overlay_2" && "border border-white";
  return (
    <div className="flex flex-col items-center justify-center w-full p-2 rounded-lg bg-overlay_2">
      <p className="text-2xl text-white font-amiko">
        {name} - {value}
      </p>
      <div
        className={`w-16 h-16 rounded-full ${propiertie} ${optionalStyle}`}
      ></div>
    </div>
  );
};
