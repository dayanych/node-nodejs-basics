const parseArgs = () => {
  const args = process.argv.slice(2);
  const arr = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.startsWith('--')) {
      const flag = arg.slice(2);
      const value = args[i + 1];
      arr.push(`${flag} is ${value}`);
    }
  }

  console.log(arr.join(', '));
};

parseArgs();
