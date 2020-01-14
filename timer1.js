let args = process.argv;
args = args.slice(2);

for (arg of args) {
  if(Number(arg) && arg >= 1) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}