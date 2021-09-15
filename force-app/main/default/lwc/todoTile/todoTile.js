import { LightningElement, track, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TodoTile extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    
    @api todo = {Name: 'Test 111',
            Title: 'Test Title'
            };
    editTodo() {
        console.log('test');
        console.log(this.recordId);
        //ID NOT FOUND
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                //recordId
                recordId: this.todo.Id,
                objectApiName: 'Todo__c',
                actionName: 'edit'
            },
        });
    }
    @track error;
    deleteTodo(event) {
        deleteRecord(this.todo.Id)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record deleted',
                        variant: 'success'
                    })
                );
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Todo__c',
                        actionName: 'home',
                    },
                });
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}