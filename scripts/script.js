ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.26208809, 28.64121338],
        zoom: 13,
        controls: ['zoomControl']
    });
    var placemark_1 = new ymaps.Placemark([53.31500795, 28.64318814], {
        balloonContentHeader: '<p>Сумченко Степан Сергеевич</p>',
        balloonContent: "<div id='text_br'>Сумченко Степан Сергеевич - родился 18 марта 1906 года в селе Войновка Александрийского района Кировоградской области Украинской ССР</br><a href='1.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_1);
    var placemark_2 = new ymaps.Placemark([53.30841212, 28.63420868], {
        balloonContentHeader: '<p>Борис Михайлович Дмитриев</p>',
        balloonContent: "<div id='text_br'>Борис Дмитриев родился 11 июня 1924 года в Москве. Участник Великой Отечественной войны. B 1941 году окончил 9 классов школы.<br><a href='2.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_2);
    var placemark_3 = new ymaps.Placemark([53.30871697, 28.64157221], {
        balloonContentHeader: '<p>Римма Владимировна Кунько</p>',
        balloonContent: "<div id='text_br'>Римма Кунько родилась 14 декабря 1926 года в городе Речица Гомельской области Белорусской ССР (ныне Белоруссия) в семье учителей. В 1934 году семья переезжает в деревню Липень Осиповичского района Могилевской области Белорусской ССР. После начала Великой Отечественной войны и оккупации немецкими войсками Белоруссии, Римма вместе с братьями Владимиром и Марком участвовала в активной борьбе с оккупантами. Они собирали разведданные для партизан группы Николая Филипповича Королёва. В июне 1942 года вслед за братьями вступила в 210-й партизанский отряд имени И. В. Сталина. Учитывая молодой возраст, Римму зачислили в хозяйственную роту, но она просилась в боевую роту.<br><a href='3.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_3);
    var placemark_4 = new ymaps.Placemark([53.30635665, 28.64452638], {
        balloonContentHeader: '<p>Николай Филиппович Королёв</p>',
        balloonContent: "<div id='text_br'>Николай Филиппович Королёв(01.07.1906 — 09.04.1972) — один из организаторов и руководителей коммунистического подполья и партизанского движения в Могилёвской обл. в годы Великой Отечественной войны, Герой Советского Союза (1.1.1944), генерал-майор (1943), почётный гражданин г. Могилёва (1970). <br><a href='4.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_4);
    var placemark_5 = new ymaps.Placemark([53.30626823, 28.64116264], {
        balloonContentHeader: '<p>Каданчик Сергей Николаевич</p>',
        balloonContent: "<div id='text_br'>Каданчик Сергей Николаевич (1906-1943г.г). Родился в 1906 году в деревне Моисеевичи, ныне Осиповичского района Могилёвской области Республики Беларусь в крестьянской семье. Белорус.<br><a href='5.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_5);
    var placemark_6 = new ymaps.Placemark([53.30159582, 28.66239669], {
        balloonContentHeader: '<p>Фёдор Андреевич Крыло́вич</p>',
        balloonContent: "<div id='text_br'>Фёдор Андреевич Крыло́вич (23 марта 1916, Минск, Российская империя — 7 ноября 1959, Осиповичи, Могилёвская область, БССР, СССР) — советский партизан, один из организаторов Осиповичского коммунистического подполья, руководитель партизанской диверсионной группы в годы Великой Отечественной в Беларуси.<br><a href='6.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_6);
    var placemark_7 = new ymaps.Placemark([53.30263268885113,28.651330831617383], {
        balloonContentHeader: '<p>Якубовский Иван Игнатьевич</p>',
        balloonContent: "<div id='text_br'>Якубовский Иван Игнатьевич – командир отдельной 91-й танковой бригады 1-го Украинского фронта, полковник; заместитель командира 6-го гвардейского танкового корпуса 1-го Украинского фронта, полковник.<br><a href='7.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_7);
    var placemark_8 = new ymaps.Placemark([53.29993332290068,28.653991582960156], {
        balloonContentHeader: '<p>Черняховский Иван Даниилович</p>',
        balloonContent: "<div id='text_br'>Черняховский Иван Даниилович (1907–1945). В Великую Отечественную войну командовал 28-й танковой дивизией в ходе Прибалтийской оборонительной операции. В первые месяцы войны ему присвоено воинское звание полковник.<br><a href='8.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_8);
    var placemark_9 = new ymaps.Placemark([53.291086719247176,28.65349505989855], {
        balloonContentHeader: '<p>Люльков Григорий Фомич</p>',
        balloonContent: "<div id='text_br'>Люльков Григорий Фомич (1916-1983г.г). Родился на хуторе Филоновском Волгоградской области. Член КПСС с 1942 года.<br><a href='9.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_9);
    var placemark_10 = new ymaps.Placemark([53.310957652782044,28.62291668026811], {
        balloonContentHeader: '<p>Георгий Константинович Жуков</p>',
        balloonContent: "<div id='text_br'>Георгий Константинович Жуков(9 февраля 1955 — 26 октября 1957). В годы Великой Отечественной войны занимал посты начальника Генерального штаба РККА (июнь-июль 1941 г.), члена Ставки Главного командования (с 23 июня 1941 г.), Ставки Верховного Командования (с 10 июля 1941 г.), Ставки Верховного Главнокомандования (с 8 августа 1941 г.), командующего Ленинградским фронтом (с 14 сентября), командующего Западным фронтом (с 10 октября).<br><a href='10.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_10);
}
