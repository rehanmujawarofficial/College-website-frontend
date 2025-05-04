let isLoggedIn = false;
        
window.onload = function() {
    // Check if user is logged in
    const username = sessionStorage.getItem('username');
    
    if (username) {
        isLoggedIn = true;
        document.getElementById('usernameDisplay').innerText = username;
        document.getElementById('authButton').innerText = 'Logout';
        document.getElementById('authButton').className = 'logout-btn';
    } else {
        isLoggedIn = false;
        document.getElementById('usernameDisplay').innerText = 'Guest';
        document.getElementById('authButton').innerText = 'Login';
        document.getElementById('authButton').className = 'login-btn';
    }
    
    // Load saved text from local storage
    const savedText = localStorage.getItem('sharedText') || '';
    document.getElementById('sharedText').value = savedText;
    
    // Configure text area based on login status
    const textArea = document.getElementById('sharedText');
    const saveButton = document.getElementById('saveButton');
    
    if (!isLoggedIn) {
        textArea.readOnly = true;
        saveButton.disabled = true;
        document.getElementById('status').innerText = 'You are viewing as a guest. Please login to update the text.';
    }
};

function saveText() {
    if (!isLoggedIn) {
        alert('You need to log in to update the text.');
        return;
    }
    
    const text = document.getElementById('sharedText').value;
    localStorage.setItem('sharedText', text);
    document.getElementById('status').innerText = 'Text saved successfully!';
    
    // Clear status message after 3 seconds
    setTimeout(() => {
        document.getElementById('status').innerText = '';
    }, 3000);
}

function handleAuth() {
    if (isLoggedIn) {
        // Logout function
        sessionStorage.removeItem('username');
        window.location.reload();
    } else {
        // Login function
        window.location.href = 'login.html';
    }
}
