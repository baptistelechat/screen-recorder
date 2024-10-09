import Menu from "@/components/Menu";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura | Create, Share, Inspire",
  description:
    "A web application that allows you to generate images with a variety of options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "bg-background font-sans antialiased h-full flex flex-col",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          <TooltipProvider>
            
            <Menu />
            <main className="grow md:overflow-hidden">{children}</main>
            <Toaster richColors expand={true} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
