import { ReactNode, useEffect, useState } from "react";
import { get_profile } from "../../api/auth";
import { useSession } from "../../store/user";

export const SessionDetector = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useSession();
  const perfil = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await get_profile(token ?? "");
      setUser(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    perfil();
  }, []);

  if (loading) return <p>Cargando . . . .</p>;

  return <>{children}</>;
};
