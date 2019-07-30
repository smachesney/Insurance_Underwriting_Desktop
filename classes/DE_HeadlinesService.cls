public class DE_HeadlinesService {
    
    @AuraEnabled
    public static String getHeadlines(String deLimiter)
    {
        String healdlinesString='';
        List<Headlines__c> headlines=[SELECT Content__c,Reference_Link__c from Headlines__c where Active__c =true ORDER BY Priority__c DESC];
        for(Headlines__c headline:headlines)
        {
            if(headline.Reference_Link__c!=null)
            {
            	healdlinesString=healdlinesString+' '+headline.Content__c+' - <a href="'+headline.Reference_Link__c+'" target="_blank">More Details</a>  '+deLimiter+' ';
            }
            else
            {
                healdlinesString=healdlinesString+' '+headline.Content__c+' '+deLimiter+' ';

            }
        }
        return healdlinesString;
    }
    @AuraEnabled
    public static String getVerticalHeadlines(String deLimiter)
    {
        String healdlinesString='';
        List<Headlines__c> headlines=[SELECT Content__c,Reference_Link__c  from Headlines__c where Active__c =true ORDER BY Priority__c DESC];
        for(Headlines__c headline:headlines)
        {
             if(headline.Reference_Link__c!=null)
            {
            	healdlinesString=healdlinesString+' '+headline.Content__c+' - <a href="'+headline.Reference_Link__c+'" target="_blank">More Details</a><br>  '+deLimiter+'<br> ';
            }
            else
            {
                healdlinesString=healdlinesString+' '+headline.Content__c+' <br>'+deLimiter+'<br> ';

            }
        }
        return healdlinesString;
    }

}