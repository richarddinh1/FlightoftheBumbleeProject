let body = document.querySelector('body');
let button = document.querySelector('button');
let audio = document.querySelector('audio');

// Create a Clickable Event Listener
button.addEventListener('click', function(){
    audio.play();

    if (body.className == 'yellow') {
        body.className = 'black';
    } else{
        body.className = 'yellow';
    }
});

