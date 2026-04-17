export default (text: string, showAllLetters: boolean = false) => {
  const avoidCharsArr = [" ", ".", ","];
  let chars = text
    .toUpperCase()
    .split("")
    .filter((c) => !avoidCharsArr.includes(c));
  const charsLength = text.length;
  const hashMap: { [key: string]: any } = {};

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

  if (!showAllLetters) {
    chars = chars.slice(0, 5);
  }

  return {
    chars,
    charsLength,
    hashMap,
  };
};
