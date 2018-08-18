let asideBtn =$('.mobile-aside-toggle');
let main = $('#main');
let overlay =$('.overlay');

asideBtn.on('click', function(e) {
    main.toggleClass('show-aside');
});

overlay.on('click', function(e) {
    main.toggleClass('show-aside');
});
