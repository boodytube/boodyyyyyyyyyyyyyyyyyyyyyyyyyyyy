
    document.addEventListener('click', function () {
    const audio = document.getElementById('bg-audio');
    audio.play();
    });

    window.onscroll = function() {
        updateScrollBar();
      };
      
      function updateScrollBar() {
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPosition = window.scrollY;
        var scrollPercentage = (scrollPosition / scrollHeight) * 100;
        
        document.getElementById('scrollBar').style.width = scrollPercentage + '%';
      }
    