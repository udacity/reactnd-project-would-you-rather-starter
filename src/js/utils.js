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
