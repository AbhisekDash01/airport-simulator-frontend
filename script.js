
const API_BASE = "https://airport-simulator-backend-production.up.railway.app";
const startBtn=document.getElementById("startBtn");

const stopBtn=document.getElementById("stopBtn");

startBtn.addEventListener("click",async()=>{

    await fetch(`${API_BASE}/start`,{

        method:"POST"

    });

});

stopBtn.addEventListener("click",async()=>{

    await fetch(`${API_BASE}/stop`,{

        method:"POST"

    });

});
// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️ Light Mode";

    }else{

        themeBtn.innerHTML="🌙 Dark Mode";

    }

});

// Update Time

function updateTime(){

    const now = new Date();

    document.getElementById("lastUpdated").innerText =
        now.toLocaleTimeString();

}
// Waiting Flights

async function loadWaitingFlights(){

    try{

        const response = await fetch(`${API_BASE}/waiting`);

        const flights = await response.json();

        const table = document.getElementById("waitingTable");

        table.innerHTML="";

        if(flights.length===0){

            table.innerHTML=
            `
            <tr>
                <td colspan="3">
                    No Waiting Flights
                </td>
            </tr>
            `;

            return;

        }

        flights.forEach(flight=>{

            const type=
            flight.priority===1
            ?'<span class="emergency">EMERGENCY</span>'
            :'<span class="normal">NORMAL</span>';

            table.innerHTML+=
            `
            <tr>

                <td>${flight.flightId ?? flight.flightid}</td>

                <td>${type}</td>

                <td class="waiting">

                    ${flight.status}

                </td>

            </tr>
            `;

        });

    }

    catch(error){

        console.error(error);

    }

}
// Completed Flight
async function loadCompletedFlights(){

    try{

        const response = await fetch(`${API_BASE}/completed`);

        const flights = await response.json();

        const table = document.getElementById("completedTable");

        table.innerHTML="";

        if(flights.length===0){

            table.innerHTML=
            `
            <tr>

                <td colspan="3">

                    No Completed Flights

                </td>

            </tr>
            `;

            return;

        }

        flights.forEach(flight=>{

            const type=
            flight.priority===1
            ?'<span class="emergency">EMERGENCY</span>'
            :'<span class="normal">NORMAL</span>';

            table.innerHTML+=
            `
            <tr>

                <td>${flight.flightId ?? flight.flightid}</td>

                <td>${type}</td>

                <td class="completed">

                    ${flight.status}

                </td>

            </tr>
            `;

        });

    }

    catch(error){

        console.error(error);

    }

}
// Statistics

async function loadStats(){

    try{

        const response=await fetch(`${API_BASE}/stats`);

        const stats=await response.json();

        document.getElementById("waitingCount").innerText=
            stats.waiting;

        document.getElementById("completedCount").innerText=
            stats.completed;

    }

    catch(error){

        console.error(error);

    }

}


// Load Dashboard

async function loadDashboard(){

    await loadWaitingFlights();

    await loadCompletedFlights();

    await loadStats();

    updateTime();

}

// Initial Load
loadDashboard();

// Refresh every 2 seconds
setInterval(loadDashboard,2000);
