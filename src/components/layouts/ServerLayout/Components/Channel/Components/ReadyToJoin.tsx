import { MegaphoneIcon } from "../../../../../Icons/megaphone"
import { ButtonCalls } from "../../../../VideocallLayout/components/button"
import { BUTTON_TYPE } from "../../../../VideocallLayout/enum"
import useMicrophoneStore from "../../../../../../store/videoCall/useMicrophoneVideocalls"
import { PiMicrophoneFill } from "react-icons/pi"
import { PiMicrophoneSlashFill } from "react-icons/pi"
import { useChannelList } from "../../../hooks/useChannelList"
import useFakePages from "../../../../../../store/useFakePage"
import { TopChannelBar } from "./topChannelBar"


export function ReadyToJoin() {
  const {actualChannel} = useChannelList();
  const { isMicrophoneActive, toggleMicrophone } = useMicrophoneStore();
  const {addFakePage} = useFakePages()
  

  
  const handleToggleMicrophone = async () => {
    // Alterna el estado del micrófono utilizando el estado global de Zustand
    await toggleMicrophone();
  };
  
  const microfone = {
    Icon: isMicrophoneActive ? PiMicrophoneFill : PiMicrophoneSlashFill,
    onClick: handleToggleMicrophone,
    type: BUTTON_TYPE.MICROPHONE,
  }

  const handleClick = () =>{
    addFakePage({
      title:"",
      children: <TopChannelBar/>
    })
  }
  return (

     <section className="flex flex-col items-center justify-center h-full w-full bg-gray-900 text-white">
        <article className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary to-light_purple rounded-full">
          <MegaphoneIcon size={50} color={"#ffffff"}/>
          </div>
          <h2 className="text-xl font-semibold">{actualChannel?.name}</h2>
          <p>¡Todavía no ha llegado nadie!</p>
          <p className="text-sm text-gray-400 text-center w-3/4">Cuando lo tengas todo listo para hablar, entra sin más.</p>
        </article>
        <div className="bg-gray-900 rounded-full flex flex-center justify-between">
          <article className="flex items-center justify-center w-full mt-4 space-x-1">
            <ButtonCalls type={microfone.type} Icon={microfone.Icon} onClick={handleToggleMicrophone}/>
            <div className="bg-green-500 rounded-xl flex items-center justify-center px-4 py-2 bg-primary text-white"
            onClick={handleClick}
            >
              <p>Unirme al canal de voz</p>
            </div>
            <div className="bg-gray-700 rounded-full flex items-center justify-center w-12 h-12 bg-overlay_2"></div>
          </article>
        </div>
      </section>
      
  )
}
