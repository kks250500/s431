const square = document.getElementById('square');
const rB = [];
for (i = 0; i <= 7; i++) {
    rB[i] = document.getElementById('r' + i);
}
const cB = [];
for (i = 1; i <= 3; i++) {
    cB[i] = document.getElementById('c' + i);
}
const select = document.getElementById('select');
const bB = [];
for (i = 0; i <= 7; i++) {
    bB[i] = document.getElementById('b' + i);
}
const color = ['rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(255,255,0)', 'rgb(0,0,255)', 'rgb(255,0,255)', 'rgb(0,255,255)', 'rgb(255,255,255)'];

function load() { id = 0;
    square.style.background = color[id];
    rB[id].checked = true;
    cB[1].checked = true; cB[2].checked = true; cB[3].checked = true;
    select.selectedIndex = id;
    bB[id].disabled = true;
}

function rColor(event) {
    if (event.target.id === 'r0') { id = 0; cB[1].checked = true; cB[2].checked = true; cB[3].checked = true; }
    else if (event.target.id === 'r1') { id = 1; cB[1].checked = true; cB[2].checked = false; cB[3].checked = false; }
    else if (event.target.id === 'r2') { id = 2; cB[1].checked = false; cB[2].checked = true; cB[3].checked = false; }
    else if (event.target.id === 'r3') { id = 3; cB[1].checked = true; cB[2].checked = true; cB[3].checked = false; }
    else if (event.target.id === 'r4') { id = 4; cB[1].checked = false; cB[2].checked = false; cB[3].checked = true; }
    else if (event.target.id === 'r5') { id = 5; cB[1].checked = true; cB[2].checked = false; cB[3].checked = true; }
    else if (event.target.id === 'r6') { id = 6; cB[1].checked = false; cB[2].checked = true; cB[3].checked = true; }
    else if (event.target.id === 'r7') { id = 7; cB[1].checked = false; cB[2].checked = false; cB[3].checked = false; }
    square.style.background = color[id];
    select.selectedIndex = id;
    for (i = 0; i <= 7; i++) {
        bB[i].disabled = false;
    }
    bB[id].disabled = true;
}

function cColor() {
    if (cB[1].checked === true && cB[2].checked === true && cB[3].checked === true) { id = 0; }
    else if (cB[1].checked === true && cB[2].checked === true) { id = 3; }
    else if (cB[2].checked === true && cB[3].checked === true) { id = 6; }
    else if (cB[1].checked === true && cB[3].checked === true) { id = 5; }
    else if (cB[1].checked === true) { id = 1; }
    else if (cB[2].checked === true) { id = 2; }
    else if (cB[3].checked === true) { id = 4; }
    else if (cB[1].checked === false && cB[2].checked === false && cB[3].checked === false) { id = 7; }
    square.style.background = color[id];
    rB[id].checked = true;
    select.selectedIndex = id;
    for (i = 0; i <= 7; i++) {
        bB[i].disabled = false;
    }
    bB[id].disabled = true;
}

function sColor() {
    id = select.selectedIndex;
    square.style.background = color[id];
    rB[id].checked = true;
    select.selectedIndex = id;
    for (i = 0; i <= 7; i++) {
        bB[i].disabled = false;
    }
    bB[id].disabled = true;
    if (id === 0) { cB[1].checked = true; cB[2].checked = true; cB[3].checked = true; }
    else if (id === 1) { cB[1].checked = true; cB[2].checked = false; cB[3].checked = false; }
    else if (id === 2) { cB[1].checked = false; cB[2].checked = true; cB[3].checked = false; }
    else if (id === 3) { cB[1].checked = true; cB[2].checked = true; cB[3].checked = false; }
    else if (id === 4) { cB[1].checked = false; cB[2].checked = false; cB[3].checked = true; }
    else if (id === 5) { cB[1].checked = true; cB[2].checked = false; cB[3].checked = true; }
    else if (id === 6) { cB[1].checked = false; cB[2].checked = true; cB[3].checked = true; }
    else if (id === 7) { cB[1].checked = false; cB[2].checked = false; cB[3].checked = false; }
}

function bColor(event) {
    if (event.target.id === 'b0') { id = 0; cB[1].checked = true; cB[2].checked = true; cB[3].checked = true; }
    else if (event.target.id === 'b1') { id = 1; cB[1].checked = true; cB[2].checked = false; cB[3].checked = false; }
    else if (event.target.id === 'b2') { id = 2; cB[1].checked = false; cB[2].checked = true; cB[3].checked = false; }
    else if (event.target.id === 'b3') { id = 3; cB[1].checked = true; cB[2].checked = true; cB[3].checked = false; }
    else if (event.target.id === 'b4') { id = 4; cB[1].checked = false; cB[2].checked = false; cB[3].checked = true; }
    else if (event.target.id === 'b5') { id = 5; cB[1].checked = true; cB[2].checked = false; cB[3].checked = true; }
    else if (event.target.id === 'b6') { id = 6; cB[1].checked = false; cB[2].checked = true; cB[3].checked = true; }
    else if (event.target.id === 'b7') { id = 7; cB[1].checked = false; cB[2].checked = false; cB[3].checked = false; }
    square.style.background = color[id];
    rB[id].checked = true;
    select.selectedIndex = id;
    for (i = 0; i <= 7; i++) {
        bB[i].disabled = false;
    }
    bB[id].disabled = true;
}