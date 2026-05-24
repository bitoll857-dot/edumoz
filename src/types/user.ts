export type UserRole = "student" | "parent" | "teacher" | "school" | "admin";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type StudentProfile = UserProfile & {
  role: "student";
  schoolClass: string;
};

export type ParentProfile = UserProfile & {
  role: "parent";
  studentIds: string[];
};

export type TeacherProfile = UserProfile & {
  role: "teacher";
  subjects: string[];
};
