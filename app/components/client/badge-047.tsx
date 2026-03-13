"use client";
import { LABEL_07, formatLabel07 } from "../shared/label-07";
import { LABEL_08, formatLabel08 } from "../shared/label-08";

export default function ClientBadge047() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel07(LABEL_08)}</span>;
}
