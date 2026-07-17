"use strict";

const assert = require("node:assert/strict");
const { gemiddelde, veiligeNaam } = require("../src/examen");

assert.equal(gemiddelde([10, 20, 30]), 20);
assert.equal(gemiddelde([-5, 5]), 0);

assert.throws(
  () => gemiddelde([]),
  TypeError
);

assert.throws(
  () => gemiddelde([1, "2"]),
  TypeError
);

assert.equal(
  veiligeNaam(" Ice1984m! "),
  "Ice1984m"
);

assert.throws(
  () => veiligeNaam("a"),
  RangeError
);

console.log("Alle Mikis13-examentests zijn geslaagd.");
