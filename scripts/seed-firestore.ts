/**
 * Seeds Firestore with ingredient collections from:
 * https://gvsu-cis658.github.io/assignments/bpc.html#firestore-initialization
 *
 * Requires Firestore rules that allow writes to `bases`, `creamers`, and `syrups`
 * (e.g. temporary dev rules), or run with the Firebase Emulator.
 *
 * Usage: npm run seed:firestore
 */
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseConfig } from "../src/firebase.config.ts";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Ingredient = { id: string; name: string; color: string };

const bases: Ingredient[] = [
  { id: "b1", name: "Black Tea", color: "#8B4513" },
  { id: "b2", name: "Green Tea", color: "#C8E6C9" },
  { id: "b3", name: "Coffee", color: "#6F4E37" },
];

const creamers: Ingredient[] = [
  { id: "c1", name: "No Cream", color: "transparent" },
  { id: "c2", name: "Milk", color: "AliceBlue" },
  { id: "c3", name: "Cream", color: "#F5F5DC" },
  { id: "c4", name: "Half & Half", color: "#FFFACD" },
];

const syrups: Ingredient[] = [
  { id: "s1", name: "No Syrup", color: "transparent" },
  { id: "s2", name: "Vanilla", color: "#FFEFD5" },
  { id: "s3", name: "Caramel", color: "#DAA520" },
  { id: "s4", name: "Hazelnut", color: "#6B4423" },
];

async function seedCollection(
  collectionName: string,
  items: Ingredient[],
): Promise<void> {
  for (const { id, name, color } of items) {
    await setDoc(
      doc(db, collectionName, id),
      { id, name, color },
      { merge: true },
    );
    console.log(`  ${collectionName}/${id}`);
  }
}

async function main() {
  console.log("Seeding Firestore (bases, creamers, syrups)…");
  await seedCollection("bases", bases);
  await seedCollection("creamers", creamers);
  await seedCollection("syrups", syrups);
  console.log("Done.");
}

main().catch((err: unknown) => {
  console.error(err);
  process.exitCode = 1;
});
