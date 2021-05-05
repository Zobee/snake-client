let connection;

const handleUserInput = function (data) {
  switch (data){
    case '\u0003':
      console.log("Exiting...")
      process.exit();
    case 'w':
      //console.log("Move: up");
      connection.write("Move: up");
      break;
    case 'a':
      //console.log("Move: left");
      connection.write("Move: left");
      break;
    case 's':
      //console.log("Move: down");
      connection.write("Move: down");
      break;
    case 'd':
      //console.log("Move: right");
      connection.write("Move: right");
      break;
    case 'q':
      connection.write("Say: 'Respecc'");
      break;
    case 'e':
      connection.write("Say: 'Testing'");
      break;
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};