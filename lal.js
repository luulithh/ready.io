const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('user');
if (userName) {
    document.getElementById('welcome-message').textContent = `Добро пожаловать, ${userName}!`;
}
