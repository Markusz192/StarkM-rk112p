let point = 0;
let badAns = []
let megoldas1 = 2023-1800;

let megoldas2 = true

let megoldas3 = ["Pusztanyéken","Pusztanyék"]

let megoldas4 = ["Ciszterci Szent István Gimnázium","Ciszterci Szent István Gimnáziumban"]

let megoldas5 = 5;

    document.write('<h1>Quiz</h1>')
    document.write('<br>')
    document.write('<p><label>Hány éves lenne ma Vörösmarty? </label><input type ="number" id = "quiz1"></p>');
    document.write('<br>')
    document.write('<p><label>Él-e ma Vörösmarty? </label><input type ="radio" name ="kerdes2"> igen <input type ="radio" id = "quiz2" name ="kerdes2" > nem</p>');
    document.write('<br>')
    document.write('<p><label>Hol született Vörösmarty? </label><input type ="text" id = "quiz3"></p>')
    document.write('<br>')
    document.write('<p><label>Hol tanult másodszor? </label><input type ="text" id = "quiz4"></p>')
    document.write('<br>')
    document.write('<p><label>Hány gyereke született Csajághy Laurától?  </label><input type ="number" id = "quiz5"></p>')
    document.write('<br>')
    document.write('<input type="button" value="Eredmény" onclick="AnswerdQuiz()">')



    function AnswerdQuiz()
    {
        point = 0;
		badAns = [];

        let valasz1 = document.getElementById("quiz1").value;
        let valasz2 = document.querySelector("#quiz2").checked;
        let valasz3 = document.getElementById("quiz3").value;
        let valasz4 = document.getElementById("quiz4").value;
        let valasz5 = Number(document.getElementById("quiz5").value);
        if(valasz1 == megoldas1)
        {
            point++;
        }else{badAns.push(1)}
        if(valasz2 == megoldas2)
        {
			point++
        }else{badAns.push(2)}
        if(valasz3 == megoldas3[0] || valasz3 == megoldas3[1])
        {
            point++
        }else{badAns.push(3)}
		
        if(valasz4 == megoldas4[0] || valasz4 == megoldas4[1])
        {
            point++
        }else{badAns.push(4)}
		
        if(valasz5 == megoldas5)
        {
            point++
        }else{badAns.push(5)}

        if(point == 5)
        {
            window.alert("Önnek "+point+" pontja jött össze. Nem ejtett hibát, a megoldása tökéletes.");
        }else
        {
            window.alert("Önnek "+point+" pontja jött össze. Hibákat a következő feladatokban ejtett: "+badAns);
        }
    }