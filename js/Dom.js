document.querySelectorAll('.py-12').forEach(function(card){
    
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    
    const randomColor = `rgb(${red},${green},${blue})`;

    card.addEventListener('mouseenter',function(){
        card.style.transition = '500ms'
        card.style.backgroundColor = randomColor;
    })
    card.addEventListener('mouseleave',function(){
        card.style.backgroundColor = 'white';
    })
})

const displayArea = document.getElementById('Display-Calculate-area')

// Triangle Calculate
document.getElementById('triangle-btn').addEventListener('click',function CalculateTriangleArea(){
    const base = getIdValue('triangle-base');
    const height = getIdValue('triangle-hight');
    const area = 0.5 * base * height;
    setArea('triangle-area',area)
    let newResult = document.createElement('li');
    newResult.innerText = `Triangle Area:${area} cm`;
    displayArea.appendChild(newResult)
})
// Rectangle Calculate
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const weight = getIdValue('rectangle-weight');
    const length = getIdValue('rectangle-length');
    const area = weight * length;
    setArea('rectangle-area',area)
    let newResult = document.createElement('li');
    newResult.innerText = `Rectangle Area:${area} cm`;
    displayArea.appendChild(newResult)
})
// Parallelogram Calculate
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const base = getIdValue('parallelogram-base');
    const height = getIdValue('parallelogram-height');
    const area = base * height;
    setArea('parallelogram-area',area);
    let newResult = document.createElement('li');
    newResult.innerText = `Parallelogram Area:${area} cm`;
    displayArea.appendChild(newResult)
})
// Rhombus Calculate
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const d1 = getIdValue('rhombus-d1');
    const d2 = getIdValue('rhombus-d2');
    const area = 0.5 * d1 * d2;
    setArea('rhombus-area',area)
    let newResult = document.createElement('li');
    newResult.innerText = `Rhombus Area:${area} cm`;
    displayArea.appendChild(newResult)
})
// Pentagon Calculate
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const p = getIdValue('pentagon-p');
    const b = getIdValue('pentagon-b');
    const area = 0.5 * p * b;
    setArea('pentagon-area',area);
    let newResult = document.createElement('li');
    newResult.innerText = `Pentagon Area:${area} cm`;
    displayArea.appendChild(newResult)
})
// Ellipse Calculate
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const a = getIdValue('ellipse-a');
    const b = getIdValue('ellipse-b');
    const area = Math.PI * a * b;
    setArea('ellipse-area',area)
    let newResult = document.createElement('li');
    newResult.innerText = `Ellipse Area:${area} cm`;
    displayArea.appendChild(newResult)
})


function getIdValue(inputFieldId){
   const inputField = document.getElementById(inputFieldId)
   const inputFieldValue = parseFloat(inputField.value)
   return inputFieldValue;
}

function setArea(elementId,area){
    const displayItems = document.getElementById(elementId);
    displayItems.innerText = area;
}