 import {ITask} from './interfaces/TaskInterface';
 import {IBestStreak} from './interfaces/ShowBestStreakInterface';
 import {IDaysOfStreak} from './interfaces/CalculateDaysOfStreakInterface';
import{displayModalData} from './displays/renderModal.js';
import {displayStreak} from './displays/renderStreak.js';
 let addBtn = document.getElementById("add-btn") as HTMLElement;
let closeBtn = document.getElementById("close-btn") as HTMLElement;
let mainArea = document.querySelector('.main-area') as HTMLElement;
let formSection = document.querySelector('.form-section') as HTMLElement;
let activity = document.querySelector('.activity') as HTMLElement;
let modal = document.querySelector('.modal') as HTMLElement;
//let closeModal = document.querySelector('.close') as HTMLElement;
const form=document.querySelector("form") as HTMLFormElement;
let taskInput = document.querySelector(".streak-input") as HTMLInputElement;
let imageInput = document.querySelector(".image-input") as HTMLInputElement;
let dateInput = document.querySelector(".date-input") as HTMLInputElement;
addBtn?.addEventListener("click", (e) => {
    
    mainArea.classList.remove("show");
    mainArea.classList.add("hide");
    formSection.classList.add('show');
    formSection.classList.remove('hide');
    closeBtn.classList.remove('hide');
    closeBtn.classList.add('show');
    addBtn.classList.remove('show');
    addBtn.classList.add('hide');
});
closeBtn?.addEventListener('click',(e)=>{
    mainArea.classList.remove("hide");
    mainArea.classList.add("show");
    formSection.classList.add('hide');
    formSection.classList.remove('show');
    closeBtn.classList.remove('show');
    closeBtn.classList.add('hide');
    addBtn.classList.remove('hide');
    addBtn.classList.add('show');
})


class Streaks implements ITask{
    private tasksArray:ITask[]=[];
    //static max:number = 0;
    taskName:string;
    imageUrl:string;
    startDate:string;
    indexNumber:number;
    constructor(taskName:string,imageUrl:string,startDate:string){
        this.taskName=taskName;
        this.imageUrl=imageUrl;
        this.startDate=startDate;
        this.indexNumber=this.tasksArray.length;
    }
    addStreak(streak:ITask){
        if(this.tasksArray.length>0){

        }
        this.tasksArray.push(streak);
        this.indexNumber = this.tasksArray.length;
        console.log(this.tasksArray)
    }
    modalElement(id:number){
        
        if(id+1 ==this.indexNumber){
            //modal.classList.add('show');
            modal.style.display='flex'
         
         //displayModalData(this.tasksArray[id])
        
        // modal.classList.remove('hide');
        }
        modal.style.display='flex';
        if(modal.hasChildNodes()){
            modal.replaceChildren();
        }
        displayModalData(this.tasksArray[id])
    }
    hideModal = ()=>{
        /*let modal = document.querySelector('.modal') as HTMLElement;
        modal.classList.remove('show');
        modal.classList.add("hide");*/
      }
    returnArray(){
        return this.tasksArray;
    }
    theArray(){
        return this.tasksArray
    }
    delete(index:number){
        let contentBottom = document.querySelector('.activity-section') as HTMLElement;
        let contentBottomChild = document.querySelector('.activity') as HTMLElement;
        contentBottom.removeChild(contentBottomChild)
        let modalSection = document.querySelector('.modal') as HTMLElement;
        let modalSectionChild = document.querySelector('.activities-container') as HTMLElement;
        modalSection.removeChild(modalSectionChild)
        modalSection.style.display='none'
        
        //this.tasksArray.splice(index,1)
        //console.log('heyyydelete')
    }
}
interface IAccessPrivateStreakArray extends Streaks{
    
}
export class DaysOfStreak  extends Streaks implements ITask {
    constructor(taskName:string,imageUrl:string,startDate:string){
        super(taskName,imageUrl,startDate);
    }
    //static max:number = 0;
    static getDaysOfStreak(date:string){ 
        let currentDate=new Date().getTime();
        let streakDate=new Date(date).getTime();
        return Math.floor((currentDate-streakDate)/(1000*3600*24))
        
    }
}
class BestStreakDay  extends DaysOfStreak  implements IAccessPrivateStreakArray {
    constructor(taskName:string,imageUrl:string,startDate:string){
        super(taskName,imageUrl,startDate);
    }
   
       
    //static max:number = 0;
    //returnArray
   //static getBestStreak(a:ITask[]){
    //this.returnArray()
        //convert date to type Date
       /* a.map((streak)=>{
            let tempArray=[];
            tempArray.push(streak.)
        })
        //get the difference between the dates
       //let days:number = new Date().getFullYear - date
    }*/
}
//let streak = new Streaks(taskInput.value,imageInput.value,dateInput.value)



form.addEventListener("submit", e => {
    let streak = new BestStreakDay(taskInput.value,imageInput.value,dateInput.value)
    e.preventDefault();
    streak.addStreak(streak);
    console.log(streak.returnArray())
    displayStreak(streak.returnArray())
    form.reset()
  });
  