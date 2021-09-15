public with sharing class TodoController {
    @AuraEnabled(Cacheable=true)
    public static List<Todo__c> getTodo() { 
        return [SELECT Id, Name, Title__c
                FROM Todo__c];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Todo__c> findTodo(String searchLine) { 
        String key = '%'+searchLine+'%';
        return [SELECT Id, Name, Title__c
                FROM Todo__c
                WHERE Name LIKE :key];
    }
}
