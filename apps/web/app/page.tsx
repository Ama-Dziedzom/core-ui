import { Button, Card, CardHeader, CardTitle, CardContent } from "@core-ui/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center gap-8">
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {/* <Home01Icon className="text-primary" /> */}
              Core-UI Design System
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
              Your personal design system is successfully initialized.
              Built with shadcn, Vega style, and Hugeicons.
            </p>
            <div className="flex gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
