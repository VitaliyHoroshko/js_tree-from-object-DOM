'use strict';

export function createTree(element, data) {
  element.innerHTML = '';

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in data) {
    const li = document.createElement('li');
    const value = data[key];

    const hasChildren =
      value && typeof value === 'object' && Object.keys(value).length > 0;

    if (hasChildren) {
      li.textContent = `◦ ${key}`;

      const nestedUl = document.createElement('ul');

      li.appendChild(nestedUl);
      createTree(nestedUl, value);
    } else {
      li.textContent = `• ${key}`;
    }

    ul.appendChild(li);
  }
}
