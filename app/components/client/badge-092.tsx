"use client";
import { LABEL_02, formatLabel02 } from "../shared/label-02";
import { LABEL_03, formatLabel03 } from "../shared/label-03";

export default function ClientBadge092() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel02(LABEL_03)}</span>;
}
