const popupBtnAll = document.querySelectorAll('[data-popup-button]');
const popupAll = document.querySelectorAll('[data-popup]');

popupBtnAll.forEach(function (item) {
	item.addEventListener('click', function (event) {
		let popupBtnData = event.target.dataset.popupButton;
		document.querySelector('[data-popup]#' + popupBtnData).classList.add('active');
	});
});

popupAll.forEach(function (popup) {
	const popupClose = popup.querySelector('[data-popup-close]');
	const popupWindow = popup.querySelector('[data-popup-window]');

	popupClose.addEventListener('click', function () {
		popup.classList.remove('active');
	});

	popup.addEventListener('click', function () {
		popup.classList.remove('active');
	});

	popupWindow.addEventListener('click', function (event) {
		event.stopPropagation();
	});
});
