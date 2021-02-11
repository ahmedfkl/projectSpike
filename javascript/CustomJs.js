 $(document).ready(function () {
     $(".menu-icon").on("click", function () {
         $("nav ul").toggleClass("showing");
     });
 });

 // Scrolling Effect

 $(window).on("scroll", function () {
     if ($(window).scrollTop()) {
         $('nav').addClass('black');
     } else {
         $('nav').removeClass('black');
     }
 })
/*
var items = $('.artice-list .article-content');
    var numItems = items.length;
    var perPage = 4;
    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
    */