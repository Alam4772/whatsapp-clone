import api from "./api";

export const getUsers = async (): Promise<any> => {
  const response = await api.get<any>("/users");
  return response;
};
