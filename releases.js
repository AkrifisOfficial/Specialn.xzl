
document.addEventListener('DOMContentLoaded', function() {
  // Get type from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const typeParam = urlParams.get('type');
  
  // Set the title based on the type
  const titleElement = document.getElementById('release-title');
  if (titleElement) {
    switch(typeParam) {
      case 'serial':
        titleElement.textContent = 'Сериалы';
        break;
      case 'film':
        titleElement.textContent = 'Фильмы';
        break;
      case 'ova':
        titleElement.textContent = 'OVA';
        break;
      case 'ona':
        titleElement.textContent = 'ONA';
        break;
      default:
        titleElement.textContent = 'Все релизы';
    }
  }
  
  // Sample data for releases (would normally come from a database)
  const allReleases = [
    {
      id: 1,
      title: "Атака титанов",
      image: "https://via.placeholder.com/200x280?text=Attack+on+Titan",
      rating: 4.8,
      year: 2013,
      genre: "Экшен, Драма",
      episodes: 75,
      type: "serial"
    },
    {
      id: 2,
      title: "Клинок, рассекающий демонов",
      image: "https://via.placeholder.com/200x280?text=Demon+Slayer",
      rating: 4.7,
      year: 2019,
      genre: "Экшен, Сверхъестественное",
      episodes: 26,
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
    },
    {
      id: 7,
      title: "Наруто",
      image: "https://via.placeholder.com/200x280?text=Naruto",
      rating: 4.6,
      year: 2002,
      genre: "Экшен, Приключения",
      episodes: 220,
      type: "serial"
    },
    {
      id: 8,
      title: "Врата Штейна",
      image: "https://via.placeholder.com/200x280?text=Steins+Gate",
      rating: 4.9,
      year: 2011,
      genre: "Научная фантастика, Триллер",
      episodes: 24,
      type: "serial"
    },
    {
      id: 9,
      title: "Унесённые призраками",
      image: "https://via.placeholder.com/200x280?text=Spirited+Away",
      rating: 4.8,
      year: 2001,
      genre: "Приключения, Фэнтези",
      episodes: 1,
      type: "film"
    },
    {
      id: 10,
      title: "Моя геройская академия",
      image: "https://via.placeholder.com/200x280?text=My+Hero+Academia",
      rating: 4.7,
      year: 2016,
      genre: "Экшен, Комедия",
      episodes: 113,
      type: "serial"
    },
    {
      id: 11,
      title: "Токийский гуль",
      image: "https://via.placeholder.com/200x280?text=Tokyo+Ghoul",
      rating: 4.5,
      year: 2014,
      genre: "Экшен, Ужасы",
      episodes: 12,
      type: "serial"
    },
    {
      id: 12,
      title: "Дневник будущего",
      image: "https://via.placeholder.com/200x280?text=Future+Diary",
      rating: 4.3,
      year: 2011,
      genre: "Экшен, Триллер",
      episodes: 26,
      type: "serial"
    }
  ];
  
  // Filter the releases based on the type
  let filteredReleases = allReleases;
  if (typeParam) {
    filteredReleases = allReleases.filter(anime => anime.type === typeParam);
  }
  
  // Get filter elements
  const sortFilter = document.getElementById('sort-filter');
  const genreFilter = document.getElementById('genre-filter');
  const yearFilter = document.getElementById('year-filter');
  const releasesGrid = document.getElementById('releases-grid');
  
  // Pagination elements
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');
  
  // Pagination variables
  const itemsPerPage = 8;
  let currentPage = 1;
  let totalPages = Math.ceil(filteredReleases.length / itemsPerPage);
  
  // Update pagination info
  function updatePaginationInfo() {
    if (pageInfo) {
      pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
    }
    
    if (prevPageBtn) {
      prevPageBtn.disabled = currentPage === 1;
    }
    
    if (nextPageBtn) {
      nextPageBtn.disabled = currentPage === totalPages;
    }
  }
  
  // Apply filters and update display
  function applyFilters() {
    // Start with type filter which is from URL
    let results = allReleases;
    if (typeParam) {
      results = results.filter(anime => anime.type === typeParam);
    }
    
    // Apply genre filter if selected
    const genreValue = genreFilter.value;
    if (genreValue !== 'all') {
      // This is simplified - in real application you'd have proper genre mapping
      results = results.filter(anime => anime.genre.toLowerCase().includes(genreValue));
    }
    
    // Apply year filter if selected
    const yearValue = yearFilter.value;
    if (yearValue !== 'all') {
      if (yearValue === 'older') {
        results = results.filter(anime => anime.year < 2019);
      } else {
        results = results.filter(anime => anime.year === parseInt(yearValue));
      }
    }
    
    // Apply sorting
    const sortValue = sortFilter.value;
    switch (sortValue) {
      case 'newest':
        results.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        results.sort((a, b) => a.year - b.year);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    // Update the filtered results
    filteredReleases = results;
    
    // Reset to first page when filters change
    currentPage = 1;
    totalPages = Math.ceil(filteredReleases.length / itemsPerPage);
    
    // Update display
    displayReleases();
    updatePaginationInfo();
  }
  
  // Display releases with pagination
  function displayReleases() {
    if (!releasesGrid) return;
    
    // Clear existing content
    releasesGrid.innerHTML = '';
    
    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredReleases.length);
    
    // Get current page items
    const currentItems = filteredReleases.slice(startIndex, endIndex);
    
    // Display items
    if (currentItems.length === 0) {
      releasesGrid.innerHTML = '<p class="no-results">Нет результатов, соответствующих вашим фильтрам.</p>';
      return;
    }
    
    currentItems.forEach(anime => {
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
      
      releasesGrid.appendChild(card);
    });
  }
  
  // Initialize page
  updatePaginationInfo();
  displayReleases();
  
  // Event listeners for filters
  if (sortFilter) {
    sortFilter.addEventListener('change', applyFilters);
  }
  
  if (genreFilter) {
    genreFilter.addEventListener('change', applyFilters);
  }
  
  if (yearFilter) {
    yearFilter.addEventListener('change', applyFilters);
  }
  
  // Event listeners for pagination
  if (prevPageBtn) {
    prevPageBtn.addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        displayReleases();
        updatePaginationInfo();
        window.scrollTo(0, 0);
      }
    });
  }
  
  if (nextPageBtn) {
    nextPageBtn.addEventListener('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        displayReleases();
        updatePaginationInfo();
        window.scrollTo(0, 0);
      }
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
