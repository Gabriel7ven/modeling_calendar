import Calendar, { Month } from "./calendar.js"

// const calendar = new Calendar()
document.addEventListener("DOMContentLoaded", () => {
    // Atualiza navegação do calendário e desenha o próprio calendário
    updateScheduleNavigation();
    drawCalendar();

    // Adicionando evento às setas de navegação do calendário
    const rightArrow = document.getElementById("right-arrow");
    if(!rightArrow) return;
    rightArrow.addEventListener("click", () => {
        drawNextMonth()
    })
    const leftArrow = document.getElementById("left-arrow");
    if(!leftArrow) return;
    leftArrow.addEventListener("click", () => {
        drawPreviousMonth()
    })

    // Esconde formulário
    document.addEventListener("mousedown", (e) => {
        hideForm(e.target);
    })

    


})

 const users = fetch('http://localhost:3000/users/')
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Data fetched:', data);
            console.log(new Date(data[0].data_atualizacao))
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });


const month = new Month()

function drawNextMonth() {
    const weeksContainer = document.getElementById("weeks-container");
    weeksContainer.remove();
    month.nextMonth()
    updateScheduleNavigation()
    drawCalendar();
}

// Refatorar assim que puder
function drawPreviousMonth() {
    const weeksContainer = document.getElementById("weeks-container");
    weeksContainer.remove();
    month.previousMonth()
    updateScheduleNavigation()
    drawCalendar();
}

function updateScheduleNavigation() {
    const navScheduleInfo = document.getElementById("nav-schedule-info");
    if (!navScheduleInfo) return;
    navScheduleInfo.innerText = `${month.getMonthName()} de ${month.getYear()}`;
}

function drawCalendar() {
    const divCalendar = document.getElementById("calendar");
    if(!divCalendar) return;
    // const month = new Month()
    const weeks = month.getWeeks()
    
    // Cria a div que irá conter as semanas
    const weeksContainer = document.createElement("div");
    weeksContainer.setAttribute("id","weeks-container");
    divCalendar.appendChild(weeksContainer);
    
    // Cria a div que irá conter os nomes dos dias da semana
    const divDaysLabels = document.createElement("div")
    divDaysLabels.setAttribute("id","week-days-labels")
    divDaysLabels.setAttribute("class","week-days-labels")
    weeksContainer.appendChild(divDaysLabels)

    const daysNames = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
    for (let i=0; i<7; i++) {
        const div = document.createElement("div")
        div.setAttribute("class","day-name");
        div.innerText = daysNames[i];
        divDaysLabels.appendChild(div);
    }

    for (let i=0; i<weeks.length; i++) {
        const div = document.createElement("div")
        div.setAttribute("id",`week-${i+1}`)
        div.setAttribute("class","week")
        weeksContainer.appendChild(div)
        for (let j=0; j<weeks[i].length; j++){
            const dayNumber = (weeks[i][j] && weeks[i][j].getDayNumber()); // Pega o número do dia se ele não for nulo
            const divDay = document.createElement("div")
            divDay.setAttribute("id", (dayNumber ? `div-day-${dayNumber}` : null));
            divDay.setAttribute("class","day")
            const date = `${String(dayNumber).padStart(2,"0")}/${String(month.getMonthIndex()+1).padStart(2,"0")}/${month.getYear()}`
            divDay.setAttribute("ariaDescription",date)
            if(weeks[i][j]){
                divDay.innerText = weeks[i][j].getDayNumber()
                divDay.addEventListener("click", (e) => {
                    // console.log(
                        // console.log(e.target);
                        // navigator.clipboard
                        //             .writeText("O SENHOR é o meu pastor; de nada terei falta.")
                        // navigator.clipboard
                        //             .readText()
                        //             .then(
                        //                 (clipText) => (alert(clipText)),
                        //             );
                        const form = document.getElementById("container-form");
                        form.style.display = "flex";
                        const dateInput = document.getElementById("date");
                        dateInput.value = date;
                        dateInput.style.color = "rgb(150, 150, 150)"
                        dateInput.setAttribute("readonly","readonly")
                        
                })
            } 
            div.appendChild(divDay)
        }
    }
}

function hideForm(e) {
    const form = document.querySelector("#container-form");
    (e === form) && (form.style.display = "none");
    // console.log(e,form)
}






// Form

// function createForm() {
//     const container = document.getElementById("container-form");

//     const form = document.createElement("form");
//     form.setAttribute("action","/submit");
//     form.setAttribute("method","POST");

//     const labelSinger = document.createElement("label")
//     labelSinger.setAttribute("for","singer");
//     labelSinger.textContent = "Cantor";

//     const inputSinger = document.createElement("input");
//     inputSinger.setAttribute("type","text");
//     inputSinger.setAttribute("id","singer");
//     inputSinger.setAttribute("name","singer");

//     const labelInviter = document.createElement("label")
//     labelInviter.setAttribute("for","inviter");
//     labelInviter.textContent = "Anfitrião";

//     const inputInviter = document.createElement("input");
//     inputInviter.setAttribute("type","text");
//     inputInviter.setAttribute("id","inviter");
//     inputInviter.setAttribute("name","inviter");


//     const labelDate = document.createElement("label")
//     labelDate.setAttribute("for","date");
//     labelDate.textContent = "Cantor";

//     const inputDate = document.createElement("input"); // formato DD/MM/YYYY
//     inputDate.setAttribute("type","text");
//     inputDate.setAttribute("id","date");
//     inputDate.setAttribute("name","date");

//     container.appendChild(form)
//     form.appendChild(labelSinger)
//     form.appendChild(inputSinger)
//     form.appendChild(labelInviter)
//     form.appendChild(inputInviter)
//     form.appendChild(labelDate)
//     form.appendChild(inputDate)



// }
