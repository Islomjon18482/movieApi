// index.js

// Expressni import qilamiz
const express = require('express');
// Expressning app() metodini chaqiramiz
const app = express();
// Portni aniqlaymiz
const port = 3000;

// GET so'rovi uchun endpointni yaratamiz
app.get('/movie100', (req, res) => {
  res.json({
    "docs": [
        {
            "status": null,
            "rating": {
                "kp": 8.822,
                "imdb": 8.5,
                "filmCritics": 6.8,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 1995556,
                "imdb": 921753,
                "filmCritics": 129,
                "russianFilmCritics": 12,
                "await": 15
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg"
            },
            "movieLength": 112,
            "id": 535341,
            "type": "movie",
            "name": "1+1",
            "description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
            "year": 2011,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "биография"
                }
            ],
            "countries": [
                {
                    "name": "Франция"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Intouchables",
            "enName": null,
            "names": [
                {
                    "name": "1+1"
                },
                {
                    "name": "Intouchables"
                },
                {
                    "name": "不可触碰",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "最佳拍档",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "无法触碰",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Untouchable",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "不可触摸",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Неприкасаемые",
                    "language": "RU",
                    "type": "Literal"
                },
                {
                    "name": "1+1 [Intouchables]",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Saikyô no futari",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Amigos",
                    "language": "CL",
                    "type": null
                },
                {
                    "name": "Mehubarim la'hayim",
                    "language": "IL",
                    "type": "Hebrew title"
                },
                {
                    "name": "Amigos para siempre",
                    "language": "VE",
                    "type": null
                },
                {
                    "name": "Prijatelja",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "En oväntad vänskap",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Intocáveis",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Intouchables – Ziemlich beste Freunde",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "언터처블 1%의 우정",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "De Uroerlige",
                    "language": "DK",
                    "type": null
                },
                {
                    "name": "Intocable",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Недоторканні",
                    "language": "UA",
                    "type": "Unofficial Title"
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
            },
            "top10": null,
            "top250": 2,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.567,
                "imdb": 7.8,
                "filmCritics": 6.5,
                "russianFilmCritics": 85.7143,
                "await": null
            },
            "votes": {
                "kp": 1687894,
                "imdb": 386610,
                "filmCritics": 278,
                "russianFilmCritics": 21,
                "await": 13639
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg"
            },
            "movieLength": 113,
            "id": 1143242,
            "type": "movie",
            "name": "Джентльмены",
            "description": "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/x1000"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "боевик"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Gentlemen",
            "enName": null,
            "names": [
                {
                    "name": "Джентльмены"
                },
                {
                    "name": "The Gentlemen"
                },
                {
                    "name": "Toff Guys",
                    "language": "GB",
                    "type": "working title"
                },
                {
                    "name": "Los Caballeros de la mafia",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Busha",
                    "language": "GB",
                    "type": "working title"
                },
                {
                    "name": "Los caballeros: criminales con clase",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "紳士追殺令",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Джентльмени",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Εγκληματίες πρώτης τάξεως",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "ジェントルメン：2020",
                    "language": "JP",
                    "type": null
                }
            ],
            "shortDescription": "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням",
            "ratingMpaa": "r",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f18064fd95abb74cbcc02873b8/orig"
            },
            "top10": null,
            "top250": 26,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.011,
                "imdb": 8.2,
                "filmCritics": 7.8,
                "russianFilmCritics": 77.4194,
                "await": null
            },
            "votes": {
                "kp": 1299832,
                "imdb": 1566857,
                "filmCritics": 289,
                "russianFilmCritics": 31,
                "await": 43021
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/2P0toWq3feNvFAzf28j7vNc1IuZ.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/2P0toWq3feNvFAzf28j7vNc1IuZ.jpg"
            },
            "movieLength": 180,
            "id": 462682,
            "type": "movie",
            "name": "Волк с Уолл-стрит",
            "description": "1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...",
            "year": 2013,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/5c758ac0-7a5c-4f00-a94f-1be680a312fb/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/5c758ac0-7a5c-4f00-a94f-1be680a312fb/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "биография"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Wolf of Wall Street",
            "enName": null,
            "names": [
                {
                    "name": "Волк с Уолл-стрит"
                },
                {
                    "name": "The Wolf of Wall Street"
                },
                {
                    "name": "Para Avcisi",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "华尔街狼人",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "华尔街之狼",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Wilk z Wall Street",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "더 울프 오브 월 스트리트",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "คนจะรวย ช่วยไม่ได้",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "El lobo de Wall Street",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Wall Streeti hunt",
                    "language": "EE",
                    "type": null
                }
            ],
            "shortDescription": "Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе",
            "ageRating": 18,
            "ratingMpaa": "r",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000178c64fe43f3b567acaaa73e861f0/orig"
            },
            "top10": null,
            "top250": 54,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 41519,
            "type": "movie",
            "name": "Брат",
            "rating": {
                "kp": 8.312,
                "imdb": 7.8,
                "filmCritics": 7.6,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Демобилизовавшись, Данила Багров вернулся в родной городок. Но скучная жизнь российской провинции не устраивала его, и он решился податься в Петербург, где, по слухам, уже несколько лет процветает его старший брат. Данила нашел брата. Но все оказалось не так просто — брат работает наемным убийцей.",
            "votes": {
                "kp": 1290129,
                "imdb": 24275,
                "filmCritics": 5,
                "russianFilmCritics": 1,
                "await": 0
            },
            "year": 1997,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "боевик"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/cRQq2VXKP9Vt9NHLXoHailKVhrW.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/cRQq2VXKP9Vt9NHLXoHailKVhrW.jpg"
            },
            "enName": null,
            "movieLength": 100,
            "names": [
                {
                    "name": "Брат"
                },
                {
                    "name": "Brat",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Brother",
                    "language": "US",
                    "type": null
                }
            ],
            "status": null,
            "ratingMpaa": null,
            "shortDescription": "Дембель Данила Багров защищает слабых в Петербурге 1990-х. Фильм, сделавший Сергея Бодрова народным героем",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017c61da4f185f94d808f4d90182a8/orig"
            },
            "top10": null,
            "top250": 38,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.613,
                "imdb": 7.1,
                "filmCritics": 6.3,
                "russianFilmCritics": 72.2222,
                "await": null
            },
            "votes": {
                "kp": 1259645,
                "imdb": 204614,
                "filmCritics": 260,
                "russianFilmCritics": 36,
                "await": 23485
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/70AV2Xx5FQYj20labp0EGdbjI6E.jpg"
            },
            "movieLength": 119,
            "id": 1318972,
            "type": "movie",
            "name": "Гнев человеческий",
            "description": "Грузовики лос-анджелесской инкассаторской компании Fortico Security часто подвергаются нападениям, и во время очередного ограбления погибают оба охранника. Через некоторое время в компанию устраивается крепкий немногословный британец Патрик Хилл. Он получает от босса прозвище Эйч и, впритык к необходимому минимуму пройдя тесты по фитнесу, стрельбе и вождению, отправляется на первое задание. Вскоре и его грузовик пытаются ограбить вооруженные налётчики, но Эйч в одиночку расправляется с целой бандой и становится героем. Кажется, слава и уважение коллег его совершенно не интересуют, ведь он преследует свои цели.",
            "year": 2021,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/90d57813-387c-44c4-81c1-ecddb3c417a5/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/90d57813-387c-44c4-81c1-ecddb3c417a5/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Wrath of Man",
            "enName": null,
            "names": [
                {
                    "name": "Гнев человеческий"
                },
                {
                    "name": "Wrath of Man"
                },
                {
                    "name": "Cash Truck",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "运钞车",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Un homme en colère",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Infiltrado",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Justicia Implacable",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "คนคลั่งแค้น ปล้นผ่านรก",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "캐시트럭",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "İntikam Vakti",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Para Kamyonu",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Cash Truck",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "La furia di un uomo",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Cash Truck",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "玩命鈔劫",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "خشم مرد",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "キャッシュトラック：2021",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Despierta la furia",
                    "language": "ES",
                    "type": null
                }
            ],
            "shortDescription": "Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе",
            "ratingMpaa": "r",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a00000179d1cc14e6c741017c7f7a2f15c2/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.277,
                "imdb": 7.7,
                "filmCritics": 5.9,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 1172008,
                "imdb": 649657,
                "filmCritics": 116,
                "russianFilmCritics": 0,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/6uLhSLXzB1ooJ3522ydrBZ2Hh0W.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/6uLhSLXzB1ooJ3522ydrBZ2Hh0W.jpg"
            },
            "movieLength": 103,
            "id": 8124,
            "type": "movie",
            "name": "Один дома",
            "description": "Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.",
            "year": 1990,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Home Alone",
            "enName": null,
            "names": [
                {
                    "name": "Один дома"
                },
                {
                    "name": "Home Alone"
                },
                {
                    "name": "Один вдома",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Один удома",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Hjemme alene",
                    "language": "NO",
                    "type": null
                },
                {
                    "name": "अकेला घर",
                    "language": "IN",
                    "type": "Hindi"
                },
                {
                    "name": "Homu aron",
                    "language": "JP",
                    "type": "romaji"
                },
                {
                    "name": "Singur acasa",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Maman, j'ai raté l'avion",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "హోమ్ అలోన్",
                    "language": "IN",
                    "type": "Telugu"
                },
                {
                    "name": "Üksinda kodus",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Home Alone 1",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "ホームアローン",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Mi probre angelito",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Viens pats mājās",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Kevin - Allein zu Haus",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "שחכו אותי בבית",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "לבד בבית",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Ensam hemma",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Maman, (1) j'ai raté l'avion !",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "나홀로 집에",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Ở Nhà Một Mình",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Үйде жалғыз қалғанда",
                    "language": "KZ",
                    "type": null
                },
                {
                    "name": "Sam doma",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "לבד בבית 1",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Mi pobre angelito",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Solo en casa",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "Evdə Tək",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "小鬼當家",
                    "language": "TW",
                    "type": null
                }
            ],
            "ratingMpaa": "pg",
            "shortDescription": "Мальчик-озорник задает жару грабителям. Лучшая комедия для создания праздничного настроения у всей семьи",
            "ticketsOnSale": false,
            "ageRating": 0,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/212840/2a00000172550ce8255397b4e3d6f9938ddf/orig"
            },
            "top10": null,
            "top250": 186,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.975,
                "imdb": 7.9,
                "filmCritics": 7.5,
                "russianFilmCritics": 75,
                "await": null
            },
            "votes": {
                "kp": 1076195,
                "imdb": 1379366,
                "filmCritics": 337,
                "russianFilmCritics": 12,
                "await": 38687
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg"
            },
            "movieLength": 162,
            "id": 251733,
            "type": "movie",
            "name": "Аватар",
            "description": "Бывший морпех Джейк Салли прикован к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остается воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора, где корпорации добывают редкий минерал, имеющий огромное значение для выхода Земли из энергетического кризиса.",
            "year": 2009,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Avatar",
            "enName": null,
            "names": [
                {
                    "name": "Аватар"
                },
                {
                    "name": "Avatar"
                },
                {
                    "name": "Project 880465wtgsdtg",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Avatar Edicion Coleccionista",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Avatar: Extended Version",
                    "language": "US",
                    "type": "extended version"
                },
                {
                    "name": "Avatar - Collector's Extended Edition",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Avatar - Edição Estendida de Colecionador",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Avatar 3D",
                    "language": "US",
                    "type": "3D version"
                },
                {
                    "name": "Avatar: An IMAX 3D Experience",
                    "language": "US",
                    "type": "IMAX version"
                },
                {
                    "name": "James Cameron's Avatar",
                    "language": "US",
                    "type": "promotional title"
                },
                {
                    "name": "Avatar: Special Edition",
                    "language": "US",
                    "type": "longer version"
                },
                {
                    "name": "아바타",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Аватар 3D",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Avatar - Wersja Specjalna",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Avatar - Wersja Rozszerzona",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Avatar - Collector's Edition",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Avatar - Extended Collector's Edition",
                    "language": "US",
                    "type": "box set"
                },
                {
                    "name": "અવતાર",
                    "language": "IN",
                    "type": "Gujarati"
                },
                {
                    "name": "अवतार",
                    "language": "IN",
                    "type": "Hindi"
                },
                {
                    "name": "অবতার",
                    "language": "IN",
                    "type": "Bengali"
                },
                {
                    "name": "Avatar 1 - Aufbruch nach Pandora",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Ավատար",
                    "language": "AM",
                    "type": null
                },
                {
                    "name": "Avatar 1",
                    "language": "US",
                    "type": "Series Title"
                },
                {
                    "name": "アバター",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "アバター：2009",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "アバター（Avatar 1）",
                    "language": "JP",
                    "type": null
                }
            ],
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "shortDescription": "Парализованный морпех становится мессией для жителей Пандоры. Самый кассовый фильм в истории кино",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000176f1bb64212c9df414a8909c8f44/orig"
            },
            "top10": null,
            "top250": 223,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4959134,
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "names": [
                {
                    "name": "По щучьему велению"
                }
            ],
            "alternativeName": null,
            "description": "Если ты идешь на рыбалку — будь готов к тому, что вытянешь рыбу своей мечты, волшебную Щуку, которая может исполнить три любых твоих желания. Только Емеля спустил два желания на ветер, а третье решил приберечь. Поэтому, чтобы добиться руки царской дочери Анфисы, придется ему действовать без волшебной силы, самому. А помогать ему будет Щука, которая без своей шкурки предстает обычной девушкой Василисой. Вместе им предстоит найти скатерть-самобранку, встретиться с Котом Баюном, отправиться в мрачное царство Кощея и понять, что настоящее чудо — это быть с тем, кого любишь.",
            "enName": null,
            "movieLength": 115,
            "name": "По щучьему велению",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10900341/b3ed4aa7-c38c-4a35-a505-aaa6372ad9da/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10900341/b3ed4aa7-c38c-4a35-a505-aaa6372ad9da/x1000"
            },
            "rating": {
                "kp": 7.784,
                "imdb": 6.3,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Чудо-рыба помогает непутевому Емеле завоевать сердце царской дочери. Сказочный хит с Никитой Кологривым",
            "status": null,
            "ticketsOnSale": true,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 1062952,
                "imdb": 517,
                "filmCritics": 0,
                "russianFilmCritics": 2,
                "await": 6684
            },
            "year": 2023,
            "ageRating": 6,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018c5052530175e3a474d96e4e5bcf/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018c5052530175e3a474d96e4e5bcf/x1000"
            },
            "logo": {
                "url": null
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.11,
                "imdb": 7.9,
                "filmCritics": 8.3,
                "russianFilmCritics": 89.4737,
                "await": null
            },
            "votes": {
                "kp": 1047785,
                "imdb": 767079,
                "filmCritics": 472,
                "russianFilmCritics": 19,
                "await": 9137
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg"
            },
            "movieLength": 130,
            "id": 1188529,
            "type": "movie",
            "name": "Достать ножи",
            "description": "На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование смерти Харлана. Не нужно быть опытным следователем, чтобы понять, что все приукрашивают свои отношения с почившим главой семейства, но Блану достаётся настоящий подарок — медсестра покойного, которая физически не выносит ложь.",
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1777765/bb8afbd6-c9cd-4631-99e9-3fecf241dbaf/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1777765/bb8afbd6-c9cd-4631-99e9-3fecf241dbaf/x1000"
            },
            "genres": [
                {
                    "name": "детектив"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Knives Out",
            "enName": null,
            "names": [
                {
                    "name": "Достать ножи"
                },
                {
                    "name": "Knives Out"
                },
                {
                    "name": "Ножи наголо",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "ナイブズ・アウト/名探偵と刃の館の秘密",
                    "language": "JP",
                    "type": "complete title"
                },
                {
                    "name": "Morning Bell",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Knives Out - Ein Mord zum Dessert",
                    "language": "AT",
                    "type": null
                },
                {
                    "name": "Knives Out 1",
                    "language": "US",
                    "type": "series title"
                },
                {
                    "name": "ฆาตกรรมหรรษา ใครฆ่าคุณปู่",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Нож у леђа",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "나이브스 아웃",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Puñales por la espalda",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "ナイブズ・アウト／名探偵と刃の館の秘密",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Uz nažiem",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Bıçaklar Çekildi",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "ナイブズ・アウト 名探偵と刃の館の秘密：2019",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Kẻ Đâm Lén",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Bıçaqlar Çəkildi",
                    "language": "AZ",
                    "type": null
                }
            ],
            "shortDescription": "Частный детектив ведет запутанное дело о смерти известного писателя. Криминальная комедия с Дэниэлом Крэйгом",
            "ageRating": 18,
            "ratingMpaa": "pg13",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000176f1c6464b62d464e2e9ddd8dbb6/orig"
            },
            "top10": null,
            "top250": 147,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 42664,
            "type": "movie",
            "name": "Иван Васильевич меняет профессию",
            "rating": {
                "kp": 8.787,
                "imdb": 8.2,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Инженер-изобретатель Тимофеев сконструировал машину времени, которая соединила его квартиру с далёким шестнадцатым веком — точнее, с палатами государя Ивана Грозного. Туда-то и попадают тёзка царя пенсионер-общественник Иван Васильевич Бунша и квартирный вор Жорж Милославский, а сам великий государь оказывается в квартире Тимофеева.",
            "votes": {
                "kp": 1041513,
                "imdb": 18328,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "year": 1973,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "фантастика"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/z8125Gm4hadwQZOcFiZ7uor77E4.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/z8125Gm4hadwQZOcFiZ7uor77E4.jpg"
            },
            "enName": null,
            "movieLength": 88,
            "names": [
                {
                    "name": "Иван Васильевич меняет профессию"
                },
                {
                    "name": "Ivan Vasilevich menyaet professiyu",
                    "language": "RU",
                    "type": "translit"
                },
                {
                    "name": "Ivan Vasilyevich Changes Occupation",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Ivan Vasilievich: Back to the Future",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Ivan Vasilevich o‘z kasbini o‘zgartiradi",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Ivan Vassilievitch change de profession",
                    "language": "FR",
                    "type": null
                }
            ],
            "status": null,
            "ratingMpaa": null,
            "shortDescription": "Иван Грозный отвечает на телефон, пока его тезка-пенсионер сидит на троне. Советский хит о липовом государе",
            "ticketsOnSale": false,
            "ageRating": 6,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a000001720d0315b85f00ffcf4f8472e93a/orig"
            },
            "top10": null,
            "top250": 12,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.314,
                "imdb": 8,
                "filmCritics": 8.1,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 1019470,
                "imdb": 541786,
                "filmCritics": 297,
                "russianFilmCritics": 14,
                "await": 18808
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/p2fRZzxla6NoRbIH2KOZq0gHb5S.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/p2fRZzxla6NoRbIH2KOZq0gHb5S.jpg"
            },
            "movieLength": 108,
            "id": 775276,
            "type": "cartoon",
            "name": "Зверополис",
            "description": "Добро пожаловать в Зверополис – современный город, населенный самыми разными животными, от огромных слонов до крошечных мышек. Зверополис разделен на районы, полностью повторяющие естественную среду обитания разных жителей – здесь есть и элитный район Площадь Сахары и неприветливый Тундратаун. В этом городе появляется новый офицер полиции, жизнерадостная зайчиха Джуди Хоппс, которая с первых дней работы понимает, как сложно быть маленькой и пушистой среди больших и сильных полицейских. Джуди хватается за первую же возможность проявить себя, несмотря на то, что ее партнером будет болтливый хитрый лис Ник Уайлд. Вдвоем им предстоит раскрыть сложное дело, от которого будет зависеть судьба всех обитателей Зверополиса.",
            "year": 2016,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4716873/893bba73-3105-4944-8d18-a38f929f2759/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4716873/893bba73-3105-4944-8d18-a38f929f2759/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "детектив"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "Zootopia",
            "enName": null,
            "names": [
                {
                    "name": "Зверополис"
                },
                {
                    "name": "Zootopia"
                },
                {
                    "name": "Zootropolis - Dyreriket",
                    "language": "NO",
                    "type": null
                },
                {
                    "name": "Zoomania - Ganz schön ausgefuchst!",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Zootopia 3D",
                    "language": "US",
                    "type": "3D version"
                },
                {
                    "name": "זוטופיה",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Zootropolis: Eläinten Kaupunki",
                    "language": "FI",
                    "type": null
                },
                {
                    "name": "疯狂动物城",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Zootropolis",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Zootrópolis",
                    "language": "PT",
                    "type": "Animação"
                },
                {
                    "name": "优兽大都会",
                    "language": "CN",
                    "type": null
                }
            ],
            "ratingMpaa": "pg",
            "shortDescription": "Отважная крольчиха делает карьеру в полиции звериного города. Оскароносная комедия с серьезным подтекстом",
            "ticketsOnSale": false,
            "ageRating": 6,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000178cab3087920b10e48325211c178/orig"
            },
            "top10": null,
            "top250": 196,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 464963,
            "alternativeName": "Game of Thrones",
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                }
            ],
            "description": "К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.",
            "enName": "Game of Thrones",
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "мелодрама"
                },
                {
                    "name": "приключения"
                }
            ],
            "movieLength": null,
            "name": "Игра престолов",
            "names": [
                {
                    "name": "Игра престолов"
                },
                {
                    "name": "Game of Thrones"
                },
                {
                    "name": "Froni i shpatave",
                    "language": "AL",
                    "type": null
                },
                {
                    "name": "El Juego de Tronos",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "A Guerra dos Tronos",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "权利的游戏",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "權力的遊戲",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Game of Thrones: Das Lied von Eis und Feuer",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Paihnidi tou stemmatos",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Le Throne de fer",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Game of Thrones - Le trône de fer",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "სატახტოთა თამაში",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "Παιχνίδι Του Στέμματος",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "權力遊戲",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Baziye tajo takht",
                    "language": "IR",
                    "type": "romanization"
                },
                {
                    "name": "بازی تاج و تخت",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "گیم آف ترونز",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "왕좌의 게임",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Sostų žaidimas",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Troņu spēle",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Игра на тронови",
                    "language": "MK",
                    "type": null
                },
                {
                    "name": "Gra o tron",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Igra prestolov",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "มหาศึกชิงบัลลังก์",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Taht Oyunları",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "A Song of Ice and Fire",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "GoT",
                    "language": "US",
                    "type": "common abbreviation"
                },
                {
                    "name": "Taxtlar o'yini",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Taxt o'yinlari",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "GOT",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Gra o Tron",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Гра Престолів",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Game of Thrones .jpg",
                    "language": "US",
                    "type": "Alternative title"
                },
                {
                    "name": "Taxt Oyunları",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "冰与火之歌",
                    "language": "CN",
                    "type": null
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/x1000"
            },
            "rating": {
                "kp": 8.979,
                "imdb": 9.2,
                "filmCritics": 0,
                "russianFilmCritics": 90,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Рыцари, мертвецы и драконы — в эпической битве за судьбы мира. Сериал, который навсегда изменил телевидение",
            "ticketsOnSale": false,
            "type": "tv-series",
            "typeNumber": 2,
            "votes": {
                "kp": 1014956,
                "imdb": 2264883,
                "filmCritics": 0,
                "russianFilmCritics": 20,
                "await": 1969
            },
            "year": 2011,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/239697/2a00000170b077ba4dca5c9303185c5e8003/orig"
            },
            "releaseYears": [
                {
                    "start": 2011,
                    "end": 2019
                }
            ],
            "top10": null,
            "top250": 3,
            "status": "completed",
            "isSeries": true,
            "seriesLength": 55,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 9.109,
                "imdb": 9.3,
                "filmCritics": 8.2,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 1014343,
                "imdb": 2867466,
                "filmCritics": 140,
                "russianFilmCritics": 1,
                "await": 2
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
            },
            "movieLength": 142,
            "id": 326,
            "type": "movie",
            "name": "Побег из Шоушенка",
            "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
            "year": 1994,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Shawshank Redemption",
            "enName": null,
            "names": [
                {
                    "name": "Побег из Шоушенка"
                },
                {
                    "name": "The Shawshank Redemption"
                },
                {
                    "name": "Xiao shen ke de jiu shu",
                    "language": "CN",
                    "type": "Mandarin title"
                },
                {
                    "name": "Gaqceva shoushenkidan",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "Rita Hayworth - nyckel till flykten",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Şouşenkdən qaçış",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "Shawshank Redemption – Avain pakoon",
                    "language": "FI",
                    "type": "DVD"
                },
                {
                    "name": "Искупление Шоушенком",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Shoushenkden Qacish",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "Rastgari Dar Shawshank",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Homot Shel Tikva",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Shôshanku no sora ni",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Бекство из Шошенка",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "쇼생크 탈출",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Les Évadés",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "刺激1995",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Die Verurteilten",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Skazani na Shawshank",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "月黑高飛",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "ショーシャンクの空に：1994",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Cadena perpetua",
                    "language": "ES",
                    "type": "Castilian Spanish"
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1648503/2a000001705c8bf514c033f1019473a4caae/orig"
            },
            "top10": null,
            "top250": 3,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.668,
                "imdb": 8.8,
                "filmCritics": 7.4,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 1003995,
                "imdb": 2302873,
                "filmCritics": 185,
                "russianFilmCritics": 2,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
            },
            "movieLength": 139,
            "id": 361,
            "type": "movie",
            "name": "Бойцовский клуб",
            "description": "Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение.\n\nПроходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.",
            "year": 1999,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/x1000"
            },
            "genres": [
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Германия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Fight Club",
            "enName": null,
            "names": [
                {
                    "name": "Бойцовский клуб"
                },
                {
                    "name": "Fight Club"
                },
                {
                    "name": "Borilački klub",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Mo'adon Krav",
                    "language": "IL",
                    "type": "romanization"
                },
                {
                    "name": "Boytsovskiy klub",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Boen klub",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Biytsivsʹkyy klub",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Kláb máchis",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Dövüş Klubü",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "El Club de la Pelea",
                    "language": "MX",
                    "type": "Hispanoamérica"
                },
                {
                    "name": "파이트 클럽",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Cīņas klubs",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "باشگاه مشت زنی",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Podziemny krąg",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Clube da Luta",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Clube de Combate",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "ファイト・クラブ：1999",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "El club de la lucha",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "鬥陣俱樂部",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Döyüş Klubu",
                    "language": "AZ",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Страховой работник разрушает рутину своей благополучной жизни. Культовая драма по книге Чака Паланика",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/239697/2a00000173c3126e043a7edfc591ded6c0c6/orig"
            },
            "top10": null,
            "top250": 7,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.457,
                "imdb": 8.2,
                "filmCritics": 7.2,
                "russianFilmCritics": 93.3333,
                "await": null
            },
            "votes": {
                "kp": 1003886,
                "imdb": 561466,
                "filmCritics": 367,
                "russianFilmCritics": 15,
                "await": 6866
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/5En0fmDagt3Pk8d7P3uTwfeQceg.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/5En0fmDagt3Pk8d7P3uTwfeQceg.jpg"
            },
            "movieLength": 130,
            "id": 1108577,
            "type": "movie",
            "name": "Зеленая книга",
            "description": "1960-е годы. После закрытия нью-йоркского ночного клуба на ремонт вышибала Тони по прозвищу Болтун ищет подработку на пару месяцев. Как раз в это время Дон Ширли &#151; утонченный светский лев, богатый и талантливый чернокожий музыкант, исполняющий классическую музыку &#151; собирается в турне по южным штатам, где ещё сильны расистские убеждения и царит сегрегация. Он нанимает Тони в качестве водителя, телохранителя и человека, способного решать текущие проблемы. У этих двоих так мало общего, и эта поездка навсегда изменит жизнь обоих.",
            "year": 2018,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/x1000"
            },
            "genres": [
                {
                    "name": "биография"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Китай"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Green Book",
            "enName": null,
            "names": [
                {
                    "name": "Зеленая книга"
                },
                {
                    "name": "Green Book"
                },
                {
                    "name": "Zeljonaja kniga",
                    "language": "RU",
                    "type": "Translit"
                },
                {
                    "name": "Zelenaja kniga",
                    "language": "RU",
                    "type": "Translit"
                },
                {
                    "name": "グリーンブック：2018",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "幸福綠皮書",
                    "language": "TW",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Путешествие итальянца-вышибалы и чернокожего пианиста по Америке 1960-х. «Оскар» за лучший фильм",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016e043a92a346ddf03b9f572b11d6/orig"
            },
            "top10": null,
            "top250": 24,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 41520,
            "type": "movie",
            "name": "Брат 2",
            "rating": {
                "kp": 8.205,
                "imdb": 7.6,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Участвуя в программе на телевидении, Данила Багров встречает своих друзей по службе в Чечне. Одного из них внезапно убивают. Выясняется, что у того были неприятности из-за брата-хоккеиста в Америке. Данила должен разобраться. Он вылетает в Америку и за компанию берёт с собой старшего брата.",
            "votes": {
                "kp": 995371,
                "imdb": 17154,
                "filmCritics": 0,
                "russianFilmCritics": 1,
                "await": 0
            },
            "year": 2000,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/80eab631-346c-4c29-b14d-1fa1438158f9/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/80eab631-346c-4c29-b14d-1fa1438158f9/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/a8bPE7ufmXsfj2BLOrB8KuNMxN5.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/a8bPE7ufmXsfj2BLOrB8KuNMxN5.jpg"
            },
            "enName": null,
            "movieLength": 127,
            "names": [
                {
                    "name": "Брат 2"
                },
                {
                    "name": "Brat 2",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Brother 2",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "On the Way Home",
                    "language": "CA",
                    "type": "festival"
                }
            ],
            "status": null,
            "ageRating": 18,
            "ratingMpaa": null,
            "shortDescription": "Американцы знакомятся с Данилой Багровым и узнают, в чем сила. Сиквел о герое времени с мощным рок-саундтреком",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1652588/2a0000016f12f895b05320538df47aca46c8/orig"
            },
            "top10": null,
            "top250": 41,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1100777,
            "type": "tv-series",
            "name": "Триггер",
            "rating": {
                "kp": 8.474,
                "imdb": 7.4,
                "filmCritics": 0,
                "russianFilmCritics": 71.4286,
                "await": null
            },
            "description": "Психолог Артём Стрелецкий — сторонник шоковой терапии в лечении больных. Он считает, что единственный способ для человека решить свои проблемы — это понять себя и перестать себе врать. Если большинство психологов нянчатся с клиентами, по полгода выслушивают жалобы на жизнь, сочувствуют и получают при этом немалые деньги за цикл сеансов, то Артём постоянно провоцирует клиентов: оскорбляет их, смеется над ними, намеренно выталкивает из зоны комфорта. Практика Артема процветает, пока один из его пациентов не кончает жизнь самоубийством.",
            "votes": {
                "kp": 986711,
                "imdb": 919,
                "filmCritics": 0,
                "russianFilmCritics": 7,
                "await": 307
            },
            "year": 2018,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/374ded5e-2b42-4516-befe-31d5f427eafd/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/374ded5e-2b42-4516-befe-31d5f427eafd/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 2,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/bXGMo5InhWjFO3qpU1eDgALKfBX.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/bXGMo5InhWjFO3qpU1eDgALKfBX.jpg"
            },
            "enName": null,
            "movieLength": null,
            "names": [
                {
                    "name": "Триггер"
                }
            ],
            "status": null,
            "ratingMpaa": null,
            "shortDescription": "Гениальный психолог или провокатор-шарлатан? Напряженная драма с Максимом Матвеевым",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": null,
                "previewUrl": null
            },
            "releaseYears": [
                {
                    "start": 2018,
                    "end": null
                }
            ],
            "top10": null,
            "top250": 58,
            "isSeries": true,
            "seriesLength": 52,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.275,
                "imdb": 7.6,
                "filmCritics": 7.1,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 981602,
                "imdb": 850686,
                "filmCritics": 201,
                "russianFilmCritics": 2,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/hziiv14OpD73u9gAak4XDDfBKa2.jpg"
            },
            "movieLength": 152,
            "id": 689,
            "type": "movie",
            "name": "Гарри Поттер и философский камень",
            "description": "Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.",
            "year": 2001,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Harry Potter and the Sorcerer's Stone",
            "enName": null,
            "names": [
                {
                    "name": "Гарри Поттер и философский камень"
                },
                {
                    "name": "Harry Potter and the Sorcerer's Stone"
                },
                {
                    "name": "Khari Potŭr i Filosofskiyat kamŭk",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Hari Poter i Kamen mudrosti",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Garri Potter i filosofskiy kamen'",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "ہیری پوٹر اور فلسفی کا پتھر",
                    "language": "PK",
                    "type": null
                },
                {
                    "name": "O Chári Póter kai i Filosofikí Líthos",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Hari Poter i Kamenot na mudrosta",
                    "language": "MK",
                    "type": null
                },
                {
                    "name": "Harri Potter i filosofsʹkyy kaminʹ",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Harry Potter y la piedra filosofal",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "Harry Potter à l'école des sorciers",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "哈利·波特1：哈利·波特与魔法石",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "哈利波特1与魔法石",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "哈利波特1：神秘的魔法石",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Harijs Poters un filozofu akmens",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "哈利波特与魔法石",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Harry Potter e a pedra filosofal",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "哈利波特1：魔法石",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "해리 포터와 마법사의 돌",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Harry Potter e a Pedra Filosofal",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "해리포터와 마법사의 돌",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Harry Potter en de Steen der Wijzen",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Harry Potter I: Harry Potter and the Philosopher's Stone",
                    "language": "US",
                    "type": "Alternative Title"
                },
                {
                    "name": "Harry Potter und der Stein der Weisen",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "ハリー・ポッターと賢者の石",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ハリーポッターと賢者の石",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Harry Potter (1) à l'école des sorciers",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "הרי פותר ואבן החכמים",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "ארי פוטר 1: אבן החכמים (2001)",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "ハリー・ポッターと賢者の石：2001",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Harry Potter dhe Guri Filozofal",
                    "language": "AL",
                    "type": null
                },
                {
                    "name": "Harry Potter 1 - und der Stein der Weisen (2001)",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Harry Potter and the Philosopher's Stone",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Harry Potter ja tarkade kivi",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "哈利·波特与魔法石",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Harry Potter 1 - A l'école des Sorciers",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Harry Potter 1: Harry Potter and the Philosopher's Stone",
                    "language": "US",
                    "type": "series title"
                }
            ],
            "ratingMpaa": "pg",
            "shortDescription": "Гарри поступает в школу магии Хогвартс и заводит друзей. Первая часть большой франшизы о маленьком волшебнике",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017e127a46aa2122ff48cb306de98b/orig"
            },
            "top10": null,
            "top250": 65,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 9.076,
                "imdb": 8.6,
                "filmCritics": 6.8,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 975254,
                "imdb": 1396795,
                "filmCritics": 136,
                "russianFilmCritics": 1,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg"
            },
            "movieLength": 189,
            "id": 435,
            "type": "movie",
            "name": "Зеленая миля",
            "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
            "year": 1999,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Green Mile",
            "enName": null,
            "names": [
                {
                    "name": "Зеленая миля"
                },
                {
                    "name": "The Green Mile"
                },
                {
                    "name": "Roheline miil",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Stephen King's The Green Mile",
                    "language": "US",
                    "type": "complete title"
                },
                {
                    "name": "Gurîn Mairu",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "To prasino mili",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "un milagro inesperado: la milla verde",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "綠里奇蹟",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Зелена миља",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Yeşil Yol",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Zielona mila",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "グリーンマイル：1999",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "La milla verde",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "Yaşıl Yol",
                    "language": "AZ",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/239697/2a0000016f12f1eb8870b609ee94313774b2/orig"
            },
            "top10": null,
            "top250": 1,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.665,
                "imdb": 8.8,
                "filmCritics": 8.2,
                "russianFilmCritics": 80.9524,
                "await": null
            },
            "votes": {
                "kp": 971732,
                "imdb": 2530390,
                "filmCritics": 372,
                "russianFilmCritics": 21,
                "await": 42543
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
            },
            "movieLength": 148,
            "id": 447301,
            "type": "movie",
            "name": "Начало",
            "description": "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. \n\nИ вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением. \n\nНо никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
            "year": 2010,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "детектив"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Inception",
            "enName": null,
            "names": [
                {
                    "name": "Начало"
                },
                {
                    "name": "Inception"
                },
                {
                    "name": "El Origen",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "인셉션",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "El origen",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "A Origem",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Başlangıç",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "潛行凶間",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "盗梦空间",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Eredet",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Pirmsākums",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "จิตพิฆาตโลก",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "全面啟動",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "奠基",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "心灵犯案",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "记忆迷阵",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "记忆魔方",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "インセプション：2010",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Kẻ Trộm Giấc Mơ",
                    "language": "VN",
                    "type": null
                }
            ],
            "shortDescription": "Профессиональные воры внедряются в сон наследника огромной империи. Фантастический боевик Кристофера Нолана",
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/200035/2a00000178c5fc5e63481655114331b766a3/orig"
            },
            "top10": null,
            "top250": 21,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.709,
                "imdb": 8.5,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 967206,
                "imdb": 14716,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/k9r86oHFo06ZC21zw2FkRD9wcJX.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/k9r86oHFo06ZC21zw2FkRD9wcJX.jpg"
            },
            "movieLength": 95,
            "id": 42782,
            "type": "movie",
            "name": "Операция «Ы» и другие приключения Шурика",
            "description": "Студент Шурик попадает в самые невероятные ситуации: сражается с хулиганом Верзилой, весьма оригинальным способом готовится к экзамену и предотвращает «ограбление века», на которое идёт троица бандитов — Балбес, Трус и Бывалый.",
            "year": 1965,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/ccd69a69-7405-4b41-89a8-60dd6dc2a3ee/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/ccd69a69-7405-4b41-89a8-60dd6dc2a3ee/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "мелодрама"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Операция «Ы» и другие приключения Шурика"
                },
                {
                    "name": "Operation 'Y' & Other Shurik's Adventures",
                    "language": "US",
                    "type": "Imdb"
                },
                {
                    "name": "L'Opération « Y » et autres aventures de Chourik",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "«I» operatsiyasi va Shurikning boshqa sarguzashtlari",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Operacja, czyli przygody Szurika",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Operatsiya 'Y' i drugie priklyucheniya Shurika",
                    "language": "PL",
                    "type": null
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Похождения хронически оптимистичного очкарика. Блистательная комедия Леонида Гайдая",
            "ticketsOnSale": false,
            "ageRating": 6,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000017332fcfc4b1e6bfe848bcfd44dfe/orig"
            },
            "top10": null,
            "top250": 43,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.376,
                "imdb": 8.1,
                "filmCritics": 7.1,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 962754,
                "imdb": 1202012,
                "filmCritics": 220,
                "russianFilmCritics": 2,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg"
            },
            "movieLength": 143,
            "id": 4374,
            "type": "movie",
            "name": "Пираты Карибского моря: Проклятие Черной жемчужины",
            "description": "Жизнь харизматичного авантюриста, капитана Джека Воробья, полная увлекательных приключений, резко меняется, когда его заклятый враг капитан Барбосса похищает корабль Джека Черную Жемчужину, а затем нападает на Порт Ройал и крадет прекрасную дочь губернатора Элизабет Свонн.\n\nДруг детства Элизабет Уилл Тернер вместе с Джеком возглавляет спасательную экспедицию на самом быстром корабле Британии, чтобы вызволить девушку и заодно отобрать у злодея Черную Жемчужину. Вслед за этой парочкой отправляется амбициозный коммодор Норрингтон, который к тому же числится женихом Элизабет.\n\nОднако Уилл не знает, что над Барбоссой висит вечное проклятие, при лунном свете превращающее его с командой в живых скелетов. Проклятье будет снято лишь тогда, когда украденное золото Ацтеков будет возвращено пиратами на старое место.",
            "year": 2003,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/d7e3dbd6-e4a9-4485-b751-d02f49825166/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/d7e3dbd6-e4a9-4485-b751-d02f49825166/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "enName": null,
            "names": [
                {
                    "name": "Пираты Карибского моря: Проклятие Черной жемчужины"
                },
                {
                    "name": "Pirates of the Caribbean: The Curse of the Black Pearl"
                },
                {
                    "name": "La maldición del Perla Negra",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "Pirates des Caraïbes 1",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Sjóræningjar á Karíbahafi: Bölvun svörtu perlunnar",
                    "language": "IS",
                    "type": null
                },
                {
                    "name": "加勒比海盗：黑珍珠号的诅咒",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Pirati sa Kariba: prokletstvo Crnog bisera",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "캐리비안의 해적-블랙 펄의 저주",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Pirates des Caraïbes : La Malédiction de la Perle noire",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "Pirati dei Caraibi - La maledizione della prima luna",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe La Maldición del Perla Negra",
                    "language": "SV",
                    "type": null
                },
                {
                    "name": "Shodeday Ha-Caribim: Klalat Ha-Pnina Ha-Sh'hora",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Pirates Of The Caribbean ‐ The Curse of the Black Pearl",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe: La maldición del Perla Negra",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Piraty Karibskogo morya: Proklyatiye Chornoy zhemchuzhiny",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean deel 1",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean - Fluch der Karibik",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean 1 - The Curse Of The Black Pearl",
                    "language": "BE",
                    "type": null
                },
                {
                    "name": "Karibski pirati: Proklyatieto na Chernata perla",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Piraty Karybsʹkoho morya: Proklyattya Chornoyi perlyny",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Oi Peiratés tis Karaïvikís: I Katára tou Mávrou Margaritarioú",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe: La maldición de la Perla Negra",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe - La maldición del Perla Negra",
                    "language": "CO",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean ։ The Curse of the Black Pearl",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Fluch der Karibik - The Curse of the Black Pearl",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Der Fluch der Karibik",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Piratas Del Caribe 1 La maldicion de la perla negra",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Fluch der Karibik: Der Fluch der Black Pearl",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Pirates Of The Caribbean 1 ‐ The Curse of the Black Pearl",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Pirates des Caraïbes 1 - La Malédiction du Black Pearl",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Pirati dei caraibi -  La maledizione della prima luna (2003)",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Piraci z Karaibów: Klątwa Czarnej Perły",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "加勒比海盜：魔盜王決戰鬼盗船",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "加勒比海盗1：魔盗王决战鬼盗船",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Cướp Biển Vùng Caribe: Lời Nguyền Của Tàu Ngọc Trai Đen",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Pirates Of The Caribbean：The Curse Of The Black Pearl",
                    "language": "US",
                    "type": "Full Title with Alt Char  '：' for windows file names"
                },
                {
                    "name": "Pirates of the Caribbean 1: The Curse of the Black Pearl",
                    "language": "US",
                    "type": "series title"
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Пират нападает на армию мертвецов, чтобы вернуть свой корабль. Начало приключений Джека Воробья",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/236744/2a0000017a3448f7a52257d6b256bfc339e3/orig"
            },
            "top10": null,
            "top250": 73,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 45146,
            "type": "movie",
            "name": "Любовь и голуби",
            "rating": {
                "kp": 8.289,
                "imdb": 7.9,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Ликвидируя неисправность лебедки, Василий Кузякин получил травму и путевку на юг. Там он встретил роковую женщину Раису Захаровну и… вернулся Вася с курорта не к себе в деревню, а в дом Раисы Захаровны. Началась для него новая жизнь, в которой было много непонятного и интересного, но не было дома, где остались Надя, дети и голуби.",
            "votes": {
                "kp": 961130,
                "imdb": 5524,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "year": 1984,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/4c36aebf-9fb1-47cf-b1d5-90e916d0314b/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/4c36aebf-9fb1-47cf-b1d5-90e916d0314b/x1000"
            },
            "genres": [
                {
                    "name": "мелодрама"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Любовь и голуби"
                },
                {
                    "name": "Lyubov i golubi",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Love and Doves",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Любов і голуби",
                    "language": "UA",
                    "type": null
                }
            ],
            "movieLength": 107,
            "ratingMpaa": "pg13",
            "shortDescription": "Вася пытается заслужить прощения у семьи. Мощнейший актерский состав под руководством Владимира Меньшова",
            "ticketsOnSale": false,
            "ageRating": 12,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/yZIjfRdBOjOXK6X46IuvmGn7zJE.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/yZIjfRdBOjOXK6X46IuvmGn7zJE.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a000001720d95c11088788d9e2be6562e66/orig"
            },
            "top10": null,
            "top250": 162,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.634,
                "imdb": 8.7,
                "filmCritics": 7.1,
                "russianFilmCritics": 80.6452,
                "await": null
            },
            "votes": {
                "kp": 954231,
                "imdb": 2071541,
                "filmCritics": 379,
                "russianFilmCritics": 31,
                "await": 78045
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg"
            },
            "movieLength": 169,
            "id": 258687,
            "type": "movie",
            "name": "Интерстеллар",
            "description": "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",
            "year": 2014,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/430042eb-ee69-4818-aed0-a312400a26bf/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/430042eb-ee69-4818-aed0-a312400a26bf/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Канада"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Interstellar",
            "enName": null,
            "names": [
                {
                    "name": "Интерстеллар"
                },
                {
                    "name": "Interstellar"
                },
                {
                    "name": "星际穿越",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Xing Ji Chuan Yue",
                    "language": "CN",
                    "type": "romanization"
                },
                {
                    "name": "Bein kokhavim",
                    "language": "IL",
                    "type": "romanization"
                },
                {
                    "name": "ইন্টারস্টেলার",
                    "language": "BD",
                    "type": "Bengali"
                },
                {
                    "name": "星際啟示錄",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Interestelar",
                    "language": "BR",
                    "type": "Modern title"
                },
                {
                    "name": "Starp zvaigznēm",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Csillagok Között",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "インターステラー",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ინტერსტელარი",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "インターステラー：2014",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Hố Đen Tử Thần",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Ulduzlararası",
                    "language": "AZ",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Фантастический эпос про задыхающуюся Землю, космические полеты и парадоксы времени. «Оскар» за спецэффекты",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016fae962c6bf6cc87fd2098ed9035/orig"
            },
            "top10": null,
            "top250": 5,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 397667,
            "type": "movie",
            "name": "Остров проклятых",
            "rating": {
                "kp": 8.526,
                "imdb": 8.2,
                "filmCritics": 6.7,
                "russianFilmCritics": 85.7143,
                "await": null
            },
            "description": "Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.",
            "votes": {
                "kp": 949514,
                "imdb": 1442440,
                "filmCritics": 266,
                "russianFilmCritics": 7,
                "await": 22947
            },
            "year": 2009,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/617303b7-cfa7-4273-bd1d-63974bf68927/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/617303b7-cfa7-4273-bd1d-63974bf68927/x1000"
            },
            "genres": [
                {
                    "name": "триллер"
                },
                {
                    "name": "детектив"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Shutter Island",
            "enName": null,
            "names": [
                {
                    "name": "Остров проклятых"
                },
                {
                    "name": "Shutter Island"
                },
                {
                    "name": "Ashecliffe",
                    "language": "US",
                    "type": "Working Title"
                },
                {
                    "name": "Ilha do Medo",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Zindan Adası",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Đảo Kinh Hoàng",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Suletud saar",
                    "language": "EE",
                    "type": null
                }
            ],
            "shortDescription": "Двое приставов расследуют побег пациентки из мрачной психбольницы. Параноидальный триллер с Леонардо ДиКаприо",
            "movieLength": 138,
            "ratingMpaa": "r",
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/ecvy2kMxsJ60ej52beZ0F8EOGkL.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/ecvy2kMxsJ60ej52beZ0F8EOGkL.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016eadd14d677a2285a8ffa7e27974/orig"
            },
            "top10": null,
            "top250": 16,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.965,
                "imdb": 9.1,
                "filmCritics": 0,
                "russianFilmCritics": 87.5,
                "await": null
            },
            "votes": {
                "kp": 904388,
                "imdb": 595635,
                "filmCritics": 0,
                "russianFilmCritics": 8,
                "await": 2
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg"
            },
            "id": 685246,
            "type": "animated-series",
            "name": "Рик и Морти",
            "description": "В центре сюжета - школьник по имени Морти и его дедушка Рик. Морти - самый обычный мальчик, который ничем не отличается от своих сверстников. А вот его дедуля занимается необычными научными исследованиями и зачастую полностью неадекватен. Он может в любое время дня и ночи схватить внука и отправиться вместе с ним в безумные приключения с помощью построенной из разного хлама летающей тарелки, которая способна перемещаться сквозь межпространственный тоннель. Каждый раз эта парочка оказывается в самых неожиданных местах и самых нелепых ситуациях.",
            "year": 2013,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/9a7203bd-7f9d-4f45-bc39-cdf7d4156332/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/9a7203bd-7f9d-4f45-bc39-cdf7d4156332/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "фантастика"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 5,
            "alternativeName": "Rick and Morty",
            "enName": "Rick and Morty",
            "names": [
                {
                    "name": "Рик и Морти"
                },
                {
                    "name": "Rick and Morty"
                },
                {
                    "name": "瑞克和莫蒂",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "瑞克与莫蒂",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Rick e Morty",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "릭 앤 모티",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Рік і Морті",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "The Vindicators",
                    "language": "US",
                    "type": "webisodes"
                },
                {
                    "name": "Vindicators 2",
                    "language": "US",
                    "type": "webisodes"
                },
                {
                    "name": "Rick and Morty: The Non-Canonical Adventures",
                    "language": "US",
                    "type": "specials"
                },
                {
                    "name": "Bushworld Adventures",
                    "language": "US",
                    "type": "special"
                },
                {
                    "name": "Rick and Morty in the Eternal Nightmare Machine",
                    "language": "US",
                    "type": "special"
                },
                {
                    "name": "Samurai and Shogun",
                    "language": "US",
                    "type": "specials"
                },
                {
                    "name": "Rick and Morty vs. Genocider",
                    "language": "US",
                    "type": "special"
                },
                {
                    "name": "Summer Meets God (Rick Meets Evil)",
                    "language": "US",
                    "type": "special"
                },
                {
                    "name": "The Great Yokai Battle of Akihabara",
                    "language": "US",
                    "type": "special"
                },
                {
                    "name": "Summer's Sleepover",
                    "language": "US",
                    "type": "special"
                },
                {
                    "name": "リック・アンド・モーティ",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Рик Морти хоёр",
                    "language": "MN",
                    "type": null
                }
            ],
            "movieLength": null,
            "shortDescription": "Гениальный ученый втягивает внука в безумные авантюры. Выдающийся анимационный сериал Дэна Хармона",
            "ratingMpaa": null,
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000017e4094aa8e5de73d2e865255c24d/orig"
            },
            "releaseYears": [
                {
                    "start": 2013,
                    "end": null
                }
            ],
            "top10": null,
            "top250": 29,
            "isSeries": true,
            "seriesLength": 23,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.921,
                "imdb": 8.8,
                "filmCritics": 7.9,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 895333,
                "imdb": 2238847,
                "filmCritics": 157,
                "russianFilmCritics": 1,
                "await": 6
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/qdIMHd4sEfJSckfVJfKQvisL02a.jpg"
            },
            "movieLength": 142,
            "id": 448,
            "type": "movie",
            "name": "Форрест Гамп",
            "description": "Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни.\n\nС самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.",
            "year": 1994,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/3560b757-9b95-45ec-af8c-623972370f9d/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/3560b757-9b95-45ec-af8c-623972370f9d/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "мелодрама"
                },
                {
                    "name": "история"
                },
                {
                    "name": "военный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Forrest Gump",
            "enName": null,
            "names": [
                {
                    "name": "Форрест Гамп"
                },
                {
                    "name": "Forrest Gump"
                },
                {
                    "name": "Forrest Qamp",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "フォレスト・ガンプ　一期一会",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "फॉरेस्ट गंप",
                    "language": "IN",
                    "type": "Hindi title"
                },
                {
                    "name": "Форест Гамп",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Forest Gump",
                    "language": "US",
                    "type": "misspelling"
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Полувековая история США глазами чудака из Алабамы. Абсолютная классика Роберта Земекиса с Томом Хэнксом",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/200035/2a00000170ed554ce17a2db2b2cfdc134a6c/orig"
            },
            "top10": null,
            "top250": 4,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 6.929,
                "imdb": 6.6,
                "filmCritics": 4.5,
                "russianFilmCritics": 41.1765,
                "await": null
            },
            "votes": {
                "kp": 889762,
                "imdb": 533572,
                "filmCritics": 365,
                "russianFilmCritics": 17,
                "await": 59972
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg"
            },
            "movieLength": 112,
            "id": 463634,
            "type": "movie",
            "name": "Веном",
            "description": "Что, если в один прекрасный день в тебя вселится симбиот, который наделит тебя сверхчеловеческими способностями? Вот только Веном — симбиот совсем недобрый, и договориться с ним невозможно. А нужно ли договариваться? Ведь в какой-то момент ты понимаешь, что быть плохим вовсе не так уж и плохо, так даже веселее. А в мире и так слишком много супергероев.",
            "year": 2018,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/16b82307-bdcc-4b9b-a427-55a07771c33a/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/16b82307-bdcc-4b9b-a427-55a07771c33a/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "ужасы"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Китай"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Venom",
            "enName": null,
            "names": [
                {
                    "name": "Веном"
                },
                {
                    "name": "Venom"
                },
                {
                    "name": "베놈",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Venom: Zehirli Öfke",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "毒液",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "فينوم",
                    "language": "SY",
                    "type": null
                },
                {
                    "name": "سم",
                    "language": "SA",
                    "type": null
                },
                {
                    "name": "毒魔",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "猛毒",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "毒液：致命守护者",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Venom 2018",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ヴェノム：2018",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Venom 1",
                    "language": "US",
                    "type": "Series Titel"
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "pg13",
            "shortDescription": "В настырного журналиста вселяется симбиот. Том Харди в образе обаятельного суперзлодея из комиксов Marvel",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016ff9c596afa217a90031b3ed8750/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.098,
                "imdb": 6.7,
                "filmCritics": 0,
                "russianFilmCritics": 55.5556,
                "await": null
            },
            "votes": {
                "kp": 866040,
                "imdb": 5350,
                "filmCritics": 0,
                "russianFilmCritics": 9,
                "await": 4072
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/qkurjJVQUs4u417GfiMAKlurkcM.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/qkurjJVQUs4u417GfiMAKlurkcM.jpg"
            },
            "movieLength": 109,
            "id": 1183582,
            "type": "movie",
            "name": "Холоп",
            "description": "27-летний московский мажор Григорий ошалел от безнаказанности. Богатый папа стабильно его отмазывает, да так, что уже обновил автопарк и оборудование отделению полиции, где служит начальником его друг. После очередной выходки терпение отца иссякает, и он обращается к психологу, практикующему шоковые методы воздействия на пациентов.\n\nВскоре сынуля попадает в аварию и приходит в себя на деревенской конюшне. На дворе — Россия 1860 года, а сам он — бесправный конюх Гришка, которому за любую провинность и ослушание всегда готовы всыпать плетей, а то и вздёрнуть на глазах у всего честного народа.",
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1777765/ea280ff7-1989-44e4-97a8-e2598aa951a4/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1777765/ea280ff7-1989-44e4-97a8-e2598aa951a4/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "мелодрама"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Холоп"
                },
                {
                    "name": "Holop",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Kholop",
                    "language": "RU",
                    "type": "Translit"
                },
                {
                    "name": "Sedlák",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Serf",
                    "language": "US",
                    "type": "Alternative Title"
                },
                {
                    "name": "Der Knecht - Einmal Mittelalter und zurück",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Son of a Rich",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Слуга",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Atrapado en el pasado. Se acabó la buena vida",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Atrapado en el pasado. Se acabó la buena vida",
                    "language": "MX",
                    "type": null
                }
            ],
            "ageRating": 18,
            "ratingMpaa": null,
            "shortDescription": "Мажор просыпается в деревне XIX века. Комедия с Милошем Биковичем, которая стала рекордсменом проката",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f14b07b9a20f18388424dfcab0/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.386,
                "imdb": 7.9,
                "filmCritics": 8.1,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 849394,
                "imdb": 1272214,
                "filmCritics": 255,
                "russianFilmCritics": 0,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg"
            },
            "movieLength": 194,
            "id": 2213,
            "type": "movie",
            "name": "Титаник",
            "description": "В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.",
            "year": 1997,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/96d93e3a-fdbf-4b6f-b02d-2fc9c2648a18/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/96d93e3a-fdbf-4b6f-b02d-2fc9c2648a18/x1000"
            },
            "genres": [
                {
                    "name": "мелодрама"
                },
                {
                    "name": "история"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Мексика"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Titanic",
            "enName": null,
            "names": [
                {
                    "name": "Титаник"
                },
                {
                    "name": "Titanic"
                },
                {
                    "name": "The Ship of Dreams",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "טיטאניק",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Titanic 3D",
                    "language": "US",
                    "type": "3D version"
                },
                {
                    "name": "泰坦尼克号",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Titanikas",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "타이타닉",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Titanic: 25 výročí",
                    "language": "CZ",
                    "type": "2023 re-release"
                },
                {
                    "name": "Titāniks",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Titanic 25th Anniversary",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Titanic 25º aniversario",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "タイタニック：ジェームズ・キャメロン25周年3Dリマスター",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "鐵達尼號：25週年紀念",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "טיטניק: 25 שנה - תלת מימד",
                    "language": "IL",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Запретная любовь на фоне гибели легендарного лайнера. Великий фильм-катастрофа — в отреставрированной версии",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a000001729e8bc06ab8fbd24ff28cf4e297/orig"
            },
            "top10": null,
            "top250": 83,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.076,
                "imdb": 8.4,
                "filmCritics": 7.6,
                "russianFilmCritics": 86.3636,
                "await": null
            },
            "votes": {
                "kp": 840676,
                "imdb": 1191469,
                "filmCritics": 493,
                "russianFilmCritics": 22,
                "await": 77938
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"
            },
            "movieLength": 149,
            "id": 843649,
            "type": "movie",
            "name": "Мстители: Война бесконечности",
            "description": "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности - артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту – судьба Земли никогда ещё не была столь неопределённой.",
            "year": 2018,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Avengers: Infinity War",
            "enName": null,
            "names": [
                {
                    "name": "Мстители: Война бесконечности"
                },
                {
                    "name": "Avengers: Infinity War"
                },
                {
                    "name": "Avengers: Infinity War. Part I",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Kersytojai: Begalybes Karas. I dalis",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Bosszúállók: Végtelen háború - I. rész",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Мстители: Война бесконечности. Часть 1",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "נוקמים 3: מלחמת האין סוף",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Yenilmezler: Sonsuzluk Savaşı. Bölüm 1",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Marvel's The Avengers 3: Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "The Avengers 3: Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Vengadores: La Guerra del Infinito",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Qasoskorlar 3: Adabiyat jangi",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Qasoskorlar: Cheksizlik urushi",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Avengers: Abadiyat jangi",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Qasoskorlar: Cheksizlik jangi",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Avengers - Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Marvel Studios' Avengers: Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "អ្នកចំបាំងអាវេនជឺ : សង្គ្រាមគ្មានដែនបញ្ចប់",
                    "language": "KH",
                    "type": null
                },
                {
                    "name": "Vengadores : Guerra del infinito",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Avengers  Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "마블 어벤져스: 인피니티 워",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Avengers 3 - Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Avengers: Lufta e pafundësisë",
                    "language": "AL",
                    "type": null
                },
                {
                    "name": "The Avengers 3 - Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Vengadores 3 Infinity War",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Avengers：Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Os Vingadores 3 - Guerra Infinita",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "復仇者聯盟3：無限之戰",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "復仇者聯盟3：無限之戰",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Avengers: Cuộc Chiến Vô Cực",
                    "language": "VN",
                    "type": "Halfsub"
                },
                {
                    "name": "Biệt Đội Báo Thù: Cuộc Chiến Vô Cực",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "어벤져스 인피니티 워",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "어벤져스 3",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Avengers 3 - Infinity War",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Avengers: Wojna bez granic",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Avengers III: Infinity War",
                    "language": "US",
                    "type": "Alternative title"
                },
                {
                    "name": "复仇者联盟3：无限战争",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Marvel Film 19 - Avengers Infinity War",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Avengers 3: Cuộc Chiến Vô Cực",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Tasujad: Igaviku sõda",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Vingadores: Guerra do Infinito",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Răzbunătorii: Războiul infinitului",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Осветници: Рат бескраја",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Maščevalci: Brezmejna vojna",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "Avengers: Nekonečná vojna",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Qasoskorlar: Abadiyat jangi",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Vengadores: Infinity War",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Vengadores: La guerra del infinito",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Atriebēji: Bezgalības karš",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Εκδικητές: Ο πόλεμος της αιωνιότητας",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Osvetnici: Rat beskonačnosti",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Отмъстителите: Война без край",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Vingadores: Guerra Infinita",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Avengers: Infinity War Part I",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "נוקמים 3: מלחמת האין-סוף",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Avengers 3: Infinity War",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Avengers 3",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Avengers Infinity War",
                    "language": "US",
                    "type": "title without :"
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "pg13",
            "shortDescription": "Титан Танос вынашивает страшный план — угрозу всей Вселенной. Предпоследний фильм о суперкоманде Marvel",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000178c586374cd541732e2109769c2d/orig"
            },
            "top10": null,
            "top250": 164,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 839954,
            "type": "movie",
            "name": "Легенда",
            "rating": {
                "kp": 7.21,
                "imdb": 6.9,
                "filmCritics": 5.9,
                "russianFilmCritics": 76.9231,
                "await": null
            },
            "description": "Близнецы Реджи и Ронни Крэй — культовые фигуры преступного мира Великобритании 1960-х. Братья возглавляли самую влиятельную бандитскую группировку Ист-Энда. В их послужном списке были вооруженные грабежи, рэкет, поджоги, покушения, убийства и собственный ночной клуб, куда доезжали даже голливудские знаменитости. Среди их жертв — криминальные авторитеты Джек МакВитти и Джордж Корнелл.",
            "votes": {
                "kp": 829214,
                "imdb": 200777,
                "filmCritics": 173,
                "russianFilmCritics": 13,
                "await": 16064
            },
            "year": 2015,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/55db3c5f-837f-478e-b2ba-67872bf7b57c/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/55db3c5f-837f-478e-b2ba-67872bf7b57c/x1000"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Франция"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Legend",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/xPq3LDgamUT1aKLTeGJk9ccwfwr.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/xPq3LDgamUT1aKLTeGJk9ccwfwr.jpg"
            },
            "enName": null,
            "movieLength": 131,
            "names": [
                {
                    "name": "Легенда"
                },
                {
                    "name": "Legend"
                },
                {
                    "name": "黑道传奇",
                    "language": "CN",
                    "type": "传记"
                },
                {
                    "name": "金牌黑帮",
                    "language": "CN",
                    "type": "台译"
                },
                {
                    "name": "Легенда [Legend]",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Lendas do Crime",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Legend - Legenden der Unterwelt",
                    "language": "DE",
                    "type": null
                }
            ],
            "status": null,
            "ageRating": 18,
            "ratingMpaa": "r",
            "shortDescription": "Гангстеры-близнецы завоевывают Лондон 1960-х. Драма о знаменитых преступниках с двойной ролью Тома Харди",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000016ef58845361034a2fa24360fdc21/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4647040,
            "alternativeName": null,
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "description": "Горшок, Князь и Шут — герои панк-сказки, в которой студенты реставрационного училища стали одной из главных рок-групп страны, собрали «Юбилейный», покорили Москву, выступили как хедлайнеры на фестивале «Нашествие» и создали целую фэнтези-вселенную. Группа вошла в историю, а тексты их песен ожили в мире-фантазии, где Горшок и Князь отправляются спасать принцессу из плена колдуна.",
            "enName": "Korol i Shut",
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "фэнтези"
                }
            ],
            "movieLength": null,
            "name": "Король и Шут",
            "names": [
                {
                    "name": "Король и Шут"
                },
                {
                    "name": "Korol i Shut",
                    "language": "US",
                    "type": null
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/1485ac9a-7796-470b-a3eb-85dc725d4ec0/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/1485ac9a-7796-470b-a3eb-85dc725d4ec0/x1000"
            },
            "rating": {
                "kp": 8.174,
                "imdb": 7,
                "filmCritics": 0,
                "russianFilmCritics": 100,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Они создали свой сказочный мир — и обрели бессмертие. Самый популярный сериал на Кинопоиске в 2023 году",
            "status": "completed",
            "ticketsOnSale": false,
            "type": "tv-series",
            "typeNumber": 2,
            "votes": {
                "kp": 821066,
                "imdb": 938,
                "filmCritics": 0,
                "russianFilmCritics": 7,
                "await": 101930
            },
            "year": 2023,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/p0utVAZHGaqwNoEwsMJTdLapZkX.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/p0utVAZHGaqwNoEwsMJTdLapZkX.jpg"
            },
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/tR6H20V6UUtj40mVXaDNPTg7Pw8.png"
            },
            "releaseYears": [
                {
                    "start": 2023,
                    "end": 2023
                }
            ],
            "top10": null,
            "top250": 180,
            "isSeries": true,
            "seriesLength": 50,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.17,
                "imdb": 7.9,
                "filmCritics": 7.8,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 817943,
                "imdb": 728764,
                "filmCritics": 211,
                "russianFilmCritics": 2,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/sRvXNDItGlWCqtO3j6wks52FmbD.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/sRvXNDItGlWCqtO3j6wks52FmbD.jpg"
            },
            "movieLength": 90,
            "id": 430,
            "type": "cartoon",
            "name": "Шрэк",
            "description": "Жил да был в сказочном государстве большой зеленый великан по имени Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка &#151; лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шрэково болото всех сказочных обитателей.\nИ беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад пообещал вернуть Шрэку болото, если великан добудет ему прекрасную принцессу Фиону, которая томится в неприступной башне, охраняемой огнедышащим драконом.",
            "year": 2001,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/7ade06a8-4178-4386-9ee2-87fec5a172eb/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/7ade06a8-4178-4386-9ee2-87fec5a172eb/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "мелодрама"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "Shrek",
            "enName": null,
            "names": [
                {
                    "name": "Шрэк"
                },
                {
                    "name": "Shrek"
                },
                {
                    "name": "Шрэк 1",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Sreka",
                    "language": "IN",
                    "type": null
                },
                {
                    "name": "Šrek",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "슈렉 1",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Srek",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Схрек",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "怪物史瑞克",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "怪物史瑞克1",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "シェレック",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Gã Chằn Tinh Tốt Bụng",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "怪物史莱克",
                    "language": "CN",
                    "type": null
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "pg",
            "shortDescription": "Огр-мизантроп спасает принцессу, чтобы вернуть свое болото. Революционная анимация о том, что красота — внутри",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a000001706322b7aab311a80769a58e93d4/orig"
            },
            "top10": null,
            "top250": 11,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 5079093,
            "name": "Монастырь",
            "alternativeName": null,
            "names": [
                {
                    "name": "Монастырь"
                }
            ],
            "type": "tv-series",
            "typeNumber": 2,
            "description": "Мария — обаятельная тусовщица, которая живёт за чужой счёт. Однажды в Эмиратах она едет в ночной клуб вместе с женой миллиардера, вечеринка выходит из-под контроля, и теперь Марии грозит тюрьма, её преследуют опасные люди, а счета оказываются заблокированы. Приходится бежать в Россию, но и дома она не в безопасности — и девушка укрывается в стенах монастыря.",
            "shortDescription": "Московская оторва попадает в монастырь. Завораживающая трансформация Насти Ивлеевой в руках Филиппа Янковского",
            "rating": {
                "kp": 7.392,
                "imdb": 0,
                "filmCritics": 0,
                "russianFilmCritics": 78.5714,
                "await": null
            },
            "votes": {
                "kp": 805654,
                "imdb": 0,
                "filmCritics": 0,
                "russianFilmCritics": 14,
                "await": 21659
            },
            "movieLength": null,
            "ratingMpaa": null,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/ce90ef63-3c81-4aa7-95f0-f5bbe5123484/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/ce90ef63-3c81-4aa7-95f0-f5bbe5123484/x1000"
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018562fec9359acf3ea1bb8039c19c/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018562fec9359acf3ea1bb8039c19c/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "releaseYears": [
                {
                    "start": 2022,
                    "end": 2022
                }
            ],
            "top10": null,
            "top250": null,
            "status": "completed",
            "year": 2022,
            "ageRating": 18,
            "ticketsOnSale": false,
            "isSeries": true,
            "seriesLength": 50,
            "totalSeriesLength": null
        },
        {
            "id": 927898,
            "type": "movie",
            "name": "Переводчик",
            "rating": {
                "kp": 7.881,
                "imdb": 7.5,
                "filmCritics": 6.8,
                "russianFilmCritics": 86.6667,
                "await": null
            },
            "description": "Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются только сам Джон, получивший ранение, и местный переводчик Ахмед, который сотрудничает с американцами. Очнувшись на родине, Кинли не помнит, как ему удалось выжить, но понимает, что именно Ахмед спас ему жизнь, протащив на себе через опасную территорию. Теперь чувство вины не даёт Джону покоя, и он решает вернуться за Ахмедом и его семьёй, которых в Афганистане усиленно ищут талибы.",
            "votes": {
                "kp": 804590,
                "imdb": 156640,
                "filmCritics": 119,
                "russianFilmCritics": 15,
                "await": 13962
            },
            "year": 2022,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/5c775217-8796-4c7a-aba8-e4c6d48a6c36/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/5c775217-8796-4c7a-aba8-e4c6d48a6c36/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "военный"
                },
                {
                    "name": "история"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Испания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Covenant",
            "enName": null,
            "movieLength": 123,
            "names": [
                {
                    "name": "Переводчик"
                },
                {
                    "name": "The Covenant"
                },
                {
                    "name": "Guy Ritchie's The Covenant",
                    "language": null,
                    "type": null
                },
                {
                    "name": "Interpreters Wanted",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "The Interpreter",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "เดอะ โคเวแนนท์",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "เดอะ โคเวแนนท์ โดย กาย ริชชี่",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Guy Ritchie's the Covenant",
                    "language": "US",
                    "type": "original title"
                },
                {
                    "name": "Tugev seljatagune",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "가이 리치스 더 커버넌트",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "譯戰同盟",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Guy Ritchie's the Covenant (The Covenant)",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "El pacto (The Covenant)",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Khế Ước",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Der Pakt",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Guy Richie's Der Pakt",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "絕地營救",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "پیمان گای ریچی",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Guy Ritchies The Covenant",
                    "language": "US",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Ахмед спас Джона от смерти, и теперь тот должен вернуть долг. Гай Ричи как никогда серьезен — и как всегда крут",
            "status": null,
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/eTvN54pd83TrSEOz6wbsXEJktCV.jpg"
            },
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/eczw6uwK1UqpufzcXgZYTHKGbeR.png"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 820638,
            "type": "tv-series",
            "name": "Мажор",
            "rating": {
                "kp": 8.208,
                "imdb": 7.6,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Таких, как наш главный герой Игорь Соколовский, то есть детей высокопоставленных, богатых родителей, называют мажорами. Наш герой имеет юридическое образование, но ни одного дня не проработал. Безответственный прожигатель жизни. В один из загулов ночью он вступился за приятеля, подрался с полицейскими, выбил табельное оружие у офицера... В итоге отец лишает героя всего и отправляет работать в отделение полиции - то самое, в котором служат ночные полицейские. Его, мажора, там не ждут. Его презирают. Но именно там он начнет становиться мужчиной, встретит свою любовь и найдет убийцу мамы.",
            "votes": {
                "kp": 804162,
                "imdb": 1848,
                "filmCritics": 0,
                "russianFilmCritics": 2,
                "await": 406
            },
            "year": 2014,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/e0afea1f-6e8e-4c9a-aa63-a31ebd3857d0/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/e0afea1f-6e8e-4c9a-aa63-a31ebd3857d0/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 2,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/kwwXOMhKfPIReBUUcZmxm0ZWeWP.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/kwwXOMhKfPIReBUUcZmxm0ZWeWP.jpg"
            },
            "enName": "Silver Spoon",
            "movieLength": null,
            "names": [
                {
                    "name": "Мажор"
                },
                {
                    "name": "Igor",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Igor (Mazhor)",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Burżuj",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Mazhor",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Silver Spoon",
                    "language": "US",
                    "type": null
                }
            ],
            "status": null,
            "ratingMpaa": null,
            "shortDescription": "Прожигатель жизни становится лучшим полицейским Москвы. Экшен-сага с Павлом Прилучным",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/374297/2a00000176fc5571eb16df590c77886ccab0/orig"
            },
            "releaseYears": [
                {
                    "start": 2014,
                    "end": null
                }
            ],
            "top10": null,
            "top250": null,
            "isSeries": true,
            "seriesLength": 52,
            "totalSeriesLength": null
        },
        {
            "status": "completed",
            "rating": {
                "kp": 8.714,
                "imdb": 8.5,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 798764,
                "imdb": 6165,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/1jTmzyjg4tnmzUJrKQPQmVfCcKU.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/1jTmzyjg4tnmzUJrKQPQmVfCcKU.jpg"
            },
            "id": 46483,
            "type": "animated-series",
            "name": "Ну, погоди!",
            "description": "Веселые приключения неразлучной парочки - хулигана Волка и смышленого Зайца. Любимые с детства сцены погонь, ссор и примирений, шутки и мелодии.",
            "year": 1969,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/a68f7c1a-fb83-4533-a4e2-f60485f2f440/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/a68f7c1a-fb83-4533-a4e2-f60485f2f440/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "детский"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 5,
            "alternativeName": null,
            "enName": "Well, just you wait!",
            "names": [
                {
                    "name": "Ну, погоди!"
                },
                {
                    "name": "¡Me las pagaras!",
                    "language": "CU",
                    "type": "Parte de Hispanoamérica"
                },
                {
                    "name": "Jen počkej, zajíci!",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Jen počkej...!",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Hase und Wolf",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "¡Te vas a enterar!",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "¡Deja que te coja!",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "נו פוגודי",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "נו פאגדי",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Nu, pogodi!",
                    "language": "RU",
                    "type": "transliteration"
                },
                {
                    "name": "Ну погоди!",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Ну погоди",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "No, počkaj!",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Ну, постривай!",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Well, just you wait!",
                    "language": "US",
                    "type": "literal English title"
                }
            ],
            "movieLength": null,
            "ratingMpaa": null,
            "shortDescription": "Хулиган Волк никак не может поймать доброго Зайца. Нестареющий анимационный хит студии «Союзмультфильм»",
            "ticketsOnSale": false,
            "ageRating": 0,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170a5512bd8a9cf2e1b8d82a9f0b5/orig"
            },
            "releaseYears": [
                {
                    "start": 1969,
                    "end": 2017
                }
            ],
            "top10": null,
            "top250": null,
            "isSeries": true,
            "seriesLength": 10,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.862,
                "imdb": 8.4,
                "filmCritics": 8.2,
                "russianFilmCritics": 68.75,
                "await": null
            },
            "votes": {
                "kp": 790167,
                "imdb": 1253707,
                "filmCritics": 557,
                "russianFilmCritics": 16,
                "await": 96294
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
            },
            "movieLength": 181,
            "id": 843650,
            "type": "movie",
            "name": "Мстители: Финал",
            "description": "Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план, который поможет противостоять разрушительным действиям могущественного титана Таноса. После наиболее масштабной и трагической битвы в истории они не могут допустить ошибку.",
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/ae22f153-9715-41bb-adb4-f648b3e16092/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/ae22f153-9715-41bb-adb4-f648b3e16092/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Avengers: Endgame",
            "enName": null,
            "names": [
                {
                    "name": "Мстители: Финал"
                },
                {
                    "name": "Avengers: Endgame"
                },
                {
                    "name": "Avengers: Endgame 3D",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Marvel Studios' Avengers: Endgame",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Avengers - Endgame",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Vengadores 4 EndGame",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "The Avengers 4 - Endgame",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Marvel’s The Avengers 4 - Endgame",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "复仇者联盟4",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "复联4",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Vingadores Ultimato",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Os Vingadores 4 - Ultimato",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Avengers Endgame",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "復仇者聯盟4：終局之戰",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Avengers 4: Endgame",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Avengers: Hồi Kết",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "어벤져스 4",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "어벤져스: 엔드게임",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Vengadores: Endgame",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Hakmarrësit: Loja e Fundit",
                    "language": "AL",
                    "type": null
                },
                {
                    "name": "Avengers 4: Endgame",
                    "language": "AT",
                    "type": null
                },
                {
                    "name": "Vingadores Ultimato",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Avengers: Ultimato",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Отмъстителите: Краят",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Avengers: Phase finale",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "复仇者联盟4：终局之战",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Osvetnici: Završnica",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Tasujad: Lõppmäng",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Εκδικητές: Η τελευταία πράξη",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Bosszúállók: Végjáték",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Ha'Nokmim: Sof Ha'Mis'hak",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "アベンジャーズ　エンドゲーム",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Atriebēji: Noslēgums",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Keršytojai: Pabaiga",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Avengers: Koniec gry",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Vingadores: Endgame",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Răzbunătorii: Sfârșitul jocului",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Осветници: Крај игре",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Maščevalci: zaključek",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "復仇者聯盟：終局之戰",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Месники: Завершення",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Qasoskorlar: Intiho",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "अवेंजर्स: एंडगेम",
                    "language": "IN",
                    "type": "Hindi title"
                },
                {
                    "name": "اوینجرز : اینڈگیم",
                    "language": "IN",
                    "type": "Urdu title"
                },
                {
                    "name": "Мсціўцы: Фінал",
                    "language": "BY",
                    "type": null
                },
                {
                    "name": "Одмаздници: Крај на игрите",
                    "language": "MK",
                    "type": null
                },
                {
                    "name": "Qisasçılar: Final",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "Վրիժառուները: Վերջնախաղ",
                    "language": "AM",
                    "type": null
                },
                {
                    "name": "შურისმაძიებლები: დასასრული",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "المنتقمون: نهاية اللعبة",
                    "language": "AE",
                    "type": null
                },
                {
                    "name": "انتقام‌جویان: پایان بازی",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "تۆڵەستێنەکان: کۆتایی یارییەکە",
                    "language": "TR",
                    "type": "Kurdish title"
                },
                {
                    "name": "അവെഞ്ചേഴ്സ്: എൻഡ്ഗെയിം",
                    "language": "IN",
                    "type": "Malayalam title"
                },
                {
                    "name": "הנוקמים: סוף המשחק",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Кек алушылар: Финал",
                    "language": "KZ",
                    "type": null
                },
                {
                    "name": "Ar alýanlar: soňy Oýun",
                    "language": "TM",
                    "type": null
                },
                {
                    "name": "एभेन्जर्स: इन्डगेम",
                    "language": "NP",
                    "type": null
                },
                {
                    "name": "অ্যাভেঞ্জার্স: এন্ডগেম",
                    "language": "BD",
                    "type": null
                },
                {
                    "name": "அவெஞ்சர்ஸ்: எண்ட்கேம்",
                    "language": "IN",
                    "type": "Tamil title"
                },
                {
                    "name": "ಅವೆಂಜರ್ಸ್: ಎಂಡ್ಗೇಮ್",
                    "language": "IN",
                    "type": "Kannada title"
                },
                {
                    "name": "అవెంజర్స్: ఎండ్ గేమ్",
                    "language": "IN",
                    "type": "Telugu title"
                },
                {
                    "name": "อเวนเจอร์ส: เผด็จศึก",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "შურისმაძიებლები:  ენდშპილი",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "Avengers 4 - Endgame",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Avengers IV: Endgame",
                    "language": "US",
                    "type": "Alternative title"
                },
                {
                    "name": "Marvel Film 22 - Avengers -Endgame",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Avengers 4: Hồi Kết",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Yenilmezler: Son Oyun",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Vengadores 4: Endgame",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Avengers 4",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Avengers: Infinity War Part II",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Avengers：Endgame",
                    "language": "US",
                    "type": "Full Title with Alt Char '：' for Windows filenames"
                },
                {
                    "name": "The Avengers 4: Endgame",
                    "language": "US",
                    "type": "Sequential Title"
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Железный человек, Тор и другие пытаются переиграть Таноса. Эпохальное завершение супергеройской франшизы",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f208a7a61cc08d59dec87c9876/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8,
                "imdb": 7.4,
                "filmCritics": 6.3,
                "russianFilmCritics": 75,
                "await": null
            },
            "votes": {
                "kp": 787994,
                "imdb": 609306,
                "filmCritics": 204,
                "russianFilmCritics": 8,
                "await": 19261
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/vQGo5VjJcHxpzIa8lMBFzpAth1w.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/vQGo5VjJcHxpzIa8lMBFzpAth1w.jpg"
            },
            "movieLength": 105,
            "id": 462606,
            "type": "movie",
            "name": "Области тьмы",
            "description": "Нью-йоркский писатель Эдди, желая преодолеть чёрную полосу в жизни, принимает засекреченный препарат под названием NZT. Таблетка выводит мозг парня на работу в нереальной мощности. Этот творческий наркотик меняет всю жизнь Эдди, за короткий срок он зарабатывает кучу денег, но скоро начинает страдать от зловещих побочных эффектов препарата. А когда пытается найти других NZT-гениев, чтобы понять, как можно справиться с этим пристрастием, он узнает страшную правду…",
            "year": 2011,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/d3bfd32d-41b4-48ad-9584-b3fc1f5669d4/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1629390/d3bfd32d-41b4-48ad-9584-b3fc1f5669d4/x1000"
            },
            "genres": [
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "фантастика"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Limitless",
            "enName": null,
            "names": [
                {
                    "name": "Области тьмы"
                },
                {
                    "name": "Limitless"
                },
                {
                    "name": "The Dark Fields",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Ohne Limit - Die Droge für Reichtum und Macht",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "리미트리스",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Областi темряви",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Без меж",
                    "language": "UA",
                    "type": null
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "pg13",
            "shortDescription": "Чудодейственные таблетки выводят писателя из кризиса. Триллер о том, что сверхсила не обходится без побочек",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e4af6c2eb6d8d847857255fe628/orig"
            },
            "top10": null,
            "top250": 247,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 5304403,
            "name": "Слово пацана. Кровь на асфальте",
            "alternativeName": null,
            "names": [
                {
                    "name": "Слово пацана",
                    "language": "RU",
                    "type": "Russian title on kinopoisk"
                },
                {
                    "name": "Короли асфальта",
                    "language": null,
                    "type": null
                },
                {
                    "name": "Слово пацана. Кровь на асфальте",
                    "language": null,
                    "type": null
                },
                {
                    "name": "Дечачка реч. Крв на асфалту",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Boy's word. Blood on the asphalt",
                    "language": "US",
                    "type": null
                }
            ],
            "type": "tv-series",
            "typeNumber": 2,
            "year": 2023,
            "description": "Казань, начало 1989 года. Пока родители борются за выживание, подростки сбиваются в уличные банды и бьются за асфальт. Буквально, чтобы контролировать всё, что стоит на «их» земле или передвигается по ней. Среди всеобщей нищеты — чёткие правила жизни, поддержка и слово пацана, которое сильнее клятвы.\n14-летний Андрей из интеллигентной семьи, он учится в музыкальной школе и живёт с мамой и маленькой сестрёнкой. Однажды парня назначают подтянуть по английскому сверстника Марата — гопника из местной группировки. Пообщавшись с нормальным пацаном и решив, что ему надоело быть чушпаном, Андрей вступает в банду.",
            "shortDescription": null,
            "status": "completed",
            "rating": {
                "kp": 8.348,
                "imdb": 7.6,
                "filmCritics": 0,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 787511,
                "imdb": 4255,
                "filmCritics": 0,
                "russianFilmCritics": 10,
                "await": 10289
            },
            "movieLength": null,
            "ratingMpaa": null,
            "ageRating": 18,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10893610/58239d8d-44d3-475e-ab3f-878679c64290/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/58239d8d-44d3-475e-ab3f-878679c64290/x1000"
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/AqxPqTbD77ioyBDdk39MEQq6vXL.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/AqxPqTbD77ioyBDdk39MEQq6vXL.jpg"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "ticketsOnSale": false,
            "releaseYears": [
                {
                    "start": 2023,
                    "end": 2023
                }
            ],
            "top10": null,
            "top250": null,
            "isSeries": true,
            "seriesLength": 53,
            "totalSeriesLength": null,
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/8ir7V7krUm3wDOAtoR2V3Yg9yCe.png"
            },
            "enName": "Boy's word. Blood on the asphalt"
        },
        {
            "id": 44386,
            "type": "movie",
            "name": "Джентльмены удачи",
            "rating": {
                "kp": 8.547,
                "imdb": 8.3,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского.\n\nМилиция внедряет добряка Трошкина в воровскую среду - и ему ничего не остается, кроме как старательно изображать своего двойника-злодея, путая всех окружающих. Со временем он настолько блестяще входит в роль, что сам начинает порой приходить в ужас. Между тем, жизни его угрожает смертельная опасность...",
            "votes": {
                "kp": 783527,
                "imdb": 12787,
                "filmCritics": 0,
                "russianFilmCritics": 1,
                "await": 0
            },
            "year": 1971,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/218102a7-96be-4d7e-8029-815de0f37cfa/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/218102a7-96be-4d7e-8029-815de0f37cfa/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "детектив"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/be2iIuvq58JDlaVyzHCRbc3Escq.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/be2iIuvq58JDlaVyzHCRbc3Escq.jpg"
            },
            "enName": null,
            "movieLength": 84,
            "names": [
                {
                    "name": "Джентльмены удачи"
                },
                {
                    "name": "Dzhentlmeny udachi",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Hełm Aleksandra Macedońskiego",
                    "language": "PL",
                    "type": null
                }
            ],
            "status": null,
            "ratingMpaa": null,
            "shortDescription": "Воспитатель детсада внедряется в банду матерых рецидивистов. Евгений Леонов в разошедшейся на цитаты комедии",
            "ticketsOnSale": false,
            "ageRating": 6,
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/3GSK75ZsuoC95N7DVEA5jQUYgrW.png"
            },
            "top10": null,
            "top250": 23,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.65,
                "imdb": 8.9,
                "filmCritics": 9.3,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 771592,
                "imdb": 2202233,
                "filmCritics": 181,
                "russianFilmCritics": 7,
                "await": 1
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg"
            },
            "movieLength": 154,
            "id": 342,
            "type": "movie",
            "name": "Криминальное чтиво",
            "description": "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.\nВ первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй рассказывается о боксёре Бутче Кулидже, купленном Уоллесом, чтобы сдать бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
            "year": 1994,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/x1000"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Pulp Fiction",
            "enName": null,
            "names": [
                {
                    "name": "Криминальное чтиво"
                },
                {
                    "name": "Pulp Fiction"
                },
                {
                    "name": "Makulatura",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "Pulp Fiction: Historky z podsvetia",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Кримiнальне чтиво",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Pulp Fiction - Chronological Cut",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Sund",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "parup fikusyon",
                    "language": "JP",
                    "type": "Romaji"
                },
                {
                    "name": "पल्प फिक्शन",
                    "language": "IN",
                    "type": null
                },
                {
                    "name": "Евтини приказни",
                    "language": "MK",
                    "type": null
                },
                {
                    "name": "μυθοπλασία πολτού",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Sifrut Zolla",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Pulp Fiction - Tarinoita väkivallasta",
                    "language": "FI",
                    "type": null
                },
                {
                    "name": "Lubene",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Fiction pulpeuse",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "黑色追緝令",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "危險人物",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Петпарачке приче",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "펄프 픽션",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "低俗小说",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Tiempos Violentos",
                    "language": "AR",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Несколько связанных историй из жизни бандитов. Шедевр Квентина Тарантино, который изменил мировое кино",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/inuYhCBbTof4gw7f9Ized0SQQuW.png"
            },
            "top10": null,
            "top250": 10,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.048,
                "imdb": 8.1,
                "filmCritics": 8.5,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 768979,
                "imdb": 816160,
                "filmCritics": 253,
                "russianFilmCritics": 6,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg"
            },
            "movieLength": 111,
            "id": 89514,
            "type": "cartoon",
            "name": "Рататуй",
            "description": "Крыс Реми обладает уникальным вкусом. Он готов рисковать собственной жизнью, чтобы посмотреть любимое кулинарное шоу и раздобыть какую-нибудь приправку или просто свежий продукт. Реми живет со своими сородичами, которые его не понимают и не принимают его увлечения кулинарией. Когда Реми случайно попадает на кухню шикарного ресторана, он решает воспользоваться выпавшим ему шансом и проверить свои навыки. \n\nНа эту же кухню попадает и юный Лингвини. Всё, на что он может рассчитывать — это должность уборщика. Но он тоже получает свой шанс.",
            "year": 2007,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/894f7e3c-cedf-4e5c-946a-9021efdf17dd/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/894f7e3c-cedf-4e5c-946a-9021efdf17dd/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "семейный"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "Ratatouille",
            "enName": null,
            "names": [
                {
                    "name": "Рататуй"
                },
                {
                    "name": "Ratatouille"
                },
                {
                    "name": "料理鼠王",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "O ratatouis",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Juhu-hu",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Remî no oishî resutoran",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Remy's Delicious Restaurant",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "La troskinys",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Mućkalica",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Ratatouille - Dobrú chut!",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Chú Chuột Đầu Bếp",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Delicious Ratatouille 3D",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Ratatui",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "라따뚜이",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Rottatouille",
                    "language": "NO",
                    "type": null
                },
                {
                    "name": "خلطة بيطة بالصلصة",
                    "language": "EG",
                    "type": null
                },
                {
                    "name": "Ratatouille 3D",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "五星级大鼠",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "موش سرآشپز",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Ratatouille [COLOR yellow]مدبلج[/COLOR]",
                    "language": "EG",
                    "type": null
                }
            ],
            "ageRating": 0,
            "ratingMpaa": "g",
            "shortDescription": "Крысенок-кулинар попадает на кухню ресторана. Аппетитная комедия с «Оскаром» за лучший анимационный фильм",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/212840/2a00000178cad05913b4b6c6377bc8405c47/orig"
            },
            "top10": null,
            "top250": 158,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 46225,
            "type": "movie",
            "name": "Бриллиантовая рука",
            "rating": {
                "kp": 8.521,
                "imdb": 8.3,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "В южном городке орудует шайка валютчиков, возглавляемая Шефом и его помощником Графом (в быту — Геной Козодоевым). Скромный советский служащий и примерный семьянин Семен Семенович Горбунков отправляется в зарубежный круиз на теплоходе, где также плывет Граф, который должен забрать бриллианты в одном из восточных городов и провезти их в загипсованной руке. Но из-за недоразумения вместо жулика на условленном месте падает ничего не подозревающий Семен Семенович, и драгоценный гипс накладывают ему.",
            "votes": {
                "kp": 759932,
                "imdb": 16133,
                "filmCritics": 0,
                "russianFilmCritics": 1,
                "await": 0
            },
            "year": 1968,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/a419d20d-4ae6-4c7c-91b3-c38ef9ca1ffe/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/a419d20d-4ae6-4c7c-91b3-c38ef9ca1ffe/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Бриллиантовая рука"
                }
            ],
            "movieLength": 94,
            "ratingMpaa": "pg13",
            "shortDescription": "Контрабандисты гоняются за примерным семьянином. Народная комедия с элементами абсурда от Леонида Гайдая",
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000016e8d9e10ce1e85a4f1f9d35e52be/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000016e8d9e10ce1e85a4f1f9d35e52be/x1000"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a000001720d06c1ac4d4ec0e3c0c53f10ea/orig"
            },
            "top10": null,
            "top250": 46,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.53,
                "imdb": 8.1,
                "filmCritics": 7.9,
                "russianFilmCritics": 80,
                "await": null
            },
            "votes": {
                "kp": 750988,
                "imdb": 1085356,
                "filmCritics": 203,
                "russianFilmCritics": 5,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/Ag6qhzsJd3k1NKuNrG9RmhZDMh7.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/Ag6qhzsJd3k1NKuNrG9RmhZDMh7.jpg"
            },
            "movieLength": 141,
            "id": 324,
            "type": "movie",
            "name": "Поймай меня, если сможешь",
            "description": "Фрэнк Эбегнейл успел поработать врачом, адвокатом и пилотом на пассажирской авиалинии – и все это до достижения полного совершеннолетия в 21 год. Мастер в обмане и жульничестве, он также обладал искусством подделки документов, что в конечном счете принесло ему миллионы долларов, которые он получил по фальшивым чекам.\n\nАгент ФБР Карл Хэнрэтти отдал бы все, чтобы схватить Фрэнка и привлечь к ответственности за свои деяния, но Фрэнк всегда опережает его на шаг, заставляя продолжать погоню.",
            "year": 2002,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/x1000"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "биография"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Канада"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Catch Me If You Can",
            "enName": null,
            "names": [
                {
                    "name": "Поймай меня, если сможешь"
                },
                {
                    "name": "Catch Me If You Can"
                },
                {
                    "name": "Catch Me If You Can - Mein Leben auf der Flucht",
                    "language": "DE",
                    "type": "TV title"
                },
                {
                    "name": "Впіймай мене, якщо зможеш",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Спіймай мене, якщо зможеш",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "逍遥法外",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "我知道你是谁",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "捉智双雄",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "神鬼交锋",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "有种来抓我",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Prenda-Me se For Capaz",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Arrête-moi si tu peux",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Atrápame Si Puedes",
                    "language": "AR",
                    "type": null
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "pg13",
            "shortDescription": "Виртуозный аферист годами водит за нос ФБР. Хит Стивена Спилберга по реальным событиям с Леонардо ДиКаприо",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170ed493266088fc0739ab3c58d12/orig"
            },
            "top10": null,
            "top250": 28,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 389,
            "type": "movie",
            "name": "Леон",
            "rating": {
                "kp": 8.673,
                "imdb": 8.5,
                "filmCritics": 6.9,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.",
            "votes": {
                "kp": 740594,
                "imdb": 1237319,
                "filmCritics": 66,
                "russianFilmCritics": 2,
                "await": 0
            },
            "year": 1994,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/8662d92a-5881-4600-a7ae-549e6fd53b03/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/8662d92a-5881-4600-a7ae-549e6fd53b03/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "Франция"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Léon",
            "enName": null,
            "names": [
                {
                    "name": "Леон"
                },
                {
                    "name": "Léon"
                },
                {
                    "name": "The Professional",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Леон-кілер",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Léon: Profesionalac",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Léon: Der Profi",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "El Professional",
                    "language": "ES",
                    "type": "Catalan Title"
                },
                {
                    "name": "El Profesional",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Leon",
                    "language": "GB",
                    "type": "Original Title"
                },
                {
                    "name": "Leon Zawodowiec",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Léon: El Profesional",
                    "language": "CL",
                    "type": null
                },
                {
                    "name": "Léon, a profi",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "레옹",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Leon",
                    "language": "DK",
                    "type": null
                },
                {
                    "name": "レオン オリジナル版",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "レオン完全版",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Leon The Professional",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "レオン：1994",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "這個殺手不太冷",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "這個殺手不太冷",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Léon：The Professional",
                    "language": "US",
                    "type": "Full Title with Alt Char '：' for Windows filenames"
                }
            ],
            "movieLength": 133,
            "ratingMpaa": "r",
            "shortDescription": "Осиротевшая девочка становится напарницей наемного убийцы. Культовый триллер с Жаном Рено и Натали Портман",
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg"
            },
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/hkc4gkAFnCI37faPTv2v3yOQzsO.png"
            },
            "top10": null,
            "top250": 18,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 44745,
            "type": "movie",
            "name": "Кавказская пленница, или Новые приключения Шурика",
            "rating": {
                "kp": 8.47,
                "imdb": 8.3,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Отправившись в одну из горных республик собирать фольклор, студент Шурик влюбляется в симпатичную Нину — спортсменку, отличницу, комсомолку и просто красавицу. Однако банда из трёх человек похищает девушку, чтобы насильно выдать замуж. Поняв, что происходит, Шурик отважно бросается освобождать кавказскую пленницу.",
            "votes": {
                "kp": 740463,
                "imdb": 13426,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "year": 1966,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/d681bcf8-0fc2-4f2e-a772-0a01920e62b3/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/d681bcf8-0fc2-4f2e-a772-0a01920e62b3/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "мелодрама"
                },
                {
                    "name": "мюзикл"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Кавказская пленница, или Новые приключения Шурика"
                },
                {
                    "name": "Kidnapping, Caucasian Style",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Abduction In The Caucasus",
                    "language": "US",
                    "type": "Mosfilm YouTube subtitle translation"
                },
                {
                    "name": "The Caucasian Prisoner",
                    "language": "US",
                    "type": "Mosfilm YouTube"
                },
                {
                    "name": "Кавказка пленница",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "A Prisioneira do Caucaso",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Una vergine da rubare",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "вказька полонянка, або Нові пригоди Шурика",
                    "language": "UA",
                    "type": null
                }
            ],
            "movieLength": 82,
            "ratingMpaa": null,
            "shortDescription": "Отважный Шурик бросается спасать красавицу Нину из лап похитителей. Добродушная советская комедия",
            "ticketsOnSale": false,
            "ageRating": 6,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/2X3LAgxlxFVoSeSA1DQut7Cm4gx.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/2X3LAgxlxFVoSeSA1DQut7Cm4gx.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000172283baed060fc41e02fa6cc1e88/orig"
            },
            "top10": null,
            "top250": 58,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.675,
                "imdb": 8,
                "filmCritics": 7.6,
                "russianFilmCritics": 70.8333,
                "await": null
            },
            "votes": {
                "kp": 739293,
                "imdb": 794291,
                "filmCritics": 513,
                "russianFilmCritics": 24,
                "await": 89697
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg"
            },
            "movieLength": 155,
            "id": 409424,
            "type": "movie",
            "name": "Дюна",
            "description": "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.",
            "year": 2021,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Канада"
                },
                {
                    "name": "Венгрия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Dune: Part One",
            "enName": null,
            "names": [
                {
                    "name": "Дюна"
                },
                {
                    "name": "Dune: Part One"
                },
                {
                    "name": "デューン",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "듄",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Duna",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Dune։ Part One",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Dune։ Part One 3D",
                    "language": "US",
                    "type": "3D version"
                },
                {
                    "name": "חולית: חלק ראשון",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "デューン 砂の惑星",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "DUNE デューン 砂の惑星",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ดูน",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Hành Tinh Cát",
                    "language": "VN",
                    "type": null
                }
            ],
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "shortDescription": "Атрейдесы прибывают на планету, где им никто не рад. Фантастический эпос Дени Вильнёва с шестью «Оскарами»",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000017ede1a0d9f8bae88b8f757431b94/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.851,
                "imdb": 8,
                "filmCritics": 7.8,
                "russianFilmCritics": 83.3333,
                "await": null
            },
            "votes": {
                "kp": 739200,
                "imdb": 1266385,
                "filmCritics": 340,
                "russianFilmCritics": 18,
                "await": 46209
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/i34ijHY5hr52uYcKZ48wq7K6yUs.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/i34ijHY5hr52uYcKZ48wq7K6yUs.jpg"
            },
            "movieLength": 121,
            "id": 689066,
            "type": "movie",
            "name": "Стражи Галактики",
            "description": "Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной. Питер оказывается в центре межгалактической охоты, где жертва — он сам.\n\nЕдинственный способ спасти свою жизнь — объединиться с четверкой нелюдимых изгоев: воинственным енотом по кличке Ракета, человекоподобным деревом Грутом, смертельно опасной Гаморой и одержимым жаждой мести Драксом, также известным как Разрушитель. Когда Квилл понимает, какой силой обладает украденный артефакт и какую опасность он представляет для вселенной, одиночка пойдет на все, чтобы сплотить случайных союзников для решающей битвы за судьбу галактики.",
            "year": 2014,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/2e6ab20b-7cf1-49e7-b465-bd5a71c13fa3/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/2e6ab20b-7cf1-49e7-b465-bd5a71c13fa3/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Guardians of the Galaxy",
            "enName": null,
            "names": [
                {
                    "name": "Стражи Галактики"
                },
                {
                    "name": "Guardians of the Galaxy"
                },
                {
                    "name": "G.O.T.G.",
                    "language": "US",
                    "type": "promotional abbreviation"
                },
                {
                    "name": "Marvel's Guardians of the Galaxy",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "마블 가디언즈 오브 갤럭시",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Стражи галактики",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Marvel Studios' Guardians of the Galaxy",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "银河护卫队",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Guardians Of The Galaxy: Vệ Binh Dải Ngân Hà",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Guardians of the Galaxy Vol. 1",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Les Gardiens De La Galaxie",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Guardiões da Galáxia da Marvel Studios",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "שומרי הגלאקסיה: חלק 1",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "การ์เดี้ยนส์ ออฟ เดอะ กาแล็กซี่",
                    "language": "TH",
                    "type": "transliterate"
                },
                {
                    "name": "รวมพันธุ์นักสู้พิทักษ์จักรวาล",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Գալակտիկայի պահապանները",
                    "language": "AM",
                    "type": null
                },
                {
                    "name": "Галактика сақшылары",
                    "language": "KZ",
                    "type": null
                },
                {
                    "name": "Guardianes de la Galaxia",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "星際異攻隊",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "ガーディアンズ・オブ・ギャラクシー",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ガーディアンズ・オブ・ギャラクシー：2014",
                    "language": "JP",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Питер Квилл и горстка неземных лузеров спасают артефакт. Крис Пратт в фильме Джеймса Ганна по комиксу Marvel",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e11e92154e4c2189debbfb0af18/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.497,
                "imdb": 8.7,
                "filmCritics": 7.7,
                "russianFilmCritics": 60,
                "await": null
            },
            "votes": {
                "kp": 723906,
                "imdb": 2037471,
                "filmCritics": 207,
                "russianFilmCritics": 5,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/oCkOhekO65sH5o3UnnWPStYHEnv.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/oCkOhekO65sH5o3UnnWPStYHEnv.jpg"
            },
            "movieLength": 136,
            "id": 301,
            "type": "movie",
            "name": "Матрица",
            "description": "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
            "year": 1999,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Австралия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Matrix",
            "enName": null,
            "names": [
                {
                    "name": "Матрица"
                },
                {
                    "name": "The Matrix"
                },
                {
                    "name": "เพาะพันธุ์มนุษย์เหนือโลก",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "黑客帝国1",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Μάτριξ",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "黑客帝国1：骇客任务",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "매트릭스",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Matrix 1",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "マトリックス：1999",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "廿二世紀殺人網絡",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "廿二世紀殺人網絡",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Matrix",
                    "language": "ES",
                    "type": "Castilian Spanish"
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "r",
            "shortDescription": "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/a9ATitiXhAZU5FQeF63Nb19hYfQ.png"
            },
            "top10": null,
            "top250": 67,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.522,
                "imdb": 7.5,
                "filmCritics": 7.3,
                "russianFilmCritics": 94.7368,
                "await": null
            },
            "votes": {
                "kp": 723010,
                "imdb": 799433,
                "filmCritics": 388,
                "russianFilmCritics": 19,
                "await": 69972
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/aL53oMdZKZRJRH8txH07DLuleF9.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/aL53oMdZKZRJRH8txH07DLuleF9.jpg"
            },
            "movieLength": 115,
            "id": 409600,
            "type": "movie",
            "name": "Доктор Стрэндж",
            "description": "Страшная автокатастрофа поставила крест на карьере успешного нейрохирурга Доктора Стрэнджа. Отчаявшись, он отправляется в путешествие в поисках исцеления и открывает в себе невероятные способности к трансформации пространства и времени. Теперь он — связующее звено между параллельными измерениями, а его миссия — защищать жителей Земли и противодействовать злу, какое бы обличие оно ни принимало.",
            "year": 2016,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/bb966b79-5b10-485d-88d7-fb6aeb79b185/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/bb966b79-5b10-485d-88d7-fb6aeb79b185/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Doctor Strange",
            "enName": null,
            "names": [
                {
                    "name": "Доктор Стрэндж"
                },
                {
                    "name": "Doctor Strange"
                },
                {
                    "name": "Marvel's Doctor Strange",
                    "language": "US",
                    "type": "Marvel complete name"
                },
                {
                    "name": "마블 닥터 스트레인지",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Doctor Extraño",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Dr. Strange (Doctor Extraño)",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Doktor Strejnxh",
                    "language": "AL",
                    "type": null
                },
                {
                    "name": "Дoктор Стрэндж",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Doktor Strange",
                    "language": "SK",
                    "type": "TV title"
                },
                {
                    "name": "Doctor Strange 3D",
                    "language": "US",
                    "type": "3D version"
                },
                {
                    "name": "Marvel Studios' Doctor Strange",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "奇異博士",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Բժիշկ Սթրենջ",
                    "language": "AM",
                    "type": null
                },
                {
                    "name": "Doutor Estranho",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Doktor Strange",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "דר מוזר 1",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "奇异博士",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Phù Thuỷ Tối Thượng",
                    "language": "VN",
                    "type": null
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "pg13",
            "shortDescription": "После автокатастрофы хирург становится верховным защитником Земли. В роли супергероя — Бенедикт Камбербэтч",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e043b6ca119c3a776483a7d95f8/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.526,
                "imdb": 9,
                "filmCritics": 8.6,
                "russianFilmCritics": 50,
                "await": null
            },
            "votes": {
                "kp": 716679,
                "imdb": 2849097,
                "filmCritics": 346,
                "russianFilmCritics": 12,
                "await": 1
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg"
            },
            "movieLength": 152,
            "id": 111543,
            "type": "movie",
            "name": "Темный рыцарь",
            "description": "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.",
            "year": 2008,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Dark Knight",
            "enName": null,
            "names": [
                {
                    "name": "Темный рыцарь"
                },
                {
                    "name": "The Dark Knight"
                },
                {
                    "name": "黑暗骑士",
                    "language": "CN",
                    "type": "short name"
                },
                {
                    "name": "Batman: The Dark Knight",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "배트맨 다크 나이트",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Batman, Le Chevalier Noir",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "蝙蝠侠2：黑暗骑士",
                    "language": "CN",
                    "type": "chronological naming convention"
                },
                {
                    "name": "蝙蝠俠：黑夜之神",
                    "language": "HK",
                    "type": "punctuation conversion"
                },
                {
                    "name": "Mroczny Rycerz",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Batman II: The Dark Knight",
                    "language": "US",
                    "type": "Alternative Title"
                },
                {
                    "name": "Batman - The Dark Knight",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "The Dark Knight 2: The Dark Knight",
                    "language": "US",
                    "type": "Full Formal"
                },
                {
                    "name": "ダークナイト：2008",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "سوارچاكی تاریكی",
                    "language": "IQ",
                    "type": null
                },
                {
                    "name": "蝙蝠侠前传2：黑暗骑士",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "El caballero oscuro",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "Hiệp Sĩ Bóng Đêm",
                    "language": "VN",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "У Бэтмена появляется новый враг — философ-террорист Джокер. Кинокомикс, который вывел жанр на новый уровень",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/224348/2a00000176f159505eff31a41fe3e4ccf723/orig"
            },
            "top10": null,
            "top250": 27,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.723,
                "imdb": 8.4,
                "filmCritics": 8.3,
                "russianFilmCritics": 94.1176,
                "await": null
            },
            "votes": {
                "kp": 715698,
                "imdb": 583368,
                "filmCritics": 359,
                "russianFilmCritics": 17,
                "await": 2830
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/askg3SMvhqEl4OL52YuvdtY40Yb.jpg"
            },
            "movieLength": 105,
            "id": 679486,
            "type": "cartoon",
            "name": "Тайна Коко",
            "description": "12-летний Мигель живёт в мексиканской деревушке в семье сапожников и тайно мечтает стать музыкантом. Тайно, потому что в его семье музыка считается проклятием. Когда-то его прапрадед оставил жену, прапрабабку Мигеля, ради мечты, которая теперь не даёт спокойно жить и его праправнуку. С тех пор музыкальная тема в семье стала табу. Мигель обнаруживает, что между ним и его любимым певцом Эрнесто де ла Крусом, ныне покойным, существует некая связь. Паренёк отправляется к своему кумиру в Страну Мёртвых, где встречает души предков. Мигель знакомится там с духом-скелетом по имени Гектор, который становится его проводником. Вдвоём они отправляются на поиски де ла Круса.",
            "year": 2017,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                },
                {
                    "name": "музыка"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Мексика"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "Coco",
            "enName": null,
            "names": [
                {
                    "name": "Тайна Коко"
                },
                {
                    "name": "Coco"
                },
                {
                    "name": "โคโค่: วันอลวน วิญญาณอลเวง",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Coco: Το Γεύμα του Δάντη",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "ΚΟΚΟ: ΤΟ ΓΕΥΜΑ ΤΟΥ ΔΑΝΤΗ",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "COCO: ΤΟ ΓΕΥΜΑ ΤΟΥ ΔΑΝΤΗ",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "寻梦环游记",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Viva: A Vida é uma Festa",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "玩轉極樂園",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "リメンバー・ミー",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Коконың құпиясы",
                    "language": "KZ",
                    "type": null
                },
                {
                    "name": "Koko in velika skrivnost",
                    "language": "SI",
                    "type": null
                }
            ],
            "ratingMpaa": "pg",
            "shortDescription": "Юный музыкант Мигель попадает в мир мертвых. Трогательная история о любви без границ, получившая два «Оскара»",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e043a226253ed309d7a01d84b6f/orig"
            },
            "top10": null,
            "top250": 30,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1355059,
            "type": "tv-series",
            "name": "Беспринципные",
            "rating": {
                "kp": 7.643,
                "imdb": 6.3,
                "filmCritics": 0,
                "russianFilmCritics": 50,
                "await": null
            },
            "description": "Добро пожаловать на Патриаршие. Смешные и волнующие подробности личной жизни богатых москвичей, которые, как и все, попадают в неловкие ситуации. Правда, ситуации у них не самые обычные... Жена чувствует себя виноватой, познакомившись с любовницей мужа. Муж прикрывается выдуманной дочерью друга. А друг толкает помощника на измену, потому что так хочет жена. И это только начало. Одним словом, неприличные истории о приличных, казалось бы, людях. ",
            "votes": {
                "kp": 704981,
                "imdb": 513,
                "filmCritics": 0,
                "russianFilmCritics": 6,
                "await": 1503
            },
            "year": 2020,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10893610/bf39d670-d685-4ddf-93f5-4cc9642af551/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/bf39d670-d685-4ddf-93f5-4cc9642af551/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 2,
            "ageRating": 18,
            "alternativeName": null,
            "enName": null,
            "movieLength": null,
            "names": [
                {
                    "name": "Беспринципные"
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Обаятельные плуты в поисках острых ощущений. Самая популярная комедия на Кинопоиске",
            "ticketsOnSale": false,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/kZ4oPGtKft5BRWwyaXOCSHwKy3l.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/kZ4oPGtKft5BRWwyaXOCSHwKy3l.jpg"
            },
            "logo": {
                "url": null,
                "previewUrl": null
            },
            "releaseYears": [
                {
                    "start": 2020,
                    "end": null
                }
            ],
            "top10": 10,
            "top250": null,
            "status": null,
            "isSeries": true,
            "seriesLength": 47,
            "totalSeriesLength": null
        },
        {
            "id": 46708,
            "type": "movie",
            "name": "Москва слезам не верит",
            "rating": {
                "kp": 8.431,
                "imdb": 8,
                "filmCritics": 4.8,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Москва, 1950-е годы. Три молодые провинциалки приезжают в Москву в поисках того, что ищут люди во всех столицах мира — любви, счастья и достатка. Антонина выходит замуж, растит детей, любит мужа. Людмиле Москва представляется лотереей, в которой она должна выиграть свое особенное счастье. Катерина же отчаянно влюбляется, но избранник ее оставляет. Однако она не опускает руки, в одиночку растит дочь и к тому же успевает делать блестящую карьеру. В 40 лет судьба дарит ей неожиданную встречу.",
            "votes": {
                "kp": 704632,
                "imdb": 14198,
                "filmCritics": 5,
                "russianFilmCritics": 1,
                "await": 0
            },
            "year": 1979,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/f94e36eb-2a77-422b-94f2-c599c418497c/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/f94e36eb-2a77-422b-94f2-c599c418497c/x1000"
            },
            "genres": [
                {
                    "name": "мелодрама"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Москва слезам не верит"
                },
                {
                    "name": "Moskva slezam ne verit",
                    "language": "RU",
                    "type": "translit"
                },
                {
                    "name": "Moskva tror ikke på tårer",
                    "language": "NO",
                    "type": null
                },
                {
                    "name": "Moscú no cree en las lágrimas",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Moscou ne croit pas aux larmes",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Moscovo Não Acredita em Lágrimas",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "모스크바는 눈물을 믿지 않는다",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "モスクワは涙を信じない",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Mosca non crede alle lacrime",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "莫斯科不相信眼泪",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Moskova ei usko kyyneliin",
                    "language": "FI",
                    "type": null
                },
                {
                    "name": "Moskva tror inte på tårar",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Moskau glaubt den Tränen nicht",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Moskva Tror Ikke På Tårer",
                    "language": "DK",
                    "type": null
                },
                {
                    "name": "Moskou Gelooft Niet in Tranen",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Moskwa nie wierzy łzom",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Moscú no cree en lágrimas",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "Moscow Distrusts Tears",
                    "language": "AU",
                    "type": null
                },
                {
                    "name": "Moscova nu crede în lacrimi",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Moscow Does Not Believe in Tears",
                    "language": "US",
                    "type": null
                }
            ],
            "movieLength": 150,
            "ratingMpaa": "pg",
            "shortDescription": "Три девушки переезжают в Москву в поисках любви, дружбы и успеха. Советский хит, отмеченный «Оскаром»",
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/iSIq6uabpr7DKw4RCF4Q0S7kh21.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/iSIq6uabpr7DKw4RCF4Q0S7kh21.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016fae383f9a29e03b9b723af1cc6a/orig"
            },
            "top10": null,
            "top250": 31,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.238,
                "imdb": 8.5,
                "filmCritics": 8,
                "russianFilmCritics": 88.2353,
                "await": null
            },
            "votes": {
                "kp": 703629,
                "imdb": 1680624,
                "filmCritics": 298,
                "russianFilmCritics": 34,
                "await": 37996
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/5Lbm0gpFDRAPIV1Cth6ln9iL1ou.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/5Lbm0gpFDRAPIV1Cth6ln9iL1ou.jpg"
            },
            "movieLength": 165,
            "id": 586397,
            "type": "movie",
            "name": "Джанго освобожденный",
            "description": "Шульц — эксцентричный охотник за головами, который выслеживает и отстреливает самых опасных преступников. Он освобождает раба по имени Джанго, поскольку тот может помочь ему в поисках трёх бандитов. Джанго знает этих парней в лицо, ведь у него с ними свои счёты.",
            "year": 2012,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/401c67e4-5047-42c2-8668-aeda39da529f/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/401c67e4-5047-42c2-8668-aeda39da529f/x1000"
            },
            "genres": [
                {
                    "name": "вестерн"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Django Unchained",
            "enName": null,
            "names": [
                {
                    "name": "Джанго освобожденный"
                },
                {
                    "name": "Django Unchained"
                },
                {
                    "name": "Zencirsiz Canqo",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "Đangova osveta",
                    "language": "RS",
                    "type": "Latin"
                },
                {
                    "name": "ג'נגו ללא מעצורים",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "جانكو المتحرر",
                    "language": "United Arab Emirates",
                    "type": null
                },
                {
                    "name": "Ђангова освета",
                    "language": "RS",
                    "type": "Cyrillic"
                },
                {
                    "name": "Django Livre",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "장고: 분노의 추적자",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "被解放的姜戈",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Django desencadenado",
                    "language": "ES",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Метко шутя и стреляя, охотники за головами уничтожают негодяев. Квентин Тарантино пробует силы в вестерне",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000170cfa903c504effbb48cb6d55881/orig"
            },
            "top10": null,
            "top250": 91,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 263531,
            "type": "movie",
            "name": "Мстители",
            "rating": {
                "kp": 7.893,
                "imdb": 8,
                "filmCritics": 8.1,
                "russianFilmCritics": 83.3333,
                "await": null
            },
            "description": "Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком.",
            "votes": {
                "kp": 703628,
                "imdb": 1453144,
                "filmCritics": 368,
                "russianFilmCritics": 18,
                "await": 54432
            },
            "year": 2012,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "ageRating": 12,
            "alternativeName": "The Avengers",
            "enName": null,
            "movieLength": 137,
            "names": [
                {
                    "name": "Мстители"
                },
                {
                    "name": "The Avengers"
                },
                {
                    "name": "Tasujad",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Avengers 3D",
                    "language": "SE",
                    "type": "3D-title"
                },
                {
                    "name": "The Avengers 3D",
                    "language": "US",
                    "type": "3D title"
                },
                {
                    "name": "Avengers Assemble",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "De Wrekers",
                    "language": "NL",
                    "type": "literal"
                },
                {
                    "name": "The Avengers: An IMAX 3D Experience",
                    "language": "US",
                    "type": "World-wide IMAX version"
                },
                {
                    "name": "Marvel Avengers Assemble",
                    "language": "GB",
                    "type": "complete title"
                },
                {
                    "name": "ดิ อเวนเจอร์ส 1",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Marvel Studios' The Avengers",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Vengadores",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Os Vingadores",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Marvel: Los Vengadores",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "어벤져스",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "마블 어벤져스",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Мститeли",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "复仇者联盟1",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "復仇者聯盟",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "復仇者聯盟",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "The Avengers: Biệt Đội Siêu Anh Hùng",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "复仇者联盟",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Marvel Film 06 - Avengers",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Avengers",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Biệt Đội Siêu Anh Hùng",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "gfh",
                    "language": "GU",
                    "type": "fgh"
                },
                {
                    "name": "Marvel's Avengers Assemble",
                    "language": "GB",
                    "type": "promotional title"
                },
                {
                    "name": "Marvel's The Avengers",
                    "language": "US",
                    "type": "promotional title"
                },
                {
                    "name": "The Avengers: Os Vingadores",
                    "language": "BR",
                    "type": "Alternate title"
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Команда супергероев дает отпор скандинавскому богу Локи. Начало фантастической саги в киновселенной Marvel",
            "ticketsOnSale": false,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016e043b52e8a10c1fb3f0a134a986/orig"
            },
            "top10": null,
            "top250": null,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1405508,
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "комедия"
                }
            ],
            "names": [
                {
                    "name": "Операция «Фортуна»: Искусство побеждать"
                },
                {
                    "name": "Operation Fortune: Ruse de Guerre"
                },
                {
                    "name": "Five Eyes",
                    "language": "GB",
                    "type": "working title"
                },
                {
                    "name": "Esquema de Risco: Operação Fortune",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Operação Fortune: Missão Mortífera",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Operācija \"Fortūna\": Māksla uzvarēt",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "财富行动：战争之街",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "伙星行動 : 扭計特攻",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Gra fortuny",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "玩命特攻：武演行動",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "ปฏิบัติการระห่ำโคตรคนฟอร์จูน",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "财富行动：战争诡计",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Operation Fortune",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "オペレーション・フォーチュン ルセ・ド・ゲール",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "オペレーション・フォーチュン:ルセ・ド・ゲール",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Opération Fortune - Ruse de Guerre",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Operation Fortune։ Ruse de Guerre",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "オペレーション・フォーチュン：ルセ・ド・ゲール",
                    "language": "JP",
                    "type": null
                }
            ],
            "alternativeName": "Operation Fortune: Ruse de Guerre",
            "description": "Суперагент британской разведки Орсон Форчун наслаждался заслуженным отпуском, когда родине срочно понадобились его услуги. Из секретной лаборатории похищено предположительно смертельное оружие, поэтому, собрав команду из лучших оперативников, Орсон выходит на посредника в готовящейся сделке продажи — миллиардера и большого поклонника знаменитостей Грэга Симмондса. А чтобы подобраться к нему, в качестве прикрытия решает использовать известного голливудского актёра Дэнни Франческо.",
            "enName": null,
            "movieLength": 114,
            "name": "Операция «Фортуна»: Искусство побеждать",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/x1000"
            },
            "rating": {
                "kp": 7.091,
                "imdb": 6.3,
                "filmCritics": 5.6,
                "russianFilmCritics": 87.5,
                "await": null
            },
            "ratingMpaa": "r",
            "shortDescription": "Команда шпионов пытается сорвать продажу супероружия. Самый популярный фильм на Кинопоиске в 2023 году",
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 700686,
                "imdb": 82971,
                "filmCritics": 151,
                "russianFilmCritics": 16,
                "await": 35763
            },
            "year": 2022,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg"
            },
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/duaDnO3P6wXCXnfFr2efRSZ180m.png"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.775,
                "imdb": 8.5,
                "filmCritics": 8.5,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 697604,
                "imdb": 1134083,
                "filmCritics": 139,
                "russianFilmCritics": 2,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/wXsQvli6tWqja51pYxXNG1LFIGV.jpg"
            },
            "movieLength": 88,
            "id": 2360,
            "type": "cartoon",
            "name": "Король Лев",
            "description": "У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти.\nСимба познаёт горе утраты, предательство и изгнание, но в конце концов обретает верных друзей и находит любимую. Закалённый испытаниями, он в нелёгкой борьбе отвоёвывает своё законное место в «Круге жизни», осознав, что значит быть настоящим Королём. ",
            "year": 1994,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "мюзикл"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "The Lion King",
            "enName": null,
            "names": [
                {
                    "name": "Король Лев"
                },
                {
                    "name": "The Lion King"
                },
                {
                    "name": "Der König der Löwen",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Kralj lavova",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Il re leone",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "ライオン・キング",
                    "language": "JP",
                    "type": null
                }
            ],
            "ratingMpaa": "g",
            "shortDescription": "Львенок Симба бросает вызов дяде-убийце. Величественный саундтрек, рисованная анимация и шекспировский размах",
            "ticketsOnSale": false,
            "ageRating": 0,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016e044a3db74ffde3e15fc9a558cc/orig"
            },
            "top10": null,
            "top250": 33,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.64,
                "imdb": 7.8,
                "filmCritics": 0,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 697073,
                "imdb": 33441,
                "filmCritics": 0,
                "russianFilmCritics": 3,
                "await": 3
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/yXnlw2SB0QhYUC4QDyuRZh3CQlU.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/yXnlw2SB0QhYUC4QDyuRZh3CQlU.jpg"
            },
            "movieLength": 87,
            "id": 32898,
            "type": "movie",
            "name": "Достучаться до небес",
            "description": "Волею судеб две абсолютные противоположности, тихоня Руди и разгильдяй Мартин, оказываются в одной больничной палате. Узнав неутешительные прогнозы, друзья решают использовать последние дни на полную катушку — угнать машину с деньгами, напиться текилы, и, конечно, увидеть море.",
            "year": 1997,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "Германия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Knockin' on Heaven's Door",
            "enName": null,
            "names": [
                {
                    "name": "Достучаться до небес"
                },
                {
                    "name": "Knockin' on Heaven's Door"
                },
                {
                    "name": "Knocking on Heaven's Door",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Paradis Express",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Batendo na Porta do Céu",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Dostuchat'sja do nebes",
                    "language": "RU",
                    "type": null
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Смертельно больные Мартин и Руди едут к морю на угнанной машине. Роль, сделавшая Тиля Швайгера суперзвездой",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/oeBHGQ58FsvnYPh5OObMawjkQSh.png"
            },
            "top10": null,
            "top250": 17,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1392743,
            "alternativeName": "Sen Çal Kapımı",
            "countries": [
                {
                    "name": "Турция"
                }
            ],
            "description": "Эда живёт вместе со своей тётей и работает в семейном цветочном магазине. Она мечтает уехать на стажировку в Италию, но лишается стипендии, которую местное архитектурное бюро Art Life выделяет для талантливых студентов. Обидевшись, девушка решает отомстить его владельцу, молодому и талантливому архитектору Серкану Болату. Но их знакомство оборачивается неожиданным договором — Эда получит полностью оплаченную поездку в Италию, если 2 месяца будет притворяться девушкой Серкана, чтобы он смог вернуть свою бывшую.",
            "enName": "Love Is In The Air",
            "genres": [
                {
                    "name": "мелодрама"
                },
                {
                    "name": "комедия"
                }
            ],
            "name": "Постучись в мою дверь",
            "names": [
                {
                    "name": "Постучись в мою дверь"
                },
                {
                    "name": "Sen Çal Kapımı"
                },
                {
                    "name": "Será Isso Amor? (Sen Çal Kapimi)",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "你敲我的门",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "轻叩心扉",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Õhus on armastust",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Love is in the air",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Love is in the air",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Zapukaj do moich drzwi",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Pokucaj na moja vrata",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Love Is In The Air",
                    "language": "US",
                    "type": "World-wide English title"
                },
                {
                    "name": "Μου Χτυπάς την Πόρτα",
                    "language": "GR",
                    "type": "DVD title"
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/389c3708-9557-44ea-9579-42b42e0570bd/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/389c3708-9557-44ea-9579-42b42e0570bd/x1000"
            },
            "rating": {
                "kp": 8.097,
                "imdb": 7.3,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "shortDescription": "Флористка и бизнесмен изображают пару. После этой роли Керем Бюрсин стал крашем миллионов зрителей",
            "votes": {
                "kp": 690957,
                "imdb": 16256,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 1
            },
            "year": 2020,
            "ageRating": 18,
            "movieLength": null,
            "ratingMpaa": null,
            "type": "tv-series",
            "typeNumber": 2,
            "ticketsOnSale": false,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/9qq8LpOoBLYq8MxiMugn0gf9qJd.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/9qq8LpOoBLYq8MxiMugn0gf9qJd.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017f31ec5eb0a9a2db7adadc02a7b1/orig"
            },
            "releaseYears": [
                {
                    "start": 2020,
                    "end": 2021
                }
            ],
            "top10": null,
            "top250": null,
            "status": "completed",
            "isSeries": true,
            "seriesLength": 45,
            "totalSeriesLength": null
        },
        {
            "id": 4542208,
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "genres": [
                {
                    "name": "триллер"
                }
            ],
            "names": [
                {
                    "name": "Вышка"
                },
                {
                    "name": "Fall"
                },
                {
                    "name": "Kritiens",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "命懸二千呎",
                    "language": "HK",
                    "type": "full Chinese font"
                },
                {
                    "name": "坠",
                    "language": "CN",
                    "type": "台译"
                },
                {
                    "name": "A Queda",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "נפילה",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Fall - Fear Reaches New Heights",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Vertige",
                    "language": "CA",
                    "type": "Regional French title"
                },
                {
                    "name": "Nie patrz w dół",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Vertigem Mortal",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "墜",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Cú Rơi Tử Thần",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Над безоднею",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "תלויה באויר",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Vertigo",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "命悬2000呎",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Düşüş",
                    "language": "TR",
                    "type": null
                }
            ],
            "alternativeName": "Fall",
            "description": "После гибели Дэна в результате падения со скалы его жена Бекки, ранее увлекавшаяся экстремальными развлечениями, впала в депрессию. Год спустя девушка всё ещё не может прийти в себя и регулярно заливает горе алкоголем, когда в её жизни внезапно появляется старая боевая подруга Хантер. Она предлагает почтить память Дэна, забравшись на телерадиомачту B67 и развеяв там его прах. Девушки отправляются к самому высокому сооружению Соединённых Штатов, даже не представляя, с чем им придётся столкнуться на его верхушке.",
            "enName": null,
            "movieLength": 107,
            "name": "Вышка",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/21625a72-ee34-4151-aa9c-844c40f610fd/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/21625a72-ee34-4151-aa9c-844c40f610fd/x1000"
            },
            "rating": {
                "kp": 6.737,
                "imdb": 6.4,
                "filmCritics": 6.5,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": "pg13",
            "shortDescription": "Две подруги застревают на заброшенной 600-метровой вышке в пустыне. Головокружительный триллер о выживании",
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 689526,
                "imdb": 100930,
                "filmCritics": 148,
                "russianFilmCritics": 0,
                "await": 3605
            },
            "year": 2022,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/hlxduUs8y9icWGMzYCDLcYHEQ2u.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/hlxduUs8y9icWGMzYCDLcYHEQ2u.jpg"
            },
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/qEN3JZWZbu7er6z2Hkhs841Y4Nx.png"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1224067,
            "type": "tv-series",
            "name": "Вампиры средней полосы",
            "rating": {
                "kp": 8.326,
                "imdb": 7.6,
                "filmCritics": 0,
                "russianFilmCritics": 84.6154,
                "await": null
            },
            "description": "Смоленск — среднестатистический город средней полосы России. Но не совсем. Много веков тут живут вампиры, которые хоть и позволяют себе охотиться на людей, но всё же свято чтут договор, по которому за каждое убийство нужно отдать хранителям на казнь одного из своих. Когда в березовой роще под Смоленском находят обескровленных парней, их мирная жизнь оказывается под угрозой. Теперь местной вампирской ячейке общества под руководством самого старого вампира деда Славы, он же — Святослав Вернидубович, предстоит в кратчайшие сроки найти нарушителя спокойствия.",
            "votes": {
                "kp": 689105,
                "imdb": 1815,
                "filmCritics": 0,
                "russianFilmCritics": 13,
                "await": 1886
            },
            "year": 2021,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/0095df40-c341-4c59-b305-a649582c23c3/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/0095df40-c341-4c59-b305-a649582c23c3/x1000"
            },
            "genres": [
                {
                    "name": "детектив"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "фэнтези"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 2,
            "alternativeName": null,
            "enName": "Central Russia's Vampires",
            "movieLength": null,
            "names": [
                {
                    "name": "Вампиры средней полосы"
                },
                {
                    "name": "Vampiry sredney polosy",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Central Russia's Vampires",
                    "language": "US",
                    "type": null
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Смоленские кровососы берутся за новое расследование. Продолжение обаятельной комедии про упырей-гуманистов",
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/uU2cebzkXXxUt6bI7vUERZiUmIF.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/uU2cebzkXXxUt6bI7vUERZiUmIF.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000179a80f9cdb4b5e89947fc8ab0404/orig"
            },
            "releaseYears": [
                {
                    "start": 2021,
                    "end": null
                }
            ],
            "top10": null,
            "top250": 62,
            "status": null,
            "isSeries": true,
            "seriesLength": 50,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.364,
                "imdb": 8.4,
                "filmCritics": 8.6,
                "russianFilmCritics": 93.75,
                "await": null
            },
            "votes": {
                "kp": 684508,
                "imdb": 1192264,
                "filmCritics": 262,
                "russianFilmCritics": 16,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/fK5ssgvtI43z19FoWigdlqgpLRE.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/fK5ssgvtI43z19FoWigdlqgpLRE.jpg"
            },
            "movieLength": 98,
            "id": 279102,
            "type": "cartoon",
            "name": "ВАЛЛ·И",
            "description": "Робот ВАЛЛ·И из года в год прилежно трудится на опустевшей Земле, очищая нашу планету от гор мусора, которые оставили после себя улетевшие в космос люди. Он и не представляет, что совсем скоро произойдут невероятные события, благодаря которым он встретит друзей, поднимется к звездам и даже сумеет изменить к лучшему своих бывших хозяев, совсем позабывших родную Землю.",
            "year": 2008,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/146b1b20-347b-4b6a-98c8-fdc2c75495cb/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/146b1b20-347b-4b6a-98c8-fdc2c75495cb/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "фантастика"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "WALL·E",
            "enName": null,
            "names": [
                {
                    "name": "ВАЛЛ·И"
                },
                {
                    "name": "WALL·E"
                },
                {
                    "name": "월-E",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "ВАЛЛ-И",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "WALL-E",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "wall-e",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "VALL-I",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Wall-E",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "WALL-E",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Wall-E",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "וול-E",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "瓦力",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "太空奇兵·威E",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Wall E",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "ვოლ·ი",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "WALL-E",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "WALL•E",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "机器人总动员",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Wall.E",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "机器人瓦力",
                    "language": "CN",
                    "type": null
                }
            ],
            "ageRating": 0,
            "ratingMpaa": "g",
            "shortDescription": "Люди покинули Землю и оставили робота собирать за ними мусор. Экологический шедевр Pixar",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016e4af2e7c9f986c307f1feb96141/orig"
            },
            "top10": null,
            "top250": 44,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 9.196,
                "imdb": 8.4,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 678225,
                "imdb": 4169,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/bkchguu5t1CzmEZztpFE0qEjNA6.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/bkchguu5t1CzmEZztpFE0qEjNA6.jpg"
            },
            "movieLength": 10,
            "id": 45319,
            "type": "cartoon",
            "name": "Жил-был пёс",
            "description": "Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал в лесу такого же старого волка...",
            "year": 1982,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/03c5124a-e59a-474b-8dc9-6227db156566/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/03c5124a-e59a-474b-8dc9-6227db156566/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "короткометражка"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 3,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Жил-был пёс"
                },
                {
                    "name": "Zhil-Byl Pyos",
                    "language": "RU",
                    "type": "Translit"
                },
                {
                    "name": "Once Upon a Dog",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Жил был пёс",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Жил был пес",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "There Once Was a Dog",
                    "language": "GB",
                    "type": null
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Волк помогает старому псу вернуться к людям. Душевный мультфильм, подаривший народу крылатую фразу «Щас спою»",
            "ticketsOnSale": false,
            "ageRating": 0,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/212840/2a000001771afbbd3a3348a0dca0adbf9945/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.584,
                "imdb": 8.5,
                "filmCritics": 7.4,
                "russianFilmCritics": 50,
                "await": null
            },
            "votes": {
                "kp": 677636,
                "imdb": 1607464,
                "filmCritics": 258,
                "russianFilmCritics": 4,
                "await": 1
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/4I14RDX6gZPpXkHmbcqvAKpn3Dw.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/4I14RDX6gZPpXkHmbcqvAKpn3Dw.jpg"
            },
            "movieLength": 155,
            "id": 474,
            "type": "movie",
            "name": "Гладиатор",
            "description": "В великой Римской империи не было военачальника, равного генералу Максимусу. Непобедимые легионы, которыми командовал этот благородный воин, боготворили его и могли последовать за ним даже в ад.\n\nНо случилось так, что отважный Максимус, готовый сразиться с любым противником в честном бою, оказался бессилен против вероломных придворных интриг. Генерала предали и приговорили к смерти. Чудом избежав гибели, Максимус становится гладиатором.\n\nБыстро снискав себе славу в кровавых поединках, он оказывается в знаменитом римском Колизее, на арене которого он встретится в смертельной схватке со своим заклятым врагом...",
            "year": 2000,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/7c3460dc-344d-433f-8220-f18d86c8397d/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/7c3460dc-344d-433f-8220-f18d86c8397d/x1000"
            },
            "genres": [
                {
                    "name": "история"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Мальта"
                },
                {
                    "name": "Марокко"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Gladiator",
            "enName": null,
            "names": [
                {
                    "name": "Гладиатор"
                },
                {
                    "name": "Gladiator"
                },
                {
                    "name": "Gladiator: 10th Anniversary Extended Remastered Edition",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Gladiator (Extended Remastered)",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "Gladiator (Extended Reissue)",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "The Gladiators",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Gladiator (Extended Edition)",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Гладiатор",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "글레디에이터",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Gladiator - Extended Edition",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Gladiator (El gladiador)",
                    "language": "ES",
                    "type": "VOD Title"
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "r",
            "shortDescription": "Отважный генерал, ставший рабом, мстит империи. Культовая историческая драма Ридли Скотта с пятью «Оскарами»",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a000001720e23e8084f0b54c4441bab5f0c/orig"
            },
            "top10": null,
            "top250": 42,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1405843,
            "alternativeName": null,
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "description": "Пока вся страна следит за Олимпиадой-80, в пионерском лагере «Буревестник» на Волге происходят странные события. Дети загадочно исчезают по ночам, а потом возвращаются — но совсем не такими, как прежде. Увлеченные летней свободой и друг другом вожатые не замечают, как в их отрядах оживают страшные пионерские легенды, а руководство лагеря делает вид, что все в порядке. Разбираться в тайнах «Буревестника» придется мальчику Валерке и вожатому Игорю. Для начала им предстоит понять, остался ли в лагере хоть кто-то, кому можно доверять.",
            "enName": "Kitchenblock",
            "genres": [
                {
                    "name": "триллер"
                },
                {
                    "name": "детектив"
                },
                {
                    "name": "фэнтези"
                }
            ],
            "name": "Пищеблок",
            "names": [
                {
                    "name": "Пищеблок"
                },
                {
                    "name": "Kitchenblock",
                    "language": "US",
                    "type": null
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/791d5250-96e7-47ef-a5ea-a791c6e4fe14/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/791d5250-96e7-47ef-a5ea-a791c6e4fe14/x1000"
            },
            "rating": {
                "kp": 7.368,
                "imdb": 6,
                "filmCritics": 0,
                "russianFilmCritics": 65.3846,
                "await": null
            },
            "votes": {
                "kp": 676535,
                "imdb": 1033,
                "filmCritics": 0,
                "russianFilmCritics": 26,
                "await": 11626
            },
            "year": 2021,
            "shortDescription": "Любопытный пионер ищет вампиров среди советских школьников. Стильная мистическая драма с молодыми звездами",
            "movieLength": null,
            "ratingMpaa": null,
            "ticketsOnSale": false,
            "type": "tv-series",
            "typeNumber": 2,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/iGpOMqLncsDHTFStCqlAjPT93Bk.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/iGpOMqLncsDHTFStCqlAjPT93Bk.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000017d0026e4ba12aaa4eb77a54e4289/orig"
            },
            "releaseYears": [
                {
                    "start": 2021,
                    "end": null
                }
            ],
            "top10": null,
            "top250": null,
            "status": null,
            "isSeries": true,
            "seriesLength": 50,
            "totalSeriesLength": null
        },
        {
            "id": 406408,
            "type": "movie",
            "name": "Законопослушный гражданин",
            "rating": {
                "kp": 8.019,
                "imdb": 7.4,
                "filmCritics": 4.4,
                "russianFilmCritics": 20,
                "await": null
            },
            "description": "Окружной прокурор пошёл на сделку с преступниками и освободил их из тюрьмы. Тогда человек, чьи жена и ребёнок погибли от рук убийц, решает отомстить прокурору, совершив правосудие самостоятельно. Его ловят и сажают в тюрьму, но он неожиданно ставит ультиматум: он будет убивать, не выходя из-за решетки, если его требования не будут выполнены. Смешное заявление, но вскоре люди правда начинают гибнуть...",
            "votes": {
                "kp": 676181,
                "imdb": 317492,
                "filmCritics": 163,
                "russianFilmCritics": 5,
                "await": 3865
            },
            "year": 2009,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/e3a342a0-6e45-4771-aa76-7d70c2cc26f4/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/e3a342a0-6e45-4771-aa76-7d70c2cc26f4/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Law Abiding Citizen",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/mwlLjL3jTDmTdLWe2PyUVqYQTuK.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/mwlLjL3jTDmTdLWe2PyUVqYQTuK.jpg"
            },
            "enName": null,
            "movieLength": 108,
            "names": [
                {
                    "name": "Законопослушный гражданин"
                },
                {
                    "name": "Law Abiding Citizen"
                },
                {
                    "name": "重案对决",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Un ciudadano ejemplar",
                    "language": "MX",
                    "type": "Spanish"
                },
                {
                    "name": "Código de Conduta",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "奉公守法",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Un ciudadano ejemplar",
                    "language": "ES",
                    "type": "Spanish"
                },
                {
                    "name": "Un honnête citoyen",
                    "language": "CA",
                    "type": "French title"
                },
                {
                    "name": "重案對決",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Смъртоносен противник",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Gesetz der Rache - Law Abiding Citizen",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "El vengador",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Nådesløs hævn",
                    "language": "DK",
                    "type": "TV Title"
                }
            ],
            "status": null,
            "ageRating": 18,
            "ratingMpaa": "r",
            "shortDescription": "Потеряв семью, Клайд жестоко мстит убийцам и нечестному прокурору. Брутальный триллер с Джерардом Батлером",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016faea0d85441d487c107f2a60c8a/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4531254,
            "alternativeName": null,
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "description": "Что будет, если в результате биологической войны почти все мужское население вымрет? Женщины погорюют (недолго), а потом объединятся и создадут новый лучший мир — с экогородками, возобновляемой энергией, возможностями заниматься чем захочется, хоть наукой и биохакингом, хоть йогой и саморазвитием. Размножение теперь происходит путем искусственного оплодотворения, а рождаются в новом мире только девочки. \n\nНо не всем по нраву такое мироустройство. Часть оставшихся в живых мужчин и верных им женщин уходят жить в заброшенные мегаполисы, начинают воровать электричество, наслаждаясь свободой и традиционным сексом. Спокойствие идеально устроенного женского мира оказывается под угрозой, когда учительница Рада из экогорода «Два холма» встречает за его пределами молодого «примата» Геру.",
            "enName": null,
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "фантастика"
                }
            ],
            "movieLength": null,
            "name": "Два холма",
            "names": [
                {
                    "name": "Два холма"
                },
                {
                    "name": "Dva Holma",
                    "language": "RU",
                    "type": "Translit"
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10893610/f19738a3-e9c4-4831-bf3b-1f41c25716f0/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/f19738a3-e9c4-4831-bf3b-1f41c25716f0/x1000"
            },
            "rating": {
                "kp": 7.559,
                "imdb": 0,
                "filmCritics": 0,
                "russianFilmCritics": 25,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Идеальному женскому обществу угрожает свободолюбивый мир мужчин-дикарей. Сай-фай комедия с Никитой Кологривым",
            "ticketsOnSale": false,
            "type": "tv-series",
            "typeNumber": 2,
            "votes": {
                "kp": 673407,
                "imdb": 0,
                "filmCritics": 0,
                "russianFilmCritics": 4,
                "await": 1333
            },
            "year": 2022,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/AiRJhyABNwqgLFgKCbJHeFC6mKs.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/AiRJhyABNwqgLFgKCbJHeFC6mKs.jpg"
            },
            "logo": {
                "url": null
            },
            "releaseYears": [
                {
                    "start": 2022,
                    "end": null
                }
            ],
            "top10": null,
            "top250": null,
            "status": null,
            "isSeries": true,
            "seriesLength": 26,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.233,
                "imdb": 8.1,
                "filmCritics": 7.8,
                "russianFilmCritics": 80,
                "await": null
            },
            "votes": {
                "kp": 670255,
                "imdb": 459785,
                "filmCritics": 361,
                "russianFilmCritics": 10,
                "await": 13499
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/ydmZIafp66mHABs3QJDwvjRgZfE.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/ydmZIafp66mHABs3QJDwvjRgZfE.jpg"
            },
            "movieLength": 152,
            "id": 835086,
            "type": "movie",
            "name": "Ford против Ferrari",
            "description": "В начале 1960-х Генри Форд II принимает решение улучшить имидж компании и сменить курс на производство более модных автомобилей. После неудавшейся попытки купить практически банкрота Ferrari американцы решают бросить вызов итальянским конкурентам на трассе и выиграть престижную гонку 24 часа Ле-Мана. Чтобы создать подходящую машину, компания нанимает автоконструктора Кэррола Шэлби, а тот отказывается работать без выдающегося, но, как считается, трудного в общении гонщика Кена Майлза. Вместе они принимаются за разработку впоследствии знаменитого спорткара Ford GT40.",
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/211e880d-c183-43aa-83b0-13c08109eaf7/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/211e880d-c183-43aa-83b0-13c08109eaf7/x1000"
            },
            "genres": [
                {
                    "name": "биография"
                },
                {
                    "name": "спорт"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "боевик"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Ford v Ferrari",
            "enName": null,
            "names": [
                {
                    "name": "Ford против Ferrari"
                },
                {
                    "name": "Ford v Ferrari"
                },
                {
                    "name": "Форд проти Феррарі",
                    "language": "UA",
                    "type": "literal translation"
                },
                {
                    "name": "Форд против Феррари",
                    "language": "RU",
                    "type": "literal translation"
                },
                {
                    "name": "Дерзкий вызов",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Ford v Ferrari: Cuộc Đua Lịch Sử",
                    "language": "VN",
                    "type": "complete title"
                },
                {
                    "name": "FvF",
                    "language": "US",
                    "type": "promotional title"
                },
                {
                    "name": "Le Mans '66",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Le Mans 66",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Le Mans '66",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "フォードvsフェラーリ：2019",
                    "language": "JP",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Автоконструктор и строптивый гонщик против непобедимых конкурентов. Биографическая драма о любви к скорости",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a000001701068309f9ea919c912ea2c9f41/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.565,
                "imdb": 8,
                "filmCritics": 7.1,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 670035,
                "imdb": 1116366,
                "filmCritics": 348,
                "russianFilmCritics": 16,
                "await": 84876
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/en971MEXui9diirXlogOrPKmsEn.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/en971MEXui9diirXlogOrPKmsEn.jpg"
            },
            "movieLength": 108,
            "id": 462360,
            "type": "movie",
            "name": "Дэдпул",
            "description": "Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон приобрёл невероятную силу, проворство и способность к исцелению. Но страшной ценой: его клеточная структура постоянно меняется, а здравомыслие сомнительно. Всё, чего хочет Уилсон, — держаться на плаву в социальной выгребной яме. Но течение в ней слишком быстрое.",
            "year": 2016,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/f5961569-594e-476d-85ec-2ff29862c95c/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1629390/f5961569-594e-476d-85ec-2ff29862c95c/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Deadpool",
            "enName": null,
            "names": [
                {
                    "name": "Дэдпул"
                },
                {
                    "name": "Deadpool"
                },
                {
                    "name": "Quái Nhân Deadpool",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "死侍：不死現身",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "死侍：不死現身",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "死侍",
                    "language": "CN",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Бывший наемник становится сверхчеловеком поневоле. Безбашенный блокбастер о самом дерзком супергерое Marvel",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a000001725520dbcd79e1c66b058176b54b/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.231,
                "imdb": 7.9,
                "filmCritics": 7.9,
                "russianFilmCritics": 80,
                "await": null
            },
            "votes": {
                "kp": 668518,
                "imdb": 686764,
                "filmCritics": 260,
                "russianFilmCritics": 5,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg"
            },
            "movieLength": 142,
            "id": 322,
            "type": "movie",
            "name": "Гарри Поттер и узник Азкабана",
            "description": "В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность...",
            "year": 2004,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/3eabac99-fb98-4b12-ba9f-6172782d54c6/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/3eabac99-fb98-4b12-ba9f-6172782d54c6/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Harry Potter and the Prisoner of Azkaban",
            "enName": null,
            "names": [
                {
                    "name": "Гарри Поттер и узник Азкабана"
                },
                {
                    "name": "Harry Potter and the Prisoner of Azkaban"
                },
                {
                    "name": "Hari Poter i zatvorenik iz Askabana",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Garri Potter i uznik Azkabana",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Khari Potŭr i zatvornikŭt ot Azkaban",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "O Chári Póter kai o Aichmálotos tou Azkampán",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Hari Poter i Zatvorenikot od Azkaban",
                    "language": "MK",
                    "type": null
                },
                {
                    "name": "Harri Potter i v'yazenʹ Azkabanu",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Harry Potter A Vezen Zazkabanu",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Harry Potter Eo Prisoneiro de Azkaban",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "哈利波特与阿兹卡班的囚徒",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "哈利波特 3：阿茲卡班的逃犯",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "哈利波特3：阿兹卡班的囚徒",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "해리 포터와 아즈카반의 죄수",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Harry Potter e o Prisioneiro de Azkaban",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "해리포터와 아즈카반의 죄수",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Harijs Poters un Azkabanas gūsteknis",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Harry Potter III: Harry Potter and the Prisoner of Azkaban",
                    "language": "US",
                    "type": "Alternative Title"
                },
                {
                    "name": "Harry Potter und der Gefangene von Askaban",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "ハリー・ポッターとアズカバンの囚人",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ハリーポッターとアズカバンの囚人",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Harry Potter (3) et le Prisonnier d'Azkaban",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "הרי פותר והאסיר מאזקבאן",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "ארי פוטר 3: האסיר מאזקבן (2004)",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Harry Potter et le Prisonnier d'Azkaban",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "ハリー・ポッターとアズカバンの囚人：2004",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Harry Potter 3 - und der Gefangene von Askaban (2004)",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Harry Potter ja Azkabani vang",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "哈利·波特与阿兹卡班的囚徒",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Harry Potter 3: Harry Potter and the Prisoner of Azkaban",
                    "language": "US",
                    "type": "series title"
                }
            ],
            "ratingMpaa": "pg",
            "shortDescription": "Беглый маг, тайны прошлого и путешествия во времени. В третьей части поттерианы Альфонсо Куарон сгущает краски",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017e1279bdad156b0db18e10058195/orig"
            },
            "top10": null,
            "top250": 85,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.14,
                "imdb": 7.4,
                "filmCritics": 6,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 665406,
                "imdb": 762777,
                "filmCritics": 229,
                "russianFilmCritics": 1,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/vv5a8u6e40kyH0Hp6HuamAgzRai.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/vv5a8u6e40kyH0Hp6HuamAgzRai.jpg"
            },
            "movieLength": 151,
            "id": 63991,
            "type": "movie",
            "name": "Пираты Карибского моря: Сундук мертвеца",
            "description": "Вновь оказавшись в ирреальном мире, лихой капитан Джек Воробей неожиданно узнает, что является должником легендарного капитана «Летучего Голландца» Дэйви Джонса. Джек должен в кратчайшие сроки решить эту проблему, иначе ему грозит вечное проклятие и рабское существование после смерти. Вдобавок ко всему, срывается свадьба Уилла Тернера и Элизабет Суонн, которые вынуждены составить Джеку компанию в его злоключениях…",
            "year": 2006,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/2f896b6f-397e-40ef-ae19-e9cb0b2d9675/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/2f896b6f-397e-40ef-ae19-e9cb0b2d9675/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Pirates of the Caribbean: Dead Man's Chest",
            "enName": null,
            "names": [
                {
                    "name": "Пираты Карибского моря: Сундук мертвеца"
                },
                {
                    "name": "Pirates of the Caribbean: Dead Man's Chest"
                },
                {
                    "name": "POTC2 Dead Man's Chest",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Le Coffre du mort",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "캐리비안의 해적-망자의 함",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe El Cofre del Hombre Muerto",
                    "language": "SV",
                    "type": null
                },
                {
                    "name": "Pirates des Caraïbes 2 : Le Secret du Coffre Maudit",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Piratas do Caribe 2: O Baú da Morte",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean - Dead Man's Chest",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean 2 - Dead Man's Chest",
                    "language": "NO",
                    "type": null
                },
                {
                    "name": "Пираты Карибского моря Сундук мертвеца",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Pirates des Caraïbes 2 - Le Secret du coffre maudit",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Pirates des Caraïbes 2",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Pirates Of The Caribbean 2 - Dead Man's Chest",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe 2 El cofre de la muerte",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "加勒比海盗2：聚魂棺",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe: El Cofre de la Muerte",
                    "language": "MX",
                    "type": "Alternativo"
                },
                {
                    "name": "Piratas del Caribe : El cofre de la Muerte",
                    "language": "MX",
                    "type": "Alternativo"
                },
                {
                    "name": "Piratas del Caribe II - El cofre del hombre muerto",
                    "language": "ES",
                    "type": "Alternativo"
                },
                {
                    "name": "Piratas del Caribe - El cofre de la muerte",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Piratas do Caribe 2 - O Baú da Morte",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean - Dead Man's Chest",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean deel 2",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Piráti z Karibiku 2 - Truhla mrtvého muže",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean Dead Mans Chest",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe 2. El cofre del hombre muerto",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Piratas del Caribe - El cofre de la muerte",
                    "language": "CO",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean II",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean 2",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean II: Dead Man's Chest",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean։ Dead Man's Chest",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Der Fluch der Karibik 2",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Piratas Del Caribe 2 El cofre del hombre muerto",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Fluch der Karibik 2: Die Truhe des Todes",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean 2 - Dead Man's Chest",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Fluch der Karibik 2 - Des toten Mannes Truhe",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean 2 - Des toten Mannes Truhe (2006)",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "加勒比海盜：決戰魔盜王",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "加勒比海盗2：决战魔盗王",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Cướp Biển Vùng Caribe 2: Chiếc Rương Tử Thần",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Pirates Of The Caribbean：Dead Man's Chest",
                    "language": "US",
                    "type": "Full Title with Alt Char '：' for Windows file names"
                },
                {
                    "name": "加勒比海盗2：亡灵的宝藏",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Pirates of the Caribbean 2: Dead Man's Chest",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Piraci z Karaibów: Skrzynia Umarlaka",
                    "language": "PL",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Джек Воробей и друзья выступают против морских гадов с «Летучего голландца». Вторая часть пиратской киносаги",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016eadd30c4364e99037d0995bd78d/orig"
            },
            "top10": null,
            "top250": 183,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.724,
                "imdb": 7.2,
                "filmCritics": 5.8,
                "russianFilmCritics": 60,
                "await": null
            },
            "votes": {
                "kp": 665147,
                "imdb": 703627,
                "filmCritics": 172,
                "russianFilmCritics": 15,
                "await": 37926
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/xEY0MV2jSQBz9iOJfCFvLTiPGMA.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/xEY0MV2jSQBz9iOJfCFvLTiPGMA.jpg"
            },
            "movieLength": 115,
            "id": 522892,
            "type": "movie",
            "name": "Иллюзия обмана",
            "description": "Команда лучших иллюзионистов мира проворачивает дерзкие ограбления прямо во время своих шоу, играя в кошки-мышки с агентами ФБР.",
            "year": 2013,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/dff4515a-286f-4288-b1cb-43bed18c0080/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/dff4515a-286f-4288-b1cb-43bed18c0080/x1000"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "детектив"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Франция"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Now You See Me",
            "enName": null,
            "names": [
                {
                    "name": "Иллюзия обмана"
                },
                {
                    "name": "Now You See Me"
                },
                {
                    "name": "Nada es lo que parece",
                    "language": "DO",
                    "type": null
                },
                {
                    "name": "Illyuziya Obmana",
                    "language": "RU",
                    "type": "transliteration"
                },
                {
                    "name": "Die Unfassbaren - Now You See Me",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "나우 유씨미 : 마술사기단",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "グランド・イリュージョン",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "惊天魔盗团",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Phi Vụ Thế Kỷ",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "非常盜",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "非常盜",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Ahora me ves: 1",
                    "language": "ES",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Банда иллюзионистов грабит счета коррупционеров. Триллер с криминальными фокусами и звездным составом",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/374297/2a0000017a5c2c31264e0df936d733bcbc83/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 478491,
            "type": "animated-series",
            "name": "Маша и Медведь",
            "rating": {
                "kp": 7.335,
                "imdb": 7.4,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "О дружбе и приключениях маленькой озорной девочки Маши и ее заботливого друга Медведя. Их дружба является олицетворением комичных взаимоотношений между ребенком, исследующим окружающий мир, и взрослым, поддерживающим его в этом увлекательном приключении.",
            "votes": {
                "kp": 664693,
                "imdb": 3744,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 32
            },
            "year": 2009,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/2b836b10-9188-480f-b17a-9810f94a6a6b/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/2b836b10-9188-480f-b17a-9810f94a6a6b/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "детский"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 5,
            "ageRating": 0,
            "alternativeName": null,
            "enName": null,
            "movieLength": null,
            "names": [
                {
                    "name": "Маша и Медведь"
                },
                {
                    "name": "Mascha und der Baer",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Maša ja karu",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Masha and the Bear",
                    "language": "GB",
                    "type": null
                },
                {
                    "name": "מאשה והדב",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Masza i Niedzwiedz",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Maša in medved",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "Masha ve Ayı",
                    "language": "TR",
                    "type": null
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Неугомонная девочка не дает покоя добродушному зверю. Адаптация русской сказки, популярная во всем мире",
            "ticketsOnSale": false,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/7xBlLn0iSwAbH3MNVdHZoG8kMFG.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/7xBlLn0iSwAbH3MNVdHZoG8kMFG.jpg"
            },
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000180b9f24e2e7b13f6cd7e89ec5ed8/orig"
            },
            "releaseYears": [
                {
                    "start": 2009,
                    "end": 2022
                }
            ],
            "top10": 9,
            "top250": null,
            "status": "completed",
            "isSeries": true,
            "seriesLength": 7,
            "totalSeriesLength": null
        },
        {
            "id": 61237,
            "type": "movie",
            "name": "Железный человек",
            "rating": {
                "kp": 7.965,
                "imdb": 7.9,
                "filmCritics": 7.7,
                "russianFilmCritics": 100,
                "await": null
            },
            "description": "Миллиардер-изобретатель Тони Старк попадает в плен к Афганским террористам, которые пытаются заставить его создать оружие массового поражения. В тайне от своих захватчиков Старк конструирует высокотехнологичную киберброню, которая помогает  ему сбежать. Однако по возвращении в США он узнаёт, что в совете директоров его фирмы плетётся заговор, чреватый страшными последствиями. Используя своё последнее изобретение, Старк пытается решить проблемы своей компании радикально...",
            "votes": {
                "kp": 662548,
                "imdb": 1118202,
                "filmCritics": 282,
                "russianFilmCritics": 8,
                "await": 0
            },
            "year": 2008,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/c8e2f069-15f1-4803-95c0-aba858fec360/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/c8e2f069-15f1-4803-95c0-aba858fec360/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Канада"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Iron Man",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/cyecB7godJ6kNHGONFjUyVN9OX5.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/cyecB7godJ6kNHGONFjUyVN9OX5.jpg"
            },
            "enName": null,
            "movieLength": 126,
            "names": [
                {
                    "name": "Железный человек"
                },
                {
                    "name": "Iron Man"
                },
                {
                    "name": "Iron Man: el hombre de hierro",
                    "language": "BO",
                    "type": null
                },
                {
                    "name": "Hombre De Hierro",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "아이언 맨",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "마블 아이언맨",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Железный человeк",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Marvel Studios' Iron Man",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Iron Man: Người Sắt",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "アイアンマン",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "铁甲奇侠",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "アイアンマン：2008",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "钢铁侠",
                    "language": "CN",
                    "type": "Mandarin Romanized"
                },
                {
                    "name": "Iron Man 1",
                    "language": "US",
                    "type": null
                }
            ],
            "status": null,
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "shortDescription": "Попав в плен, Тони Старк изобретает суперкостюм и спасает мир. Блокбастер, запустивший киновселенную Marvel",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e4acdd81a988eaa0b5b63668d37/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.611,
                "imdb": 8.9,
                "filmCritics": 8.2,
                "russianFilmCritics": 71.4286,
                "await": null
            },
            "votes": {
                "kp": 659465,
                "imdb": 1992368,
                "filmCritics": 235,
                "russianFilmCritics": 7,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg"
            },
            "movieLength": 178,
            "id": 328,
            "type": "movie",
            "name": "Властелин колец: Братство Кольца",
            "description": "Сказания о Средиземье &#151; это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. \nТихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
            "year": 2001,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "боевик"
                }
            ],
            "countries": [
                {
                    "name": "Новая Зеландия"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Lord of the Rings: The Fellowship of the Ring",
            "enName": null,
            "names": [
                {
                    "name": "Властелин колец: Братство Кольца"
                },
                {
                    "name": "The Lord of the Rings: The Fellowship of the Ring"
                },
                {
                    "name": "Sagan om ringen",
                    "language": "SE",
                    "type": "short title"
                },
                {
                    "name": "LOTR",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Eventyret om ringen",
                    "language": "DK",
                    "type": "short title"
                },
                {
                    "name": "Sagan om ringen: Härskarringen",
                    "language": "FI",
                    "type": "Swedish title"
                },
                {
                    "name": "The Fellowship of the Ring",
                    "language": "US",
                    "type": "short title"
                },
                {
                    "name": "Le Seigneur des Anneaux: La Communauté de l'Anneau",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "La Communauté de l'Anneau",
                    "language": "FR",
                    "type": "Short title"
                },
                {
                    "name": "指环王1：护戒使者",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "指环王1：魔戒再现",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Gredzenu pavēlnieks: Gredzena brālība",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "魔戒首部曲：魔戒現身",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "Господар на прстените: Дружината на Прстенот",
                    "language": "MK",
                    "type": null
                },
                {
                    "name": "อภินิหารแหวนครองพิภพ",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "01 - Le Seigneur des anneaux - La Communauté de l'anneau",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Der Herr der Ringe - Die Gefaehrten",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "La comunidad del anillo",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "ESDLA",
                    "language": "ES",
                    "type": "short title"
                },
                {
                    "name": "The Lord of the Rings I: The Fellowship of the Ring",
                    "language": "US",
                    "type": "Alternative title"
                },
                {
                    "name": "魔戒首部曲：魔戒现身",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "LSDA",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "ロード・オブ・ザ・リング：2001",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Der Herr der Ringe - Die Gefährten",
                    "language": "AT",
                    "type": null
                },
                {
                    "name": "El señor de los anillos: La comunidad del anillo",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "The Lord of the Rings The Fellowship of the Ring",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "The Lord of the Rings I",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Üzüklərin Hökmdarı:Üzük Qardaşlığı",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "LOTR1 - The Fellowship of the Ring",
                    "language": "US",
                    "type": "sortable short title"
                },
                {
                    "name": "ロード・オブ・ザ・リング",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "The Lord Of The Rings：The Fellowship Of The Ring",
                    "language": "US",
                    "type": "Full Title With Alt Char Set Colon '：' For Windows Filenames"
                }
            ],
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "shortDescription": "Фродо Бэггинс отправляется спасать Средиземье. Первая часть культовой фэнтези-трилогии Питера Джексона",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a000001714e8c3b6a57d19aebf13bcafe4f/orig"
            },
            "top10": null,
            "top250": 14,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.062,
                "imdb": 7.6,
                "filmCritics": 6.3,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 658783,
                "imdb": 667415,
                "filmCritics": 250,
                "russianFilmCritics": 8,
                "await": 29385
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/veXdzn7LL0bFIDGmE7tTkvRg0qV.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/veXdzn7LL0bFIDGmE7tTkvRg0qV.jpg"
            },
            "movieLength": 128,
            "id": 420923,
            "type": "movie",
            "name": "Шерлок Холмс",
            "description": "Величайший в истории сыщик Шерлок Холмс вместе со своим верным соратником Ватсоном вступают в схватку, требующую нешуточной физической и умственной подготовки, ведь их враг представляет угрозу для всего Лондона.",
            "year": 2009,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1777765/244e2847-f426-4c60-86ba-34cde7db695f/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1777765/244e2847-f426-4c60-86ba-34cde7db695f/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "детектив"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Германия"
                },
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Австралия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Sherlock Holmes",
            "enName": null,
            "names": [
                {
                    "name": "Шерлок Холмс"
                },
                {
                    "name": "Sherlock Holmes"
                },
                {
                    "name": "Serlok Holms",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Shârokku Hômuzu",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Sherlock Holmes 1",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "01 Sherlock Holmes",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Sherlock Holmes 1",
                    "language": "CA",
                    "type": null
                }
            ],
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "shortDescription": "Великий сыщик преследует воскресшего из мертвых чернокнижника. Бодрый детектив Гая Ричи, первая часть франшизы",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000170ed76563839fe9830642b60c50b/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.125,
                "imdb": 7.6,
                "filmCritics": 6.4,
                "russianFilmCritics": 66.6667,
                "await": null
            },
            "votes": {
                "kp": 656346,
                "imdb": 502792,
                "filmCritics": 69,
                "russianFilmCritics": 3,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/wgvc3PmjQGtYYDWaeuV867mnFDs.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/wgvc3PmjQGtYYDWaeuV867mnFDs.jpg"
            },
            "movieLength": 126,
            "id": 2656,
            "type": "movie",
            "name": "Пятый элемент",
            "description": "Каждые пять тысяч лет открываются двери между измерениями и темные силы стремятся нарушить существующую гармонию. Каждые пять тысяч лет Вселенной нужен герой, способный противостоять этому злу. XXIII век. Нью-йоркский таксист Корбен Даллас должен решить глобальную задачу - спасение всего рода человеческого.\n\nЗло в виде раскаленной массы, наделенной интеллектом, надвигается на Землю. Победить его можно, только лишь собрав воедино четыре элемента (они же стихии - земля, вода, воздух и огонь) и добавив к ним загадочный пятый элемент.",
            "year": 1997,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "мелодрама"
                }
            ],
            "countries": [
                {
                    "name": "Франция"
                },
                {
                    "name": "Великобритания"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Fifth Element",
            "enName": null,
            "names": [
                {
                    "name": "Пятый элемент"
                },
                {
                    "name": "The Fifth Element"
                },
                {
                    "name": "El cinquè element",
                    "language": "AD",
                    "type": null
                },
                {
                    "name": "The Fifth Element: Remastered",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "The 5th Element",
                    "language": "US",
                    "type": "alternate spelling"
                },
                {
                    "name": "Le 5ème élément",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Le cinquième élément",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "제5원소",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "제 5 원소",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "제 5원소",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "第五元素",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "第五元素",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "El quinto elemento",
                    "language": "ES",
                    "type": "Castilian Spanish"
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Последняя надежда человечества — безалаберный нью-йоркский таксист. Самый обаятельный фильм Люка Бессона",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/212840/2a0000017af8518090563463ba17354a88cb/orig"
            },
            "top10": null,
            "top250": 62,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.24,
                "imdb": 8.1,
                "filmCritics": 7.9,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 655415,
                "imdb": 794639,
                "filmCritics": 215,
                "russianFilmCritics": 9,
                "await": 7397
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/aH9KWmXFMamXkHMgLjnQmSYjScL.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/aH9KWmXFMamXkHMgLjnQmSYjScL.jpg"
            },
            "movieLength": 98,
            "id": 280172,
            "type": "cartoon",
            "name": "Как приручить дракона",
            "description": "Вы узнаете историю подростка Иккинга, которому не слишком близки традиции его героического племени, много лет ведущего войну с драконами. Мир Иккинга переворачивается с ног на голову, когда он неожиданно встречает дракона Беззубика, который поможет ему и другим викингам увидеть привычный мир с совершенно другой стороны…",
            "year": 2010,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/1a920451-e765-41e9-81aa-78438e82abbc/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/1a920451-e765-41e9-81aa-78438e82abbc/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Франция"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "How to Train Your Dragon",
            "enName": null,
            "names": [
                {
                    "name": "Как приручить дракона"
                },
                {
                    "name": "How to Train Your Dragon"
                },
                {
                    "name": "驯龙高手",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Így neveld a sárkányodat 3D",
                    "language": "HU",
                    "type": "3D version"
                },
                {
                    "name": "드래곤 길들이기 1",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Draktränaren 1",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Ako vycvičiť draka",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Ako vycvičiť draka 1",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Dragons",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Hoe tem je een draak",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Ejderhanı Nasıl Eğitirsin",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Bí Kíp Luyện Rồng",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Drachenzaehmen leicht gemacht",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Cómo entrenar a tu dragón",
                    "language": "ES",
                    "type": null
                }
            ],
            "ageRating": 6,
            "ratingMpaa": "pg",
            "shortDescription": "Сын вождя заводит дружбу с драконом — врагом его племени. История о том, что ум и сочувствие куда важнее силы",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/239697/2a0000017d72bff6884076340156ac462530/orig"
            },
            "top10": null,
            "top250": 25,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.646,
                "imdb": 8.5,
                "filmCritics": 8.8,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 652442,
                "imdb": 1297300,
                "filmCritics": 110,
                "russianFilmCritics": 2,
                "await": 1
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg"
            },
            "movieLength": 116,
            "id": 476,
            "type": "movie",
            "name": "Назад в будущее",
            "description": "Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",
            "year": 1985,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Back to the Future",
            "enName": null,
            "names": [
                {
                    "name": "Назад в будущее"
                },
                {
                    "name": "Back to the Future"
                },
                {
                    "name": "Aftur til framtíðar",
                    "language": "IS",
                    "type": null
                },
                {
                    "name": "Vrnitev v prihodnost",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "Terug naar de Toekomst",
                    "language": "NL",
                    "type": null
                },
                {
                    "name": "Назад в будущee",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Zurück in die Zukunft",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Back to the Future 1",
                    "language": "US",
                    "type": "Series Title"
                },
                {
                    "name": "Повратак у будућност",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Back to the Future Part 1",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Space Man From Pluto",
                    "language": "US",
                    "type": "Rejected Title"
                },
                {
                    "name": "빽 투 더 퓨쳐",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "빽 투 더 퓨처",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "백 투 더 퓨처",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "백 투 더 퓨쳐",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "バック・トゥ・ザ・フューチャー",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "バック・トゥ・ザ・フューチャー：1985",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Regreso al futuro",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "Volver al Futuro",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "Gələcəyə Dönüş",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "Retour vers le futur",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Retour vers le futur 1",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Retour vers le futur I",
                    "language": "FR",
                    "type": null
                }
            ],
            "ratingMpaa": "pg",
            "shortDescription": "Безумный ученый и 17-летний оболтус тестируют машину времени, наводя шороху в 1950-х. Классика кинофантастики",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016eadd2590232b1f0f0ea7b27b0b0/orig"
            },
            "top10": null,
            "top250": 35,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.762,
                "imdb": 8,
                "filmCritics": 7.9,
                "russianFilmCritics": 95.2381,
                "await": null
            },
            "votes": {
                "kp": 644491,
                "imdb": 916285,
                "filmCritics": 387,
                "russianFilmCritics": 21,
                "await": 59660
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/3dPhs7hUnQLphDFzdkD407VZDYo.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/3dPhs7hUnQLphDFzdkD407VZDYo.jpg"
            },
            "movieLength": 144,
            "id": 841700,
            "type": "movie",
            "name": "Марсианин",
            "description": "Марсианская миссия «Арес-3» в процессе работы была вынуждена экстренно покинуть планету из-за надвигающейся песчаной бури. Инженер и биолог Марк Уотни получил повреждение скафандра во время песчаной бури. Сотрудники миссии, посчитав его погибшим, эвакуировались с планеты, оставив Марка одного.\n\nОчнувшись, Уотни обнаруживает, что связь с Землёй отсутствует, но при этом полностью функционирует жилой модуль. Главный герой начинает искать способ продержаться на имеющихся запасах еды, витаминов, воды и воздуха ещё 4 года до прилёта следующей миссии «Арес-4».",
            "year": 2015,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/x1000"
            },
            "genres": [
                {
                    "name": "фантастика"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Венгрия"
                },
                {
                    "name": "Иордания"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Martian",
            "enName": null,
            "names": [
                {
                    "name": "Марсианин"
                },
                {
                    "name": "The Martian"
                },
                {
                    "name": "Marsovac: Spasilačka misija",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Misión Rescate",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "Misión rescate",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Seul sur Mars",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Perdido em Marte",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "火星任務",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "絕地救援",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Marte (The Martian)",
                    "language": "ES",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Инженер-биолог пытается выжить на Марсе, ожидая помощи с Земли. Научно-фантастический блокбастер Ридли Скотта",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000017c4ca064394d460243f06faf4702/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 44168,
            "type": "movie",
            "name": "Девчата",
            "rating": {
                "kp": 8.42,
                "imdb": 7.8,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "В сибирский поселок приехала юная повариха Тося Кислицына — наивная и эксцентричная девчонка. Она сует свой нос во все дела, каждому стремится помочь. Местный красавец Илья на спор заводит с Тосей роман.",
            "votes": {
                "kp": 644463,
                "imdb": 4462,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 0
            },
            "year": 1962,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/d5ee73ae-82af-4f60-af5e-f080bed523d8/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/d5ee73ae-82af-4f60-af5e-f080bed523d8/x1000"
            },
            "genres": [
                {
                    "name": "мелодрама"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "СССР"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/fQQRAYtE76T0LZxV1wTGk5kPOq.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/fQQRAYtE76T0LZxV1wTGk5kPOq.jpg"
            },
            "enName": null,
            "movieLength": 92,
            "names": [
                {
                    "name": "Девчата"
                },
                {
                    "name": "The Girls",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Les Filles",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Mai lányok",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Дівчата",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Dziewczęta",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Devčata",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Oklada i djevojke",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Taigan tyttö",
                    "language": "FI",
                    "type": null
                },
                {
                    "name": "Qızlar",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "So ein Mädel",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Las niñas",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Dívky",
                    "language": "CZ",
                    "type": null
                }
            ],
            "status": null,
            "ratingMpaa": null,
            "shortDescription": "Юная повариха привносит жизни в маленький сибирский поселок. Фильм-эпоха, воспитавший не одно поколение",
            "ticketsOnSale": true,
            "ageRating": 0,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000173c3119002890d4f821f616e0ffb/orig"
            },
            "top10": null,
            "top250": 56,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.133,
                "imdb": 7.4,
                "filmCritics": 7.2,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 644374,
                "imdb": 687828,
                "filmCritics": 237,
                "russianFilmCritics": 1,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/1stUIsjawROZxjiCMtqqXqgfZWC.jpg"
            },
            "movieLength": 161,
            "id": 688,
            "type": "movie",
            "name": "Гарри Поттер и Тайная комната",
            "description": "Гарри Поттер переходит на второй курс Школы чародейства и волшебства Хогвартс. Эльф Добби предупреждает Гарри об опасности, которая поджидает его там, и просит больше не возвращаться в школу.\nЮный волшебник не следует совету эльфа и становится свидетелем таинственных событий, разворачивающихся в Хогвартсе. Вскоре Гарри и его друзья узнают о существовании Тайной Комнаты и сталкиваются с новыми приключениями, пытаясь победить темные силы.",
            "year": 2002,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/1ef65bfb-b16b-42aa-a54a-758395253290/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/1ef65bfb-b16b-42aa-a54a-758395253290/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Harry Potter and the Chamber of Secrets",
            "enName": null,
            "names": [
                {
                    "name": "Гарри Поттер и Тайная комната"
                },
                {
                    "name": "Harry Potter and the Chamber of Secrets"
                },
                {
                    "name": "Harii Pottâ to himitsu no heya",
                    "language": "JP",
                    "type": "romaji"
                },
                {
                    "name": "Hari Poter i Dvorana tajni",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "哈利波特与密室",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Garri Potter i Tainaya komnata",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "O Chári Póter kai i Kámara me ta Mystiká",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Harri Potter i tayemna kimnata",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Khari Potŭr i stayata na taĭnite",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Harry Potter dan Kamar Rahasia",
                    "language": "ID",
                    "type": null
                },
                {
                    "name": "Harry Potter och Hemligheternas kammare 2",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Harry Potter ve sirlar odasi 2",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Harry Potter a taiemna komnata",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Harry Potter y la cámara secreta",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "哈利波特 2：消失的密室",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "哈利波特2：密室",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "해리 포터와 비밀의 방",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Harry Potter e a Câmara Secreta",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "해리포터와 비밀의 방",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Harijs Poters un noslēpumu kambaris",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Harry Potter II: Harry Potter and the Chamber of Secrets",
                    "language": "US",
                    "type": "Alternative Title"
                },
                {
                    "name": "Harry Potter und die Kammer des Schreckens",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "ハリー・ポッターと秘密の部屋",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "ハリーポッターと秘密の部屋",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Harry Potter (2) et la Chambre des secrets",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "הרי פותר וחדר הסודות",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "ארי פוטר 2: חדר הסודות (2002)",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "ハリー・ポッターと秘密の部屋：2002",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Harry Potter 2 - und die Kammer des Schreckens (2002)",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Harry Potter ja saladuste kamber",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "哈利·波特与密室",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Harry Potter 2: Harry Potter and the Chamber of Secrets",
                    "language": "US",
                    "type": "series title"
                }
            ],
            "ageRating": 12,
            "ratingMpaa": "pg",
            "shortDescription": "Домашний эльф, магический дневник и привидение. Второй год Гарри в школе Хогвартс — еще более захватывающий",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017e12791a83f15ab89c146aa13b32/orig"
            },
            "top10": null,
            "top250": 134,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 5078983,
            "name": "Мажор в Сочи",
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Мажор в Сочи"
                }
            ],
            "type": "movie",
            "typeNumber": 1,
            "description": "Московские массивные здания и оживлённые дороги Мажор сменит на живописные курортные виды, домик в горах и извилистые серпантины. Туда он перебирается вместе с дочерью Соней, где у них появился свой семейный бизнес — эко-отель. Но ещё до открытия всё идёт наперекосяк. Вначале в гостинице устраивают погром, затем Соколовский наткнётся на местного мажора и перейдёт дорогу сочинскому воротиле, который планирует снести целый жилой квартал, чтобы построить на его месте винодельню.",
            "shortDescription": "Как изменить жизнь и защитить ребенка, если привык решать проблемы силой? Душевный экшен с Павлом Прилучным",
            "rating": {
                "kp": 7.057,
                "imdb": 0,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 635066,
                "imdb": 0,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 42615
            },
            "ratingMpaa": null,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/dd801e2d-9532-406e-a84e-9c6d74bc6d2d/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/dd801e2d-9532-406e-a84e-9c6d74bc6d2d/x1000"
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a00000183cd0689e10362b246b64fb45dbf/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a00000183cd0689e10362b246b64fb45dbf/x1000"
            },
            "genres": [
                {
                    "name": "приключения"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "top10": null,
            "top250": null,
            "releaseYears": [],
            "year": 2022,
            "ageRating": 18,
            "movieLength": 109,
            "status": null,
            "ticketsOnSale": false,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 502838,
            "type": "tv-series",
            "name": "Шерлок",
            "rating": {
                "kp": 8.857,
                "imdb": 9.1,
                "filmCritics": 0,
                "russianFilmCritics": 75,
                "await": null
            },
            "description": "События разворачиваются в наши дни. Он прошел Афганистан, остался инвалидом. По возвращении в родные края встречается с загадочным, но своеобразным гениальным человеком. Тот в поиске соседа по квартире. Лондон, 2010 год. Происходят необъяснимые убийства. Скотланд-Ярд без понятия, за что хвататься. Существует лишь один человек, который в силах разрешить проблемы и найти ответы на сложные вопросы.",
            "votes": {
                "kp": 629372,
                "imdb": 990421,
                "filmCritics": 0,
                "russianFilmCritics": 12,
                "await": 12
            },
            "year": 2010,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/f28c1ea2-47b0-49d5-b11c-9608744f0233/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1629390/f28c1ea2-47b0-49d5-b11c-9608744f0233/x1000"
            },
            "genres": [
                {
                    "name": "детектив"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "криминал"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 2,
            "alternativeName": "Sherlock",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/hmLTIRtVyTHShJl2Wb8LHmvUgJm.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/hmLTIRtVyTHShJl2Wb8LHmvUgJm.jpg"
            },
            "enName": "Sherlock",
            "movieLength": null,
            "names": [
                {
                    "name": "Шерлок"
                },
                {
                    "name": "Sherlock"
                },
                {
                    "name": "神探夏洛克",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "新福尔摩斯",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Σέρλοκ",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "新福尔摩斯",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "شرلوک هلمز",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Šerlokas",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "新世紀福爾摩斯",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Sherlok Xolms",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "셜록",
                    "language": "KR",
                    "type": null
                }
            ],
            "status": "completed",
            "ratingMpaa": null,
            "shortDescription": "Гений-социопат знакомит соседа с миром частного сыска. Бенедикт Камбербэтч в одном из лучших шоу XXI века",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f14b4a1e2a3f40dd652de59d6e/orig"
            },
            "releaseYears": [
                {
                    "start": 2010,
                    "end": 2017
                }
            ],
            "top10": null,
            "top250": 13,
            "isSeries": true,
            "seriesLength": 90,
            "totalSeriesLength": null
        },
        {
            "id": 404900,
            "type": "tv-series",
            "name": "Во все тяжкие",
            "rating": {
                "kp": 8.895,
                "imdb": 9.5,
                "filmCritics": 0,
                "russianFilmCritics": 100,
                "await": null
            },
            "description": "Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёгких. Учитывая сложное финансовое состояние дел семьи, а также перспективы, Уолтер решает заняться изготовлением метамфетамина. Для этого он привлекает своего бывшего ученика Джесси Пинкмана, когда-то исключённого из школы при активном содействии Уайта. Пинкман сам занимался варкой мета, но накануне, в ходе рейда УБН, он лишился подельника и лаборатории.",
            "votes": {
                "kp": 625229,
                "imdb": 2113321,
                "filmCritics": 0,
                "russianFilmCritics": 9,
                "await": 0
            },
            "year": 2008,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/x1000"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "триллер"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 2,
            "alternativeName": "Breaking Bad",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg"
            },
            "enName": "Breaking Bad",
            "movieLength": null,
            "names": [
                {
                    "name": "Во все тяжкие"
                },
                {
                    "name": "Breaking Bad"
                },
                {
                    "name": "В обувките на Сатаната",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Breaking Bad: A Química do Mal",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "绝命毒师",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "绝命毒师 2008",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Perníkový táta",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Halvale teele",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Rompiendo Tus Límites Morales",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Σπάζοντας τα ηθικά σου όρια",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Na putu prema dolje",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Totál szívás",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Shover shurot",
                    "language": "IL",
                    "type": "romanization"
                },
                {
                    "name": "افسار گسیخته",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Breaking Bad - Reazioni collaterali",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Bureikingu baddo",
                    "language": "JP",
                    "type": "romaji"
                },
                {
                    "name": "ブレイキング・バッド",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Bręstantis blogis",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Pārkāpt robežu",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Breaking Bad: Ruptura Total",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Чиста хемија",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "بريكنق باد",
                    "language": "SA",
                    "type": "دراما"
                },
                {
                    "name": "Kriva pota",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "Perníkový tatko",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "絕命毒師",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Пуститися берега",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "BrBa",
                    "language": "US",
                    "type": "Abbreviation"
                },
                {
                    "name": "Egrilik sari",
                    "language": "UZ",
                    "type": null
                },
                {
                    "name": "Tập Làm Người Xấu",
                    "language": "VN",
                    "type": null
                }
            ],
            "status": "completed",
            "ratingMpaa": null,
            "shortDescription": "Умирающий учитель химии начинает варить мет ради благополучия семьи. Выдающийся драматический сериал 2010-х",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/200035/2a0000017802c0dff697971233b0e9def244/orig"
            },
            "releaseYears": [
                {
                    "start": 2008,
                    "end": 2013
                }
            ],
            "top10": null,
            "top250": 1,
            "isSeries": true,
            "seriesLength": 47,
            "totalSeriesLength": null
        },
        {
            "id": 5928,
            "type": "movie",
            "name": "Один дома 2: Затерянный в Нью-Йорке",
            "rating": {
                "kp": 8.03,
                "imdb": 6.9,
                "filmCritics": 4.5,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Самый маленький герой Америки устраивает большой переполох в Нью-Йорке! Кевин МакКалистер вернулся! Но теперь он один не дома, а в Нью-Йорке и у него достаточно денег и кредитных карточек, чтобы превратить Большое Яблоко в собственную площадку для игр.\n\nНо, как всегда, Кевину не суждено быть долго одному: его старые приятели ― жулики Гарри и Марв ― сбежали из тюрьмы, куда они попали стараниями Кевина. И надо же им было попасть именно в тот город, где Кевин планировал поразвлечься! Новые западни и ловушки уже ждут горе-бандитов.",
            "votes": {
                "kp": 624330,
                "imdb": 400536,
                "filmCritics": 57,
                "russianFilmCritics": 0,
                "await": 0
            },
            "year": 1992,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/e87b5842-3065-422e-81e8-59a1ffcd9b6a/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/e87b5842-3065-422e-81e8-59a1ffcd9b6a/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "семейный"
                },
                {
                    "name": "приключения"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Home Alone 2: Lost in New York",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/pnkcE3Q3fPNM9XzWEN1gJJRYYX4.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/pnkcE3Q3fPNM9XzWEN1gJJRYYX4.jpg"
            },
            "enName": null,
            "movieLength": 119,
            "names": [
                {
                    "name": "Один дома 2: Затерянный в Нью-Йорке"
                },
                {
                    "name": "Home Alone 2: Lost in New York"
                },
                {
                    "name": "Home Alone 2",
                    "language": "US",
                    "type": "short title"
                },
                {
                    "name": "Alone Again",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "Ensam Hemma 2",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Maman, j'ai encore raté l'avion et je suis perdu dans New York",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "Sozinho em Casa 2: Perdido em Nova Iorque",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Monos sto spiti 2 - Hamenos sti Nea Yorki",
                    "language": "GR",
                    "type": "transliterated title"
                },
                {
                    "name": "Hômu arôn 2",
                    "language": "JP",
                    "type": "romaji"
                },
                {
                    "name": "Μόνος στο σπίτι 2: Χαμένος στη Νέα Υόρκη",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Singur acasa: Pierdut in New York",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "小鬼當家2：紐約迷途記",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Reszkessetek, betörők! 2.: Elveszve New Yorkban",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Maman, j'ai encore raté l'avion...",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "Mi pobre angelito 2 - Perdido en Nueva York",
                    "language": "UY",
                    "type": null
                },
                {
                    "name": "Mi Pobre Angelito 2",
                    "language": "CL",
                    "type": null
                },
                {
                    "name": "Üksinda kodus 2: Kadunud New Yorgis",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Alene hjemme 2: Glemt i New York",
                    "language": "DK",
                    "type": null
                },
                {
                    "name": "Üksinda kodus 2",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "나 홀로 집에 2",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Kevin – Allein in New York",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "ホームアローン2",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "وحيد في المنزل 2",
                    "language": "SA",
                    "type": null
                },
                {
                    "name": "Home Alone II: Lost In New York",
                    "language": "US",
                    "type": "Alternative Title"
                },
                {
                    "name": "שחכו אותי בבית 2",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "שכחו אותי בבית 2: אבוד בניו יורק",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "לבד בבית 2",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "לבד בבית 2: אבוד בניו יורק",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "שחכו אותי בבית 2: אבוד בניו יורק",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "Maman, (2) j'ai encore raté l'avion !",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Ở Nhà Một Mình 2: Lạc Ở New York",
                    "language": "VN",
                    "type": null
                },
                {
                    "name": "Үйде жалғыз қалғанда 2: Нью-Йоркте жоғалған",
                    "language": "KZ",
                    "type": null
                },
                {
                    "name": "Один дома 2: Потерявшийся в Нью-Йорке",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Kevin - Allein zu Haus 2",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "小鬼當家2",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Solo en casa 2: Perdido en Nueva York",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "Evdə Tək 2",
                    "language": "AZ",
                    "type": null
                }
            ],
            "status": null,
            "ageRating": 0,
            "ratingMpaa": "pg",
            "shortDescription": "Неугомонный малыш Кевин в одиночку покоряет Нью-Йорк. Очередной шедевр от Джона Хьюза и Криса Коламбуса",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000170ed5eac70d1cc0e4843a4e73c8c/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.695,
                "imdb": 6.9,
                "filmCritics": 6.7,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 618160,
                "imdb": 461543,
                "filmCritics": 195,
                "russianFilmCritics": 1,
                "await": 0
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/CpLAfXgSNeNRRbRzPrTuzKmIHO.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/CpLAfXgSNeNRRbRzPrTuzKmIHO.jpg"
            },
            "movieLength": 109,
            "id": 104992,
            "type": "movie",
            "name": "Дьявол носит Prada",
            "description": "Мечтающая стать журналисткой провинциальная девушка Энди по окончании университета получает должность помощницы всесильной Миранды Пристли, деспотичного редактора одного из крупнейших нью-йоркских журналов мод. Энди всегда мечтала о такой работе, не зная, с каким нервным напряжением это будет связано…",
            "year": 2006,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/39a5e5e5-fea5-4c18-964e-40c4dfa7c995/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/39a5e5e5-fea5-4c18-964e-40c4dfa7c995/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Франция"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Devil Wears Prada",
            "enName": null,
            "names": [
                {
                    "name": "Дьявол носит Prada"
                },
                {
                    "name": "The Devil Wears Prada"
                },
                {
                    "name": "时尚女魔头",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Diavolul se imbraca de la Prada",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Saatan kannab Pradat",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Eshmaki atarebs pradas",
                    "language": "GE",
                    "type": null
                },
                {
                    "name": "Hudicevka v Pradi",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "Дьявол носит «Prada»",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Vrag nosi Pradu",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Diabel ubiera sie u Prady",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Ir velnias devi Prada",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Đavo nosi Pradu",
                    "language": "RS",
                    "type": null
                },
                {
                    "name": "Диявол носить \"Прада\"",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Djävulen bär Prada",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "악마는 프라다를 입는다",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "O Diabo Veste Prada",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Şeytan Marka Giyer",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Şeytan Prada Geyiner",
                    "language": "AZ",
                    "type": null
                }
            ],
            "ratingMpaa": "pg13",
            "shortDescription": "Юная карьеристка сталкивается с изнанкой гламура. В главных ролях — Энн Хэтэуэй и Мэрил Стрип",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/200035/2a000001725515009edce05c53e3ccf94a56/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 749374,
            "name": "Атака титанов",
            "alternativeName": "Shingeki no kyojin",
            "names": [
                {
                    "name": "Атака титанов",
                    "language": "RU",
                    "type": "Russian title on kinopoisk"
                },
                {
                    "name": "Shingeki no kyojin",
                    "language": null,
                    "type": "Original title on kinopoisk"
                },
                {
                    "name": "দানবের উপর আক্রমণ",
                    "language": "BD",
                    "type": null
                },
                {
                    "name": "Атаката на Титаните",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Ataque dos Titãs",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "自由之翼",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Shingeki no Kyojin The Final Season",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "进击的巨人-TV动画",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "进击的巨人",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "进击的巨人 最终季",
                    "language": "CN",
                    "type": "Season 4"
                },
                {
                    "name": "进击的巨人OAD",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "进击的巨人 最终季 完结篇",
                    "language": "CN",
                    "type": "Season 5"
                },
                {
                    "name": "Útok Titánů",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Attack on Titan",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "هجوم العمالقة",
                    "language": "EG",
                    "type": null
                },
                {
                    "name": "L'Attaque des Titans (Shingeki no Kyojin)",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "L'Attaque des Titans",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Shingeki no Kyojin",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "進擊的巨人",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "מתקפת הטיטנים",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "התקפה על הטיטאן",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "מתקפה על הטיטן",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "L'attacco dei giganti",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "进撃の巨人",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Shingeki no Kyojin",
                    "language": "JP",
                    "type": "Romaji"
                },
                {
                    "name": "SNK",
                    "language": "JP",
                    "type": "Abbreviation"
                },
                {
                    "name": "進撃の巨人 悔いなき選択",
                    "language": "JP",
                    "type": "OAD title"
                },
                {
                    "name": "Shingeki no Kyojin: Kuinaki Sentaku",
                    "language": "JP",
                    "type": "OAD title"
                },
                {
                    "name": "進撃の巨人 LOST GIRLS",
                    "language": "JP",
                    "type": "OAD title"
                },
                {
                    "name": "Shingeki no Kyojin Lost Girls",
                    "language": "JP",
                    "type": "OAD title"
                },
                {
                    "name": "Attack on Titan",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "هجوم العمالقة",
                    "language": "MA",
                    "type": null
                },
                {
                    "name": "Atak Tytanów",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "هجوم العمالقة",
                    "language": "PS",
                    "type": null
                },
                {
                    "name": "Вторжение титанов",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "Shingeki no Kyojin",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Атакуючий титан",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Атака на титана",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Attack on Titan: Shingeki no Kyojin",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "Attack on Titan: No Regrets",
                    "language": "US",
                    "type": "OAD title"
                },
                {
                    "name": "Attack on Titan: Lost Girls",
                    "language": "US",
                    "type": "OAD title"
                },
                {
                    "name": "Attack on Titan: The Final Season",
                    "language": "US",
                    "type": "Season 4 title"
                },
                {
                    "name": "Attack on Titan: The Final Season THE FINAL CHAPTERS",
                    "language": "US",
                    "type": "Season 4 Part 3 title"
                },
                {
                    "name": "هجوم العمالقة",
                    "language": "YE",
                    "type": null
                }
            ],
            "type": "anime",
            "typeNumber": 4,
            "year": 2013,
            "description": "Уже многие годы человечество ведёт борьбу с титанами — огромными существами, которые не обладают особым интеллектом, зато едят людей и получают от этого удовольствие. После продолжительной борьбы остатки человечества построили высокую стену, окружившую страну людей, через которую титаны пройти не могли. С тех пор прошло сто лет, люди мирно живут под защитой стены. Но однажды подростки Эрен и Микаса становятся свидетелями страшного события — участок стены разрушается супертитаном, появившимся прямо из воздуха. Титаны нападают на город, и дети в ужасе видят, как один из монстров заживо съедает мать Эрена. Мальчик клянётся, что убьёт всех титанов и отомстит за человечество.",
            "shortDescription": "Люди сражаются с титанами, которые мечтают их съесть. Финал самого эпичного аниме современности",
            "status": "completed",
            "rating": {
                "kp": 8.716,
                "imdb": 9.1,
                "filmCritics": 0,
                "russianFilmCritics": 83.3333,
                "await": null
            },
            "votes": {
                "kp": 615354,
                "imdb": 500535,
                "filmCritics": 0,
                "russianFilmCritics": 6,
                "await": 13
            },
            "movieLength": null,
            "totalSeriesLength": null,
            "seriesLength": 24,
            "ratingMpaa": null,
            "ageRating": 18,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/e42e60bc-0772-4a3a-a24f-4218febf9386/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/e42e60bc-0772-4a3a-a24f-4218febf9386/x1000"
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg"
            },
            "genres": [
                {
                    "name": "аниме"
                },
                {
                    "name": "мультфильм"
                },
                {
                    "name": "фантастика"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "боевик"
                },
                {
                    "name": "фэнтези"
                }
            ],
            "countries": [
                {
                    "name": "Япония"
                }
            ],
            "releaseYears": [
                {
                    "start": 2013,
                    "end": 2023
                }
            ],
            "top10": null,
            "top250": 8,
            "isSeries": true,
            "ticketsOnSale": false,
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/oMld9X6b6qPYeD0PhOgL3lWQ9RN.png",
                "previewUrl": "https://imagetmdb.com/t/p/w500/oMld9X6b6qPYeD0PhOgL3lWQ9RN.png"
            },
            "enName": "Attack on Titan: Shingeki no Kyojin"
        },
        {
            "id": 1043758,
            "type": "movie",
            "name": "Паразиты",
            "rating": {
                "kp": 8.021,
                "imdb": 8.5,
                "filmCritics": 9.4,
                "russianFilmCritics": 94.7368,
                "await": null
            },
            "description": "Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале, воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак. Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.",
            "votes": {
                "kp": 615062,
                "imdb": 943268,
                "filmCritics": 482,
                "russianFilmCritics": 19,
                "await": 2171
            },
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/aae3a928-6465-4bed-9af4-16929a44fd79/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/aae3a928-6465-4bed-9af4-16929a44fd79/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "Корея Южная"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Gisaengchung",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg"
            },
            "enName": null,
            "movieLength": 131,
            "names": [
                {
                    "name": "Паразиты"
                },
                {
                    "name": "Gisaengchung"
                },
                {
                    "name": "Parasite: Black & White",
                    "language": "GB",
                    "type": "Noir Version"
                },
                {
                    "name": "ชนชั้นปรสิต",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "パラサイト 半地下の家族：2019",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "PARASITE",
                    "language": "KR",
                    "type": "Daum Movie"
                },
                {
                    "name": "Parásitos",
                    "language": "ES",
                    "type": "Castilian Spanish"
                },
                {
                    "name": "Parazit",
                    "language": "AZ",
                    "type": null
                }
            ],
            "status": null,
            "ageRating": 18,
            "ratingMpaa": "r",
            "shortDescription": "Семья бедняков обманом получает работу в доме богачей. Южнокорейская драмеди, которая взяла четыре «Оскара»",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000017bd4883ea891e79c2637db870c65/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 775273,
            "type": "cartoon",
            "name": "Душа",
            "rating": {
                "kp": 8.362,
                "imdb": 8,
                "filmCritics": 8.3,
                "russianFilmCritics": 77.2727,
                "await": null
            },
            "description": "Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у легендарной саксофонистки и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22, которая уже много веков не может найти свою искру и отправиться на Землю.",
            "votes": {
                "kp": 614602,
                "imdb": 375297,
                "filmCritics": 361,
                "russianFilmCritics": 22,
                "await": 10940
            },
            "year": 2020,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/ce2e470c-861c-4995-b6b1-54e1dd4932d4/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/ce2e470c-861c-4995-b6b1-54e1dd4932d4/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "фэнтези"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                },
                {
                    "name": "музыка"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "Soul",
            "enName": null,
            "names": [
                {
                    "name": "Душа"
                },
                {
                    "name": "Soul"
                },
                {
                    "name": "Själen",
                    "language": "SE",
                    "type": null
                },
                {
                    "name": "Sjæl",
                    "language": "DK",
                    "type": null
                },
                {
                    "name": "Soul: Uma Aventura com Alma",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Jiwa",
                    "language": "ID",
                    "type": null
                },
                {
                    "name": "روح",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "靈魂奇遇記",
                    "language": "HK",
                    "type": null
                },
                {
                    "name": "سول مغامرة ذاتية",
                    "language": "SA",
                    "type": null
                },
                {
                    "name": "Disney and Pixar's Soul",
                    "language": "US",
                    "type": "promotional title"
                },
                {
                    "name": "Жан",
                    "language": "KZ",
                    "type": null
                },
                {
                    "name": "Duša",
                    "language": "SI",
                    "type": null
                }
            ],
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg"
            },
            "movieLength": 106,
            "shortDescription": "Джазмен хочет сбежать с того света на концерт. Фантазия о призвании и важных мелочах жизни от автора «Вверх»",
            "status": null,
            "ratingMpaa": "pg",
            "ticketsOnSale": false,
            "ageRating": 6,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a00000179e695b1277b8740b5bfcf77a6bf/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 8.075,
                "imdb": 8.1,
                "filmCritics": 8.9,
                "russianFilmCritics": 87.5,
                "await": null
            },
            "votes": {
                "kp": 613820,
                "imdb": 778417,
                "filmCritics": 382,
                "russianFilmCritics": 8,
                "await": 19065
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg"
            },
            "movieLength": 95,
            "id": 645118,
            "type": "cartoon",
            "name": "Головоломка",
            "description": "В голове у обычной 11-летней школьницы Райли живут пять базовых эмоций: Радость, Грусть, Страх, Гнев и Отвращение. Они каждый день помогают ей справляться с проблемами, руководя всеми ее поступками. Вдруг выясняется, что Райли и ее родителям предстоит переезд из небольшого уютного городка в шумный и людный мегаполис. Каждая из эмоций считает, что именно она лучше прочих знает, что нужно делать в этой непростой ситуации, и в голове у девочки наступает полный хаос.",
            "year": 2015,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/fe96f444-f022-4d14-a40f-7c1f35cc6ab8/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/fe96f444-f022-4d14-a40f-7c1f35cc6ab8/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "семейный"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "фэнтези"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 3,
            "alternativeName": "Inside Out",
            "enName": null,
            "names": [
                {
                    "name": "Головоломка"
                },
                {
                    "name": "Inside Out"
                },
                {
                    "name": "Ma-Hud-Sa-Jan-A-Rom-On-La-Weng",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Intensamente",
                    "language": "EC",
                    "type": null
                },
                {
                    "name": "Intensa-mente",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "W głowie się nie mieści",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Ters Yüz",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "Alles steht Kopf",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Vice-versa",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Sens dessus dessous",
                    "language": "CA",
                    "type": null
                },
                {
                    "name": "Del revés",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Tərs Üz",
                    "language": "AZ",
                    "type": null
                }
            ],
            "ageRating": 6,
            "ratingMpaa": "pg",
            "shortDescription": "Пять человеческих эмоций должны договориться и помочь девочке справиться с собой. «Оскар» за лучший мультфильм",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/224348/2a00000178cac49aa0c6e467653242bb4da5/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.997,
                "imdb": 8.4,
                "filmCritics": 7.8,
                "russianFilmCritics": 80,
                "await": null
            },
            "votes": {
                "kp": 610508,
                "imdb": 1570583,
                "filmCritics": 335,
                "russianFilmCritics": 10,
                "await": 13069
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/1Jpkm9qZcsT0mSyVXgs4VlGjPNI.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/1Jpkm9qZcsT0mSyVXgs4VlGjPNI.jpg"
            },
            "movieLength": 153,
            "id": 9691,
            "type": "movie",
            "name": "Бесславные ублюдки",
            "description": "Вторая мировая война. В оккупированной немцами Франции группа американских солдат-евреев наводит страх на нацистов, жестоко убивая и скальпируя солдат.",
            "year": 2009,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/5e6dde98-74a8-4c02-b003-01d48e091025/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/5e6dde98-74a8-4c02-b003-01d48e091025/x1000"
            },
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "военный"
                }
            ],
            "countries": [
                {
                    "name": "Германия"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Inglourious Basterds",
            "enName": null,
            "names": [
                {
                    "name": "Бесславные ублюдки"
                },
                {
                    "name": "Inglourious Basterds"
                },
                {
                    "name": "Bękarty wojny",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "پست فطرت های لعنتی",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "Άδωξοι Μπάσταρδη",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Kunniattomat paskiaiset",
                    "language": "FI",
                    "type": null
                },
                {
                    "name": "Bastardos sin gloria",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "Maleïts Malparits",
                    "language": "ES",
                    "type": "catalan tittle"
                },
                {
                    "name": "Sacanas Sem Lei",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Malditos Bastardos",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Becstelen Brigantyk",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "Bastardos Inglórios",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "Bastardos sin gloria",
                    "language": "MX",
                    "type": null
                },
                {
                    "name": "Bastardos sin gloria",
                    "language": "PE",
                    "type": null
                },
                {
                    "name": "besslavnyye ublyudki",
                    "language": "RU",
                    "type": "Transliteration"
                },
                {
                    "name": "Безславнi виродки",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "바스터즈: 거친 녀석들",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Inglourious Bastards",
                    "language": "US",
                    "type": "Mis-spelling"
                },
                {
                    "name": "Inglorious Basterds",
                    "language": "US",
                    "type": "Mis-spelling"
                },
                {
                    "name": "Nehanební Bastardi",
                    "language": "SK",
                    "type": null
                },
                {
                    "name": "Hanebný pancharti",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Bastardi senza gloria",
                    "language": "IT",
                    "type": null
                },
                {
                    "name": "Nemilosrdni gadovi",
                    "language": "HR",
                    "type": null
                },
                {
                    "name": "Ticalosi fara glorie",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Бясслаўныя вырадкі",
                    "language": "BY",
                    "type": null
                },
                {
                    "name": "Vääritud tõprad",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Serefsiz Alçaqlar",
                    "language": "AZ",
                    "type": null
                },
                {
                    "name": "惡棍特工",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Гадни копилета",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Bastardos Sin Gloria",
                    "language": "CO",
                    "type": null
                },
                {
                    "name": "Neslavne barabe",
                    "language": "SI",
                    "type": null
                },
                {
                    "name": "イングロリアス・バスターズ",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Le commando des bâtards",
                    "language": "CA",
                    "type": "French title"
                },
                {
                    "name": "Negarbingi šunsnukiai",
                    "language": "LT",
                    "type": null
                },
                {
                    "name": "Soysuzlar Çetesi",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "바스터즈-거친 녀석들",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "The Inglorious Bastards",
                    "language": "US",
                    "type": "Mis-spelling"
                },
                {
                    "name": "ยุทธการเดือดเชือดนาซี",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Bēdīgi slavenie mērgļi",
                    "language": "LV",
                    "type": null
                },
                {
                    "name": "Bastardos Sin Gloria",
                    "language": "CL",
                    "type": null
                },
                {
                    "name": "Những Kẻ Khốn Kiếp",
                    "language": "VN",
                    "type": null
                }
            ],
            "ageRating": 18,
            "ratingMpaa": "r",
            "shortDescription": "Американский спецотряд жестоко расправляется с нацистами. Пародия на военные фильмы от Квентина Тарантино",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016e4acd33a1edfdb81b7818353e04/orig"
            },
            "top10": null,
            "top250": 125,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1326397,
            "type": "movie",
            "name": "Батя",
            "rating": {
                "kp": 7.658,
                "imdb": 6.7,
                "filmCritics": 0,
                "russianFilmCritics": 100,
                "await": null
            },
            "description": "История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.",
            "votes": {
                "kp": 609895,
                "imdb": 1502,
                "filmCritics": 0,
                "russianFilmCritics": 8,
                "await": 4898
            },
            "year": 2020,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/907e3552-9a1e-48d1-8a01-d013a76a8343/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/907e3552-9a1e-48d1-8a01-d013a76a8343/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "мелодрама"
                }
            ],
            "countries": [
                {
                    "name": "Россия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": null,
            "enName": null,
            "names": [
                {
                    "name": "Батя"
                }
            ],
            "ageRating": 18,
            "movieLength": 76,
            "ratingMpaa": null,
            "shortDescription": "По дороге на юбилей отца Максим вспоминает свое постсоветское детство. Комедия с Владимиром Вдовиченковым",
            "ticketsOnSale": false,
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/uIpQJy5Jrl4wNPybAO4UWRuLbRO.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/uIpQJy5Jrl4wNPybAO4UWRuLbRO.jpg"
            },
            "logo": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/kdDuFF0edVMmqIUtNikfwJ6wq3O.png",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/kdDuFF0edVMmqIUtNikfwJ6wq3O.png"
            },
            "top10": null,
            "top250": null,
            "status": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.577,
                "imdb": 7.3,
                "filmCritics": 6.8,
                "russianFilmCritics": 67.8571,
                "await": null
            },
            "votes": {
                "kp": 608299,
                "imdb": 263074,
                "filmCritics": 413,
                "russianFilmCritics": 28,
                "await": 12418
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg"
            },
            "movieLength": 134,
            "id": 804662,
            "type": "movie",
            "name": "Круэлла",
            "description": "Великобритания, 1960-е годы. Эстелла была необычным ребёнком, и особенно трудно ей было мириться со всякого рода несправедливостью. Вылетев из очередной школы, она с мамой отправляется в Лондон. По дороге они заезжают в особняк известной модельерши по имени Баронесса, где в результате ужасного несчастного случая мама погибает. Добравшись до Лондона, Эстелла знакомится с двумя мальчишками — уличными мошенниками Джаспером и Хорасом.\n\n10 лет спустя та же компания промышляет на улицах британской столицы мелким воровством, но Эстелла никак не может оставить мечту сделать карьеру в мире моды. Хитростью устроившись в фешенебельный универмаг, девушка привлекает внимание Баронессы, и та берёт её к себе в штат дизайнеров.",
            "year": 2021,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/9bb0f260-1c5f-4698-91cc-de481bfd0f55/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/9bb0f260-1c5f-4698-91cc-de481bfd0f55/x1000"
            },
            "genres": [
                {
                    "name": "комедия"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Канада"
                },
                {
                    "name": "Ирландия"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Cruella",
            "enName": null,
            "names": [
                {
                    "name": "Круэлла"
                },
                {
                    "name": "Cruella"
                },
                {
                    "name": "Стервелла",
                    "language": "RU",
                    "type": null
                },
                {
                    "name": "库伊拉",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "时尚恶女：库伊拉",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "黑白魔女",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "库伊拉·德维尔",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "크루엘라",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "黑白魔后",
                    "language": "HK",
                    "type": null
                }
            ],
            "ageRating": 12,
            "ratingMpaa": "pg13",
            "shortDescription": "Бунтарка покоряет модный мир Лондона. Предыстория злодейки из «101 далматинца» с «Оскаром» за костюмы",
            "ticketsOnSale": false,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000017ede1851f4a06c1b30a7fce95038/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 195334,
            "type": "movie",
            "name": "Престиж",
            "rating": {
                "kp": 8.518,
                "imdb": 8.5,
                "filmCritics": 7.1,
                "russianFilmCritics": 33.3333,
                "await": null
            },
            "description": "Роберт и Альфред - фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну.\n\nОни готовы на все, чтобы выведать друг у друга секреты фантастических трюков и сорвать их исполнение. Непримиримая вражда, вспыхнувшая между ними, начинает угрожать жизни окружающих их людей…",
            "votes": {
                "kp": 607624,
                "imdb": 1430419,
                "filmCritics": 206,
                "russianFilmCritics": 3,
                "await": 6
            },
            "year": 2006,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/0e1384ae-6367-4bba-9e5d-d91c6625371e/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/0e1384ae-6367-4bba-9e5d-d91c6625371e/x1000"
            },
            "genres": [
                {
                    "name": "триллер"
                },
                {
                    "name": "фантастика"
                },
                {
                    "name": "драма"
                },
                {
                    "name": "детектив"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "The Prestige",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/xBDE2d6HM1aBKQRu4IT7SfPD9fs.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/xBDE2d6HM1aBKQRu4IT7SfPD9fs.jpg"
            },
            "enName": null,
            "movieLength": 130,
            "names": [
                {
                    "name": "Престиж"
                },
                {
                    "name": "The Prestige"
                },
                {
                    "name": "顶尖对决",
                    "language": "CN",
                    "type": "台"
                },
                {
                    "name": "El Truco Final (El Prestigio)",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Prestiż",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "El Truco Final",
                    "language": "CO",
                    "type": null
                },
                {
                    "name": "프레스티지",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "プレステージ",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "حیثیت",
                    "language": "IR",
                    "type": null
                },
                {
                    "name": "O Grande Truque",
                    "language": "BR",
                    "type": null
                },
                {
                    "name": "O Terceiro Passo",
                    "language": "PT",
                    "type": null
                },
                {
                    "name": "Prestij",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "A tökéletes trükk",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "致命魔术",
                    "language": "CN",
                    "type": null
                },
                {
                    "name": "Ảo Thuật Gia Đấu Trí",
                    "language": "VN",
                    "type": null
                }
            ],
            "status": null,
            "ratingMpaa": "pg13",
            "shortDescription": "Вражда двух иллюзионистов выходит на новый уровень. Фильм Кристофера Нолана с Дэвидом Боуи в роли Николы Теслы",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a00000170ed68067f4365ed815233444c93/orig"
            },
            "top10": null,
            "top250": 72,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 591929,
            "type": "animated-series",
            "name": "Гравити Фолз",
            "rating": {
                "kp": 8.96,
                "imdb": 8.9,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "История рассказывает о приключениях близнецов, брата и сестры Диппера и Мэйбл Пайнс, чьи летние планы отправляются в чулан, когда родители оправляют их к дальнему родственнику в тихий городок Гравити Фолз. Но так ли прост этот город, родственник и жители, и какие тайны ждут своих первооткрывателей?",
            "votes": {
                "kp": 606197,
                "imdb": 132917,
                "filmCritics": 0,
                "russianFilmCritics": 1,
                "await": 3
            },
            "year": 2012,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/04954219-061a-4646-a7d6-054fdc34b053/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/04954219-061a-4646-a7d6-054fdc34b053/x1000"
            },
            "genres": [
                {
                    "name": "мультфильм"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "детектив"
                },
                {
                    "name": "приключения"
                },
                {
                    "name": "семейный"
                },
                {
                    "name": "фантастика"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 5,
            "alternativeName": "Gravity Falls",
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/l0XvAI856XdyDYEfr1njztjH7u0.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/l0XvAI856XdyDYEfr1njztjH7u0.jpg"
            },
            "enName": "Gravity Falls",
            "movieLength": null,
            "names": [
                {
                    "name": "Гравити Фолз"
                },
                {
                    "name": "Gravity Falls"
                },
                {
                    "name": "Willkommen in Gravity Falls",
                    "language": "AT",
                    "type": null
                },
                {
                    "name": "Тайните на Гравити Фолс",
                    "language": "BG",
                    "type": null
                },
                {
                    "name": "Městečko záhad",
                    "language": "CZ",
                    "type": null
                },
                {
                    "name": "Willkommen in Gravity Falls",
                    "language": "DE",
                    "type": null
                },
                {
                    "name": "Souvenirs de Gravity Falls",
                    "language": "FR",
                    "type": null
                },
                {
                    "name": "Ο Μυστικός Κόσμος του Gravity Falls",
                    "language": "GR",
                    "type": null
                },
                {
                    "name": "Rejtélyek városkája",
                    "language": "HU",
                    "type": null
                },
                {
                    "name": "גרוויטי פולס",
                    "language": "IL",
                    "type": null
                },
                {
                    "name": "怪奇ゾーングラビティーフォールズ",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "디퍼와 메이블의 미스터리 모험",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "그래비티 폴즈",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "Wodogrzmoty Małe",
                    "language": "PL",
                    "type": null
                },
                {
                    "name": "Ciudăţeni",
                    "language": "RO",
                    "type": null
                },
                {
                    "name": "Esrarengiz Kasaba",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "神秘小鎮大冒險",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Таємниці Гравіті Фолз",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Gravity Falls: Shorts",
                    "language": "US",
                    "type": "specials"
                }
            ],
            "status": "completed",
            "ratingMpaa": null,
            "shortDescription": "Близнецы проводят каникулы у странного прадядюшки. Тайны и аномалии в захватывающем мультсериале Алекса Хирша",
            "ticketsOnSale": false,
            "ageRating": 12,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a00000170cd8dc5cbb1908b56731c972792/orig"
            },
            "releaseYears": [
                {
                    "start": 2012,
                    "end": 2016
                }
            ],
            "top10": null,
            "top250": 7,
            "isSeries": true,
            "seriesLength": 22,
            "totalSeriesLength": null
        },
        {
            "status": null,
            "rating": {
                "kp": 7.668,
                "imdb": 7.6,
                "filmCritics": 7.9,
                "russianFilmCritics": 100,
                "await": null
            },
            "votes": {
                "kp": 604630,
                "imdb": 837162,
                "filmCritics": 580,
                "russianFilmCritics": 13,
                "await": 57655
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/oRiUKwDpcqDdoLwPoA4FIRh3hqY.jpg",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/oRiUKwDpcqDdoLwPoA4FIRh3hqY.jpg"
            },
            "movieLength": 161,
            "id": 1047883,
            "type": "movie",
            "name": "Однажды в… Голливуде",
            "description": "1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
            "year": 2019,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/70580cf5-3287-42d6-8a76-2c715e2f6172/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/70580cf5-3287-42d6-8a76-2c715e2f6172/x1000"
            },
            "genres": [
                {
                    "name": "драма"
                },
                {
                    "name": "комедия"
                }
            ],
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                },
                {
                    "name": "Китай"
                }
            ],
            "typeNumber": 1,
            "alternativeName": "Once Upon a Time in...  Hollywood",
            "enName": null,
            "names": [
                {
                    "name": "Однажды в… Голливуде"
                },
                {
                    "name": "Once Upon a Time in...  Hollywood"
                },
                {
                    "name": "Bilo jednom… u Holivudu",
                    "language": "RS",
                    "type": "translit"
                },
                {
                    "name": "Ükskord Hollywoodis",
                    "language": "EE",
                    "type": null
                },
                {
                    "name": "Hǎoláiwù wǎngshì",
                    "language": "CN",
                    "type": "pinyin"
                },
                {
                    "name": "원스 어폰 어 타임 인 할리우드",
                    "language": "KR",
                    "type": null
                },
                {
                    "name": "กาลครั้งหนึ่งใน...ฮอลลีวู้ด",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "Bir Zamanlar Hollywood'da",
                    "language": "TR",
                    "type": null
                },
                {
                    "name": "ワンス・アポン・ア・タイム・イン・ハリウッド：2019",
                    "language": "JP",
                    "type": null
                },
                {
                    "name": "Il était une fois… à Hollywood",
                    "language": "FR",
                    "type": "Français"
                },
                {
                    "name": "Érase una vez en... Hollywood",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "C'era una volta a… Hollywood",
                    "language": "IT",
                    "type": null
                }
            ],
            "ratingMpaa": "r",
            "shortDescription": "Можно ли переписать историю? Самый ностальгический фильм Тарантино — с Шэрон Тейт, Брюсом Ли и Чарли Мэнсоном",
            "ticketsOnSale": false,
            "ageRating": 18,
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000178dae3629ccf557fed10e1b12dd5/orig"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        }
    ]
  });
});

// Serverni portni eshitish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishga tushdi`);
});
