"use client";
import { LABEL_01, formatLabel01 } from "../shared/label-01";
import { LABEL_02, formatLabel02 } from "../shared/label-02";

export default function ClientBadge001() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel01(LABEL_02)}</span>;
}
