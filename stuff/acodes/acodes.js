// Minecraft Bukkit Essentials & codes, JavaScript

var black = "#000000";
var aCodes = [
	{
		code: "0",
		type: "colour",
		colour: black
	},
	{
		code: "1",
		type: "colour",
		colour: "#0000AA"
	},
	{
		code: "2",
		type: "colour",
		colour: "00AA00"
	},
	{
		code: "3",
		type: "colour",
		colour: "#00AAAA"
	},
	{
		code: "4",
		type: "colour",
		colour: "#AA0000"
	},
	{
		code: "5",
		type: "colour",
		colour: "#AA00AA"
	},
	{
		code: "6",
		type: "colour",
		colour: "#FFAA00"
	},
	{
		code: "7",
		type: "colour",
		colour: "#AAAAAA"
	},
	{
		code: "8",
		type: "colour",
		colour: "#555555"
	},
	{
		code: "9",
		type: "colour",
		colour: "#5555FF"
	},
	{
		code: "a",
		type: "colour",
		colour: "#55FF55"
	},
	{
		code: "b",
		type: "colour",
		colour: "#55FFFF"
	},
	{
		code: "c",
		type: "colour",
		colour: "#FF5555"
	},
	{
		code: "d",
		type: "colour",
		colour: "#FF55FF"
	},
	{
		code: "e",
		type: "colour",
		colour: "#FFFF55"
	},
	{
		code: "f",
		type: "colour",
		colour: "#FFFFFF"
	},
	{
		code: "l",
		css: "text-weight:bold;"
	},
	{
		code: "m",
		css: "text-decoration:line-through;"
	},
	{
		code: "n",
		css: "text-decoration:underline;"
	},
	{
		code: "o",
		css: "font-style:italic;"
	},
	{
		code: "r",
		type: "colour"
	}
];

function aCodesToHTML(input) {
	function closeSpans() {
		for(var i = 0; i < spansOpen; i++) {
			output += "</span>";
		}
		spansOpen = 0;
	}

	function addLetterToOutput() {
		output += input[i];
	}

	var spansOpen = 0;
	var output = "";

	for(var i = 0; i < input.length; i++) {

		if(input[i] === "&") {
			var foundCode = false;
			for(var j = 0; j < aCodes.length; j++) {
				var aCode = aCodes[j];
				if(input[i+1].toLowerCase() == aCode.code) {

					foundCode = true;
					if(aCode.type === "colour") {
						closeSpans();
						if (aCode.code !== "r") {
							output += '<span style="color:' + aCode.colour + ';">';
							spansOpen++;
						}
					} else {
						output += '<span style="' + aCode.css + '">';
						spansOpen++;
					}
					i++; // Skip to the next char
					break;
				}
			}
			if(!foundCode) {
				addLetterToOutput();
			}
		} else {
			addLetterToOutput();
		}
		if(i === input.length-1) {
			closeSpans();
		}
	}

	return output;
}


/* Check if "/stuff/acodes" is within the path.
This file is also used in http://kronosville.net/staff
It doesn't just check if the first bit IS /stuff/acodes
so that it can be tested without it being on the site. */

if (location.pathname.indexOf("/stuff/acodes") !== -1) {

	function el(id) {
		return document.getElementById("acodes-" + id);
	}

	el("btn").onclick = function() {
		var result = aCodesToHTML(el("input").value);
		el("output").value = result;
		el("preview").innerHTML = 'Preview: <span style="font-family:monospace;">'
			+ result + '</span>';
	};

}
