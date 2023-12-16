import { styleToString } from './typescript-3';

export const appendAttributes = (tagParts, props) => {
  for (const [key, value] of Object.entries(props)) {
    let appendAttributes = '';
    if (key === 'style' && typeof value === 'object') {
      attributseString = `style="${styleToString(value)}"`;
    } else {
      attributseString = `${key}="${value}"`;
    }
    tagParts.push(attributseString);
  }
  return tagParts;
};
