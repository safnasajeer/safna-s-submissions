
// initial call
window.onload= function() {
  const newYears ="1 jan 2021";
  //ng aftetinit() this section/ whole
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  function countdown()
  {
    //console.log(newYearsDate-currentDate);
    //from consol we can call it,  1)new Date(newYears);
    const newYearsDate =new Date(newYears)  ;
    const currentDate =new Date()  ;
  
  
    // console.log(newYearsDate-currentDate);
    // from consol we can call it,  2) new Date(newYearsDate-currentDate)
    //setInterval(countdown,1000);
  

    const toatlseconds = ( currentDate-newYearsDate ) /
    1000;
    const days = Math.floor(toatlseconds / 3600 / 24 );
    const hours =  Math.floor(toatlseconds / 3600 ) % 24;
    const mins =  Math.floor(toatlseconds / 60 ) % 60 ;
    const seconds = Math.floor(toatlseconds)  % 60;
    // alert(daysEl);
    daysEl.innerHTML = days;
   
    hoursEl.innerHTML =formatTime(hours);
    minutesEl.innerHTML =formatTime(mins);
    secondsEl.innerHTML =formatTime(seconds);
  
  
  }
  function formatTime(time) {
  return time < 10 ? `0${time}` : time;
  }
  // setInterval(countdown, 1000);
  countdown();
}


//calls countdown in every seconds

