// Minecraft Bukkit Essentials & codes, JavaScript

// NOTE After editing, remember to minify with jscompress.com

function hex(val) {
  return 'color:#' + val;
}

function decor(val) {
  return 'text-decoration:' + val;
}

function aCodesToHTML (input, startCode) {
  if (typeof startCode === 'undefined') startCode = '&';
  var spansOpen = 0;

  function closeSpans() {
    var result = '';
    for(var i = 0; i < spansOpen; i++) {
      // Better performance than `+=`
      result = result + '</span>';
    }
    return result;
  }

  function aCodeRegExp(val) {
    return new RegExp(startCode + val, 'gi');
  }

  return input.replace(aCodeRegExp('([\\da-fk-or])'), function (full, code) {

    var willCloseSpans = true, lower = code.toLowerCase(), css, result = '';

    switch (lower) {
      case '0': css = hex('000000'); break;
      case '1': css = hex('0000AA'); break;
      case '2': css = hex('00AA00'); break;
      case '3': css = hex('00AAAA'); break;
      case '4': css = hex('AA0000'); break;
      case '5': css = hex('AA00AA'); break;
      case '6': css = hex('FFAA00'); break;
      case '7': css = hex('AAAAAA'); break;
      case '8': css = hex('555555'); break;
      case '9': css = hex('5555FF'); break;
      case 'a': css = hex('55FF55'); break;
      case 'b': css = hex('55FFFF'); break;
      case 'c': css = hex('FF5555'); break;
      case 'd': css = hex('FF55FF'); break;
      case 'e': css = hex('FFFF55'); break;
      case 'f': css = hex('FFFFFF'); break;
      // case 'k': css = '...'; willCloseSpans = false; break;
      case 'l': css = 'font-weight:bold'; willCloseSpans = false; break;
      case 'm': css = decor('line-through'); willCloseSpans = false; break;
      case 'n': css = decor('underline'); willCloseSpans = false; break;
      case 'o': css = 'font-style:italic'; willCloseSpans = false; break;
    }

    if (willCloseSpans) {
      result = closeSpans();
      spansOpen = 0;
    }

    if (lower !== 'r') {
      result = result + '<span style="' + css + ';">'; // Better performance than `+=`
      spansOpen++;
    }
    return result;

  }) + closeSpans(); // Close spans at the end
}
