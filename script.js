function showSection(sectionId) {
    document.querySelectorAll('.bandit-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.bandit-nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleJoin(event) {
    event.preventDefault();
    const form = document.getElementById('joinForm');
    const success = document.getElementById('successMessage');
    form.style.display = 'none';
    success.classList.add('show');
}
