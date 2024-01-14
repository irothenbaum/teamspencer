;(function (window, $, undefined) {
  let $header

  $(document).ready(function () {
    $header = $('header')
    $('section').css('padding-top', $header.outerHeight() + 'px')
  })
})(window, jQuery)
