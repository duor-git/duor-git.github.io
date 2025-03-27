let volume = 0.5;
let audio;
let playing;

document.addEventListener("DOMContentLoaded", () => {

    const addProgress = (id, progress) => {
        document.getElementById(id).style.background = `linear-gradient(90deg, hsl(305.5799999999999 37.39% 22.55%) ${progress}%,hsl(305 37.5% 12.55%) 100%)`;
    }

    const clearProgres = (id) => {
        document.getElementById(id).style = "";
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {
            const track = ev.target.id;
            if (playing) {
                clearProgres(playing);
            }
            playing = track;
            if (audio) { audio.pause(); }
            audio = new Audio(`./clips/${track}.mp3`);
            audio.volume = volume;

            audio.addEventListener("ended", () => {
                clearProgres(track);
            });

            audio.addEventListener("timeupdate", () => {
                addProgress(track, (audio.currentTime / audio.duration) * 100);
            });

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
