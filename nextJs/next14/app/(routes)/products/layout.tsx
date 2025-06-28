import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products page",
  description: "All product available here",
};

export default function PruductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main style={{ border: "1px solid blue", margin: "2rem" }}>{children}</main>;
}
