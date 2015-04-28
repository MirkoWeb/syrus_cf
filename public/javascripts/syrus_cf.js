CloudFlare.define("syrus",
    [       "syrus/config", "cloudflare/jquery1.7"],
    function(_config,$)
    {		
		function addRemarketing(){
			var protocol = window.location.protocol != "https:" ? "http:" : "https:";
			$("body").append(remarketing_code);
		}
		function lookForBadge(){
			addRemarketing(_config.remarketing_code);
		}
		lookForBadge();
    }
)
