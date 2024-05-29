"use client";

import { FC } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

export const FooClient: FC<{}> = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["foo-query"],
    queryFn: () =>
      fetch("http://localhost:3000/api/foo").then((resp) => resp.json()),
  });

  return <div>Client: {data}</div>;
};
