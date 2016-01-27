/*
https://developers.facebook.com/docs/graph-api/reference/v2.5/group
https://developers.facebook.com/docs/graph-api/reference/user/groups/
https://developers.facebook.com/docs/graph-api/reference/v2.5/group/feed

*/
var FB = require('fb');
FB.setAccessToken('CAACEdEose0cBAOGiKgsmlZBNfK4DCNlaG4lX0UJZCHtsZArQzkv06CZCTZBiYpkxLdaQpWVKXqkIKlbETdMw29XMUSXCmBAs2TAeLGDEQ2XqeR9LrOhX8RanAxnZBZAM89SvZADbJE4Qa3mIuaZAwtDRY6dcWdjZCYWV1LW3Oc7gQlC5AupycOPoQNplA0yymrA2Eh3hjIZBdn8Pym3XhloYUOZA');

function groups(fields) {
    FB.api("/me?fields=groups{" + fields + "}", function(res) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log(res);
    });
}

function feed(id) {
    FB.api("/" + id + "/feed", function(res) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log(res);
    });
}
/*Post on Ionic Dev Pará*/
function post(id, msg) {
    var body = msg;
    FB.api(id + '/feed', 'post', {
        message: body
    }, function(res) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log('Post Id: ' + res.id);
    });
}

// feed("me");
// feed("1166969206665154");
groups("id,description,name");
// post('1166969206665154', 'test');
