        // Check if user is already logged in
        window.onload = function() {
            if (sessionStorage.getItem('username')) {
                window.location.href = '#';
            }
        };

        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (username && password) {
                // In a real application, you would validate against a server
                // For this example, we'll just save the username to session storage
                sessionStorage.setItem('username', username);
                window.location.href = 'news_or_message.html';
            } else {
                document.getElementById('message').innerText = 'please enter the user name and password';
            }
        }