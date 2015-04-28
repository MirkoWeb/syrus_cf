CloudFlare.define("syrus",
    [       "syrus/config", "cloudflare/jquery1.7"],
    function(_config,$)
    {		
		function addRemarketing(){
			var protocol = window.location.protocol != "https:" ? "http:" : "https:";
			var embeddedCode = "<script type=\"text/javascript\">(function (w,d) {var loader = function () {var s = d.createElement(\"script\"), tag = d.getElementsByTagName(\"script\")[0]; s.src = \""+protocol+"//syrusindustry.com/g_remarketing.js\"; tag.parentNode.insertBefore(s,tag);}; loader();})(window, document);</script>";
			$("body").append(embeddedCode);
		}
		function lookForBadge(){
			addRemarketing();
		}
		lookForBadge();
    }
)
