import Calendar, { Month } from "./calendar.js"

// const calendar = new Calendar()
document.addEventListener("DOMContentLoaded", () => {
    updateScheduleNavigation();
    drawCalendar();
})

const month = new Month()

function updateScheduleNavigation() {
    const navScheduleInfo = document.getElementById("nav-schedule-info");
    navScheduleInfo.innerText = `${month.getMonthName()} de ${month.getYear()}`;
}


function drawCalendar() {
    const divCalendar = document.getElementById("calendar")
        
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

    const daysNames = ["Dom","Seg","Ter","Quar","Qui","Sex","Sáb"];
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
            const dayNumber = (weeks[i][j] && weeks[i][j].getDayNumber());
            const divDay = document.createElement("div")
            divDay.setAttribute("id", `div-day-${dayNumber}`)
            divDay.setAttribute("class","day")
            if(weeks[i][j]) divDay.innerText = weeks[i][j].getDayNumber()
                div.appendChild(divDay)
        }
    }
}