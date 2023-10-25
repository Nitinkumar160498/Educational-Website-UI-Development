$(document).ready(function() {
    var isSearchOpen = false;

    $(".search-icon, #search-container input").click(function(event) {
        event.stopPropagation(); 
    });
    $(document).click(function(event) {
        if (isSearchOpen && !$(event.target).is(".search-icon") && !$(event.target).is("#search-container input")) {
            $("#search-container").css("display", "none");
            isSearchOpen = false;
        }
    });
    $(".search-icon").click(function(event) {
        event.stopPropagation();
        isSearchOpen = !isSearchOpen;

        if (isSearchOpen) {
            $("#search-container").css("display", "block");
        } else {
            $("#search-container").css("display", "none");
        }
    });
});

$(document).ready(function () {
    function toggleDropdowns() {
        if ($(window).width() <= 767) {
            $(".nav-column ul").hide();
        } else {
            $(".nav-column ul").show();
        }
    }

    toggleDropdowns();

    $(window).resize(function () {
        toggleDropdowns();
    });

    $(".nav-column h3").click(function () {
        if ($(window).width() <= 767) {
            var ul = $(this).next("ul");
            var otherDropdowns = $(".nav-column ul").not(ul);
            ul.slideToggle();
            otherDropdowns.slideUp();
        }
    });
});