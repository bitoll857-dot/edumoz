export type EducationLevel = "Ensino basico" | "Ensino secundario" | "1a a 12a classe";

export type SchoolClass =
  | "1a classe"
  | "2a classe"
  | "3a classe"
  | "4a classe"
  | "5a classe"
  | "6a classe"
  | "7a classe"
  | "8a classe"
  | "9a classe"
  | "10a classe"
  | "11a classe"
  | "12a classe";

export type Subject = {
  name: string;
  slug: string;
  level: EducationLevel;
  isRequired: boolean;
};
