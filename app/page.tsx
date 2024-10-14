import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ColoredLink from "@/app/components/link";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full py-4 lg:px-8">
        <h1 className={cn(playFairDisplay.className, "lg:text-4l text-2xl")}>
          CodeSharp
        </h1>
        <p className="lg:text-sm text-[12.5px] text-gray-600">
          Your go-to VSCode extension for C# and .NET development!
        </p>
      </header>

      <br />
      <main className="lg:p-8 my-2">
        <section className="max-w-2xl text-center mb-12">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            className="mx-auto rounded-full"
            alt="CodeSharp Logo"
          />
          <h2
            className={cn(
              playFairDisplay.className,
              "text-3xl font-semibold my-4"
            )}
          >
            Welcome to CodeSharp!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Instantly create C# files—classes, interfaces, structs, and
            more—with just one click!
           
          </p>
        </section>

        <section className="max-w-2xl text-left">
          <h3
            className={cn(
              playFairDisplay.className,
              "text-2xl font-semibold mb-2"
            )}
          >
            Key Features:
          </h3>
          <ul className="list-disc list-inside mb-6">
            <li>
              Instant creation of C# classes, interfaces, structs, and more.
            </li>
            <li>Smart C# file detection that optimizes your workflow.</li>
            <li>
              Lightweight design keeps your workspace clean and efficient.
            </li>
          </ul>
        </section>

        <ColoredLink href="https://github.com/adedoyin-emmanuel/codesharp">
          Star Repo on Github
        </ColoredLink>

        <ColoredLink href="https://github.com/adedoyin-emmanuel/codesharp">
          View on Vscode marketplace
        </ColoredLink>
      </main>
    </div>
  );
}
