import { HiHashtag } from "react-icons/hi";
import { HiSpeakerWave } from "react-icons/hi2";
import {
  ChannelCategory,
  ChannelTypeEnum,
} from "../../../Enums/SpecificServer";
import { useChannelList } from "../../../hooks/useChannelList";
import { ChannelsFormated } from "../../../types/server";

//estos de aca son las piezas que renderiza el componente de secciones
//estos son los canales agrupados renderizados
export const ItemAcordeonChannel = ({
  channel,
  isCategoryOpen,
}: {
  channel: ChannelsFormated;
  isCategoryOpen?: boolean;
}) => {
  const { setCurrentChannel } = useChannelList();

  const handleClick = () => {
    setCurrentChannel(channel.id);
    const channelType =
      channel.type === ChannelTypeEnum.TEXT ? "Canal de Texto" : "Canal de Voz";
      console.log(`Canal seleccionado: ${channel.name}, Tipo: ${channelType}`);
  };

  const showChannel = isCategoryOpen || (!isCategoryOpen && channel.isSelected);
  const hasNoCategory = channel.category === ChannelCategory.NO_CATEGORY;
  const activeStyles = channel.isSelected
    ? "bg-overlay_4 text-custom_white "
    : "text-gray";

  return (
    //ya agarré la onda, solo es un div con wea dentroxd
    //este componente recibe la magia de jesucristo con tu contexto bien coso
    //acá saca la wea del nombre 
    (showChannel || hasNoCategory) && (
      <div
        onClick={handleClick}
        className={`cursor-pointer transition-all flex gap-2 items-center mr-3 p-2 rounded-overlay font-almarai ${activeStyles}`}
      >
        <IconChannel type={channel.type} />
        <p>{channel.name}</p>
      </div>
    )
  );
};

export const IconChannel = ({
  type,
  size = 28,
}: {
  type: ChannelTypeEnum;
  size?: number;
}) => {
  return type === ChannelTypeEnum.TEXT ? (
    <HiHashtag size={size} />
  ) : (
    <HiSpeakerWave size={size} />
  );
};


