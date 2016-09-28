$('input').on('click', function(){

	var active_tab = $("div[class= 'tab-pane active']").attr("id");

	if (active_tab == 'tab_3') {

		for (var i = 1; i <=13; i++) {
			$("input[name = total_input"+i+"_val]", '.cheltuieli_financiare').val( ( parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) + parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() ) ).toFixed(2) );
		};

		$("input[name = cheltuieli_financiare_an0]", '.cheltuieli_financiare').val( ( parseFloat( $("input[name = ch_privind_dobinzi_an0]",'.ch_privind_dobinzi').val() ) + parseFloat( $("input[name = cheltuieli_fn_an0]",'.cheltuieli_fn').val() ) ).toFixed(2) );

		for (var i = 1; i <=13; i++) {
			$("input[name = total_input"+i+"_val]", '.rezultatul_financiar').val( ( parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) -  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) - parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() ) ).toFixed(2) );
		};

		$("input[name = rezultatul_financiar_an0]", '.rezultatul_financiar').val( ( parseFloat( $("input[name = venit_fn_an0]",'.venit_fn').val() ) -  parseFloat( $("input[name = ch_privind_dobinzi_an0]",'.ch_privind_dobinzi').val() ) - parseFloat( $("input[name = cheltuieli_fn_an0]",'.cheltuieli_fn').val() ) ).toFixed(2) );

		for (var i = 1; i <=13; i++) {
			$("input[name = row2_input"+i+"_val]", '.rezultat_din_exploatare').val( ( parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) -  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() ) ).toFixed(2) );
		};

		$("input[name = rezultat_din_exploatare_an0]", '.rezultat_din_exploatare').val( ( parseFloat( $("input[name = total_vn_din_exploatare_an0]",'.total_vn_din_exploatare').val() ) -  parseFloat( $("input[name = total_ch_pt_exploatare_an0]",'.total_ch_pt_exploatare').val() ) ).toFixed(2) );

		for (var i = 1; i <=13; i++) {
			$("input[name = total_input"+i+"_val]", '.rezultatul_brut').val( ( 
				parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() ) ).toFixed(2));
		};

		$("input[name = rezultatul_brut_an0]", '.rezultatul_brut').val( ( parseFloat( $("input[name = venit_fn_an0]",'.venit_fn').val() ) -  parseFloat( $("input[name = ch_privind_dobinzi_an0]",'.ch_privind_dobinzi').val() ) - parseFloat( $("input[name = cheltuieli_fn_an0]",'.cheltuieli_fn').val() )  + parseFloat( $("input[name = total_vn_din_exploatare_an0]",'.total_vn_din_exploatare').val() ) -  parseFloat( $("input[name = total_ch_pt_exploatare_an0]",'.total_ch_pt_exploatare').val() )).toFixed(2));
	
	} 

});