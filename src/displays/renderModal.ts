import { ITask } from "../interfaces/TaskInterface"; 
import { DaysOfStreak } from "../index.js";
const closeModal = ()=>{
    let closeModalButton = document.querySelector('.close') as HTMLElement;
    let modal = document.querySelector('.modal') as HTMLElement;
    closeModalButton?.addEventListener('click',(e)=>{
        //modal.classList.remove('show');
        //modal.classList.toggle("show");
        //modal.classList.add("hide");
        modal.style.display='none';
    })
}
/*const deleteStreak = (id:number)=>{
  let deleteButton = document.querySelector('.delete') as HTMLElement;
  deleteButton?.addEventListener('click',(e)=>{
    delete(id)
  })
}*/
export const displayModalData = (data:ITask)=>{
    let modalSection = document.querySelector('.modal') as HTMLElement;
    const div = document.createElement("div");
    div.className = 'activities-container';
    div.innerHTML=`
   
        <!-- Activity -->
        <div class="activity">
          <img src=${data.imageUrl} alt='' class="streak-image"/>
          <p class="date">${data.startDate}</p>
          <p class="activity-name">${data.taskName}</p>
          <p class="time-passed">${DaysOfStreak.getDaysOfStreak(data.startDate)}days</p>
        </div>
        <!-- Close/delete activity -->
        <div class="close-delete-btn">
          <div class="btn close">Close</div>
          <div class="btn delete">Delete</div>
        </div>
      
    `
    /*return */modalSection.appendChild(div);
    //modalSection.style.display='flex';
    closeModal()
    const deleteStreak = ()=>{
      let deleteButton = document.querySelector('.delete') as HTMLElement;
      deleteButton?.addEventListener('click',(e)=>{
        data.delete(data.indexNumber)
        
      })
    }
    deleteStreak()
}