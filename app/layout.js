import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Gulf | Venezuela",
  description: "Gulf Sitio Web ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>{children}</body>
    </html>
  );
}
