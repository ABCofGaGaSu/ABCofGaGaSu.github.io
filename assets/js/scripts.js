/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$('.myindicator').on('slid.bs.carousel', function (event) {
    var nextactiveslide = $(event.relatedTarget).index();
    var $btns = $('.carousel-buttons');
    var $active = $btns.find("[data-slide-to='" + nextactiveslide + "']");
    $btns.find('.img-circle').removeClass('active');
    $active.find('.img-circle').addClass('active');
});