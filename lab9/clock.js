const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop=true;
let alarmTime=null;
let alarmTimeout=null;

function updateTime(){
    const date = new Date();

    const hour =formatTime(date.getHours());
    const minutes =formatTime (date.getMinutes());
    const seconds =formatTime (date.getSeconds());

    display.innerText = `${hour} : ${minutes} : ${seconds}`;

}

function formatTime(time){
    if(time < 10){         // To be like 12 : 06 : 01  not 12 : 6 : 1
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime=value;    //start the alarm
    console.log(alarmTime);
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();  //The current time
        const timeToAlarm = new Date(alarmTime);  //The time should fire alarm

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(()=> audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm(){  //if we turned off alarm or we set an alarm then i want to change it 
   
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm Cleared');
    }

}

setInterval(updateTime,1000);