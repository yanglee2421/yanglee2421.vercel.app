import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid h-dvh place-items-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Button asChild>
          <Link href="/">
            <Home />
            Take me back
          </Link>
        </Button>
      </div>
    </div>
  );
}
