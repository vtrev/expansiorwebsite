 // sidenav initilalize

 document.addEventListener('DOMContentLoaded', function () {

     // //parallax
     //  var elems = document.querySelectorAll('.parallax');
     //  var instances = M.Parallax.init(elems, {});
     //carousel

     var elems = document.querySelectorAll('.carousel');
     var instances = M.Carousel.init(elems, {
         dist: 0,
         padding: 60,
         numVisible: 8,
         duration: 200,
     });
     //sidenav
     var sideNavElement = document.querySelectorAll('.sidenav');
     var sideNavInstance = M.Sidenav.init(sideNavElement, {
         edge: 'right'
     });


     //  M.AutoInit();
     var slide = () => {
         let carousel = document.getElementById('home-carousel');
         instance = M.Carousel.getInstance(carousel);
         instance.next();
         setTimeout(slide, 4000);
     }
     slide()


 });