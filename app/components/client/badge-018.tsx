"use client";
import { LABEL_08, formatLabel08 } from "../shared/label-08";
import { LABEL_09, formatLabel09 } from "../shared/label-09";

export default function ClientBadge018() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel08(LABEL_09)}</span>;
}
