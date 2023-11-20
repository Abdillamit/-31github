"use client";

import { useGlobalContext } from "@/context";
import Login from "@/components/shared/login";

export default function page() {
  const { accaunt } = useGlobalContext();

  if (accaunt === null) return <Login />;
  return <div>page</div>;
}
