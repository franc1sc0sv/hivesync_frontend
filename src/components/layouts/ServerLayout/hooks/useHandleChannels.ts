import { ChannelType } from '../types/server';
import { useModal } from '../../../../store/useModal';
import useFakePages from '../../../../store/useFakePage';
import { useEffect } from 'react';

const CHANNEL_TYPE_TEXT = 'TEXT';
const CHANNEL_TYPE_VIDEO = 'VIDEO';


interface HandleChannelTypeParams {
  channelToCompare: ChannelType | null;
  isntFirsTime: boolean;
  childrenFakePage: React.ReactNode;
}

export const useHandleChannelType = ({
  channelToCompare,
  isntFirsTime,
  childrenFakePage,
}: HandleChannelTypeParams) => {
  const { addFakePage, fakePages } = useFakePages();
  const { setModalId } = useModal();

//averiguamos que tipo de coso es para ejecutar que hook para renderizarle 
  const handleModal = (channelToCompare: ChannelType | null) => {
   
    if (!channelToCompare) return;
    
    if (channelToCompare.type === CHANNEL_TYPE_TEXT) {
        const pageExists = fakePages.some(page => 
            page.title === "" && page.children === childrenFakePage
        );
        
        if (!pageExists) {
            childrenFakePage && addFakePage({ title: "", children: childrenFakePage });
        }
        console.log(pageExists)
        
          
    } else if (channelToCompare.type === CHANNEL_TYPE_VIDEO) {
      setModalId(channelToCompare.id);
    }
  };

  useEffect(() => {
    if (!isntFirsTime) return;
    handleModal(channelToCompare);
    
  }, [isntFirsTime]);

  return handleModal;
};