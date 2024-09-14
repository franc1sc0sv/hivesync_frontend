import { useEffect } from 'react';
import { ChannelType } from '../types/server';
import { useModal } from '../../../../store/useModal';

const CHANNEL_TYPE_TEXT = 'TEXT';
const CHANNEL_TYPE_VIDEO = 'VIDEO';



export const useHandleChannelType = (channelToCompare: ChannelType | null, isntFirsTime: boolean) => {

    const { setModalId } = useModal();
    
    const handleModal = (channelToCompare:  ChannelType | null ) => {
        if (!channelToCompare) return;

        if (channelToCompare.type === CHANNEL_TYPE_TEXT) {
            
        
        } else if (channelToCompare.type === CHANNEL_TYPE_VIDEO) {

            setModalId(channelToCompare.id)
        }
    }

    useEffect(() => {
        if (!isntFirsTime) return ;
        handleModal(channelToCompare)
    }, [channelToCompare]);

    return handleModal
};

