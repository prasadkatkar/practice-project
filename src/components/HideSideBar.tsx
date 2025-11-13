"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function HideableSidebar() {
  const pathname = usePathname();
  const hidePaths = ["/contact"];

  if (hidePaths.includes(pathname)) return null;
  return <Sidebar />;
}
