$('.calcul_angajati').on('click', function(){
    $('#full').modal('toggle').modal('show');
    $('#full').draggable({
        handle: ".modal-header"
    });

    $('input').on('click', function(){

        $("input[name = venituri_an1]").val( $("input[name = total_input5_val]", '.total_vn_din_productie').val());
        $("input[name = venituri_an2]").val( $("input[name = total_input10_val]", '.total_vn_din_productie').val());
        $("input[name = venituri_an3]").val( $("input[name = total_input11_val]", '.total_vn_din_productie').val());
        $("input[name = venituri_an4]").val( $("input[name = total_input12_val]", '.total_vn_din_productie').val());
        $("input[name = venituri_an5]").val( $("input[name = total_input13_val]", '.total_vn_din_productie').val());

        salar_brut = 0;
        $("input[name = salar_brut]").on('keyup change', function(){
            salar_brut = $(this).val();
            for (var i = 1; i <= 5; i++) {
                $("input[name = total_an" + i + "]").val( (parseFloat($("input[name = nr_sal_an" + i + "]").val()) * 12 * salar_brut).toFixed(2));  
                $("input[name = angajati_an" + i + "]").val($("input[name = nr_sal_an" + i + "]").val());  
                $("input[name = salarii_an" + i + "]").val($("input[name = total_an" + i + "]").val());  

                $("input[name = ch_cu_sal_an" + i +"]").val( ( 100 / parseFloat($("input[name = venituri_an" + i + "]").val()) * parseFloat($("input[name = total_an" + i + "]").val()) ).toFixed(2));
            };
        });

        $("input[name = salar_brut]").trigger('keyup');
         
    });

})

$('#save_salarizare').on('click', function(){
        
    $("input[name = row2_input5_val]", '.ch_cu_pers_angajat').val( $("input[name = salarii_an1]").val() );
    $("input[name = row2_input10_val]", '.ch_cu_pers_angajat').val( $("input[name = salarii_an2]").val() );
    $("input[name = row2_input11_val]", '.ch_cu_pers_angajat').val( $("input[name = salarii_an3]").val() );
    $("input[name = row2_input12_val]", '.ch_cu_pers_angajat').val( $("input[name = salarii_an4]").val() );
    $("input[name = row2_input13_val]", '.ch_cu_pers_angajat').val( $("input[name = salarii_an5]").val() );

    $('#full').modal('hide');
});
$('#reset_salarizare').on('click', function(){
    $("input[name = row2_ch_input5_val]", '.ch_cu_pers_angajat').val(0);
    for (var i = 10; i <= 13; i++) {
        $("input[name = row2_ch_input" + i + "_val]", '.ch_cu_pers_angajat').val(0);
    };
    for (var i = 1; i <= 5; i++) {
        $("input[name = total_an" + i + "]").val(0);  
        $("input[name = angajati_an" + i + "]").val(0);  
        $("input[name = salarii_an" + i + "]").val(0);  
        $("input[name = ch_cu_sal_an" + i +"]").val(0);
        $("input[name = nr_sal_an" + i + "]").val(0)
    };
    $("input[name = salar_brut]").val(0);
});