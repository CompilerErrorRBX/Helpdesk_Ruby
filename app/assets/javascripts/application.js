// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(() => {
  const $window = $(window);

  const actors = ['.popover'];

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer'
  });

  $window.click((e) => {
    const $target = $(e.target);
    actors.forEach(function(actor) {
      if (!$target.closest(actor).length) {
        $(actor).removeClass('active');
      }
    });
  });

  $('.side-bar-toggle').click((e) => {
    $('.side-bar').toggleClass('active');
  });

  $('[data-popover]').click(function(e) {
    $('.popover').removeClass('active');
    const $this = $(this);
    const position = $this.offset();
    const $popover = $($this.attr('data-popover'));

    // Default to bottom-side on the right.
    let top = position.top + $this.height() / 2;
    let left = position.left + $this.width() / 2;
    $('.popover-grow', $popover).removeClass('bottom, right'); // Make popover open from the top left;

    if (top > $window.height() / 2) {
      top = position.top - $popover.height() + $this.height() / 2;
      $('.popover-grow', $popover).addClass('bottom'); // Make the popover open from the bottom.
    }
    if (left > $window.width() / 2) {
      left = position.left - $popover.width() + $this.width() / 2;
      $('.popover-grow', $popover).addClass('right'); // Make the popover open from the right.
    }

    $popover.css({ 'top': `${top}px`, 'left': `${left}px` }).addClass('active');
    e.stopPropagation();
  });
});