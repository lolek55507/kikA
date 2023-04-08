const squareA = document.getElementById('squareA');
const squareB = document.getElementById('squareB');
const squareC = document.getElementById('squareC');
const squareD = document.getElementById('squareD');
const squareE = document.getElementById('squareE');
const squareF = document.getElementById('squareF');
const squareG = document.getElementById('squareG');
const squareH = document.getElementById('squareH');
const squareI = document.getElementById('squareI');
const divs = document.querySelectorAll('div');
const audio = new Audio ('sound.mp3');
let num = 0;
function addA() {
    
    if (num == 0) {
        squareA.classList.add('elX');
        squareA.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareA.classList.add('elO');
        squareA.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addB() {
    
    if (num == 0) {
        squareB.classList.add('elX');
        squareB.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareB.classList.add('elO');
        squareB.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addC() {
    
    if (num == 0) {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareC.classList.add('elO');
        squareC.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addD() {
    
    if (num == 0) {
        squareD.classList.add('elX');
        squareD.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareD.classList.add('elO');
        squareD.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addE() {
    
    if (num == 0) {
        squareE.classList.add('elX');
        squareE.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareE.classList.add('elO');
        squareE.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addF() {
    
    if (num == 0) {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareF.classList.add('elO');
        squareF.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addG() {
    
    if (num == 0) {
        squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareG.classList.add('elO');
        squareG.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addH() {
    
    if (num == 0) {
        squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareH.classList.add('elO');
        squareH.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function addI() {
    
    if (num == 0) {
        squareI.classList.add('elX');
        squareI.classList.remove('elO');
        num++;
        console.log(num);
        audio.play();
    } else {
        squareI.classList.add('elO');
        squareI.classList.remove('elX');
        num--;
        console.log(num);
        audio.play();
    }
    
}
function clearingTheBoard () {
    squareA.classList.remove('elO');
    squareB.classList.remove('elO');
    squareC.classList.remove('elO');
    squareD.classList.remove('elO');
    squareE.classList.remove('elO');
    squareF.classList.remove('elO');
    squareG.classList.remove('elO');
    squareH.classList.remove('elO');
    squareI.classList.remove('elO');
    
    squareA.classList.remove('elX');
    squareB.classList.remove('elX');
    squareC.classList.remove('elX');
    squareD.classList.remove('elX');
    squareE.classList.remove('elX');
    squareF.classList.remove('elX');
    squareG.classList.remove('elX');
    squareH.classList.remove('elX');
    squareI.classList.remove('elX');
    
}
