const allAddBtn = document.querySelectorAll('.btn__add')
const addExpenseModal = document.querySelector('.add')
const cancelBtn = document.querySelector('.expense__btn--cancel')
const saveBtn = document.querySelector('.expense__btn--save')
const errorDialog = document.querySelector('dialog')
const allInputs = document.querySelectorAll('.input')
const sidebar = document.querySelector('.sidebar')
const showExpenseModal = document.querySelector('.show')
const showTitle = document.querySelector('.show__title')
const showClient = document.querySelector('.show__client')
const showDate = document.querySelector('.show__date')
const showDescritpion = document.querySelector('.show__description')
const showAmount = document.querySelector('.show__amount')
const deleteExpenseButton = document.querySelector('.show__btn--delete')

const EXPENSES = []

function showExpense(e) {
	const index = EXPENSES.findIndex(index => index.invoiceNumber === e.target.textContent)
	showTitle.textContent = EXPENSES[index].invoiceNumber
	showClient.textContent = EXPENSES[index].client
	showDate.textContent = EXPENSES[index].invoiceDate
	showDescritpion.textContent = EXPENSES[index].description
	showAmount.textContent = EXPENSES[index].amount
	showExpenseModal.classList.add('show-expense')
}

function deleteExpenseFunction() {
	const activeExpense = document.querySelector('.show__title')
	const index = EXPENSES.findIndex(index => index.invoiceNumber === activeExpense.textContent)
	const allExpenseItems = document.querySelectorAll('.expense__item')
	allExpenseItems[index].remove()
	EXPENSES.splice(index, 1)
	showExpenseModal.classList.remove('show-expense')
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
		expenseItem.addEventListener('click', showExpense)
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
