/*
 * Create and export configuration variables
 */

// Container for all the envronments
const environments = {};

// environment configuration for testing: NODE_ENV="test"
environments.test = {
    "envName": "test",
    "hashingSecret": "ThisIsMyHashingSecret",
    "sessionSecret": "SomeSecretString",
    "httpPort": 8080,
    "httpsPort": 3001,
    "twitter": {
        "consumerKey": 'p9iYqC8nyAd8ZBpqHQdgFopr0',
        "consumerSecret": 'R0DZdQUMO9dZVTKYfWosX1luZXXcWIKIMi7QUWuHmOwFef0bAY',
        "callbackUrl": "http://127.0.0.1:8080/auth/twitter/callback"
    },
    "db": {
        "name": "twitterfeed",
        "username": "username",
        "password": "Mongodb500"
    }

};

// Staging (default) environment: NODE_ENV="staging"
environments.staging = {
    "envName": "staging",
    "hashingSecret": "ThisIsMyHashingSecret",
    "sessionSecret": "SomeSecretString",
    "httpPort": 8080,
    "httpsPort": 3001,
    "twitter": {
        "consumerKey": 'p9iYqC8nyAd8ZBpqHQdgFopr0',
        "consumerSecret": 'R0DZdQUMO9dZVTKYfWosX1luZXXcWIKIMi7QUWuHmOwFef0bAY',
        "callbackUrl": "http://127.0.0.1:8080/auth/twitter/callback"
    },
    "db": {
        "name": "twitterfeed",
        "username": "username",
        "password": "Mongodb500"
    }

};

// Production environment: NODE_ENV="production"
environments.production = {
    "envName": "production",
    "hashingSecret": "ThisIsMyHashingSecret",
    "sessionSecret": "SomeSecretString",
    "httpPort": process.env.PORT,
    "httpsPort": 5001,
    "twitter": {
        "consumerKey": 'p9iYqC8nyAd8ZBpqHQdgFopr0',
        "consumerSecret": 'R0DZdQUMO9dZVTKYfWosX1luZXXcWIKIMi7QUWuHmOwFef0bAY',
        "callbackUrl": "https://twitterfeed-app.herokuapp.com/auth/twitter/callback"
    },
    "db": {
        "name": "twitterfeed",
        "username": "username",
        "password": "Mongodb500"
    }

}

/*
 * Determine which environment is exported based on the
 * NODE_ENV variable as passed from the command line during start of the app
 */

let currentEnvironment = "";

if (typeof process.env.NODE_ENV === "string") {
    currentEnvironment = process.env.NODE_ENV.toLowerCase();
}

/*
 * Now look whether the given environment string is available or not
 * If not then export the default staging environment object
 */

let environmentToExport = environments.staging;

if (typeof environments[currentEnvironment] === "object") {
    environmentToExport = environments[currentEnvironment];
}

module.exports = environmentToExport;