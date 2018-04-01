
const $obj = document.querySelector('#console object')
const colors = [
    {top :  '#ffed72',bottom : '#eede66',},
    {top : '#8bc34a',bottom : '#659036', },
    {top : '#f44336',bottom : '#c93429',}
]

const $kirk = document.getElementById('kirk')
const $spock = document.getElementById('spock')
const $mccoy = document.getElementById('mccoy')
const $crew = document.getElementById('crew')

function pickFromArray(array){
    const index = Math.floor(Math.random()* array.length);
    return array[index];
}

$spock.addEventListener('click',function(){
    const sounds = [
        new Audio("sounds/Spock_Livelong.mp3"),
        new Audio("sounds/SpockIllogical.mp3"),
        new Audio("sounds/SpockFascinating.mp3"),
        ];
    const sound = sounds[Math.floor(Math.random()*sounds.length)];
    sound.play();
},false);

$kirk.addEventListener('click',function(){
    const sounds = [
        new Audio("sounds/kirkRevolutionary.mp3"),
        new Audio("sounds/kirkHere.mp3"),
        new Audio("sounds/kirkComputer.mp3"),
        ];
    const sound = sounds[Math.floor(Math.random()*sounds.length)];
    sound.play();
},false);

$mccoy.addEventListener('click',function(){
    const sounds = [
        new Audio("sounds/mccoy07.mp3"),
        new Audio("sounds/mccoy08.mp3"),
        new Audio("sounds/mccoy10.mp3"),
        ];
    const sound = sounds[Math.floor(Math.random()*sounds.length)];
    sound.play();
},false);

$obj.addEventListener('load', function(){
    const $energise = document.getElementById('pulse')
    const $buttons = $obj.contentDocument.querySelectorAll('*[id^="button_"]')
    Array.prototype.random = function (length) {
        return this[Math.floor((Math.random()*length))];
    }

    $energise.addEventListener('click', function(e){
        e.preventDefault();
        $crew.classList.toggle('fadeinout')
        const sound = new Audio("sounds/TransporterPad.mp3");
        sound.play(); 

        const interval = setInterval(function(){
            for (const $button of $buttons){
                let $paths = $button.querySelectorAll('path'); 
                let pickedcolors = pickFromArray(colors);
                $paths[0].style.fill = pickedcolors.top;
                $paths[1].style.fill = pickedcolors.bottom;
            }
        },500);

        $crew.addEventListener('transitionend', function(){
            clearInterval(interval);
        }, false);

    },false);

},false);


