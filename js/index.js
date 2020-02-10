const link = document.querySelector('a');
link.textContent = 'Become true GachiMuchi';
link.href = 'https://www.youtube.com/watch?v=qHscpRXrLwE&t=1s';
const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';
para.classList.add('formatted');
// for (let i = 1; i <= 1000; i++){
//     const para = document.createElement('p');
// sect.appendChild(para);
// para.textContent = i + ' We hope you enjoyed the ride.';
// }

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

$('.click-me').click( () => $('img').toggle(3000));

document.querySelectorAll('.digits')