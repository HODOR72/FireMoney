const ranges = document.querySelectorAll('.range-wrap')
function updateGradient(rangeValue, elem) {
	const percentage = ((rangeValue - elem.min) / (elem.max - elem.min)) * 100
	elem.style.backgroundImage = `linear-gradient(90deg, #FF9F47 ${percentage}%, transparent ${percentage}%)`
}

function updateOutput(range, output, index) {
	const newValue = Number(
		((range.value - range.min) * 100) / (range.max - range.min)
	)
	const newPosition = 10 - newValue * 1
	output.style.left = `calc(${newValue}% + (${newPosition}px))`

	if (index === 0) {
		output.textContent = `${range.value * 1000}₽`
	} else {
		output.textContent = `${range.value} дней`
	}
}

ranges.forEach((elem, index) => {
	const slider = elem.querySelector('.slider')
	const output = elem.querySelector('.output')
	slider.addEventListener('input', () => {
		updateOutput(slider, output, index)
		updateGradient(slider.value, slider)
	})
	updateOutput(slider, output, index)
	updateGradient(slider.value, slider)
})

// ACCORDION

const items = document.querySelectorAll('.accordion__item-trigger')
items.forEach(item => {
	item.addEventListener('click', () => {
		const parent = item.parentNode
		if (parent.classList.contains('accordion__item-active')) {
			parent.classList.remove('accordion__item-active')
		} else {
			document
				.querySelectorAll('.accordion__item')
				.forEach(child => child.classList.remove('accordion__item-active'))
			parent.classList.add('accordion__item-active')
		}
	})
})

// BurgerMenu
const body = document.body
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
burger.addEventListener('click', () => {
	if (!menu.classList.contains('active')) {
		menu.classList.add('active')
		menu.classList.remove('sm2:hidden')
		burger.classList.add('active-burger')

		body.style.overflow = 'hidden'
		body.style.position = 'fixed'
		body.style.width = '100%'
	} else {
		menu.classList.remove('active')
		burger.classList.remove('active-burger')
		menu.classList.add('sm2:hidden')

		body.style.removeProperty('overflow')
		body.style.removeProperty('position')
		body.style.removeProperty('top')
		body.style.removeProperty('width')
		window.scrollTo(0, 0)
	}
})
