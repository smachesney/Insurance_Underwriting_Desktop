({
    doInit : function(component, event, helper) {
        var rotationType=component.get("v.direction");
        if(rotationType=='scroll_right2left')
        {
              var action = component.get("c.getHeadlines");
        }
        else
        {
			var action = component.get("c.getVerticalHeadlines");            
        }
        action.setParams({ deLimiter : component.get("v.deLimiter") });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
                component.set("v.headLines",response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);
    }
})