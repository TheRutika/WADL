function toggleForms() {
            document.getElementById('signInForm').style.display = document.getElementById('signInForm').style.display === 'none' ? 'block' : 'none';
            document.getElementById('signUpForm').style.display = document.getElementById('signUpForm').style.display === 'none' ? 'block' : 'none';
        }

        // Sign In AJAX
        $('#signIn').submit(function(e) {
            e.preventDefault();  // Prevent form from submitting normally
            let email = $('#signInEmail').val();
            let password = $('#signInPassword').val();

            // Simple validation
            if (email === '' || password === '') {
                alert('Please fill in both fields');
                return;
            }

            // AJAX request
            $.ajax({
                url: '/signIn', // Replace with your server endpoint
                type: 'POST',
                data: { email: email, password: password },
                success: function(response) {
                    if (response.success) {
                        alert('Sign In successful');
                    } else {
                        alert('Invalid credentials');
                    }
                },
                error: function() {
                    alert('An error occurred, please try again');
                }
            });
        });

        // Sign Up AJAX
        $('#signUp').submit(function(e) {
            e.preventDefault();  // Prevent form from submitting normally
            let email = $('#signUpEmail').val();
            let password = $('#signUpPassword').val();
            let confirmPassword = $('#confirmPassword').val();

            // Simple validation
            if (email === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // AJAX request
            $.ajax({
                url: '/signUp', // Replace with your server endpoint
                type: 'POST',
                data: { email: email, password: password },
                success: function(response) {
                    if (response.success) {
                        alert('Sign Up successful');
                        toggleForms();
                    } else {
                        alert('An error occurred');
                    }
                },
                error: function() {
                    alert('An error occurred, please try again');
                }
            });
        });