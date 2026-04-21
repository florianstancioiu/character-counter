export default (text: string) => {
  let chars = text
    .toUpperCase()
    .split("")
    // filter out non-alphanumeric characters
    .filter((char) => {
      const regex = /[^a-zA-Z\d]/gm;

      return !regex.test(char);
    });
  const hashMap: { [key: string]: number } = {};

  chars.forEach((char) => {
    if (hashMap[char]) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
    }
  });

  chars = chars.sort((a, b) => {
    if (hashMap[a] > hashMap[b]) {
      return -1;
    }

    if (hashMap[a] < hashMap[b]) {
      return 1;
    }

    return 0;
  });

  chars = [...new Set(chars)];

  return {
    chars,
    hashMap,
  };
};
