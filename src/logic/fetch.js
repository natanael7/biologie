import { Problem } from "./class.js";
export default function solve(req) {
  const a = new Problem(req.parents, req.traits);
  console.log(1);
  return a.table;
}
