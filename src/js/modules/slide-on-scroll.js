export function slide() {

    var onAppear = [];

    document.addEventListener("DOMContentLoaded", function() {
      onAppear = [].map.call(document.querySelectorAll(".anim"), function(item) {
        return item;
      });
    }, false);
    
    window.addEventListener("scroll", function() {
      onAppear.forEach(function(elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
         elem.classList.add("visible");
        } else {

        }
      });
    }, false);


    function drop() {
      const a = document.querySelector('.a');

      a.classList.add('drop');
    }

    function margin() {
      const ch = document.querySelector('.ch');
    
      ch.classList.add('margin');
    }
    

    setTimeout(drop, 2900);
    setTimeout(margin, 3100);
}