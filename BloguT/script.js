if (!localStorage.getItem('greetingDisplayed')) {

    alert('Mirë se erdhët në blogun tonë!');


    localStorage.setItem('greetingDisplayed', 'true');
}

const toggleThemeButton = document.getElementById('toggle-theme');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}


toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');


    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});