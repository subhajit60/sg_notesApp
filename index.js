let addBtn = document.querySelector(".add-btn");
let remoBtn =document.querySelector(".remobtn")
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".text-area");
let AllprioityColor = document.querySelectorAll(".priority-color");
let ToolAllprioityColor = document.querySelectorAll(".toolbox-prioColor");
let submitBtn =document.querySelector(".submit");
let cancelBtn =document.querySelector(".cancel");
let submitOrnot =document.querySelector(".submitOrnot");
// let ticketCont =document.querySelectorAll(".ticket-cont");

let colors = ["lightpink", "lightgreen", "lightblue", "violet"];
let priorityColor = colors[colors.length-1];


let addFlag = false;

// lisner for modal priority coloring (toggel boder )
AllprioityColor.forEach((coloEle,idx) => {
    coloEle.addEventListener("click", (e) => {
        AllprioityColor.forEach((proColor ) => {
            proColor.classList.remove("priorityCol_boder");
        })
        coloEle.classList.add("priorityCol_boder");
        priorityColor = coloEle.classList[1]; 
        console.log(priorityColor);
        //unclaer this portion
    })
})
//tool box color toggel boder
ToolAllprioityColor.forEach((coloEle,idx) => {
    coloEle.addEventListener("click", (e) => {
        ToolAllprioityColor.forEach((proColor ) => {
            proColor.classList.remove("priorityCol_boder");
        })
        coloEle.classList.add("priorityCol_boder");
    })
})



// for dispaly modal content in view port
addBtn.addEventListener("click", (e) => {

    addFlag = !addFlag;

    if (addFlag) {
        modalCont.style.display = "flex";
        submitOrnot.style.display = "flex";
        addBtn.style.backgroundColor ="green";
        mainCont.style.display ="none";
    }
    else {
        modalCont.style.display = "none";
        addBtn.style.backgroundColor ="";
        submitOrnot.style.display = "none";
        mainCont.style.display ="flex";
    }
})
//remo btn for delete ticked form main contener
let removeAct=false;
remoBtn.addEventListener("click", (e) =>{
    removeAct =!removeAct;
    console.log(removeAct);
    if(removeAct){
        remoBtn.style.backgroundColor ="red";
    }
    else if(!removeAct){
        remoBtn.style.backgroundColor ="cadetblue";
    }

})
// for Remove ticket
function ticketRemove(ticket){
  
    ticket.addEventListener("click", (e) =>{
        if(removeAct) ticket.remove();
    })
   
   
}

// or create a modal
submitBtn.addEventListener("click", (e) => {

        createTicket(priorityColor,textareaCont.value,shortid());
        modalCont.style.display = "none";
        addFlag = false;
        textareaCont.value = "";
        submitOrnot.style.display = "none";
        addBtn.style.backgroundColor ="";
        mainCont.style.display ="flex";
        

})

cancelBtn.addEventListener("click", (e) => {
    modalCont.style.display = "none";
    addBtn.style.backgroundColor ="";
    submitOrnot.style.display = "none";
    textareaCont.value = "";
    addBtn.style.backgroundColor ="";
    mainCont.style.display ="flex";
})

//for createTickets here
function createTicket(ticiketColor ,ticiketTASK,ticiketID) {

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
            <div class="ticket-color ${ticiketColor}"></div>  
            <div class="ticket-id">${ticiketID}</div>
            <div class="ticket-task-area">${ticiketTASK}</div>
       
    `;
    mainCont.appendChild(ticketCont);
    ticketRemove(ticketCont);
  
}


