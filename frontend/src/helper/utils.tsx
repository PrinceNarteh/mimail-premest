export const capitalize = (word?: string) => {
  if (word === undefined) return;
  return word[0].toUpperCase() + word.substring(1);
};

export const title = (word: string) => {
  if (word === undefined) return;
  const splitWords = word.split(" ");
  if (splitWords.length === 0) return;
  const firstWord = capitalize(splitWords[0]);
  return `${firstWord} ${splitWords.slice(1).join(" ")}`;
};
