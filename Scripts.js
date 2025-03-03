document.querySelectorAll('.language-dropdown a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let selectedLang = this.getAttribute('data-lang');
        document.querySelector('.language-btn').innerText = this.innerText + ' ▼';
        alert('Language changed to: ' + this.innerText);
    });
});
