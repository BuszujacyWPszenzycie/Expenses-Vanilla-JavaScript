const allAddBtn = document.querySelectorAll('.btn__add')
const addExpenseModal = document.querySelector('.add')
const cancelBtn = document.querySelector('.expense__btn--cancel')
const saveBtn = document.querySelector('.expense__btn--save')
const errorDialog = document.querySelector('dialog')
const allInputs = document.querySelectorAll('.input')
const sidebar = document.querySelector('.sidebar')
const showExpenseModal = document.querySelector('.show')
const expenseItemforTesting = document.querySelector('.expense__item')
const showTitle = document.querySelector('.show__title')
const showClient = document.querySelector('.show__client')
const showDate = document.querySelector('.show__date')
const showDescritpion = document.querySelector('.show__description')
const showAmount = document.querySelector('.show__amount')

const EXPENSES = [
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
]

// expenseItemforTesting.addEventListener('click', showExpense)

function showExpense(e) {
	const index = EXPENSES.findIndex(x => x.invoiceNumber === e.target.textContent)
	showTitle.textContent = EXPENSES[index].invoiceNumber
	showClient.textContent = EXPENSES[index].client
	showDate.textContent = EXPENSES[index].invoiceDate
	showDescritpion.textContent = EXPENSES[index].description
	showAmount.textContent = EXPENSES[index].amount
	showExpenseModal.classList.add('show-expense')

	const deleteBtn = document.querySelector('.show__btn--delete')
	deleteBtn.addEventListener('click', () => {
		const allExpenseItems = document.querySelectorAll('.expense__item')
		const allExpenseItemsConverted = [...allExpenseItems]
		allExpenseItems[index].remove()

		console.log(allExpenseItems)
		console.log(EXPENSES)
		console.log('----------------------')
		EXPENSES.splice(index, 1)
		console.log(allExpenseItems)
		console.log(EXPENSES)
		showExpenseModal.classList.remove('show-expense')
	})
}

function saveFunction() {
	if (checkAllInputs()) {
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
	}

	allInputs.forEach(input => {
		input.value = ''
	})
}

function checkAllInputs() {
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
