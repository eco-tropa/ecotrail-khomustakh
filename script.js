const animals = [
  {id:"bear",name:"Медведь",saha:"Эһэ",subtitle:"Сильный и осторожный житель тайги",wood:"public/images/IMG-20261015-WA0048.jpg",audio:"public/audio/bear.mp3",fact:"Бурый медведь живёт в лесах и старается избегать встречи с человеком. Он всеяден: питается ягодами, корнями, насекомыми, рыбой и другой доступной пищей. Нельзя оставлять мусор или кормить дикого медведя: это опасно и для людей, и для самого животного.",color:"#d9e4d0"},
  {id:"frog",name:"Лягушка",saha:"Баҕа",subtitle:"Лягушки-природные защитники экосистемы!",wood:"public/images/IMG-20261027-WA0113.jpg",audio:"public/audio/frog.mp3",fact:"Они питаются комарами и другими насекомыми, помогая регулировать их численность. Аих присутствие говорит о чистоте водоёмов и окружающей среды.",color:"#f0dfc7"},
  {id:"sparrow",name:"Воробей",saha:"Барабыай",subtitle:"Маленькие, но очень полезные птицы.",wood:"public/images/IMG-20261015-WA0056.jpg",audio:"public/audio/sparrow.mp3",fact:"Они питаются насекомыми и их личинками, помогая защищать растения от вредителей. А еще воробьи гнездятся рядом с человеком и часто возвращаются к привычным местам обитания",color:"#dce4e2"},
  {id:"squirrel",name:"Белка",saha:"Тииҥчээн",subtitle:"Белки помогают лесу расти.",wood:"public/images/IMG-20261015-WA0046.jpg",audio:"public/audio/squirrel.mp3",fact:"Они прячут орехи и семена про запас, но не всегда находят свои тайники. Забытые семена могут прорасти и стать новыми деревьями.",color:"#dce9e6"}
];

// Исторические сведения можно будет добавить в эти описания после уточнения фактов.
const places = {
  victory: {title:"Исторический обелиск",image:"public/images/victory-square.jpg",
    text:`Обелиск, расположенный на территории стадиона, — это уникальный памятник истории и подлинная гордость нашего села. Он был возведен в 1958 году в честь великого подвига советского народа в Великой Отечественной войне.
Этот монумент имеет особую историческую ценность: он был построен силами самих односельчан. В послевоенные годы жители объединились, чтобы своими руками, без привлечения сторонних строителей, увековечить память о войне. Каждая деталь памятника наполнена искренней гордостью хомустахцев.
Живой историей создания этого объекта поделился известный народный мастер Якутии Василий Иванович Спиридонов (Барҕа Баһылай). В 1958 году в строительстве мемориала лично принимал участие его отец — Иван Спиридонов, доблестный фронтовик и участник Великой Отечественной войны, награжденный Орденом Отечественной войны II степени. Возвратившись к мирному труду, ветеран-умелец заложил основу этого памятника в знак уважения к своим боевым товарищам.
Благодаря устным воспоминаниям, которые сохранил для нас Василий Иванович, мы сегодня знаем, как бережно и с каким трепетом наши предки возводили этот обелиск. Это не просто бетон и металл — это живое рукотворное наследие наших дедов и прадедов`,extraImage:""},
  memorial: {
    title:"Центральный мемориальный комплекс воинам-землякам и труженикам тыла Намского наслега (с. Хомустах).",
    image:"public/images/central-memorial.jpg",
    text:`Центральная Площадь Победы. Главный мемориальный комплекс наслега посвящён бессмертному подвигу земляков в годы Великой Отечественной войны (1941–1945 гг.). При работе над этим разделом мы поставили задачу превратить сухие архивные сводки в наглядный эмоциональный образ, понятный современному зрителю. На основе изучения местных военных архивов и Книги памяти были систематизированы точные статистические данные о вкладе жителей Намского наслега в Великую Победу:
• 191 человека — всего было призвано на фронт из нашего наслега;
• 94 человека — вернулись домой с Победой;
• 97 человека — погибли на полях сражений`,
    extraImage:""
},
  barakhov: {title:"Сквер имени Исидора Никифоровича Барахова в с. Хомустах",image:"public/images/barakhov-square.jpg",
    text:`Сквер имени Исидора Никифоровича Барахова. Этот объект связывает историю нашего наслега с судьбой одного из основателей государственности Якутии. Исидор Никифорович Барахов (Иванов, 1898–1938) — выдающийся советский государственный и общественно-политический деятель, уроженец Верхневилюйского улуса (Харбалахского наслега). Вместе с Максимом Аммосовым и Платоном Ойунским он стоял у истоков образования Якутской АССР, занимал пост первого председателя Правительства Якутии (Председателя Совета Народных Комиссаров) и первого секретаря Якутского обкома ВКП(б), внёс колоссальный вклад в развитие экономики, народного образования и культуры республики.
В центре благоустроенного сквера установлен классический скульптурный бюст И.Н. Барахова на высоком постаменте на фоне мемориального стенда с цитатой Главы Республики Саха (Якутия), подчёркивающей, что его яркая судьба и беззаветное служение родной стране остаются достойным примером для многих поколений якутян. В карточке путеводителя мы объединили визуальный образ памятника с краткой биографической справкой, составленной на основе архивных и книжных источников.`,extraImage:"public/images/barakhov-view.jpg"},
  poetHouse: {title:"Памятник и Дом поэта П. Н. Тобурокова",image:"public/images/hauseview.jpg",
    text:`Дом-усадьба и Музей-библиотека П.Н. Тобурокова
В Намском наслеге долгие годы жил и творил народный поэт Якутии, участник Сталинградской битвы Пётр Николаевич Тобуроков (Бүөтүр Тобуруокап). Сегодня в состав его усадьбы входят одноэтажный дом-музей с личными вещами, двухэтажная библиотека (подарок земляков к 80-летию поэта в 1997 году) и бюст работы скульптора С.К. Прокопьева, открытый в 2007 году. Каждый год здесь проходят Дни поэзии «Тобуруокап көмүс күһүнэ», а для гостей проводят экскурсии «По тропам поэта» до местности`,extraImage:"public/images/hause.jpg"}
};

const screens = ["welcomeScreen","placesScreen","placeDetailScreen","trailScreen","animalScreen","animalGalleryScreen","trailVideoScreen","quizScreen"];
let currentAnimal = 0;
let toastTimer;

function showScreen(id) {
  screens.forEach(screenId => {
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.toggle("active", screenId === id);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}
function notify(message) {
  const toast=document.getElementById("toast");
  toast.textContent=message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),3200);
}
function imageMarkup(src,alt,emoji) {
  return `<img src="${src}" alt="${alt}" onerror="this.remove();this.parentElement.insertAdjacentHTML('afterbegin','<span class=\\'photo-placeholder\\'>${emoji}</span>')">`;
}
function renderPlaces() {
  document.querySelectorAll(".place-card").forEach(button=>button.addEventListener("click",()=>openPlace(button.dataset.place)));
}
function openPlace(id) {
  if (id === "trail") { showScreen("trailScreen"); return; }
  const place=places[id];
  if (!place) return;
  document.getElementById("placeDetail").innerHTML = `
    <div class="place-story">
      <div class="place-story-image">${imageMarkup(place.image,place.title,"🌿")}</div>
      <div class="place-story-copy">
      <p class="eyebrow">ПАМЯТНОЕ МЕСТО НАМСКОГО НАСЛЕГА</p>
      <h2>${place.title}</h2>
      <p>${place.text}</p>
      ${id === "victory" ? `
<div class="place-audio">
<h3>🎧 Голос живой истории</h3>

<audio controls preload="none">
<source src="public/audio/obelisk.mp3" type="audio/mpeg">
Ваш браузер не поддерживает аудиоплеер.
</audio>

<p class="audio-caption">
Живой историей создания памятника поделился известный земляк,
народный мастер Республики Саха (Якутия)
Василий Иванович Спиридонов.
</p>
</div>
` : ""}
      ${id === "memorial" ? `
<div class="veteran-profile">
<h3>Спиридонов Иван Васильевич</h3>
<p>Участник Великой Отечественной войны 1941–1945 гг.</p>

<img class="veteran-portrait"
src="public/images/ivan.jpg"
alt="Спиридонов Иван Васильевич">

<h4>Удостоверение к награде</h4>
<img class="veteran-award"
src="public/images/order.jpg"
alt="Удостоверение к ордену">

<h4>Биография</h4>
<p>Родился в 1913 году в Намском наслеге в семье Лэкэ Баһылай. Жена — Прасковья Петровна.</p>
<p>До войны работал трактористом в машинно-тракторной станции (МТС). В 1941 году был призван на фронт.</p>
<p>Воевал на Белорусском и Прибайкальском фронтах в 40-м стрелковом полку, 219-м и 16-м артиллерийских полках, в 120-м ЛАП (лёгком артиллерийском полку).</p>
<p>Четырежды был тяжело ранен. В 1945 году вернулся на родину живым.</p>
<p>Награждён медалью «За оборону Ленинграда» и 18 мая — орденом Отечественной войны II степени.</p>

<div class="memory-invitation">
<h3>Сохраним память вместе</h3>
<p>В каждой семье есть своя история мужества.</p>
<p>В будущем мы планируем дополнить этот раздел историями, фотографиями и воспоминаниями о ваших родственниках — участниках Великой Отечественной войны.</p>
<p>Вместе сохраним память о тех, кто подарил нам мирное небо!</p>
</div>
</div>
` : ""}
</div>
      ${place.extraImage ? `<div class="place-extra-image">${imageMarkup(place.extraImage,"Общий вид сквера Барахова","🌳")}</div>` : ""}
    </div>`;
  showScreen("placeDetailScreen");
}
function renderAnimalGrid() {
  document.getElementById("animalGrid").innerHTML=animals.map((a,i)=>`
    <button class="animal-card" type="button" data-index="${i}" aria-label="Открыть карточку: ${a.name}">
      <div class="animal-art" style="background:${a.color}">${imageMarkup(a.wood,a.name,a.emoji)}</div>
      <div class="animal-info"><p class="saha">${a.saha}</p><h3>${a.name}</h3><p>${a.subtitle}</p><span class="card-open">Узнать больше <span>↗</span></span></div>
      </button>`).join("");
  document.querySelectorAll(".animal-card").forEach(btn=>btn.addEventListener("click",()=>openAnimal(Number(btn.dataset.index))));
  const galleryCard = document.createElement("button");
  galleryCard.className = "animal-card gallery-entry-card";
  galleryCard.type = "button";
  galleryCard.setAttribute("aria-label", "Открыть фотографии остальных деревянных скульптур");
  galleryCard.innerHTML = `
    <div class="animal-art"><img src="public/images/quest/animal-1.jpg" alt="Деревянная скульптура на эко-тропе"></div>
    <div class="animal-info"><p class="saha">ФОТОГАЛЕРЕЯ</p><h3>Другие деревянные скульптуры</h3><p>Фотографии остальных фигурок эко-тропы</p><span class="card-open">Смотреть фотографии <span>↗</span></span></div>`;
  galleryCard.addEventListener("click", openAnimalGallery);
  document.getElementById("animalGrid").appendChild(galleryCard);
}
function openAnimal(index) { currentAnimal=(index+animals.length)%animals.length; renderAnimal(); showScreen("animalScreen"); }
function renderAnimal() {
  const a=animals[currentAnimal];
  document.getElementById("animalDetail").innerHTML=`
    <div class="detail-photo" style="background:${a.color}"><span class="photo-placeholder">${a.emoji}</span>${imageMarkup(a.wood,`Деревянная фигура: ${a.name}`,a.emoji)}<div class="photo-caption">Фото деревянной фигуры на тропе Хомустаха</div></div>
    <div class="detail-copy"><p class="eyebrow">ЗНАКОМСТВО С ПРИРОДОЙ</p><h2>${a.name}</h2><p class="animal-subtitle">${a.subtitle} · По-якутски: <strong>${a.saha}</strong></p>
      <div class="action-row"><button class="action-button primary" id="poemButton" type="button">▶ Послушать стих</button><button class="action-button" id="factButton" type="button">🌱 Эко-факт</button></div>
      <audio class="audio-player" id="poemAudio" controls preload="none" hidden><source src="${a.audio}" type="audio/mpeg"></audio>
      <div class="fact-box" id="factBox"><strong>Знаешь ли ты?</strong>${a.fact}<button class="action-button" id="readFactButton" type="button" style="margin-top:12px">🔊 Прослушать рассказ</button></div>
      <div class="detail-nav"><button id="prevAnimal" type="button">← Предыдущее</button><button id="nextAnimal" type="button">Следующее →</button></div>
    </div>`;
  document.getElementById("poemButton").addEventListener("click",()=>{const audio=document.getElementById("poemAudio");audio.hidden=false;audio.play().catch(()=>notify(`Добавьте аудиозапись ${a.audio}. Пока файла нет, стих не воспроизводится.`));});
  document.getElementById("factButton").addEventListener("click",()=>document.getElementById("factBox").classList.toggle("open"));
  document.getElementById("readFactButton").addEventListener("click",()=>speakFact(a.fact));
  document.getElementById("prevAnimal").addEventListener("click",()=>openAnimal(currentAnimal-1));
  document.getElementById("nextAnimal").addEventListener("click",()=>openAnimal(currentAnimal+1));
}
function speakFact(text) {
  if (!("speechSynthesis" in window)) { notify("В этом браузере нет функции озвучивания текста."); return; }
  speechSynthesis.cancel(); const utterance=new SpeechSynthesisUtterance(text); utterance.lang="ru-RU"; utterance.rate=.9; speechSynthesis.speak(utterance);
}

document.getElementById("startButton").addEventListener("click",()=>showScreen("placesScreen"));
document.getElementById("homeButton").addEventListener("click",()=>showScreen("welcomeScreen"));
document.getElementById("brandHome").addEventListener("click",e=>{e.preventDefault();showScreen("welcomeScreen");});
document.getElementById("backToPlaces").addEventListener("click",()=>showScreen("placesScreen"));
document.getElementById("backToPlacesFromTrail").addEventListener("click",()=>showScreen("placesScreen"));
document.getElementById("backToTrail").addEventListener("click",()=>showScreen("trailScreen"));

// Галерея остальных деревянных скульптур: только фотографии, без аудио и эко-фактов.
const sculpturePhotos = [
  "animal-1.jpg", "animal-2.jpg", "animal-3.jpg", "animal-4.jpg",
  "animal-5.jpg", "animal-6.jpg", "animal-7.jpg", "animal-8.jpg",
  "animal-9.jpg", "animal-10.jpg", "animal-11.jpg", "animal-12.jpg",
  "animal-13.jpg", "animal-14.jpg", "animal-15.jpg", "animal-16.jpg"
];
function openAnimalGallery() {
  const gallery = document.getElementById("sculptureGallery");
  gallery.innerHTML = sculpturePhotos.map((file, index) => `
    <figure class="sculpture-photo">
      <img src="public/images/quest/${file}" alt="Деревянная скульптура на эко-тропе, фотография ${index + 1}" loading="lazy">
    </figure>
  `).join("");
  showScreen("animalGalleryScreen");
}
document.getElementById("backToTrailFromGallery").addEventListener("click", () => showScreen("trailScreen"));

function openTrailVideo(){showScreen("trailVideoScreen");const video=document.getElementById("trailVideo");video.pause();video.currentTime=0;video.load();}
function closeTrailVideo(){const video=document.getElementById("trailVideo");video.pause();video.currentTime=0;showScreen("trailScreen");}

renderPlaces();
renderAnimalGrid();

// ===== МИНИ-КВЕСТ: НАЙДИ ЛИСУ =====

function updateFoxQuest() {
const found = localStorage.getItem("khomustakh_fox_found") === "yes";

document.getElementById("foxQuestLocked").hidden = found;
document.getElementById("foxQuestRevealed").hidden = !found;

document.getElementById("foxQuestStatus").textContent =
found ? "1 из 1" : "0 из 1";

document.getElementById("foxQuestFill").style.width =
found ? "100%" : "0%";
}

function openFoundFox() {
// Сохраняем найденное животное
localStorage.setItem("khomustakh_fox_found", "yes");

updateFoxQuest();

// Открываем существующую карточку лисы
openAnimal(1);

// Добавляем сообщение о находке
const detail = document.querySelector("#animalDetail .detail-copy");

detail.insertAdjacentHTML("afterbegin", `
    <div class="fox-found-message">
     🎉 Ты нашёл это животное!
     <p>Поздравляем! Лягушка открыта в твоём эко-путешествии.</p>
    </div>
    `);
}

// Кнопка открытия найденной карточки
document.getElementById("openFoxQuestCard").addEventListener("click", () => {
openAnimal(1);
});

// Проверяем, пришёл ли посетитель по QR-коду
function checkFoxQR() {
const params = new URLSearchParams(window.location.search);

if (params.get("found") === "fox") {
openFoundFox();
}
}

// Показываем сохранённый результат
updateFoxQuest();

// Проверяем QR-код при открытии сайта
checkFoxQR();

// ===== ИНТЕРАКТИВНАЯ ВИКТОРИНА: 10 ВОПРОСОВ =====
const quizQuestions = [
[
"Какой высокий государственный пост занимал Исидор Никифорович Барахов, стоявший у истоков автономии республики?",
[
"А) Первый председатель Правительства Якутии (Председатель СНК ЯАССР)",
"Б) Министр культуры СССР",
"В) Главный архитектор Якутска"
 ],
0
],
[
"В каком году родился выдающийся государственный деятель Якутии Исидор Никифорович Барахов?",
["А) В 1898 году", "Б) В 1905 году", "В) В 1917 году"],
0
],
[
"Кто является автором деревянных скульптур животных на экологической тропе имени П.Н. Тобурокова?",
[
"А) Алексей Федосеев, член Союза художников России",
"Б) Иван Васильевич Спиридонов",
"В) Анегина Ильина"
 ],
0
],
[
"Как на якутском языке называется стерх — редкая белая птица, представленная на тропе Тобурокова?",
["А) Мэкчиргэ", "Б) Саһыл", "В) Кыталык"],
2
],
[
"Чья песня звучит в ночном видеоролике, посвящённом вечерней прогулке по тропе Тобурокова?",
["А) Анегины Ильиной", "Б) Анастасии Варламовой", "В) Раисы Захаровой"],
0
],
[
"В каком году местными жителями был возведён исторический обелиск, имеющий статус объекта культурного наследия?",
["А) В 1945 году", "Б) В 1958 году", "В) В 1975 году"],
1
],
[
"Кто из перечисленных жителей руководил строительством обелиска вместе с Иваном Александровым?",
[
"А) Ветеран ВОВ Иван Васильевич Спиридонов",
"Б) Николай Николаевич Семенов",
"В) Скульптор Алексей Федосеев"
 ],
0
],
[
"Сколько лет было юному помощнику Василию Ивановичу Спиридонову, со слов которого сохранилась история строительства обелиска?",
["А) 12 лет", "Б) 7 лет", "В) 10 лет"],
1
],
[
"Сколько всего жителей наслега было призвано на фронт в годы Великой Отечественной войны?",
["А) 94 человека", "Б) 118 человек", "В) 191 человека"],
2
],
[
"Сколько призванных земляков вернулись домой с Победой?",
["А) 94 человека", "Б) 26 человек", "В) 22 человека"],
0
]
];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizParticipant = "";

function openQuiz() {
  resetQuizView();
  showScreen("quizScreen");
}
function closeQuiz() {
  showScreen("placesScreen");
}
function resetQuizView() {
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  document.getElementById("quizIntro").hidden = false;
  document.getElementById("quizQuestionPanel").hidden = true;
  document.getElementById("quizCertificate").hidden = true;
  document.getElementById("quizName").value = "";
}
function startQuiz() {
  const name = document.getElementById("quizName").value.trim();
  if (!name) {
    notify("Пожалуйста, введи своё имя для сертификата.");
    document.getElementById("quizName").focus();
    return;
  }
  quizParticipant = name;
  quizIndex = 0;
  quizScore = 0;
  document.getElementById("quizIntro").hidden = true;
  document.getElementById("quizQuestionPanel").hidden = false;
  renderQuizQuestion();
}
function renderQuizQuestion() {
  quizAnswered = false;
  const item = quizQuestions[quizIndex];
  document.getElementById("quizProgressText").textContent = `Вопрос ${quizIndex + 1} из ${quizQuestions.length}`;
  document.getElementById("quizScoreText").textContent = `Верных ответов: ${quizScore}`;
  document.getElementById("quizProgressFill").style.width = `${quizIndex / quizQuestions.length * 100}%`;
  document.getElementById("quizQuestionText").textContent = item[0];
  document.getElementById("quizFeedback").textContent = "";
  document.getElementById("quizNextButton").disabled = true;
  document.getElementById("quizNextButton").textContent = quizIndex === quizQuestions.length - 1 ? "К результату →" : "Следующий вопрос →";
  document.getElementById("quizAnswers").innerHTML = item[1].map((answer,index) =>
    `<button class="quiz-answer" type="button" data-answer="${index}">${answer}</button>`
  ).join("");
  document.querySelectorAll(".quiz-answer").forEach(button => {
    button.addEventListener("click", () => chooseQuizAnswer(Number(button.dataset.answer)));
  });
}
function chooseQuizAnswer(selectedIndex) {
  if (quizAnswered) return;
  quizAnswered = true;
  const correctIndex = quizQuestions[quizIndex][2];
  const buttons = [...document.querySelectorAll(".quiz-answer")];
  buttons.forEach((button,index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add("correct");
    if (index === selectedIndex && selectedIndex !== correctIndex) button.classList.add("wrong");
  });
  if (selectedIndex === correctIndex) {
    quizScore++;
    document.getElementById("quizFeedback").textContent = "Правильно! Молодец! 🌿";
    document.getElementById("quizFeedback").className = "quiz-feedback is-correct";
  } else {
    document.getElementById("quizFeedback").textContent = "Пока неверно. Правильный ответ отмечен зелёным.";
    document.getElementById("quizFeedback").className = "quiz-feedback is-wrong";
  }
  document.getElementById("quizScoreText").textContent = `Верных ответов: ${quizScore}`;
  document.getElementById("quizNextButton").disabled = false;
}
function nextQuizQuestion() {
  if (!quizAnswered) return;
  if (quizIndex < quizQuestions.length - 1) {
    quizIndex++;
    renderQuizQuestion();
  } else {
    showQuizCertificate();
  }
}
function showQuizCertificate() {
  document.getElementById("quizQuestionPanel").hidden = true;
  document.getElementById("quizCertificate").hidden = false;
  document.getElementById("certificateName").textContent = quizParticipant;
  document.getElementById("certificateScore").textContent = `${quizScore} из ${quizQuestions.length}`;
  document.getElementById("certificateDate").textContent = new Intl.DateTimeFormat("ru-RU", {
    day:"numeric", month:"long", year:"numeric"
  }).format(new Date());
  document.getElementById("quizProgressFill").style.width = "100%";
  window.scrollTo({top:0,behavior:"smooth"});
}
function restartQuiz() {
  document.getElementById("quizCertificate").hidden = true;
  document.getElementById("quizIntro").hidden = false;
  document.getElementById("quizName").value = quizParticipant;
  document.getElementById("quizName").focus();
}
document.getElementById("quizStartButton").addEventListener("click", startQuiz);
document.getElementById("quizNextButton").addEventListener("click", nextQuizQuestion);
document.getElementById("quizName").addEventListener("keydown", event => {
  if (event.key === "Enter") startQuiz();
});

