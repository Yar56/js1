let money =  +prompt("Ваш бюджет на месяц?", '');

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



// appData.expenses.expensesItem1 = expensesItem2;
// appData.expenses.cost1 = cost2;


for (let i = 0; i < 2; i++) {
    let expensesItem = prompt("Введите обязательную статью расходов в этом месяце"),
        cost = prompt("Во сколько обойдется?");
    
    if ( (typeof(expensesItem)) === 'string' && (typeof(expensesItem)) != null && (typeof(cost)) != null
        && expensesItem != '' && cost != '' && expensesItem.length < 50) {
        console.log('done');
        appData.expenses[expensesItem] = cost;
    }
    
};


appData.moneyPerDay = alert(appData.budget / 30);

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка!');
}