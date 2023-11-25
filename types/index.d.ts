import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContextType {
  accaunt: AccauntProps | null;
  setAccaunt: Dispatch<SetStateAction<AccauntProps | null>>;
}

export interface AccauntProps {
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
}
