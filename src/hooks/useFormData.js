import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useFormData = () => {
  const { user } = useContext(AuthContext);
  const {
    data: formData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["getFormData"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_apiLink}/api/getFormData?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [formData, isLoading, refetch];
};

export default useFormData;
