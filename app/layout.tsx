import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/app/components/footer";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

const gtAmericaRegular = localFont({
  src: "./fonts/GT-America-Regular.otf",
});

export const metadata: Metadata = {
  title: "Codesharp - Vscode Extension",
  description:
    "Instantly create C# files—classes, interfaces, structs, and more with one click!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          gtAmericaRegular.className,
          "md:container md:mx-auto overflow-x-hidden"
        )}
      >
        <GoogleAnalytics gaId="G-XB5TK9R5BN" />

        <div className="w-full p-3">
          {children}

          <br />
          <br />
          <br />
          <Footer />
        </div>
      </body>
    </html>
  );
}
