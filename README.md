# 💸 Console-Finances

## Table of Contents
- [Scope](#scope-of-project)
- [Workflow](#workflow)
- [Final result](#final-results)

# Scope of the project
Application that analyzes a given dataset to calculate Profit/Losses.

# Workflow
1. **Total number of months included in the dataset:** the code loop through the finances array and increment the 'totalMonths' variable by 1 for each element in the array. When the loop finishes, the 'totalMonths' variable contains the total number of months included in the dataset.

2. **Net amount of Profit/Losses over the entire period:** the code loop through the finances array and add the profit/loss amount for each month to the 'totalProfitLoss' variable. When the lopp finishes, the 'totalProfitLoss' variable will contain the net total amount of profit/losses of the entire period.

3. **The average of the changes in Profit/Losses over the entire period:** the code loop through the finances array and clauclate the changes in profits from one month to the next. Then it adds up all of the changes and divide the total by the number of months to get the average change in profits.

4. **The greatest increase in profits (date and amount) over the entire period:** the code loop through the finances array and calculate the change in profits from one month to the next. Then it compares eache change to the current greatest increase and update the 'greatestIncrease' and 'greatestIncreaseMonth' variables if the change is grater. When the loop finishes, the variables contain the greatest increase in profits and the relative month. 

5. **The reatest decrease in losses (date and amount) over the entire period:** the code loop through the finances array and calculate the change in profits from one month to the next. Then it compares eache change to the current greatest decrease and update the 'greatestDecrease' and 'greatestdecreaseMonth' variables if the change is less. When the loop finishes, the variables contain the greatest decrease in loss and the relative month. 

## Link to deployed Application
[Console Finances Application](https://clelia-m.github.io/Console-Finances/)

## Final Results
![Console Finance Last Results](https://github.com/Clelia-M/Console-Finances/blob/7cbde3d1c2648457439020d3ebb77ea17f74b9e9/Console-Finances%20results.png)
