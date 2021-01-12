const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
left.addEventListener('mouseenter',() => container.classList.add('hoverOnLeft') )
left.addEventListener('mouseleave',() => container.classList.remove('hoverOnLeft') )
right.addEventListener('mouseenter',() => container.classList.add('hoverOnRight') )
right.addEventListener('mouseleave',() => container.classList.remove('hoverOnRight') )