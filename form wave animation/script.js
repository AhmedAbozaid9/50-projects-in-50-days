let inputs = document.querySelectorAll('input');
let labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) =>
        `<span style="transition-delay:${50*idx}ms">${letter}</span>`
    )
    .join('')
});
labels.forEach((label,idx) => {
    label.addEventListener('click', () => inputs[idx].focus())
    
})
