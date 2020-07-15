let connection;
jsforce.browser.init({
    clientId: "3MVG9n_HvETGhr3DeLny5qSNBr71mq_fazczwcUGpccbZUMPJXJ6tp_mnYTt1jPC6F847j4O5HP1LcWS6gQOr",
    redirectUri: "http://localhost:8080/auth",
    proxyUrl: 'http://localhost:8080/proxy/'
});
jsforce.browser.on("connect", function(conn) {
    connection = conn;
    // conn.query("SELECT Id, Name FROM Account", function(err, res) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     document.getElementById('result').innerHTML = JSON.stringify(res, null, 4);
    // });
});

function getMetadataDetails() {
    if(!connection) {
        jsforce.browser.login();
    }

    connection.metadata.describe('39.0', function(err, metadata) {
        if (err) { 
            return console.error('err', err); 
        }
        const organizationNamespace = metadata.organizationNamespace;
        const partialSaveAllowed = metadata.partialSaveAllowed;
        const testRequired = metadata.testRequired;
        
        let metadataObjects = metadata.metadataObjects;

        document.getElementById('result').innerHTML = organizationNamespace;
    });
}