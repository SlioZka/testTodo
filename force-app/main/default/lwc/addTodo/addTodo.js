import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AddTodo extends NavigationMixin(LightningElement) {
    navigateToNewTodo() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Todo__c',
                actionName: 'new'
            }
        });
    }
}