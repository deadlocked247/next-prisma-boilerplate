"use server";

import { revalidateTag } from "next/cache";

export const updateFoo = async () => {
  console.log("Updating foo");
  await fetch("http://localhost:3000/api/foo", {
    method: "GET",
  });
  revalidateTag("foo-query");
};
