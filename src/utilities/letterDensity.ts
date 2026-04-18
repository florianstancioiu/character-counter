export default (text: string) => {
  const avoidCharsArr = [" ", ".", ","];
  let chars = text
    .toUpperCase()
    .split("")
    .filter((c) => !avoidCharsArr.includes(c));
  const charsLength = text.length;
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
    charsLength,
    hashMap,
  };
};
