import { appendAttributes } from './typescript-3-2.js';
import { appendChildren } from './typescript-3-3.js';

export const createComponent = (element, props, children) => {
  let tagParts = [`<${element}>`];
  tagParts = appendAttributes(tagParts, props);
  tagParts = appendChildren(tagParts, children);
  tagParts.push(`</${element}>`);
  return tagParts.join('');
};
