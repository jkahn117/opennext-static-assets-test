"use client";
import { LABEL_05, formatLabel05 } from "../shared/label-05";
import { LABEL_06, formatLabel06 } from "../shared/label-06";

export default function ClientBadge005() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel05(LABEL_06)}</span>;
}
