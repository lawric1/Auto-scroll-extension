let widgetContainer = document.createElement("div");
widgetContainer.className = "widgetContainer";
widgetContainer.id = "widgetContainer";

let checkbox = document.createElement("input");
checkbox.className = "checkbox";
checkbox.type = "checkbox";

let slider = document.createElement("input");
slider.className = "slider";
slider.type = "range";
slider.min = 0;
slider.max = 20;
slider.step = 0.1;

widgetContainer.appendChild(checkbox);
widgetContainer.appendChild(slider);

// Append element outside body tag
document.documentElement.prepend(widgetContainer);

let scrollInterval = null;

// Starts scrolling when checkbox is marked
checkbox.addEventListener("change", function () {
	if (this.checked) {
		scrollInterval = window.setInterval(() => {
			scrollBy({
				top: 1 + slider.valueAsNumber,
				left: 0,
				behavior: "smooth",
			});
		}, 70);
	} else {
		clearInterval(scrollInterval);
	}
});
