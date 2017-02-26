//(function () {
//    'use strict';
//})();
(function() {
    if("#scene.axis") {
        var parallaxContainer = document.getElementById('scene'),
            layers = parallaxContainer.children;

        window.addEventListener('mousemove', function (e) {
            var pageX = e.pageX,
                pageY = e.pageY,
                initialX = (window.innerWidth / 2) - pageX,
                initialY = (window.innerHeight / 2) - pageY;

            //console.log(document.);

            [].slice.call(layers).forEach(function (layer, i) {
                var divider = i / 100,
                    bottomPosition = (window.innerHeight / 2) * divider,
                    positionX = initialX * divider,
                    positionY = initialY * divider,
                    layerStyle = layer.style,
                    transFormString = 'translate3d(' + positionX + 'px,' + positionY + 'px,0)';
                layerStyle.transform = transFormString;
                layerStyle.bottom = '-' + bottomPosition + 'px';
            });


        });
    }
})();
(function() {

    var parallaxScroll = (function () {

        var bg = document.querySelector('.parallax-bg'),
            user = document.querySelector('.parallax-user'),
            sectionName = document.querySelector('.parallax-name');

        return {
            move: function (block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%',
                    style = block.style;

                style.marginTop = strafe;
            },

            init: function (wScroll) {
                this.move(bg, wScroll, 45);
                this.move(sectionName, wScroll, 35);
                this.move(user, wScroll, 25);
            }
        }

    })();

    window.onscroll = function() {

        var wScroll = window.pageYOffset;
       // console.log(wScroll);
        parallaxScroll.init(wScroll);
    };
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8oZnVuY3Rpb24gKCkge1xyXG4vLyAgICAndXNlIHN0cmljdCc7XHJcbi8vfSkoKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoXCIjc2NlbmUuYXhpc1wiKSB7XHJcbiAgICAgICAgdmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyksXHJcbiAgICAgICAgICAgIGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgIHBhZ2VZID0gZS5wYWdlWSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRvY3VtZW50Lik7XHJcblxyXG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXZpZGVyID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKCcgKyBwb3NpdGlvblggKyAncHgsJyArIHBvc2l0aW9uWSArICdweCwwKSc7XHJcbiAgICAgICAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zRm9ybVN0cmluZztcclxuICAgICAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSgpO1xyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHBhcmFsbGF4U2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWJnJyksXHJcbiAgICAgICAgICAgIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtdXNlcicpLFxyXG4gICAgICAgICAgICBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1uYW1lJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGUubWFyZ2luVG9wID0gc3RyYWZlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHNlY3Rpb25OYW1lLCB3U2Nyb2xsLCAzNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgLy8gY29uc29sZS5sb2cod1Njcm9sbCk7XHJcbiAgICAgICAgcGFyYWxsYXhTY3JvbGwuaW5pdCh3U2Nyb2xsKTtcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG4iXX0=
