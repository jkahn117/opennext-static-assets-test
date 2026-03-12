"use client";
import { LABEL_04, formatLabel04 } from "../shared/label-04";
import { LABEL_05, formatLabel05 } from "../shared/label-05";

export default function ClientBadge024() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel04(LABEL_05)}</span>;
}
