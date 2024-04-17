import { RiArrowRightSLine } from "react-icons/ri";

interface PurpleInputProps {
  text: string;
}

export const PurpleInput: React.FC<PurpleInputProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="w-full bg-primary p-3 font-bold rounded-xl text-custom_white font-almarai flex justify-between items-center">
        <p>{text}</p>
        <RiArrowRightSLine size={28} />
      </div>
    </div>
  );
};
