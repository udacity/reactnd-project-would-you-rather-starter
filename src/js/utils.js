export const getAnsweredOption = (userId, one, two) => {
  if (one.includes(userId)) {
    return "optionOne";
  }

  if (two.includes(userId)) {
    return "optionTwo";
  }

  return null;
};

export const isQuestionAnswered = (userId, one, two) => !!(one.includes(userId) || two.includes(userId));

export const previewText = (text) => {
  const cutLettersQty = Math.floor((text.length / 100) * 15);
  const truncatedText = text.slice(cutLettersQty).slice(0, -cutLettersQty);

  return `...${truncatedText}...`;
};
