const gradeElements = [
    document.getElementById("grade1"),
    document.getElementById("grade2"),
    document.getElementById("grade3"),
    document.getElementById("grade4"),
    document.getElementById("grade5"),
    document.getElementById("grade6"),
    document.getElementById("grade7"),
    document.getElementById("grade8")
];

const weightElements = [
    document.getElementById("weight1"),
    document.getElementById("weight2"),
    document.getElementById("weight3"),
    document.getElementById("weight4"),
    document.getElementById("weight5"),
    document.getElementById("weight6"),
    document.getElementById("weight7"),
    document.getElementById("weight8")
];

const currentGrade = document.getElementById("currentGrade");

function calculate() {

    for (let i = 0; i < gradeElements.length; i++) {
        let value1 = Number(gradeElements[i].value);
        let value2 = Number(weightElements[i].value);
        if ((value1 == '' && value2 != '') || (value2 == '' && value1 != '')){
            currentGrade.textContent = "You have to input your grades correctly!";
            return;
        }
    }   

    let grades = [];

    for (let i = 0; i < gradeElements.length; i++) {
        let value = Number(gradeElements[i].value);
        if (value != 0 || value != ''){
            grades.push(value);
        }
    }

    let weights = [];

    for (let i = 0; i < weightElements.length; i++) {
        let value = (Number(weightElements[i].value))/100;
        if (value != 0 || value != ''){
            weights.push(value);
        }

    }
    
    if (grades.length !== weights.length){
        currentGrade.textContent = "You have to input your grades correctly!";
    }

    let totalWeightsInputted = 0;
  
    for (let i = 0; i < weights.length; i++) {
        totalWeightsInputted =  totalWeightsInputted + weights[i];
    }

    if (totalWeightsInputted === 0) {
        currentGrade.textContent = "Weight cannot be zero!";
        return;
    }
    
    let yourGrade = 0;

    for (let i = 0; i < grades.length; i++) {
        temp = grades[i] * weights[i];
        yourGrade = yourGrade + temp;
    }

    reportedGrade = yourGrade / totalWeightsInputted;

    currentGrade.textContent = `${reportedGrade.toFixed(2)}%`;

    console.log(yourGrade)

    const msg = document.getElementById("msg");
    const percent50 = document.getElementById("percent50");
    const percent53 = document.getElementById("percent53");
    const percent57 = document.getElementById("percent57");
    const percent60 = document.getElementById("percent60");
    const percent63 = document.getElementById("percent63");
    const percent67 = document.getElementById("percent67");
    const percent70 = document.getElementById("percent70");
    const percent73 = document.getElementById("percent73");
    const percent77 = document.getElementById("percent77");
    const percent80 = document.getElementById("percent80");
    const percent85 = document.getElementById("percent85");
    const percent90 = document.getElementById("percent90");

    if (totalWeightsInputted < 1){
        let completed = totalWeightsInputted * 100
        let remaining = 100 - completed;

        msg.textContent = `Below are the grades you need to get on the remaining ${remaining}% in the course to achieve a certain grade:`;

        let completedAsDec = completed / 100;
        let remainingAsDec = remaining / 100;

        needFor50 = (50 - completedAsDec * yourGrade) / remainingAsDec;
        percent50.textContent = `If you want a 50% you need, ${needFor50.toFixed(2)}%`;

        needFor53 = (53 - completedAsDec * yourGrade) / remainingAsDec;
        percent53.textContent = `If you want a 53% you need, ${needFor53.toFixed(2)}%`;

        needFor57 = (57 - completedAsDec * yourGrade) / remainingAsDec;
        percent57.textContent = `If you want a 57% you need, ${needFor57.toFixed(2)}%`;

        needFor60 = (60 - completedAsDec * yourGrade) / remainingAsDec;
        percent60.textContent = `If you want a 60% you need, ${needFor60.toFixed(2)}%`;

        needFor63 = (63 - completedAsDec * yourGrade) / remainingAsDec;
        percent63.textContent = `If you want a 63% you need, ${needFor63.toFixed(2)}%`;

        needFor67 = (67 - completedAsDec * yourGrade) / remainingAsDec;
        percent67.textContent = `If you want a 67% you need, ${needFor67.toFixed(2)}%`;

        needFor70 = (70 - completedAsDec * yourGrade) / remainingAsDec;
        percent70.textContent = `If you want a 70% you need, ${needFor70.toFixed(2)}%`;

        needFor73 = (73 - completedAsDec * yourGrade) / remainingAsDec;
        percent73.textContent = `If you want a 73% you need, ${needFor73.toFixed(2)}%`;

        needFor77 = (77 - completedAsDec * yourGrade) / remainingAsDec;
        percent77.textContent = `If you want a 77% you need, ${needFor77.toFixed(2)}%`;

        needFor80 = (80 - completedAsDec * yourGrade) / remainingAsDec;
        percent80.textContent = `If you want a 80% you need, ${needFor80.toFixed(2)}%`;

        needFor85 = (85 - completedAsDec * yourGrade) / remainingAsDec;
        percent85.textContent = `If you want a 85% you need, ${needFor85.toFixed(2)}%`;

        needFor90 = (90 - completedAsDec * yourGrade) / remainingAsDec;
        percent90.textContent = `If you want a 90% you need, ${needFor90.toFixed(2)}%`;


        

    }


    
}

