/* =========================================
   VIRTUAL SCIENCE LAB
   Main JavaScript
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

function toggleMenu() {

    const nav = document.getElementById("nav");

    if (nav) {
        nav.classList.toggle("show");
    }

}


/* =========================================
   DARK MODE
   ========================================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "scienceLabTheme",
        isDark ? "dark" : "light"
    );

    updateThemeButton();

}


function updateThemeButton() {

    const button =
        document.querySelector(".theme-btn");

    if (!button) return;

    if (
        document.body.classList.contains("dark")
    ) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }

}


/* Load saved theme */

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme =
        localStorage.getItem("scienceLabTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeButton();

});


/* =========================================
   OHM'S LAW
   I = V / R
   ========================================= */

function updateOhmsLaw() {

    const voltage =
        document.getElementById("voltage");

    const resistance =
        document.getElementById("resistance");

    if (!voltage || !resistance) return;


    const V =
        Number(voltage.value);

    const R =
        Number(resistance.value);


    const I = V / R;


    const voltageValue =
        document.getElementById("voltageValue");

    const resistanceValue =
        document.getElementById("resistanceValue");

    const currentValue =
        document.getElementById("currentValue");

    const meterValue =
        document.getElementById("meterValue");


    if (voltageValue) {
        voltageValue.textContent = V;
    }

    if (resistanceValue) {
        resistanceValue.textContent = R;
    }

    if (currentValue) {
        currentValue.textContent =
            I.toFixed(2);
    }

    if (meterValue) {
        meterValue.textContent =
            I.toFixed(2);
    }

}


const voltageSlider =
    document.getElementById("voltage");

const resistanceSlider =
    document.getElementById("resistance");


if (voltageSlider) {

    voltageSlider.addEventListener(
        "input",
        updateOhmsLaw
    );

}


if (resistanceSlider) {

    resistanceSlider.addEventListener(
        "input",
        updateOhmsLaw
    );

}


/* =========================================
   ACID & BASE / pH
   ========================================= */

const solution =
    document.getElementById("solution");


function updatePH() {

    if (!solution) return;


    const pH =
        Number(solution.value);


    const phValue =
        document.getElementById("phValue");

    const phType =
        document.getElementById("phType");

    const phMarker =
        document.getElementById("phMarker");

    const liquid =
        document.getElementById("liquid");

    const indicatorText =
        document.getElementById("indicatorText");


    if (phValue) {
        phValue.textContent = pH;
    }


    let type = "";


    if (pH < 3) {

        type = "Strongly Acidic";

    } else if (pH < 7) {

        type = "Acidic";

    } else if (pH === 7) {

        type = "Neutral";

    } else if (pH <= 11) {

        type = "Basic";

    } else {

        type = "Strongly Basic";

    }


    if (phType) {
        phType.textContent = type;
    }


    if (indicatorText) {

        if (pH < 7) {

            indicatorText.textContent =
                "The solution is acidic.";

        } else if (pH === 7) {

            indicatorText.textContent =
                "The solution is neutral.";

        } else {

            indicatorText.textContent =
                "The solution is basic.";

        }

    }


    /* Move pH marker */

    if (phMarker) {

        const position =
            (pH / 14) * 100;

        phMarker.style.left =
            `calc(${position}% - 14px)`;

    }


    /* Change liquid appearance */

    if (liquid) {

        if (pH < 7) {

            liquid.style.background =
                "#e76f51";

        } else if (pH === 7) {

            liquid.style.background =
                "#90be6d";

        } else {

            liquid.style.background =
                "#277da1";

        }

    }

}


if (solution) {

    solution.addEventListener(
        "change",
        updatePH
    );

    updatePH();

}


/* =========================================
   CONVEX LENS
   Lens formula:
   1/f = 1/v - 1/u
   Therefore:
   v = fu / (u - f)
   ========================================= */

function updateLens() {

    const focal =
        document.getElementById("focal");

    const objectDistance =
        document.getElementById(
            "objectDistance"
        );


    if (!focal || !objectDistance) {
        return;
    }


    const f =
        Number(focal.value);

    const u =
        Number(objectDistance.value);


    const imageDistance =
        (f * u) / (u - f);


    const magnification =
        -imageDistance / u;


    const focalValue =
        document.getElementById(
            "focalValue"
        );

    const objectValue =
        document.getElementById(
            "objectValue"
        );

    const imageValue =
        document.getElementById(
            "imageDistance"
        );

    const magnificationValue =
        document.getElementById(
            "magnification"
        );


    if (focalValue) {
        focalValue.textContent = f;
    }

    if (objectValue) {
        objectValue.textContent = u;
    }


    if (imageValue) {

        imageValue.textContent =
            imageDistance.toFixed(2);

    }


    if (magnificationValue) {

        magnificationValue.textContent =
            magnification.toFixed(2);

    }

}


const focalSlider =
    document.getElementById("focal");

const objectSlider =
    document.getElementById(
        "objectDistance"
    );


if (focalSlider) {

    focalSlider.addEventListener(
        "input",
        updateLens
    );

}


if (objectSlider) {

    objectSlider.addEventListener(
        "input",
        updateLens
    );

}


if (
    focalSlider &&
    objectSlider
) {

    updateLens();

}


/* =========================================
   SERIES & PARALLEL CIRCUIT
   ========================================= */

let circuitMode = "series";


const r1 =
    document.getElementById("r1");

const r2 =
    document.getElementById("r2");

const circuitVoltage =
    document.getElementById(
        "circuitVoltage"
    );


function updateCircuit() {

    if (!r1 || !r2 || !circuitVoltage) {
        return;
    }


    const R1 =
        Number(r1.value);

    const R2 =
        Number(r2.value);

    const V =
        Number(circuitVoltage.value);


    let equivalent;


    if (circuitMode === "series") {

        equivalent =
            R1 + R2;

    } else {

        equivalent =
            (R1 * R2) /
            (R1 + R2);

    }


    const current =
        V / equivalent;


    const r1Value =
        document.getElementById(
            "r1Value"
        );

    const r2Value =
        document.getElementById(
            "r2Value"
        );

    const voltageValue =
        document.getElementById(
            "circuitVoltageValue"
        );

    const resistanceValue =
        document.getElementById(
            "equivalentResistance"
        );

    const currentValue =
        document.getElementById(
            "totalCurrent"
        );

    const formula =
        document.getElementById(
            "circuitFormula"
        );


    if (r1Value) {
        r1Value.textContent = R1;
    }

    if (r2Value) {
        r2Value.textContent = R2;
    }

    if (voltageValue) {
        voltageValue.textContent = V;
    }


    if (resistanceValue) {

        resistanceValue.textContent =
            equivalent.toFixed(2);

    }


    if (currentValue) {

        currentValue.textContent =
            current.toFixed(2);

    }


    if (formula) {

        if (circuitMode === "series") {

            formula.textContent =
                "Series: R = R₁ + R₂";

        } else {

            formula.textContent =
                "Parallel: 1/R = 1/R₁ + 1/R₂";

        }

    }

}


/* Circuit buttons */

const seriesButton =
    document.getElementById(
        "seriesButton"
    );

const parallelButton =
    document.getElementById(
        "parallelButton"
    );


if (seriesButton) {

    seriesButton.addEventListener(
        "click",
        function () {

            circuitMode = "series";

            seriesButton.classList.add(
                "selected"
            );

            if (parallelButton) {
                parallelButton.classList.remove(
                    "selected"
                );
            }

            updateCircuit();

        }
    );

}


if (parallelButton) {

    parallelButton.addEventListener(
        "click",
        function () {

            circuitMode = "parallel";

            parallelButton.classList.add(
                "selected"
            );

            if (seriesButton) {
                seriesButton.classList.remove(
                    "selected"
                );
            }

            updateCircuit();

        }
    );

}


/* Circuit sliders */

if (r1) {

    r1.addEventListener(
        "input",
        updateCircuit
    );

}

if (r2) {

    r2.addEventListener(
        "input",
        updateCircuit
    );

}

if (circuitVoltage) {

    circuitVoltage.addEventListener(
        "input",
        updateCircuit
    );

}


if (
    r1 &&
    r2 &&
    circuitVoltage
) {

    updateCircuit();

}


/* =========================================
   QUIZ
   ========================================= */

function checkQuiz() {

    const answers = {

        q1: "B",
        q2: "A",
        q3: "A",
        q4: "C",
        q5: "B",
        q6: "A",
        q7: "A",
        q8: "C",
        q9: "B",
        q10: "B"

    };


    let score = 0;


    for (
        const question in answers
    ) {

        const selected =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        if (
            selected &&
            selected.value ===
            answers[question]
        ) {

            score++;

        }

    }


    const result =
        document.getElementById(
            "quizResult"
        );


    if (!result) return;


    let message = "";


    if (score === 10) {

        message =
            "Excellent! You got a perfect score. 🏆";

    } else if (score >= 8) {

        message =
            "Great job! You have a strong understanding of the topics. 🎉";

    } else if (score >= 5) {

        message =
            "Good attempt! Review the experiments and try again. 👍";

    } else {

        message =
            "Keep learning! Visit the Virtual Lab and try the quiz again. 📚";

    }


    result.innerHTML = `

        <h2>
            Your Score: ${score}/10
        </h2>

        <p>
            ${message}
        </p>

    `;


    result.classList.add("show");


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================
   RESET QUIZ
   ========================================= */

function resetQuiz() {

    const quiz =
        document.getElementById(
            "scienceQuiz"
        );

    const result =
        document.getElementById(
            "quizResult"
        );


    if (quiz) {
        quiz.reset();
    }


    if (result) {

        result.classList.remove(
            "show"
        );

        result.innerHTML = "";

    }

}