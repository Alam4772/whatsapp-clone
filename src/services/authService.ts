import { jwtDecode } from "jwt-decode";
import api from "./api";
import { localStorageService } from "./localStorageService";

export interface LoginPayload {
  accessToken: string;
}

export interface LoginResponse {
  token: string;
  user: any;
}

export interface JwtPayload {
  exp: number; // expiry time in seconds
  iat?: number; // issued at (optional)
  [key: string]: any; // any other custom claims
}

export function getToken(): string | null {
  return localStorage.getItem("accessToken");
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

export function isTokenExpired(token: string): boolean {
  try {
    const decoded: JwtPayload = jwtDecode(token);
    if (!decoded.exp) return true;

    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp < currentTime;
  } catch (err) {
    return true; // if token is invalid, treat as expired
  }
}

export function isAuthenticated(): boolean {
  const token = getToken();
  if (!token) return false;
  if (isTokenExpired(token)) {
    signOut(); // clear expired token
    return false;
  }
  return true;
}
