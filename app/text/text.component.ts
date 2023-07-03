import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todos';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit{
  inputTodo:string='';
  todos:Todo[] =[];
  ngOnInit(): void {
  this.todos=[
    {
      content:'first content',
      completed:true
    },
    {
      content:'second content',
      completed:true
    },
  ]
  }
todgleDone(id:number){
  this.todos.map((v,i)=>{
    console.log('v',v);
    console.log('i',i);
    if(i==id)
    v.completed=! v.completed;
    return v;
  })

}
deleteTodo(id:any){
  this.todos=this.todos.filter((v,i) => i !==id);
  
}
addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
  this.inputTodo="";
}
}
