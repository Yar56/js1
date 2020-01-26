let money =  prompt("Ваш бюджет на месяц?", '');

let time = prompt("Введите дату в формате YYYY-MM-DD", '');
    

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false
};


let expensesItem1 = prompt("Введите обязательную статью расходов в этом месяце");
    cost1 = prompt("Во сколько обойдется?");
    expensesItem2 = prompt("Введите обязательную статью расходов в этом месяце");
    cost2 = prompt("Во сколько обойдется?");

appData.expenses.expensesItem1 = expensesItem2;
appData.expenses.cost1 = cost2;


alert(appData.budget / 30);