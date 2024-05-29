import { FC } from "react";

export const FooServer: FC<{}> = async () => {
  const fooResp = await fetch("http://localhost:3000/api/foo", {
    next: {
      tags: ["foo-query"],
    },
  });
  const { data } = await fooResp.json();
  return <div>{data}</div>;
};
