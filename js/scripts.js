window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    $('#preinterview dt').click(function(){
        //$('#preInterview dt').removeClass('act')
        if(!$(this).hasClass('act')){
            $(this).addClass('act')
        }else{
           $(this).addClass('act')
        }
    })
    
    var toggleall = false;
    $('#allBtn_interview').click(function(){
        if(toggleall){
            toggleall = false;
            $(this).html('AllView')
            $('#preinterview dt').removeClass('act');
        }else{
            $(this).html('AllClose')
            toggleall = true;
            $('#preinterview dt').addClass('act');
        }
    })

});
