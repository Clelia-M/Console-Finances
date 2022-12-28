var finances = [
  ["Jan-2010", 867884], // 2010
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806], // 2011
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566], // 2012
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333], // 2013
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458], // 2014
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715], // 2015
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000], // 2016
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230], // 2017
  ["Feb-2017", 671099],
];


//Financial Analysis
//----------------------------
console.log("Financial Analysis \n----------------------------");

//Total number of months included in the dataset
//Step 1: Create a variable to store the total number of months

var totalMonths = 0;

//Step 2: Loop through the elements in the finances array
//Each element in the array is itself an array, with the first element being the month and the second element being the financial data for that month
//Step 3: Increment the total number of months by 1 for each month in the dataset

for (var i = 0; i < finances.length; i++) {
  var month = finances[i][0];
  var data = finances[i][1];
  totalMonths++;
}

// Total Months:
console.log("Total Months: " + totalMonths)

// ALTERNATIVE CODE for TOTAL MONTHS // 
// Use lenght because it sets or returns the number of elements in an array
// var monthCount = finances.length;
// console.log("Total Months: " + monthCount);


//The net total amount of Profit/Losses over the entire period.
//Step 1: Create a variable to store the total amount of Profit/Losses

var totalProfitLoss = 0;

//Step 2: Loop through the elements in the finances array
//Step 3: Add the financial data for the current month to the total Profit/Losses

for (var i = 0; i < finances.length; i++) {
  totalProfitLoss += finances[i][1];
}

//The net total amount of Profit/Losses:
console.log("Total: $" + totalProfitLoss);


//The average of the changes in Profit/Losses over the entire period.
//Step 1: Create a variable to track the total change in profits and the number of months

var totalChange = 0;
var numMonths = 0;

//Step 2: Loop through the elements in the finances array
//Consider the fact that could be not the first month (if statement)
//Step 3: Increment the number of months by 1
//Step 4: Calculate the average change in profits by dividing the total change by the number of months
//This code is based on the assumption that the dataset is in chronological order (as it is in this challenge)

for (var i = 0; i < finances.length; i++) {

  if (i > 0) {
    totalChange += finances[i][1] - finances[i - 1][1];

  }

  numMonths++;
}

var avgChange = totalChange / numMonths;

// Average  Change:
console.log("Average Change: $" + avgChange);

// The greatest increase in profits (date and amount) over the entire period.
//Step 1: Create a variable to store the greatest increase in profits and the corresponding month

var greatestIncrease = 0;
var greatestIncreaseMonth = '';

//Step 2: Loop through the elements in the finances array
//Step 3: Calculate the change in profits from the previous month
//Step 4: Check if the change in profits is grater than the current greatest increase
//Step 5: Update the greatest increase and the relative month

for (var i = 0; i < finances.length; i++) {

  if (i > 0) {
    var change = finances[i][1] - finances[i - 1][1];

    if (change > greatestIncrease) {
      greatestIncrease = change;
      greatestIncreaseMonth = finances[i][0];

    }
  }
}

//Greatest Increase in Profits:
console.log("Greatest Increase in Profits: " + greatestIncreaseMonth + " ($" + greatestIncrease + ")")

// The greatest decrease in losses (date and amount) over the entire period.
//Step 1: Create a variable to store the greatest decrease in losses and the corresponding month

var greatestDecrease = 0;
var greatestDecreaseMonth = '';

//Step 2: Loop through the elements in the finances array
//Step 3: Calculate the change in profits from the previous month
//Step 4: Check if the change in profits is less than the current greatest decrease
//Step 5: Update the greatest decrease and the relative month

for (var i = 0; i < finances.length; i++) {

  if (i > 0) {
    var change = finances[i][1] - finances[i-1][1];

    if (change < greatestDecrease) {
      greatestDecrease = change;
      greatestDecreaseMonth = finances[i][0];

    }
  }
}

//Greatest Decrease in Profits:
console.log("Greatest Decrease in Profits: " + greatestDecreaseMonth + " ($" + greatestDecrease + ")")
