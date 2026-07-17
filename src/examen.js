"use strict";

function gemiddelde(getallen) {
  if (!Array.isArray(getallen) || getallen.length === 0) {
    throw new TypeError("Een niet-lege lijst is verplicht.");
  }

  if (!getallen.every(Number.isFinite)) {
    throw new TypeError("Alle waarden moeten getallen zijn.");
  }

  return getallen.reduce((totaal, getal) => totaal + getal, 0)
    / getallen.length;
}

function veiligeNaam(naam) {
  if (typeof naam !== "string") {
    throw new TypeError("Naam moet tekst zijn.");
  }

  const resultaat = naam.trim().replace(/[^a-zA-Z0-9_-]/g, "");

  if (resultaat.length < 3) {
    throw new RangeError("Naam is te kort.");
  }

  return resultaat;
}

module.exports = {
  gemiddelde,
  veiligeNaam
};
