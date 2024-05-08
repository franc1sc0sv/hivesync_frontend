import { RiArrowRightSLine } from "react-icons/ri";

interface PurpleInputProps {
  text: string;
}

export const SubmitButton: React.FC<PurpleInputProps> = ({ text }) => {
  return (
    <button type="submit" className="w-full bg-primary p-3 font-bold rounded-xl text-custom_white font-almarai flex justify-between items-center">
      <p>{text}</p>
      <RiArrowRightSLine size={28} />
    </button>
  );
};
