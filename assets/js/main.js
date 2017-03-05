//(function () {
//    'use strict';
//})();
var parallaxMouseMove = (function() {
    return {
        init: function init() {
            if ("#scene.axis") {
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
        }
    }
})();


var flipper = (function() {
    return {
        init: function init() {
            console.log('ghd');
            var button = $('.auth__button'),
            flipContainer = $('.flipper'),
            backButton = $('.auth__back-button');
            button.on('click', (function() {

                flipContainer.addClass('flip');
                button.addClass('auth__button_hidden');
            }));
            backButton.on('click', (function() {
                flipContainer.removeClass('flip');
                button.removeClass('auth__button_hidden');
            }));
        }
    }
})();


window.onload = (function() {
    //console.log('ghd');
    parallaxMouseMove.init();
    flipper.init();
});



//(function() {
//
//    var parallaxScroll = (function () {
//
//        var bg = document.querySelector('.parallax-bg'),
//            user = document.querySelector('.parallax-user'),
//            sectionName = document.querySelector('.parallax-name');
//
//        return {
//            move: function (block, windowScroll, strafeAmount) {
//                var strafe = windowScroll / -strafeAmount + '%',
//                    style = block.style;
//
//                style.marginTop = strafe;
//            },
//
//            init: function (wScroll) {
//                this.move(bg, wScroll, 45);
//                this.move(sectionName, wScroll, 35);
//                this.move(user, wScroll, 25);
//            }
//        }
//
//    })();
//
//    window.onscroll = function() {
//
//        var wScroll = window.pageYOffset;
//       // console.log(wScroll);
//        parallaxScroll.init(wScroll);
//    };
//})();
//

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgJ3VzZSBzdHJpY3QnO1xyXG4vL30pKCk7XHJcbnZhciBwYXJhbGxheE1vdXNlTW92ZSA9IChmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICAgICAgaWYgKFwiI3NjZW5lLmF4aXNcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzID0gcGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gcGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZG9jdW1lbnQuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXZpZGVyID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnICsgcG9zaXRpb25YICsgJ3B4LCcgKyBwb3NpdGlvblkgKyAncHgsMCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zRm9ybVN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcbnZhciBmbGlwcGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2hkJyk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCcuYXV0aF9fYnV0dG9uJyksXHJcbiAgICAgICAgICAgIGZsaXBDb250YWluZXIgPSAkKCcuZmxpcHBlcicpLFxyXG4gICAgICAgICAgICBiYWNrQnV0dG9uID0gJCgnLmF1dGhfX2JhY2stYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5vbignY2xpY2snLCAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZmxpcENvbnRhaW5lci5hZGRDbGFzcygnZmxpcCcpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdhdXRoX19idXR0b25faGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgYmFja0J1dHRvbi5vbignY2xpY2snLCAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmbGlwQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdmbGlwJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ2F1dGhfX2J1dHRvbl9oaWRkZW4nKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnZ2hkJyk7XHJcbiAgICBwYXJhbGxheE1vdXNlTW92ZS5pbml0KCk7XHJcbiAgICBmbGlwcGVyLmluaXQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8vKGZ1bmN0aW9uKCkge1xyXG4vL1xyXG4vLyAgICB2YXIgcGFyYWxsYXhTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4vL1xyXG4vLyAgICAgICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWJnJyksXHJcbi8vICAgICAgICAgICAgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC11c2VyJyksXHJcbi8vICAgICAgICAgICAgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtbmFtZScpO1xyXG4vL1xyXG4vLyAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbi8vICAgICAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgc3R5bGUubWFyZ2luVG9wID0gc3RyYWZlO1xyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vXHJcbi8vICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0NSk7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMubW92ZShzZWN0aW9uTmFtZSwgd1Njcm9sbCwgMzUpO1xyXG4vLyAgICAgICAgICAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMjUpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuLy9cclxuLy8gICAgfSkoKTtcclxuLy9cclxuLy8gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbi8vXHJcbi8vICAgICAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuLy8gICAgICAgLy8gY29uc29sZS5sb2cod1Njcm9sbCk7XHJcbi8vICAgICAgICBwYXJhbGxheFNjcm9sbC5pbml0KHdTY3JvbGwpO1xyXG4vLyAgICB9O1xyXG4vL30pKCk7XHJcbi8vXHJcbiJdfQ==
