//$('.disable').attr('readonly', 'readonly');
/*$('#venit_now').editable({
    type: 'text',
    pk: 1,
    url: '/post',
    title: 'Introduceti sursa de venit'
});*/

$(function(){
	$body = $('#cpp');
	$total_vn = $('#total_vn', $body);
	$total_ch = $('#total_ch', $body);
	$rezultat_exp1 = $('#rezultat_expl', $body);
	$venit = $('.venit', $body);
	$cheltuieli = $('.cheltuieli', $body);
	$total_vn.attr('readonly','readonly');
	$total_ch.attr('readonly','readonly');
	$rezultat_exp1.attr('readonly','readonly');
	$venit.on('keyup change click', function(){
		total_vn = 0;
		$venit.each(function(){
			window.total_vn += parseInt( $(this).val() > 0 ? $(this).val() : 0 );
		})
		$total_vn.val( total_vn ).attr('readonly','readonly');
		window.total_ch > 0 ? total_ch = window.total_ch : total_ch = 0;
		$rezultat_exp1.val( total_vn - total_ch ).attr('readonly','readonly');
	});
	$cheltuieli.on('keyup change click', function(){
		total_ch = 0;
		$cheltuieli.each(function(){
			window.total_ch += parseInt( $(this).val() > 0 ? $(this).val() : 0 );
		})
		$total_ch.val( total_ch ).attr('readonly','readonly');
		window.total_vn > 0 ? total_vn = window.total_vn : total_vn = 0;
		$rezultat_exp1.val( total_vn-total_ch ).attr('readonly','readonly');
	});

    $(function(){
		var all_inputs = [];
			$('input').each(function(){
				all_inputs.push($(this));
			});
		all_inputs.forEach(function (el) {
			$(el).val( $(el).val() == '' ? 0 : $(el).val());
		})

		// all_inputs.forEach(function (el) {
		//    $(el).val() ==  0 ? $(el).css('color', 'transparent') : $(el).css('color', 'black');
	 	//  })

 		an1_index_name = 'row2_input5_val';
 		an2_index_name = 'row2_input10_val';

		$('.valori_trim_an1').on('keyup change click', function(){
			input_name = $(this).attr('name').replace('row1', 'row2');
			$(this).closest('tr').next().find('input[name="'+input_name+'"]').val(parseInt($(this).val())*parseInt($(this).closest('tr').next().find('input[name="'+an1_index_name+'"]').val()) / 100);
		});

		$('.valori_trim_an2').on('keyup change click', function(){
			input_name = $(this).attr('name').replace('row1', 'row2');
			$(this).closest('tr').next().find('input[name="'+input_name+'"]').val(parseInt($(this).val())*parseInt($(this).closest('tr').next().find('input[name="'+an2_index_name+'"]').val()) / 100);
		});

		$('.an1').on('keyup change click', function(){
			var parent1 = $(this).closest('tr').prev();
			var parent2 = $(this).closest('tr');
			var td_nr = ['13','12','11','10','9','8','7','6','4','3','2','1'];
			for(var i = 0  ; i <= td_nr.length; i++) {
				var input1 = $('input[name="row1_input'+td_nr[i]+'_val"]', parent1).val() ;
				if ( td_nr[i] == 13 || td_nr[i] == 12 || td_nr[i] == 11 || td_nr[i] == 10 ) {
					$('input[name="row2_input'+td_nr[i]+'_val"]', parent2).val( (( parseFloat( $(this).val() ) * input1) / 100 + parseFloat( $(this).val() ) ).toFixed(2));
				}else{
						$('input[name="row2_input'+td_nr[i]+'_val"]', parent2).val( ( parseFloat( $(this).val() ).toFixed(2) * input1 ).toFixed(2) / 100 );
				}
			}
		});

		$('.valori_trim_an1_2').on('keyup change click', function(){
			var parent2 = $(this).closest('tr').next();
			var parent1 = $(this).closest('tr');
			var input10 = $('input[name="row2_input10_val"]', parent2);
			var input5 = $('input[name="row2_input5_val"]', parent2);
			input10.val( (parseFloat( $(this).val() * parseFloat(input5.val()) / 100 ) + parseFloat(input5.val())).toFixed(2) ) ;
			var td_nr = ['13','12','11','9','8','7','6'];
			for(var i = 0  ; i <= td_nr.length; i++) {
				var input1 = parseFloat( $('input[name="row1_input'+td_nr[i]+'_val"]', parent1).val() ).toFixed(2);
				if ( td_nr[i] == 13 || td_nr[i] == 12 || td_nr[i] == 11) {
					$('input[name="row2_input'+td_nr[i]+'_val"]', parent2).val( ( (parseFloat( $('input[name="row2_input10_val"]', parent2).val() ).toFixed(2) * input1 ) / 100 + parseFloat( $('input[name="row2_input10_val"]', parent2).val())).toFixed(2) );
				}else{
					$('input[name="row2_input'+td_nr[i]+'_val"]', parent2).val( ( (parseFloat( $('input[name="row2_input10_val"]', parent2).val() ).toFixed(2) * input1 ) / 100).toFixed(2) );
				}
			}
		});

		$('.valori_trim_an2_3').on('keyup change click', function(){
			var parent2 = $(this).closest('tr').next();
			var parent1 = $(this).closest('tr');
			var input11 = $('input[name="row2_input11_val"]', parent2);
			var input10 = $('input[name="row2_input10_val"]', parent2);
			input11.val( (parseFloat( $(this).val() * parseFloat(input10.val()) / 100 ) + parseFloat(input10.val())).toFixed(2) ) ;
			var td_nr = ['13','12'];
			for(var i = 0  ; i <= td_nr.length; i++) {
				var input1 = parseFloat( $('input[name="row1_input'+td_nr[i]+'_val"]', parent1).val() ).toFixed(2);
					$('input[name="row2_input'+td_nr[i]+'_val"]', parent2).val( ( (parseFloat( $('input[name="row2_input11_val"]', parent2).val() ).toFixed(2) * input1 ) / 100 + parseFloat( $('input[name="row2_input11_val"]', parent2).val())).toFixed(2) );
			}
		});

		$('.valori_trim_an3_4').on('keyup change click', function(){
			var parent2 = $(this).closest('tr').next();
			var parent1 = $(this).closest('tr');
			var input12 = $('input[name="row2_input12_val"]', parent2);
			var input11 = $('input[name="row2_input11_val"]', parent2);
			input12.val( (parseFloat( $(this).val() * parseFloat(input11.val()) / 100 ) + parseFloat(input11.val())).toFixed(2) ) ;
			var input1 = parseFloat( $('input[name="row1_input13_val"]', parent1).val() ).toFixed(2);
			$('input[name="row2_input13_val"]', parent2).val( ( (parseFloat( $('input[name="row2_input12_val"]', parent2).val() ).toFixed(2) * input1 ) / 100 + parseFloat( $('input[name="row2_input12_val"]', parent2).val())).toFixed(2) );
		});
		$('.valori_trim_an4_5').on('keyup change click', function(){
			var parent2 = $(this).closest('tr').next();
			var parent1 = $(this).closest('tr');
			var input13 = $('input[name="row2_input13_val"]', parent2);
			var input12 = $('input[name="row2_input12_val"]', parent2);
			input13.val( (parseFloat( $(this).val() * parseFloat(input12.val()) / 100 ) + parseFloat(input12.val())).toFixed(2) ) ;
		});

		// total venituri din productia proprie
		$('.pret_unitar').on('keyup change click', function(){
			$("input[name = row2_input5_val]", '.ch_materii').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_materii').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.alte_ch').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.alte_ch').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.alte_ch_din_afara').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.alte_ch_din_afara').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.ch_marfuri').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_marfuri').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.ch_cu_amortizare').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_cu_amortizare').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.alte_ch_de_exploatare').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.alte_ch_de_exploatare').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.ch_cu_asigurarile').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_cu_asigurarile').val()).toFixed(2));
		});

		$('#index_pret_unitar').on('keyup change click', function(){
			$("input[name = row2_input5_val]", '.ch_materii').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_materii').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.alte_ch').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.alte_ch').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.alte_ch_din_afara').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.alte_ch_din_afara').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.ch_marfuri').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_marfuri').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.ch_cu_amortizare').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_cu_amortizare').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.alte_ch_de_exploatare').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.alte_ch_de_exploatare').val()).toFixed(2));
			$("input[name = row2_input5_val]", '.ch_cu_asigurarile').val( parseFloat($("input[name = total_input5_val]", '.total_vn_din_productie').val() / 100 * $("input[name = row2_ch_input0_val]", '.ch_cu_asigurarile').val()).toFixed(2));
		});

		// end total venituri din productia proprie


	});
});