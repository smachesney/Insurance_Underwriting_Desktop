(
    {
        doInit : function(component, event, helper) {
            console.log('updateData');
            var action = component.get("c.getEDInfo");
            action.setParams({
                "recordId": component.get("v.recordId"),
                "objectname": component.get("v.objectname") ,
                "booleanfield": component.get("v.booleanfield")
            });
            action.setCallback(component, function(response) {
                var result = response.getReturnValue();
                var state = response.getState();
                
                if (state === 'SUCCESS'){
                    
                    if(result){

                        $('#csat').html(component.get("v.insightValueIfTrue"));
                        if(component.get("v.leadingCausesIfTrue")!="" && component.get("v.leadingCausesIfTrue")!=null){
                            $('#leadingCauses').html(helper.populateTable(component.get("v.leadingCausesIfTrue")));
                        }
                        if(component.get("v.howToImproveIfTrue")!="" && component.get("v.howToImproveIfTrue")!=null){
                            $('#recommendedImprovements').html(helper.populateTable(component.get("v.howToImproveIfTrue")));
                        }
                    }else{
                        $('#csat').html(component.get("v.insightValueIfFalse"));
                        if(component.get("v.leadingCausesIfFalse")!="" && component.get("v.leadingCausesIfFalse")!=null){
                            $('#leadingCauses').html(helper.populateTable(component.get("v.leadingCausesIfFalse")));
                        }
                        if(component.get("v.howToImproveIfFalse")!="" && component.get("v.howToImproveIfFalse")!=null){
                            $('#recommendedImprovements').html(helper.populateTable(component.get("v.howToImproveIfFalse")));
                        }
                    }
                    
                } 
            });
            $A.enqueueAction(action);
            
        },
        
        
        
        refresh : function(component, event, helper) {
            var action = component.get('c.getEDInfo');
            action.setCallback(component, function(response) {
                var state = response.getState();
                if (state === 'SUCCESS'){
                    
                    $A.get('e.force:refreshView').fire();
                } else {
                    //do something
                }
            });
            $A.enqueueAction(action);
        }
        
        
    
    })