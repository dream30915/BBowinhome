import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Capital Pro - รับจำนอง ขายฝาก อสังหาริมทรัพย์",
  description: "บริการรับจำนอง ขายฝาก บ้าน ที่ดิน คอนโด ทั่วประเทศ ดอกเบี้ยต่ำ อนุมัติไว ถูกกฎหมาย เชื่อถือได้",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={kanit.className}>
        {children}
      </body>
    </html>
  );
}
