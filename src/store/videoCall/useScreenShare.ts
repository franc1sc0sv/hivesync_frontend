import create from 'zustand';

interface ScreenShareState {
    screenSretam: MediaStream | null;
    error: string | null;
    startScreenShare: () => Promise<void>;
    stopScreenShare: () => void;
}

export const useScreenShare = create<ScreenShareState>((set) => ({
    screenSretam: null,
    error: null,

    startScreenShare: async () => {
        try {
            const displayStream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: false
            });

            set({
                screenSretam: displayStream,
                error: null,
            });

            // Handle screen sharing end
            displayStream.getTracks().forEach(track => {
                track.onended = () => {
                    set({ screenSretam: null });
                };
            });
        } catch (err) {
            console.error('Error al intentar compartir la pantalla:', err);
            set({
                screenSretam: null,
                error: 'No se pudo compartir la pantalla. Asegúrate de que has concedido los permisos necesarios.'
            });
        }
    },

    stopScreenShare: () => {
        set(state => {
            state.screenSretam?.getTracks().forEach(track => track.stop());
            return { screenSretam: null };
        });
    },
}));
