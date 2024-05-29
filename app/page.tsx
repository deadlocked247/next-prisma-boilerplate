import { Suspense } from "react";
import { FooServer } from "./FooServer";
import { FooClient } from "./FooClient";
import { UpdateButton } from "./UpdateButton";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="bg-background text-foreground">
      <Suspense fallback={<h1>Loading...</h1>}>
        <FooServer />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <FooClient />
      </Suspense>
      <UpdateButton />
    </div>
  );
}
