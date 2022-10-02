export interface MainDetails {
  firstName: string;
  lastName: string;
  title: string;
}

export interface EducationType {
  university: University;
  diplomas: Diplomas[];
  courses: Courses[];
}

export interface University {
  year: string;
  name: string;
  title: string;
}

export interface Diplomas {
  id: number;
  year: string;
  university: string;
  name: string;
}

export interface Courses {
  id: number;
  year: string;
  name: string;
}

export interface AboutType {
  id: number;
  paragraph: string;
}

export interface DetailsType {
  name: string;
  value: string;
}

export interface DetailsSummaryType {
  country: string;
  city: string;
  email: string;
  phone: string;
  web: string;
}

export interface ExperienceType {
  id: number;
  logo: string;
  company: string;
  dates: string;
  city: string;
  accomplishments: string;
}

export interface SkillsDetails {
  id: number;
  name: string;
  value: number;
}

export interface HeaderFields {
  locationField: string;
  emailField: string;
  phoneField: string;
  webField: string;
}

export interface AboutFields {
  aboutTitle: string;
}

export interface EducationFields {
  educationTitle: string;
  university: string;
  diplomas: string;
  courses: string;
}

export interface ExperienceFields {
  experienceTitle: string;
}

export interface SkillsFields {
  skillsTitle: string;
}

export interface PageFields {
  header: HeaderFields;
  about: AboutFields;
  education: EducationFields;
  experience: ExperienceFields;
  skills: SkillsFields;
}
