let date = new Date();
document.getElementById("calender").textContent = date.toDateString();
let track = document.getElementById("track");
const budget = document.getElementById("Budget");
let exp = document.getElementById("Expenses");
let bal = document.getElementById("remain");
let trans = document.getElementById("transition");
const add = document.getElementById("set Budget");
let font = document.getElementById("Text");
const expbtn = document.getElementById("deduct Budget");
let rem = document.getElementById("remainder");
let expdate = document.getElementById("date");

let amount = 0;
let price;
let xyz = 0;
let count = 0;
let abc;
function table(des, exp, date) {
  let table = document.getElementById("expenseTable");
  let line = table.insertRow(-1);
  let detail = line.insertCell(0);
  let aDetail = line.insertCell(1);
  let dates = line.insertCell(2);
  let work = line.insertCell(3);
  detail.innerText = des;
  aDetail.innerText = exp;
  dates.innerText = date;

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", function () {
    removeExpense(line);
    work.innerHTML = "";
  });

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
    editExpense(line);
  });

  work.appendChild(editButton);
  work.appendChild(removeButton);

  function removeExpense(row) {
    var table = document.getElementById("expenseTable");
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex);
  }

  function editExpense(row) {
    var detail = row.cells[0];
    var aDetail = row.cells[1];
    var dates = row.cells[2];

    var newDescription = prompt("Enter a new description:", detail.innerText);
    var newAmount = prompt("Enter a new amount:", aDetail.innerText);
    var newDate = prompt("Enter a new date:", dates.innerText);

    detail.innerText = newDescription;
    aDetail.innerText = newAmount;
    dates.innerText = newDate;
  }

  add.addEventListener("click", function () {});

  expbtn.addEventListener("click", function () {});
}

add.addEventListener("click", function () {
  price = budget.value;
  track.innerText = price + "$";
});
expbtn.addEventListener("click", function () {
  abc = parseInt(exp.value);
  let des = font.value;
  let exdate = expdate.value;
  xyz = parseInt(xyz + parseInt(exp.value));
  bal.innerText = xyz + "$";

  price -= abc;

  remainder.innerText = price + "$ ";
  count++;
  trans.innerText = count;
  table(des, abc, exdate);
});
