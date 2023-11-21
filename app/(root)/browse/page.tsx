"use client";

import { useGlobalContext } from "@/context";
import Login from "@/components/shared/login";
import { useSession } from "next-auth/react";

export default function page() {
  const { accaunt } = useGlobalContext();
  const { data: session } = useSession();

  if (session === null) return <Login />;
  return <div>page</div>;
}
