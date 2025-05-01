import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/custom.css";

export const metadata: Metadata = {
  title: "Tranzit - House-to-House Delivery Service",
  description: "Reliable delivery for movers with trucks, pickups, and lorries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-background text-primary">
        {children}
      </body>
    </html>
  );
}
