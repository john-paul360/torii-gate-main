import { useContext } from "react";
import { TenantContext } from "../context/tenantContext.jsx";

export const useTenantContext = () => useContext(TenantContext);
