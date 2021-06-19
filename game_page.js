p1name = localStorage.getItem("player1_name")
p2name = localStorage.getItem("player2_name")

document.getElementById("p1name").innerHTML=p1name+" : "
document.getElementById("p2name").innerHTML=p2name+" : "

p1score= 0
p2score= 0

document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score

questionturn= "player1"
answerturn= "player2"

document.getElementById("questionturn").innerHTML="Question turn : "+p1name
document.getElementById("answerturn").innerHTML="Answer turn : "+p2name

function send() {
    get_word = document.getElementById("word").value;
    console.log(get_word);
    qword = get_word.toLowerCase();
    console.log(qword)

    //code for replacing 1 letter
    letter1 = qword.charAt(1);
    console.log(letter1);
    replace1 = qword.replace(letter1, " _ ")
    console.log(replace1);

    //code for replacing 2 letters
    x=qword.length-1
    console.log(x)
    letter2 = qword.charAt(x);
    replace2 = replace1.replace(letter2, " _ ")
    console.log(replace2);

    //code for replacing 3 letters
    y=Math.floor(qword.length/2)
    console.log(y);
    letter3= qword.charAt(y)
    console.log(letter3);
    replace3 = replace2.replace(letter3, " _ ")
    console.log(replace3);

    //creating tags for question

    qtag=`<h4>Q. ${replace3}</h4><br>`
    atag=`Answer <input type="text" id="input"><br><br>`
    btag=`<button class="btn btn-danger" onclick="check()">CHECK</button>`
    document.getElementById("output").innerHTML=qtag+atag+btag
document.getElementById("word").value="";

}

function check()
{
    getanswer = document.getElementById("input").value
    answer= getanswer.toLowerCase();
    //code for increasing the score if answer is correct.
    if (answer==qword) 
    {
        if (answerturn=="player1") {
            p1score=p1score+1;
            document.getElementById("p1score").innerHTML=p1score;
        } else {
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
        }
    }
    //code for changing the question turn

    if (questionturn == "player1") {
        questionturn= "player2"
        document.getElementById("questionturn").innerHTML="Question turn : "+p2name
    } else {
        questionturn = "player1"
        document.getElementById("questionturn").innerHTML="Question turn : "+p1name

    }
    //code for changing the answer turn

    if (answerturn == "player1") {
        answerturn = "player2"
        document.getElementById("answerturn").innerHTML="Answer turn : "+p2name
    } else {
        answerturn = "player1"
        document.getElementById("answerturn").innerHTML="Answer turn : "+p1name

        
    }
    document.getElementById("output").innerHTML=""
}