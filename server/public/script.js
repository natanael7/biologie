const TABLE_CLASS = "table table-bordered";
const ROW_CLASS = "";
const CELL_CLASS = "";
function table(content) {
  return `
      <table id="example" class="${TABLE_CLASS} display nowrap" style="width:100%">
        ${content}
      </table>`;
}
function row(content) {
  return `<tr class="${ROW_CLASS}">${content}</tr>`;
}
function cell(content) {
  return `<td class="${CELL_CLASS}">${content}</td>`;
}
function rowHeader(content) {
  return `<thead class="${ROW_CLASS}">${content}</thead>`;
}
function cellHeader(content) {
  return `<th class="${CELL_CLASS}">${content}</th>`;
}
function writeData(data) {
  const div = (el) => {
    return `<div class="center green">Total: ${el}</div>`;
  };
  $("body").append(div(data.total));
  
  $("body").append(
    "<div class='center blue'>Clasificare dupa genotip</div><ul>"
  );
  let ratio = "";
  data.genes.forEach((el, index) => {
    if (index != data.genes.length - 1)
      ratio += el.value + " : ";
    else
      ratio += el.value
  });
  $("body").append(`<div class="center green">Raport Genotipic: ${ratio}</div>`);
  data.genes.forEach((el) => {
    $("body").append(`<li class="center red">${el.genotip}: ${el.value}</li>`);
  });
  $("body").append("</ul>");


}
function makeTable(data) {
  let element = "";
  let header = "";
  data[0].forEach((cellData) => {
    header += cellHeader(cellData);
  });
  element = rowHeader(header);
  data.forEach((rowData, index) => {
    if (index != 0) {
      let rowToAppend = "";
      rowData.forEach((cellData) => {
        rowToAppend += cell(cellData);
      });
      element = element + row(rowToAppend);
    }
  });

  $("body").append(table(element));
  $("#example").DataTable({
    scrollY: 200,
    scrollX: true,
    bPaginate: false,
    bLengthChange: false,
    bFilter: true,
    bInfo: false,
    bAutoWidth: false,
    lengthChange: false,
    paging: false,
    ordering: false,
    info: false,
  });
}
fetch("http://localhost:3000/api/AABbCcDd/AabbCcDd")
  .then((res) => res.json())
  .then((data) => {
    makeTable(data.table);
    writeData(data.data);
  });
