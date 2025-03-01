// get date
const date = document.getElementById('date');


const today = new Date().toDateString().split(' ');

date.innerHTML = `
    ${today[0]} , <br> <strong> ${today.slice(1).join(' ')} </strong>
`


// activity log
const completeBtn = document.querySelectorAll('.complete-btn');
const cardHead = document.querySelectorAll('.card-heading')
for(let i = 0; i < completeBtn.length; i++){
    const btn = completeBtn[i];
    btn.addEventListener('click', function(event){
        event.target.setAttribute('disabled', 'true');
        event.target.style.backgroundColor ='#ced6ff';
        alert('Board updated successfully');
        
    })
}

