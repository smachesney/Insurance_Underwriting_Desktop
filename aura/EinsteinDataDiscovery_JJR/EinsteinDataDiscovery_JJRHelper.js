({
	populateTable : function(input) {
            var inputArr = input.split(',');
            
            var outputHTML = "";
            
            for (var i = 0; i < inputArr.length; ++i) {
                
                var score;
                var desc;
                
                var color = 'slds-text-color';
                
                // cleans up the strings by removing any system field traits
                var cleanStr = inputArr[i].trim();

                score = cleanStr.substr(0, cleanStr.indexOf(' '));
                desc = cleanStr.substr(cleanStr.indexOf(' ') + 1);
                
                    
                outputHTML += '<div class="slds-item--label ac-sdd-left-col slds-truncate slds-text-body--regular slds-m-vertical--xx-small ' + color + '">' + score + '</div>';
                outputHTML += '<div class="slds-item--detail ac-sdd-right-col slds-truncate slds-text-body--regular slds-m-vertical--xx-small slds-text-color--weak" title="">' + desc + '</div>';
            }
            return outputHTML;
        }
})