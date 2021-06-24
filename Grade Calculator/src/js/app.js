const calcy = () =>{
    alert('done');
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";


    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    // alert(totalGrades);

    let perc = (totalGrades/400) * 100;
    // alert(perc);

    debugger;

    if(perc <= 100  && perc >= 80){
        grades = 'A';
    }else if(perc <= 79  && perc >= 60){
        grades = 'B';
    }else if(perc <= 59  && perc >= 40){
        grades = 'C';
    }else{
        grades = 'F';
    }

    if(perc >= 39.5){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
}

function icseGrade() {
    //class 10  
    //english, hindi, edu, history, civics and geo, mathematics, science, comp app
    alert('done');
    const marks = [];
    var eng = document.getElementById('eng').value;
    var hindi = document.getElementById('hindi').value;
    var maths = document.getElementById('maths').value;
    var science = document.getElementById('science').value;
    var sscience = document.getElementById('sscience').value;
    var comp = document.getElementById('comp').value;

    marks = [hindi, maths, science, sscience, comp];
    marks.sort();

    for
    //compulsory subject are : english and maths
}