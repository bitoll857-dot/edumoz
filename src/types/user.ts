export type UserRole =
  | "student"
  | "parent"
  | "teacher"
  | "school"
  | "admin";

export type User = {
  id: number;

  name: string;

  email: string;

  phone?: string;

  avatarUrl?: string;

  city?: string;

  status?: string;

  verified?: boolean;

  preferredContactMethod?: string;

  role: UserRole;
};

export type StudentUser = User & {
  role: "student";

  schoolClass: string;

  interests?: string[];
};

export type ParentUser = User & {
  role: "parent";

  studentIds: number[];
};

export type TeacherUser = User & {
  role: "teacher";

  subjects: string[];
};

export type SchoolUser = User & {
  role: "school";

  schoolName: string;
};

export type AdminUser = User & {
  role: "admin";
};