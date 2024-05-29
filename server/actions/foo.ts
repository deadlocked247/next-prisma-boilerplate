"use server";

import { revalidateTag } from "next/cache";

export const foo = async () => {
  await fetch("http://localhost:3000/api/foo", {
    method: "GET",
  });
  revalidateTag("foo-query");
};
