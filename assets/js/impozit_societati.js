$('#impozit_de_profit').on('click', function(){
    $('#myModal').modal('toggle').modal('show');
    $('#myModal').draggable({
        handle: ".modal-header"
    }); 

$("input[name = afaceriLei]", '.tip_impozit0').val( $("input[name = cifra_de_afaceri_an0]", '.cifra_de_afaceri').val() ).css({'color':'black'});
$("input[name = afaceriLei]", '.tip_impozit1').val( $("input[name = row2_input5_val]",  '.cifra_de_afaceri').val() ).css({'color':'black'});
$("input[name = afaceriLei]", '.tip_impozit2').val( $("input[name = row2_input10_val]", '.cifra_de_afaceri').val() ).css({'color':'black'});
$("input[name = afaceriLei]", '.tip_impozit3').val( $("input[name = row2_input11_val]", '.cifra_de_afaceri').val() ).css({'color':'black'});
$("input[name = afaceriLei]", '.tip_impozit4').val( $("input[name = row2_input12_val]", '.cifra_de_afaceri').val() ).css({'color':'black'});
$("input[name = afaceriLei]", '.tip_impozit5').val( $("input[name = row2_input13_val]", '.cifra_de_afaceri').val() ).css({'color':'black'});

$("input[name = rezultatBrut]", '.tip_impozit0').val( $("input[name = rezultatul_brut_an0]", '.rezultatul_brut').val() ).css({'color':'black'});
$("input[name = rezultatBrut]", '.tip_impozit1').val( $("input[name = total_input5_val]",  '.rezultatul_brut').val() ).css({'color':'black'});
$("input[name = rezultatBrut]", '.tip_impozit2').val( $("input[name = total_input10_val]", '.rezultatul_brut').val() ).css({'color':'black'});
$("input[name = rezultatBrut]", '.tip_impozit3').val( $("input[name = total_input11_val]", '.rezultatul_brut').val() ).css({'color':'black'});
$("input[name = rezultatBrut]", '.tip_impozit4').val( $("input[name = total_input12_val]", '.rezultatul_brut').val() ).css({'color':'black'});
$("input[name = rezultatBrut]", '.tip_impozit5').val( $("input[name = total_input13_val]", '.rezultatul_brut').val() ).css({'color':'black'});

});

$('#cifra_af_eur').on('click',function(){
	if ($("input[name ='cursValutar']", '.modal-body').val() <= 0 ) {
        toastr.error('Introduceti cursul valutar!');
	} else{
        toastr.success('Operatiune cu success !', "", 'success');
		for (var i = 0; i <=5; i++) {
			$("input[name = afaceriEur]", '.tip_impozit'+i+'').val( (parseFloat( $("input[name = afaceriLei]", '.tip_impozit'+i+'').val()) / parseFloat($("input[name = curs_Valutar]", '.tip_impozit'+i+'').val())).toFixed(2)).css({'color':'black'});
		};
	};

});

$("input[name = dataCurs]").on('change',function(){
	for (var i = 0; i <= 5; i++) {
		$("input[name = data_Curs]", '.tip_impozit'+i+'').val($(this).val()).css({'color':'black'});
	};
});

$("input[name = 'cursValutar']").on('change keyup',function(){
	for (var i = 0; i <= 5; i++) {
		$("input[name = curs_Valutar]", '.tip_impozit'+i+'').val($(this).val()).css({'color':'black'});
	};
});

clas_impozit = 0;

val_impozit  = 0;
$(".selectImpozit").on('change click',function(){
	clas_impozit = '.'+$(this).closest('tr').attr('class');

	val_impozit = $('.selectImpozit', clas_impozit).find(":selected").val();
	$("input[name = valoareImpozit]", clas_impozit).val(val_impozit).css({'color':'black'});
	if (val_impozit == 3) {
		$("input[name = valoareImpozabila]", clas_impozit).val( $("input[name = afaceriLei]", clas_impozit).val() ).css({'color':'black'});
	}else{
		$("input[name = valoareImpozabila]", clas_impozit).val( $("input[name = rezultatBrut]", clas_impozit).val() ).css({'color':'black'});
	};	

	$("input[name = impozitCalculat]", clas_impozit).val( (parseFloat($("input[name = valoareImpozabila]", clas_impozit).val()) /100 * val_impozit).toFixed(2) ).css({'color':'black'});

});

$('#save_this_impozit').on('click',function(){

	$("input[name = impozit_de_profit_an0]", '.impozit_de_profit').val( $("input[name = impozitCalculat]", '.tip_impozit0').val()).css({'color':'black'});
	$("input[name = total_input5_val]", '.impozit_de_profit').val( $("input[name = impozitCalculat]", '.tip_impozit1').val()).css({'color':'black'});
	$("input[name = total_input10_val]", '.impozit_de_profit').val($("input[name = impozitCalculat]", '.tip_impozit2').val()).css({'color':'black'});
	$("input[name = total_input11_val]", '.impozit_de_profit').val($("input[name = impozitCalculat]", '.tip_impozit3').val()).css({'color':'black'});
	$("input[name = total_input12_val]", '.impozit_de_profit').val($("input[name = impozitCalculat]", '.tip_impozit4').val()).css({'color':'black'});
	$("input[name = total_input13_val]", '.impozit_de_profit').val($("input[name = impozitCalculat]", '.tip_impozit5').val()).css({'color':'black'});

	$("input[name = total_input1_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input1_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input1_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input1_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input1_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input1_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});
	$("input[name = total_input2_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input2_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input2_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input2_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input2_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input2_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});
	$("input[name = total_input3_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input3_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input3_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input3_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input3_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input3_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});
	$("input[name = total_input4_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input4_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input4_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input4_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input4_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input4_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});

	$("input[name = total_input6_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input6_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input6_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input6_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input6_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input6_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});
	$("input[name = total_input7_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input7_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input7_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input7_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input7_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input7_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});
	$("input[name = total_input8_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input8_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input8_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input8_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input8_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input8_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});
	$("input[name = total_input9_val]", '.impozit_de_profit').val( ((parseFloat( $("input[name = row2_input9_val]",'.venit_fn').val() ) 
				-  parseFloat( $("input[name = row2_input9_val]",'.ch_privind_dobinzi').val() ) 
				- parseFloat( $("input[name = row2_input9_val]",'.cheltuieli_fn').val() )  
				+ parseFloat( $("input[name = total_input9_val]",'.total_vn_din_exploatare').val() ) 
				-  parseFloat( $("input[name = total_input9_val]",'.total_ch_pt_exploatare').val() )) * 0.03).toFixed(2) ).css({'color':'black'});


	for (var i = 1; i <=4 ; i++)  {
		$("input[name= total_input"+i+"_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- 
			 ((parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )) * 0.03) ).toFixed(2)).css({'color':'black'});
	};

	$("input[name= total_input5_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- parseFloat($("input[name = impozitCalculat]", '.tip_impozit1').val())).toFixed(2)).css({'color':'black'});
	$("input[name= total_input10_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- parseFloat($("input[name = impozitCalculat]", '.tip_impozit1').val())).toFixed(2)).css({'color':'black'});
	$("input[name= total_input11_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- parseFloat($("input[name = impozitCalculat]", '.tip_impozit1').val())).toFixed(2)).css({'color':'black'});
	$("input[name= total_input12_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- parseFloat($("input[name = impozitCalculat]", '.tip_impozit1').val())).toFixed(2)).css({'color':'black'});
	$("input[name= total_input13_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- parseFloat($("input[name = impozitCalculat]", '.tip_impozit1').val())).toFixed(2)).css({'color':'black'});

	for (var i = 6; i <=9 ; i++)  {
		$("input[name= total_input"+i+"_val]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )
			- 
			 ((parseFloat( $("input[name = row2_input"+i+"_val]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = row2_input"+i+"_val]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = row2_input"+i+"_val]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_input"+i+"_val]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_input"+i+"_val]",'.total_ch_pt_exploatare').val() )) * 0.03) ).toFixed(2)).css({'color':'black'});
	};

		$("input[name= rezultatul_net_an0]", '.rezultatul_net').val( ( 
			parseFloat( $("input[name = venit_fn_an0]",'.venit_fn').val() ) 
			-  parseFloat( $("input[name = ch_privind_dobinzi_an0]",'.ch_privind_dobinzi').val() ) 
			- parseFloat( $("input[name = cheltuieli_fn_an0]",'.cheltuieli_fn').val() )  
			+ parseFloat( $("input[name = total_vn_din_exploatare_an0]",'.total_vn_din_exploatare').val() ) 
			-  parseFloat( $("input[name = total_ch_pt_exploatare_an0]",'.total_ch_pt_exploatare').val() )
			-	parseFloat($("input[name = impozitCalculat]", '.tip_impozit0').val())).toFixed(2)).css({'color':'black'});

    $('#myModal').modal('toggle').modal('hide');

});