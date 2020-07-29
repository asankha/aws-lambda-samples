/*
 * Sample Lambda function integrated with API Gateway showing Lambda Proxy Integration
 * Note: Make sure Lambda Proxy Integration is enabled when deployed
 * 
 * e.g. invocation
 *   curl -sD - -d '{ "name":"John", "age":31, "city":"New York" }' https://qaydahje3e.execute-api.us-east-1.amazonaws.com/dev/02-lambda-proxy-integration
 * 
 * Try the Sigma IDE for Serverless computing https://sigma.slappforge.com
 */
exports.handler = async (event) => {
    console.log("Event: " + JSON.stringify(event));

    let response = {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
            "Custom-Response-Header": "some value"
        },
        "body": JSON.stringify({"message": "Successfully executed"})
    };
    return response;
};