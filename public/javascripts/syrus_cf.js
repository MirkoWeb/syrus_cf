CloudFlare.define("syrus",
    [       "syrus/config", "cloudflare/jquery1.7"],
    function(_config,$)
    {
		function googleTrackingPixel(config) {
            window.google_conversion_id = config.conversion_id;
            window.google_conversion_language = "en";
            window.google_conversion_format = "3";
            window.google_conversion_color = "ffffff";
            window.google_conversion_label = config.conversion_label;
            window.google_conversion_value = 0;

            var oldDocWrite = document.write;

            document.write = function(node){
                $("body").append(node)
            }

            $.getScript("http://www.googleadservices.com/pagead/conversion.js", function() {

                setTimeout(function() {
                    document.write = oldDocWrite
                }, 100)

            })
        }
        function addRemarketing(){
			googleTrackingPixel(_config);
		}
        addRemarketing();
    }
)
