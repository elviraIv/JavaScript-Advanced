function attachEventsListeners() {
    let rations = {
        day:1,
        hours:24,
        minutes:1440,
        seconds:86400,
    }

  let daysBtnElement = document.getElementById("daysBtn");
  let hoursBtnElement = document.getElementById("hoursBtn");
  let minutesBtnElement = document.getElementById("minutesBtn");
  let secondsBtnElement = document.getElementById("secondsBtn");

  daysBtnElement.addEventListener('click', onConvert);
  hoursBtnElement.addEventListener('click', onConvert);
  minutesBtnElement.addEventListener('click', onConvert);
  secondsBtnElement.addEventListener('click', onConvert);

  function onConvert(e){

  }


}
