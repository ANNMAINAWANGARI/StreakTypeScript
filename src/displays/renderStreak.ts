import { ITask } from "../interfaces/TaskInterface";
import { DaysOfStreak } from "../index.js";
export const displayStreak = (data:ITask[])=>{
    let contentBottom = document.querySelector('.activity-section') as HTMLElement;
    if(data.length==0){
    const divMessage=document.createElement("div");
    divMessage.innerHTML=`<p>Empty Array</p>`
    contentBottom.appendChild(divMessage)
    alert('Array is empty')
    }else{
        data.map((streak,index:number)=>{
            const div = document.createElement("div");
            div.className='activity';
            div.addEventListener('click',()=>{
                
                streak.modalElement(index)
            })
            div.innerHTML =`
            <img src=${streak.imageUrl} alt="" class="streak-image"/>
              <p class="date">${streak.startDate}</p>
              <p class="activity-name">${streak.taskName}</p>
            `
            
                   return contentBottom.appendChild(div);
        })
    }
   
}
