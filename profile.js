
document.addEventListener('DOMContentLoaded', function() {
  // User data (would normally come from a database)
  const userData = {
    username: 'AniLover',
    registrationDate: '2024-06-15',
    avatar: 'https://via.placeholder.com/200x200',
    about: `Привет! Я большой любитель аниме, особенно жанров фэнтези и приключения. Смотрю аниме уже более 5 лет и всегда в поиске новых интересных тайтлов.

Мои любимые аниме: "Атака титанов", "Клинок, рассекающий демонов", "Моя геройская академия".`,
    status: 'online', // or 'offline'
    stats: {
      watched: 42,
      favorites: 16,
      achievements: 8
    },
    contacts: {
      telegram: '@username',
      vk: 'vk.com/username',
      tiktok: '@username'
    },
    email: 'user@example.com'
  };

  // Sample watching anime data
  const watchingAnimeData = [
    {
      id: 1,
      title: 'Атака титанов',
      image: 'https://via.placeholder.com/300x200?text=Attack+on+Titan',
      currentEpisode: 15,
      totalEpisodes: 25,
      season: 'Сезон 3',
      progress: 60 // Percentage
    },
    {
      id: 2,
      title: 'Клинок, рассекающий демонов',
      image: 'https://via.placeholder.com/300x200?text=Demon+Slayer',
      currentEpisode: 8,
      totalEpisodes: 26,
      season: 'Сезон 2',
      progress: 30 // Percentage
    },
    {
      id: 3,
      title: 'Моя геройская академия',
      image: 'https://via.placeholder.com/300x200?text=My+Hero+Academia',
      currentEpisode: 20,
      totalEpisodes: 25,
      season: 'Сезон 4',
      progress: 80 // Percentage
    }
  ];

  // Sample favorite anime data
  const favoriteAnimeData = [
    {
      id: 1,
      title: 'Атака титанов',
      image: 'https://via.placeholder.com/300x200?text=Attack+on+Titan',
      year: 2013,
      genre: 'Экшен, Драма',
      episodes: 75,
      rating: 4.8
    },
    {
      id: 4,
      title: 'Стальной алхимик: Братство',
      image: 'https://via.placeholder.com/300x200?text=Fullmetal+Alchemist',
      year: 2009,
      genre: 'Экшен, Приключения',
      episodes: 64,
      rating: 4.9
    },
    {
      id: 5,
      title: 'Ванпанчмен',
      image: 'https://via.placeholder.com/300x200?text=One+Punch+Man',
      year: 2015,
      genre: 'Экшен, Комедия',
      episodes: 24,
      rating: 4.7
    },
    {
      id: 2,
      title: 'Клинок, рассекающий демонов',
      image: 'https://via.placeholder.com/300x200?text=Demon+Slayer',
      year: 2019,
      genre: 'Экшен, Сверхъестественное',
      episodes: 44,
      rating: 4.9
    }
  ];

  // Sample user achievements
  const userAchievements = [
    {
      id: 1,
      title: "Первый шаг",
      description: "Посмотреть первую серию любого аниме",
      icon: "fa-play-circle",
      completed: true,
      completedDate: "2024-06-15"
    },
    {
      id: 2,
      title: "Марафонец",
      description: "Посмотреть 10 серий аниме подряд",
      icon: "fa-forward",
      completed: true,
      completedDate: "2024-06-20"
    },
    {
      id: 5,
      title: "Знакомство с героями",
      description: "Познакомиться с 5 персонажами",
      icon: "fa-user-friends",
      completed: true,
      completedDate: "2024-06-22"
    },
    {
      id: 7,
      title: "Знаток героев",
      description: "Узнать все детали о любимом персонаже",
      icon: "fa-user-check",
      completed: true,
      completedDate: "2024-06-25"
    },
    {
      id: 9,
      title: "Первое задание",
      description: "Выполнить первый квест",
      icon: "fa-tasks",
      completed: true,
      completedDate: "2024-06-18"
    }
  ];

  // Load user data
  function loadUserData() {
    // Update profile header
    document.getElementById('profile-username').textContent = userData.username;
    document.getElementById('registration-date').textContent = formatDate(userData.registrationDate);
    document.getElementById('avatar-image').src = userData.avatar;
    
    // Update status indicator
    const statusIndicator = document.querySelector('.status-indicator');
    statusIndicator.textContent = userData.status === 'online' ? 'Онлайн' : 'Оффлайн';
    statusIndicator.className = `status-indicator ${userData.status}`;
    
    // Update stats
    document.getElementById('watched-count').textContent = userData.stats.watched;
    document.getElementById('favorites-count').textContent = userData.stats.favorites;
    document.getElementById('achievements-count').textContent = userData.stats.achievements;
    
    // Update about section
    document.getElementById('about-text').innerHTML = `<p>${userData.about.replace(/\n\n/g, '</p><p>')}</p>`;
    
    // Update contacts
    const contactsContainer = document.getElementById('contacts-display');
    contactsContainer.innerHTML = '';
    
    if (userData.contacts.telegram) {
      contactsContainer.innerHTML += `
        <div class="contact-item">
          <i class="fab fa-telegram"></i>
          <a href="https://t.me/${userData.contacts.telegram.replace('@', '')}" target="_blank">${userData.contacts.telegram}</a>
        </div>
      `;
    }
    
    if (userData.contacts.vk) {
      contactsContainer.innerHTML += `
        <div class="contact-item">
          <i class="fab fa-vk"></i>
          <a href="https://${userData.contacts.vk}" target="_blank">${userData.contacts.vk}</a>
        </div>
      `;
    }
    
    if (userData.contacts.tiktok) {
      contactsContainer.innerHTML += `
        <div class="contact-item">
          <i class="fab fa-tiktok"></i>
          <a href="https://tiktok.com/${userData.contacts.tiktok}" target="_blank">${userData.contacts.tiktok}</a>
        </div>
      `;
    }
    
    // Fill edit form fields
    document.getElementById('edit-username').value = userData.username;
    document.getElementById('edit-email').value = userData.email;
    
    // Fill about textarea
    document.getElementById('about-textarea').value = userData.about;
    
    // Fill contacts inputs
    document.getElementById('telegram-input').value = userData.contacts.telegram;
    document.getElementById('vk-input').value = userData.contacts.vk;
    document.getElementById('tiktok-input').value = userData.contacts.tiktok;
  }

  // Load watching anime
  function loadWatchingAnime() {
    const watchingContainer = document.getElementById('watching-anime');
    if (!watchingContainer) return;
    
    watchingContainer.innerHTML = '';
    
    if (watchingAnimeData.length === 0) {
      watchingContainer.innerHTML = '<p>Вы еще не начали смотреть ни одно аниме.</p>';
      return;
    }
    
    watchingAnimeData.forEach(anime => {
      const animeCard = document.createElement('div');
      animeCard.className = 'watching-card';
      
      animeCard.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}">
        <div class="watching-info">
          <h3 class="watching-title">${anime.title}</h3>
          <div class="watching-progress">
            <div>${anime.season} | Эпизод ${anime.currentEpisode}/${anime.totalEpisodes}</div>
            <div class="progress-bar">
              <div class="progress-bar-fill" style="width: ${anime.progress}%;"></div>
            </div>
            <div>${anime.progress}% завершено</div>
          </div>
          <button class="continue-btn" data-id="${anime.id}">Продолжить просмотр</button>
        </div>
      `;
      
      watchingContainer.appendChild(animeCard);
    });
    
    // Add event listeners to continue buttons
    const continueButtons = document.querySelectorAll('.continue-btn');
    continueButtons.forEach(button => {
      button.addEventListener('click', function() {
        const animeId = this.getAttribute('data-id');
        window.location.href = `anime.html?id=${animeId}`;
      });
    });
  }

  // Load favorite anime
  function loadFavoriteAnime() {
    const favoritesContainer = document.getElementById('favorite-anime');
    if (!favoritesContainer) return;
    
    favoritesContainer.innerHTML = '';
    
    if (favoriteAnimeData.length === 0) {
      favoritesContainer.innerHTML = '<p>У вас еще нет избранных аниме.</p>';
      return;
    }
    
    favoriteAnimeData.forEach(anime => {
      const animeCard = document.createElement('div');
      animeCard.className = 'anime-card';
      
      animeCard.innerHTML = `
        <button class="remove-favorite" data-id="${anime.id}">
          <i class="fas fa-times"></i>
        </button>
        <img src="${anime.image}" alt="${anime.title}">
        <div class="anime-info">
          <div class="anime-rating">
            ${getStarRating(anime.rating)}
          </div>
          <h3 class="anime-title">${anime.title}</h3>
          <div class="anime-details">
            <span>${anime.year}</span>
            <span>${anime.genre}</span>
            <span>${anime.episodes} эп.</span>
          </div>
        </div>
      `;
      
      favoritesContainer.appendChild(animeCard);
    });
    
    // Add event listeners to favorite anime cards
    const animeCards = favoritesContainer.querySelectorAll('.anime-card');
    animeCards.forEach(card => {
      card.addEventListener('click', function(e) {
        if (e.target.closest('.remove-favorite')) {
          e.stopPropagation();
          const animeId = e.target.closest('.remove-favorite').getAttribute('data-id');
          removeFavorite(animeId);
        } else {
          const animeId = this.querySelector('.remove-favorite').getAttribute('data-id');
          window.location.href = `anime.html?id=${animeId}`;
        }
      });
    });
  }

  // Load user achievements
  function loadUserAchievements() {
    const achievementsContainer = document.getElementById('user-achievements');
    if (!achievementsContainer) return;
    
    achievementsContainer.innerHTML = '';
    
    if (userAchievements.length === 0) {
      achievementsContainer.innerHTML = '<p>У вас еще нет достижений.</p>';
      return;
    }
    
    userAchievements.forEach(achievement => {
      const achievementCard = document.createElement('div');
      achievementCard.className = 'achievement-card completed';
      
      achievementCard.innerHTML = `
        <div class="achievement-icon">
          <i class="fas ${achievement.icon}"></i>
        </div>
        <h3 class="achievement-title">${achievement.title}</h3>
        <p class="achievement-description">${achievement.description}</p>
        <div class="achievement-completed-date">Получено: ${formatDate(achievement.completedDate)}</div>
      `;
      
      achievementsContainer.appendChild(achievementCard);
    });
  }

  // Tab switching
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // Edit profile button
  const editProfileBtn = document.getElementById('edit-profile-btn');
  const editProfileModal = document.getElementById('edit-profile-modal');
  const closeModalBtn = editProfileModal.querySelector('.close');
  
  editProfileBtn.addEventListener('click', function() {
    editProfileModal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', function() {
    editProfileModal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === editProfileModal) {
      editProfileModal.style.display = 'none';
    }
  });

  // Profile edit form submission
  const profileEditForm = document.getElementById('profile-edit-form');
  profileEditForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, this would update the user data in the database
    userData.username = document.getElementById('edit-username').value;
    userData.email = document.getElementById('edit-email').value;
    
    loadUserData();
    editProfileModal.style.display = 'none';
    
    alert('Профиль успешно обновлен!');
  });

  // About section editing
  const editAboutBtn = document.getElementById('edit-profile-btn');
  const aboutText = document.getElementById('about-text');
  const aboutEdit = document.getElementById('about-edit');
  const saveAboutBtn = document.getElementById('save-about-btn');
  const cancelAboutBtn = document.getElementById('cancel-about-btn');
  
  editAboutBtn.addEventListener('dblclick', function() {
    aboutText.style.display = 'none';
    aboutEdit.style.display = 'block';
    
    // Set focus to textarea
    document.getElementById('about-textarea').focus();
  });
  
  saveAboutBtn.addEventListener('click', function() {
    const newAbout = document.getElementById('about-textarea').value;
    
    // In a real app, this would update the user data in the database
    userData.about = newAbout;
    
    // Update the about text
    aboutText.innerHTML = `<p>${newAbout.replace(/\n\n/g, '</p><p>')}</p>`;
    
    // Toggle display
    aboutText.style.display = 'block';
    aboutEdit.style.display = 'none';
  });
  
  cancelAboutBtn.addEventListener('click', function() {
    // Reset textarea content
    document.getElementById('about-textarea').value = userData.about;
    
    // Toggle display
    aboutText.style.display = 'block';
    aboutEdit.style.display = 'none';
  });

  // Contacts editing
  const contactsDisplay = document.getElementById('contacts-display');
  const contactsEdit = document.getElementById('contacts-edit');
  const saveContactsBtn = document.getElementById('save-contacts-btn');
  const cancelContactsBtn = document.getElementById('cancel-contacts-btn');
  
  // Double click on contacts to edit
  document.querySelector('#contacts-tab h2').addEventListener('dblclick', function() {
    contactsDisplay.style.display = 'none';
    contactsEdit.style.display = 'block';
  });
  
  saveContactsBtn.addEventListener('click', function() {
    const newTelegram = document.getElementById('telegram-input').value;
    const newVk = document.getElementById('vk-input').value;
    const newTiktok = document.getElementById('tiktok-input').value;
    
    // In a real app, this would update the user data in the database
    userData.contacts.telegram = newTelegram;
    userData.contacts.vk = newVk;
    userData.contacts.tiktok = newTiktok;
    
    // Update contacts display
    loadUserData();
    
    // Toggle display
    contactsDisplay.style.display = 'block';
    contactsEdit.style.display = 'none';
  });
  
  cancelContactsBtn.addEventListener('click', function() {
    // Reset form values
    document.getElementById('telegram-input').value = userData.contacts.telegram;
    document.getElementById('vk-input').value = userData.contacts.vk;
    document.getElementById('tiktok-input').value = userData.contacts.tiktok;
    
    // Toggle display
    contactsDisplay.style.display = 'block';
    contactsEdit.style.display = 'none';
  });

  // Avatar upload
  const avatarImage = document.getElementById('avatar-image');
  const avatarUpload = document.getElementById('avatar-upload');
  const profileAvatar = document.querySelector('.profile-avatar');
  
  profileAvatar.addEventListener('click', function() {
    avatarUpload.click();
  });
  
  avatarUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        avatarImage.src = e.target.result;
        
        // In a real app, this would upload the image to the server and update the user data
        userData.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Remove from favorites
  function removeFavorite(animeId) {
    // In a real app, this would remove the anime from the user's favorites in the database
    const index = favoriteAnimeData.findIndex(anime => anime.id.toString() === animeId.toString());
    if (index !== -1) {
      favoriteAnimeData.splice(index, 1);
      userData.stats.favorites--;
      
      // Update favorites count
      document.getElementById('favorites-count').textContent = userData.stats.favorites;
      
      // Reload favorites
      loadFavoriteAnime();
    }
  }

  // Helper function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  // Helper function to generate star rating HTML
  function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
  }

  // Initialize the page
  loadUserData();
  loadWatchingAnime();
  loadFavoriteAnime();
  loadUserAchievements();
});
