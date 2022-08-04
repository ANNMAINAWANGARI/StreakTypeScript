export interface ITask{
    taskName:string;
    imageUrl:string;
    startDate:string;
    indexNumber:number;
    modalElement:(id:number)=>void;
    hideModal:()=>void;
    delete:(id:number)=>void;
}