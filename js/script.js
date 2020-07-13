var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Переключение между добавлением и удалением класса "active",
    чтобы выделить кнопку, управляющую панелью */
    this.classList.toggle("active");

    /* Переключение между скрытием и отображением активной панели */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
			panel.style.borderBottom = "0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
			panel.style.borderBottom = "1px solid #b3b3b3";
    }
  });
}

document.getElementById('mmenu').onclick = function() {
	document.getElementById('white_menu').classList.toggle('open_menu');
}