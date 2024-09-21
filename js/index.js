
// calculator Button

const calculateButton = document.getElementById('calculate').addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const software =parseFloat(document.getElementById('software').value);
    const courses =parseFloat(document.getElementById('courses').value);
    const internet =parseFloat(document.getElementById('internet').value);

    const totalExpesses = software+courses+internet
    const blance = income-totalExpesses;
    
    const totalExpessesEl =document.getElementById('total-expenses')
    totalExpessesEl.innerText=totalExpesses.toFixed(2)
    const totalBlance = document.getElementById('balance')
    totalBlance.innerText=blance.toFixed(2)

    const result = document.getElementById('results')
    result.classList.remove('hidden')
})

// Savininigs Calculator

const calculateSavings = document.getElementById('calculate-savings').addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const software =parseFloat(document.getElementById('software').value);
    const courses =parseFloat(document.getElementById('courses').value);
    const internet =parseFloat(document.getElementById('internet').value);
    const saving = parseFloat(document.getElementById('savings').value);

    const totalExpesses = software+courses+internet
    const blance = income-totalExpesses;
    const svainAmount =(saving*blance)/100
    const savingEl = document.getElementById('savings-amount')
    savingEl.innerText=svainAmount.toFixed(2)

    const reaminingBlance = blance-svainAmount

    const remainingAmout = document.getElementById('remaining-balance')
    remainingAmout.innerText=reaminingBlance.toFixed(2)



})

// History Tab Section

const historTab =document.getElementById('history-tab')
const assitantTab =document.getElementById('assistant-tab');
historTab.addEventListener('click', function(){
    historTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assitantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assitantTab.classList.add('text-gray-600')
    const expensesform = document.getElementById('expense-form');
    expensesform.classList.add('hidden')
    const historysection = document.getElementById('history-section')
    historysection.classList.remove('hidden')
})

// Assistant Tab Section
assitantTab.addEventListener('click', function(){
    assitantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    const expensesform = document.getElementById('expense-form');
    expensesform.classList.remove('hidden')

    const resultShow =document.getElementById('results');
    resultShow.classList.add('hidden')

    const historysection = document.getElementById('history-section')
    historysection.classList.add('hidden')

})