// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
const linkA =document.querySelectorAll('a');

document.addEventListener("click", documentActions);
let citySelect = document.querySelector('.header-top__button_city')

function documentActions(e) {
	
	const targetElement = e.target;
	const activeLink = document.querySelector('._sub-menu-active');
	const activeBlock = document.querySelector('._sub-menu-open');
	
	if (targetElement.closest('[data-parent]')) {
		const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		
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
		const citySelectPopup =document.querySelectorAll('.popup__item-city');
		citySelectPopup.forEach(e => {
			e.classList.remove('_popup-city-select')
		});
		targetElement.classList.add('_popup-city-select')
		citySelect.innerHTML = targetElement.innerText
	}

	//квиз
	const quiz01 = document.querySelector('.quiz01');
	const quiz02 = document.querySelector('.quiz02');
	const quiz03 = document.querySelector('.quiz03');
	const quiz04 = document.querySelector('.quiz04');
	if (targetElement.closest('.answers-quiz__item')) {
		targetElement.classList.toggle('_active')
	}
	if (targetElement.closest('.further01') && quiz01.querySelector('._active')) {
		//quiz01.classList.add('_close');
		quiz02.classList.toggle('_open');
		e.preventDefault();
	}
	if (targetElement.closest('.further02') && quiz02.querySelector('._active')) {
		//quiz02.classList.add('_close');
		//quiz02.classList.remove('_open');
		quiz03.classList.toggle('_open');
		e.preventDefault();
	}
	if (targetElement.closest('.further03') && quiz03.querySelector('._active')) {
		//quiz03.classList.add('_close');
		quiz04.classList.toggle('_open');
		e.preventDefault();
	}
	if (targetElement.closest('.quiz__further_start')) {
		const quiz =document.querySelectorAll('.quiz');
		quiz.forEach(element => {
			element.classList.remove('_open')
		});
		quiz01.classList.toggle('_open');
		e.preventDefault();
	}
}