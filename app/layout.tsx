import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/Sidebar";
export const metadata: Metadata = {
  title: "Smart Home",
  description: "developed by @shubham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
          <Progress value={89} className="h-[1.5px] absolute top-0"/>
            <Sidebar>
              {children}
            </Sidebar>
        
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
