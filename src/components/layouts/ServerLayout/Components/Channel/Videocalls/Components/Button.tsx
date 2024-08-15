import { BUTTON_TYPE } from "../enums";

interface ButtonProps {
    type: BUTTON_TYPE;
    onClick: () => void;
    svg: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, svg }) => {
    let buttonClass = '';

    switch (type) {
        case BUTTON_TYPE.MICROPHONE:
            buttonClass = 'bg-overlay_2 hover:bg-overlay_4'; // Ejemplo de clase para micrófono
            break;
        case BUTTON_TYPE.PRESENTATION:
            buttonClass = 'bg-overlay_2 hover:bg-overlay_4'; // Ejemplo de clase para presentación
            break;
        case BUTTON_TYPE.CAMERA:
            buttonClass = 'bg-overlay_2 hover:bg-overlay_4'; // Ejemplo de clase para cámara
            break;
        case BUTTON_TYPE.HANG_UP:
            buttonClass = 'bg-red-500  hover:bg-red-600'; // Ejemplo de clase para colgar
            break;
        default:
            buttonClass = 'bg-overlay_2 hover:bg-overlay_4';
    }

    return (
        <button
            onClick={onClick}
            className={`flex items-center  justify-center w-14 h-14 rounded-full ${buttonClass} transition-colors duration-200`}
        >
            {svg}
        </button>
    );
};

export default Button;
