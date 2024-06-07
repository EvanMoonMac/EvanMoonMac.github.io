function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let meridiem;

    if(hours >= 12){
        meridiem = "PM";
        hours = hours % 12;
    }
    else{
        meridiem = "AM";

        if(hours == 0){
            hours = 12;
        }


    }

    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const currentTime = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = currentTime;
}

updateClock();
setInterval(updateClock, 1000);

const element = document.getElementById("myBody");

let counter = 0;


function changeBackground(){

    if(counter % 7 == 0){
        element.style.backgroundImage = `url(1.jpeg)`
    }

    if(counter % 7 == 1){
        element.style.backgroundImage = `url(2.jpeg)`
    }

    if(counter % 7 == 2){
        element.style.backgroundImage = `url(3.jpeg)`
    }

    if(counter % 7 == 3){
        element.style.backgroundImage = `url(4.jpeg)`
    }

    if(counter % 7 == 4){
        element.style.backgroundImage = `url(5.jpeg)`
    }

    if(counter % 7 == 5){
        element.style.backgroundImage = `url(6.jpeg)`
    }

    if(counter % 7 == 6){
        element.style.backgroundImage = `url(7.jpeg)`
    }

    counter++

}

setInterval(changeBackground, 8000);










