import { useNavigate, useRouteError } from "react-router-dom";

type Props = {
  error: unknown;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <p className="text-lg text-gray-600">
      {(error as Error)?.message ||
        (error as { statusText?: string })?.statusText}
    </p>
  );
};

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-[#0400DF] mb-2">404</h1>
        <p className="text-xl text-gray-600">
          ¡Oops! La página que buscas no se encuentra.
        </p>
        <p className="text-lg text-gray-600">
          Parece que has perdido el juego.
        </p>
        <ErrorMessage error={error} />
        <button
          className="mt-4 bg-[#0400DF] text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          onClick={() => navigate("/")}
        >
          Volver Atrás
        </button>
      </div>
    </div>
  );
};
export default Error;
