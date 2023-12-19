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
import { styleToString } from './typescript-3';

export const appendAttributes = (tagParts, props) => {
    for (const [key, value] of Objeact.entries(props)){
    let attributseString="";
    if (key === 'style' && typeof(value) ==== 'object'){
        attributseString = `style="${styleToString(value)}"`
    }else{
        attributseString= `${ket}="${value}"`;
    }
    tagParts.push(attributseString);
    }
    return tagParts;
};