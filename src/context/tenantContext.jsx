import { createContext, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export const TenantContext = createContext();

const Tenantprovider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { token } = useAppContext();

  //api call
  const fetchProperties = async () => {
    if (token) {
      try {
        const { data } = await axiosInstance.get(`/property?page=${page}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(data.properties);
        setPage(data.page);
        setTotalPage(data.totalPage);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [token, page]);

  return (
    <TenantContext.Provider
      value={{ isLoading, properties, page, setPage, totalPage }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default Tenantprovider;
