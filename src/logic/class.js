function sort(str) {
  return str
    .split("")
    .sort()
    .sort((a, b) => {
      return a.localeCompare(b, "en", {
        sensitivity: "base",
      });
    })
    .join("");
}
class Allele {
  constructor(chr) {
    this.value = chr;
    this.dominance = chr.toUpperCase() === chr;
  }
}
class Character {
  constructor(chr, descriptors = []) {
    this.allele = new Allele(chr);
    this.type = "dominant";
    if (!this.allele.dominance) this.type = "recessive";
    if (descriptors === undefined)
      if (descriptors.length > 0)
        this.trait =
          descriptors[chr.toUpperCase()].trait +
          ": " +
          descriptors[chr.toUpperCase()][this.type];
  }
}
class Gene {
  constructor(str) {
    this.value = str;
    this.alleles = [new Allele(str[0]), new Allele(str[1])];
    this.homozygote = str[0] === str[1];
  }
}
class Individual {
  constructor(str = "", descriptors = []) {
    str = sort(str);

    this.value = str;
    this.genes = [];
    this.phenotype = [];
    this.trait = [];
    this.gamets = this.gamets();
    for (let i = 0; i < str.length; i++)
      if (!(i % 2)) {
        this.genes.push(new Gene(str[i].concat(str[i + 1])));
        this.phenotype.push(new Character(str[i], descriptors));
        this.trait.push(new Character(str[i], descriptors).trait);
      }
  }
  group(arr) {
    let lowCase = [];
    let grouped = [];
    for (let i = 0; i < arr.length; i++)
      if (lowCase.indexOf(arr[i].toLowerCase()) === -1)
        lowCase.push(arr[i].toLowerCase());
    for (let i = 0; i < lowCase.length; i++)
      if (arr.indexOf(lowCase[i].toUpperCase()) === -1)
        grouped.push([lowCase[i]]);
      else if (arr.indexOf(lowCase[i]) === -1)
        grouped.push([lowCase[i].toUpperCase()]);
      else grouped.push([lowCase[i].toUpperCase(), lowCase[i]]);
    return grouped;
  }
  rec(list, n = 0, result = [], current = []) {
    if (n === list.length) result.push(current);
    else
      list[n].forEach((item) =>
        this.rec(list, n + 1, result, [...current, item])
      );

    return result;
  }
  combine(arr) {
    arr = this.rec(arr);
    for (let i = 0; i < arr.length; i++) arr[i] = arr[i].join("");
    return arr;
  }
  gamets() {
    return this.combine(this.group([...new Set(this.value.split(""))]));
  }
}
class Problem {
  constructor(parents = [], traits = []) {
    this.traits = traits;
    this.mom = new Individual(parents.mom, traits);
    this.dad = new Individual(parents.dad, traits);
    this.kids = this.birth(this.mom, this.dad);
    this.genotype = this.calcGenotype().values;
    this.phenotype = this.calcPhenotype().values;
    this.ratio = {};
    this.ratio.genotype = this.calcGenotype().ratio;
    this.ratio.phenotype = this.calcPhenotype().ratio;
    this.table = this.makeTable();
  }
  makeTable() {
    if (this.mom.value === "" || this.dad.value === "") return [];
    if (this.mom.value === undefined || this.dad.value === undefined) return [];
    let arr = [["P↓→"]];
    this.dad.gamets.forEach((sperm) => {
      arr[0].push(sperm);
    });
    this.mom.gamets.forEach((ovule) => {
      let row = [ovule];
      this.dad.gamets.forEach((sperm) => {
        row.push(sort(ovule.concat(sperm)));
      });
      arr.push(row);
    });

    return arr;
  }
  calcGenotype() {
    if (this.mom.value === "" || this.dad.value === "")
      return { values: "", ratio: "" };
    if (this.mom.value === undefined || this.dad.value === undefined)
      return {
        values: "",
        ratio: "",
      };
    const acc = {};
    const arr = [];
    let str = "";
    this.kids.forEach((child) => {
      if (acc[child.value] === undefined) acc[child.value] = 1;
      else acc[child.value]++;
    });
    for (const property in acc) {
      arr.push({ gene: property, value: acc[property] });
    }
    arr.sort((a, b) => {
      return b.value - a.value;
    });
    arr.forEach((el) => (str = str + el.value + " : "));
    str = str.slice(0, str.length - 2);
    return { values: arr, ratio: str };
  }
  calcPhenotype() {
    if (this.mom.value === "" || this.dad.value === "")
      return { values: "", ratio: "" };
    if (this.mom.value === undefined || this.dad.value === undefined)
      return {
        values: "",
        ratio: "",
      };
    function val(kid) {
      return kid
        .reduce((acc, val) => {
          acc.push(val.allele.value);
          return acc;
        }, [])
        .join("");
    }
    const acc = {};
    const arr = [];
    let str = "";
    this.kids.forEach((child) => {
      if (acc[val(child.phenotype)] === undefined)
        acc[val(child.phenotype)] = 1;
      else acc[val(child.phenotype)]++;
    });
    for (const property in acc) {
      arr.push({ phenotype: property, values: acc[property] });
      str = str + acc[property] + " : ";
    }
    str = str.slice(0, str.length - 2);
    arr.sort((a, b) => {
      return b.phenotype - a.phenotype;
    });
    return { values: arr, ratio: str };
  }
  fusion(ovules = [], sperms = []) {
    const zygotes = [];
    ovules.forEach((ovule) =>
      sperms.forEach((sperm) => zygotes.push(sort(ovule.concat(sperm))))
    );
    return zygotes;
  }
  birth(mom, dad) {
    if (this.mom.value === "" || this.dad.value === "") return [];
    if (this.mom.value === undefined || this.dad.value === undefined) return [];
    const zygotes = this.fusion(mom.gamets, dad.gamets);
    const embrions = [];
    zygotes.forEach((zygot) =>
      embrions.push(new Individual(zygot, this.traits))
    );
    return embrions;
  }
}
const _Problem = Problem;
export { _Problem as Problem };
// let input = {
//   parents: { mom: "AABBCc", dad: "AaBbCc" },
//   traits: {
//     A: { trait: "Eye Color", dominant: "Brown", recessive: "Green" },
//     B: { trait: "Hair Type", dominant: "Curly", recessive: "Straight" },
//     C: { trait: "Skin color", dominant: "Light", recessive: "Dark" },
//   },
// };
