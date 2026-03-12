"use client";
import { LABEL_09, formatLabel09 } from "../shared/label-09";
import { LABEL_10, formatLabel10 } from "../shared/label-10";

export default function ClientBadge059() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel09(LABEL_10)}</span>;
}
