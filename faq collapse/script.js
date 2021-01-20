const cards = document.querySelectorAll('.faq')
cards.forEach(card => card.addEventListener('click', () =>card.classList.toggle('active')))