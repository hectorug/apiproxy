var host = context.getVariable('request.header.host');
var uri = "https://" + host + "/v1/beers/random";
print("uri: " + uri);

for (i = 0; i < 10; i++) { 
    httpClient.get(uri);
}