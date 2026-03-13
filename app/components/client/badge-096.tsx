"use client";
import { LABEL_06, formatLabel06 } from "../shared/label-06";
import { LABEL_07, formatLabel07 } from "../shared/label-07";

export default function ClientBadge096() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel06(LABEL_07)}</span>;
}
