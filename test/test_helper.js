<<<<<<< HEAD
//That means that we can run our tests in environments without browsers
// Jsdom is an in-JavaScript implementation of the DOM. 

import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
=======
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
>>>>>>> 3fcd5ef6f85880b0a38e3a2910ab07264f800c92
