
var vm = new Vue({
    el : '#prognoza_fara_proiect',
    ready : function(){
    },
    data : {
        val : {
            1 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            2 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            3 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            4 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            5 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            6 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            7 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            8 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            9 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            10 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            11 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            12 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            13 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            14 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            15 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            16 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            17 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            18 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            19 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            20 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            21 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            22 : {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },

        },
    },
    methods : {
        getValue: function(r, id, type){

            var num = 0;

            switch (type) {
                case 0: return 0; break; // Daca ii 0 atunci nu este formula (randurile goale)

                case 1: // Daca ii 1 atunci calculam dupa formula (B[i] + B[i] * A[i-1])
                    var sibling = parseFloat(this.val[r][id-1]);
                    var top = $("[name='val["+(r-1)+"]["+id+"]']").is('[disabled=disabled]') ? this.val[r-1][id].toFixed(3) : parseFloat(this.val[r-1][id]/100);
                    num = sibling + sibling*top;
                    num = num.toFixed(3);
                break;

                case 2: // Calculam primul total (Total venituri din exploatare)
                    for(i = 2; i <=12; i++)
                    {
                        if(i != 3 && i != 5 )
                            num += parseFloat(this.val[i][id]);
                    }
                break;

                case 3: // Calculam al 2-lea total (Total venituri financiare)
                    for(i = 14; i <=18; i++)
                    {
                       num += parseFloat(this.val[i][id]);
                    }
                break;

                case 4:  // Calculam al 3-lea total (Total venituri extraordinare) Nu este formula
                    return 0;
                break;

                case 5: //// Calculam al 4-lea total (TOTAL VENITURI)
                    num += parseFloat(this.val[13][id]) + parseFloat(this.val[19][id]) + parseFloat(this.val[21][id]);
                break;

                default: return 0; break;

            }

            return num;


        },

    }
});