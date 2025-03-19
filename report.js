const newman = require('newman');

newman.run(
  {
    collection: require('./restful_banking _api.postman_collection.json'), 
    //environment: require('./collection/customer_api_env.json'), 
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
      htmlextra: {
        export: './Reports/report.html', 
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log('Collection run complete!');
  }
);
