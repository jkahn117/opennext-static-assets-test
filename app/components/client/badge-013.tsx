"use client";
import { LABEL_03, formatLabel03 } from "../shared/label-03";
import { LABEL_04, formatLabel04 } from "../shared/label-04";

export default function ClientBadge013() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel03(LABEL_04)}</span>;
}
