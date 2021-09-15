import { LightningElement, wire } from 'lwc';
import  getTodo  from '@salesforce/apex/TodoController.getTodo'
import findTodo from '@salesforce/apex/TodoController.findTodo';

export default class TodoList extends LightningElement {
    searchKey = '';
    @wire(findTodo, {searchLine : '$searchKey'})
    todos;

    handleChange(event) {
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() =>{
            this.searchKey = searchKey;
        }, 300);
    }
}