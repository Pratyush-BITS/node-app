var request = require('supertest');
var app = require('../index');

describe('node-app', () => {
    after(() => {
        require('./../index').stop();
    })

    describe('GET /', function() {
        it('respond with hello There', (done) => {
            let recipies = "idiyappam recipe | string hopper recipe | noolappam | instant idiyappam with stew recipe.\n" +
     "An authentic and traditional south indian noodles recipe made with rice flour in a traditional steam cooker. \n" +
     "it basically hails from the kerala cuisine of south india, but is hugely popular across india and are mainly \n" +
     "served for morning breakfast. it is generally served with a coconut-based mild curry known as vegetable stew or \n" +
     "locally known as 'stew' but can be served with any chutney or any spicy curry."
            //navigate to root and check the response is "hello There"
            request(app).get('/').expect(recipies).end(done);
        });
    });
})