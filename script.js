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

        const heading = cardHead[i].innerText;

        

        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        
        let formatHours = hours;
        if(hours > 12){
            formatHours = hours - 12;
        }
        if(hours === 0){
            formatHours = 12;
        }
        
        let ampm = 'AM'
        if(hours>=12){
            ampm = 'PM'
        }

        

        const activeLog = document.getElementById('active-log-container');

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-[#F4F7FF] m-4 rounded-xl">
                    <div class="p-3">
                        <p>You have Complete The Task ${heading} at <span> ${formatHours}:${minutes}:${seconds} ${ampm} </span></p>
                    </div>
                 </div>
        `
        activeLog.appendChild(div)
    })
}
