// Xndir 3 - Html tag 
function wrapInTags(text, tag) {
    return `<${tag}>${text}</${tag}>`;
}
let yourText = prompt('write text');
let yourTag = prompt('write tag');

alert(wrapInTags(yourText, yourTag));