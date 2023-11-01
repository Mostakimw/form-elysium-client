import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSpecificFormData = (formId) => {
  const {
    data: specificFormData = null,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getSpecificFormData", formId],
    queryFn: async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_apiLink
        }/api/getSpecificFormData?formId=${formId}`
      );
      return res.data;
    },

    enabled: Boolean(formId),
  });

  return { specificFormData, isLoading, isError };
};

export default useSpecificFormData;
