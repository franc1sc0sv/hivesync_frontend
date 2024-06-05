import { useState, ReactElement, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { HiCalendarDays } from "react-icons/hi2";

interface DateProps {
    title?: string,
    placeholder: string
}

export const DateInput: React.FC<DateProps> = ({title, placeholder}): ReactElement => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    // Referencia al contenedor que envuelve el campo de entrada y el calendario
    const calendarRef = useRef<HTMLDivElement>(null);

    const handleDateChange = (date: Date | Date[] | null): void => {
        if (date instanceof Date) {
            setSelectedDate(date);
        } else if (Array.isArray(date) && date.length > 0 && date[0] instanceof Date) {
            setSelectedDate(date[0]);
        } else {
            setSelectedDate(null);
        }
        setShowDatePicker(false);
    };

    const toggleDatePicker = (): void => {
        setShowDatePicker(!showDatePicker);
    };

    // Efecto para manejar los clics fuera del calendario
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            // Verifica si el clic ocurrió fuera del contenedor del calendario
            if (calendarRef.current && !calendarRef.current.contains(target)) {
                setShowDatePicker(false); // Oculta el calendario si se hace clic fuera de él
            }
        };

        // Agrega un event listener para los clics en el cuerpo del documento
        document.body.addEventListener('click', handleClickOutside);

        // Limpia el event listener al desmontar el componente para evitar fugas de memoria
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []); 

    return (
        <div className="flex flex-col gap-4 max-w-[320px] mx-auto">
            <h3 className="text-lg text-custom_white font-almarai font-bold">{title}</h3>

            <div className="relative mx-auto w-full max-w-md" ref={calendarRef}>
                <input
                    type="text"
                    className="bg-overlay_2 w-full p-3 rounded-xl text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary transition duration-300"
                    placeholder={placeholder}
                    onClick={toggleDatePicker}
                    value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                    readOnly
                />

                {showDatePicker && ( // Muestra el calendario si showDatePicker es true
                    <div className="absolute top-full left-0 right-0 z-10 mt-2">
                        <Calendar
                            value={selectedDate || undefined}
                            onChange={handleDateChange} // Añade el evento onChange
                            className="rounded-xl"
                        />
                    </div>
                )}

                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button type="button" onClick={toggleDatePicker}>
                        <HiCalendarDays className="text-xl text-custom_white" />
                    </button>
                </div>

            </div>
        </div>
    );
};
