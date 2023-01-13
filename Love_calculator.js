var My_name = prompt ("What is your name?");
var partner_name = prompt ("What is your partner's name?");

var Love_Score = Math.random() * 100;
Love_Score = Math.floor(Love_Score) + 1;
if (Love_Score >= 70){
    alert(My_name + " & " + partner_name + " " + Love_Score + "% " + "Love each other \n You both Love Each Other Like Heer and Ranjha Does.." );
}
if (Love_Score >=30 && Love_Score < 70){   
    alert(My_name + " & " + partner_name + " " + Love_Score + "% " + "Love each other \n You both need to spend more time to get close to each other");
}
if (Love_Score <30){   
    alert(My_name + " & " + partner_name + " " + Love_Score + "% " + "Love each other \n You both need to understand each other");
}
