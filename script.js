var sections = document.querySelectorAll("section");
			

			// Ocultar todas las secciones excepto la primera
			for (var i = 1; i < sections.length; i++) {
			  sections[i].style.display = "none";
			}

			// Agregar un evento click a cada enlace de la navegación
			var links = document.querySelectorAll("nav a");
			for (var i = 1; i < links.length; i++) {
			  links[i].addEventListener("click", showSection);
			}

			function showSection(event) {
			  event.preventDefault();
			  
			  // Ocultar la sección anterior y mostrar la nueva sección
			  var currentSection = document.querySelector(".current-section");
			  if(currentSection){
				currentSection.classList.add("fade-out");
				setTimeout(function(){
				  currentSection.style.display = "none";
				  currentSection.classList.remove("fade-out");
				  currentSection.classList.remove("current-section");
				},1000);
			  }
			  
			  // Mostrar la sección correspondiente al enlace clickeado
			  var sectionId = this.getAttribute("href");
			  var section = document.querySelector(sectionId);
			  section.style.display = "block";
			  section.classList.add("current-section");
			  section.classList.add("fade-in");
			  setTimeout(function(){
				section.classList.remove("fade-in");
			  },1000);
			}