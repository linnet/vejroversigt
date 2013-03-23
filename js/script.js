$(function(){
    var zipText = $("#zipCodeTextField");
    zipText.keypress(updateZipCodesOnEnter);
    zipText.val(getZipCodes());

	showByvejr();
});


function updateZipCodesOnEnter(e) {
    if(e.which === 13) {
        setZipCodes($("#zipCodeTextField").val());
        showByvejr();
    }
}

function setZipCodes(zipCodes) {
    localStorage["ZipCodes"] = zipCodes;
}

function getZipCodes() {
    var zipCodes = localStorage["ZipCodes"];
    if (zipCodes === undefined) {
        setZipCodes("2700,2650,2720,2610,1000");
    }
    return zipCodes.split(",");
}

function showByvejr(){
    var zipCodeList = getZipCodes();

    $("div#byvejr").empty();

	for (var i = 0; i < zipCodeList.length; i++){
		var postnr = zipCodeList[i];
		var link = $("<a/>", {
			href: "http://www.dmi.dk/dmi/index/danmark/byvejr_danmark.htm?by="+postnr
		});
		
		// Link to pollen graph: http://servlet.dmi.dk/byvejr/servlet/pollen_dag1?by=2700
		
		link.append(
			$("<img/>", {
				src: "http://servlet.dmi.dk/byvejr/servlet/byvejr_dag1?by=" + postnr + "&mode=long&eps=true"
			})
		);
			
		link.appendTo("div#byvejr");
	}
}
