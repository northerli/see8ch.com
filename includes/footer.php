

         <!-- JavaScript  -->
        <script src="js/production.min.js"></script>
        <script src="js/retina.min.js"></script>

        <!-- FitText -->
        <script>
          jQuery("#home h1").fitText();
          jQuery("#home h4").fitText(2.8);
        </script>


        <!-- Google Analytics -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-40198502-1', 'auto');
          ga('send', 'pageview');

        </script>

       <!-- IE outdate friendly warning -->
        <script>
          var $buoop = {vs:{i:8,f:3.6,o:10.6,s:3.2,n:9}}
          $buoop.ol = window.onload;
          window.onload=function(){
           try {if ($buoop.ol) $buoop.ol();}catch (e) {}
           var e = document.createElement("script");
           e.setAttribute("type", "text/javascript");
           e.setAttribute("src", "http://browser-update.org/update.js");
           document.body.appendChild(e);
          }
        </script>

</body>
</html>
