/*global sharejs $*/
$(document).ready(function() {
    // get the textarea element
    var elem = document.getElementById("rhythm");
    if (elem) {
        // connect to the server
        var connection = sharejs.open('test', 'text', 'http://gleitzman.com/apps/globalshare/channel', function(error, doc) {
            // this function is called once the connection is opened
            if (error) {
                console.log("ERROR:", error);
            } else {
                // attach the ShareJS document to the textarea
                doc.attach_textarea(elem);
            }
        });
    }
});