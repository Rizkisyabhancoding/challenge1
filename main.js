function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  const revealElements = document.querySelectorAll('.scroll-reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  async function getAPOD() {
    const apiKey = "FVUgpq6MB44ScsGu2FxACBRvIUbmUejprIdnTmJz";
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await res.json();
  
    const container = document.getElementById("apod-container");
  
    if (data.media_type === "image") {
      container.innerHTML = `
        <h3>${data.title}</h3>
        <img src="${data.url}" alt="${data.title}" />
        <p>${data.explanation}</p>
      `;
    } else if (data.media_type === "video") {
      container.innerHTML = `
        <h3>${data.title}</h3>
        <iframe width="100%" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>
        <p>${data.explanation}</p>
      `;
    } else {
      container.innerHTML = "<p>Media tidak tersedia.</p>";
    }
  }
  
  getAPOD();

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 2 },
      move: { enable: true, speed: 0.7, out_mode: "out" }
    }
  });