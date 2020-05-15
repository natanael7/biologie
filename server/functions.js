function invalid(parents) {
  if (parents == null) return true;
  if (parents.length !== 2) return true;
}
function formatTable(genes) {
  // Array initializer
  let res = [];
  for (let i = 0; i <= genes[0].length; i++) res[i] = [];

  // Header
  res[0].push("P");
  for (let i = 0; i < genes[0].length; i++) res[0].push(genes[0][i]);

  // Rows
  for (let i = 1; i <= genes[1].length; i++) {
    // Second parent gene
    res[i].push(genes[1][i - 1]);
    for (let j = 0; j < genes[0].length; j++)
      res[i].push(genes[1][i - 1].concat(genes[0][j]));
  }

  // Sort letters
  for (let i = 0; i < res.length; i++)
    for (let j = 0; j < res[i].length; j++) {
      res[i][j] = res[i][j]
        .split("")
        .sort()
        .sort(function (a, b) {
          return a.localeCompare(b, "en", { sensitivity: "base" });
        })
        .join("");
    }
  return res;
}
function group(arr) {
  let lowCase = [];
  let grouped = [];
  for (let i = 0; i < arr.length; i++)
    if (lowCase.indexOf(arr[i].toLowerCase()) == -1)
      lowCase.push(arr[i].toLowerCase());
  for (let i = 0; i < lowCase.length; i++)
    if (arr.indexOf(lowCase[i].toUpperCase()) == -1) grouped.push([lowCase[i]]);
    else if (arr.indexOf(lowCase[i]) == -1)
      grouped.push([lowCase[i].toUpperCase()]);
    else grouped.push([lowCase[i].toUpperCase(), lowCase[i]]);
  return grouped;
}
function rec(list, n = 0, result = [], current = []) {
  if (n === list.length) result.push(current);
  else list[n].forEach((item) => rec(list, n + 1, result, [...current, item]));

  return result;
}
function combine(arr) {
  arr = rec(arr);
  for (let i = 0; i < arr.length; i++) arr[i] = arr[i].join("");
  return arr;
}
function fenotip(genotip) {
  let res = "";
  for (let i = 0; i < genotip.length; i++) if (!(i % 2)) res += genotip[i];
  return res;
}
function calculate(arr) {
  let res = [];
  const data = { total: 0, genotip: {}, fenotip: {} };
  arr.forEach((row, ri) => {
    if (ri != 0)
      row.forEach((cell, ci) => {
        if (ci != 0) {
          data.total++;
          if (data.genotip[cell] == undefined) data.genotip[cell] = 1;
          else data.genotip[cell]++;

          if (data.fenotip[fenotip(cell)] == undefined)
            data.fenotip[fenotip(cell)] = 1;
          else data.fenotip[fenotip(cell)]++;
        }
      });
  });

  for (const property in data.genotip)
    res.push({
      genotip: property,
      fenotip: fenotip(property),
      value: data.genotip[property],
    });
  res.sort((a, b) => {
    return b.value - a.value;
  });
  data.genes = res;

  data.genes = res;

  return data;
}
module.exports = function (parents) {
  let kids = {},
    gamets = [];
  if (invalid(parents)) return [];

  // Split Genes and create gamets
  for (let i = 0; i < parents.length; i++)
    gamets[i] = combine(group([...new Set(parents[i].split(""))]));

  // Group genes
  kids.table = formatTable(gamets);
  kids.data = calculate(kids.table);
  console.log(kids.data);
  return kids;
};