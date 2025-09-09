
document.addEventListener('DOMContentLoaded', function() {
  // Get anime ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const animeId = parseInt(urlParams.get('id'));
  
  // Sample anime data (would normally come from a database)
  const animeData = [
    {
      id: 1,
      title: "Атака титанов",
      originalTitle: "Shingeki no Kyojin",
      image: "https://via.placeholder.com/300x450?text=Attack+on+Titan",
      rating: 4.8,
      year: 2013,
      genres: ["Экшен", "Драма", "Фэнтези", "Военное"],
      episodes: 75,
      type: "serial",
      status: "Завершен",
      studio: "Wit Studio / MAPPA",
      country: "Япония",
      description: "В мире, где человечество живет внутри городов, окружённых огромными стенами, защищающими от гигантских человекоподобных существ, известных как титаны, молодой Эрен Йегер клянется отомстить титанам после того, как они разрушили его город и убили его мать.",
      staffJapanese: [
        { name: "Юки Кадзи", role: "Эрен Йегер" },
        { name: "Юи Исикава", role: "Микаса Аккерман" },
        { name: "Марина Иноуэ", role: "Армин Арлерт" }
      ],
      staffRussian: [
        { id: 1, name: "Алексей (xMeT1oRx)", role: "Эрен Йегер" },
        { id: 2, name: "Мария (Meri)", role: "Микаса Аккерман" }
      ],
      editors: [
        { id: 3, name: "Дмитрий (Dimakoo)" }
      ],
      related: [
        { id: 101, title: "Атака титанов 2", type: "Второй сезон", image: "https://via.placeholder.com/50x70?text=AoT+S2" },
        { id: 102, title: "Атака титанов 3", type: "Третий сезон", image: "https://via.placeholder.com/50x70?text=AoT+S3" },
        { id: 103, title: "Атака титанов: Финал", type: "Финальный сезон", image: "https://via.placeholder.com/50x70?text=AoT+Final" }
      ],
      comments: [
        { id: 1, author: "AnimeGuru", date: "2023-06-15", content: "Одно из лучших аниме, которое я когда-либо смотрел! Озвучка на высшем уровне." },
        { id: 2, author: "TitanFan", date: "2023-05-20", content: "Эрен в исполнении xMeT1oRx звучит потрясающе. Спасибо за ваш труд!" },
        { id: 3, author: "AniLover", date: "2023-05-01", content: "Качество монтажа и звука на высоте. Буду ждать следующие проекты от вашей студии." }
      ]
    },
    {
      id: 2,
      title: "Клинок, рассекающий демонов",
      originalTitle: "Kimetsu no Yaiba",
      image: "https://via.placeholder.com/300x450?text=Demon+Slayer",
      rating: 4.7,
      year: 2019,
      genres: ["Экшен", "Сверхъестественное", "Исторический"],
      episodes: 26,
      type: "serial",
      status: "Выходит",
      studio: "ufotable",
      country: "Япония",
      description: "После того, как его семья была жестоко убита, а младшая сестра превращена в демона, Тандзиро Камадо клянется стать охотником на демонов, чтобы найти способ вернуть сестре человеческий облик и отомстить за смерть своей семьи.",
      staffJapanese: [
        { name: "Нацуки Ханаэ", role: "Тандзиро Камадо" },
        { name: "Акари Кито", role: "Незуко Камадо" },
        { name: "Хиро Симоно", role: "Зеницу Агацума" }
      ],
      staffRussian: [
        { id: 1, name: "Алексей (xMeT1oRx)", role: "Тандзиро Камадо" },
        { id: 2, name: "Мария (Meri)", role: "Незуко Камадо" }
      ],
      editors: [
        { id: 3, name: "Дмитрий (Dimakoo)" }
      ],
      related: [
        { id: 201, title: "Клинок, рассекающий демонов: Бесконечный поезд", type: "Фильм", image: "https://via.placeholder.com/50x70?text=DS+Movie" },
        { id: 202, title: "Клинок, рассекающий демонов 2", type: "Второй сезон", image: "https://via.placeholder.com/50x70?text=DS+S2" }
      ],
      comments: [
        { id: 4, author: "DemonSlayerFan", date: "2023-07-10", content: "Потрясающая анимация и озвучка! Особенно сцены боя выглядят великолепно." },
        { id: 5, author: "AnimeWatcher", date: "2023-06-25", content: "Одно из лучших аниме последних лет. Спасибо за озвучку!" }
      ]
    }
  ];
  
  // Find the anime by ID
  const anime = animeData.find(a => a.id === animeId);
  
  // If anime not found, show error message
  if (!anime) {
    document.getElementById('anime-details').innerHTML = `
      <div class="error-message">
        <h2>Аниме не найдено</h2>
        <p>К сожалению, запрашиваемое аниме не найдено в нашей базе данных.</p>
        <a href="index.html" class="back-btn">Вернуться на главную</a>
      </div>
    `;
    return;
  }
  
  // Set page title
  document.title = `${anime.title} - AniCosmic`;
  
  // Display anime details
  const animeDetailsContainer = document.getElementById('anime-details');
  if (animeDetailsContainer) {
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
    
    // Create genres HTML
    const genresHtml = anime.genres.map(genre => 
      `<span class="anime-meta-item">${genre}</span>`
    ).join('');
    
    // Create Japanese staff HTML
    const japaneseStaffHtml = anime.staffJapanese.map(staff => 
      `<div class="staff-item">${staff.name} - ${staff.role}</div>`
    ).join('');
    
    // Create Russian staff HTML
    const russianStaffHtml = anime.staffRussian.map(staff => 
      `<div class="staff-item"><a href="team.html?member=${staff.id}">${staff.name}</a> - ${staff.role}</div>`
    ).join('');
    
    // Create editors HTML
    const editorsHtml = anime.editors.map(editor => 
      `<div class="staff-item"><a href="team.html?member=${editor.id}">${editor.name}</a></div>`
    ).join('');
    
    animeDetailsContainer.innerHTML = `
      <div class="anime-header">
        <img src="${anime.image}" alt="${anime.title}" class="anime-poster">
        <div class="anime-info-container">
          <h1 class="anime-title">${anime.title}</h1>
          <div class="anime-rating-large">
            ${stars}
            <span class="rating-value">${anime.rating.toFixed(1)}</span>
          </div>
          <div class="anime-meta">
            <span class="anime-meta-item">${anime.year}</span>
            <span class="anime-meta-item">${anime.status}</span>
            <span class="anime-meta-item">${anime.episodes} ${getEpisodesText(anime.episodes)}</span>
            <span class="anime-meta-item">${anime.country}</span>
            ${genresHtml}
          </div>
          <div class="anime-actions">
            <button class="favorite-btn"><i class="fas fa-heart"></i> В избранное</button>
            <button class="share-btn"><i class="fas fa-share-alt"></i> Поделиться</button>
          </div>
          <p class="anime-description">${anime.description}</p>
        </div>
      </div>
      
      <h2 class="section-title">Информация</h2>
      <div class="anime-staff">
        <div class="staff-group">
          <h3 class="staff-group-title">Оригинальная озвучка</h3>
          <div class="staff-list">
            ${japaneseStaffHtml}
          </div>
        </div>
        
        <div class="staff-group">
          <h3 class="staff-group-title">Русская озвучка</h3>
          <div class="staff-list">
            ${russianStaffHtml}
          </div>
        </div>
        
        <div class="staff-group">
          <h3 class="staff-group-title">Монтаж</h3>
          <div class="staff-list">
            ${editorsHtml}
          </div>
        </div>
      </div>
      
      <h2 class="section-title">Смотреть онлайн</h2>
      <div class="anime-player">
        <iframe src="https://kodik.biz/serial/65104/e4fdc734fa57b9e99c366e0e5f5d647f/720p" allowfullscreen allow="autoplay *; fullscreen *"></iframe>
      </div>
      <div class="episode-tracking">
        <button id="mark-as-watched" class="mark-as-watched-btn">
          <i class="fas fa-check-circle"></i> Отметить как просмотренное
        </button>
      </div>
      <script>
        // Add event listener to mark episode as watched
        document.getElementById('mark-as-watched').addEventListener('click', function() {
          // Track achievement progress for watching an episode
          trackAchievementProgress('watch_episode');
          this.disabled = true;
          this.innerHTML = '<i class="fas fa-check-circle"></i> Просмотрено';
          this.classList.add('watched');
        });
      </script>
    `;
  }
  
  // Display related anime
  const relatedAnimeContainer = document.getElementById('related-anime');
  if (relatedAnimeContainer && anime.related) {
    if (anime.related.length === 0) {
      relatedAnimeContainer.innerHTML = '<p>Нет связанных релизов.</p>';
    } else {
      anime.related.forEach(related => {
        const relatedItem = document.createElement('div');
        relatedItem.className = 'related-anime-item';
        relatedItem.innerHTML = `
          <a href="anime.html?id=${related.id}">
            <img src="${related.image}" alt="${related.title}">
            <div class="related-anime-info">
              <div class="related-anime-title">${related.title}</div>
              <div class="related-anime-type">${related.type}</div>
            </div>
          </a>
        `;
        relatedAnimeContainer.appendChild(relatedItem);
      });
    }
  }
  
  // Display similar anime (we'll use other anime as similar for demo purposes)
  const similarAnimeContainer = document.getElementById('similar-anime');
  if (similarAnimeContainer) {
    // Filter out current anime and get max 4 items
    const similarAnime = animeData
      .filter(a => a.id !== anime.id)
      .slice(0, 4);
    
    if (similarAnime.length === 0) {
      similarAnimeContainer.innerHTML = '<p>Нет похожих аниме.</p>';
    } else {
      similarAnime.forEach(similar => {
        // Create stars based on rating
        let stars = '';
        const fullStars = Math.floor(similar.rating);
        const hasHalfStar = similar.rating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
          if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
          } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
          } else {
            stars += '<i class="far fa-star"></i>';
          }
        }
        
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
          <a href="anime.html?id=${similar.id}">
            <img src="${similar.image}" alt="${similar.title}">
            <div class="anime-info">
              <div class="anime-rating">
                ${stars}
                <span>${similar.rating.toFixed(1)}</span>
              </div>
              <div class="anime-title">${similar.title}</div>
              <div class="anime-details">
                <span>${similar.year}</span>
                <span>${similar.genres.slice(0, 2).join(', ')}</span>
                <span>${similar.episodes} ${getEpisodesText(similar.episodes)}</span>
              </div>
            </div>
          </a>
        `;
        similarAnimeContainer.appendChild(card);
      });
    }
  }
  
  // Display comments
  const commentsContainer = document.getElementById('comments-list');
  if (commentsContainer && anime.comments) {
    if (anime.comments.length === 0) {
      commentsContainer.innerHTML = '<p>Нет комментариев. Будьте первым!</p>';
    } else {
      anime.comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
          <div class="comment-header">
            <div class="comment-author">${comment.author}</div>
            <div class="comment-date">${comment.date}</div>
          </div>
          <div class="comment-content">${comment.content}</div>
        `;
        commentsContainer.appendChild(commentElement);
      });
    }
  }
  
  // Comment form functionality
  const commentTextarea = document.getElementById('comment-text');
  const postCommentButton = document.getElementById('post-comment-btn');
  
  if (commentTextarea && postCommentButton) {
    postCommentButton.addEventListener('click', function() {
      const commentText = commentTextarea.value.trim();
      
      if (!commentText) {
        alert('Пожалуйста, введите текст комментария.');
        return;
      }
      
      // In a real app, this would send the comment to the server
      // For now, we'll just add it to the UI
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.innerHTML = `
        <div class="comment-header">
          <div class="comment-author">Гость</div>
          <div class="comment-date">${formattedDate}</div>
        </div>
        <div class="comment-content">${commentText}</div>
      `;
      
      commentsContainer.prepend(newComment);
      commentTextarea.value = '';
      
      alert('Комментарий добавлен!');
    });
  }
  
  // Favorite button functionality
  const favoriteButton = document.querySelector('.favorite-btn');
  if (favoriteButton) {
    favoriteButton.addEventListener('click', function() {
      // In a real app, this would toggle favorite status in the database
      const isFavorite = this.innerHTML.includes('В избранное');
      this.innerHTML = isFavorite ? 
        '<i class="fas fa-heart"></i> В избранном' : 
        '<i class="fas fa-heart"></i> В избранное';
      
      // Track achievement progress
      if (isFavorite) {
        trackAchievementProgress('favorite_anime', 1);
        alert('Добавлено в избранное!');
      } else {
        alert('Удалено из избранного!');
      }
    });
  }
  
  // Achievement tracking function
  function trackAchievementProgress(type, value = 1) {
    // In a real app, this would update achievement progress in the database
    // For now, just show a notification if achievement is unlocked
    
    // Example achievement unlocking
    if (type === 'watch_episode') {
      // Check localStorage for watched episodes count
      const watchedEpisodes = parseInt(localStorage.getItem('watched_episodes') || '0') + value;
      localStorage.setItem('watched_episodes', watchedEpisodes.toString());
      
      // Check for achievements
      if (watchedEpisodes === 1) {
        showAchievementUnlocked('Первый шаг', 'Вы посмотрели первую серию!');
      } else if (watchedEpisodes === 10) {
        showAchievementUnlocked('Марафонец', 'Вы посмотрели 10 серий!');
      } else if (watchedEpisodes === 100) {
        showAchievementUnlocked('Отаку', 'Вы посмотрели 100 серий!');
      }
    } else if (type === 'rate_anime') {
      const ratedAnime = parseInt(localStorage.getItem('rated_anime') || '0') + value;
      localStorage.setItem('rated_anime', ratedAnime.toString());
      
      if (ratedAnime === 10) {
        showAchievementUnlocked('Кинокритик', 'Вы оценили 10 аниме!');
      }
    } else if (type === 'favorite_anime') {
      const favoritedAnime = parseInt(localStorage.getItem('favorited_anime') || '0') + value;
      localStorage.setItem('favorited_anime', favoritedAnime.toString());
      
      if (favoritedAnime === 5) {
        showAchievementUnlocked('Фанат', 'Вы добавили 5 аниме в избранное!');
      }
    } else if (type === 'view_character') {
      const viewedCharacters = parseInt(localStorage.getItem('viewed_characters') || '0') + value;
      localStorage.setItem('viewed_characters', viewedCharacters.toString());
      
      if (viewedCharacters === 5) {
        showAchievementUnlocked('Знакомство с героями', 'Вы познакомились с 5 персонажами!');
      } else if (viewedCharacters === 20) {
        showAchievementUnlocked('Коллекционер героев', 'Вы познакомились с 20 персонажами!');
      }
    }
  }
  
  // Show achievement unlocked notification
  function showAchievementUnlocked(title, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
      <div class="achievement-notification-icon">
        <i class="fas fa-trophy"></i>
      </div>
      <div class="achievement-notification-content">
        <div class="achievement-notification-title">Достижение разблокировано!</div>
        <div class="achievement-notification-name">${title}</div>
        <div class="achievement-notification-message">${message}</div>
      </div>
    `;
    
    // Add notification styles if not already present
    if (!document.getElementById('achievement-notification-styles')) {
      const style = document.createElement('style');
      style.id = 'achievement-notification-styles';
      style.textContent = `
        .achievement-notification {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          transform: translateY(100px);
          opacity: 0;
          transition: transform 0.5s ease, opacity 0.5s ease;
          max-width: 320px;
        }
        .achievement-notification.show {
          transform: translateY(0);
          opacity: 1;
        }
        .achievement-notification-icon {
          flex-shrink: 0;
          margin-right: 15px;
          width: 50px;
          height: 50px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .achievement-notification-icon i {
          font-size: 24px;
          color: white;
        }
        .achievement-notification-content {
          flex: 1;
        }
        .achievement-notification-title {
          font-size: 1rem;
          font-weight: bold;
          color: white;
          margin-bottom: 5px;
        }
        .achievement-notification-name {
          font-size: 1.1rem;
          font-weight: bold;
          color: white;
          margin-bottom: 5px;
        }
        .achievement-notification-message {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
        }
      `;
      document.head.appendChild(style);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  }
  
  // Share button functionality
  const shareButton = document.querySelector('.share-btn');
  if (shareButton) {
    shareButton.addEventListener('click', function() {
      // In a real app, this would use the Web Share API or provide sharing options
      const shareUrl = window.location.href;
      
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Ссылка скопирована в буфер обмена!');
      }).catch(err => {
        console.error('Не удалось скопировать ссылку: ', err);
        prompt('Скопируйте ссылку вручную:', shareUrl);
      });
    });
  }
});

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
