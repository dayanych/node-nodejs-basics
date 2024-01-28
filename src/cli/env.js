const parseEnv = () => {
  const envVariables = process.env;
  const arr = [];

  for (const key in envVariables) {
    if (key.startsWith('RSS_')) {
      arr.push(`${key}=${envVariables[key]}`);
    }
  }

  console.log(arr.join('; '));
};

parseEnv();
