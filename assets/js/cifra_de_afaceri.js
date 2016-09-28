$('input').on('click', function(){

	for (var i = 1; i <= 13; i++) {

		$("input[name = row2_input" + i + "_val]", '.cifra_de_afaceri').val(  
			parseFloat($("input[name = total_input" + i + "_val]", '.total_vn_din_exploatare').val()) -
			parseFloat($("input[name = row2_input" + i + "_val]", '.variatia_stocurilor').val()) - 
			parseFloat($("input[name = row2_input" + i + "_val]", '.alte_venituri_din_exploatare').val()) -
			parseFloat($("input[name = row2_input" + i + "_val]", '.vn_productia_realizata').val()) 
		);

	};
});