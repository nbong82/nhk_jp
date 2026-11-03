// NHK 일본말 첫걸음 (やさしい日本語) 1강~48강 완전 데이터셋 (전 48과 완결판)
const courseData = {
  "courseTitle": "NHK 일본말 첫걸음 (やさしい日本語) 48강 완결",
  "totalLessons": 48,
  "lessons": [
    {
      "lesson": 1,
      "title": "はるさんハウスはどこですか (하루상하우스는 어디예요?)",
      "canDo": "장소를 물을 수 있다",
      "keyPhrase": {
        "jp": "はるさんハウスはどこですか。",
        "romaji": "Haru-san-Hausu wa doko desu ka.",
        "kr": "하루상하우스는 어디예요?",
        "desc": "장소를 물을 때는 '[장소] wa doko desu ka'라고 질문합니다. 조사 'wa'는 명사에 붙어 주제를 나타내며, 히라가나로 'は(ha)'라고 쓰고 'wa'라고 발음합니다. 의문사 'doko(어디)' 뒤에 'desu ka'를 붙여 억양을 올려 발음하면 의문문이 됩니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すみません。はるさんハウスはどこですか。",
          "romaji": "Sumimasen. Haru-san-Hausu wa doko desu ka.",
          "kr": "저기요! 하루상하우스는 어디예요?",
          "note": "すみません(저기요) / どこ(어디)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "はるさんハウス？ あれ？ ぼくたちのうちだよね。",
          "romaji": "Haru-san-Hausu? Are? Bokutachi no uchi da yo ne.",
          "kr": "하루상하우스? 어? 우리가 사는 집이네.",
          "note": "ぼくたち(우리) / うち(집)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "すぐ近くです。一緒に行きましょう。",
          "romaji": "Sugu chikaku desu. Issho ni ikimashoo.",
          "kr": "바로 근처예요. 같이 가요.",
          "note": "すぐ近く(바로 근처) / 一緒に(같이)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "こっちだよ。",
          "romaji": "Kocchi da yo.",
          "kr": "이쪽이에요.",
          "note": "こっち(이쪽)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。ありがとうございます。",
          "romaji": "Hai. Arigatoo gozaimasu.",
          "kr": "네. 고맙습니다.",
          "note": "ありがとうございます(고맙습니다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。トイレはどこですか。",
          "romaji": "Sumimasen. Toire wa doko desu ka.",
          "kr": "저기요! 화장실은 어디예요?"
        },
        {
          "speaker": "B",
          "jp": "あそこです。",
          "romaji": "Asoko desu.",
          "kr": "저기예요."
        }
      ],
      "practice": [
        {
          "q": "역(駅)",
          "answerJp": "すみません。駅はどこですか。",
          "answerRomaji": "Sumimasen. Eki wa doko desu ka.",
          "kr": "저기요! 역은 어디예요?"
        },
        {
          "q": "편의점(コンビニ)",
          "answerJp": "すみません。コンビニはどこですか。",
          "answerRomaji": "Sumimasen. Konbini wa doko desu ka.",
          "kr": "저기요! 편의점은 어디예요?"
        }
      ],
      "bonus": {
        "jp": "ありがとうございます。",
        "romaji": "Arigatoo gozaimasu.",
        "kr": "고맙습니다.",
        "desc": "감사의 표현입니다. 상대방이 친구나 가족 등 친근한 사이라면 'ありがとう(arigatoo)'라고 짧게 말해도 됩니다."
      }
    },
    {
      "lesson": 2,
      "title": "タムです。学生です (탐이에요. 학생이에요.)",
      "canDo": "이름과 직업을 말하고 자기소개를 할 수 있다",
      "keyPhrase": {
        "jp": "タムです。学生です。",
        "romaji": "Tamu desu. Gakusee desu.",
        "kr": "탐이에요. 학생이에요.",
        "desc": "'[이름/직업] desu'처럼 'desu'는 명사에 붙어 문장을 만듭니다. 'A wa B desu(A는 B예요)' 형식에서 'Watashi wa(저는)'는 문맥상 자연스럽게 생략됩니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ただいま。",
          "romaji": "Tadaima.",
          "kr": "다녀왔습니다.",
          "note": "ただいま(다녀왔습니다)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "はるさん、新しい住人が着きましたよ。",
          "romaji": "Haru-san, atarashii juunin ga tsukimashita yo.",
          "kr": "하루상, 새 입주자가 도착했어요.",
          "note": "新しい(새로운) / 住人(입주자) / 着く(도착하다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "はーい。ようこそいらっしゃいました。",
          "romaji": "Haai. Yookoso irasshaimashita.",
          "kr": "네. 어서 오세요. 잘 오셨어요.",
          "note": "ようこそ(환영합니다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "え、ロボット？",
          "romaji": "E, robotto?",
          "kr": "어! 로봇?",
          "note": "ロボット(로봇)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "そう。大家のはるさんです。",
          "romaji": "Soo. Ooya no Haru-san desu.",
          "kr": "그래요, 집주인 하루상이에요.",
          "note": "大家(집주인)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はじめまして。タムです。学生です。よろしくお願いします。",
          "romaji": "Hajimemashite. Tamu desu. Gakusee desu. Yoroshiku onegai-shimasu.",
          "kr": "처음 뵙겠습니다. 탐이에요. 학생이에요. 잘 부탁합니다.",
          "note": "はじめまして(처음 뵙겠습니다) / 学生(학생) / よろしくお願いします(잘 부탁합니다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "はじめまして。アンナです。学生です。",
          "romaji": "Hajimemashite. Anna desu. Gakusee desu.",
          "kr": "처음 뵙겠습니다. 안나예요. 학생이에요."
        },
        {
          "speaker": "B",
          "jp": "はじめまして。鈴木です。",
          "romaji": "Hajimemashite. Suzuki desu.",
          "kr": "처음 뵙겠습니다. 스즈키예요."
        }
      ],
      "practice": [
        {
          "q": "토마스(トーマス) / 회사원(会社員)",
          "answerJp": "はじめまして。トーマスです。会社員です。",
          "answerRomaji": "Hajimemashite. Toomasu desu. Kaishain desu.",
          "kr": "처음 뵙겠습니다. 토마스예요. 회사원입니다."
        },
        {
          "q": "에린(エリン) / 교사(教師)",
          "answerJp": "はじめまして。エリンです。教師です。",
          "answerRomaji": "Hajimemashite. Erin desu. Kyooshi desu.",
          "kr": "처음 뵙겠습니다. 에린이에요. 교사입니다."
        }
      ],
      "bonus": {
        "jp": "よろしくお願いします。",
        "romaji": "Yoroshiku onegai-shimasu.",
        "kr": "잘 부탁합니다.",
        "desc": "앞으로 신세 질 사람에게 하는 인사입니다. 상대방이 친구나 연하일 경우에는 'よろしく(yoroshiku)'라고 해도 됩니다."
      }
    },
    {
      "lesson": 3,
      "title": "ベトナムから来ました (베트남에서 왔어요.)",
      "canDo": "출신지를 말할 수 있다",
      "keyPhrase": {
        "jp": "ベトナムから来ました。",
        "romaji": "Betonamu kara kimashita.",
        "kr": "베트남에서 왔어요.",
        "desc": "출신지를 말할 때는 '[출신지] kara kimashita'를 사용합니다. 조사 'kara(에서)'는 출발점을 나타내며, 'kimashita'는 오다(kuru)의 과거형입니다. 간단히 'Betonamu kara desu'라고 해도 됩니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "タムさん、たくさん食べてね。",
          "romaji": "Tamu-san, takusan tabete ne.",
          "kr": "탐 씨, 많이 먹어요.",
          "note": "たくさん(많이) / 食べる(먹다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。タムです。ベトナムから来ました。",
          "romaji": "Hai. Tamu desu. Betonamu kara kimashita.",
          "kr": "네. 탐이에요. 베트남에서 왔어요.",
          "note": "来る(오다) / 来ました(왔습니다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ミーヤーです。中国からです。写真家です。",
          "romaji": "Miiyaa desu. Chuugoku kara desu. Shashinka desu.",
          "kr": "미야예요. 중국에서 왔어요. 사진작가예요.",
          "note": "中国(중국) / 写真家(사진작가)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "ぼくは海斗。学生です。",
          "romaji": "Boku wa Kaito. Gakusee desu.",
          "kr": "나는 가이토. 학생이에요.",
          "note": "ぼく(나, 남성형)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "わたくし、大家のはるです。",
          "romaji": "Watakushi, ooya no Haru desu.",
          "kr": "저, 집주인 하루예요.",
          "note": "わたくし(저, 정중형)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "はるさんは何でも知っています。",
          "romaji": "Haru-san wa nan de mo shitte imasu.",
          "kr": "하루상은 뭐든지 알아요.",
          "note": "何でも(무엇이든) / 知っている(알고 있다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "そうですか。よろしくお願いします。",
          "romaji": "Soo desu ka. Yoroshiku onegai-shimasu.",
          "kr": "그렇군요. 잘 부탁합니다.",
          "note": "そうですか(그렇군요)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "どちらからですか。",
          "romaji": "Dochira kara desu ka.",
          "kr": "어디에서 왔어요?"
        },
        {
          "speaker": "B",
          "jp": "アメリカから来ました。",
          "romaji": "Amerika kara kimashita.",
          "kr": "미국에서 왔어요."
        }
      ],
      "practice": [
        {
          "q": "태국(タイ)",
          "answerJp": "タイから来ました。",
          "answerRomaji": "Tai kara kimashita.",
          "kr": "태국에서 왔어요."
        },
        {
          "q": "브라질(ブラジル)",
          "answerJp": "ブラジルから来ました。",
          "answerRomaji": "Burajiru kara kimashita.",
          "kr": "브라질에서 왔어요."
        }
      ],
      "bonus": {
        "jp": "そうですか。",
        "romaji": "Soo desu ka.",
        "kr": "그렇군요.",
        "desc": "상대방이 말한 것에 대해 알았다고 맞장구치는 말입니다. 문장 끝의 억양을 올리지 않고 내려서 발음합니다."
      }
    },
    {
      "lesson": 4,
      "title": "大学で日本語を勉強します (대학교에서 일본어를 공부해요.)",
      "canDo": "앞으로 할 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "大学で日本語を勉強します。",
        "romaji": "Daigaku de Nihongo o benkyoo-shimasu.",
        "kr": "대학교에서 일본어를 공부해요.",
        "desc": "앞으로 할 행동을 정중하게 말할 때는 동사의 MASU형(~masu)을 사용합니다. 조사 'de'는 동작이 일어나는 장소(~에서), 'o'는 목적어(~을/를)를 나타냅니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "これ、どこですか。",
          "romaji": "Kore, doko desu ka.",
          "kr": "이거 어디예요?",
          "note": "これ(이것)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "沖縄です。",
          "romaji": "Okinawa desu.",
          "kr": "오키나와예요.",
          "note": "沖縄(오키나와)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "へえ。",
          "romaji": "Hee.",
          "kr": "우와!",
          "note": "へえ(감탄사)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "これは京都です。京都はとてもきれいですよ。",
          "romaji": "Kore wa Kyoto desu. Kyoto wa totemo kiree desu yo.",
          "kr": "이건 교토예요. 교토는 아주 예뻐요.",
          "note": "とても(아주) / きれい(예쁘다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "そうですね。",
          "romaji": "Soo desu ne.",
          "kr": "그렇네요.",
          "note": "そうですね(그렇군요/맞아요)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "タムさんは日本で何をしますか。",
          "romaji": "Tamu-san wa Nihon de nani o shimasu ka.",
          "kr": "탐 씨는 일본에서 무엇을 해요?",
          "note": "何(무엇) / する(하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "大学で日本語を勉強します。",
          "romaji": "Daigaku de Nihongo o benkyoo-shimasu.",
          "kr": "대학교에서 일본어를 공부해요.",
          "note": "大学(대학교) / 勉強する(공부하다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "いいですね。",
          "romaji": "Ii desu ne.",
          "kr": "좋겠네요.",
          "note": "いい(좋다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい、楽しみです。",
          "romaji": "Hai, tanoshimi desu.",
          "kr": "네, 기대돼요.",
          "note": "楽しみ(기대/즐거움)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "日本で何をしますか。",
          "romaji": "Nihon de nani o shimasu ka.",
          "kr": "일본에서 무엇을 해요?"
        },
        {
          "speaker": "B",
          "jp": "買い物をします。",
          "romaji": "Kaimono o shimasu.",
          "kr": "쇼핑을 해요."
        }
      ],
      "practice": [
        {
          "q": "덴푸라(天ぷら) / 먹다(食べる)",
          "answerJp": "天ぷらを食べます。",
          "answerRomaji": "Tenpura o tabemasu.",
          "kr": "덴푸라를 먹어요."
        },
        {
          "q": "가부키(歌舞伎) / 보다(見る)",
          "answerJp": "歌舞伎を見ます。",
          "answerRomaji": "Kabuki o mimasu.",
          "kr": "가부키를 봐요."
        }
      ],
      "bonus": {
        "jp": "楽しみです。",
        "romaji": "Tanoshimi desu.",
        "kr": "기대돼요.",
        "desc": "앞으로 할 일을 즐거움으로 삼아 고대하는 기분을 나타내는 표현입니다."
      }
    },
    {
      "lesson": 5,
      "title": "ラジオで勉強しました (라디오로 공부했어요.)",
      "canDo": "일본어 학습 경험을 말할 수 있다",
      "keyPhrase": {
        "jp": "ラジオで勉強しました。",
        "romaji": "Rajio de benkyoo-shimashita.",
        "kr": "라디오로 공부했어요.",
        "desc": "과거에 한 행동을 나타낼 때는 동사 MASU형의 어미 '~masu'를 '~mashita'로 바꿉니다. 수단이나 도구를 나타낼 때는 조사 'de(~로)'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "タムさん、今日から学校ですね。",
          "romaji": "Tamu-san, kyoo kara gakkoo desu ne.",
          "kr": "탐 씨, 오늘부터 학교네요.",
          "note": "今日(오늘) / 学校(학교)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "あらまあ！どうしたんですか。",
          "romaji": "Aramaa! Doo shitan desu ka.",
          "kr": "어머나! 왜 그래요?",
          "note": "どうした(무슨 일이야)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "日本語が心配です。",
          "romaji": "Nihongo ga shinpai desu.",
          "kr": "일본어가 걱정이에요.",
          "note": "心配(걱정)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "タムさんは日本語、お上手ですよ。",
          "romaji": "Tamu-san wa Nihongo, ojoozu desu yo.",
          "kr": "탐 씨는 일본어 잘하는데요.",
          "note": "上手(능숙함/잘함)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "いいえ、まだまだです。",
          "romaji": "Iie, mada mada desu.",
          "kr": "아니요, 아직 멀었어요.",
          "note": "まだまだ(아직 불충분함)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "ベトナムで勉強したんでしょう？",
          "romaji": "Betonamu de benkyoo-shitan deshoo?",
          "kr": "베트남에서 공부했지요?",
          "note": "でしょう(그렇지요)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい、ラジオで勉強しました。",
          "romaji": "Hai, rajio de benkyoo-shimashita.",
          "kr": "네, 라디오로 공부했어요.",
          "note": "ラジオ(라디오)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "それなら、大丈夫ですよ。",
          "romaji": "Sore nara, daijoobu desu yo.",
          "kr": "그렇다면 괜찮아요.",
          "note": "大丈夫(괜찮음)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "あ、日本語！どうやって勉強しましたか。",
          "romaji": "A, Nihongo! Doo yatte benkyoo-shimashita ka.",
          "kr": "아, 일본어! 어떻게 공부했어요?"
        },
        {
          "speaker": "B",
          "jp": "インターネットで勉強しました。",
          "romaji": "Intaanetto de benkyoo-shimashita.",
          "kr": "인터넷으로 공부했어요."
        }
      ],
      "practice": [
        {
          "q": "애니메이션(アニメ)",
          "answerJp": "アニメで勉強しました。",
          "answerRomaji": "Anime de benkyoo-shimashita.",
          "kr": "애니메이션으로 공부했어요."
        },
        {
          "q": "학교(学校)",
          "answerJp": "学校で勉強しました。",
          "answerRomaji": "Gakkoo de benkyoo-shimashita.",
          "kr": "학교에서 공부했어요."
        }
      ],
      "bonus": {
        "jp": "いいえ、まだまだです。",
        "romaji": "Iie, mada mada desu.",
        "kr": "아니요, 아직 멀었어요.",
        "desc": "상대방에게 칭찬을 받았을 때 겸손하게 대답하는 일본의 대표적인 표현입니다."
      }
    },
    {
      "lesson": 6,
      "title": "この電車は池袋に行きますか (이 전철은 이케부쿠로에 가요?)",
      "canDo": "교통 수단의 행선지를 확인할 수 있다",
      "keyPhrase": {
        "jp": "この電車は池袋に行きますか。",
        "romaji": "Kono densha wa Ikebukuro ni ikimasu ka.",
        "kr": "이 전철은 이케부쿠로에 가요?",
        "desc": "교통 수단의 행선지를 확인할 때는 'Kono [교통수단] wa [장소] ni ikimasu ka'라고 묻습니다. 'kono'는 눈앞의 대상을 가리키며, 조사 'ni'는 목적지를 나타냅니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すみません。",
          "romaji": "Sumimasen.",
          "kr": "저기요!",
          "note": ""
        },
        {
          "role": "Staff",
          "roleLabel": "역무원 (B)",
          "gender": "male",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "この電車は池袋に行きますか。",
          "romaji": "Kono densha wa Ikebukuro ni ikimasu ka.",
          "kr": "이 전철은 이케부쿠로에 가요?",
          "note": "電車(전철) / 行く(가다)"
        },
        {
          "role": "Staff",
          "roleLabel": "역무원 (B)",
          "gender": "male",
          "jp": "いいえ、行きません。池袋は山手線です。",
          "romaji": "Iie, ikimasen. Ikebukuro wa Yamanote-sen desu.",
          "kr": "아니요, 안 갑니다. 이케부쿠로는 야마노테선입니다.",
          "note": "行きません(가지 않습니다) / 山手線(야마노테선)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "山手線はどこですか。",
          "romaji": "Yamanote-sen wa doko desu ka.",
          "kr": "야마노테선은 어디예요?",
          "note": ""
        },
        {
          "role": "Staff",
          "roleLabel": "역무원 (B)",
          "gender": "male",
          "jp": "3番線です。",
          "romaji": "San-ban-sen desu.",
          "kr": "3번선입니다.",
          "note": "〜番線(~번 홈/승강장)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "わかりました。ありがとうございます。",
          "romaji": "Wakarimashita. Arigatoo gozaimasu.",
          "kr": "알겠습니다. 고맙습니다.",
          "note": "わかる(알다) / わかりました(알겠습니다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "この電車は秋葉原に行きますか。",
          "romaji": "Kono densha wa Akihabara ni ikimasu ka.",
          "kr": "이 전철은 아키하바라에 가요?"
        },
        {
          "speaker": "B",
          "jp": "いいえ、行きません。秋葉原は1番線です。",
          "romaji": "Iie, ikimasen. Akihabara wa ichi-ban-sen desu.",
          "kr": "아니요, 안 갑니다. 아키하바라는 1번선입니다."
        }
      ],
      "practice": [
        {
          "q": "버스(バス) / 공항(空港)",
          "answerJp": "このバスは空港に行きますか。",
          "answerRomaji": "Kono basu wa kuukoo ni ikimasu ka.",
          "kr": "이 버스는 공항에 가요?"
        },
        {
          "q": "전철(電車) / 신주쿠(新宿)",
          "answerJp": "この電車は新宿に行きますか。",
          "answerRomaji": "Kono densha wa Shinjuku ni ikimasu ka.",
          "kr": "이 전철은 신주쿠에 가요?"
        }
      ],
      "bonus": {
        "jp": "わかりました。",
        "romaji": "Wakarimashita.",
        "kr": "알겠습니다.",
        "desc": "상대방의 설명이나 지시를 이해했을 때 쓰는 기본 응대 표현입니다."
      }
    },
    {
      "lesson": 7,
      "title": "ゆっくり話してください (천천히 말해 주세요.)",
      "canDo": "상대방에게 알기 쉽게 얘기해 달라고 부탁할 수 있다",
      "keyPhrase": {
        "jp": "ゆっくり話してください。",
        "romaji": "Yukkuri hanashite kudasai.",
        "kr": "천천히 말해 주세요.",
        "desc": "상대방에게 정중히 요청하거나 부탁할 때는 '동사의 TE형 + kudasai'를 사용합니다. 'hanashite'는 'hanasu(말하다)'의 TE형입니다."
      },
      "dialogues": [
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "隣、いい？",
          "romaji": "Tonari, ii?",
          "kr": "옆에 괜찮아?",
          "note": "隣(옆자리)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "え？はい。",
          "romaji": "E? Hai.",
          "kr": "아? 네.",
          "note": ""
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "ありがとう。留学生なの？",
          "romaji": "Arigatoo. Ryuugakusee na no?",
          "kr": "고마워. 유학생이야?",
          "note": "留学生(유학생)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すみません。よくわかりません。ゆっくり話してください。",
          "romaji": "Sumimasen. Yoku wakarimasen. Yukkuri hanashite kudasai.",
          "kr": "미안합니다. 잘 모르겠어요. 천천히 말해 주세요.",
          "note": "よく(잘) / ゆっくり(천천히) / 話す(말하다)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "あ、ごめん、ごめん。あなたは留学生ですか。私はあやかです。よろしくね。",
          "romaji": "A, gomen, gomen. Anata wa ryuugakusee desu ka. Watashi wa Ayaka desu. Yoroshiku ne.",
          "kr": "아, 미안, 미안. 당신은 유학생이에요? 나는 아야카예요. 잘 부탁해.",
          "note": "ごめん(미안해)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。私はタムです。よろしくお願いします。",
          "romaji": "Hai. Watashi wa Tamu desu. Yoroshiku onegai-shimasu.",
          "kr": "네. 저는 탐이에요. 잘 부탁합니다.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。もう一度言ってください。",
          "romaji": "Sumimasen. Moo ichi-do itte kudasai.",
          "kr": "미안합니다. 다시 한번 말해 주세요."
        },
        {
          "speaker": "B",
          "jp": "あ、はい。",
          "romaji": "A, hai.",
          "kr": "아, 네."
        }
      ],
      "practice": [
        {
          "q": "영어로 말하다 (英語で言う → 言って)",
          "answerJp": "すみません。英語で言ってください。",
          "answerRomaji": "Sumimasen. Eego de itte kudasai.",
          "kr": "미안합니다. 영어로 말해 주세요."
        },
        {
          "q": "로마자로 적다 (ローマ字で書く → 書いて)",
          "answerJp": "すみません。ローマ字で書いてください。",
          "answerRomaji": "Sumimasen. Roomaji de kaite kudasai.",
          "kr": "미안합니다. 로마자로 적어 주세요."
        }
      ],
      "bonus": {
        "jp": "すみません。よくわかりません。",
        "romaji": "Sumimasen. Yoku wakarimasen.",
        "kr": "미안합니다. 잘 모르겠어요.",
        "desc": "상대방의 말이 빠르거나 이해하지 못했을 때 사용하는 매우 정중하고 유용한 표현입니다."
      }
    },
    {
      "lesson": 8,
      "title": "友達のあやかさんです (친구인 아야카 씨예요.)",
      "canDo": "친구 등을 소개할 수 있다",
      "keyPhrase": {
        "jp": "友達のあやかさんです。",
        "romaji": "Tomodachi no Ayaka-san desu.",
        "kr": "친구인 아야카 씨예요.",
        "desc": "지인이나 가족을 소개할 때는 '[관계] no [이름(san)] desu'를 사용합니다. 조사 'no'는 명사를 연결하며, 'san'은 타인에게 붙이는 존칭입니다."
      },
      "dialogues": [
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "わあ、すごい！きれいだね。",
          "romaji": "Waa, sugoi! Kiree da ne.",
          "kr": "와, 멋지다! 예쁘네.",
          "note": "すごい(대단하다/멋지다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ああ、タム、遅れてごめんなさい。",
          "romaji": "Aa, Tamu, okurete gomen nasai.",
          "kr": "아아, 탐, 늦어서 미안해요.",
          "note": "遅れる(늦다) / ごめんなさい(미안해요)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "友達のあやかさんです。",
          "romaji": "Tomodachi no Ayaka-san desu.",
          "kr": "친구인 아야카 씨예요.",
          "note": "友達(친구)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "こんにちは。ミーヤーです。",
          "romaji": "Konnichiwa. Miiyaa desu.",
          "kr": "안녕하세요? 미야예요.",
          "note": "こんにちは(낮 인사)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "ああ、ミーヤーさん！写真を撮ってるんでしょう？すごいいなあ。私も撮ってくださいね。",
          "romaji": "Aa, Miiyaa-san! Shashin o totterun deshoo? Sugoi naa. Watashi mo totte kudasai ne.",
          "kr": "아아, 미야 씨! 사진을 찍는다고요? 멋지다. 저도 찍어 주세요.",
          "note": "写真を撮る(사진을 찍다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "あ、はい…。",
          "romaji": "A, hai...",
          "kr": "아, 네….",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "友達の田中さんです。",
          "romaji": "Tomodachi no Tanaka-san desu.",
          "kr": "친구인 다나카 씨예요."
        },
        {
          "speaker": "B",
          "jp": "はじめまして。田中です。よろしくお願いします。",
          "romaji": "Hajimemashite. Tanaka desu. Yoroshiku onegai-shimasu.",
          "kr": "처음 뵙겠습니다. 다나카예요. 잘 부탁합니다."
        }
      ],
      "practice": [
        {
          "q": "여동생(妹) / 안나(アンナ)",
          "answerJp": "妹のアンナです。",
          "answerRomaji": "Imooto no Anna desu.",
          "kr": "여동생인 안나예요."
        },
        {
          "q": "동료(同僚) / 양 씨(ヤンさん)",
          "answerJp": "同僚のヤンさんです。",
          "answerRomaji": "Dooryoo no Yan-san desu.",
          "kr": "동료인 양 씨예요."
        }
      ],
      "bonus": {
        "jp": "ごめんなさい。",
        "romaji": "Gomen nasai.",
        "kr": "미안해요.",
        "desc": "잘못이나 지각 등에 대해 사과할 때 쓰는 친근한 사과 표현입니다."
      }
    },
    {
      "lesson": 9,
      "title": "これは何ですか (이것은 뭐예요?)",
      "canDo": "모르는 물건의 이름을 물어볼 수 있다",
      "keyPhrase": {
        "jp": "これは何ですか。",
        "romaji": "Kore wa nan desu ka.",
        "kr": "이것은 뭐예요?",
        "desc": "사물의 이름을 모를 때는 가리키며 'Kore/Sore/Are wa nan desu ka'라고 묻습니다. 자기 쪽은 kore, 상대 쪽은 sore, 둘 다 먼 곳은 are를 씁니다. 'nan'은 '무엇'을 뜻합니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "ここが「デパ地下」だよ。",
          "romaji": "Koko ga depa-chika da yo.",
          "kr": "여기가 백화점 지하 식품매장이야.",
          "note": "デパ地下(백화점 지하식품관)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "いろんな食べ物があって、いいよね。",
          "romaji": "Ironna tabemono ga atte, ii yo ne.",
          "kr": "여러 가지 음식이 있어서 좋네.",
          "note": "いろんな(다양한) / 食べ物(음식)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "わあ、すごい。これは何ですか。",
          "romaji": "Waa, sugoi. Kore wa nan desu ka.",
          "kr": "와! 대단하다. 이것은 뭐예요?",
          "note": "何(무엇)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "大根の漬物だよ。",
          "romaji": "Daikon no tsukemono da yo.",
          "kr": "무장아찌야.",
          "note": "大根(무) / 漬物(절임/장아찌)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "食べてみる？",
          "romaji": "Tabete miru?",
          "kr": "먹어 볼래?",
          "note": "食べてみる(먹어보다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "いただきます。おいしいです。",
          "romaji": "Itadakimasu. Oishii desu.",
          "kr": "잘 먹겠습니다. 맛있어요.",
          "note": "いただきます(잘 먹겠습니다) / おいしい(맛있다)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "これも食べてみる？",
          "romaji": "Kore mo tabete miru?",
          "kr": "이것도 먹어 볼래?",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。これは何ですか。",
          "romaji": "Sumimasen. Kore wa nan desu ka.",
          "kr": "저기요! 이것은 뭐예요?"
        },
        {
          "speaker": "B",
          "jp": "お茶です。",
          "romaji": "Ocha desu.",
          "kr": "차예요."
        }
      ],
      "practice": [
        {
          "q": "상대방 손에 든 도미빵(たい焼き)",
          "answerJp": "それは何ですか。",
          "answerRomaji": "Sore wa nan desu ka.",
          "kr": "그것은 뭐예요?"
        },
        {
          "q": "멀리 포장마차의 타코야키(たこ焼き)",
          "answerJp": "あれは何ですか。",
          "answerRomaji": "Are wa nan desu ka.",
          "kr": "저것은 뭐예요?"
        }
      ],
      "bonus": {
        "jp": "おいしいです。",
        "romaji": "Oishii desu.",
        "kr": "맛있어요.",
        "desc": "맛있는 것을 먹었을 때 쓰는 감탄 표현입니다. 짧게 'おいしい！(Oishii!)'라고도 합니다."
      }
    },
    {
      "lesson": 10,
      "title": "このドライヤーはいくらですか (이 헤어드라이어는 얼마예요?)",
      "canDo": "물건의 가격을 물어볼 수 있다",
      "keyPhrase": {
        "jp": "このドライヤーはいくらですか。",
        "romaji": "Kono doraiyaa wa ikura desu ka.",
        "kr": "이 헤어드라이어는 얼마예요?",
        "desc": "가격을 물을 때는 'Ikura desu ka(얼마예요?)' 또는 물건을 지칭해 'Kono/Sono/Ano [물건] wa ikura desu ka'라고 질문합니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "たくさんありますね！",
          "romaji": "Takusan arimasu ne!",
          "kr": "많이 있네요!",
          "note": "たくさん(많이)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "すごいでしょう？これはサラサラヘア。これはツヤが出るタイプ。",
          "romaji": "Sugoi deshoo? Kore wa sarasara hea. Kore wa tsuya ga deru taipu.",
          "kr": "대단하지? 이건 머릿결을 찰랑찰랑하게 해. 이건 윤기가 나는 타입.",
          "note": "ツヤが出る(윤기가 나다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "へえ、いくらですか。",
          "romaji": "Hee, ikura desu ka.",
          "kr": "오, 얼마예요?",
          "note": "いくら(얼마)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "セールって書いてある。きいてみよう。",
          "romaji": "Seeru tte kaite aru. Kiite miyoo.",
          "kr": "세일이라고 쓰여 있네. 물어보자.",
          "note": "セール(세일) / 聞く(묻다/듣다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すみません。このドライヤーはいくらですか。",
          "romaji": "Sumimasen. Kono doraiyaa wa ikura desu ka.",
          "kr": "저기요! 이 헤어드라이어는 얼마예요?",
          "note": "ドライヤー(드라이어)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "9,900円です。",
          "romaji": "Kyuu-sen-kyuu-hyaku-en desu.",
          "kr": "9,900엔이에요.",
          "note": "円(엔)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "え！高すぎます。",
          "romaji": "E! Takasugimasu.",
          "kr": "어! 너무 비싸요.",
          "note": "高い(비싸다) / 〜すぎる(너무 ~하다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。この炊飯器はいくらですか。",
          "romaji": "Sumimasen. Kono suihanki wa ikura desu ka.",
          "kr": "저기요! 이 밥솥은 얼마예요?"
        },
        {
          "speaker": "B",
          "jp": "8,700円です。",
          "romaji": "Hassen-nanahyaku-en desu.",
          "kr": "8,700엔이에요."
        }
      ],
      "practice": [
        {
          "q": "저 이어폰(イヤホン)",
          "answerJp": "すみません。あのイヤホンはいくらですか。",
          "answerRomaji": "Sumimasen. Ano iyahon wa ikura desu ka.",
          "kr": "저기요! 저 이어폰은 얼마예요?"
        },
        {
          "q": "이 밥공기(茶碗)",
          "answerJp": "すみません。この茶碗はいくらですか。",
          "answerRomaji": "Sumimasen. Kono chawan wa ikura desu ka.",
          "kr": "저기요! 이 밥공기는 얼마예요?"
        }
      ],
      "bonus": {
        "jp": "カードは使えますか。",
        "romaji": "Kaado wa tsukaemasu ka.",
        "kr": "카드는 쓸 수 있어요?",
        "desc": "결제 시 신용카드 사용 여부를 확인할 때 쓰는 필수 표현입니다."
      }
    },
    {
      "lesson": 11,
      "title": "お守りはありますか (부적은 있어요?)",
      "canDo": "자기가 원하는 물건이 있는지 물어볼 수 있다",
      "keyPhrase": {
        "jp": "お守りはありますか。",
        "romaji": "Omamori wa arimasu ka.",
        "kr": "부적은 있어요?",
        "desc": "가게에서 찾는 물건이 있는지 물을 때는 '[원하는 물건] wa arimasu ka'라고 질문합니다. 'arimasu'는 사물의 존재를 나타내는 동사 'aru'의 정중형입니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "このTシャツ、見て。「忍者」って書いてある。",
          "romaji": "Kono tii-shatsu, mite. 'Ninja' tte kaite aru.",
          "kr": "이 티셔츠 봐. '닌자'라고 쓰여 있어.",
          "note": "忍者(닌자) / 書いてある(쓰여 있다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "わあ、にんじゃ！",
          "romaji": "Waa, ninja!",
          "kr": "우와, 닌자!",
          "note": ""
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "いらっしゃいませ。",
          "romaji": "Irasshaimase.",
          "kr": "어서 오세요.",
          "note": "いらっしゃいませ(환영 인사)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すみません。お守りはありますか。",
          "romaji": "Sumimasen. Omamori wa arimasu ka.",
          "kr": "저기요! 부적은 있어요?",
          "note": "お守り(부적) / ある(있다)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "ちょっと…。ここにはありませんねえ。",
          "romaji": "Chotto... Koko ni wa arimasen nee.",
          "kr": "저…. 여기에는 없는데요.",
          "note": "ありません(없습니다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "タム、お守りはお寺にあるよ。",
          "romaji": "Tamu, omamori wa otera ni aru yo.",
          "kr": "탐, 부적은 절에 있어.",
          "note": "お寺(절/사찰)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "お寺ですか。",
          "romaji": "Otera desu ka.",
          "kr": "절이요?",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "行きましょう。",
          "romaji": "Ikimashoo.",
          "kr": "가요.",
          "note": "行きましょう(갑시다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。地図はありますか。",
          "romaji": "Sumimasen. Chizu wa arimasu ka.",
          "kr": "저기요! 지도는 있어요?"
        },
        {
          "speaker": "B",
          "jp": "はい、こちらです。",
          "romaji": "Hai, kochira desu.",
          "kr": "네, 여기요."
        }
      ],
      "practice": [
        {
          "q": "부채(扇子)",
          "answerJp": "すみません。扇子はありますか。",
          "answerRomaji": "Sumimasen. Sensu wa arimasu ka.",
          "kr": "저기요! 부채는 있어요?"
        },
        {
          "q": "닌자 티셔츠(忍者のTシャツ)",
          "answerJp": "すみません。忍者のTシャツはありますか。",
          "answerRomaji": "Sumimasen. Ninja no tii-shatsu wa arimasu ka.",
          "kr": "저기요! 닌자 티셔츠는 있어요?"
        }
      ],
      "bonus": {
        "jp": "いらっしゃいませ。",
        "romaji": "Irasshaimase.",
        "kr": "어서 오세요.",
        "desc": "가게나 식당 등에서 손님을 맞이할 때 점원이 건네는 공식 환영 인사말입니다."
      }
    },
    {
      "lesson": 12,
      "title": "かわいいお守りですね (귀여운 부적이네요)",
      "canDo": "소감을 전하거나 설명할 수 있다",
      "keyPhrase": {
        "jp": "かわいいお守りですね。",
        "romaji": "Kawaii omamori desu ne.",
        "kr": "귀여운 부적이네요.",
        "desc": "I형용사(어미가 'i'로 끝나는 형용사)는 수식하는 명사 앞에 바로 놓이거나 문장 끝에 와서 감상을 나타냅니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "これ、かわいいお守りですね。",
          "romaji": "Kore, kawaii omamori desu ne.",
          "kr": "이거, 귀여운 부적이네요.",
          "note": "かわいい(귀엽다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "本当、かわいい。",
          "romaji": "Hontoo, kawaii.",
          "kr": "정말, 귀엽다.",
          "note": "本当(정말)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "これもいいですね。",
          "romaji": "Kore mo ii desu ne.",
          "kr": "이것도 좋네요.",
          "note": "いい(좋다)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "それは縁結びのお守りです。800円になります。",
          "romaji": "Sore wa enmusubi no omamori desu. Happyaku-en ni narimasu.",
          "kr": "그건 '엔무스비' 부적이에요. 800엔 되겠습니다.",
          "note": "縁結び(인연을 맺어줌)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "えんむす…。",
          "romaji": "Enmusu...",
          "kr": "엔무스….",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "縁結び。恋人ができるお守り。",
          "romaji": "Enmusubi. Koibito ga dekiru omamori.",
          "kr": "엔무스비. 애인이 생기는 부적.",
          "note": "恋人(애인) / できる(생기다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "じゃあ、これをください。",
          "romaji": "Jaa, kore o kudasai.",
          "kr": "그럼, 이것을 주세요.",
          "note": "じゃあ(그럼) / ください(주세요)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "見て、このTシャツ。",
          "romaji": "Mite, kono tii-shatsu.",
          "kr": "이 티셔츠 봐."
        },
        {
          "speaker": "B",
          "jp": "おもしろいですね。",
          "romaji": "Omoshiroi desu ne.",
          "kr": "재미있네요."
        }
      ],
      "practice": [
        {
          "q": "크다(大きい)",
          "answerJp": "大きいですね。",
          "answerRomaji": "Ookii desu ne.",
          "kr": "크네요."
        },
        {
          "q": "비싸다(高い)",
          "answerJp": "高いですね。",
          "answerRomaji": "Takai desu ne.",
          "kr": "비싸네요."
        }
      ],
      "bonus": {
        "jp": "これをください。",
        "romaji": "Kore o kudasai.",
        "kr": "이것을 주세요.",
        "desc": "상점이나 식당에서 물건이나 메뉴를 고른 뒤 주문할 때 사용하는 핵심 표현입니다."
      }
    },
    {
      "lesson": 13,
      "title": "雪が見たいです (눈을 보고 싶어요.)",
      "canDo": "자기가 하고 싶은 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "雪が見たいです。",
        "romaji": "Yuki ga mitai desu.",
        "kr": "눈을 보고 싶어요.",
        "desc": "자기가 하고 싶은 것을 말할 때는 동사 MASU형의 'masu'를 빼고 '~tai desu'를 붙입니다. 하고 싶은 대상은 조사 'ga' 또는 'o'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "日本には慣れましたか。",
          "romaji": "Nihon ni wa naremashita ka.",
          "kr": "일본에는 익숙해졌어요?",
          "note": "慣れる(익숙해지다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "日本でどんなことがしたいですか。",
          "romaji": "Nihon de donna koto ga shitai desu ka.",
          "kr": "일본에서 어떤 것을 하고 싶어요?",
          "note": "どんな(어떤) / こと(일/것)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "ええと、雪が見たいです。北海道に行きたいです。",
          "romaji": "Eeto, yuki ga mitai desu. Hokkaidoo ni ikitai desu.",
          "kr": "글쎄요, 눈을 보고 싶어요. 홋카이도에 가고 싶어요.",
          "note": "雪(눈) / 見る(보다) / 行く(가다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "北海道！いいね。",
          "romaji": "Hokkaidoo! Ii ne.",
          "kr": "홋카이도! 좋지.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "あと…友達に会いたいです。",
          "romaji": "Ato... tomodachi ni aitai desu.",
          "kr": "그리고… 친구를 만나고 싶어요.",
          "note": "あと(그리고) / 会う(만나다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "おや？",
          "romaji": "Oya?",
          "kr": "어머나!",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "大丈夫？顔が赤いよ。",
          "romaji": "Daijoobu? Kao ga akai yo.",
          "kr": "괜찮아? 얼굴이 빨개.",
          "note": "顔(얼굴) / 赤い(빨갛다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "日本で何がしたいですか。",
          "romaji": "Nihon de nani ga shitai desu ka.",
          "kr": "일본에서 무엇을 하고 싶어요?"
        },
        {
          "speaker": "B",
          "jp": "ラーメンが食べたいです。",
          "romaji": "Raamen ga tabetai desu.",
          "kr": "라면을 먹고 싶어요."
        }
      ],
      "practice": [
        {
          "q": "긴카쿠지 절에 가다 (金閣寺に行く → 行きます)",
          "answerJp": "金閣寺に行きたいです。",
          "answerRomaji": "Kinkakuji ni ikitai desu.",
          "kr": "긴카쿠지 절에 가고 싶어요."
        },
        {
          "q": "유카타를 사다 (浴衣を買う → 買います)",
          "answerJp": "浴衣が買いたいです。",
          "answerRomaji": "Yukata ga kaitai desu.",
          "kr": "유카타를 사고 싶어요."
        }
      ],
      "bonus": {
        "jp": "大丈夫？",
        "romaji": "Daijoobu?",
        "kr": "괜찮아?",
        "desc": "상대방이 걱정될 때 쓰는 표현입니다. 정중하게 물을 때는 '大丈夫ですか(Daijoobu desu ka)'라고 합니다."
      }
    },
    {
      "lesson": 14,
      "title": "日本へ行ってみたいです (일본에 가 보고 싶어요)",
      "canDo": "자기의 희망을 말할 수 있다",
      "keyPhrase": {
        "jp": "日本へ行ってみたいです。",
        "romaji": "Nihon e itte mitai desu.",
        "kr": "일본에 가 보고 싶어요.",
        "desc": "경험해보지 않은 일에 대한 희망을 말할 때는 '동사의 TE형 + mitai desu(~해 보고 싶어요)'를 사용합니다. 'itte'는 'iku(가다)'의 TE형입니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "こんにちは。私はタムです。",
          "romaji": "Konnichiwa. Watashi wa Tamu desu.",
          "kr": "안녕하세요? 저는 탐이에요.",
          "note": ""
        },
        {
          "role": "Yuuki",
          "roleLabel": "유키 (B)",
          "gender": "male",
          "jp": "あ、ぼく、悠輝です。タムさん、日本語ができるんですね！",
          "romaji": "A, boku, Yuuki desu. Tamu-san, Nihongo ga dekirun desu ne!",
          "kr": "아, 나 유키예요. 탐 씨, 일본어를 할 수 있네요!",
          "note": "できる(할 수 있다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "少しだけです。ラジオで勉強しました。",
          "romaji": "Sukoshi dake desu. Rajio de benkyoo-shimashita.",
          "kr": "조금만요. 라디오로 공부했어요.",
          "note": "少し(조금) / だけ(만)"
        },
        {
          "role": "Yuuki",
          "roleLabel": "유키 (B)",
          "gender": "male",
          "jp": "へえ。すごいですね。",
          "romaji": "Hee. Sugoi desu ne.",
          "kr": "와, 대단하네요.",
          "note": "すごい(대단하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "日本へ行ってみたいです。",
          "romaji": "Nihon e itte mitai desu.",
          "kr": "일본에 가 보고 싶어요.",
          "note": "〜てみたい(~해보고 싶다)"
        },
        {
          "role": "Yuuki",
          "roleLabel": "유키 (B)",
          "gender": "male",
          "jp": "ぜひ来てください。ぼくが案内しますよ。",
          "romaji": "Zehi kite kudasai. Boku ga annai-shimasu yo.",
          "kr": "꼭 오세요. 내가 안내할게요.",
          "note": "ぜひ(꼭) / 案内する(안내하다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "日本で何がしたいですか。",
          "romaji": "Nihon de nani ga shitai desu ka.",
          "kr": "일본에서 무엇을 하고 싶어요?"
        },
        {
          "speaker": "B",
          "jp": "そうですね…。相撲を見てみたいです。",
          "romaji": "Soo desu ne... Sumoo o mite mitai desu.",
          "kr": "글쎄요… 스모를 구경해 보고 싶어요."
        }
      ],
      "practice": [
        {
          "q": "후지산에 오르다 (富士山に登る → 登って)",
          "answerJp": "富士山に登ってみたいです。",
          "answerRomaji": "Fujisan ni nobotte mitai desu.",
          "kr": "후지산에 올라가 보고 싶어요."
        },
        {
          "q": "신칸센을 타다 (新幹線に乗る → 乗って)",
          "answerJp": "新幹線に乗ってみたいです。",
          "answerRomaji": "Shinkansen ni notte mitai desu.",
          "kr": "신칸센을 타 보고 싶어요."
        }
      ],
      "bonus": {
        "jp": "少しだけです。",
        "romaji": "Sukoshi dake desu.",
        "kr": "조금만요.",
        "desc": "자신의 어학 실력이나 능력을 칭찬받았을 때 겸손하게 응답하는 표현입니다."
      }
    },
    {
      "lesson": 15,
      "title": "猿の温泉までお願いします (원숭이 온천까지 부탁합니다)",
      "canDo": "택시에서 행선지를 말할 수 있다",
      "keyPhrase": {
        "jp": "猿の温泉までお願いします。",
        "romaji": "Saru no onsen made onegai-shimasu.",
        "kr": "원숭이 온천까지 부탁합니다.",
        "desc": "목적지를 말할 때는 '[장소] made onegai-shimasu'라고 합니다. 조사 'made'는 도착점을 나타내며, 'onegai-shimasu'는 정중히 의뢰할 때 씁니다."
      },
      "dialogues": [
        {
          "role": "Driver",
          "roleLabel": "기사 (B)",
          "gender": "male",
          "jp": "どちらまで？",
          "romaji": "Dochira made?",
          "kr": "어디까지요?",
          "note": "どちら(어디)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "猿の温泉までお願いします。",
          "romaji": "Saru no onsen made onegai-shimasu.",
          "kr": "원숭이 온천까지 부탁합니다.",
          "note": "猿(원숭이) / 温泉(온천)"
        },
        {
          "role": "Driver",
          "roleLabel": "기사 (B)",
          "gender": "male",
          "jp": "はい、わかりました。こちらは初めてですか。",
          "romaji": "Hai, wakarimashita. Kochira wa hajimete desu ka.",
          "kr": "네, 알겠습니다. 여기는 처음이에요?",
          "note": "初めて(처음)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "はい、初めてです。猿の写真を撮りに行きます。",
          "romaji": "Hai, hajimete desu. Saru no shashin o tori ni ikimasu.",
          "kr": "네, 처음이에요. 원숭이 사진을 찍으러 가요.",
          "note": "撮りに行く(찍으러 가다)"
        },
        {
          "role": "Driver",
          "roleLabel": "기사 (B)",
          "gender": "male",
          "jp": "そうですか。今日は寒いから、猿がたくさん温泉に入ってますよ。",
          "romaji": "Soo desu ka. Kyoo wa samui kara, saru ga takusan onsen ni haittemasu yo.",
          "kr": "그래요? 오늘은 추우니까 원숭이가 많이 온천에 들어가 있을 거예요.",
          "note": "寒い(춥다) / 入る(들어가다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "どちらまでですか。",
          "romaji": "Dochira made desu ka.",
          "kr": "어디까지예요?"
        },
        {
          "speaker": "B",
          "jp": "空港までお願いします。",
          "romaji": "Kuukoo made onegai-shimasu.",
          "kr": "공항까지 부탁합니다."
        }
      ],
      "practice": [
        {
          "q": "도쿄스카이트리 (東京スカイツリー)",
          "answerJp": "東京スカイツリーまでお願いします。",
          "answerRomaji": "Tookyoo Sukai-tsurii made onegai-shimasu.",
          "kr": "도쿄스카이트리까지 부탁합니다."
        },
        {
          "q": "이 호텔 (このホテル)",
          "answerJp": "このホテルまでお願いします。",
          "answerRomaji": "Kono hoteru made onegai-shimasu.",
          "kr": "이 호텔까지 부탁합니다."
        }
      ],
      "bonus": {
        "jp": "お願いします。",
        "romaji": "Onegai-shimasu.",
        "kr": "부탁합니다.",
        "desc": "택시, 체크아웃, 계산 시 상대방에게 요청할 때 범용적으로 사용하는 핵심 표현입니다."
      }
    },
    {
      "lesson": 16,
      "title": "有名な温泉です (유명한 온천이에요.)",
      "canDo": "소감을 전하거나 설명할 수 있다",
      "keyPhrase": {
        "jp": "有名な温泉です。",
        "romaji": "Yuumeena onsen desu.",
        "kr": "유명한 온천이에요.",
        "desc": "명사를 수식할 때 어미가 '~na'가 되는 형용사를 NA형용사라고 합니다. 문장 끝에서는 'na'를 빼고 'desu'를 붙입니다 (Yuumee desu - 유명해요)."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "わあ、猿がいっぱい！",
          "romaji": "Waa, saru ga ippai!",
          "kr": "우와, 원숭이가 많다!",
          "note": "いっぱい(가득/많이)"
        },
        {
          "role": "Wife",
          "roleLabel": "부인 (B)",
          "gender": "female",
          "jp": "たくさん写真を撮っているのね。",
          "romaji": "Takusan shashin o totte iru no ne.",
          "kr": "사진을 많이 찍네요.",
          "note": "撮っている(찍고 있다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "はい。ここは海外でも有名な温泉です。",
          "romaji": "Hai. Koko wa kaigai de mo yuumeena onsen desu.",
          "kr": "네. 여기는 해외에서도 유명한 온천이에요.",
          "note": "海外(해외) / 有名(유명함)"
        },
        {
          "role": "Husband",
          "roleLabel": "남편 (B)",
          "gender": "male",
          "jp": "へえ、そうなんだ。猿が温泉に入るのは珍しいからね。",
          "romaji": "Hee, soo nan da. Saru ga onsen ni hairu no wa mezurashii kara ne.",
          "kr": "아, 그렇구나. 원숭이가 온천에 들어가는 건 드무니까.",
          "note": "珍しい(드물다/희귀하다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "あ、猿の赤ちゃん。かわいい。",
          "romaji": "A, saru no akachan. Kawaii.",
          "kr": "아, 아기 원숭이. 귀엽다.",
          "note": "赤ちゃん(아기)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "元気な猿ですね。",
          "romaji": "Genkina saru desu ne.",
          "kr": "활기찬 원숭이네요."
        },
        {
          "speaker": "B",
          "jp": "本当！元気ですね。",
          "romaji": "Hontoo! Genki desu ne.",
          "kr": "정말! 활기차네요."
        }
      ],
      "practice": [
        {
          "q": "조용한 장소 (静か(な) / 場所)",
          "answerJp": "静かな場所ですね。",
          "answerRomaji": "Shizukana basho desu ne.",
          "kr": "조용한 곳이네요."
        },
        {
          "q": "아름다운 경치 (きれい(な) / 景色)",
          "answerJp": "きれいな景色ですね。",
          "answerRomaji": "Kireena keshiki desu ne.",
          "kr": "아름다운 경치네요."
        }
      ],
      "bonus": {
        "jp": "へえ。",
        "romaji": "Hee.",
        "kr": "와. / 그렇구나.",
        "desc": "상대방의 말에 놀라거나 감탄했을 때 자연스럽게 맞장구치는 감탄사입니다."
      }
    },
    {
      "lesson": 17,
      "title": "日本を旅行しています (일본을 여행하고 있어요.)",
      "canDo": "현재 하고 있는 것에 대해 말할 수 있다",
      "keyPhrase": {
        "jp": "日本を旅行しています。",
        "romaji": "Nihon o ryokoo-shite imasu.",
        "kr": "일본을 여행하고 있어요.",
        "desc": "현재 진행 중인 동작이나 상태를 나타낼 때는 '[동사의 TE형] + imasu'를 사용합니다. 'ryokoo-shite imasu'는 여행하다(ryokoo-suru)의 진행형입니다."
      },
      "dialogues": [
        {
          "role": "Wife",
          "roleLabel": "부인 (B)",
          "gender": "female",
          "jp": "おそば3つ、お願いします。",
          "romaji": "Osoba mittsu, onegai-shimasu.",
          "kr": "메밀국수 셋 부탁합니다.",
          "note": "そば(메밀국수) / 3つ(셋)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "はーい。",
          "romaji": "Haai.",
          "kr": "네.",
          "note": ""
        },
        {
          "role": "Wife",
          "roleLabel": "부인 (B)",
          "gender": "female",
          "jp": "日本へは、観光ですか。",
          "romaji": "Nihon e wa, kankoo desu ka.",
          "kr": "일본에는 관광으로 왔어요?",
          "note": "観光(관광)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ええと、私は写真家で、日本のことを海外に紹介しています。それで、日本を旅行しています。",
          "romaji": "Eeto, watashi wa shashinka de, Nihon no koto o kaigai ni shookai-shite imasu. Sore de, Nihon o ryokoo-shite imasu.",
          "kr": "음… 저는 사진작가인데 일본에 대한 것을 해외에 소개하고 있어요. 그래서 일본을 여행하고 있어요.",
          "note": "紹介する(소개하다) / それで(그래서) / 旅行する(여행하다)"
        },
        {
          "role": "Husband",
          "roleLabel": "남편 (B)",
          "gender": "male",
          "jp": "それはすばらしいね。",
          "romaji": "Sore wa subarashii ne.",
          "kr": "그거 멋지네.",
          "note": "すばらしい(멋지다/훌륭하다)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "お待たせしました。",
          "romaji": "Omatase-shimashita.",
          "kr": "오래 기다리셨습니다.",
          "note": "お待たせしました(기다리셨습니다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "旅行ですか。",
          "romaji": "Ryokoo desu ka.",
          "kr": "여행이에요?"
        },
        {
          "speaker": "B",
          "jp": "はい。あちこち旅行しています。",
          "romaji": "Hai. Achikochi ryokoo-shite imasu.",
          "kr": "네. 여기저기 여행하고 있어요."
        }
      ],
      "practice": [
        {
          "q": "일본어를 공부하다 (日本語を勉強する → 勉強して)",
          "answerJp": "日本語を勉強しています。",
          "answerRomaji": "Nihongo o benkyoo-shite imasu.",
          "kr": "일본어를 공부하고 있어요."
        },
        {
          "q": "일을 하다 (仕事をする → して)",
          "answerJp": "仕事をしています。",
          "answerRomaji": "Shigoto o shite imasu.",
          "kr": "일을 하고 있어요."
        }
      ],
      "bonus": {
        "jp": "お待たせしました。",
        "romaji": "Omatase-shimashita.",
        "kr": "오래 기다리셨습니다.",
        "desc": "음식이나 주문 물건을 손님에게 전달할 때 점원이 반드시 건네는 인사입니다."
      }
    },
    {
      "lesson": 18,
      "title": "すごく楽しかったです (아주 즐거웠어요.)",
      "canDo": "경험한 것에 대한 감상을 말할 수 있다",
      "keyPhrase": {
        "jp": "すごく楽しかったです。",
        "romaji": "Sugoku tanoshikatta desu.",
        "kr": "아주 즐거웠어요.",
        "desc": "I형용사의 과거형은 어미 '-i (desu)'를 '-katta (desu)'로 바꿉니다 (tanoshii → tanoshikatta). NA형용사와 명사는 문말에 'deshita'를 붙입니다."
      },
      "dialogues": [
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "おかえりなさい。長野はどうでしたか。",
          "romaji": "Okaerinasai. Nagano wa doo deshita ka.",
          "kr": "다녀왔어요? 나가노는 어땠어요?",
          "note": "どうでしたか(어땠습니까)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "すごく楽しかったです。写真をたくさん撮りました。それから、おそばも食べました。とてもおいしかったです。",
          "romaji": "Sugoku tanoshikatta desu. Shashin o takusan torimashita. Sorekara, osoba mo tabemashita. Totemo oishikatta desu.",
          "kr": "아주 즐거웠어요. 사진을 많이 찍었어요. 그리고 메밀국수도 먹었어요. 매우 맛있었어요.",
          "note": "すごく(아주) / 楽しい(즐겁다) / それから(그리고)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "そうですか。よかったですね。",
          "romaji": "Soo desu ka. Yokatta desu ne.",
          "kr": "그래요? 다행이네요.",
          "note": "よかった(다행이다/좋았다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "長野の人はとても親切でした。",
          "romaji": "Nagano no hito wa totemo shinsetsu deshita.",
          "kr": "나가노 사람은 매우 친절했어요.",
          "note": "人(사람) / 親切(친절함)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "楽しい旅行でしたね。",
          "romaji": "Tanoshii ryokoo deshita ne.",
          "kr": "즐거운 여행이었군요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "大阪はどうでしたか。",
          "romaji": "Oosaka wa doo deshita ka.",
          "kr": "오사카는 어땠어요?"
        },
        {
          "speaker": "B",
          "jp": "よかったです。とてもにぎやかでした。",
          "romaji": "Yokatta desu. Totemo nigiyaka deshita.",
          "kr": "좋았어요. 매우 번화했어요."
        }
      ],
      "practice": [
        {
          "q": "멋지다 (すばらしい)",
          "answerJp": "すばらしかったです。",
          "answerRomaji": "Subarashikatta desu.",
          "kr": "멋졌어요."
        },
        {
          "q": "예쁘다 (きれい(な))",
          "answerJp": "きれいでした。",
          "answerRomaji": "Kiree deshita.",
          "kr": "예뻤어요."
        }
      ],
      "bonus": {
        "jp": "おかえりなさい。",
        "romaji": "Okaerinasai.",
        "kr": "다녀왔어요?",
        "desc": "외출했다가 돌아온 사람을 맞이할 때 하는 인사입니다. 친근한 사이에는 'おかえり(Okaeri)'라고 합니다."
      }
    },
    {
      "lesson": 19,
      "title": "手袋が欲しいんですが (장갑을 사고 싶은데요.)",
      "canDo": "사고 싶은 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "手袋が欲しいんですが。",
        "romaji": "Tebukuro ga hoshiin desu ga.",
        "kr": "장갑을 사고 싶은데요.",
        "desc": "점원에게 물건을 찾거나 살 때 '[물건] ga hoshiin desu ga'라고 합니다. '~n desu ga'는 자신의 의도나 사정을 완곡하게 설명하며 응대를 요청하는 표현입니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "あのう、すみません。手袋が欲しいんですが。",
          "romaji": "Anoo, sumimasen. Tebukuro ga hoshiin desu ga.",
          "kr": "저, 저기요. 장갑을 사고 싶은데요.",
          "note": "手袋(장갑) / 欲しい(원하다/사고싶다)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "手袋はこちらです。",
          "romaji": "Tebukuro wa kochira desu.",
          "kr": "장갑은 이쪽이에요.",
          "note": "こちら(이쪽)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "これ、あったかそう。",
          "romaji": "Kore, attakasoo.",
          "kr": "이거, 따뜻하겠다.",
          "note": "あったかい(따뜻하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "いいですね。これ、いくらですか。",
          "romaji": "Ii desu ne. Kore, ikura desu ka.",
          "kr": "좋네요. 이거, 얼마예요?",
          "note": ""
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "1,900円です。",
          "romaji": "Sen-kyuuhyaku-en desu.",
          "kr": "1,900엔이에요.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "カードは使えますか。",
          "romaji": "Kaado wa tsukaemasu ka.",
          "kr": "카드는 쓸 수 있어요?",
          "note": "カード(카드) / 使う(쓰다)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "はい、使えます。",
          "romaji": "Hai, tsukaemasu.",
          "kr": "네, 쓸 수 있어요.",
          "note": "使える(쓸 수 있다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "あのう、すみません。北海道のお土産が欲しいんですが。",
          "romaji": "Anoo, sumimasen. Hokkaidoo no omiyage ga hoshiin desu ga.",
          "kr": "저, 저기요. 홋카이도의 기념품을 사고 싶은데요."
        },
        {
          "speaker": "B",
          "jp": "そうですね。このお菓子はいかがですか。",
          "romaji": "Soo desu ne. Kono okashi wa ikaga desu ka.",
          "kr": "그렇군요. 이 과자는 어떻습니까?"
        }
      ],
      "practice": [
        {
          "q": "보자기 (風呂敷)",
          "answerJp": "あのう、すみません。風呂敷が欲しいんですが。",
          "answerRomaji": "Anoo, sumimasen. Furoshiki ga hoshiin desu ga.",
          "kr": "저, 저기요. 보자기를 사고 싶은데요."
        },
        {
          "q": "우산 (傘)",
          "answerJp": "あのう、すみません。傘が欲しいんですが。",
          "answerRomaji": "Anoo, sumimasen. Kasa ga hoshiin desu ga.",
          "kr": "저, 저기요. 우산을 사고 싶은데요."
        }
      ],
      "bonus": {
        "jp": "カードは使えますか。",
        "romaji": "Kaado wa tsukaemasu ka.",
        "kr": "카드는 쓸 수 있어요?",
        "desc": "쇼핑이나 식당에서 신용카드 사용 가능 여부를 묻는 핵심 필수 표현입니다."
      }
    },
    {
      "lesson": 20,
      "title": "わさびは入れないでください (고추냉이는 넣지 마세요.)",
      "canDo": "음식에 넣지 말아 달라고 말할 수 있다",
      "keyPhrase": {
        "jp": "わさびは入れないでください。",
        "romaji": "Wasabi wa irenaide kudasai.",
        "kr": "고추냉이는 넣지 마세요.",
        "desc": "특정 재료나 행동을 하지 말아 달라고 요청할 때는 '[동사의 NAI형] + de kudasai'를 사용합니다 (ireru → irenai)."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "おすすめは何ですか。",
          "romaji": "Osusume wa nan desu ka.",
          "kr": "추천할 만한 것이 뭐가 있어요?",
          "note": "おすすめ(추천)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "このスペシャル海鮮丼がおすすめだよ！イクラとウニがたっぷり入ってるよ。",
          "romaji": "Kono supesharu-kaisen-don ga osusume da yo! Ikura to uni ga tappuri haitteru yo.",
          "kr": "이 특선 회덮밥을 추천해요! 연어알하고 성게가 듬뿍 들어 있어요.",
          "note": "海鮮丼(해물덮밥) / たっぷり(듬뿍)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "じゃあ、それください。",
          "romaji": "Jaa, sore kudasai.",
          "kr": "그럼, 그거 주세요.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "私も。あ、わさびは入れないでください。",
          "romaji": "Watashi mo. A, wasabi wa irenaide kudasai.",
          "kr": "저도요. 아, 고추냉이는 넣지 마세요.",
          "note": "わさび(고추냉이) / 入れる(넣다)"
        },
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "わさび抜きね。そちらは？",
          "romaji": "Wasabi nuki ne. Sochira wa?",
          "kr": "고추냉이 빼고. 그쪽 손님은요?",
          "note": "〜抜き(~빼기/제외)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "私はわさびをたくさん入れてください。",
          "romaji": "Watashi wa wasabi o takusan irete kudasai.",
          "kr": "저는 고추냉이를 많이 넣어 주세요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "オレンジジュース1つ。氷は入れないでください。",
          "romaji": "Orenji-juusu hitotsu. Koori wa irenaide kudasai.",
          "kr": "오렌지주스 하나. 얼음은 넣지 마세요."
        },
        {
          "speaker": "B",
          "jp": "かしこまりました。",
          "romaji": "Kashikomarimashita.",
          "kr": "알겠습니다."
        }
      ],
      "practice": [
        {
          "q": "드레싱을 뿌리다 (ドレッシング / かける → かけない)",
          "answerJp": "ドレッシングはかけないでください。",
          "answerRomaji": "Doresshingu wa kakenaide kudasai.",
          "kr": "드레싱은 뿌리지 마세요."
        },
        {
          "q": "고춧가루를 쓰다 (唐辛子 / 使う → 使わない)",
          "answerJp": "唐辛子は使わないでください。",
          "answerRomaji": "Toogarashi wa tsukawanaide kudasai.",
          "kr": "고춧가루는 쓰지 마세요."
        }
      ],
      "bonus": {
        "jp": "おすすめは何ですか。",
        "romaji": "Osusume wa nan desu ka.",
        "kr": "추천할 만한 것이 뭐가 있어요?",
        "desc": "음식점이나 카페에서 시그니처 메뉴나 추천 요리를 물을 때 쓰는 표현입니다."
      }
    },
    {
      "lesson": 21,
      "title": "時計台の中にいます (시계탑 안에 있어요.)",
      "canDo": "자기가 있는 장소를 말할 수 있다",
      "keyPhrase": {
        "jp": "時計台の中にいます。",
        "romaji": "Tokeedai no naka ni imasu.",
        "kr": "시계탑 안에 있어요.",
        "desc": "자신이 위치한 장소를 표현할 때는 '[장소] ni imasu'라고 합니다. 구체적인 위치는 '[표적] no [위치] (tokeedai no naka - 시계탑 안) ni imasu' 형태로 말합니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "もしもし、タムさん。今、どこにいるの？",
          "romaji": "Moshimoshi, Tamu-san. Ima, doko ni iru no?",
          "kr": "여보세요, 탐 씨. 지금 어디 있어?",
          "note": "もしもし(여보세요) / 今(지금)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "時計台の中にいます。",
          "romaji": "Tokeedai no naka ni imasu.",
          "kr": "시계탑 안에 있어요.",
          "note": "時計台(시계탑) / 中(안)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "え、中？じゃあ、ぼくもすぐそっちに行くね。",
          "romaji": "E, naka? Jaa, boku mo sugu socchi ni iku ne.",
          "kr": "어, 안에? 그럼 나도 금방 그곳으로 갈게.",
          "note": "すぐ(곧/금방) / そっち(그쪽)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "わかりました。",
          "romaji": "Wakarimashita.",
          "kr": "알았어요.",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "あ、海斗！こっち、こっち！",
          "romaji": "A, Kaito! Kocchi, kocchi!",
          "kr": "아, 가이토! 여기 여기!",
          "note": "こっち(이쪽)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "ごめん、遅くなって。",
          "romaji": "Gomen, osoku natte.",
          "kr": "미안, 늦어서.",
          "note": "遅くなる(늦어지다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "今、どこにいますか。",
          "romaji": "Ima, doko ni imasu ka.",
          "kr": "지금 어디에 있어요?"
        },
        {
          "speaker": "B",
          "jp": "改札の前にいます。",
          "romaji": "Kaisatsu no mae ni imasu.",
          "kr": "개찰구 앞에 있어요."
        }
      ],
      "practice": [
        {
          "q": "편의점 안 (コンビニ / 中)",
          "answerJp": "コンビニの中にいます。",
          "answerRomaji": "Konbini no naka ni imasu.",
          "kr": "편의점 안에 있어요."
        },
        {
          "q": "안내소 옆 (インフォメーション / 横)",
          "answerJp": "インフォメーションの横にいます。",
          "answerRomaji": "Infomeeshon no yoko ni imasu.",
          "kr": "안내소 옆에 있어요."
        }
      ],
      "bonus": {
        "jp": "わかりました。",
        "romaji": "Wakarimashita.",
        "kr": "알았어요.",
        "desc": "상대방의 설명을 확실히 이해하고 수긍했음을 전할 때 쓰는 표준 응답 표현입니다."
      }
    },
    {
      "lesson": 22,
      "title": "写真を撮りましょう (사진을 찍읍시다.)",
      "canDo": "상대방에게 권할 수 있다",
      "keyPhrase": {
        "jp": "写真を撮りましょう。",
        "romaji": "Shashin o torimashoo.",
        "kr": "사진을 찍읍시다.",
        "desc": "상대방에게 청유하거나 권유할 때는 동사의 MASU형 어미 '~masu'를 '~mashoo(~합시다)'로 바꿉니다 (torimasu → torimashoo)."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "すごい！タム、見て見て！",
          "romaji": "Sugoi! Tamu, mite mite!",
          "kr": "대단하다! 탐, 봐봐!",
          "note": "見る(보다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "わあ、大きいですね。初めて見ました。",
          "romaji": "Waa, ookii desu ne. Hajimete mimashita.",
          "kr": "와, 크네요. 처음 봤어요.",
          "note": "大きい(크다) / 初めて(처음)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "どうやって作ったんだろう…。",
          "romaji": "Doo yatte tsukuttan daroo...",
          "kr": "어떻게 만들었을까….",
          "note": "どうやって(어떻게) / 作る(만들다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "きれいですね。みんなで写真を撮りましょう。",
          "romaji": "Kiree desu ne. Minna de shashin o torimashoo.",
          "kr": "예쁘네요. 다 같이 사진을 찍읍시다.",
          "note": "みんなで(다 함께) / 撮る(찍다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "いいね。",
          "romaji": "Ii ne.",
          "kr": "좋아.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "この店に入りましょう。",
          "romaji": "Kono mise ni hairimashoo.",
          "kr": "이 가게에 들어갑시다."
        },
        {
          "speaker": "B",
          "jp": "いいですね。",
          "romaji": "Ii desu ne.",
          "kr": "좋아요."
        }
      ],
      "practice": [
        {
          "q": "시계탑에 가다 (時計台に行く → 行きます)",
          "answerJp": "時計台に行きましょう。",
          "answerRomaji": "Tokeedai ni ikimashoo.",
          "kr": "시계탑에 갑시다."
        },
        {
          "q": "좀 쉬다 (ちょっと休む → 休みます)",
          "answerJp": "ちょっと休みましょう。",
          "answerRomaji": "Chotto yasumimashoo.",
          "kr": "좀 쉽시다."
        }
      ],
      "bonus": {
        "jp": "すごい！",
        "romaji": "Sugoi!",
        "kr": "대단하다!",
        "desc": "놀라거나 감동했을 때 칭찬하는 감탄사입니다. 정중하게는 'すごいですね(Sugoi desu ne)'라고 합니다."
      }
    },
    {
      "lesson": 23,
      "title": "私はこの猫が好きです (나는 이 고양이를 좋아해요.)",
      "canDo": "자기가 좋아하는 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "私はこの猫が好きです。",
        "romaji": "Watashi wa kono neko ga suki desu.",
        "kr": "나는 이 고양이를 좋아해요.",
        "desc": "좋아하는 대상을 말할 때는 '[대상] ga suki desu'라고 합니다. 'suki'는 NA형용사이며 좋아하는 대상 뒤에 조사 'ga'를 붙입니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "かわいい。みんなごはんを食べています。",
          "romaji": "Kawaii. Minna gohan o tabete imasu.",
          "kr": "귀엽다. 모두 밥을 먹고 있어요.",
          "note": "ごはん(밥/먹이)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "本当にかわいいね。おいで、おいで！私はこの子が好き。",
          "romaji": "Hontoo ni kawaii ne. Oide, oide! Watashi wa kono ko ga suki.",
          "kr": "정말로 귀엽네. 이리 와, 이리 와! 나는 얘가 좋아.",
          "note": "本当に(정말로) / 好き(좋아함)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "私はこの猫が好きです。",
          "romaji": "Watashi wa kono neko ga suki desu.",
          "kr": "나는 이 고양이를 좋아해요.",
          "note": "猫(고양이)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "猫カフェって、リラックスできるよね。",
          "romaji": "Neko-kafe tte, rirakkusu dekiru yo ne.",
          "kr": "고양이 카페는 느긋하게 쉴 수 있지?",
          "note": "リラックスする(편안히 쉬다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "ほんとですね。",
          "romaji": "Honto desu ne.",
          "kr": "정말 그래요.",
          "note": "ほんと(정말)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "食べ物は、何が好きですか。",
          "romaji": "Tabemono wa, nani ga suki desu ka.",
          "kr": "음식은 뭘 좋아해요?"
        },
        {
          "speaker": "B",
          "jp": "すしが好きです。",
          "romaji": "Sushi ga suki desu.",
          "kr": "초밥을 좋아해요."
        }
      ],
      "practice": [
        {
          "q": "J-POP",
          "answerJp": "J-POPが好きです。",
          "answerRomaji": "Jee-poppu ga suki desu.",
          "kr": "J-POP을 좋아해요."
        },
        {
          "q": "만화 (マンガ)",
          "answerJp": "マンガが好きです。",
          "answerRomaji": "Manga ga suki desu.",
          "kr": "만화를 좋아해요."
        }
      ],
      "bonus": {
        "jp": "ほんとですね。",
        "romaji": "Honto desu ne.",
        "kr": "정말 그래요.",
        "desc": "상대방의 의견이나 느낌에 대해 적극적으로 공감하고 동의할 때 쓰는 표현입니다."
      }
    },
    {
      "lesson": 24,
      "title": "生卵は食べられません (날계란은 못 먹어요.)",
      "canDo": "싫어하는 것이나 못 먹는 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "生卵は食べられません。",
        "romaji": "Nama-tamago wa taberaremasen.",
        "kr": "날계란은 못 먹어요.",
        "desc": "못 먹거나 할 수 없는 것을 나타낼 때는 가능형의 부정형을 씁니다. 'taberaremasen'은 'taberu(먹다)'의 가능부정형입니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 & 탐 (AB)",
          "gender": "male",
          "jp": "いただきます。",
          "romaji": "Itadakimasu.",
          "kr": "잘 먹겠습니다.",
          "note": "いただきます(식사 인사)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "日本食は健康にいいんですよ。",
          "romaji": "Nihon-shoku wa kenkoo ni iin desu yo.",
          "kr": "일본 음식은 건강에 좋아요.",
          "note": "日本食(일본식) / 健康(건강)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "これ、生卵ですか。",
          "romaji": "Kore, nama-tamago desu ka.",
          "kr": "이거 날계란이에요?",
          "note": "生卵(날달걀)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すみません。私、生卵は食べられません。",
          "romaji": "Sumimasen. Watashi, nama-tamago wa taberaremasen.",
          "kr": "미안해요. 저 날계란은 못 먹어요.",
          "note": "食べられない(먹지 못하다)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "そう。じゃあ、納豆もだめ？",
          "romaji": "Soo. Jaa, nattoo mo dame?",
          "kr": "그래? 그럼 낫토도 못 먹어?",
          "note": "納豆(낫토) / だめ(안 됨/무리)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "納豆！大好きです。",
          "romaji": "Nattoo! Daisuki desu.",
          "kr": "낫토! 아주 좋아해요.",
          "note": "大好き(아주 좋아함)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "どうぞ、たくさん食べてください。",
          "romaji": "Doozo, takusan tabete kudasai.",
          "kr": "어서, 많이 드세요."
        },
        {
          "speaker": "B",
          "jp": "すみません。私、刺身は食べられません。",
          "romaji": "Sumimasen. Watashi, sashimi wa taberaremasen.",
          "kr": "미안해요. 저, 회는 못 먹어요."
        }
      ],
      "practice": [
        {
          "q": "새우 (えび)",
          "answerJp": "すみません。私、えびは食べられません。",
          "answerRomaji": "Sumimasen. Watashi, ebi wa taberaremasen.",
          "kr": "미안해요. 저, 새우는 못 먹어요."
        },
        {
          "q": "돼지고기 (豚肉)",
          "answerJp": "すみません。私、豚肉は食べられません。",
          "answerRomaji": "Sumimasen. Watashi, butaniku wa taberaremasen.",
          "kr": "미안해요. 저, 돼지고기는 못 먹어요."
        }
      ],
      "bonus": {
        "jp": "いただきます。",
        "romaji": "Itadakimasu.",
        "kr": "잘 먹겠습니다.",
        "desc": "식사 전 음식을 차려준 사람과 식재료에 대한 감사의 뜻을 전하는 일본 고유의 식사 인사입니다."
      }
    },
    {
      "lesson": 25,
      "title": "のどが痛いんです (목이 아프거든요.)",
      "canDo": "몸 상태가 안 좋다는 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "のどが痛いんです。",
        "romaji": "Nodo ga itain desu.",
        "kr": "목이 아프거든요.",
        "desc": "몸 상태가 안 좋거나 사정을 설명할 때는 문말에 '~n desu'를 붙입니다. 신체 통증을 말할 때는 I형용사 'itai(아프다)'를 사용해 '[신체 부위] ga itain desu'라고 합니다."
      },
      "dialogues": [
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "タムさん、顔色が悪いですよ。どうしたんですか。",
          "romaji": "Tamu-san, kaoiro ga warui desu yo. Doo shitan desu ka.",
          "kr": "탐 씨, 안색이 나빠요. 왜 그래요?",
          "note": "顔色(안색) / 悪い(나쁘다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "のどが痛いんです。",
          "romaji": "Nodo ga itain desu.",
          "kr": "목이 아프거든요.",
          "note": "のど(목) / 痛い(아프다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "おやおや。そんなときには「しょうがはちみつ湯」がいいですよ。",
          "romaji": "Oya oya. Sonna toki ni wa 'shooga-hachimitsu-yu' ga ii desu yo.",
          "kr": "어머나! 그럴 때는 '생강꿀차'가 좋은데요.",
          "note": "しょうが(생강) / はちみつ(꿀)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "海斗が今、作っています。",
          "romaji": "Kaito ga ima, tsukutte imasu.",
          "kr": "가이토가 지금 만들고 있어요.",
          "note": "作る(만들다)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "タムさん、できたよ。はい、どうぞ。",
          "romaji": "Tamu-san, dekita yo. Hai, doozo.",
          "kr": "탐 씨, 다 됐어. 자, 여기.",
          "note": "できた(다 됐다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "お大事に。",
          "romaji": "Odaiji ni.",
          "kr": "몸조리 잘해.",
          "note": "お大事に(몸조리 잘하세요)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "どうしたんですか。",
          "romaji": "Doo shitan desu ka.",
          "kr": "왜 그래요?"
        },
        {
          "speaker": "B",
          "jp": "頭が痛いんです。熱があるんです。",
          "romaji": "Atama ga itain desu. Netsu ga arun desu.",
          "kr": "머리가 아프거든요. 열이 있거든요."
        }
      ],
      "practice": [
        {
          "q": "배가 아프다 (お腹が痛い)",
          "answerJp": "お腹が痛いんです。",
          "answerRomaji": "Onaka ga itain desu.",
          "kr": "배가 아프거든요."
        },
        {
          "q": "속이 메스껍다 (気持ちが悪い)",
          "answerJp": "気持ちが悪いんです。",
          "answerRomaji": "Kimochi ga waruin desu.",
          "kr": "속이 메스껍거든요."
        }
      ],
      "bonus": {
        "jp": "お大事に。",
        "romaji": "Odaiji ni.",
        "kr": "몸조리 잘해요.",
        "desc": "아프거나 다친 사람에게 쾌유를 빌며 건네는 대표적인 위로 표현입니다."
      }
    },
    {
      "lesson": 26,
      "title": "この卵焼き、甘くておいしいです (이 계란말이 달고 맛있어요.)",
      "canDo": "다소 복잡한 소감을 말할 수 있다 1",
      "keyPhrase": {
        "jp": "この卵焼き、甘くておいしいです。",
        "romaji": "Kono tamago-yaki, amakute oishii desu.",
        "kr": "이 계란말이 달고 맛있어요.",
        "desc": "I형용사 두 개를 대등하게 연결할 때는 앞 형용사의 어미 '~i'를 '~kute(~하고/해서)'로 바꿉니다 (amai → amakute). NA형용사는 '~de'로 연결합니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "お弁当だよ。ぼくが作ったんだ。どうぞ。",
          "romaji": "Obentoo da yo. Boku ga tsukuttan da. Doozo.",
          "kr": "도시락이야. 내가 만들었어. 자.",
          "note": "お弁当(도시락)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "きれい！",
          "romaji": "Kiree!",
          "kr": "예쁘다!",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "すごい！いただきます。この卵焼き、甘くておいしいです。",
          "romaji": "Sugoi! Itadakimasu. Kono tamago-yaki, amakute oishii desu.",
          "kr": "대단하다! 잘 먹겠습니다. 이 계란말이 달고 맛있어요.",
          "note": "卵焼き(계란말이) / 甘い(달다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "海斗は本当に料理が上手だね。",
          "romaji": "Kaito wa hontoo ni ryoori ga joozu da ne.",
          "kr": "가이토는 정말 요리를 잘하네.",
          "note": "料理(요리)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "ぼく、シェフになりたいんだ。",
          "romaji": "Boku, shefu ni naritain da.",
          "kr": "나 셰프가 되고 싶어.",
          "note": "〜になる(~이 되다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "いいねえ。",
          "romaji": "Ii nee.",
          "kr": "좋지.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "上野公園、どうでしたか。",
          "romaji": "Ueno-kooen, doo deshita ka.",
          "kr": "우에노공원 어땠어요?"
        },
        {
          "speaker": "B",
          "jp": "広くて、きれいで、とてもよかったです。",
          "romaji": "Hirokute, kiree de, totemo yokatta desu.",
          "kr": "넓고 예쁘고 아주 좋았어요."
        }
      ],
      "practice": [
        {
          "q": "작고 귀엽다 (小さい / かわいい)",
          "answerJp": "小さくてかわいいですね。",
          "answerRomaji": "Chiisakute kawaii desu ne.",
          "kr": "작고 귀엽네요."
        },
        {
          "q": "정확하고 편리하다 (正確(な) / 便利(な))",
          "answerJp": "正確で便利ですね。",
          "answerRomaji": "Seekaku de benri desu ne.",
          "kr": "정확하고 편리하네요."
        }
      ],
      "bonus": {
        "jp": "どうぞ。",
        "romaji": "Doozo.",
        "kr": "자, 드세요 / 여기 있어요.",
        "desc": "음식을 권하거나 물건을 건네줄 때, 상대방에게 양보할 때 두루 쓰는 만능 표현입니다."
      }
    },
    {
      "lesson": 27,
      "title": "どれが一番おいしいですか (어느 게 제일 맛있어요?)",
      "canDo": "어느 것을 고르면 좋을지 물을 수 있다",
      "keyPhrase": {
        "jp": "どれが一番おいしいですか。",
        "romaji": "Dore ga ichiban oishii desu ka.",
        "kr": "어느 게 제일 맛있어요?",
        "desc": "셋 이상의 선택지 중에서 가장 나은 것을 물을 때는 'Dore ga ichiban [형용사] desu ka'를 씁니다. 'dore'는 어느 것, 'ichiban'은 '가장/제일'을 뜻합니다."
      },
      "dialogues": [
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "ご注文は？",
          "romaji": "Gochuumon wa?",
          "kr": "주문은요?",
          "note": "注文(주문)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "タムさん、何にする？",
          "romaji": "Tamu-san, nani ni suru?",
          "kr": "탐 씨, 뭘로 할래?",
          "note": "〜にする(~로 정하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "どれが一番おいしいですか。",
          "romaji": "Dore ga ichiban oishii desu ka.",
          "kr": "어느 게 제일 맛있어요?",
          "note": "どれ(어느 것) / 一番(가장/제일)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "みそラーメンがおすすめだよ。",
          "romaji": "Miso-raamen ga osusume da yo.",
          "kr": "된장라면이 추천할 만해요.",
          "note": "みそ(된장)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "みそラーメン…。",
          "romaji": "Miso-raamen...",
          "kr": "된장라면….",
          "note": ""
        },
        {
          "role": "Yuuki",
          "roleLabel": "유키 (B)",
          "gender": "male",
          "jp": "日本のラーメンはおいしいよ。ぼくはみそラーメンが好きなんだ。",
          "romaji": "Nihon no raamen wa oishii yo. Boku wa miso-raamen ga suki nan da.",
          "kr": "일본 라면은 맛있어. 난 된장라면을 좋아해.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "私、みそラーメンにします。",
          "romaji": "Watashi, miso-raamen ni shimasu.",
          "kr": "저 된장라면으로 할래요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "どれが一番人気がありますか。",
          "romaji": "Dore ga ichiban ninki ga arimasu ka.",
          "kr": "어느 게 제일 인기 있어요?"
        },
        {
          "speaker": "B",
          "jp": "これがおすすめです。",
          "romaji": "Kore ga osusume desu.",
          "kr": "이게 추천할 만해요."
        }
      ],
      "practice": [
        {
          "q": "싸다 (安い)",
          "answerJp": "どれが一番安いですか。",
          "answerRomaji": "Dore ga ichiban yasui desu ka.",
          "kr": "어느 게 제일 싸요?"
        },
        {
          "q": "이득이다 (お得(な))",
          "answerJp": "どれが一番お得ですか。",
          "answerRomaji": "Dore ga ichiban otoku desu ka.",
          "kr": "어느 게 제일 득이 돼요?"
        }
      ],
      "bonus": {
        "jp": "ご注文は？",
        "romaji": "Gochuumon wa?",
        "kr": "주문은요?",
        "desc": "음식점이나 카페에서 주문을 받을 때 점원이 손님에게 공손히 묻는 표현입니다."
      }
    },
    {
      "lesson": 28,
      "title": "写真を撮ってもいいですか (사진을 찍어도 돼요?)",
      "canDo": "허가를 구할 수 있다",
      "keyPhrase": {
        "jp": "写真を撮ってもいいですか。",
        "romaji": "Shashin o totte mo ii desu ka.",
        "kr": "사진을 찍어도 돼요?",
        "desc": "상대방에게 어떤 행위의 허가를 구할 때는 '동사의 TE형 + mo ii desu ka(~해도 됩니까?)'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "大人1人お願いします。すみません。写真を撮ってもいいですか。",
          "romaji": "Otona hitori onegai-shimasu. Sumimasen. Shashin o totte mo ii desu ka.",
          "kr": "어른 한 명 부탁합니다. 저기요, 사진을 찍어도 돼요?",
          "note": "大人(어른) / 1人(한 명)"
        },
        {
          "role": "Staff",
          "roleLabel": "접수 직원 (B)",
          "gender": "female",
          "jp": "ええ、いいですよ。",
          "romaji": "Ee, ii desu yo.",
          "kr": "네, 괜찮아요.",
          "note": "ええ(네)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "すてき！",
          "romaji": "Suteki!",
          "kr": "멋지다!",
          "note": "すてき(멋짐/근사함)"
        },
        {
          "role": "Staff",
          "roleLabel": "안내 직원 (B)",
          "gender": "male",
          "jp": "お客様、ここから先はご遠慮ください。",
          "romaji": "Okyaku-sama, koko kara saki wa goenryo-kudasai.",
          "kr": "손님, 여기서부터 앞쪽은 삼가 주세요.",
          "note": "お客様(손님) / 遠慮する(삼가다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "あ、すみません。",
          "romaji": "A, sumimasen.",
          "kr": "아, 미안합니다.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "この服、試着してもいいですか。",
          "romaji": "Kono fuku, shichaku-shite mo ii desu ka.",
          "kr": "이 옷 입어 봐도 돼요?"
        },
        {
          "speaker": "B",
          "jp": "もちろんです。",
          "romaji": "Mochiron desu.",
          "kr": "그럼요."
        }
      ],
      "practice": [
        {
          "q": "들어가다 (入る → 入って)",
          "answerJp": "入ってもいいですか。",
          "answerRomaji": "Haitte mo ii desu ka.",
          "kr": "들어가도 돼요?"
        },
        {
          "q": "쉬다 (休む → 休んで)",
          "answerJp": "休んでもいいですか。",
          "answerRomaji": "Yasunde mo ii desu ka.",
          "kr": "쉬어도 돼요?"
        }
      ],
      "bonus": {
        "jp": "ええ、いいですよ。",
        "romaji": "Ee, ii desu yo.",
        "kr": "네, 괜찮아요.",
        "desc": "상대방의 요청이나 허가 질문에 부드럽게 승낙하는 일상 회화 표현입니다."
      }
    },
    {
      "lesson": 29,
      "title": "ピアノの演奏を聴きに行きました (피아노 연주를 들으러 갔어요.)",
      "canDo": "무엇을 했는지 말할 수 있다",
      "keyPhrase": {
        "jp": "ピアノの演奏を聴きに行きました。",
        "romaji": "Piano no ensoo o kiki ni ikimashita.",
        "kr": "피아노 연주를 들으러 갔어요.",
        "desc": "이동의 목적을 나타낼 때는 '[동사 MASU형 어간] + ni iku(~하러 가다)'를 씁니다. 'kiki'는 'kikimasu(듣다)'에서 masu를 뺀 형태입니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "日曜日に、ピアノの演奏を聴きに行きました。",
          "romaji": "Nichi-yoobi ni, piano no ensoo o kiki ni ikimashita.",
          "kr": "일요일에 피아노 연주를 들으러 갔어요.",
          "note": "日曜日(일요일) / 演奏(연주) / 聴く(듣다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "どうでしたか。",
          "romaji": "Doo deshita ka.",
          "kr": "어땠어요?",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "すばらしかったです。",
          "romaji": "Subarashikatta desu.",
          "kr": "근사했어요.",
          "note": "すばらしい(근사하다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "それはよかったですね。",
          "romaji": "Sore wa yokatta desu ne.",
          "kr": "그거 다행이네요.",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "写真をたくさん撮りました。見てください。",
          "romaji": "Shashin o takusan torimashita. Mite kudasai.",
          "kr": "사진을 많이 찍었어요. 보세요.",
          "note": "見てください(보세요)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "あ！これ、悠輝さん…。",
          "romaji": "A! Kore, Yuuki-san...",
          "kr": "아! 이거 유키 씨….",
          "note": ""
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "悠輝さん？",
          "romaji": "Yuuki-san?",
          "kr": "유키 씨?",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "今日、どこに行きましたか。",
          "romaji": "Kyoo, doko ni ikimashita ka.",
          "kr": "오늘 어디에 갔어요?"
        },
        {
          "speaker": "B",
          "jp": "原宿に、服を買いに行きました。",
          "romaji": "Harajuku ni, fuku o kai ni ikimashita.",
          "kr": "하라주쿠에 옷을 사러 갔어요."
        }
      ],
      "practice": [
        {
          "q": "초밥을 먹다 (すしを食べる → 食べ)",
          "answerJp": "すしを食べに行きました。",
          "answerRomaji": "Sushi o tabe ni ikimashita.",
          "kr": "초밥을 먹으러 갔어요."
        },
        {
          "q": "야구를 보다 (野球を見る → 見)",
          "answerJp": "野球を見に行きました。",
          "answerRomaji": "Yakyuu o mi ni ikimashita.",
          "kr": "야구를 보러 갔어요."
        }
      ],
      "bonus": {
        "jp": "見てください。",
        "romaji": "Mite kudasai.",
        "kr": "보세요 / 봐 주세요.",
        "desc": "상대방의 시선을 이끌며 무언가를 보여줄 때 쓰는 기본 권유 표현입니다."
      }
    },
    {
      "lesson": 30,
      "title": "一緒に歌ったり、踊ったりしました (같이 노래를 부르거나 춤을 추거나 했어요.)",
      "canDo": "한 일이나 앞으로 할 일 등을 말할 수 있다",
      "keyPhrase": {
        "jp": "一緒に歌ったり、踊ったりしました。",
        "romaji": "Issho ni utattari, odottari shimashita.",
        "kr": "같이 노래를 부르거나 춤을 추거나 했어요.",
        "desc": "여러 동작을 예시로 열거할 때는 '[동사의 TE형에서 te를 뺀 어간] + tari, [동사] + tari suru' 형식을 사용합니다."
      },
      "dialogues": [
        {
          "role": "Staff",
          "roleLabel": "점원 (B)",
          "gender": "male",
          "jp": "メロンパフェでございます。",
          "romaji": "Meron-pafe de gozaimasu.",
          "kr": "멜론 파르페입니다.",
          "note": "メロンパフェ(멜론파르페)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "おいしそう！",
          "romaji": "Oishisoo!",
          "kr": "맛있겠다!",
          "note": "おいしそう(맛있어 보임)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "タム、悠輝さんと、どこで会ったの？",
          "romaji": "Tamu, Yuuki-san to, doko de atta no?",
          "kr": "탐, 유키 씨하고 어디에서 만났어?",
          "note": "会った(만났다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "ベトナムです。小学校でボランティアをしました。一緒に歌ったり、踊ったりしました。",
          "romaji": "Betonamu desu. Shoogakkoo de borantia o shimashita. Issho ni utattari, odottari shimashita.",
          "kr": "베트남요. 초등학교에서 자원봉사를 했어요. 같이 노래를 부르거나 춤을 추거나 했어요.",
          "note": "小学校(초등학교) / 歌う(노래하다) / 踊る(춤추다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "そうだったの。",
          "romaji": "Soo datta no.",
          "kr": "그랬구나.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。悠輝さんに会いたいです。",
          "romaji": "Hai. Yuuki-san ni aitai desu.",
          "kr": "네. 유키 씨를 만나고 싶어요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "北海道で何をしますか。",
          "romaji": "Hokkaidoo de nani o shimasu ka.",
          "kr": "홋카이도에서 뭘 할 거예요?"
        },
        {
          "speaker": "B",
          "jp": "ハイキングをしたり、温泉に入ったりしたいです。",
          "romaji": "Haikingu o shitari, onsen ni haittari shitai desu.",
          "kr": "하이킹을 하거나 온천에 들어가거나 하고 싶어요."
        }
      ],
      "practice": [
        {
          "q": "쇼핑을 하거나 바다에서 수영 (買い物をする → したり / 海で泳ぐ → 泳いだり)",
          "answerJp": "買い物をしたり、海で泳いだりしました。",
          "answerRomaji": "Kaimono o shitari, umi de oyoidari shimashita.",
          "kr": "쇼핑을 하거나 바다에서 수영하거나 했어요."
        },
        {
          "q": "절에 가거나 기모노를 입다 (お寺に行く → 行ったり / 着物を着る → 着たり)",
          "answerJp": "お寺に行ったり、着物を着たりしたいです。",
          "answerRomaji": "Otera ni ittari, kimono o kitari shitai desu.",
          "kr": "절에 가거나 기모노를 입거나 하고 싶어요."
        }
      ],
      "bonus": {
        "jp": "おいしそう！",
        "romaji": "Oishisoo!",
        "kr": "맛있겠다!",
        "desc": "음식의 먹음직스러운 겉모습을 보며 기대감을 나타낼 때 쓰는 대표적인 감탄 표현입니다."
      }
    },
    {
      "lesson": 31,
      "title": "一緒に行きませんか (같이 가지 않을래요?)",
      "canDo": "상대방에게 권할 수 있다 2",
      "keyPhrase": {
        "jp": "一緒に行きませんか。",
        "romaji": "Issho ni ikimasen ka.",
        "kr": "같이 가지 않을래요?",
        "desc": "상대방의 의향을 정중하게 물으며 권유할 때는 '동사 MASU형 어간 + masen ka(~하지 않겠습니까?)'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "今度の土曜日、海斗と忍者博物館に行きます。",
          "romaji": "Kondo no do-yoobi, Kaito to Ninja-Hakubutsukan ni ikimasu.",
          "kr": "이번 토요일에 가이토하고 닌자박물관에 가요.",
          "note": "今度(이번) / 博物館(박물관)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "マイクさんは、本当に忍者が好きですね。",
          "romaji": "Maiku-san wa, hontoo ni ninja ga suki desu ne.",
          "kr": "마이크 씨는 정말로 닌자를 좋아하는군요.",
          "note": ""
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "はい。みんなで一緒に行きませんか。",
          "romaji": "Hai. Minna de issho ni ikimasen ka.",
          "kr": "네. 다 같이 가지 않을래요?",
          "note": "行きませんか(가지 않겠어요?)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ああ、土曜日はちょっと…。",
          "romaji": "Aa, do-yoobi wa chotto...",
          "kr": "아, 토요일은 좀….",
          "note": "ちょっと(좀/곤란함 표현)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "私も授業があります。",
          "romaji": "Watashi mo jugyoo ga arimasu.",
          "kr": "저도 수업이 있어요.",
          "note": "授業(수업)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "残念。じゃあ、2人で行こう。",
          "romaji": "Zannen. Jaa, futari de ikoo.",
          "kr": "아쉽네. 그럼 둘이서 가자.",
          "note": "残念(아쉬움) / 2人で(둘이서)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "今晩、一緒にごはんを食べに行きませんか。",
          "romaji": "Konban, issho ni gohan o tabe ni ikimasen ka.",
          "kr": "오늘 밤, 같이 밥 먹으러 가지 않을래요?"
        },
        {
          "speaker": "B",
          "jp": "いいですね。行きましょう。",
          "romaji": "Ii desu ne. Ikimashoo.",
          "kr": "좋아요. 갑시다."
        }
      ],
      "practice": [
        {
          "q": "다 함께 바비큐를 하다 (みんなでバーベキューをする → します)",
          "answerJp": "みんなでバーベキューをしませんか。",
          "answerRomaji": "Minna de baabekyuu o shimasen ka.",
          "kr": "다 함께 바비큐를 하지 않을래요?"
        },
        {
          "q": "같이 노래하다 (一緒に歌う → 歌います)",
          "answerJp": "一緒に歌いませんか。",
          "answerRomaji": "Issho ni utaimasen ka.",
          "kr": "같이 노래하지 않을래요?"
        }
      ],
      "bonus": {
        "jp": "土曜日はちょっと…。",
        "romaji": "Do-yoobi wa chotto...",
        "kr": "토요일은 좀….",
        "desc": "권유를 거절할 때 직설적으로 거절하지 않고 완곡하게 사양하는 일본 특유의 배려 표현입니다."
      }
    },
    {
      "lesson": 32,
      "title": "忍者博物館まで、どう行ったらいいですか (닌자박물관까지 어떻게 가면 돼요?)",
      "canDo": "가는 법을 물을 수 있다",
      "keyPhrase": {
        "jp": "忍者博物館まで、どう行ったらいいですか。",
        "romaji": "Ninja-Hakubutsukan made, doo ittara ii desu ka.",
        "kr": "닌자박물관까지 어떻게 가면 돼요?",
        "desc": "목적지로 가는 경로를 질문할 때는 '[목적지] made, doo ittara ii desu ka' 형식을 사용합니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "マイク、似合うね。かっこいい。",
          "romaji": "Maiku, niau ne. Kakkoii.",
          "kr": "마이크 어울려. 멋지다.",
          "note": "似合う(어울리다) / かっこいい(멋지다)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "うれしいな。あのう、すみません。忍者博物館まで、どう行ったらいいですか。",
          "romaji": "Ureshii na. Anoo, sumimasen. Ninja-Hakubutsukan made, doo ittara ii desu ka.",
          "kr": "기쁘네. 저, 저기요. 닌자박물관까지 어떻게 가면 돼요?",
          "note": "うれしい(기쁘다)"
        },
        {
          "role": "Passerby",
          "roleLabel": "행인 (B)",
          "gender": "male",
          "jp": "この道をまっすぐ行ってください。博物館は、左にあります。",
          "romaji": "Kono michi o massugu itte kudasai. Hakubutsukan wa, hidari ni arimasu.",
          "kr": "이 길을 곧장 가세요. 박물관은 왼쪽에 있어요.",
          "note": "まっすぐ(곧장) / 左(왼쪽)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "わかりました。ありがとうございます。",
          "romaji": "Wakarimashita. Arigatoo gozaimasu.",
          "kr": "알겠습니다. 감사합니다.",
          "note": ""
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "さあ、行こう！",
          "romaji": "Saa, ikoo!",
          "kr": "자, 가자!",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "あのう、すみません。金閣寺まで、どう行ったらいいですか。",
          "romaji": "Anoo, sumimasen. Kinkaku-ji made, doo ittara ii desu ka.",
          "kr": "저, 저기요. 긴카쿠지 절까지 어떻게 가면 돼요?"
        },
        {
          "speaker": "B",
          "jp": "101番のバスに乗ってください。",
          "romaji": "Hyaku-ichi-ban no basu ni notte kudasai.",
          "kr": "101번 버스를 타세요."
        }
      ],
      "practice": [
        {
          "q": "이 호텔 (このホテル)",
          "answerJp": "あのう、すみません。このホテルまで、どう行ったらいいですか。",
          "answerRomaji": "Anoo, sumimasen. Kono hoteru made, doo ittara ii desu ka.",
          "kr": "저, 저기요. 이 호텔까지 어떻게 가면 돼요?"
        },
        {
          "q": "신칸센 플랫폼 (新幹線のホーム)",
          "answerJp": "あのう、すみません。新幹線のホームまで、どう行ったらいいですか。",
          "answerRomaji": "Anoo, sumimasen. Shinkansen no hoomu made, doo ittara ii desu ka.",
          "kr": "저, 저기요. 신칸센 플랫폼까지 어떻게 가면 돼요?"
        }
      ],
      "bonus": {
        "jp": "まっすぐ行ってください。",
        "romaji": "Massugu itte kudasai.",
        "kr": "곧장 가세요.",
        "desc": "길을 안내할 때 직진을 지시하는 가장 대표적인 방향 표현입니다."
      }
    },
    {
      "lesson": 33,
      "title": "どのくらい待ちますか (얼마나 기다려요?)",
      "canDo": "소요 시간을 물을 수 있다",
      "keyPhrase": {
        "jp": "どのくらい待ちますか。",
        "romaji": "Donokurai machimasu ka.",
        "kr": "얼마나 기다려요?",
        "desc": "시간이나 기간, 거리가 얼마나 걸리는지 물을 때는 의문사 'donokurai(어느 정도)'와 동사를 함께 씁니다."
      },
      "dialogues": [
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "どのくらい待ちますか。",
          "romaji": "Donokurai machimasu ka.",
          "kr": "얼마나 기다려요?",
          "note": "どのくらい(얼마나) / 待つ(기다리다)"
        },
        {
          "role": "Staff",
          "roleLabel": "담당직원1 (B)",
          "gender": "female",
          "jp": "15分くらいです。",
          "romaji": "Juu-go-fun kurai desu.",
          "kr": "15분 정도요.",
          "note": "〜くらい(~정도)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "わかりました。",
          "romaji": "Wakarimashita.",
          "kr": "알겠습니다.",
          "note": ""
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "すごい！本物の手裏剣だ。",
          "romaji": "Sugoi! Honmono no shuriken da.",
          "kr": "대단하다! 진짜 수리검이야.",
          "note": "本物(진짜) / 手裏剣(수리검)"
        },
        {
          "role": "Staff",
          "roleLabel": "담당직원2 (B)",
          "gender": "male",
          "jp": "あの的に投げてください。",
          "romaji": "Ano mato ni nagete kudasai.",
          "kr": "저 과녁을 향해 던지세요.",
          "note": "的(과녁) / 投げる(던지다)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "えい！あ、落ちちゃった。",
          "romaji": "Ei! A, ochichatta.",
          "kr": "에잇! 아, 떨어져 버렸다.",
          "note": "落ちる(떨어지다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。あと、どのくらいかかりますか。",
          "romaji": "Sumimasen. Ato, donokurai kakarimasu ka.",
          "kr": "저기요. 얼마나 더 걸려요?"
        },
        {
          "speaker": "B",
          "jp": "20分くらいです。",
          "romaji": "Nijuppun kurai desu.",
          "kr": "20분 정도요."
        }
      ],
      "practice": [
        {
          "q": "걷다 (歩く → 歩きます)",
          "answerJp": "どのくらい歩きますか。",
          "answerRomaji": "Donokurai arukimasu ka.",
          "kr": "얼마나 걸어야 하나요?"
        },
        {
          "q": "오래 가다/버티다 (もつ → もちます)",
          "answerJp": "どのくらいもちますか。",
          "answerRomaji": "Donokurai mochimasu ka.",
          "kr": "얼마나 오래 가나요?"
        }
      ],
      "bonus": {
        "jp": "どのくらいかかりますか。",
        "romaji": "Donokurai kakarimasu ka.",
        "kr": "얼마나 걸려요?",
        "desc": "이동 시간이나 작업에 걸리는 시간을 물어볼 때 가장 자주 쓰는 관용 표현입니다."
      }
    },
    {
      "lesson": 34,
      "title": "読んだことあります (읽은 적 있어요.)",
      "canDo": "자신의 경험에 대해 말할 수 있다",
      "keyPhrase": {
        "jp": "読んだことあります。",
        "romaji": "Yonda koto arimasu.",
        "kr": "읽은 적 있어요.",
        "desc": "과거의 경험 유무를 말할 때는 '[동사의 TA형] + koto (ga) arimasu(~한 적이 있습니다)'를 사용합니다. 부정은 'koto (ga) nai desu'입니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "わあ、マンガがたくさん！",
          "romaji": "Waa, manga ga takusan!",
          "kr": "와, 만화가 많다!",
          "note": "マンガ(만화)"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "タムさん、このマンガ、知ってる？",
          "romaji": "Tamu-san, kono manga, shitteru?",
          "kr": "탐 씨, 이 만화 알아?",
          "note": "知っている(알고 있다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい、読んだことあります。",
          "romaji": "Hai, yonda koto arimasu.",
          "kr": "네, 읽은 적 있어요.",
          "note": "読む(읽다) / 〜たことがある"
        },
        {
          "role": "Mike",
          "roleLabel": "마이크 (B)",
          "gender": "male",
          "jp": "え？日本語で読んだの？",
          "romaji": "E? Nihongo de yonda no?",
          "kr": "어? 일본어로 읽었어?",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "いえ、ベトナム語です。とてもおもしろかったです。",
          "romaji": "Ie, Betonamugo desu. Totemo omoshirokatta desu.",
          "kr": "아니요, 베트남어로요. 아주 재미있었어요.",
          "note": "ベトナム語(베트남어) / おもしろい(재미있다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "明日、盆踊りがありますよ。",
          "romaji": "Ashita, bon-odori ga arimasu yo.",
          "kr": "내일 본오도리가 있어요."
        },
        {
          "speaker": "B",
          "jp": "盆踊り、ネットで見たことあります。でも本物は見たことないです。",
          "romaji": "Bon-odori, netto de mita koto arimasu. Demo honmono wa mita koto nai desu.",
          "kr": "본오도리, 인터넷에서 본 적 있어요. 하지만 실제로 본 적은 없어요."
        }
      ],
      "practice": [
        {
          "q": "오키나와에 가다 (沖縄 / 行く → 行った)",
          "answerJp": "沖縄、行ったことあります。",
          "answerRomaji": "Okinawa, itta koto arimasu.",
          "kr": "오키나와에 가 본 적 있어요."
        },
        {
          "q": "덴푸라를 먹다 (天ぷら / 食べる → 食べた - 부정)",
          "answerJp": "天ぷら、食べたことないです。",
          "answerRomaji": "Tenpura, tabeta koto nai desu.",
          "kr": "덴푸라는 먹어 본 적 없어요."
        }
      ],
      "bonus": {
        "jp": "知ってる？",
        "romaji": "Shitteru?",
        "kr": "알아?",
        "desc": "친구 사이에서 가볍게 물을 때 쓰며, 정중형은 '知っていますか(Shitte imasu ka)'입니다."
      }
    },
    {
      "lesson": 35,
      "title": "大涌谷に行って、黒たまごが食べたいです (오와쿠다니에 가서 검은 달걀을 먹고 싶어요)",
      "canDo": "할 것이나 하고 싶은 것을 차례로 말할 수 있다",
      "keyPhrase": {
        "jp": "大涌谷に行って、黒たまごが食べたいです。",
        "romaji": "Oowaku-dani ni itte, kuro-tamago ga tabetai desu.",
        "kr": "오와쿠다니에 가서 검은 달걀을 먹고 싶어요.",
        "desc": "두 개 이상의 연속된 행동을 시간 순서대로 연결할 때는 '[동사1의 TE형], [동사2]'의 구조를 사용합니다 (iku → itte)."
      },
      "dialogues": [
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "箱根には1時に着くよ。タムは何がしたい？",
          "romaji": "Hakone ni wa ichi-ji ni tsuku yo. Tamu wa nani ga shitai?",
          "kr": "하코네에는 1시에 도착해. 탐은 뭐가 하고 싶어?",
          "note": "着く(도착하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "大涌谷に行って、黒たまごが食べたいです。あやかさん、卵は本当に黒いんですか。",
          "romaji": "Oowaku-dani ni itte, kuro-tamago ga tabetai desu. Ayaka-san, tamago wa hontoo ni kuroin desu ka.",
          "kr": "오와쿠다니에 가서 검은 달걀을 먹고 싶어요. 아야카 씨, 달걀은 정말로 검은색이에요?",
          "note": "黒い(검다) / 卵(달걀)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "うん。でもね、黒いのは外側だけ。中は普通のゆで卵。",
          "romaji": "Un. Demo ne, kuroi no wa sotogawa dake. Naka wa futsuu no yude-tamago.",
          "kr": "응. 하지만 검은 건 겉뿐이야. 속은 보통 삶은 달걀.",
          "note": "外側(바깥쪽/겉) / 普通(보통)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "へえ。",
          "romaji": "Hee.",
          "kr": "아아.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "今日は、どこに行きましたか。",
          "romaji": "Kyoo wa, doko ni ikimashita ka.",
          "kr": "오늘은 어디에 갔어요?"
        },
        {
          "speaker": "B",
          "jp": "美術館に行って、ご飯を食べて、それから遊覧船に乗りました。",
          "romaji": "Bijutsukan ni itte, gohan o tabete, sorekara yooransen ni norimashita.",
          "kr": "미술관에 가서 밥을 먹고, 그러고 나서 유람선을 탔어요."
        }
      ],
      "practice": [
        {
          "q": "다카오산에 올라가 사진 찍기 (高尾山に登る → 登って / 写真を撮る → 撮りたいです)",
          "answerJp": "高尾山に登って、写真を撮りたいです。",
          "answerRomaji": "Takao-san ni nobotte, shashin o toritai desu.",
          "kr": "다카오산에 올라가서 사진을 찍고 싶어요."
        },
        {
          "q": "시부야에 가서 쇼핑하고 밥 먹음 (渋谷に行く → 行って / 買い物をする → して / ご飯を食べる → 食べました)",
          "answerJp": "渋谷に行って、買い物をして、ご飯を食べました。",
          "answerRomaji": "Shibuya ni itte, kaimono o shite, gohan o tabemashita.",
          "kr": "시부야에 가서 쇼핑을 하고 밥을 먹었어요."
        }
      ],
      "bonus": {
        "jp": "黒いのは外側だけ。",
        "romaji": "Kuroi no wa sotogawa dake.",
        "kr": "검은 건 겉뿐이야.",
        "desc": "특정 성질이 겉면에만 한정된다는 것을 설명할 때 쓰는 구문입니다."
      }
    },
    {
      "lesson": 36,
      "title": "お風呂は何時から何時までですか (목욕은 몇 시부터 몇 시까지예요?)",
      "canDo": "시간을 물어볼 수 있다",
      "keyPhrase": {
        "jp": "お風呂は何時から何時までですか。",
        "romaji": "Ofuro wa nan-ji kara nan-ji made desu ka.",
        "kr": "목욕은 몇 시부터 몇 시까지예요?",
        "desc": "시작과 종료 시각을 물을 때는 '[대상] wa nan-ji kara nan-ji made desu ka' 형식을 사용합니다. 'kara(~부터)'와 'made(~까지)'는 시간의 범위를 나타냅니다."
      },
      "dialogues": [
        {
          "role": "Staff",
          "roleLabel": "종업원 (B)",
          "gender": "female",
          "jp": "こちらのお部屋でございます。",
          "romaji": "Kochira no oheya de gozaimasu.",
          "kr": "이 방입니다.",
          "note": "お部屋(방)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "お風呂は何時から何時までですか。",
          "romaji": "Ofuro wa nan-ji kara nan-ji made desu ka.",
          "kr": "목욕은 몇 시부터 몇 시까지예요?",
          "note": "お風呂(목욕/탕)"
        },
        {
          "role": "Staff",
          "roleLabel": "종업원 (B)",
          "gender": "female",
          "jp": "朝6時から夜12時までです。",
          "romaji": "Asa roku-ji kara yoru juuni-ji made desu.",
          "kr": "아침 6시부터 밤 12시까지입니다.",
          "note": "朝(아침) / 夜(밤)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "タム、日本の温泉、入ったことある？",
          "romaji": "Tamu, Nihon no onsen, haitta koto aru?",
          "kr": "탐, 일본의 온천 들어간 적 있어?",
          "note": "入る(들어가다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "いいえ、初めてです。楽しみです。",
          "romaji": "Iie, hajimete desu. Tanoshimi desu.",
          "kr": "아니요, 처음이에요. 기대돼요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。明日の朝食は何時から何時までですか。",
          "romaji": "Sumimasen. Ashita no chooshoku wa nan-ji kara nan-ji made desu ka.",
          "kr": "저기요. 내일 아침 식사는 몇 시부터 몇 시까지예요?"
        },
        {
          "speaker": "B",
          "jp": "6時から9時半までになります。",
          "romaji": "Roku-ji kara ku-ji-han made ni narimasu.",
          "kr": "6시부터 9시 반까지입니다."
        }
      ],
      "practice": [
        {
          "q": "불꽃 축제 시작 시간 (花火大会 / 何時から)",
          "answerJp": "花火大会は何時からですか。",
          "answerRomaji": "Hanabi-taikai wa nan-ji kara desu ka.",
          "kr": "불꽃 축제는 몇 시부터예요?"
        },
        {
          "q": "가게 마감 시간 (この店 / 何時まで)",
          "answerJp": "この店は何時までですか。",
          "answerRomaji": "Kono mise wa nan-ji made desu ka.",
          "kr": "이 가게는 몇 시까지예요?"
        }
      ],
      "bonus": {
        "jp": "初めてです。",
        "romaji": "Hajimete desu.",
        "kr": "처음이에요.",
        "desc": "경험의 유무를 묻는 질문에 처음 해보는 것임을 밝힐 때 사용하는 표준 답변입니다."
      }
    },
    {
      "lesson": 37,
      "title": "テレビがつかないんですが… (텔레비전이 안 켜지는데요…)",
      "canDo": "결함이 있다는 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "テレビがつかないんですが…。",
        "romaji": "Terebi ga tsukanain desu ga...",
        "kr": "텔레비전이 안 켜지는데요….",
        "desc": "기기나 시설에 결함이 있어 곤란한 상황을 전할 때는 동사의 NAI형에 '~n desu ga(부정형 + ~인데요)'를 붙여 상대방의 대처를 정중하게 요청합니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "あれ、テレビがつきませんね。",
          "romaji": "Are, terebi ga tsukimasen ne.",
          "kr": "어, 텔레비전이 안 켜지네요.",
          "note": "つく(켜지다)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "ほんとだ。おかしいね。",
          "romaji": "Honto da. Okashii ne.",
          "kr": "정말이네. 이상한데.",
          "note": "おかしい(이상하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "フロントに電話してみます。すみません。テレビがつかないんですが…。",
          "romaji": "Furonto ni denwa-shite mimasu. Sumimasen. Terebi ga tsukanain desu ga...",
          "kr": "프런트에 전화해 볼게요. 저기요. 텔레비전이 안 켜지는데요….",
          "note": "フロント(프런트) / 電話する(전화하다)"
        },
        {
          "role": "Front",
          "roleLabel": "프런트 (B)",
          "gender": "male",
          "jp": "少々お待ちください。担当の者が伺います。",
          "romaji": "Shooshoo omachi kudasai. Tantoo no mono ga ukagaimasu.",
          "kr": "잠시 기다려 주세요. 담당자가 찾아뵙겠습니다.",
          "note": "少々(잠시) / 伺う(찾아뵙다/방문하다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。Wi-Fiのパスワードがわからないんですが…。",
          "romaji": "Sumimasen. Waifai no pasuwaado ga wakaranain desu ga...",
          "kr": "저기요. Wi-Fi 비밀번호를 모르겠는데요…."
        },
        {
          "speaker": "B",
          "jp": "パスワードですね。こちらです。",
          "romaji": "Pasuwaado desu ne. Kochira desu.",
          "kr": "비밀번호요. 이겁니다."
        }
      ],
      "practice": [
        {
          "q": "열쇠가 열리지 않다 (鍵が開かない)",
          "answerJp": "すみません。鍵が開かないんですが…。",
          "answerRomaji": "Sumimasen. Kagi ga akanain desu ga...",
          "kr": "저기요. 열쇠가 안 열리는데요…."
        },
        {
          "q": "유카타 사이즈가 맞지 않다 (浴衣のサイズが合わない)",
          "answerJp": "すみません。浴衣のサイズが合わないんですが…。",
          "answerRomaji": "Sumimasen. Yukata no saizu ga awanain desu ga...",
          "kr": "저기요. 유카타 사이즈가 안 맞는데요…."
        }
      ],
      "bonus": {
        "jp": "少々お待ちください。",
        "romaji": "Shooshoo omachi kudasai.",
        "kr": "잠시 기다려 주세요.",
        "desc": "호텔, 매장 등에서 손님에게 대기를 요청할 때 쓰는 대표적인 비즈니스 경어 표현입니다."
      }
    },
    {
      "lesson": 38,
      "title": "外のほうがいいです (밖이 더 좋아요.)",
      "canDo": "두 가지를 비교해서 말할 수 있다",
      "keyPhrase": {
        "jp": "外のほうがいいです。",
        "romaji": "Soto no hoo ga ii desu.",
        "kr": "밖이 더 좋아요.",
        "desc": "두 대상을 비교할 때는 '(A yori) B no hoo ga [형용사] desu((A보다) B 쪽이 더 ~해요)' 형식을 사용합니다. 비교 대상이 명확하면 'A yori'는 생략합니다."
      },
      "dialogues": [
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "タム、中に座る？それとも、外のデッキに行く？",
          "romaji": "Tamu, naka ni suwaru? Soretomo, soto no dekki ni iku?",
          "kr": "탐, 안에 앉을래? 아니면 밖의 갑판으로 갈래?",
          "note": "座る(앉다) / それとも(아니면) / デッキ(갑판)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "外のほうがいいです。わあ、富士山！きれい！",
          "romaji": "Soto no hoo ga ii desu. Waa, Fuji-san! Kiree!",
          "kr": "밖이 더 좋아요. 와, 후지산! 예쁘다!",
          "note": "外(밖) / 富士山(후지산)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "本当。",
          "romaji": "Hontoo.",
          "kr": "정말 그렇네.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "気持ちいい！",
          "romaji": "Kimochi ii!",
          "kr": "기분 좋다!",
          "note": "気持ちいい(기분 좋다)"
        },
        {
          "role": "Ayaka",
          "roleLabel": "아야카 (B)",
          "gender": "female",
          "jp": "今日は、晴れてよかったね。",
          "romaji": "Kyoo wa, harete yokatta ne.",
          "kr": "오늘은 맑아서 다행이야.",
          "note": "晴れる(맑다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "洋室と和室、どちらがよろしいですか。",
          "romaji": "Yooshitsu to washitsu, dochira ga yoroshii desu ka.",
          "kr": "양실과 일본식 방 어느 쪽이 좋으세요?"
        },
        {
          "speaker": "B",
          "jp": "洋室より和室のほうが広いですね。和室にします。",
          "romaji": "Yooshitsu yori washitsu no hoo ga hiroi desu ne. Washitsu ni shimasu.",
          "kr": "양실보다 일본식 방이 더 넓네요. 일본식 방으로 하겠어요."
        }
      ],
      "practice": [
        {
          "q": "고기보다 생선을 더 좋아함 (肉より魚 / 好き(な))",
          "answerJp": "肉より魚のほうが好きです。",
          "answerRomaji": "Niku yori sakana no hoo ga suki desu.",
          "kr": "고기보다 생선을 더 좋아해요."
        },
        {
          "q": "이 가게가 더 쌈 (この店 / 安い)",
          "answerJp": "この店のほうが安いですね。",
          "answerRomaji": "Kono mise no hoo ga yasui desu ne.",
          "kr": "이 가게 쪽이 더 싸네요."
        }
      ],
      "bonus": {
        "jp": "気持ちいい！",
        "romaji": "Kimochi ii!",
        "kr": "기분 좋다!",
        "desc": "상쾌한 날씨나 기분 좋은 바람, 온천욕 등을 즐길 때 자연스럽게 터져 나오는 감탄사입니다."
      }
    },
    {
      "lesson": 39,
      "title": "財布を落としてしまいました (지갑을 잃어버렸어요.)",
      "canDo": "실수했다는 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "財布を落としてしまいました。",
        "romaji": "Saifu o otoshite shimaimashita.",
        "kr": "지갑을 잃어버렸어요.",
        "desc": "예상치 못한 실수나 난처한 상황을 아쉽고 후회스럽게 나타낼 때는 '[동사의 TE형] + shimaimashita(~해 버렸습니다)'를 씁니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はるさーん、財布を落としてしまいました。",
          "romaji": "Haru-saan, saifu o otoshite shimaimashita.",
          "kr": "하루상, 지갑을 잃어버렸어요.",
          "note": "財布(지갑) / 落とす(떨어뜨리다/잃다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "あら大変。交番に行ってごらんなさい。",
          "romaji": "Ara taihen. Kooban ni itte gorannasai.",
          "kr": "어머 큰일 났네. 파출소에 가 봐요.",
          "note": "交番(파출소) / 〜てごらんなさい(~해 보렴)"
        },
        {
          "role": "Police",
          "roleLabel": "경찰관 (B)",
          "gender": "male",
          "jp": "それで、どんな財布ですか。",
          "romaji": "Sore de, donna saifu desu ka.",
          "kr": "그런데 어떤 지갑입니까?",
          "note": "どんな(어떤)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "黄色い財布です。",
          "romaji": "Kiiroi saifu desu.",
          "kr": "노란 지갑이에요.",
          "note": "黄色い(노랗다)"
        },
        {
          "role": "Police",
          "roleLabel": "경찰관 (B)",
          "gender": "male",
          "jp": "ああ、黄色…これですか。",
          "romaji": "Aa, kiiro... Kore desu ka.",
          "kr": "아, 노란색… 이거예요?",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "ああ、それです。",
          "romaji": "Aa, sore desu.",
          "kr": "아, 그거예요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。部屋の番号を忘れてしまいました。",
          "romaji": "Sumimasen. Heya no bangoo o wasurete shimaimashita.",
          "kr": "저기요. 방 번호를 잊어버렸어요."
        },
        {
          "speaker": "B",
          "jp": "お名前は…。",
          "romaji": "Onamae wa...",
          "kr": "성함은…."
        }
      ],
      "practice": [
        {
          "q": "물을 쏟아 버렸다 (水をこぼす → こぼして)",
          "answerJp": "すみません。水をこぼしてしまいました。",
          "answerRomaji": "Sumimasen. Mizu o koboshite shimaimashita.",
          "kr": "미안합니다. 물을 쏟아 버렸어요."
        },
        {
          "q": "표를 잃어버렸다 (切符をなくす → なくして)",
          "answerJp": "すみません。切符をなくしてしまいました。",
          "answerRomaji": "Sumimasen. Kippu o nakushite shimaimashita.",
          "kr": "미안합니다. 표를 잃어버렸어요."
        }
      ],
      "bonus": {
        "jp": "大変！",
        "romaji": "Taihen!",
        "kr": "큰일 났네! / 큰일이다!",
        "desc": "위급하거나 당혹스러운 상황이 발생했을 때 쓰는 감탄 표현입니다."
      }
    },
    {
      "lesson": 40,
      "title": "初めてだったから、びっくりしました (처음이라서 깜짝 놀랐어요.)",
      "canDo": "이유를 말할 수 있다",
      "keyPhrase": {
        "jp": "初めてだったから、びっくりしました。",
        "romaji": "Hajimete datta kara, bikkuri-shimashita.",
        "kr": "처음이라서 깜짝 놀랐어요.",
        "desc": "이유나 원인을 나타낼 때는 '[문장 보통체] + kara, [문장]' 형식을 씁니다. 'kara' 앞에는 정중체보다 보통체를 쓰는 것이 자연스럽습니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "あ、揺れてる。",
          "romaji": "A, yureteru.",
          "kr": "아, 흔들린다.",
          "note": "揺れる(흔들리다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "地震！助けて！",
          "romaji": "Jishin! Tasukete!",
          "kr": "지진이다! 사람 살려!",
          "note": "地震(지진) / 助ける(살리다/돕다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "落ち着いてください。大丈夫ですよ。",
          "romaji": "Ochitsuite kudasai. Daijoobu desu yo.",
          "kr": "침착하세요. 괜찮아요.",
          "note": "落ち着く(진정하다/침착하다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ほら、もうおさまった。",
          "romaji": "Hora, moo osamatta.",
          "kr": "거봐, 이제 가라앉았어.",
          "note": "おさまる(진정되다/가라앉다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "初めてだったから、びっくりしました。",
          "romaji": "Hajimete datta kara, bikkuri-shimashita.",
          "kr": "처음이라서 깜짝 놀랐어요.",
          "note": "びっくりする(깜짝 놀라다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "その映画、面白かったですか。",
          "romaji": "Sono eega, omoshirokatta desu ka.",
          "kr": "그 영화 재미있었어요?"
        },
        {
          "speaker": "B",
          "jp": "話が難しかったから、よくわかりませんでした。",
          "romaji": "Hanashi ga muzukashikatta kara, yoku wakarimasen deshita.",
          "kr": "이야기가 어려워서 잘 이해하지 못했어요."
        }
      ],
      "practice": [
        {
          "q": "비가 와서 안 감 (雨だった / 行きませんでした)",
          "answerJp": "雨だったから、行きませんでした。",
          "answerRomaji": "Ame datta kara, ikimasen deshita.",
          "kr": "비가 와서 안 갔어요."
        },
        {
          "q": "더워서 지침 (暑かった / 疲れました)",
          "answerJp": "暑かったから、疲れました。",
          "answerRomaji": "Atsukatta kara, tsukaremashita.",
          "kr": "더워서 피곤했어요."
        }
      ],
      "bonus": {
        "jp": "助けて！",
        "romaji": "Tasukete!",
        "kr": "사람 살려! / 도와줘요!",
        "desc": "긴급한 위기 상황에서 주위 사람들에게 긴급 구조를 요청할 때 외치는 절박한 표현입니다."
      }
    },
    {
      "lesson": 41,
      "title": "チケットを買うことができますか (티켓을 살 수 있어요?)",
      "canDo": "하고 싶은 것이 가능한지 확인할 수 있다",
      "keyPhrase": {
        "jp": "チケットを買うことができますか。",
        "romaji": "Chiketto o kau koto ga dekimasu ka.",
        "kr": "티켓을 살 수 있어요?",
        "desc": "행위의 가능 여부를 확인할 때는 '[동사 사전형] + koto ga dekimasu ka(~할 수 있습니까?)'를 씁니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "タム、見て！悠輝さんがピアノコンクールで優勝したよ。",
          "romaji": "Tamu, mite! Yuuki-san ga piano-konkuuru de yuushoo-shita yo.",
          "kr": "탐, 봐! 유키 씨가 피아노 콩쿠르에서 우승했어.",
          "note": "優勝する(우승하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "あ、ほんとだ。すごい。",
          "romaji": "A, honto da. Sugoi.",
          "kr": "아, 정말이네! 대단하다.",
          "note": ""
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "来月2日にコンサートがあるよ。",
          "romaji": "Raigetsu futsuka ni konsaato ga aru yo.",
          "kr": "다음 달 2일에 콘서트가 있어.",
          "note": "来月(다음 달) / 2日(이틀/2일)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "行きたいです。チケットを買うことができますか。",
          "romaji": "Ikitai desu. Chiketto o kau koto ga dekimasu ka.",
          "kr": "가고 싶어요. 티켓을 살 수 있어요?",
          "note": "チケット(티켓) / 買う(사다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "予約してみるね。",
          "romaji": "Yoyaku-shite miru ne.",
          "kr": "예약해 볼게.",
          "note": "予約する(예약하다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。歌舞伎は、どこで見ることができますか。",
          "romaji": "Sumimasen. Kabuki wa, doko de miru koto ga dekimasu ka.",
          "kr": "저기요. 가부키는 어디서 볼 수 있어요?"
        },
        {
          "speaker": "B",
          "jp": "本日ですか。お調べします。",
          "romaji": "Honjitsu desu ka. Oshirabe-shimasu.",
          "kr": "오늘이요? 알아보겠습니다."
        }
      ],
      "practice": [
        {
          "q": "좌석 예약 가능 확인 (席を予約する)",
          "answerJp": "すみません。席を予約することができますか。",
          "answerRomaji": "Sumimasen. Seki o yoyaku-suru koto ga dekimasu ka.",
          "kr": "저기요. 좌석을 예약할 수 있나요?"
        },
        {
          "q": "빨래 가능 확인 (洗濯をする)",
          "answerJp": "すみません。洗濯をすることができますか。",
          "answerRomaji": "Sumimasen. Sentaku o suru koto ga dekimasu ka.",
          "kr": "저기요. 빨래를 할 수 있나요?"
        }
      ],
      "bonus": {
        "jp": "予約してみるね。",
        "romaji": "Yoyaku-shite miru ne.",
        "kr": "예약해 볼게.",
        "desc": "'~te miru(시도해 보다)'를 활용하여 가볍게 예약 시도를 제안할 때 쓰는 표현입니다."
      }
    },
    {
      "lesson": 42,
      "title": "悠輝さんに渡すつもりです (유키 씨에게 줄 거예요.)",
      "canDo": "자기의 의지와 예정을 말할 수 있다",
      "keyPhrase": {
        "jp": "悠輝さんに渡すつもりです。",
        "romaji": "Yuuki-san ni watasu tsumori desu.",
        "kr": "유키 씨에게 줄 거예요.",
        "desc": "자신이 계획하거나 결심한 일을 나타낼 때는 '[동사 사전형] + tsumori desu(~할 생각/작정입니다)'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "タム、きれいなお花だね。",
          "romaji": "Tamu, kireena ohana da ne.",
          "kr": "탐, 예쁜 꽃이네.",
          "note": "お花(꽃)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "悠輝さんに渡すつもりです。すごくよかったです！",
          "romaji": "Yuuki-san ni watasu tsumori desu. Sugoku yokatta desu!",
          "kr": "유키 씨에게 줄 거예요. 정말 좋았어요!",
          "note": "渡す(건네다/주다) / つもり(의도/예정)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "さあ、楽屋に行こう。",
          "romaji": "Saa, gakuya ni ikoo.",
          "kr": "자, 대기실로 가자.",
          "note": "楽屋(분장실/대기실)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "これからどこに行きますか。",
          "romaji": "Korekara doko ni ikimasu ka.",
          "kr": "지금부터 어디에 가요?"
        },
        {
          "speaker": "B",
          "jp": "姫路に行って、お城を見るつもりです。",
          "romaji": "Himeji ni itte, oshiro o miru tsumori desu.",
          "kr": "히메지에 가서 성을 볼 거예요."
        }
      ],
      "practice": [
        {
          "q": "친구와 박물관에 갈 예정 (友達と博物館に行く)",
          "answerJp": "友達と博物館に行くつもりです。",
          "answerRomaji": "Tomodachi to hakubutsukan ni iku tsumori desu.",
          "kr": "친구와 박물관에 갈 생각이에요."
        },
        {
          "q": "방에서 쉴 예정 (部屋でゆっくりする)",
          "answerJp": "部屋でゆっくりするつもりです。",
          "answerRomaji": "Heya de yukkuri-suru tsumori desu.",
          "kr": "방에서 푹 쉴 생각이에요."
        }
      ],
      "bonus": {
        "jp": "すごくよかったです！",
        "romaji": "Sugoku yokatta desu!",
        "kr": "정말 좋았어요!",
        "desc": "공연, 영화, 여행 등을 관람하거나 체험한 직후 감동을 표현하는 구어적 찬사입니다."
      }
    },
    {
      "lesson": 43,
      "title": "元気そうですね (건강한 것 같네요.)",
      "canDo": "외관상 느낀 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "元気そうですね。",
        "romaji": "Genki soo desu ne.",
        "kr": "건강한 것 같네요.",
        "desc": "겉모습이나 상태를 보고 추측하여 말할 때는 '[형용사 어간] + soo desu(~해 보입니다)'를 씁니다. NA형용사는 'na' 탈락, I형용사는 'i' 탈락 후 붙입니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "悠輝さん、お久しぶりです。",
          "romaji": "Yuuki-san, ohisashiburi desu.",
          "kr": "유키 씨, 오래간만이에요.",
          "note": "お久しぶり(오랜만)"
        },
        {
          "role": "Yuuki",
          "roleLabel": "유키 (B)",
          "gender": "male",
          "jp": "あ！タムさん…。",
          "romaji": "A! Tamu-san...",
          "kr": "아! 탐 씨….",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "去年、日本に来ました。日本語を勉強しています。",
          "romaji": "Kyonen, Nihon ni kimashita. Nihongo o benkyoo-shite imasu.",
          "kr": "작년에 일본에 왔어요. 일본어를 공부하고 있어요.",
          "note": "去年(작년)"
        },
        {
          "role": "Yuuki",
          "roleLabel": "유키 (B)",
          "gender": "male",
          "jp": "そう。夢がかなったんですね。",
          "romaji": "Soo. Yume ga kanattan desu ne.",
          "kr": "그래. 꿈이 이루어졌군요.",
          "note": "夢(꿈) / かなう(이루어지다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。悠輝さんも、元気そうですね。また会えてうれしいです。",
          "romaji": "Hai. Yuuki-san mo, genki soo desu ne. Mata aete ureshii desu.",
          "kr": "네. 유키 씨도 건강한 것 같네요. 다시 만나서 반가워요.",
          "note": "元気(건강/활기) / 会える(만날 수 있다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "あ、フリーマーケットをやってますね。",
          "romaji": "A, furii-maaketto o yattemasu ne.",
          "kr": "아, 벼룩시장을 하고 있네요."
        },
        {
          "speaker": "B",
          "jp": "わあ、おもしろそう！",
          "romaji": "Waa, omoshirosoo!",
          "kr": "와, 재미있을 것 같다!"
        }
      ],
      "practice": [
        {
          "q": "조금 비싸 보임 (ちょっと / 高い)",
          "answerJp": "ちょっと、高そうですね。",
          "answerRomaji": "Chotto, takasoo desu ne.",
          "kr": "조금 비싸 보이네요."
        },
        {
          "q": "오늘은 안 될 것 같음 (今日は / ダメ(な))",
          "answerJp": "今日は、ダメそうですね。",
          "answerRomaji": "Kyoo wa, damesoo desu ne.",
          "kr": "오늘은 안 될 것 같네요."
        }
      ],
      "bonus": {
        "jp": "お久しぶりです。",
        "romaji": "Ohisashiburi desu.",
        "kr": "오래간만이에요.",
        "desc": "오랜만에 만난 상대에게 건네는 표준 인사말입니다. 친구에게는 '久しぶり(Hisashiburi)'라고 합니다."
      }
    },
    {
      "lesson": 44,
      "title": "またコンサートがあるそうです (또 콘서트가 있대요.)",
      "canDo": "들은 얘기를 전할 수 있다",
      "keyPhrase": {
        "jp": "またコンサートがあるそうです。",
        "romaji": "Mata konsaato ga aru soo desu.",
        "kr": "또 콘서트가 있대요.",
        "desc": "다른 곳에서 들은 소문이나 전언을 전달할 때는 '[문장 보통체] + soo desu(~라고 합니다/~대요)'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "タムさん、悠輝さんに会えてよかったですね。",
          "romaji": "Tamu-san, Yuuki-san ni aete yokatta desu ne.",
          "kr": "탐 씨, 유키 씨를 만나서 잘됐네요.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい、とてもうれしいです。",
          "romaji": "Hai, totemo ureshii desu.",
          "kr": "네, 아주 기뻐요.",
          "note": ""
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "悠輝さんは、活躍してるんだね。",
          "romaji": "Yuuki-san wa, katsuyaku-shiterun da ne.",
          "kr": "유키 씨는 활약하고 있네.",
          "note": "活躍する(활약하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。10月にまたコンサートがあるそうです。",
          "romaji": "Hai. Juugatsu ni mata konsaato ga aru soo desu.",
          "kr": "네. 10월에 또 콘서트가 있대요.",
          "note": "10月(10월) / また(또) / 〜そうだ(전문)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "そうですか。また会えますね。",
          "romaji": "Soo desu ka. Mata aemasu ne.",
          "kr": "그래요? 다시 만날 수 있네요.",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。",
          "romaji": "Hai.",
          "kr": "네.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "明日からお祭だそうですね。",
          "romaji": "Ashita kara omatsuri da soo desu ne.",
          "kr": "내일부터 축제래요."
        },
        {
          "speaker": "B",
          "jp": "ええ。でも、すごく混むそうですよ。",
          "romaji": "Ee. Demo, sugoku komu soo desu yo.",
          "kr": "네. 그런데 아주 붐빈대요."
        }
      ],
      "practice": [
        {
          "q": "태풍이 온다고 함 (台風が来る)",
          "answerJp": "台風が来るそうですね。",
          "answerRomaji": "Taifuu ga kuru soo desu ne.",
          "kr": "태풍이 온다면서요."
        },
        {
          "q": "금요일은 공짜라고 함 (金曜日はただだ)",
          "answerJp": "金曜日はただだそうですね。",
          "answerRomaji": "Kin-yoobi wa tada da soo desu ne.",
          "kr": "금요일은 무료라면서요."
        }
      ],
      "bonus": {
        "jp": "活躍してるね。",
        "romaji": "Katsuyaku-shiteru ne.",
        "kr": "맹활약하고 있네.",
        "desc": "사회적으로 두각을 나타내거나 성과를 올리는 지인을 격려하고 칭찬할 때 쓰는 표현입니다."
      }
    },
    {
      "lesson": 45,
      "title": "日本語をチェックしてもらえませんか (일본어를 체크해 주시겠어요?)",
      "canDo": "정중하게 부탁할 수 있다",
      "keyPhrase": {
        "jp": "日本語をチェックしてもらえませんか。",
        "romaji": "Nihongo o chekku-shite moraemasen ka.",
        "kr": "일본어를 체크해 주시겠어요?",
        "desc": "상대방의 호의를 기대하며 정중하게 의뢰할 때는 '[동사의 TE형] + moraemasen ka(~해 주실 수 없을까요?)'를 씁니다. '~te kudasai'보다 훨씬 공손한 표현입니다."
      },
      "dialogues": [
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はるさん、お願いがあるんですが…。",
          "romaji": "Haru-san, onegai ga arun desu ga...",
          "kr": "하루상, 부탁이 있는데요….",
          "note": "お願い(부탁)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "メールの日本語をチェックしてもらえませんか。",
          "romaji": "Meeru no Nihongo o chekku-shite moraemasen ka.",
          "kr": "메일에 쓴 일본어를 체크해 주시겠어요?",
          "note": "メール(메일) / チェックする(확인하다)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "いいですよ。どれどれ…。「悠輝さん、お元気ですか。」",
          "romaji": "Ii desu yo. Dore dore... 'Yuuki-san, ogenki desu ka.'",
          "kr": "좋아요. 어디 어디… '유키 씨, 잘 지내세요?'",
          "note": "どれどれ(어디 보자)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "私の日本語、大丈夫ですか。",
          "romaji": "Watashi no Nihongo, daijoobu desu ka.",
          "kr": "제 일본어 괜찮아요?",
          "note": ""
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "とても上手ですよ。",
          "romaji": "Totemo joozu desu yo.",
          "kr": "아주 잘하네요.",
          "note": ""
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。これ、もう少し安くしてもらえませんか。",
          "romaji": "Sumimasen. Kore, moo sukoshi yasuku shite moraemasen ka.",
          "kr": "저기요. 이거 좀 더 싸게 해 주시겠어요?"
        },
        {
          "speaker": "B",
          "jp": "そうですねえ…。",
          "romaji": "Soo desu nee...",
          "kr": "글쎄요…."
        }
      ],
      "practice": [
        {
          "q": "이 식당 예약을 부탁 (この店を予約する → 予約して)",
          "answerJp": "この店を予約してもらえませんか。",
          "answerRomaji": "Kono mise o yoyaku-shite moraemasen ka.",
          "kr": "이 가게를 예약해 주시겠어요?"
        },
        {
          "q": "짐을 맡아주길 부탁 (荷物を預かる → 預かって)",
          "answerJp": "荷物を預かってもらえませんか。",
          "answerRomaji": "Nimotsu o azukatte moraemasen ka.",
          "kr": "짐을 좀 맡아 주시겠어요?"
        }
      ],
      "bonus": {
        "jp": "お願いがあるんですが…。",
        "romaji": "Onegai ga arun desu ga...",
        "kr": "부탁이 있는데요….",
        "desc": "남에게 무언가 부탁하고 싶을 때 본론에 들어가기 전 미리 조심스럽게 꺼내는 완충 표현입니다."
      }
    },
    {
      "lesson": 46,
      "title": "小さいけどきれいですね (작지만 예쁘네요.)",
      "canDo": "다소 복잡한 소감을 말할 수 있다 2",
      "keyPhrase": {
        "jp": "小さいけどきれいですね。",
        "romaji": "Chiisai kedo kiree desu ne.",
        "kr": "작지만 예쁘네요.",
        "desc": "서로 대조적이거나 상반되는 두 내용을 연결할 때는 '[문장 보통체] + kedo(~이지만)'를 씁니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "さあ、着いたよ！",
          "romaji": "Saa, tsuita yo!",
          "kr": "자, 도착했다!",
          "note": "着く(도착하다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "ごめんください。",
          "romaji": "Gomen kudasai.",
          "kr": "실례합니다.",
          "note": "ごめんください(방문 인사)"
        },
        {
          "role": "Owner",
          "roleLabel": "주인 (B)",
          "gender": "male",
          "jp": "おいでやす。お部屋はこちらです。",
          "romaji": "Oideyasu. Oheya wa kochira desu.",
          "kr": "어서 오십시오. 방은 이쪽입니다.",
          "note": "おいでやす(교토 방언 어서오세요)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "わあ、すてきなお部屋！",
          "romaji": "Waa, sutekina oheya!",
          "kr": "와, 멋진 방이다!",
          "note": ""
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "お庭もあります！小さいけどきれいですね。",
          "romaji": "Oniwa mo arimasu! Chiisai kedo kiree desu ne.",
          "kr": "정원도 있어요! 작지만 예쁘네요.",
          "note": "庭(정원) / 小さい(작다) / 〜けど(~이지만)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "このホテルはどうですか。",
          "romaji": "Kono hoteru wa doo desu ka.",
          "kr": "이 호텔은 어때요?"
        },
        {
          "speaker": "B",
          "jp": "うーん、きれいだけど高いですね。",
          "romaji": "Uun, kiree da kedo takai desu ne.",
          "kr": "음, 예쁘지만 비싸네요."
        }
      ],
      "practice": [
        {
          "q": "피곤했지만 즐거웠음 (疲れた / 楽しかった)",
          "answerJp": "疲れたけど楽しかったです。",
          "answerRomaji": "Tsukareta kedo tanoshikatta desu.",
          "kr": "피곤했지만 즐거웠어요."
        },
        {
          "q": "어렵지만 재미있음 (難しい / おもしろい)",
          "answerJp": "難しいけどおもしろいです。",
          "answerRomaji": "Muzukashii kedo omoshiroi desu.",
          "kr": "어렵지만 재미있어요."
        }
      ],
      "bonus": {
        "jp": "ごめんください。",
        "romaji": "Gomen kudasai.",
        "kr": "계십니까? / 실례합니다.",
        "desc": "남의 집이나 료칸, 가게 등에 들어설 때 인기척을 내며 부르는 전통 방문 인사입니다."
      }
    },
    {
      "lesson": 47,
      "title": "どうやってするんですか (어떻게 하는 거예요?)",
      "canDo": "하는 방법을 물을 수 있다",
      "keyPhrase": {
        "jp": "どうやってするんですか。",
        "romaji": "Doo yatte surun desu ka.",
        "kr": "어떻게 하는 거예요?",
        "desc": "어떤 일의 방법이나 순서를 상대에게 묻고 싶을 때는 'Doo yatte [동사 사전형] + n desu ka'를 사용합니다."
      },
      "dialogues": [
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "おみくじだよ。",
          "romaji": "Omikuji da yo.",
          "kr": "운세를 점치는 제비야.",
          "note": "おみくじ(점괘 제비)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "どうやってするんですか。",
          "romaji": "Doo yatte surun desu ka.",
          "kr": "어떻게 하는 거예요?",
          "note": "どうやって(어떻게)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "箱を振ってみて。",
          "romaji": "Hako o futte mite.",
          "kr": "통을 흔들어 봐.",
          "note": "箱(상자/통) / 振る(흔들다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "3番です。",
          "romaji": "San-ban desu.",
          "kr": "3번이에요.",
          "note": ""
        },
        {
          "role": "Miko",
          "roleLabel": "무녀 (B)",
          "gender": "female",
          "jp": "はい、どうぞ。",
          "romaji": "Hai, doozo.",
          "kr": "네, 여기요.",
          "note": ""
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "あ、大吉だ。",
          "romaji": "A, daikichi da.",
          "kr": "아, 다이키치(대길)야.",
          "note": "大吉(대길)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "だいきち？どういう意味ですか。",
          "romaji": "Daikichi? Doo iu imi desu ka.",
          "kr": "다이키치? 어떤 뜻이에요?",
          "note": "どういう(어떤) / 意味(의미/뜻)"
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "とてもいい運勢ですよ。",
          "romaji": "Totemo ii unsee desu yo.",
          "kr": "아주 좋은 운세예요.",
          "note": "運勢(운세)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "すみません。これ、どうやって食べるんですか。",
          "romaji": "Sumimasen. Kore, doo yatte taberun desu ka.",
          "kr": "저기요. 이거 어떻게 먹는 거예요?"
        },
        {
          "speaker": "B",
          "jp": "そちらのたれにつけて、お召し上がりください。",
          "romaji": "Sochira no tare ni tsukete, omeshagari kudasai.",
          "kr": "그 소스에 찍어서 드세요."
        }
      ],
      "practice": [
        {
          "q": "이것 사용법 문의 (これ / 使う)",
          "answerJp": "すみません。これ、どうやって使うんですか。",
          "answerRomaji": "Sumimasen. Kore, doo yatte tsukaun desu ka.",
          "kr": "저기요. 이거 어떻게 쓰는 거예요?"
        },
        {
          "q": "옷 입는 법 문의 (着る)",
          "answerJp": "すみません。どうやって着るんですか。",
          "answerRomaji": "Sumimasen. Doo yatte kirun desu ka.",
          "kr": "저기요. 어떻게 입는 거예요?"
        }
      ],
      "bonus": {
        "jp": "どういう意味ですか。",
        "romaji": "Doo iu imi desu ka.",
        "kr": "어떤 뜻이에요?",
        "desc": "처음 듣거나 뜻을 모르는 어휘가 나왔을 때 의미를 질문하는 핵심 표현입니다."
      }
    },
    {
      "lesson": 48,
      "title": "卒業したら、日本で働きたいです (졸업하면 일본에서 일하고 싶어요.)",
      "canDo": "앞으로 하고 싶은 것을 말할 수 있다",
      "keyPhrase": {
        "jp": "卒業したら、日本で働きたいです。",
        "romaji": "Sotsugyoo-shitara, Nihon de hatarakitai desu.",
        "kr": "졸업하면 일본에서 일하고 싶어요.",
        "desc": "특정 조건이 성립했을 때 하고 싶은 일을 말할 때는 '[동사 TA형] + ra, [동사] + tai desu(~하면 ~하고 싶습니다)'를 씁니다."
      },
      "dialogues": [
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "タムさんが来て、もうすぐ1年ですね。将来は何がしたいですか。",
          "romaji": "Tamu-san ga kite, moo sugu ichi-nen desu ne. Shoorai wa nani ga shitai desu ka.",
          "kr": "탐 씨가 온 지 이제 곧 1년이네요. 앞으로 뭘 하고 싶어요?",
          "note": "将来(미래/장래)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "卒業したら、日本で働きたいです。旅行会社で働きたいです。",
          "romaji": "Sotsugyoo-shitara, Nihon de hatarakitai desu. Ryokoo-gaisha de hatarakitai desu.",
          "kr": "졸업하면 일본에서 일하고 싶어요. 여행사에서 일하고 싶어요.",
          "note": "卒業する(졸업하다) / 働く(일하다)"
        },
        {
          "role": "Kaito",
          "roleLabel": "가이토 (B)",
          "gender": "male",
          "jp": "いいね！",
          "romaji": "Ii ne!",
          "kr": "좋다!",
          "note": ""
        },
        {
          "role": "Haru",
          "roleLabel": "하루 (A)",
          "gender": "female",
          "jp": "日本の魅力をいっぱい伝えてくださいね。",
          "romaji": "Nihon no miryoku o ippai tsutaete kudasai ne.",
          "kr": "일본의 매력을 많이 전해 주세요.",
          "note": "魅力(매력) / 伝える(전하다)"
        },
        {
          "role": "Miya",
          "roleLabel": "미야 (A)",
          "gender": "female",
          "jp": "応援してるよ。",
          "romaji": "Ooen-shiteru yo.",
          "kr": "응원할게.",
          "note": "応援する(응원하다)"
        },
        {
          "role": "Tam",
          "roleLabel": "탐 (A)",
          "gender": "female",
          "jp": "はい。がんばります！",
          "romaji": "Hai. Ganbarimasu!",
          "kr": "네. 열심히 하겠습니다!",
          "note": "がんばる(노력하다/힘내다)"
        }
      ],
      "tryIt": [
        {
          "speaker": "A",
          "jp": "これから長崎ですか。いいですね。",
          "romaji": "Korekara Nagasaki desu ka. Ii desu ne.",
          "kr": "이제부터 나가사키예요? 좋겠네요."
        },
        {
          "speaker": "B",
          "jp": "はい。長崎に行ったら、ちゃんぽんが食べたいです。",
          "romaji": "Hai. Nagasaki ni ittara, chanpon ga tabetai desu.",
          "kr": "네. 나가사키에 가면 짬뽕을 먹고 싶어요."
        }
      ],
      "practice": [
        {
          "q": "여름휴가가 되면 또 일본에 오고 싶음 (夏休みになる → なったら / また日本に来たい)",
          "answerJp": "夏休みになったら、また日本に来たいです。",
          "answerRomaji": "Natsu-yasumi ni nattara, mata Nihon ni kitai desu.",
          "kr": "여름휴가가 되면 또 일본에 오고 싶어요."
        },
        {
          "q": "귀국하면 일본어 더 공부하고 싶음 (国に帰る → 帰ったら / もっと日本語を勉強したい)",
          "answerJp": "国に帰ったら、もっと日本語を勉強したいです。",
          "answerRomaji": "Kuni ni kaettara, motto Nihongo o benkyoo-shitai desu.",
          "kr": "고국에 돌아가면 더 일본어를 공부하고 싶어요."
        }
      ],
      "bonus": {
        "jp": "がんばります！",
        "romaji": "Ganbarimasu!",
        "kr": "열심히 하겠습니다!",
        "desc": "목표를 향해 최선을 다해 노력하겠다는 의지를 스스로 다질 때 외치는 국민적 결의 표현입니다."
      }
    }
  ]
};
