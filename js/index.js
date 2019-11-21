$(document).ready(function(){

  $('button.toast-toggle').click(function(){
    $('#toast-'+this.id).toast('show');
  });

  $('.code').click(function(){
    var code = this.innerHTML;
    code = code.replace('<pre>','');
    code = code.replace('</pre>','');
    code = code.replace('<code>','');
    code = code.replace('</code>','');
    code = code.replace(/&lt;/g,'<');
    code = code.replace(/&gt;/g,'>');
    copyTextToClipboard(code);
    $('#copy-successful').toast('show');
  });  

})


function codeCopy(component,div_id){

  var code = $('#'+div_id).html();
  code = code.replace(/</g,'&lt;');
  code = code.replace(/>/g,'&gt;');
  var pre_code_appended = '<pre>'+'<code>'+ code + '</code>'+'</pre>';
  copy_code = $('#'+component+' .code').html();
  $('#'+component+' .code').html(copy_code+pre_code_appended);
}

function fallbackCopyTextToClipboard(text) {
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
