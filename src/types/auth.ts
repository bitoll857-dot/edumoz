import type { UserRole } from "./user";

export type AuthMode = "login" | "register";

export interface LoginFormData {
  identifier: string;

  password: string;

  remember: boolean;
}

export interface RegisterFormData {
  name: string;

  phone: string;

  email: string;

  password: string;

  confirmPassword: string;

  role: UserRole;

  city: string;

  acceptTerms: boolean;
}