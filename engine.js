console.log("Java Script Quiz Game Program");

const questionElement = document.querySelector("#question h1");
const selectableAnsswersElements = document.querySelectorAll("main section p");
const mainContainer = document.querySelector("main");
const mainFooter = document.querySelector("main footer");
const startButton = document.querySelector("#startButton");
const wrongAnssArr = [];
let score = 0;

const questionArray = [
    {
        q: "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
        pa: ["a. Pi", "b. 42", "c. Wah?", "d. I don't know"],
        a: "b. 42"
    },
    {
        q: "What is the most popular programming language for web?",
        pa: ["a. Python", "b. Ruby", "c. Java Script", "d. C"],
        a: "c. Java Script"
    },
    {
        q: "What's the best programming language?",
        pa: ["a. C", "b. C#", "c. C++", "d. Python"],
        a: "c. C++"
    },
    {
        q: "Who was the first President of the United States?",
        pa: ["a. Thomas Jefferson", "b. Thomas Edison", "c. I don't know", "d. George Washington"],
        a: "d. George Washington"
    },
    {
        q: "What is the biggest black hole in the universe?",
        pa: ["a. Hyper Luminuos Lyman-Alpha", "b. Supermassive", "c. Phoenix A", "d. IC 1011"],
        a: "a. Hyper Luminuos Lyman-Alpha"
    },
    {
        q: "What was Meta Platforms Inc formerly known as?",
        pa: ["a. Facebook", "b. Instagram", "c. Tweeter", "d. All the options above"],
        a: "a. Facebook"
    },
    {
        q: "Which English city is known as the Steel City?",
        pa: ["a. New York", "b. Boston", "c. Dhaka", "d. Sheffield"],
        a: "d. Sheffield"
    },
    {
        q: "The logo for luxury car maker Porsche features which animal?",
        pa: ["a. Cow", "b. Horse", "c. Frog", "d. Monkey"],
        a: "b. Horse"
    },
    {
        q: "In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?",
        pa: ["a. Mango", "b. Litchi", "c. Pineapple", "d. No one above"],
        a: "c. Pineapple"
    },
    {
        q: "How many lives is a cat said to have?",
        pa: ["a. Nine", "b. Twelve", "c. Nineteen", "d. Sixteen"],
        a: "a. Nine"
    },
    {
        q: "In 2018, Scott Morrison was elected as the Prime Minister of which country?",
        pa: ["a. Nigeria", "b. Australia", "c. California", "d. China"],
        a: "b. Australia"
    },
    {
        q: "Franz Josef Strauss Airport is located in which country?",
        pa: ["a. Germany", "b. California", "c. Australia", "d. India"],
        a: "a. Germany"
    },
    {
        q: "Emma Bunton is known as which Spice Girl?",
        pa: ["a. Hot Spice", "b. Extra Spice", "c. Baby Spice", "d. No Spice"],
        a: "c. Baby Spice"
    },
    {
        q: "Who launched the Cultural Revolution in China?",
        pa: ["a. Mao Zedong", "b. Deng Xiaoping", "c. Confucius", "d. Chairman Mao"],
        a: "d. Chairman Mao"
    },
    {
        q: "How many wisdom teeth does the average adult have?",
        pa: ["a. Two", "b. Three", "c. Five", "d. Four"],
        a: "c. Five"
    },
    {
        q: "Which US agency has the motto For the benefit of all?",
        pa: ["a. Nasa", "b. AbilityOne Commission", "c. Air Force", "d. Washington Headquarters Services"],
        a: "a. Nasa"
    },
    {
        q: "Which British supermarket has a clothing range named 'George'?",
        pa: ["a. Amazon Fresh", "b. B&M express", "c. Aldi", "d. Asda"],
        a: "d. Asda"
    },
    {
        q: "Pyrophobia is the fear of what?",
        pa: ["a. Height", "b. Fire", "c. Water", "d. Spider"],
        a: "b. Fire"
    },
    {
        q: "What is Prince William's full name?",
        pa: ["a.  William Arthur Philip Louis Windsor", "b. Sherlock William", "c. William Philip Aurthor Louis", "d. Edward William"],
        a: "a.  William Arthur Philip Louis Windsor"
    }
];

let i = 0;
let dySec = 0;

const stopWatch = function() {
    startButton.addEventListener("click", () => {
        // document.styleSheets[0].rules[4].style.zIndex = `-2`;
        const body = document.querySelector('body');
        body.classList.remove('after-pseudo-element');
        startButton.style.display = "none";
        setInterval(() => {
            dySec++;
        }, 1000);
    });
}

window.onload = stopWatch();

function populate(i) {
    if (i >= questionArray.length) return;
    questionElement.innerHTML = questionArray[i].q;
    for (let j = 0; j < questionArray[i].pa.length; j++) {
        selectableAnsswersElements[j].innerHTML = questionArray[i].pa[j];
    }
}

function appendCorrectAnsswers() {
    mainFooter.style.marginTop = "-50px";
    const ol = document.createElement("ol");
    wrongAnssArr.forEach(question => {
        const qContainer = document.createElement("li");
        qContainer.innerHTML = question.q;
        const aContainer = document.createElement("p");
        aContainer.classList.add("chgMarginInline");
        aContainer.innerHTML = question.a;
        ol.appendChild(qContainer);
        ol.appendChild(aContainer);
    });
    ol.style.textAlign = "center";
    ol.style.listStyleType = "none";
    ol.classList.add("chgFnt");
    mainContainer.appendChild(ol);
}

function todoFunc(e, i) {
    if (e.target.innerHTML === questionArray[i].a) {
        score++;
        questionElement.innerHTML = "";
        selectableAnsswersElements.forEach(opt => {
            opt.innerHTML = "";
        });
        i++;
        populate(i);
    } else {
        questionElement.innerHTML = "";
        selectableAnsswersElements.forEach(opt => {
            opt.innerHTML = "";
        });
        i++;
        populate(i);
        wrongAnssArr.push(questionArray[i - 1]);
    }
    
    if (i === questionArray.length) {
        clearInterval(stopWatch);
        selectableAnsswersElements.forEach(elem => elem.style.display = "none");
        document.querySelector("#question h1").style.display = "none";
        mainFooter.style.textAlign = "center";

        mainFooter.innerHTML = `Your Score for this quiz game is ${score} out of ${questionArray.length} and the time you took is ${dySec} seconds or ${(dySec / 60).toFixed(2)} minutes. You have given ${score} correct answers. Congratulations.`;

        if(wrongAnssArr.length > 4) document.body.style.overflow = "auto";
        if (wrongAnssArr.length > 6) document.styleSheets[0].rules[1].style.height = `300vh`;

        if (wrongAnssArr.length === 1) {
            mainFooter.innerHTML = `Your Score for this quiz game is ${score} out of ${questionArray.length} and the time you took is ${dySec} seconds or ${(dySec / 60).toFixed(2)} minutes. The question that you have given a wrong answer and the correct answer for that question is down bellow`;
            appendCorrectAnsswers();
        }

        if(wrongAnssArr.length > 1) {
            mainFooter.innerHTML = `Your Score for this quiz game is ${score} out of ${questionArray.length} and the time you took is ${dySec} seconds or ${(dySec / 60).toFixed(2)} minutes. The questions that you have given wrong answers and the correct answers for those questions are down bellow`;
            appendCorrectAnsswers();
        }
    }
}

selectableAnsswersElements.forEach(option => {
    option.addEventListener("click", (e) => {
        todoFunc(e, i);
        i++;
    });
});

populate(i);