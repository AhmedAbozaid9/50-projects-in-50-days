const filled = document.querySelector('.filled')
const boxes = document.querySelectorAll('.box')
let currentBox = boxes[0]
filled.addEventListener('dragstart',() => {
    filled.classList.add('held')
    setTimeout(()=>filled.parentNode.removeChild(filled),10)
})
filled.addEventListener('dragend',(e) => {
    e.target.classList.remove('hovered')
    currentBox.appendChild(filled)
    filled.classList.remove('held')
})

boxes.forEach(box => {
    box.addEventListener('dragover',(e) => {
        currentBox = e.target
        
    })
    box.addEventListener('dragenter',(e) => {
        e.target.className += ' hovered'
    })
    box.addEventListener('dragleave',(e) => {
        e.target.classList.remove('hovered')
    })
})
