import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { useModal } from "../../store/useModal";

interface EditOptionProps {
  title: string;
  option: boolean;
  modalId: string;
}

export const EditProfileOption: React.FC<EditOptionProps> = ({
  title,
  option,
  modalId,
}) => {
  const { setModalId } = useModal();
  return (
    <div
      className="flex items-center justify-center gap-3 px-5 py-2 border border-white w-max bg-overlay_2 text-custom_white rounded-3xl"
      onClick={() => setModalId(modalId)}
    >
      {option ? (
        <HiChatBubbleLeftRight className="text-2xl" />
      ) : (
        <HiPencil className="text-2xl" />
      )}
      <p className="text-md">{title}</p>
    </div>
  );
};
