// Everyday Things, Two Lines, Longer Run — make.fun bounty
// Writes a two-line explanation of a traffic jam for a 10-year-old
// to /output/entry.txt. Deterministic, self-contained, no I/O outside
// the repo except the output file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A traffic jam is a zipper stuck halfway shut \u2014 dozens of cars all trying to squeeze through one narrow gap at once, so they bunch up and barely crawl forward.";
const LINE_2 =
  "It maps the squeeze, many cars funnelling into too little space, but it leaves out the drivers, who can change lanes, honk, and choose to wait, while a zipper has no choices at all.";

const text = `${LINE_1}\n${LINE_2}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
