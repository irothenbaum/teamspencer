;(function (window, $, undefined) {
  $(document).ready(function () {
    const padding = $('header').outerHeight() + 'px'
    $('section').css({paddingTop: padding, paddingBottom: padding})
  })
})(window, jQuery)
