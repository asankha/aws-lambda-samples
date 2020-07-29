/*
 * Sample Lambda function showing how HTTP request query parameters and headers can be accessed by a Lambda function with Proxy integration
 * Make sure Lambda Proxy Integration is enabled
 * 
 * e.g. invocation
 *   curl -sD - -X 'X-Token: 3456' 'https://vuwibphjt1.execute-api.us-east-1.amazonaws.com/dev/03-lambda-query-params?name=John&age=34'
 * 
 * Try the Sigma IDE for Serverless computing https://sigma.slappforge.com
 */
exports.handler = async (event) => {
    console.log("Method : " + event.httpMethod);    //e.g. POST
    console.log("Path  : " + event.path);           //e.g. /03-lambda-query-params
    console.log("Name : " + event.queryStringParameters.name);  //e.g. John
    console.log("Age : " + event.queryStringParameters.age);    //e.g. 34
    console.log("X-Token : " + event.headers['X-Token']);       //e.g. 3456
    return {
        "body": JSON.stringify({"message": "Successfully executed"})
    };
};