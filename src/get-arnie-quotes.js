const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async(urls) => {

    // create the promise
    const promises = urls.map(async(url) => {

        // execute mock of httpGet and map the error
        const { status, body } = await httpGet(url).then(error => error);

        // body parsing and get the message property
        const { message } = JSON.parse(body);

        // based on the status code, return the message
        if (status === 200) {
            return { 'Arnie Quote': message };
        } else {
            return { 'FAILURE': message };
        }
    });

    // Return all promises
    return Promise.all(promises);
};

module.exports = {
    getArnieQuotes,
};