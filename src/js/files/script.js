// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";




document.addEventListener("click", documentActions);
let citySelect = document.querySelector('.header-top__button_city')

function documentActions(e) {
	function rty(item) {
		const qwe =document.querySelectorAll('.popup__item-city');
		qwe.forEach(element => {
			element.classList.remove('_popup-city-select')
		});
		console.log(item);
		item.classList.add('_popup-city-select')
	}
	const targetElement = e.target;
	const activeLink = document.querySelector('._sub-menu-active');
	const activeBlock = document.querySelector('._sub-menu-open');
	
	let popupItems = document.querySelectorAll('.popup__item-city')

	if (targetElement.closest('[data-parent]')) {
		const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		
		console.log(subMenu);
		if (subMenu) {
			if (activeLink && activeLink !== targetElement) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
				document.documentElement.classList.remove('sub-menu-open');
			}
			document.documentElement.classList.toggle('sub-menu-open');
			targetElement.classList.toggle('_sub-menu-active');
			subMenu.classList.toggle('_sub-menu-open');
			

		} else {
			console.log('Ой ой, нет такого подменю :(')
		}
		e.preventDefault();
	}

	if (targetElement.closest('[data-subsubparent]')) {
		const subsubMenuId = targetElement.dataset.subsubparent ? targetElement.dataset.subsubparent : null;
		const subsubMenu = document.querySelector(`[data-subsubmenu="${subsubMenuId}"]`);
		if (subsubMenu) {
			document.documentElement.classList.toggle('subsub-menu-open');
			targetElement.classList.toggle('_subsub-menu-active');
			subsubMenu.classList.toggle('_subsub-menu-open');
			

		}
	}
	if(targetElement.closest('.header-bottom__back')){
		document.documentElement.classList.remove('sub-menu-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}

	if(targetElement.closest('.header-bottom__subsubback')){
		document.documentElement.classList.remove('subsub-menu-open');
		document.querySelector('._subsub-menu-active') ? document.querySelector('._subsub-menu-active').classList.remove('_subsub-menu-active') : null;
		document.querySelector('._subsub-menu-open') ? document.querySelector('._subsub-menu-open').classList.remove('_subsub-menu-open') : null;
		e.preventDefault();
	}

	if(targetElement.closest('.popup__item-city')){
		console.log(this);
		rty(this)
		citySelect.innerHTML = targetElement.innerText
	}
}