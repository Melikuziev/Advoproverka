var acc = document.getElementsByClassName("faq__accordion");
var i;

for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
				this.classList.toggle("active");

				var panel = this.nextElementSibling;
				if (panel.style.visibility === "visible") {
						panel.style.height = '0'
						panel.style.visibility = "hidden";
						panel.style.opacity = '0'
				} else {
						panel.style.height = "100%";
						panel.style.visibility = "visible";
						panel.style.opacity = "1";
				}
		});
}
