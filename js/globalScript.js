 // sidenav initilalize

 document.addEventListener('DOMContentLoaded', function () {
     //sidenav
     var sideNavElement = document.querySelectorAll('.sidenav');
     var sideNavInstance = M.Sidenav.init(sideNavElement, {
         edge: 'right'
     });

     var elems = document.querySelectorAll('.materialboxed');
     var instances = M.Materialbox.init(elems, {});

 });