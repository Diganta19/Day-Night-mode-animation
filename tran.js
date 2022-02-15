const moonPath = "M29 38C25 57 55.8823 74 36 74C16.1177 74 0 57.8823 0 38C0 18.1177 16.1177 0 36 0C55.8823 0 24.5 16.5 29 38Z";

const sunPath = "M73 36C73 55.8823 56.6584 72 36.5 72C16.3416 72 0 55.8823 0 36C0 16.1177 16.3416 0 36.5 0C56.6584 0 73 16.1177 73 36Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

darkMode.addEventListener('click', () => {
    let animation = anime.timeline({
        duration: 750,
        easing: "easeOutExpo",
    });
    animation.add({
        targets: ".sun",
        d: [{ value: toggle ? sunPath : moonPath }],
    })
        .add({
            targets: '#darkMode',
            rotate: toggle ? -360 : 360
        },'-=350')
        .add({
            targets: "section",
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
             color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
        },'-=700');
    if (!toggle){
        toggle = true;
    } else {
        toggle = false;
    }
});