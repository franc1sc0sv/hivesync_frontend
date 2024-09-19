import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../../api/resetPassword'; // La función que interactúa con el backend
import { RiEyeCloseLine, RiEyeLine, RiArrowRightSLine } from 'react-icons/ri';

export const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('Token no válido o inexistente.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError('Token no válido.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      await resetPassword(token, newPassword);
      setSuccess('Contraseña restablecida con éxito.');
      setError(null);
    } catch (error) {
      setError('Error al restablecer la contraseña. Intenta de nuevo.');
      setSuccess(null);
    }
  };

  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const iconStyles = "absolute right-3 top-1/2 text-xl cursor-pointer text-white transform -translate-y-1/2";

  return (
    <div className="h-screen bg-overlay_1 flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-4 sm:mx-8 lg:max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Restablecer Contraseña
          </h1>
          <div className="bg-purple-500 h-1 w-16 mx-auto rounded-full"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <div className="relative">
            <label className="text-white text-sm mb-1 block">Nueva Contraseña</label>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Su contraseña"
              className="w-full p-4 text-white bg-[#2B2433] border-none rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            {showNewPassword ? (
              <RiEyeLine size={24} className={iconStyles} onClick={toggleNewPasswordVisibility} />
            ) : (
              <RiEyeCloseLine size={24} className={iconStyles} onClick={toggleNewPasswordVisibility} />
            )}
          </div>
          <div className="relative">
            <label className="text-white text-sm mb-1 block">Confirmar Contraseña</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme su contraseña"
              className="w-full p-4 text-white bg-[#2B2433] border-none rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {showConfirmPassword ? (
              <RiEyeLine size={24} className={iconStyles} onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <RiEyeCloseLine size={24} className={iconStyles} onClick={toggleConfirmPasswordVisibility} />
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full py-4 text-white bg-[#661AE6] rounded-md hover:bg-[#580BB5] transition"
          >
            Restablecer Contraseña
            <RiArrowRightSLine size={24} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};
