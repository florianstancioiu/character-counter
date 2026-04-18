export default (text: string, excludeSpaces: boolean = false) => {
  const trimmedText = text.trim();
  const totalCharacters = excludeSpaces
    ? trimmedText.replace(/\s+/gm, "").length
    : text.length;
  const wordCount =
    trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/gm).length;
  const sentenceCount =
    trimmedText.length === 0
      ? 0
      : trimmedText.match(/[\w|\)][.?!](\s|$)/g) !== null
        ? trimmedText.match(/[\w|\)][.?!](\s|$)/g)!.length
        : 0;

  return {
    totalCharacters,
    wordCount,
    sentenceCount,
  };
};
