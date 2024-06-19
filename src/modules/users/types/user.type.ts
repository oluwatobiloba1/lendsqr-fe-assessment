interface PersonalInfo {
  organization: "lendsqr" | "lendstar";
  fullname: string;
  phonenumber: string;
  email: string;
  bvn: string;
  gender: "male" | "female";
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  numberOfChildren: number;
  typeOfResidence: "owned" | "rented" | "leased" | "mortgaged";
}

interface Employment {
  levelOfEducation:
    | "high school"
    | "associate's degree"
    | "bachelor's degree"
    | "master's degree"
    | "doctorate";
  employmentStatus: "employed" | "unemployed" | "self-employed" | "retired";
  employmentSector: "private" | "public" | "government" | "non-profit";
  durationOfEmployment: string; // e.g., "15 years"
  officialEmail: string;
  monthlyIncome: string; // e.g., "$2000 - $7000"
  loanRepayment: number; // e.g., "$3000"
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Guarantor {
  fullname: string;
  phonenumber: string;
  email: string;
  relationship: "friend" | "colleague" | "family" | "other";
}

export interface User {
  personalinfo: PersonalInfo;
  employment: Employment;
  socials: Socials;
  guarantor: Guarantor[];
  status: "inactive" | "pending" | "blacklisted" | "active";
  dateJoined: Date;
}
