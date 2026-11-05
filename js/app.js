let activeTab = 'practice';
let userAnswers = {}; // para el modo práctica u examen
let examQuestions = [];
let examCurrentIdx = 0;
let examAnswers = [];
let examTimerInterval = null;
let examSeconds = 0;

// Switch Main Tabs
function switchTab(tab) {
    activeTab = tab;
    const practiceView = document.getElementById('practice-view');
    const examView = document.getElementById('exam-view');
    const tabPractice = document.getElementById('tab-practice');
    const tabExam = document.getElementById('tab-exam');

    if (tab === 'practice') {
        practiceView.classList.remove('hidden');
        examView.classList.add('hidden');
        
        tabPractice.className = "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-cyan-600 text-white shadow";
        tabExam.className = "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-all duration-200";
    } else {
        practiceView.classList.add('hidden');
        examView.classList.remove('hidden');
        
        tabExam.className = "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-cyan-600 text-white shadow";
        tabPractice.className = "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-all duration-200";
    }
}

// Render Practice Mode
function renderPractice() {
    const container = document.getElementById('questions-container');
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const diffVal = document.getElementById('diff-filter').value;
    const catVal = document.getElementById('cat-filter').value;

    const filtered = questionsData.filter(q => {
        const matchesSearch = q.q.toLowerCase().includes(searchVal) || q.cat.toLowerCase().includes(searchVal) || q.exp.toLowerCase().includes(searchVal);
        const matchesDiff = (diffVal === 'ALL') || (q.diff === diffVal);
        const matchesCat = (catVal === 'ALL') || (q.cat === catVal);
        return matchesSearch && matchesDiff && matchesCat;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="bg-slate-800 rounded-2xl p-8 text-center text-slate-400 border border-slate-700">
                <i class="fa-solid fa-filter-circle-xmark text-4xl mb-3 text-slate-500"></i>
                <p class="text-base font-semibold">No se encontraron preguntas con los filtros seleccionados.</p>
                <p class="text-xs text-slate-500 mt-1">Intenta cambiar las palabras clave o seleccionar otra categoría.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(q => {
        let diffColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
        if (q.diff === "Intermedio") diffColor = "bg-amber-500/10 text-amber-400 border-amber-500/30";
        if (q.diff === "Avanzado") diffColor = "bg-orange-500/10 text-orange-400 border-orange-500/30";
        if (q.diff === "Experto/Senior") diffColor = "bg-rose-500/10 text-rose-400 border-rose-500/30";

        const selectedOpt = userAnswers[q.id];
        const isAnswered = selectedOpt !== undefined;

        return `
            <div class="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-lg transition-all space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/50 pb-3">
                    <div class="flex items-center space-x-2">
                        <span class="text-xs font-mono font-bold text-slate-400">#${q.id}</span>
                        <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${q.cat}</span>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-xs font-semibold border ${diffColor}">${q.diff}</span>
                </div>

                <h3 class="text-base sm:text-lg font-medium text-slate-100 leading-snug">${q.q}</h3>

                <div class="grid grid-cols-1 gap-2.5 pt-2">
                    ${q.opts.map((opt, idx) => {
                        let btnStyle = "bg-slate-900/80 hover:bg-slate-700/80 text-slate-300 border-slate-700";
                        
                        if (isAnswered) {
                            if (idx === q.ans) {
                                btnStyle = "bg-emerald-950/80 text-emerald-300 border-emerald-500 font-medium shadow-sm shadow-emerald-500/20";
                            } else if (idx === selectedOpt) {
                                btnStyle = "bg-rose-950/80 text-rose-300 border-rose-500 font-medium";
                            } else {
                                btnStyle = "bg-slate-900/40 text-slate-500 border-slate-800 opacity-60";
                            }
                        }

                        return `
                            <button onclick="selectPracticeAnswer(${q.id}, ${idx})" ${isAnswered ? 'disabled' : ''} 
                                class="w-full text-left p-3.5 rounded-xl border transition-all text-sm flex items-center justify-between ${btnStyle}">
                                <span><strong class="mr-2 text-slate-400">${String.fromCharCode(65 + idx)}.</strong> ${opt}</span>
                                ${isAnswered && idx === q.ans ? '<i class="fa-solid fa-circle-check text-emerald-400"></i>' : ''}
                                ${isAnswered && idx === selectedOpt && idx !== q.ans ? '<i class="fa-solid fa-circle-xmark text-rose-400"></i>' : ''}
                            </button>
                        `;
                    }).join('')}
                </div>

                ${isAnswered ? `
                    <div class="mt-4 p-4 rounded-xl ${selectedOpt === q.ans ? 'bg-emerald-950/30 border-emerald-800/40' : 'bg-rose-950/30 border-rose-800/40'} border text-xs sm:text-sm text-slate-300 space-y-1">
                        <div class="font-bold flex items-center space-x-2 ${selectedOpt === q.ans ? 'text-emerald-400' : 'text-rose-400'}">
                            <i class="fa-solid ${selectedOpt === q.ans ? 'fa-lightbulb' : 'fa-triangle-exclamation'}"></i>
                            <span>${selectedOpt === q.ans ? '¡Correcto!' : 'Respuesta Incorrecta'}</span>
                        </div>
                        <p class="leading-relaxed text-slate-300 mt-1">${q.exp}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function selectPracticeAnswer(qId, optIdx) {
    userAnswers[qId] = optIdx;
    renderPractice();
}

// ================= EXAM LOGIC =================
function startExam(count) {
    // Shuffled copy
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    examQuestions = shuffled.slice(0, count);
    examCurrentIdx = 0;
    examAnswers = new Array(count).fill(undefined);
    examSeconds = 0;

    document.getElementById('exam-start-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.add('hidden');
    document.getElementById('exam-active-screen').classList.remove('hidden');

    document.getElementById('exam-total-count').textContent = count;

    // Start timer
    if (examTimerInterval) clearInterval(examTimerInterval);
    examTimerInterval = setInterval(() => {
        examSeconds++;
        const mins = String(Math.floor(examSeconds / 60)).padStart(2, '0');
        const secs = String(examSeconds % 60).padStart(2, '0');
        document.getElementById('exam-timer').textContent = `${mins}:${secs}`;
    }, 1000);

    renderExamQuestion();
}

function renderExamQuestion() {
    const q = examQuestions[examCurrentIdx];
    const total = examQuestions.length;
    
    document.getElementById('exam-current-idx').textContent = examCurrentIdx + 1;
    document.getElementById('exam-progress-bar').style.width = `${((examCurrentIdx) / total) * 100}%`;

    let diffColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    if (q.diff === "Intermedio") diffColor = "bg-amber-500/10 text-amber-400 border-amber-500/30";
    if (q.diff === "Avanzado") diffColor = "bg-orange-500/10 text-orange-400 border-orange-500/30";
    if (q.diff === "Experto/Senior") diffColor = "bg-rose-500/10 text-rose-400 border-rose-500/30";

    const selectedOpt = examAnswers[examCurrentIdx];

    const card = document.getElementById('exam-question-card');
    card.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-700/50 pb-3">
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${q.cat}</span>
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold border ${diffColor}">${q.diff}</span>
        </div>

        <h3 class="text-lg font-medium text-slate-100 leading-snug">${q.q}</h3>

        <div class="grid grid-cols-1 gap-3 pt-2">
            ${q.opts.map((opt, idx) => {
                const isSelected = selectedOpt === idx;
                const btnStyle = isSelected 
                    ? "bg-cyan-600/30 text-cyan-200 border-cyan-500 font-semibold" 
                    : "bg-slate-900/80 hover:bg-slate-700/80 text-slate-300 border-slate-700";

                return `
                    <button onclick="selectExamOption(${idx})" 
                        class="w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between ${btnStyle}">
                        <span><strong class="mr-2 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}">${String.fromCharCode(65 + idx)}.</strong> ${opt}</span>
                        ${isSelected ? '<i class="fa-solid fa-circle-check text-cyan-400"></i>' : ''}
                    </button>
                `;
            }).join('')}
        </div>

        <div class="flex justify-between items-center pt-4 border-t border-slate-700/50">
            <button onclick="navExam(-1)" ${examCurrentIdx === 0 ? 'disabled' : ''} 
                class="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-40 rounded-xl text-sm font-medium transition">
                <i class="fa-solid fa-arrow-left mr-2"></i> Anterior
            </button>

            ${examCurrentIdx === total - 1 ? `
                <button onclick="finishExam()" ${selectedOpt === undefined ? 'disabled' : ''} 
                    class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/20 transition">
                    Finalizar Examen <i class="fa-solid fa-check-double ml-2"></i>
                </button>
            ` : `
                <button onclick="navExam(1)" ${selectedOpt === undefined ? 'disabled' : ''} 
                    class="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white rounded-xl text-sm font-medium transition">
                    Siguiente <i class="fa-solid fa-arrow-right ml-2"></i>
                </button>
            `}
        </div>
    `;
}

function selectExamOption(idx) {
    examAnswers[examCurrentIdx] = idx;
    renderExamQuestion();
}

function navExam(dir) {
    examCurrentIdx += dir;
    renderExamQuestion();
}

function finishExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);

    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.ans) correctCount++;
    });

    const scorePct = Math.round((correctCount / examQuestions.length) * 100);

    document.getElementById('exam-active-screen').classList.add('hidden');
    const resScreen = document.getElementById('exam-result-screen');
    resScreen.classList.remove('hidden');

    const scoreEl = document.getElementById('result-score');
    const titleEl = document.getElementById('result-title');
    const feedbackEl = document.getElementById('result-feedback');
    const iconContainer = document.getElementById('result-icon-container');

    scoreEl.textContent = `${scorePct}% (${correctCount}/${examQuestions.length})`;

    if (scorePct >= 80) {
        iconContainer.className = "inline-flex p-4 rounded-full text-5xl mb-2 bg-emerald-500/10 text-emerald-400";
        iconContainer.innerHTML = '<i class="fa-solid fa-trophy"></i>';
        titleEl.textContent = "¡Sobresaliente! Nivel Avanzado / Senior";
        feedbackEl.textContent = "Has demostrado un dominio robusto de sintaxis web, POO, control de versiones y estándares de calidad SPICE.";
    } else if (scorePct >= 60) {
        iconContainer.className = "inline-flex p-4 rounded-full text-5xl mb-2 bg-amber-500/10 text-amber-400";
        iconContainer.innerHTML = '<i class="fa-solid fa-medal"></i>';
        titleEl.textContent = "¡Buen Trabajo! Nivel Intermedio";
        feedbackEl.textContent = "Tienes bases sólidas. Puedes repasar los conceptos de nivel Avanzado y Experto en el Modo Práctica.";
    } else {
        iconContainer.className = "inline-flex p-4 rounded-full text-5xl mb-2 bg-rose-500/10 text-rose-400";
        iconContainer.innerHTML = '<i class="fa-solid fa-book-bookmark"></i>';
        titleEl.textContent = "Necesitas Más Práctica";
        feedbackEl.textContent = "Revisa las respuestas explicadas en el Modo Práctica para afianzar tus conocimientos.";
    }
}

function resetExam() {
    document.getElementById('exam-result-screen').classList.add('hidden');
    document.getElementById('exam-start-screen').classList.remove('hidden');
}

// Initial Run
window.addEventListener('DOMContentLoaded', () => {
    renderPractice();
});
