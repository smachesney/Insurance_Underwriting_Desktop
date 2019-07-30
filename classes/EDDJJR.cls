public class EDDJJR {
    
    @AuraEnabled
    public static Boolean getEDInfo(String recordId, String objectname, String booleanfield) {
        
        SObject recordofnote;
        String strQuery = 'SELECT Id, ' + booleanfield + ' FROM ' + objectname + ' WHERE Id = \'' + recordId + '\'';

        try {
            
            recordofnote = Database.query(strQuery);
            
        } catch (Exception e) {
            System.debug('Error in query.  Query string is ' + strQuery);
        }
        return (boolean) recordofnote.get(booleanfield);
    }
    
    
    
}