function el(id) {
  return document.getElementById('acodes-' + id);
}

el('btn').onclick = function() {
  var result = aCodesToHTML(el('input').value);
  el('output').value = result;
  el('preview').innerHTML = 'Preview: <span style="font-family:monospace;">'
  + result + '</span>';
}
