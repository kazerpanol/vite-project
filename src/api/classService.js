import api from "./axios";

export const getClasses = async () => {
  const response = await api.get("/api/class/getclasses");
  return response.data;
};

export const getMonsters = async () => {
  const response = await api.get("/api/Monster/GetMonsters");
  return response.data;
};

export const createMonster = (monsterData) => {
  return api.post("api/Monster/CreateMonster", monsterData);
};
