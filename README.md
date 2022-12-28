# Console-Finances
Application that analyzes the records to calculate Profit/Losses data.

# Workflow
1. To calculate the total number of months included in the dataset:
The code loop through the finances array and increment the 'totalMonths' variable by 1 for each element in the array. When the loop finishes, the 'totalMonths' variable contains the total number of months included in the dataset.

2. To calculate the net amount of Profit/Losses over the entire period:
The code loop through the finances array and add the profit/loss amount for each month to the 'totalProfitLoss' variable. When the lopp finishes, the 'totalProfitLoss' variable will contain the net total amount of profit/losses of the entire period.

3. to calculate the average of the changes in Profit/Losses over the entire period:
The code loop through the finances array and clauclate the changes in profits from one month to the next. Then it adds up all of the changes and divide the total by the number of months to get the average change in profits.