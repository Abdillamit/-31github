import { Dispatch, ReactNode, SetStateAction } from "react";
import { AxiosResponse } from "./index.d";

export interface ContextType {
  accaunt: AccountProps | null;
  setAccaunt: Dispatch<SetStateAction<AccountProps | null>>;
}

export interface AccountProps {
  _id: string;
  uid: string;
  name: string;
  pin: string;
}

export interface ChildProps {
  children: ReactNode;
}

export interface AxiosResponse {
  success: boolean;
  metadata?: string;
}

export interface AccountResponse extends AxiosResponse {
  data: AccountProps[] | AccountProps;
}
