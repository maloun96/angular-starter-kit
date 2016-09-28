
var vm = new Vue({
    el : '#app',
    ready : function(){
    },
    data : {
        table1P : [{ name : '', pret_med : 0, ora : 0, nr_ore_zi : 0, zi : 0, nr_zile_luna : 0, luna : 0, an : 0, total : 0}],
        table1S : [{ name : '', pret_med : 0, nr_ore_zi : 0, nr_zile_luna : 0, luna : 0, an : 0, total : 0, contracte : 0
        }],
        table2S : [{ name : '',
            an1 : 0,
            totalAn1 : 0,
            an2 : 0,
            totalAn2 : 0,
            an3 : 0,
            totalAn3 : 0,
            an4 : 0,
            totalAn4 : 0,
            an5 : 0,
            totalAn5 : 0
        }],
        table2P : [{ name : '',
            an1 : 0,
            totalAn1 : 0,
            an2 : 0,
            totalAn2 : 0,
            an3 : 0,
            totalAn3 : 0,
            an4 : 0,
            totalAn4 : 0,
            an5 : 0,
            totalAn5 : 0
        }],
        table3S : [{ name : '',
            trim11 : 0,  trim12 : 0,  trim21 : 0,  trim22 : 0,
            trim31 : 0,  trim32 : 0,  trim41 : 0,  trim42 : 0,
            trim51 : 0,  trim52 : 0,  trim61 : 0,  trim62 : 0,
            trim71 : 0,  trim72 : 0,  trim81 : 0,  trim82 : 0,
            trim1 : 0,   trim2 : 0,   trim3 : 0,   trim4 : 0,
            trim5 : 0,   trim6 : 0,   trim7 : 0,   trim8 : 0,
            an11  : 0,   an12  : 0,   an13  : 0,   an21  : 0,
            an22  : 0,   an23  : 0,   an3   : 0,   an4   : 0,
            an5   : 0
        }],
        table3P : [{ name : '',
            trim11 : 0,  trim12 : 0,  trim21 : 0,  trim22 : 0,
            trim31 : 0,  trim32 : 0,  trim41 : 0,  trim42 : 0,
            trim51 : 0,  trim52 : 0,  trim61 : 0,  trim62 : 0,
            trim71 : 0,  trim72 : 0,  trim81 : 0,  trim82 : 0,
            trim1 : 0,   trim2 : 0,   trim3 : 0,   trim4 : 0,
            trim5 : 0,   trim6 : 0,   trim7 : 0,   trim8 : 0,
            an11  : 0,   an12  : 0,   an13  : 0,   an21  : 0,
            an22  : 0,   an23  : 0,   an3   : 0,   an4   : 0,
            an5   : 0
        }],
        centralizator : [
            { name : 'Venituri din vanzari produse', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din prestari servicii', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din vanzari marfuri', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din subventii de exploatare aferente cifrei de afaceri nete', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din subventii pentru investitii', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din alte activitati', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an30 : 0, an4o: 0, an5: 0 },
            { name : 'Variatia stocurilor (+ pentru C; - pentru D)', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an30 : 0, an4o: 0, an5: 0 },
            { name : 'Venituri din productia realizata pentru scopuri proprii si capitalizata', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Alte venituri din exploatare', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Total venituri din exploatare', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din imobilizari financiare', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din diferente de curs valutar', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din dobanzi', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din sconturi obtinute', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Alte venituri financiare ', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Total venituri financiare', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din subventii', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Venituri din productia realizata pentru scopuri proprii si capitalizata', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'Total venituri extraordinare', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
            { name : 'TOTAL VENITURI', an0 : 0, an1 : 0, an2 : 0, an3 : 0, trim1 : 0, trim2 : 0, trim3 : 0, trim4: 0, an1o : 0, trim5 : 0, trim6 : 0, trim7 : 0, trim8 : 0, an2o : 0, an3o : 0, an4o: 0, an5o: 0 },
        ],
        selected : ''
    },
    methods : {
        addRow: function (table) {
            try {
                if (table == 'P'){
                    this.table1P.splice(this.table1P.length + 1, 0, {pret_med : 0, ora : 0, nr_ore_zi : 0, nr_zile_luna : 0, an: 0});
                    this.table2P.splice(this.table2P.length + 1, 0, {an1:0, an2:0, an3:0, an4:0, an5:0});
                    this.table3P.splice(this.table3P.length + 1, 0, {trim11 : 0,  trim12 : 0, trim21 : 0,  trim22 : 0, trim31 : 0,  trim32 : 0,  trim41 : 0,  trim42 : 0,  trim51 : 0,  trim52 : 0,  trim61 : 0,  trim62 : 0, trim71 : 0,  trim72 : 0,  trim81 : 0,  trim82 : 0});
                } else if(table == 'S'){
                    this.table1S.splice(this.table1S.length + 1, 0, {pret_med : 0, ora : 0, nr_ore_zi : 0, nr_zile_luna : 0, an :0});
                    this.table2S.splice(this.table2S.length + 1, 0, {an1:0, an2:0, an3:0, an4:0, an5:0});
                    this.table3S.splice(this.table3S.length + 1, 0, {trim11 : 0,  trim12 : 0, trim21 : 0,  trim22 : 0, trim31 : 0,  trim32 : 0,  trim41 : 0,  trim42 : 0,  trim51 : 0,  trim52 : 0,  trim61 : 0,  trim62 : 0, trim71 : 0,  trim72 : 0,  trim81 : 0,  trim82 : 0});
                }

            } catch(e)
            {
                console.log(e);
            }
        },
        central : function(){
            var th = this;
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim1 += (e.pret_med * th.table3P[i].trim11) + (e.pret_med * th.table3P[i].trim1);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim2 += (e.pret_med * th.table3P[i].trim21) + (e.pret_med * th.table3P[i].trim2);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim3 += (e.pret_med * th.table3P[i].trim31) + (e.pret_med * th.table3P[i].trim3);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim4 += (e.pret_med * th.table3P[i].trim41) + (e.pret_med * th.table3P[i].trim4);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim5 += (e.pret_med * th.table3P[i].trim51) + (e.pret_med * th.table3P[i].trim5);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim6 += (e.pret_med * th.table3P[i].trim61) + (e.pret_med * th.table3P[i].trim6);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim7 += (e.pret_med * th.table3P[i].trim71) + (e.pret_med * th.table3P[i].trim7);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].trim8 += (e.pret_med * th.table3P[i].trim81) + (e.pret_med * th.table3P[i].trim8);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].an3o += (e.pret_med * th.table3P[i].an3);});
            $.each(th.table1P, function(i, e){ th.centralizator[0].an4o += (e.pret_med * th.table3P[i].an4) ;});
            $.each(th.table1P, function(i, e){ th.centralizator[0].an5o += (e.pret_med * th.table3P[i].an5);});

            $.each(th.table1S, function(i, e){ th.centralizator[1].trim1 += (e.pret_med * th.table3S[i].trim11) + (e.pret_med * th.table3S[i].trim1);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim2 += (e.pret_med * th.table3S[i].trim21) + (e.pret_med * th.table3S[i].trim2);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim3 += (e.pret_med * th.table3S[i].trim31) + (e.pret_med * th.table3S[i].trim3);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim4 += (e.pret_med * th.table3S[i].trim41) + (e.pret_med * th.table3S[i].trim4);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim5 += (e.pret_med * th.table3S[i].trim51) + (e.pret_med * th.table3S[i].trim5);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim6 += (e.pret_med * th.table3S[i].trim61) + (e.pret_med * th.table3S[i].trim6);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim7 += (e.pret_med * th.table3S[i].trim71) + (e.pret_med * th.table3S[i].trim7);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].trim8 += (e.pret_med * th.table3S[i].trim81) + (e.pret_med * th.table3S[i].trim8);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].an3o += (e.pret_med * th.table3S[i].an3);});
            $.each(th.table1S, function(i, e){ th.centralizator[1].an4o += (e.pret_med * th.table3S[i].an4) ;});
            $.each(th.table1S, function(i, e){ th.centralizator[1].an5o += (e.pret_med * th.table3S[i].an5);});

            th.centralizator[9].trim1 = th.centralizator[0].trim1 + th.centralizator[1].trim1;
            th.centralizator[9].trim2 = th.centralizator[0].trim2 + th.centralizator[1].trim2;
            th.centralizator[9].trim3 = th.centralizator[0].trim3 + th.centralizator[1].trim3;
            th.centralizator[9].trim4 = th.centralizator[0].trim4 + th.centralizator[1].trim4;
            th.centralizator[9].trim5 = th.centralizator[0].trim5 + th.centralizator[1].trim5;
            th.centralizator[9].trim6 = th.centralizator[0].trim6 + th.centralizator[1].trim6;
            th.centralizator[9].trim7 = th.centralizator[0].trim7 + th.centralizator[1].trim7;
            th.centralizator[9].trim8 = th.centralizator[0].trim8 + th.centralizator[1].trim8;
            th.centralizator[9].an1o = th.centralizator[0].an1o + th.centralizator[1].an1o;
            th.centralizator[9].an2o = th.centralizator[0].an2o + th.centralizator[1].an2o;
            th.centralizator[9].an3o = th.centralizator[0].an3o + th.centralizator[1].an3o;
            th.centralizator[9].an4o = th.centralizator[0].an4o + th.centralizator[1].an4o;
            th.centralizator[9].an5o = th.centralizator[0].an5o + th.centralizator[1].an5o;

            th.centralizator[19].trim1 = th.centralizator[9].trim1 + th.centralizator[15].trim1 + th.centralizator[18].trim1;
            th.centralizator[19].trim2 = th.centralizator[9].trim2 + th.centralizator[15].trim2 + th.centralizator[18].trim2;
            th.centralizator[19].trim3 = th.centralizator[9].trim3 + th.centralizator[15].trim3 + th.centralizator[18].trim3;
            th.centralizator[19].trim4 = th.centralizator[9].trim4 + th.centralizator[15].trim4 + th.centralizator[18].trim4;
            th.centralizator[19].trim5 = th.centralizator[9].trim5 + th.centralizator[15].trim5 + th.centralizator[18].trim5;
            th.centralizator[19].trim6 = th.centralizator[9].trim6 + th.centralizator[15].trim6 + th.centralizator[18].trim6;
            th.centralizator[19].trim7 = th.centralizator[9].trim7 + th.centralizator[15].trim7 + th.centralizator[18].trim7;
            th.centralizator[19].trim8 = th.centralizator[9].trim8 + th.centralizator[15].trim8 + th.centralizator[18].trim8;
            th.centralizator[19].an1o = th.centralizator[9].an1o + th.centralizator[15].an1o + th.centralizator[18].an1o;
            th.centralizator[19].an2o = th.centralizator[9].an2o + th.centralizator[15].an2o + th.centralizator[18].an2o;
            th.centralizator[19].an3o = th.centralizator[9].an3o + th.centralizator[15].an3o + th.centralizator[18].an3o;
            th.centralizator[19].an4o = th.centralizator[9].an4o + th.centralizator[15].an4o + th.centralizator[18].an4o;
            th.centralizator[19].an5o = th.centralizator[9].an5o + th.centralizator[15].an5o + th.centralizator[18].an5o;

        },
        getTotalCant : function(index, table) {
            if (table == 'S') {
                return this.table1S[index].total;
            } else if (table == 'P') {
                return this.table1P[index].total;
            }
        }
        ,
        getTotalAn : function(an, index, table){
            if (an == 1) { if (table == 'P'){ return this.table2P[index].totalAn1;} else return this.table2S[index].totalAn1 }
            if (an == 2) { if (table == 'S'){ return this.table2S[index].totalAn2;} else return this.table2P[index].totalAn2 }
            if (an == 3) { if (table == 'P'){ return this.table2P[index].totalAn3;} else return this.table2S[index].totalAn3 }
            if (an == 4) { if (table == 'P'){ return this.table2P[index].totalAn4;} else return this.table2S[index].totalAn4 }
            if (an == 5) { if (table == 'P'){ return this.table2P[index].totalAn5;} else return this.table2S[index].totalAn5 }
        }

    }
});