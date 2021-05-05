const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: "50542"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
    console.log("Successfully established connection to the server.")
    conn.write('Name: ZOB');

    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50)
    // const moves = ["up", "left", "up", "left"]
    // let timeout = 500;
    // for(let move of moves) {
    //   setTimeout(() => {
    //     conn.write(`Move: ${move}`)
    //   }, timeout)
    //   timeout+=50
    // }

  })

  /*
  Registering multiple callbacks for the same event is totally valid. 
  They will be triggered in the sequence that they were registered. 
  */
 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  console.log(conn)
  return conn;
};

module.exports = { connect }