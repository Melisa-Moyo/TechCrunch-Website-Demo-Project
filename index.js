document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('sticky-nav');
        var sticky = navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
        } else {
            navbar.style.position = 'absolute'; 
            navbar.style.top = 'auto';
        }
    });
});
