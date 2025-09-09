
document.addEventListener('DOMContentLoaded', function() {
  // Sample data for team members (would normally come from a database)
  const teamMembers = [
    {
      id: 1,
      name: "Алексей",
      nickname: "xMeT1oRx",
      role: "Руководитель / Даббер",
      avatar: "https://via.placeholder.com/300x300?text=xMeT1oRx",
      department: "department1",
      bio: "Основатель студии AniCosmic, профессиональный актёр озвучивания с опытом более 5 лет. Специализируется на озвучке главных персонажей и антагонистов.",
      contacts: {
        telegram: "https://t.me/xMeT1oRx",
        vk: "https://vk.com/xmet1orx",
        youtube: "https://www.youtube.com/@xMeT1oRx"
      },
      animes: [
        { id: 1, title: "Атака титанов" },
        { id: 2, title: "Клинок, рассекающий демонов" },
        { id: 4, title: "Ван Пис" },
        { id: 7, title: "Наруто" }
      ]
    },
    {
      id: 2,
      name: "Мария",
      nickname: "Meri",
      role: "Даббер",
      avatar: "https://via.placeholder.com/300x300?text=Meri",
      department: "department1",
      bio: "Профессиональная актриса озвучивания, специализируется на женских персонажах. В команде с момента основания студии.",
      contacts: {
        telegram: "https://t.me/meri_anime",
        vk: "https://vk.com/meri_anime"
      },
      animes: [
        { id: 1, title: "Атака титанов" },
        { id: 2, title: "Клинок, рассекающий демонов" },
        { id: 8, title: "Врата Штейна" }
      ]
    },
    {
      id: 3,
      name: "Дмитрий",
      nickname: "Dimakoo",
      role: "Монтажёр",
      avatar: "https://via.placeholder.com/300x300?text=Dimakoo",
      department: "department1",
      bio: "Опытный монтажёр с музыкальным образованием. Отвечает за качество звука и финальный монтаж аниме-сериалов.",
      contacts: {
        telegram: "https://t.me/dimakoo",
        vk: "https://vk.com/dimakoo"
      },
      animes: [
        { id: 1, title: "Атака титанов" },
        { id: 4, title: "Ван Пис" },
        { id: 10, title: "Моя геройская академия" }
      ]
    },
    {
      id: 4,
      name: "Анна",
      nickname: "Anny",
      role: "Даббер",
      avatar: "https://via.placeholder.com/300x300?text=Anny",
      department: "department2",
      bio: "Опытная актриса озвучивания с театральным образованием. Специализируется на детских и подростковых персонажах.",
      contacts: {
        telegram: "https://t.me/anny_voice",
        youtube: "https://www.youtube.com/@anny_voice"
      },
      animes: [
        { id: 3, title: "Твоё имя" },
        { id: 9, title: "Унесённые призраками" },
        { id: 10, title: "Моя геройская академия" }
      ]
    },
    {
      id: 5,
      name: "Сергей",
      nickname: "VoiceMan",
      role: "Даббер",
      avatar: "https://via.placeholder.com/300x300?text=VoiceMan",
      department: "department2",
      bio: "Актёр озвучивания с низким выразительным голосом. Специализируется на озвучке взрослых и брутальных персонажей.",
      contacts: {
        telegram: "https://t.me/voiceman",
        vk: "https://vk.com/voiceman"
      },
      animes: [
        { id: 4, title: "Ван Пис" },
        { id: 11, title: "Токийский гуль" },
        { id: 12, title: "Дневник будущего" }
      ]
    },
    {
      id: 6,
      name: "Евгений",
      nickname: "SoundMaster",
      role: "Звукорежиссёр",
      avatar: "https://via.placeholder.com/300x300?text=SoundMaster",
      department: "department2",
      bio: "Профессиональный звукорежиссёр с опытом работы в музыкальной индустрии. Отвечает за качество звука, сведение и мастеринг.",
      contacts: {
        telegram: "https://t.me/soundmaster",
        youtube: "https://www.youtube.com/@soundmaster"
      },
      animes: [
        { id: 5, title: "Фейт: Начало" },
        { id: 6, title: "Ванпанчмен" },
        { id: 12, title: "Дневник будущего" }
      ]
    },
    {
      id: 7,
      name: "Ольга",
      nickname: "OlgaTranslate",
      role: "Переводчик",
      avatar: "https://via.placeholder.com/300x300?text=OlgaTranslate",
      department: "other",
      bio: "Дипломированный переводчик с японского языка. Отвечает за качественный и точный перевод аниме-сериалов и фильмов.",
      contacts: {
        telegram: "https://t.me/olgatranslate"
      },
      animes: [
        { id: 1, title: "Атака титанов" },
        { id: 2, title: "Клинок, рассекающий демонов" },
        { id: 3, title: "Твоё имя" },
        { id: 8, title: "Врата Штейна" }
      ]
    },
    {
      id: 8,
      name: "Игорь",
      nickname: "DesignMaster",
      role: "Дизайнер",
      avatar: "https://via.placeholder.com/300x300?text=DesignMaster",
      department: "other",
      bio: "Профессиональный графический дизайнер. Отвечает за создание обложек, баннеров и другой графики для проектов студии.",
      contacts: {
        telegram: "https://t.me/designmaster",
        vk: "https://vk.com/designmaster"
      },
      animes: []
    }
  ];
  
  const teamGrid = document.getElementById('team-members');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const memberModal = document.getElementById('member-modal');
  const memberDetails = document.getElementById('member-details');
  const closeModals = document.querySelectorAll('.close');

  // Display team members based on department
  function displayTeamMembers(department) {
    if (!teamGrid) return;
    
    // Clear existing content
    teamGrid.innerHTML = '';
    
    // Filter members by department
    const filteredMembers = teamMembers.filter(member => member.department === department);
    
    if (filteredMembers.length === 0) {
      teamGrid.innerHTML = '<p class="no-results">Нет участников в данном отделе.</p>';
      return;
    }
    
    // Display members
    filteredMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'team-member';
      memberCard.dataset.id = member.id;
      
      memberCard.innerHTML = `
        <img src="${member.avatar}" alt="${member.name}" class="member-avatar">
        <div class="member-info">
          <div class="member-name">${member.name} "${member.nickname}"</div>
          <div class="member-role">${member.role}</div>
          <div class="member-animes">Озвучено аниме: ${member.animes.length}</div>
        </div>
      `;
      
      teamGrid.appendChild(memberCard);
      
      // Add click event to show member details
      memberCard.addEventListener('click', function() {
        showMemberDetails(member.id);
      });
    });
  }
  
  // Show member details in modal
  function showMemberDetails(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    if (!member || !memberDetails) return;
    
    // Create contacts HTML
    let contactsHtml = '';
    if (member.contacts) {
      Object.entries(member.contacts).forEach(([platform, url]) => {
        let icon = '';
        switch(platform) {
          case 'telegram':
            icon = '<i class="fab fa-telegram"></i>';
            break;
          case 'vk':
            icon = '<i class="fab fa-vk"></i>';
            break;
          case 'youtube':
            icon = '<i class="fab fa-youtube"></i>';
            break;
          default:
            icon = '<i class="fas fa-link"></i>';
        }
        
        contactsHtml += `<a href="${url}" target="_blank">${icon} ${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`;
      });
    }
    
    // Create anime list HTML
    let animeListHtml = '';
    if (member.animes && member.animes.length > 0) {
      member.animes.forEach(anime => {
        animeListHtml += `
          <div class="member-anime">
            <a href="anime.html?id=${anime.id}">${anime.title}</a>
          </div>
        `;
      });
    } else {
      animeListHtml = '<p>Нет озвученных аниме.</p>';
    }
    
    // Set modal content
    memberDetails.innerHTML = `
      <div class="member-header">
        <img src="${member.avatar}" alt="${member.name}" class="member-avatar-large">
        <div class="member-header-info">
          <h2 class="member-name-large">${member.name} "${member.nickname}"</h2>
          <div class="member-role-large">${member.role}</div>
          <p class="member-bio">${member.bio}</p>
          <div class="member-contacts">${contactsHtml}</div>
        </div>
      </div>
      
      <h3 class="member-section-title">Озвученные аниме</h3>
      <div class="member-anime-list">${animeListHtml}</div>
    `;
    
    // Show modal
    memberModal.style.display = 'block';
  }
  
  // Tab button click event
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Display team members for selected department
      const department = this.dataset.department;
      displayTeamMembers(department);
    });
  });
  
  // Close modals
  closeModals.forEach(btn => {
    btn.addEventListener('click', function() {
      memberModal.style.display = 'none';
      document.getElementById('feedback-modal').style.display = 'none';
    });
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === memberModal) {
      memberModal.style.display = 'none';
    }
  });
  
  // Display first department team members on page load
  const activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    displayTeamMembers(activeTab.dataset.department);
  } else if (tabButtons.length > 0) {
    tabButtons[0].classList.add('active');
    displayTeamMembers(tabButtons[0].dataset.department);
  }
});
