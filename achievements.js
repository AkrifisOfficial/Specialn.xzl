
document.addEventListener('DOMContentLoaded', function() {
  // Sample achievements data (would normally come from a database)
  const achievementsData = [
    // Watching achievements
    {
      id: 1,
      title: "Первый шаг",
      description: "Посмотреть первую серию любого аниме",
      icon: "fa-play-circle",
      category: "watching",
      progress: 100,
      max: 100,
      completed: true,
      completedDate: "2024-06-15",
      reward: "10 очков опыта",
      steps: [
        { text: "Посмотреть первую серию любого аниме", completed: true }
      ]
    },
    {
      id: 2,
      title: "Марафонец",
      description: "Посмотреть 10 серий аниме подряд",
      icon: "fa-forward",
      category: "watching",
      progress: 10,
      max: 10,
      completed: true,
      completedDate: "2024-06-20",
      reward: "50 очков опыта",
      steps: [
        { text: "Посмотреть 10 серий аниме подряд", completed: true }
      ]
    },
    {
      id: 3,
      title: "Отаку",
      description: "Посмотреть 100 серий аниме",
      icon: "fa-trophy",
      category: "watching",
      progress: 87,
      max: 100,
      completed: false,
      reward: "200 очков опыта",
      steps: [
        { text: "Посмотреть 100 серий аниме", completed: false }
      ]
    },
    {
      id: 4,
      title: "Кинокритик",
      description: "Оценить 10 аниме",
      icon: "fa-star",
      category: "watching",
      progress: 7,
      max: 10,
      completed: false,
      reward: "50 очков опыта",
      steps: [
        { text: "Оценить 10 аниме", completed: false }
      ]
    },
    
    // Character achievements
    {
      id: 5,
      title: "Знакомство с героями",
      description: "Познакомиться с 5 персонажами",
      icon: "fa-user-friends",
      category: "characters",
      progress: 5,
      max: 5,
      completed: true,
      completedDate: "2024-06-22",
      reward: "30 очков опыта",
      steps: [
        { text: "Просмотреть профили 5 персонажей", completed: true }
      ]
    },
    {
      id: 6,
      title: "Коллекционер героев",
      description: "Познакомиться с 20 персонажами из разных аниме",
      icon: "fa-users",
      category: "characters",
      progress: 12,
      max: 20,
      completed: false,
      reward: "100 очков опыта",
      steps: [
        { text: "Просмотреть профили 20 персонажей", completed: false }
      ]
    },
    {
      id: 7,
      title: "Знаток героев",
      description: "Узнать все детали о любимом персонаже",
      icon: "fa-user-check",
      category: "characters",
      progress: 1,
      max: 1,
      completed: true,
      completedDate: "2024-06-25",
      reward: "20 очков опыта",
      steps: [
        { text: "Просмотреть полную биографию персонажа", completed: true },
        { text: "Изучить способности персонажа", completed: true },
        { text: "Узнать интересные факты о персонаже", completed: true }
      ]
    },
    {
      id: 8,
      title: "Фанат",
      description: "Добавить 5 персонажей в избранное",
      icon: "fa-heart",
      category: "characters",
      progress: 3,
      max: 5,
      completed: false,
      reward: "40 очков опыта",
      steps: [
        { text: "Добавить 5 персонажей в избранное", completed: false }
      ]
    },
    
    // Quest achievements
    {
      id: 9,
      title: "Первое задание",
      description: "Выполнить первый квест",
      icon: "fa-tasks",
      category: "quests",
      progress: 1,
      max: 1,
      completed: true,
      completedDate: "2024-06-18",
      reward: "20 очков опыта",
      steps: [
        { text: "Выполнить любой квест", completed: true }
      ]
    },
    {
      id: 10,
      title: "Исследователь",
      description: "Выполнить 5 квестов разного типа",
      icon: "fa-map-marked-alt",
      category: "quests",
      progress: 3,
      max: 5,
      completed: false,
      reward: "80 очков опыта",
      steps: [
        { text: "Выполнить квест на просмотр", completed: true },
        { text: "Выполнить квест на комментирование", completed: true },
        { text: "Выполнить квест на оценку", completed: true },
        { text: "Выполнить квест на персонажей", completed: false },
        { text: "Выполнить ежедневный квест", completed: false }
      ]
    },
    {
      id: 11,
      title: "Охотник за квестами",
      description: "Выполнить 10 квестов",
      icon: "fa-award",
      category: "quests",
      progress: 6,
      max: 10,
      completed: false,
      reward: "150 очков опыта",
      steps: [
        { text: "Выполнить 10 квестов любого типа", completed: false }
      ]
    },
    {
      id: 12,
      title: "Эксперт по аниме",
      description: "Выполнить все квесты по одному аниме",
      icon: "fa-check-double",
      category: "quests",
      progress: 0,
      max: 100,
      completed: false,
      reward: "300 очков опыта",
      steps: [
        { text: "Выполнить все квесты, связанные с одним аниме", completed: false }
      ]
    }
  ];
  
  // Sample active quests data (would normally come from a database)
  const activeQuestsData = [
    {
      id: 1,
      title: "Марафон «Атака титанов»",
      description: "Посмотрите 5 серий «Атака титанов» за один день",
      icon: "fa-play-circle",
      difficulty: "easy",
      progress: 3,
      max: 5,
      remaining: "23:45:12", // Time remaining in format HH:MM:SS
      reward: "50 очков опыта"
    },
    {
      id: 2,
      title: "Знаток персонажей",
      description: "Изучите профили 3 главных персонажей из аниме «Клинок, рассекающий демонов»",
      icon: "fa-user-friends",
      difficulty: "medium",
      progress: 1,
      max: 3,
      remaining: "47:30:00", // Time remaining in format HH:MM:SS
      reward: "80 очков опыта"
    },
    {
      id: 3,
      title: "Критик",
      description: "Оставьте рецензии на 2 последних просмотренных аниме",
      icon: "fa-pen-fancy",
      difficulty: "hard",
      progress: 0,
      max: 2,
      remaining: "71:15:30", // Time remaining in format HH:MM:SS
      reward: "120 очков опыта + уникальный значок"
    }
  ];
  
  // Get necessary elements
  const achievementsContainer = document.getElementById('achievements-container');
  const activeQuestsContainer = document.getElementById('active-quests');
  const achievementsProgressBar = document.getElementById('achievements-progress-bar');
  const achievementsPercent = document.getElementById('achievements-percent');
  const tabButtons = document.querySelectorAll('.tab-button');
  const achievementModal = document.getElementById('achievement-modal');
  const closeModal = achievementModal.querySelector('.close');
  const achievementDetailContainer = document.getElementById('achievement-detail-container');
  
  // Display achievements
  function displayAchievements(category = 'all') {
    if (achievementsContainer) {
      achievementsContainer.innerHTML = '';
      
      const filteredAchievements = category === 'all' 
        ? achievementsData 
        : achievementsData.filter(a => a.category === category);
      
      if (filteredAchievements.length === 0) {
        achievementsContainer.innerHTML = '<p class="no-achievements">В данной категории пока нет достижений.</p>';
        return;
      }
      
      filteredAchievements.forEach(achievement => {
        const percent = Math.floor((achievement.progress / achievement.max) * 100);
        const achievementCard = document.createElement('div');
        achievementCard.className = `achievement-card ${achievement.completed ? 'completed' : 'locked'}`;
        achievementCard.dataset.id = achievement.id;
        
        achievementCard.innerHTML = `
          <div class="achievement-icon">
            <i class="fas ${achievement.icon}"></i>
          </div>
          <h3 class="achievement-title">${achievement.title}</h3>
          <p class="achievement-description">${achievement.description}</p>
          <div class="achievement-progress">
            <div class="achievement-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="achievement-progress-text">${achievement.progress}/${achievement.max}</div>
          ${achievement.completed ? `<div class="achievement-completed-date">Получено: ${formatDate(achievement.completedDate)}</div>` : ''}
        `;
        
        achievementsContainer.appendChild(achievementCard);
        
        // Add click event listener to show achievement details
        achievementCard.addEventListener('click', () => {
          showAchievementDetails(achievement);
        });
      });
    }
  }
  
  // Display active quests
  function displayActiveQuests() {
    if (activeQuestsContainer) {
      activeQuestsContainer.innerHTML = '';
      
      if (activeQuestsData.length === 0) {
        activeQuestsContainer.innerHTML = '<p class="no-quests">У вас нет активных квестов.</p>';
        return;
      }
      
      activeQuestsData.forEach(quest => {
        const percent = Math.floor((quest.progress / quest.max) * 100);
        const questCard = document.createElement('div');
        questCard.className = 'quest-card';
        
        questCard.innerHTML = `
          <div class="quest-timer">${quest.remaining}</div>
          <div class="quest-header">
            <div class="quest-icon">
              <i class="fas ${quest.icon}"></i>
            </div>
            <div class="quest-title-container">
              <h3 class="quest-title">${quest.title}</h3>
              <div class="quest-difficulty ${quest.difficulty}">
                ${getDifficultyText(quest.difficulty)}
              </div>
            </div>
          </div>
          <p class="quest-description">${quest.description}</p>
          <div class="quest-progress">
            <div class="quest-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="quest-progress-text">
            <span>Прогресс: ${quest.progress}/${quest.max}</span>
            <span>${percent}%</span>
          </div>
          <div class="quest-reward">
            <span class="quest-reward-label">Награда:</span>
            <span class="quest-reward-value">${quest.reward}</span>
          </div>
        `;
        
        activeQuestsContainer.appendChild(questCard);
      });
    }
  }
  
  // Show achievement details in modal
  function showAchievementDetails(achievement) {
    if (achievementDetailContainer) {
      const percent = Math.floor((achievement.progress / achievement.max) * 100);
      
      // Generate steps HTML
      let stepsHtml = '';
      if (achievement.steps && achievement.steps.length > 0) {
        stepsHtml = `
          <div class="achievement-detail-steps">
            ${achievement.steps.map(step => `
              <div class="achievement-detail-step ${step.completed ? 'completed' : ''}">
                <i class="fas ${step.completed ? 'fa-check-circle' : 'fa-circle'}"></i>
                <span class="achievement-detail-step-text">${step.text}</span>
              </div>
            `).join('')}
          </div>
        `;
      }
      
      achievementDetailContainer.innerHTML = `
        <div class="achievement-detail-icon">
          <i class="fas ${achievement.icon}"></i>
        </div>
        <h2 class="achievement-detail-title">${achievement.title}</h2>
        <p class="achievement-detail-description">${achievement.description}</p>
        <p class="achievement-detail-reward">Награда: ${achievement.reward}</p>
        <div class="achievement-detail-progress-container">
          <div class="progress-text">
            <span class="progress-label">Прогресс</span>
            <span class="progress-percent">${percent}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="achievement-progress-text">${achievement.progress}/${achievement.max}</div>
        </div>
        ${stepsHtml}
        ${achievement.completed ? `<div class="achievement-completed-date">Получено: ${formatDate(achievement.completedDate)}</div>` : ''}
      `;
      
      achievementModal.style.display = 'block';
    }
  }
  
  // Calculate and update overall achievement progress
  function updateAchievementProgress() {
    const totalAchievements = achievementsData.length;
    const completedAchievements = achievementsData.filter(a => a.completed).length;
    
    const percent = Math.floor((completedAchievements / totalAchievements) * 100);
    
    if (achievementsProgressBar) {
      achievementsProgressBar.style.width = `${percent}%`;
    }
    
    if (achievementsPercent) {
      achievementsPercent.textContent = `${percent}%`;
    }
  }
  
  // Tab buttons event listeners
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.dataset.category;
      displayAchievements(category);
    });
  });
  
  // Close modal event listener
  closeModal.addEventListener('click', function() {
    achievementModal.style.display = 'none';
  });
  
  // Close modal when clicking outside the content
  window.addEventListener('click', function(event) {
    if (event.target === achievementModal) {
      achievementModal.style.display = 'none';
    }
  });
  
  // Helper function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  }
  
  // Helper function to get difficulty text
  function getDifficultyText(difficulty) {
    switch(difficulty) {
      case 'easy':
        return 'Легкий';
      case 'medium':
        return 'Средний';
      case 'hard':
        return 'Сложный';
      default:
        return '';
    }
  }
  
  // Initialize page
  displayAchievements('all');
  displayActiveQuests();
  updateAchievementProgress();
  
  // Update active quest timers
  function updateQuestTimers() {
    const timerElements = document.querySelectorAll('.quest-timer');
    
    timerElements.forEach((timerElement, index) => {
      // In a real application, we would calculate the remaining time
      // For demo purposes, we'll just display the static time from the data
      timerElement.textContent = activeQuestsData[index].remaining;
    });
  }
  
  // Update timers every second (in a real app)
  // setInterval(updateQuestTimers, 1000);
});
