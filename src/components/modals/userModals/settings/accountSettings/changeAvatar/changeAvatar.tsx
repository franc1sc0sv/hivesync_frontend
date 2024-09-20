import { ModalTemplate } from "../../../../ModalTemplate";

import { useEffect, useState } from "react";
import { convertArrayToFileList } from "../../../../../../helpers/convertArrayToFileList";
import { useSingleImage } from "../../../../../../store/useSingleImage";

import AvatarEditor from "react-avatar-editor";

import { motion } from "framer-motion";

import Range from "../../../../../forms/Inputs/range";
import { CustomizedButton } from "../../../../../buttons/customizedButton";

import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import SingleImageDrop from "./singleImageDrop";

export const ChangeAvatar = () => {
  const { data, setImagen, setData } = useSingleImage();

  const [imageURL, setImageURL] = useState<string | null>(null);
  const [cropedImage, setCropedImage] = useState(null);
  const [zoom, setZoom] = useState(2.5);
  const [isLoading, setLoading] = useState(false);

  const zoomMinmax = [1, 5];

  const resetForm = () => {
    setImageURL(null);
    setImagen([]);
    setData([]);
  };

  const succesSubmitAvatar = async (imageBlob: any) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("avatar", imageBlob, `avatar_${new Date()}.png`);

      const avatar = convertArrayToFileList(
        formData.getAll("avatar") as File[]
      );

      console.log(avatar);

      const status = true;

      if (status) {
        resetForm();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      const imageUrl = URL.createObjectURL(data[0]);
      setImageURL(imageUrl);
    }
  }, [data]);

  useEffect(() => {
    if (zoom >= zoomMinmax[1]) {
      setZoom(5);
      return;
    }

    if (zoom <= zoomMinmax[0]) {
      setZoom(1);
      return;
    }
  }, [zoom]);

  return (
    <div className="flex flex-col w-full gap-5 p-4 mx-auto lg:w-1/2">
      <h2 className="text-2xl text-center text-custom_white">
        {!imageURL ? "Cambiar avatar" : "Ajustar imagen"}
      </h2>

      {!imageURL && <ImageDrop />}

      {imageURL && (
        <AjustarImagen
          minmax={zoomMinmax}
          step={0.1}
          setValue={setZoom}
          value={zoom}
          image={imageURL}
          handleClickReset={resetForm}
          setCropedImage={setCropedImage}
          cropedImage={cropedImage}
          isLoading={isLoading}
          succesSubmitAvatar={succesSubmitAvatar}
        />
      )}
    </div>
  );
};

const ImageDrop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <SingleImageDrop />
    </motion.div>
  );
};

const AjustarImagen = ({
  image,
  minmax,
  step,
  setValue,
  value,
  handleClickReset,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center justify-center gap-3 rounded-2x"
    >
      <AvatarEditor
        image={image}
        width={150}
        height={150}
        scale={value}
        borderRadius={15}
      />

      <Zoom minmax={minmax} step={step} setValue={setValue} value={value} />
      <div className="flex items-center justify-center gap-4">
        <CustomizedButton
          text="Cancelar"
          displayIcon={false}
          color="#45156B"
          onAction={handleClickReset}
        />

        <CustomizedButton
          text="Guardar"
          displayIcon={false}
          color="#9333EA"
          onAction={() => {}}
        />
      </div>
    </motion.div>
  );
};

const Zoom = ({ minmax, step, setValue, value }: any) => {
  const handleClickPlus = () => {
    if (value + 0.25 >= minmax[1]) {
      setValue(5);
      return;
    }
    setValue(value + 0.25);
  };
  const handleClickMinus = () => {
    if (value - 0.25 <= minmax[0]) {
      setValue(1);
      return;
    }
    setValue(value + 0.25);
    setValue(value - 0.25);
  };
  return (
    <div className="flex items-center justify-center w-full gap-3">
      <AiOutlineMinus
        color="#fff"
        onClick={handleClickMinus}
        className="cursor-pointer"
        size={30}
      />
      <Range
        color="#000"
        minmax={minmax}
        step={step}
        setValue={setValue}
        value={value}
      />
      <AiOutlinePlus
        color="#fff"
        onClick={handleClickPlus}
        className="cursor-pointer"
        size={30}
      />
    </div>
  );
};

export const ChangeAvatarModal: React.FC = () => {
  return (
    <ModalTemplate identificator="changeAvatar">
      <ChangeAvatar />
    </ModalTemplate>
  );
};
