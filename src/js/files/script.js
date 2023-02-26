// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	const activeLink = document.querySelector('._sub-menu-active');
	const activeBlock = document.querySelector('._sub-menu-open');

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

	if (activeBlock && targetElement !== activeBlock) {
		activeLink.classList.remove('_sub-menu-active');
		activeBlock.classList.remove('_sub-menu-open');
		document.documentElement.classList.remove('sub-menu-open');
	}

	if(targetElement.closest('.header-bottom__back')){
		document.documentElement.classList.remove('sub-menu-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}

	
}