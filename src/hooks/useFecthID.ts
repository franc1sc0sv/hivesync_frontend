import { useState } from "react";

const useFetchID = ({
  api_function,
  transformData,
}: {
  api_function: (id: string) => any;
  transformData?: (data: any) => any;
}) => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  const fecthData = async (id: string) => {
    try {
      setIsloading(true);
      const res = await api_function(id);
      let datos = { ...res };

      if (transformData) {
        datos = transformData(res);
      }

      setData(datos);
      setIsloading(false);

      return datos;
    } catch (e) {
      setIsloading(false);
    }
  };

  return { isLoading, data, fecthData };
};

export { useFetchID };
