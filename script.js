

for (let i = 1; i < 6; i++) {
    const h3 = document.createElement('h3');
    const body = document.querySelector('body');
    body.appendChild(h3);
    h3.innerText = `Rad ${i}`;
    h3.style.textAlign = 'center';
    const size = (i + 2) * 7; 
    h3.style.fontSize = `${size}px`;
    h3.style.color = 'purple';
    const color = 165;
    const saturation = 40 * i; 
    h3.style.backgroundColor = `hsl(${color}, ${saturation}%, 80%)`;
    const margin = i+0.5;
    h3.style.marginTop = `${margin}px`;
}

const container = document.createElement('div'); 
const body = document.querySelector('body');
body.appendChild(container); 
container.style.border = 'black solid 2px';
container.style.padding = '50px';
container.style.display ='flex';
container.style.justifyContent = 'space-evenly';

const box1 = document.createElement('div');
container.appendChild(box1);
box1.style.border = 'purple solid 7px';
box1.style.width = '50px';
box1.style.height = 'auto';

const box2 = document.createElement('div'); 
container.appendChild(box2); 
box2.style.border = 'purple solid 7px';
box2.style.width = '50px';
box2.style.height = 'auto';

const box3 = document.createElement('div'); 
container.appendChild(box3); 
box3.style.border = 'purple solid 7px';
box3.style.width = '50px';
box3.style.height = 'auto';

const firstUl = document.createElement('ul');

box1.appendChild(firstUl); 

for(let i = 0; i < 10; i++) {

    const li1 = document.createElement('li');
    firstUl.appendChild(li1); 
    firstUl.style.display = 'flex';
    firstUl.style.flexDirection = 'column';
    firstUl.style.alignItems = 'flex-end';
    firstUl.style.marginBlockStart = '0em';
    firstUl.style.marginBlockEnd = '0em';
    firstUl.style.paddingInlineStart = '0px';
    li1.innerText = i; 
    li1.style.listStyle = 'none'; 
    li1.style.width = '50px';
    li1.style.backgroundColor = 'white'; 
    li1.style.color = 'white';
    li1.style.borderColor = 'purple';
    
    if (i === 4) {
        li1.style.backgroundColor = 'purple'; 
    } else if (i%2 == 0) {
        li1.style.backgroundColor = 'black';
    } else if (i%2 !== 0){
        li1.style.color = 'black'; 
    }
}


const secUl = document.createElement('ul');
box2.appendChild(secUl); 

for(let i = 9; i > -1; i--) {

    const li2 = document.createElement('li');
    secUl.appendChild(li2); 
    secUl.style.display = 'flex';
    secUl.style.flexDirection = 'column';
    secUl.style.alignItems = 'flex-end';
    secUl.style.textAlign = 'center';
    secUl.style.marginBlockStart = '0em';
    secUl.style.marginBlockEnd = '0em';
    secUl.style.paddingInlineStart = '0px';


    li2.innerText = i; 
    li2.style.listStyle = 'none'; 
    li2.style.width = '50px';
    //li2.style.backgroundColor = 'white'; 
    li2.style.color = 'white';
    li2.style.borderColor = 'purple'; 
    
    if (i === 8) {
        li2.style.backgroundColor = 'purple'; 
    } else if (i%2 == 0) {
        li2.style.backgroundColor = 'black';
    } else if (i%2 !== 0){
        li2.style.color = 'black'; 
    }


}


const thrdUl = document.createElement('ul');
box3.appendChild(thrdUl); 
const myArray = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']

for(let i = 0; i < myArray.length; i++) {

    const li3 = document.createElement('li');
    thrdUl.appendChild(li3); 
    thrdUl.style.display = 'flex';
    thrdUl.style.flexDirection = 'column';
    thrdUl.style.alignItems = 'flex-end';
    thrdUl.style.textAlign = 'right';
    thrdUl.style.marginBlockStart = '0em';
    thrdUl.style.marginBlockEnd = '0em';
    thrdUl.style.paddingInlineStart = '0px';

    li3.innerText = myArray[i]; 
    li3.style.listStyle = 'none'; 
    li3.style.width = '50px';
    li3.style.backgroundColor = 'black'; 
    li3.style.color = 'white';

    if (myArray[i] === 'sex') {
        li3.style.backgroundColor = 'purple'; 
    } else if (myArray[i] === 'två') {
        li3.style.backgroundColor = "white"; 
        li3.style.color = 'black'; 
    } else if (myArray[i] === 'fyra') {
        li3.style.backgroundColor = "white"; 
        li3.style.color = 'black'; 
    } else if (myArray[i] === 'åtta') {
        li3.style.backgroundColor = "white"; 
        li3.style.color = 'black'; 
    } else if (myArray[i] === 'tio') {
        li3.style.backgroundColor = "white"; 
        li3.style.color = 'black'; 
    }

}

