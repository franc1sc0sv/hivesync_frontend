import { RiArrowRightSLine } from "react-icons/ri";

interface PurpleInputProps {
  text: string;
}

export const PurpleInput: React.FC<PurpleInputProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="w-full bg-primary p-3 rounded-xl text-custom_white m-10 font-almarai flex justify-between items-center">
        <p className="mb-0">{text}</p>
        <span><RiArrowRightSLine className="text-2xl" /></span>
      </div>
    </div>
  );
};
