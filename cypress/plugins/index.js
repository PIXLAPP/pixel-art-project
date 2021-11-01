/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// uncomment the following if you want to include Brave in your browser
// works only for MacOS -- for windows, add the path to your Brave executable
// to line 26

// const execa = require('execa');
// const findBrowser = () => {
//    // the path is hard-coded for simplicity
//     const browserPath =
//      '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
 
//     return execa(browserPath, ['--version']).then((result) => {
//      // STDOUT will be like "Brave Browser 77.0.69.135"
//         const [, version] = /Brave Browser (\d+\.\d+\.\d+\.\d+)/.exec(result.stdout);
//         const majorVersion = parseInt(version.split('.')[0]);
 
//         return {
//             name: 'Brave',
//             channel: 'stable',
//             family: 'chromium',
//             displayName: 'Brave',
//             version,
//             path: browserPath,
//             majorVersion,
//         };
//     });
// };
 
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // return findBrowser().then((browser) => {
    //     return {
    //         browsers: config.browsers.concat(browser),
    //     };
    // });
};