let tabsControls = $('[data-tab-controls]');
let tabPane = $('[data-tab-pane]');
tabsControls.on('click', function(e) {
  e.preventDefault();
  let target = $(e.target).attr('data-tabs');
  tabPane.removeClass('active');
  tabsControls.removeClass('active');
  $(target).addClass('active');
  $(e.target).addClass('active');
});