"use client";
import { LABEL_10, formatLabel10 } from "../shared/label-10";
import { LABEL_01, formatLabel01 } from "../shared/label-01";

export default function ClientBadge030() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel10(LABEL_01)}</span>;
}
