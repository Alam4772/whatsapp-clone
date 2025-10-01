import api from "./api";
import { localStorageService } from "./localStorageService";

export interface LoginPayload {
  accessToken: string;
}

export interface LoginResponse {
  token: string;
  user: any;
}

export const signIn = async (payload: LoginPayload): Promise<void> => {
  const response = await api.post<LoginResponse>("/signIn", {
    access_token: payload.accessToken,
  });

  const { token, user } = response.data;

  // store token in localStorage (or cookies if needed)
  localStorageService.set("accessToken", token);
  localStorageService.set("user", user);
};

export const signOut = (): void => {
  localStorageService.remove("accessToken");
  localStorageService.remove("user");
};
