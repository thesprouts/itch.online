WebFontConfig = {
  google: { families: [ 'Donegal+One::latin', 'Gloria+Hallelujah::latin', 'Permanent+Marker::latin', 'Mystery+Quest::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.24/webfontloader.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
