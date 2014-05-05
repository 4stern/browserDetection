browserDetection
================
This function interpretes a given user-agent-string and return a object with informations about it.


Usage
-----
Download the file and link it into your project. Uses the namespace `rb` for the function.
e.g. HTML:

    <script scr="browserDetection.js" type="text/javascript"></script>
    <script type="text/javascript">
        var ua = rb.browserDetection(navigator.userAgent);
    </script>

The `ua` is now a object with the following informations about your client:

    { browserName : string,
      browserVersion : string|number,
      renderEngine : string,
      renderEngineVersion	: string|number,
      os : string,
      bit : 32|64,
      mobile : true|false,
      tablet : true|false,
      fullAgent : string }
