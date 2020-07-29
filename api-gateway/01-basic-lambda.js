/*
 * Sample Lambda function showing the basic API Gateway and Lambda function integration
 * 
 * e.g. invocation
 *   curl -sD - -d '{"key1":"value1","key2":"value2"}' https://jqw54d34o3.execute-api.us-east-1.amazonaws.com/dev/01-basic-lambda
 * 
 * Try the Sigma IDE for Serverless computing https://sigma.slappforge.com
 */
exports.handler = async (event) => {
    console.log("Event: " + JSON.stringify(event));
    return {"message": "Successfully executed"};
};