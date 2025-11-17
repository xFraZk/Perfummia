window.jsPDF = window.jspdf.jsPDF;

const characterData = {
    dalia: { name: "DALIA", title: "La Elegida Incompleta", description: "Valiente y justa. No te detienes ante nada para recuperar lo que te pertenece." },
    kristi: { name: "KRISTI", title: "La Guía Real", description: "Líder nata. Tu fuerza radica en la lealtad y en mantener al grupo unido." },
    hilario: { name: "HILARIO", title: "Sabiduría Pura", description: "Analítico y calmado. Eres quien descifra los misterios cuando otros entran en pánico." },
    rose: { name: "ROSE", title: "La Estratega", description: "Astuta y calculadora. Sabes jugar tus cartas y a veces el fin justifica los medios." },
    killer: { name: "KILLER", title: "La Ambición", description: "No temes romper las reglas para crear algo superior. El poder es tu objetivo." }
};

const quizQuestions = [
    {
        question: "Despiertas sin algo vital para ti. ¿Qué haces?",
        answers: [
            { text: "Salgo a buscarlo inmediatamente.", value: "dalia" },
            { text: "Busco a mis amigos para pedir ayuda.", value: "kristi" },
            { text: "Analizo lógicamente dónde pudo quedar.", value: "hilario" },
            { text: "Sospecho que alguien me lo robó.", value: "killer" },
            { text: "Observo a todos antes de actuar.", value: "rose" }
        ]
    },
    {
        question: "Tu rol en un grupo de trabajo es...",
        answers: [
            { text: "El que lidera y motiva.", value: "kristi" },
            { text: "El que resuelve los problemas difíciles.", value: "hilario" },
            { text: "El que toma la iniciativa y riesgos.", value: "dalia" },
            { text: "El que organiza desde las sombras.", value: "rose" },
            { text: "El que quiere que el proyecto sea el mejor a toda costa.", value: "killer" }
        ]
    },
    {
        question: "¿Qué opinas de las reglas?",
        answers: [
            { text: "Están para protegernos.", value: "kristi" },
            { text: "Hay que entenderlas para seguirlas.", value: "hilario" },
            { text: "Si es justo, las sigo. Si no, no.", value: "dalia" },
            { text: "Son flexibles si me conviene.", value: "rose" },
            { text: "Están para romperse.", value: "killer" }
        ]
    },
    {
        question: "Un secreto podría salvarte, pero dañar a otro.",
        answers: [
            { text: "Jamás lo usaría.", value: "dalia" },
            { text: "Busco una solución que no dañe a nadie.", value: "kristi" },
            { text: "Evalúo las consecuencias a largo plazo.", value: "hilario" },
            { text: "Lo guardo por si acaso lo necesito.", value: "rose" },
            { text: "Lo uso sin dudarlo.", value: "killer" }
        ]
    },
    {
        question: "El objetivo final es...",
        answers: [
            { text: "La armonía del grupo.", value: "kristi" },
            { text: "La verdad.", value: "hilario" },
            { text: "La justicia.", value: "dalia" },
            { text: "La supervivencia.", value: "rose" },
            { text: "El poder absoluto.", value: "killer" }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = { dalia: 0, kristi: 0, hilario: 0, rose: 0, killer: 0 };
let finalResultKey = '';

const startBtn = document.getElementById('start-btn');
const shareBtn = document.getElementById('share-btn');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const questionProgress = document.getElementById('question-progress');
const resultName = document.getElementById('result-name');
const resultSubtitle = document.getElementById('result-subtitle');
const resultDescription = document.getElementById('result-description');

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    questionScreen.classList.add('fade-in');
    showQuestion();
});

shareBtn.addEventListener('click', generatePDF);

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    questionProgress.innerText = `PREGUNTA ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    questionText.innerText = q.question;
    answerButtons.innerHTML = '';

    q.answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.innerText = ans.text;
        btn.classList.add('quiz-btn');
        btn.addEventListener('click', () => selectAnswer(ans.value));
        answerButtons.appendChild(btn);
    });
}

function selectAnswer(val) {
    scores[val]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let max = -1;
    for (const k in scores) {
        if (scores[k] > max) { max = scores[k]; finalResultKey = k; }
    }
    const data = characterData[finalResultKey];
    resultName.innerText = data.name;
    resultSubtitle.innerText = data.title;
    resultDescription.innerText = data.description;

    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('fade-in');
}

function generatePDF() {
    const doc = new jsPDF();
    const element = document.getElementById('quiz-wrapper'); 

    const btns = element.querySelectorAll('button');
    btns.forEach(b => b.style.display = 'none');

    html2canvas(element, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgProps = doc.getImageProperties(imgData);
        
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.setFontSize(20);
        doc.text("Resultado Perfummia", 10, 20);
        doc.addImage(imgData, 'PNG', 0, 30, pdfWidth, pdfHeight);
        
        doc.save(`Mi_Esencia_${finalResultKey}.pdf`);

        btns.forEach(b => b.style.display = 'block');
    });
}
