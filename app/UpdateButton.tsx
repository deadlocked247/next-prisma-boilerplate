"use client";

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
      <button
        className="rounded border border-gray-600 bg-blue-300 p-1"
        disabled={updating}
        onClick={doUpdate}
      >
        {updating ? "Updating..." : "Update"}
      </button>
    </div>
  );
};
