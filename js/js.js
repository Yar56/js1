

// let money, time;

// function start() {
//     money =  +prompt("Ваш бюджет на месяц?", '');
//     time = prompt("Введите дату в формате YYYY-MM-DD", '');

//     while (isNaN(money) || money == '' || money == null) {
//         money =  +prompt("Ваш бюджет на месяц?", '');
//     }

// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function () {
//         for (let i = 0; i < 2; i++) {
//             let expensesItem = prompt("Введите обязательную статью расходов в этом месяце"),
//                 cost = prompt("Во сколько обойдется?");
            
//             if ( (typeof(expensesItem)) === 'string' && (typeof(expensesItem)) != null && (typeof(cost)) != null
//                 && expensesItem != '' && cost != '' && expensesItem.length < 50) {
//                 console.log('done');
//                 appData.expenses[expensesItem] = cost;
//             } else {
//                 i = i - 1;
//             }
//         }
//     },
//     detectBayBudget: function () {
//         appData.moneyPerDay = (appData.budget / 30).toFixed();
//         alert('Ежедневный бюджет: ' + appData.moneyPerDay);
//     },
//     detectLevel: function () {
//         if (appData.moneyPerDay < 1000) {
//             console.log('Минимальный уровень достатка')
//         } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
//             console.log('Средний уровень достатка');
//         } else if (appData.moneyPerDay > 2000) {
//             console.log('Высокий уровень достатка');
//         } else {
//             console.log('Ошибка!');
//         }
//     },
//     checkSavings: function () {
//         if (appData.savings == true) {
//             let save = +prompt('Какова сумма накоплений?'),
//                 percent = +prompt('Под какой процент');
    
//             appData.mothIncome = save/100/12*percent;
//             alert('Доход в месяц с вашего депозита: ' + appData.mothIncome);
//         }
//     },
//     chooseOptExpenses: function () {
//         for (let i = 1; i < 3; i++) {
//             let opt = prompt('Статья необязательных расходов?', '');
//             appData.chooseOptExpenses[i] = opt;
//         }
//     },
//     chooseIncom: function () {
//         let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
//         appData.income = items.split(', ');
//         appData.income.push(prompt('Может что-то еще?'));
//         appData.income.sort();
//         while (isNaN(items) || items == '' || items == null) {
//             items =  +prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
//         }
//     }
// };

let button = document.getElementById('start');

let rightBlock = document.getElementsByClassName
('budget-value daybudget-value level-value expenses-value optionalexpenses-value income-value monthsavings-value yearsavings-value year-value month-value day-value');


let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('expenses-item-btn'),
    countBudgetBtn = document.getElementsByTagName('count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('div.checksavings input[id=savings]'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
