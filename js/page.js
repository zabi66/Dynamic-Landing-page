// Dom Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

;

// Show Time 
function showTime() {
    let today = new Date(),
       hour = today.getHours(),
       min = today.getMinutes(),
       sec = today.getSeconds();

// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
hour = hour % 12 || 12;

// Output Time 
 time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

 setTimeout(showTime, 1000);
}

// Add zeros
 function addZero(n) {
     return (parseInt(n, 10) < 10 ? '0' : '') + n;
 }

 // Set Background an Greeting
 function setBgGreet() {
     let today = new Date(),
     hour = today.getHours();

     if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/Pw8x66d/morning.jpg')";
        greeting.textContent = 'Good Morning, ';
      } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/RQGFY2V/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
      } else {
        // Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/Kw4d3Br/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
      }
 }

 //Get Name
 function getName() {
   if(localStorage.getItem('name') === null) {
     name.textContent = '_______';
   } else {
     name.textContent = localStorage.getItem('name');
   }
 }

 //set Name
 function setName(e) {
   if(e.type === 'keypress') {
     if (e.which == 13 || e.keyCode == 13) {
       localStorage.setItem('name', e.target.innerText);
       //makes the space stop  name.blur();
     }
   } else {
     localStorage.setItem('name', e.target.innerText);
   }
 }

  //Get Focus
  function getFocus() {
    if(localStorage.getItem('focus') === null) {
      focus.textContent = '___________________';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }

   //set Focus
 function setFocus(e) {
  if(e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      //makes the space stop  focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);


 // Run
 showTime();
 setBgGreet();
 getName();
 getFocus();