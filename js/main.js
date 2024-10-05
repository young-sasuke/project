document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = document.getElementById('search-term').value;
            const searchType = document.getElementById('search-type').value;
            const location = document.getElementById('location').value;

            // Simulated search results
            const results = [
                { title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA' },
                { title: 'Marketing Intern', company: 'StartupXYZ', location: 'New York, NY' },
                { title: 'Data Scientist', company: 'BigData Inc.', location: 'Boston, MA' }
            ];

            // Clear previous results
            searchResults.innerHTML = '';

            // Display search results
            results.forEach(result => {
                const card = document.createElement('div');
                card.className = 'opportunity-card';
                card.innerHTML = `
                    <h3>${result.title}</h3>
                    <p>${result.company}</p>
                    <p>${result.location}</p>
                    <a href="#" class="btn">Apply Now</a>
                `;
                searchResults.appendChild(card);
            });
        });
    }

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const filterSelects = document.querySelectorAll('.filter-select');

    filterSelects.forEach(select => {
        select.addEventListener('change', () => {
            console.log(`Filter changed: ${select.value}`);
            // Here you would typically implement the filtering logic
        });
    });

    const watchlistButtons = document.querySelectorAll('.btn-outline');

    watchlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                button.style.backgroundColor = '#3b82f6';
                button.style.color = '#fff';
            } else {
                button.style.backgroundColor = 'transparent';
                button.style.color = '#3b82f6';
            }
        });
    });

    const registerButtons = document.querySelectorAll('.btn-primary');

    registerButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Registration process initiated!');
            // Here you would typically implement the registration logic
        });
    });
});