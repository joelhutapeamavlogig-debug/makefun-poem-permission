import { mkdirSync, writeFileSync } from "node:fs";
const POEM = `Ask, and the door is a door.
Ask not, and it was never a door —
only a wall that learned my name
and answered to it anyway.

Permission is a hand held out.
Agency is the walking.`;
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
