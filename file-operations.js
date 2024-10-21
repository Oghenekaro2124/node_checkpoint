const fs = require('fs');

// Write "Hello Node" to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt file created successfully.');
});

// Check if hello.txt exists, and create it if it doesn't
fs.access('hello.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('hello.txt does not exist. Creating hello.txt...');
    fs.writeFile('hello.txt', 'Hello, this is a test file', (err) => {
      if (err) throw err;
      console.log('hello.txt created with default content.');
    });
  } else {
    // Read and log content of hello.txt
    fs.readFile('hello.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('Content of hello.txt:', data);
    });
  }
});
