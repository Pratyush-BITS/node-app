//importing node framework
var express = require('express');
 
var app = express();
//Respond with "there world" for requests that hit our root "/"
app.get('/', function (req, res) {
    let recipies = "idiyappam recipe | string hopper recipe | noolappam | instant idiyappam with stew recipe.\n" +
     "An authentic and traditional south indian noodles recipe made with rice flour in a traditional steam cooker. \n" +
     "it basically hails from the kerala cuisine of south india, but is hugely popular across india and are mainly \n" +
     "served for morning breakfast. it is generally served with a coconut-based mild curry known as vegetable stew or \n" +
     "locally known as ‘istew’ but can be served with any chutney or any spicy curry."
    res.send(recipies);
});
//listen to port 3000 by default
var port = process.env.PORT || 3000
var server = app.listen(port, () => {
    console.log('App listening on port ', port);
});

function stop() {
    server.close();
}
 
module.exports = app;
module.exports.stop = stop;
