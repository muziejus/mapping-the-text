$(document).ready(function() {
  $("#abstract").on('keyup', function() {
    let words = this.value.match(/\S+/g).length;

    if (words > 200) {
      // Split the string on first 200 words and rejoin on spaces
      var trimmed = $(this).val().split(/\s+/, 200).join(" ");
      // Add a space at the end to make sure more typing creates new words
      $(this).val(trimmed + " ");
    }
    else {
      $('#display_count').text(words);
      $('#word_left').text(200-words);
    }
  });
}); 
