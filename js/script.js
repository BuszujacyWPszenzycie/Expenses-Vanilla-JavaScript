const allAddBtn = document.querySelectorAll('.btn__add')
const addExpenseModal = document.querySelector('.add')
const cancelBtn = document.querySelector('.expense__btn--cancel')
const saveBtn = document.querySelector('.expense__btn--save')
const errorDialog = document.querySelector('dialog')
const allInputs = document.querySelectorAll('.input')
const sidebar = document.querySelector('.sidebar')
const showExpenseModal = document.querySelector('.show')
const showTitle = document.querySelector('.show__title')
const showDate = document.querySelector('.show__input--date')
const showClient = document.querySelector('.show__input--client')
const showDescritpion = document.querySelector('.show__input--description')
const showAmount = document.querySelector('.show__input--amount')
const deleteExpenseButton = document.querySelector('.show__btn--delete')
const editBtn = document.querySelector('.show__btn--edit')
const allShowInputs = document.querySelectorAll('.show__input')

const expenseItemforTesting = document.querySelectorAll('.expense__item')

expenseItemforTesting.forEach(item => {
	item.addEventListener('click', showExpenseFunctionInput)
})

const EXPENSES = [
	{
		invoiceNumber: 'FA/12/2024',
		client: 'ASEA',
		invoiceDate: '2024-12-01',
		description: 'Usługi rachunkowe',
		amount: 125,
	},
	{
		invoiceNumber: 'FA/13/2024',
		client: 'Makro',
		invoiceDate: '2022-11-15',
		description: 'Woda gazowana',
		amount: 100,
	},
	{
		invoiceNumber: 'FA/15/2024',
		client: 'ENEA',
		invoiceDate: '2023-03-17',
		description: 'Energia elektryczna',
		amount: 250,
	},
]

function showExpenseFunctionInput(e) {
	const allExpenseItemsUpdated = document.querySelectorAll('.expense__item')
	console.log('is working?')
	const index = EXPENSES.findIndex(index => index.invoiceNumber === e.target.textContent)
	allShowInputs.forEach(input => input.setAttribute('value', ''))
	showTitle.textContent = EXPENSES[index].invoiceNumber
	console.log(EXPENSES[index].client)
	// showClient.setAttribute('value', EXPENSES[index].client)
	showClient.value = EXPENSES[index].client
	showDate.value = EXPENSES[index].invoiceDate
	showDescritpion.value = EXPENSES[index].description
	showAmount.value = EXPENSES[index].amount
	// showDate.setAttribute('value', EXPENSES[index].invoiceDate)
	// showDescritpion.setAttribute('value', EXPENSES[index].description)
	// showAmount.setAttribute('value', EXPENSES[index].amount)
	showExpenseModal.classList.add('show-expense')
	editBtn.textContent = 'Edit'
}

function editExpenseFunction() {
	allShowInputs.forEach(input => input.removeAttribute('disabled'))
	editBtn.textContent = 'Save'
	console.log(EXPENSES)
}

function saveExpenseFunciton() {
	const activeExpense = document.querySelector('.show__title')
	const index = EXPENSES.findIndex(index => index.invoiceNumber === activeExpense.textContent)
	EXPENSES[index].client = showClient.value
	EXPENSES[index].invoiceDate = showDate.value
	EXPENSES[index].description = showDescritpion.value
	EXPENSES[index].amount = showAmount.value
	console.log(EXPENSES)
	editBtn.textContent = 'Edit'
	allShowInputs.forEach(input => input.setAttribute('disabled', ''))
}

function deleteExpenseFunction() {
	const activeExpense = document.querySelector('.show__title')
	console.log(activeExpense.textContent)
	const index = EXPENSES.findIndex(index => index.invoiceNumber === activeExpense.textContent)
	const allExpenseItems = document.querySelectorAll('.expense__item')
	allExpenseItems[index].remove()
	EXPENSES.splice(index, 1)
	showExpenseModal.classList.remove('show-expense')
	editBtn.textContent = 'Edit'
	allShowInputs.forEach(input => input.setAttribute('disabled', ''))
}

function saveFunction() {
	if (checkAllInputsFunction()) {
		errorDialogFunction()
	} else {
		closeModalFunction()
		const newItem = {
			invoiceNumber: allInputs[0].value,
			client: allInputs[1].value,
			invoiceDate: allInputs[2].value,
			description: allInputs[3].value,
			amount: allInputs[4].value,
		}
		EXPENSES.push(newItem)
		expenseItem = document.createElement('button')
		expenseItem.classList.add('expense__item')
		expenseItem.textContent = newItem.invoiceNumber
		sidebar.appendChild(expenseItem)
		console.log(EXPENSES)
		expenseItem.addEventListener('click', showExpenseFunctionInput)
		allInputs.forEach(input => {
			input.value = ''
		})
	}
}

function checkAllInputsFunction() {
	for (let i = 0; i < allInputs.length; i++) {
		if (allInputs[i].value.trim() === '') {
			return true
		}
	}

	return false
}

allAddBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		addExpenseModal.classList.add('add-expense')
		showExpenseModal.classList.remove('show-expense')
	})
})

function closeModalFunction() {
	addExpenseModal.classList.remove('add-expense')
}

function errorDialogFunction() {
	errorDialog.showModal()
}

cancelBtn.addEventListener('click', closeModalFunction)
saveBtn.addEventListener('click', saveFunction)
deleteExpenseButton.addEventListener('click', deleteExpenseFunction)

editBtn.addEventListener('click', () => {
	if (editBtn.textContent === 'Edit') {
		editExpenseFunction()
	} else if (editBtn.textContent === 'Save') {
		saveExpenseFunciton()
	}
})

// TESTY

// const testowyInput = document.querySelector('.test')

// const myfunction = testowyInput.addEventListener('keyup', () => {
// 	let myValue
// 	myValue = testowyInput.value
// 	return myValue
// })

// const checkValueBtn = document.querySelector('.check__value')

// function checkInputFunction() {
// 	console.log(testowyInput.value)
// }

// checkValueBtn.addEventListener('click', checkInputFunction)

// function test() {
// 	let mytest
// 	mytest = 60
// 	return mytest
// }

// console.log(checkAllInputsFunction())
// console.log(test())
// editBtn.addEventListener('click', editExpenseFunction)

// NOTES

// EXAMPLES	OF INVOCIES IF NEEDED

// {
// 	invoiceNumber: 'FA/12/2024',
// 	client: 'ASEA',
// 	invoiceDate: '2024-12-01',
// 	description: 'Coś tam',
// 	amount: 125,
// },
// {
// 	invoiceNumber: 'FA/13/2024',
// 	client: 'ASEA',
// 	invoiceDate: '2024-12-01',
// 	description: 'Coś tam',
// 	amount: 125,
// },
// {
// 	invoiceNumber: 'FA/15/2024',
// 	client: 'ASEA',
// 	invoiceDate: '2024-12-01',
// 	description: 'Coś tam',
// 	amount: 125,
// },

// FUNCION TO BE ABLE TO RUN MANUALY ADDED INVOICES

// expenseItemforTesting.forEach(item => {
// 	item.addEventListener('click', showExpense)
// })

// expenseItemforTesting.addEventListener('click', showExpense)

// BUTTONS OF EXPENSE ITEMS

// <button class="expense__item">FA/12/2024</button>
// <button class="expense__item">FA/13/2024</button>
// <button class="expense__item">FA/15/2024</button>

// EXPENSE ITEMS

// const expenseItemforTesting = document.querySelectorAll('.expense__item')

// function showExpenseFunction(e) {
// 	const index = EXPENSES.findIndex(index => index.invoiceNumber === e.target.textContent)
// 	showTitle.textContent = EXPENSES[index].invoiceNumber
// 	showClient.textContent = EXPENSES[index].client
// 	showDate.textContent = EXPENSES[index].invoiceDate
// 	showDescritpion.textContent = EXPENSES[index].description
// 	showAmount.textContent = EXPENSES[index].amount
// 	showExpenseModal.classList.add('show-expense')
// }
