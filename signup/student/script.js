document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.getElementById('studentBtn');
    const hostBtn = document.getElementById('hostBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const studentSignupForm = document.getElementById('studentSignupForm');
    const hostSignupForm = document.getElementById('hostSignupForm');
    const studentLoginForm = document.getElementById('studentLoginForm');
    const hostLoginForm = document.getElementById('hostLoginForm');

    if (studentBtn && hostBtn) {
        studentBtn.addEventListener('click', () => {
            localStorage.setItem('userType', 'student');
            window.location.href = 'signup-login.html';
        });

        hostBtn.addEventListener('click', () => {
            localStorage.setItem('userType', 'host');
            window.location.href = 'signup-login.html';
        });
    }

    if (signupBtn && loginBtn) {
        signupBtn.addEventListener('click', () => {
            const userType = localStorage.getItem('userType');
            if (userType === 'student') {
                window.location.href = 'student-signup.html';
            } else if (userType === 'host') {
                window.location.href = 'host-signup.html';
            }
        });

        loginBtn.addEventListener('click', () => {
            const userType = localStorage.getItem('userType');
            if (userType === 'student') {
                window.location.href = 'student-login.html';
            } else if (userType === 'host') {
                window.location.href = 'host-login.html';
            }
        });
    }

    if (studentSignupForm) {
        studentSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.elements.name.value;
            const age = e.target.elements.age.value;
            const school = e.target.elements.school.value;
            const stream = e.target.elements.stream.value;
            const grade = e.target.elements.grade.value;
            const freePaid = e.target.elements.freePaid.value;
            const location = e.target.elements.location.value;
            const category = e.target.elements.category.value;
            const interests = e.target.elements.interests.value;
            const password = e.target.elements.password.value;

            // In a real-world scenario, you would send this data to a server
            // For this example, we'll store it in localStorage
            const studentData = {
                name, age, school, stream, grade, freePaid, location, category, interests, password
            };
            localStorage.setItem('studentData', JSON.stringify(studentData));
            alert('Student signup successful!');
            window.location.href = 'student-login.html';
        });
    }

    if (hostSignupForm) {
        hostSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const eventName = e.target.elements.eventName.value;
            const organizerName = e.target.elements.organizerName.value;
            const eventLocation = e.target.elements.location.value;
            const pocName = e.target.elements.pocName.value;
            const pocPhone = e.target.elements.pocPhone.value;
            const pocEmail = e.target.elements.pocEmail.value;
            const pocDesignation = e.target.elements.pocDesignation.value;
            const freePaid = e.target.elements.freePaid.value;
            const location = e.target.elements.location.value;
            const category = e.target.elements.category.value;
            const interests = e.target.elements.interests.value;
            const regStartDate = e.target.elements.regStartDate.value;
            const regEndDate = e.target.elements.regEndDate.value;
            const duration = e.target.elements.duration.value;
            const eligibility = e.target.elements.eligibility.value;
            const prizeAmount = e.target.elements.prizeAmount.value;
            const stream = e.target.elements.stream.value;
            const description = e.target.elements.description.value;
            const password = e.target.elements.password.value;

            // In a real-world scenario, you would send this data to a server
            // For this example, we'll store it in localStorage
            const hostData = {
                eventName, organizerName, eventLocation, pocName, pocPhone, pocEmail, pocDesignation,
                freePaid, location, category, interests, regStartDate, regEndDate, duration,
                eligibility, prizeAmount, stream, description, password
            };
            localStorage.setItem('hostData', JSON.stringify(hostData));
            alert('Host signup successful!');
            window.location.href = 'host-login.html';
        });
    }

    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;

            // In a real-world scenario, you would validate these credentials against a server
            // For this example, we'll check against the data in localStorage
            const studentData = JSON.parse(localStorage.getItem('studentData'));
            if (studentData && studentData.password === password) {
                alert('Student login successful!');
                // Redirect to student dashboard or profile page
                window.location.href = 'student-profile.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    if (hostLoginForm) {
        hostLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;

            // In a real-world scenario, you would validate these credentials against a server
            // For this example, we'll check against the data in localStorage
            const hostData = JSON.parse(localStorage.getItem('hostData'));
            if (hostData && hostData.password === password) {
                alert('Host login successful!');
                // Redirect to host dashboard or profile page
                window.location.href = 'host-profile.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});