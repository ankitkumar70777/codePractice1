let today = new Date();
console.log(today.getMonth().toString().length);

let fromYear = today.getFullYear();
let fromMonth =
  today.getMonth().toString().length === 1
    ? "0" + (today.getMonth() + 1)
    : today.getMonth() + 1;
let fromDate =
  today.getDate().toString().length === 1
    ? "0" + today.getDate()
    : today.getDate();

today = `${fromYear}-${fromMonth}-${fromDate}`;
console.log(today);
