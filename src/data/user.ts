import type { User } from "~/types/user";

export const users: User[] = [
  {
    id: 1,

    name: "Bitoll User",

    email: "usuario@bitoll.co.mz",

    phone: "+258 84 000 0000",

    avatarUrl: "",

    city: "Maputo",

    status: "Conta ativa",

    verified: true,

    preferredContactMethod: "WhatsApp",

    role: "student",
  },
];

export const isAuthenticated = false;

export const currentUser = isAuthenticated ? users[0] : null;