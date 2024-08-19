import { useState } from "react";

const useFetch = ({
  api_function,
  transformData,
}: {
  api_function: () => any;
  transformData?: (data: any) => any;
}) => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  const fecthData = async () => {
    try {
      setIsloading(true);
      const res = await api_function();
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
  return { isLoading, fecthData, data };
};

export { useFetch };
