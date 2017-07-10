function formatDate(x) {
   // Here you'll call a function or write some logic for the test.
   var arr = x.split("/"),
       year = arr[2],
       month = addZero(arr[0]),
       day = addZero(arr[1]),
       newDateFormat = year + month + day;

   function addZero(input) {
     if (input.length < 2) {
        return "0" + input
     } else {
       return input;
     }
   }

   return newDateFormat;
}

// Specs
// MM/DD/YYYY => YYYYMMDD
// MM/D/YYYY  => YYYYMMDD
// M/DD/YYYY  => YYYYMMDD
// M/D/YYYY   => YYYYMMDD

dateInput1 = "07/10/2017";
dateInput2 = "07/3/2017";

console.log(formatDate(dateInput1)); // expect 20170710
console.log(formatDate(dateInput2)); // expect 20170710