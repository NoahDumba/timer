const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (input) => {
  if (input === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  else if (input === 'b') {
    process.stdout.write('\x07');
  }
  else if (input <= 9 && input >= 1) {
    console.log(`setting timer for ${input} seconds...`);

    setTimeout(() => {
      process.stdout.write('\x07');
    }, input * 1000);
  }
});