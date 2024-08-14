import { AiFillPicture } from "react-icons/ai";

interface InputProps {
  text: string;
}

export const ImgInput: React.FC<InputProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full text-custom_white">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-40 border-4 border-dashed rounded-lg cursor-pointer border-custom_white bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center p-5">
          <AiFillPicture size={30} />
          <p className="text-lg text-gray-500 font-almarai dark:text-gray-400">
            {text}
          </p>
        </div>

        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};
