document.addEventListener('DOMContentLoaded', function() {
    const userInfoInputs = document.querySelectorAll('.user-info input');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Profile';
    editButton.id = 'edit-profile-button';
    document.querySelector('.user-info').appendChild(editButton);

    let isEditing = false;

    editButton.addEventListener('click', function() {
        if (isEditing) {
            // Save changes
            editButton.textContent = 'Edit Profile';
            userInfoInputs.forEach(input => {
                input.disabled = true;
                input.classList.remove('editing');
            });
            isEditing = false;
            // Here you would typically send the updated data to a server
            console.log('Profile updated:', getProfileData());
        } else {
            // Enable editing
            editButton.textContent = 'Save Changes';
            userInfoInputs.forEach(input => {
                input.disabled = false;
                input.classList.add('editing');
            });
            isEditing = true;
        }
    });

    function getProfileData() {
        const profileData = {};
        userInfoInputs.forEach(input => {
            profileData[input.name] = input.value;
        });
        return profileData;
    }

    // Logout functionality
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would typically handle the logout process
        console.log('User logged out');
        // Redirect to login page or home page after logout
        // window.location.href = 'login.html';
    });

    // Function to load events
    function loadEvents(sectionId, events) {
        const section = document.getElementById(sectionId);
        const eventsList = document.createElement('ul');
        events.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = event.name;
            eventsList.appendChild(eventItem);
        });
        section.appendChild(eventsList);
    }

    // Load placeholder events (replace with actual data fetching in a real application)
    loadEvents('wishlist', [
        { name: 'Tech Conference 2024' },
        { name: 'Web Development Workshop' }
    ]);
    loadEvents('recommendations', [
        { name: 'AI Symposium' },
        { name: 'Data Science Bootcamp' }
    ]);
    loadEvents('ongoing-events', [
        { name: 'Hackathon 2024' },
        { name: 'Startup Pitch Competition' }
    ]);
    loadEvents('past-events', [
        { name: 'JavaScript Meetup' },
        { name: 'UX Design Seminar' }
    ]);
});