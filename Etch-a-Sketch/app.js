createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        drawingArea.appendChild(div); 
    }
    };

createGrid();