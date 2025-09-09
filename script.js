const heroVideo = document.getElementById("hero-video");
const audioBtn = document.getElementById("hero-audio");

// Начальное состояние: звук выключен
heroVideo.muted = true;
audioBtn.classList.add('muted');

audioBtn.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
  audioBtn.classList.toggle('muted', heroVideo.muted);
});

document.addEventListener('DOMContentLoaded', function() {
  // Handle feedback form modal
  const feedbackBtn = document.querySelector('.feedback-btn');
  const feedbackModal = document.getElementById('feedback-modal');
  const closeBtns = document.querySelectorAll('.close');

  if (feedbackBtn && feedbackModal) {
    feedbackBtn.addEventListener('click', function() {
      feedbackModal.style.display = 'block';
    });
  }

  // Simulate user login state
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Update profile dropdown based on login state
  const profileDropdown = document.querySelector('.profile-dropdown');
  if (profileDropdown) {
    if (isLoggedIn) {
      profileDropdown.innerHTML = `
        <a href="profile.html">Мой профиль</a>
        <a href="#" id="logout-link">Выход</a>
      `;

      // Add event listener for logout
      const logoutLink = document.getElementById('logout-link');
      if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
          e.preventDefault();
          localStorage.removeItem('isLoggedIn');
          window.location.href = 'index.html';
        });
      }
    } else {
      profileDropdown.innerHTML = `
        <a href="login.html">Вход</a>
        <a href="register.html">Регистрация</a>
      `;
    }
  }

  // Handle login form submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'profile.html';
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // Sample data (this would normally come from a database)
  const animeData = [
    {
      id: 1,
      title: "Коллекция ниндзя",
      image: "cards/id=846.jpg",
      rating: 4.8,
      year: 2013,
      genre: "Экшен, Сверхъестественное",
      episodes: 13,
      type: "serial"
    },
    {
      id: 2,
      title: "Проблемный старик",
      image: "cards/id=56.jpg",
      rating: 4.7,
      year: 2019,
      genre: "Комедия",
      episodes: 13,
      type: "serial"
    },
    {
      id: 3,
      title: "Твоё имя",
      image: "https://via.placeholder.com/200x280?text=Your+Name",
      rating: 4.9,
      year: 2016,
      genre: "Романтика, Фэнтези",
      episodes: 1,
      type: "film"
    },
    {
      id: 4,
      title: "Ван Пис",
      image: "https://via.placeholder.com/200x280?text=One+Piece",
      rating: 4.5,
      year: 1999,
      genre: "Приключения, Экшен",
      episodes: 1000,
      type: "serial"
    },
    {
      id: 5,
      title: "Фейт: Начало",
      image: "https://via.placeholder.com/200x280?text=Fate+Zero",
      rating: 4.6,
      year: 2011,
      genre: "Экшен, Сверхъестественное",
      episodes: 4,
      type: "ova"
    },
    {
      id: 6,
      title: "Ванпанчмен",
      image: "https://via.placeholder.com/200x280?text=One+Punch+Man",
      rating: 4.8,
      year: 2015,
      genre: "Экшен, Комедия",
      episodes: 12,
      type: "ona"
    }
  ];

  // Display anime cards in recent releases section
  const recentAnimeContainer = document.getElementById('recent-anime');
  const popularAnimeContainer = document.getElementById('popular-anime');

  if (recentAnimeContainer) {
    // Show first 4 anime as recent
    displayAnimeCards(animeData.slice(0, 4), recentAnimeContainer);
  }

  if (popularAnimeContainer) {
    // Show different order for popular
    displayAnimeCards(animeData.slice().reverse().slice(0, 4), popularAnimeContainer);
  }


  // Modals
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  const profileIconForModals = document.querySelector('.profile i');
  const loginLinks = document.querySelectorAll('.profile-dropdown a');
  const showRegisterLink = document.getElementById('show-register');
  const acceptTermsBtn = document.getElementById('accept-terms');
  const declineTermsBtn = document.getElementById('decline-terms');
  const termsDiv = document.getElementById('terms');
  const registerForm = document.getElementById('register-form');

  // Open login/register modals from profile dropdown
  if (profileIconForModals && loginLinks) {
    loginLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.textContent === 'Вход') {
          e.preventDefault();
          loginModal.style.display = 'block';
        } else if (this.textContent === 'Регистрация') {
          e.preventDefault();
          registerModal.style.display = 'block';
        }
        // Don't prevent default for "Мой профиль", allow navigation
      });
    });
  }

  // Switch from login to register
  if (showRegisterLink) {
    showRegisterLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginModal.style.display = 'none';
      registerModal.style.display = 'block';
    });
  }

  // Handle terms acceptance
  if (acceptTermsBtn) {
    acceptTermsBtn.addEventListener('click', function() {
      termsDiv.style.display = 'none';
      registerForm.style.display = 'block';
    });
  }

  if (declineTermsBtn) {
    declineTermsBtn.addEventListener('click', function() {
      registerModal.style.display = 'none';
    });
  }

  // Close modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      feedbackModal.style.display = 'none';
      loginModal.style.display = 'none';
      registerModal.style.display = 'none';

      // Reset register form to show terms again
      if (termsDiv && registerForm) {
        termsDiv.style.display = 'block';
        registerForm.style.display = 'none';
      }
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === feedbackModal) {
      feedbackModal.style.display = 'none';
    }
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
      registerModal.style.display = 'none';

      // Reset register form to show terms again
      if (termsDiv && registerForm) {
        termsDiv.style.display = 'block';
        registerForm.style.display = 'none';
      }
    }
  });

  // Form submissions
  const feedbackForm = document.getElementById('feedback-form');
  const loginForm2 = document.getElementById('login-form');
  const registerFormElement = document.getElementById('register-form');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real app, this would send data to the server
      alert('Спасибо за обратную связь!');
      feedbackModal.style.display = 'none';
      this.reset();
    });
  }

  if (loginForm2) {
    loginForm2.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real app, this would authenticate with the server
      alert('Вход выполнен успешно!');
      loginModal.style.display = 'none';
      this.reset();
    });
  }

  if (registerFormElement) {
    registerFormElement.addEventListener('submit', function(e) {
      e.preventDefault();

      // Check if passwords match
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-confirm-password').value;

      if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
      }

      // In a real app, this would register with the server
      alert('Регистрация выполнена успешно!');
      registerModal.style.display = 'none';
      this.reset();
    });
  }

  // Voice Search с анимацией эквалайзера
  const micBtn = document.querySelector('.mic-btn');
  const searchInput = document.querySelector('.search-box input');

  if (micBtn && searchInput && 'webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.continuous = false;
    recognition.interimResults = true;

    micBtn.addEventListener('click', function() {
      recognition.start();
      searchInput.placeholder = 'Говорите...';
      
      // Добавляем класс recording к кнопке микрофона
      micBtn.classList.add('recording');
    });

    // Обрабатываем промежуточные результаты для определения речи
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      
      // Если это промежуточный результат, значит пользователь говорит
      if (!event.results[0].isFinal) {
        // Поддерживаем анимацию во время речи
        micBtn.classList.add('recording');
      } else {
        // Финальный результат, пользователь закончил говорить
        searchInput.value = transcript;
        micBtn.classList.remove('recording');
      }
    };

    recognition.onaudiostart = function() {
      // Начало аудио записи
      micBtn.classList.add('recording');
    };

    recognition.onaudioend = function() {
      // Окончание аудио записи
      micBtn.classList.remove('recording');
    };

    recognition.onerror = function() {
      searchInput.placeholder = 'Поиск...';
      micBtn.classList.remove('recording');
    };

    recognition.onend = function() {
      searchInput.placeholder = 'Поиск...';
      micBtn.classList.remove('recording');
    };
  }

  // Обработка поведения меню профиля для всех страниц
  const profileIcon = document.querySelector('.profile i');
  if (profileIcon) {
    profileIcon.addEventListener('click', function(e) {
      e.stopPropagation(); // Предотвращаем всплытие события
      const dropdown = document.querySelector('.profile-dropdown');
      if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
  
  // Закрытие выпадающего меню при клике вне его
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.profile')) {
      const dropdown = document.querySelector('.profile-dropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    }
  });
});

// Function to create and display anime cards
function displayAnimeCards(animeList, container) {
  animeList.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';

    // Create stars based on rating
    let stars = '';
    const fullStars = Math.floor(anime.rating);
    const hasHalfStar = anime.rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars += '<i class="fas fa-star"></i>';
      } else if (i === fullStars && hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }

    card.innerHTML = `
      <a href="anime.html?id=${anime.id}">
        <img src="${anime.image}" alt="${anime.title}">
        <div class="anime-info">
          <div class="anime-rating">
            ${stars}
            <span>${anime.rating.toFixed(1)}</span>
          </div>
          <div class="anime-title">${anime.title}</div>
          <div class="anime-details">
            <span>${anime.year}</span>
            <span>${anime.genre}</span>
            <span>${anime.episodes} ${getEpisodesText(anime.episodes)}</span>
          </div>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}
// Helper function to format episode text based on count
function getEpisodesText(count) {
  if (count === 1) {
    return 'серия';
  } else if (count > 1 && count < 5) {
    return 'серии';
  } else {
    return 'серий';
  }
}
const video = document.getElementById("hero-video");
const title = document.querySelector(".hero-title");

let currentIndex = 0;
const playlist = [
  { src: "video/Devil.mp4", title: "Дьявол может плакать" },
  { src: "video/Jail.mp4", title: "Школа Тюрьма" },
];

function playNext() {
  currentIndex = (currentIndex + 1) % playlist.length;

  // Анимация исчезновения
  title.classList.add("fade-out");

  // Заменим видео и текст после небольшой паузы
  setTimeout(() => {
    video.src = playlist[currentIndex].src;
    title.textContent = playlist[currentIndex].title;
    video.play();

    // Анимация появления
    title.classList.remove("fade-out");
    title.classList.add("fade-in");

    // Удалим класс после анимации
    setTimeout(() => {
      title.classList.remove("fade-in");
    }, 500);

  }, 500); // Пауза равна длительности анимации
}

video.addEventListener("ended", playNext);

// Инициализация
video.src = playlist[0].src;
title.textContent = playlist[0].title;
video.play();

function createFallingStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Случайная позиция по всей ширине экрана и высоте
  const top = Math.random() * window.innerHeight * 0.5; // верхняя часть экрана
  const left = Math.random() * window.innerWidth;

  star.style.top = `${top}px`;
  star.style.left = `${left}px`;

  // Добавляем в body напрямую
  document.body.appendChild(star);

  // Удаляем после завершения анимации
  setTimeout(() => {
    star.remove();
  }, 4000); // длительность анимации + запас
}

// Запускаем генерацию по одной звезде с интервалом 400–900 мс
function launchStars() {
  createFallingStar();
  const delay = Math.random() * 500 + 400;
  setTimeout(launchStars, delay);
}

// Стартуем
launchStars();
function createTwinkleStar() {
  const star = document.createElement('div');
  star.classList.add('twinkle');

  // Случайный размер от 3 до 6 пикселей
  const size = Math.random() * 3 + 3;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Случайное положение
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // Добавляем в контейнер
  document.querySelector('.twinkle-container').appendChild(star);

  // Удаление после анимации
  setTimeout(() => {
    star.remove();
  }, 2500);
}

// Частота появления звёзд (примерно каждые 300–800 мс)
setInterval(() => {
  createTwinkleStar();
}, Math.random() * 500 + 300);







// Database connection setup will be implemented separately