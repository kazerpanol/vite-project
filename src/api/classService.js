import api from "./axios";

export const getClasses = async () => {
  const response = await api.get("/api/class/getclasses");
  return response.data;
};
