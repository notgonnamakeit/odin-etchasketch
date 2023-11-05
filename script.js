const container=document.querySelector('.container');
console.log('hello');
let gridSize=16;
let totalWidth=600;

function generateGrid(size) {
    for(let i=0;i<size;i++) {
        let newRow=document.createElement('div');
        newRow.classList.add(`row`);
        newRow.classList.add(`row-${i%size}`);
        for(let ii=0;ii<size;ii++) {
            let newSquare=document.createElement('div');
            newSquare.classList.add(`square`);
            newSquare.classList.add(`col-${ii}`);
            newSquare.style.width=`${Math.round(totalWidth/gridSize)}px`;
            newSquare.style.height=`${Math.round(totalWidth/gridSize)}px`;

            if(i==0) newSquare.style.borderLeft='1px solid grey';
            if(ii==0) newSquare.style.borderTop='1px solid grey';
            if(i==size-1) newSquare.style.borderRight='1px solid grey';
            if(ii==size-1) newSquare.style.borderBottom='1px solid grey';
            

            newRow.appendChild(newSquare);
        };
        container.appendChild(newRow); 
    }
    const allSquares=document.querySelectorAll('.square');
    allSquares.forEach((square) => 
        square.addEventListener('mouseover', (e) => {
            square.classList.add('hit');
            //square.style.background=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            square.style.background='black';
            square.style.opacity=`${square.style.opacity*1 +0.1}`;
        })
    );    
};

const btnReset=document.getElementById('btn-reset');
btnReset.addEventListener('click', () => {
    let newSize=prompt('New grid size?');
    console.log(newSize);
    newSize=newSize*1;
    console.log(newSize);
    if(isNaN(newSize)) {
        alert('invalid number, keeping old grid size');
        newSize=gridSize;
    } else if(newSize>100) {
        alert('too large. 100 max. keeping old grid size');
        newSize=gridSize;
    } else if(newSize<2) {
        alert('come on...');
        newSize=gridSize;
    } else {
        gridSize=newSize;
    }

    while(container.firstChild) container.firstChild.remove();
    generateGrid(gridSize);
});

generateGrid(gridSize);


