export const appendAttributes = (tagParts, children) => {
  if (children) {
    tagParts.push(...children);
  }
  return tagParts;
};
