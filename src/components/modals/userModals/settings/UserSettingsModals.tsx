import { AccountSettingsModals } from "./accountSettings/modals";
import { PrivacityModals } from "./privacity/PrivacityModals";
import { VoiceModals } from "./voiceSettings/voiceModals";
import { EditAppearanceModals } from "./appearance/modals";

export const UserSettingsModals: React.FC = () => {
    return (
        <>
            <AccountSettingsModals />
            <PrivacityModals />
            <VoiceModals />
            <EditAppearanceModals />
        </>
    )

}