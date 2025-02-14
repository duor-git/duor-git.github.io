let volume = 0.5;
let audio;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {
            const track = ev.target.id;
            if (audio) { audio.pause(); }
            audio = new Audio(`./${track}.mp3`);
            audio.volume = volume;
            audio.play();
        });
    });

    const slider = document.getElementById("volume-slider");
    slider.addEventListener('input', () => {
        v = slider.value;
        volume = v / 100;
        if (audio) { audio.volume = volume; }
    });
});
