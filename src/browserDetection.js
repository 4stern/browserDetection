var rb = rb || {};
(function(ns){
	var sUndetectedName	= "undetected";
	
	
	function getBrowserName(sUserAgent){
		var retVal = sUndetectedName,
			aBrowserNames 	= [
       		    {detectedName:'Firefox'				, contain:'Firefox\/'	  , notContain:'Seamonkey\/'},
       		    {detectedName:'Seamonkey'			, contain:'Seamonkey\/'	  , notContain:''},
       		    {detectedName:'Chrome'				, contain:'Chrome\/'	  , notContain:'Chromium\/'},
       		    {detectedName:'Chromium'			, contain:'Chromium\/'	  , notContain:''},
       		    {detectedName:'Safari'				, contain:'Safari\/'	  , notContain:'Chrome\/|Chrome\/'},
       		    {detectedName:'Opera'				, contain:'OPR\/|Opera\/' , notContain:''},
       		    {detectedName:'Internet Explorer'	, contain:'MSIE'		  , notContain:''}
       		];
		if(sUserAgent){
			for(var i=0,nLen=aBrowserNames.length; i<nLen; i++){
				var browser = aBrowserNames[i];
				if(sUserAgent.match(new RegExp(browser.contain),"g")&& !sUserAgent.match(new RegExp(browser.notContain,"ig"))){
					retVal = browser.detectedName;
				}
			}
		}
		return retVal;
	};
	function getBrowserVersion(sUserAgent){
		var retVal = sUndetectedName;
		if(sUserAgent){
			var results = sUserAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i);
			if( results && results.length>=3){
				retVal = results[2];
			}
		}
		return retVal;
	};
	function getRenderEngine(sUserAgent){
		var retVal = sUndetectedName;
		if(sUserAgent){
			var results = sUserAgent.match(/(Presto|WebKit|Gecko|Trident|Mosaic|Netscape|KTHML|Tasman|Robin|Blink|Servo|Lynx|Links)/i);
			if( results && results.length>=2){
				retVal = results[1];
			}
		}
		return retVal;
	};
	function getRenderEngineVersion(sUserAgent){
		var retVal = sUndetectedName;
		if(sUserAgent){
			var results = sUserAgent.match(/(Presto|WebKit|Gecko|Trident|Mosaic|Netscape|KTHML|Tasman|Robin|Blink|Servo|Lynx|Links(?=\/))\/?\s*([\d\.]+)/i);
			if( results && results.length>=3){
				retVal = results[2];
			}
		}
		return retVal;
	};
	function getOs(sUserAgent){
		var retVal = sUndetectedName;
		if(sUserAgent){
	        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(sUserAgent)){
	            if (RegExp["$1"] == "NT"){
	                switch(RegExp["$2"]){
	                    case "5.0":
	                    	retVal = "Windows 2000";
	                        break;
	                    case "5.1":
	                    	retVal = "Windows XP";
	                        break;
	                    case "6.0":
	                    	retVal = "Windows Vista";
	                        break;
	                    default:
	                    	retVal = "Windows NT";
	                        break;                
	                }                            
	            } else if (RegExp["$1"] == "9x"){
	            	retVal = "Windows ME";
	            } else {
	            	retVal = "Windows "+RegExp["$1"];
	            }
	        }
	        var result = sUserAgent.match(/(Linux|Debian|Ubuntu|Solaris|Unix|UnixWare|SmartOS|Sinix|SCO|IRIX|HP-UX|Dynix|BSD|Sun|MacOS|Mac|BeOS|Haiku|NewOS|X11|Android|bada|blackberry|palm|symbian|meego|iOS)+/ig);
	        if( result ){
	        	retVal = result.join("/");
	        }
		}
		return retVal;
	};
	function getBit(sUserAgent){
		var retVal = 32;
		if(sUserAgent){
			var results = sUserAgent.match(/(x86_64|win64|wow64)/i);
			if( results ){
				retVal = 64;
			}
		}
		return retVal;
	};
	function getMobile(sUserAgent){
		var retVal = false;
		if(sUserAgent){
			var results = sUserAgent.match(/(mobile)/i);
			if( results ){
				retVal = true;
			}
		}
		return retVal;
	};
	function getTablet(sUserAgent){
		var retVal = false;
		if(sUserAgent){
			var results = sUserAgent.match(/(tablet)/i);
			if( results ){
				retVal = true;
			}
		}
		return retVal;
	};
	
	
	
	ns.browserDetection = function(sUserAgent){
		return {
			browserName			: getBrowserName(sUserAgent),
			browserVersion		: getBrowserVersion(sUserAgent),
			renderEngine		: getRenderEngine(sUserAgent),
			renderEngineVersion	: getRenderEngineVersion(sUserAgent),
			os					: getOs(sUserAgent),
			bit					: getBit(sUserAgent),
			mobile				: getMobile(sUserAgent),
			tablet				: getTablet(sUserAgent),
			fullAgent			: sUserAgent
		};
	};
})(rb);
