//That means that we can run our tests in environments without browsers
// Jsdom is an in-JavaScript implementation of the DOM. 

import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;