"use client";

import { Button } from "@/lib/components/Button";
import { updateFoo } from "@/server/actions/updateFoo";
import { FC, useRef, useTransition } from "react";

export const UpdateButton: FC<{}> = (props) => {
  const [updating, startUpdating] = useTransition();

  function doUpdate() {
    startUpdating(async () => {
      await updateFoo();
    });
  }

  return (
    <div className="flex gap-2">
      <Button disabled={updating} onClick={doUpdate}>
        {updating ? "Updating..." : "Update"}
      </Button>
    </div>
  );
};
