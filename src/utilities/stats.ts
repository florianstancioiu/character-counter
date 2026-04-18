export default (text: string, excludeSpaces: boolean = false) => {
  const trimmedText = text.trim();
  const totalCharacters = excludeSpaces
    ? trimmedText.replace(/\s+/, "").length
    : trimmedText.length;
  const wordCount =
    trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/).length;
  const sentenceCount =
    trimmedText.length === 0 ? 0 : trimmedText.split(/\.+/).length;

  return {
    totalCharacters,
    wordCount,
    sentenceCount,
  };
};
