require('dotenv').config();

const Twit = require('twit');

var T = new Twit({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
});

var postHope = () => {
  T.post(
    'statuses/update',
    {
      status: 'Freedom is the right of all sentient beings. - Optimus Prime',
    },
    function (err, data, response) {
      console.log(data);
    }
  );
};

postHope();
