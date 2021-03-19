const hours = document.querySelector('.needle.hour')
const mins = document.querySelector('.needle.minute')
const secs = document.querySelector('.needle.second')
const time = document.querySelector('.time')
const month = document.querySelector('.date')
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
setInterval(setTime,1000)
function setTime(){
    let date = new Date
    hours.style.transform = `translate(-50%,-100%) rotate(${scale(date.getHours(),0,11,0,360)}deg)`
    mins.style.transform = `translate(-50%,-100%) rotate(${scale(date.getMinutes(),0,59,0,360)}deg)`
    secs.style.transform = `translate(-50%,-100%) rotate(${scale(date.getSeconds(),0,59,0,360)}deg)`
    let normalTime = date.getHours() % 12;
    time.innerHTML = `${normalTime}:${date.getMinutes()}`
    month.innerHTML = `${days[date.getDay()]}, ${months[date.getMonth()]}`
}
function scale(num, in_min, in_max, out_min, out_max){
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}