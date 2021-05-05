const {connect} = require('./client')

const {setupInput} = require('./input')


/*
connect() returns an object that can be used to interact with the server

the object returned by connect() should be passed into setupInput()

setupInput() places a reference to that object in another variable connection 
which is in a global scope of that module

When data comes in from your keyboard, the stdin event handler can now interact 
with the server because the scope in the handler now includes both data from the 
keyboard AND the connection object!
*/
setupInput(connect())
console.log("Connecting ...");

