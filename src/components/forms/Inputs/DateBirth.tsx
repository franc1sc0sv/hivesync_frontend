import { useState, ReactElement, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RiCalendarLine } from 'react-icons/ri';

// el fokin error del onChange no supe como solucionarlo asi q sdhjajks

export const DateOfBirthInput = (): ReactElement => {
    // Estado para almacenar la fecha seleccionada
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Estado para controlar la visibilidad del calendario
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    // Referencia al contenedor que envuelve el campo de entrada y el calendario
    const calendarRef = useRef<HTMLDivElement>(null);

    // Función para manejar el cambio de fecha
    const handleDateChange = (date: Date): void => {
        setSelectedDate(date);
        setShowDatePicker(false); // Oculta el calendario después de seleccionar una fecha
    };

    // Función para alternar la visibilidad del calendario
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
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <div className="flex flex-col gap-4 w-3/5">
            <h3 className="text-lg text-custom_white font-almarai font-bold">Fecha de Nacimiento</h3>
            <div className="relative mx-auto w-full max-w-md" ref={calendarRef}>
                <input
                    type="text"
                    className="bg-overlay_2 w-full p-3 rounded-xl text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary transition duration-300"
                    placeholder="Fecha de nacimiento"
                    readOnly
                    onClick={toggleDatePicker} // Abre o cierra el calendario al hacer clic en el campo de entrada
                    value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                />
                {showDatePicker && ( // Muestra el calendario si showDatePicker es true
                    <div className="absolute top-full left-0 z-10">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate || undefined}
                            className="bg-custom_white p-2 rounded-xl"
                        />
                    </div>
                )}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button type="button" onClick={toggleDatePicker}>
                        <RiCalendarLine className="text-xl text-custom_white" />
                    </button>
                </div>
            </div>
        </div>
    );
};
