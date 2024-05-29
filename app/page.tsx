import { Suspense } from "react";
import { Foo } from "./Foo";

export default async function Home() {
  return (
    <div className="bg-background text-foreground">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Foo />
      </Suspense>
    </div>
  );
}
