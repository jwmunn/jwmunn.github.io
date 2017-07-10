function formatParagraphs() {
  var $div = $('div'),
      str = $div.text(),
      paragraphs = str.split("\n");

  $div.empty();
  $.each(paragraphs, function(i, text) {
    text = $.trim(text);
    if ( text.length > 0 ) {
      $div.append('<p>' + text + '</p>');
    }
  });
  
  return paragraphs;
}

formatParagraphs();