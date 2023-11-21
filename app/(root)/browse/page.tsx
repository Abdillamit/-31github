"use client";

import { useGlobalContext } from "@/context";
import Login from "@/components/shared/login";
import { useSession } from "next-auth/react";
import ManageAccaunt from "@/components/shared/ManageAccaunt";

export default function page() {
  const { accaunt } = useGlobalContext();
  const { data: session } = useSession();

  if (session === null) return <Login />;
  if (accaunt === null) return <ManageAccaunt />;
  return <div>page</div>;
}
