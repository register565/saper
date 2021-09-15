button.addEventListener('click', buttonPressed);

const button2 = document.querySelector('#pressMe2');
const secretBlock2 = document.querySelector('#secretBloc2');
function button2Pressed() {
    button2.classList.add('hidden');
    secretBlock2.classList.remove('hidden');
}

button2.addEventListener('click2', button2Pressed);

const button3 = document.querySelector('#pressMe3');
const secretBlock3 = document.querySelector('#secretBloc3');
function button3Pressed() {
    button3.classList.add('hidden');
    secretBlock3.classList.remove('hidden');
}

button3.addEventListener('click3', button3Pressed);

const button4 = document.querySelector('#pressMe4');
const secretBlock3 = document.querySelector('#secretBloc4');
function button4Pressed() {
    button4.classList.add('hidden');
    secretBlock3.classList.remove('hidden');
}

button4.addEventListener('click4', button4Pressed);