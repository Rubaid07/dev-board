// get date
const date = document.getElementById('date');


const today = new Date().toDateString().split(' ');

date.innerHTML = `
    ${today[0]} , <br> <strong> ${today.slice(1).join(' ')} </strong>
`