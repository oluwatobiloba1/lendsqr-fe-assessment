import { User } from "./user.type";

export interface FilterUserTable {
  username: string;
  email: string;
  phonenumber: string;
  organization: string;
  date: Date | string;
  status: User["status"];
}
