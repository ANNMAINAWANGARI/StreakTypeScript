import { displayModalData } from './displays/renderModal.js';
import { displayStreak } from './displays/renderStreak.js';
let addBtn = document.getElementById("add-btn");
let closeBtn = document.getElementById("close-btn");
let mainArea = document.querySelector('.main-area');
let formSection = document.querySelector('.form-section');
let activity = document.querySelector('.activity');
let modal = document.querySelector('.modal');
//let closeModal = document.querySelector('.close') as HTMLElement;
const form = document.querySelector("form");
let taskInput = document.querySelector(".streak-input");
let imageInput = document.querySelector(".image-input");
let dateInput = document.querySelector(".date-input");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", (e) => {
    mainArea.classList.remove("show");
    mainArea.classList.add("hide");
    formSection.classList.add('show');
    formSection.classList.remove('hide');
    closeBtn.classList.remove('hide');
    closeBtn.classList.add('show');
    addBtn.classList.remove('show');
    addBtn.classList.add('hide');
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', (e) => {
    mainArea.classList.remove("hide");
    mainArea.classList.add("show");
    formSection.classList.add('hide');
    formSection.classList.remove('show');
    closeBtn.classList.remove('show');
    closeBtn.classList.add('hide');
    addBtn.classList.remove('hide');
    addBtn.classList.add('show');
});
class Streaks {
    constructor(taskName, imageUrl, startDate) {
        this.tasksArray = [];
        this.hideModal = () => {
            /*let modal = document.querySelector('.modal') as HTMLElement;
            modal.classList.remove('show');
            modal.classList.add("hide");*/
        };
        this.taskName = taskName;
        this.imageUrl = imageUrl;
        this.startDate = startDate;
        this.indexNumber = this.tasksArray.length;
    }
    addStreak(streak) {
        if (this.tasksArray.length > 0) {
        }
        this.tasksArray.push(streak);
        this.indexNumber = this.tasksArray.length;
        console.log(this.tasksArray);
    }
    modalElement(id) {
        if (id + 1 == this.indexNumber) {
            //modal.classList.add('show');
            modal.style.display = 'flex';
            //displayModalData(this.tasksArray[id])
            // modal.classList.remove('hide');
        }
        modal.style.display = 'flex';
        if (modal.hasChildNodes()) {
            modal.replaceChildren();
        }
        displayModalData(this.tasksArray[id]);
    }
    returnArray() {
        return this.tasksArray;
    }
    theArray() {
        return this.tasksArray;
    }
    delete(index) {
        let contentBottom = document.querySelector('.activity-section');
        let contentBottomChild = document.querySelector('.activity');
        contentBottom.removeChild(contentBottomChild);
        let modalSection = document.querySelector('.modal');
        let modalSectionChild = document.querySelector('.activities-container');
        modalSection.removeChild(modalSectionChild);
        modalSection.style.display = 'none';
        //this.tasksArray.splice(index,1)
        //console.log('heyyydelete')
    }
}
export class DaysOfStreak extends Streaks {
    constructor(taskName, imageUrl, startDate) {
        super(taskName, imageUrl, startDate);
    }
    //static max:number = 0;
    static getDaysOfStreak(date) {
        let currentDate = new Date().getTime();
        let streakDate = new Date(date).getTime();
        return Math.floor((currentDate - streakDate) / (1000 * 3600 * 24));
    }
}
class BestStreakDay extends DaysOfStreak {
    constructor(taskName, imageUrl, startDate) {
        super(taskName, imageUrl, startDate);
    }
}
//let streak = new Streaks(taskInput.value,imageInput.value,dateInput.value)
form.addEventListener("submit", e => {
    let streak = new BestStreakDay(taskInput.value, imageInput.value, dateInput.value);
    e.preventDefault();
    streak.addStreak(streak);
    console.log(streak.returnArray());
    displayStreak(streak.returnArray());
    form.reset();
});
