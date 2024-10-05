document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.getElementById('studentBtn');
    const hostBtn = document.getElementById('hostBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const studentSignupForm = document.getElementById('studentSignupForm');
    const hostSignupForm = document.getElementById('hostSignupForm');

    if (studentBtn || hostBtn) {
        studentBtn.addEventListener('click', () => {
            localStorage.setItem('userType', 'student');
            window.location.href = 'signup_login.html';
        });

        hostBtn.addEventListener('click', () => {
            localStorage.setItem('userType', 'host');
            window.location.href = 'signup_login.html';
        });
    }

    if (signupBtn || loginBtn) {
        signupBtn.addEventListener('click', () => {
            const userType = localStorage.getItem('userType');
            if (userType === 'student') {
                window.location.href = 'student/student_signup.html';
            } else if (userType === 'host') {
                window.location.href = 'host/host_signup.html';
            }
        });

        loginBtn.addEventListener('click', () => {
            const userType = localStorage.getItem('userType');
            if (userType === 'student') {
                if (signupBtn){
                    window.location.href = 'student/student_signup.html';
                }
                if (loginBtn){
                    window.location.href = 'student/student_login.html';
                }
            } else if (userType === 'host') {
                if (signupBtn){
                    window.location.href = 'host/host_signup.html';
                }
                if (loginBtn){
                    window.location.href = 'host/host_login.html';
                }
            }
            console.log('Login clicked');
        });
    }

    if (studentSignupForm) {
        studentSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement student signup logic here
            console.log('Student signup submitted');
        });
    }

    if (hostSignupForm) {
        hostSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement host signup logic here
            console.log('Host signup submitted');
        });
    }
});