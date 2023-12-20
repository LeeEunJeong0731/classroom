import { createComponent } from './typescript-3-4.js';

const myComponent = createComponent('div', { id: 'example', style: { color: 'red' } }, ['이것이 자스렸다']);

const root = document.getElementById('root');
root.innerHTML = myComponent;
