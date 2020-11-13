player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question_turn").innerHTML = "Question turn- " + player2_name;
document.getElementById("player_answer_turn").innerHTML = "Answer turn- " + player1_name;


function send(){

    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);

   question_number = "<h3>" + number1 + " X " + number2;
   input_box = "<br><br>Answer: <input id='answer_input' type='text'></input>";
   check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}


question_turn = "player2";
answer_turn = "player1";


function check(){
   answer = document.getElementById("answer_input").value;
    
   if(answer == actual_answer){

    if(answer_turn == "player1"){
        update_player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }

    else{
        update_player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }

   }


   if(question_turn == "player1"){

    question_turn = "player2";
    document.getElementById("player_question_turn").innerHTML = "Question turn- " + player2_name;


   }
   else{
       question_turn = "player1";
       document.getElementById("player_question_turn").innerHTML = "Question turn- " + player1_name;
   }

   if(answer_turn == "player1"){
       answer_turn = "player2";
       document.getElementById("player_answer_turn").innerHTML = "Answer turn- " + player2_name;

   }

   else{
    answer_turn = "player1";
    document.getElementById("player_answer_turn").innerHTML = "Answer turn- " + player1_name;
    
}

document.getElementById("output").innerHTML = "";
    
}