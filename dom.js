'use strict';
console.log(document.body);
console.log(document.head);
console.log(document.documentElement);
console.log(document.body.childNodes);
// =====================================================
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
// ====================================================
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

// получение родителя элемента
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);

// =====================================================================
// получение отребута следующего за data otrebut
console.log(document.querySelector('[data-current="3"]').nextSibling);
// получение отребута предыдущего перед data otrebut
console.log(document.querySelector('[data-current="3"]').previousSibling);

// получение отребута следующего за data otrebut
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// получение родителя элемента
console.log(document.querySelector('#current').parentElement);

// перебираем колецию console.log(document.body.childNodes); и избавляемся от Node;
for (let node of document.body.childNodes) {
	// node это нода которая будет лежать внутри document.body.childNodes  видео на 15мин.
	if (node.nodeName == '#text') {
		continue;
	}
console.log(node);

}
