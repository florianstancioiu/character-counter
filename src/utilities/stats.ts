export default (text: string, excludeSpaces: boolean = false) => {
  const trimmedText = text.trim();
  const totalCharacters = excludeSpaces
    ? trimmedText.replace(/\s+/gm, "").length
    : trimmedText.length;
  const wordCount =
    trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/gm).length;
  const sentenceCount =
    trimmedText.length === 0 ? 0 : trimmedText.split(/\.+/gm).length;

  return {
    totalCharacters,
    wordCount,
    sentenceCount,
  };
};
