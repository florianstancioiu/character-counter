export default (text: string, excludeSpaces: boolean = false) => {
  const totalCharacters = excludeSpaces
    ? text.replace(" ", "").length
    : text.length;
  const wordCount = text.split(" ").length;
  const sentenceCount = text.split(".").length;

  return {
    totalCharacters,
    wordCount,
    sentenceCount,
  };
};
