export default [
    {
        name: "출마 선언",
        description:"대선이 1년 앞으로 다가왔습니다. 오래 전부터 차기 후보로 거론되던 당신은 이제야말로 출마를 선언하려고 합니다. 출마 선언에 어떤 메세지를 담고자 합니까?",
        choices: [
            {
                description: "타락한 여권을 심판해야 합니다!",
                effect: {
                    "여권 심판론": '',
                },
            },
            {
                description: "민생을 살리는 대통령이 되겠습니다.",
                effect: {   // fill out later
                    "toAvg": '',
                },
            },
            {
                description: "부국강병! 자주 국방과 강한 한국을 위해 노력하겠습니다.",
                effect: {
			    	"안보 교육": '',
                },
            }
        ]
    },
    {
        name: "가족 의혹",
        description:"당신이 출마 선언을 하자마자 여기저기서 공격이 들어오기 시작합니다. 가장 흔한 건 가족 문제죠. 당신은 어떻게 반응합니까?",
        choices: [
            {
                description: "저는 털어서 먼지 한 톨 나오지 않습니다.",
                effect: {
                },
            },
            {
                description: "저는 독신인데요...",
                effect:{
                    "독신": '',
                },
            },
        ]
    },
    {
        name: "청년 토크쇼",
        description:"청년들을 상대로 하는 정책 토크쇼에 참가했습니다. 어떤 말을 하시겠습니까?",
        choices:[
            {
                description: "저도 청년 정치인이죠. 청년들의 정치참여 기회를 많이 만들겠습니다.",
                effect:{
                    "젊은 피": '',
                },
            },
            {
                description: "청년들의 취업을 지원하기 위해 청년 수당 등의 정책을 시행할 계획입니다.",
                effect: {
                    'capCom': -0.1,
                },
            },
            {
                description: "대한민국 청년이 텅텅 빌 정도로 한번 해 보세요. 다 어디 갔냐고. 중동에 갔다고.",
                effect: {
                    'capCom': 0.2,
                }
            }
        ]
    },
    {
        name: "값진 정보",
        description:"참모가 몰래 제안을 합니다. 상대 후보들의 특수활동비에 대해 의혹을 제기하잔 겁니다. 어떻게 하시겠습니까?",
        choices:[
            {
                description: "당근 해버려야지!",
                effect:{
                    "트러블메이커": '',
                },
            },
            {
                description: "저는 네거티브로 표를 얻으려고 하는게 아닙니다.",
                effect: {
                    "정정당당": '',
                },
            },
        ]
    },
    {
        name: "동성애 아세요?",
        description:"TV 토론회에서 안보와 군 기강에 관한 이야기를 하고 있습니다. 갑자기 옆 후보가 물어옵니다. 동성애 지지하십니까?",
        choices:[
            {
                description: "동성애는 성병 확산과 군 기강 해이의 원인입니다.",
                effect:{
                    "libCons": -0.5,
                },
            },
            {
                description: "외람된 말씀이십니다. 동성애는 지지하고 말고의 문제가 아닙니다.",
                effect: {
                    "libCons": 0.5,
                },
            },
            {
                description: "어... 아니요...",
                effect: {
                    "libCons": -0.1,
                }
            }
        ]
    },
    {
        name: "일자리 창출",
        description: "일자리 창출은 이번 대선의 가장 큰 이슈입니다. 당신의 정책은 어떠합니까?",
        choices:[
            {
                description: "정부에서 나서서 일자리를 만들어야 합니다. 여기에 특별 예산을 편성해야 합니다.",
                effect:{
                    "capCom": -0.5,
                },
            },
            {
                description: "일자리는 민간에서 만들어야 하는 것입니다. 경기를 살리는 것이 먼저입니다.",
                effect: {
                    "capCom": 0.5,
                },
            }
        ]
    },
    {
        name: "게임 중독?",
        description: "최근 게임 중독에 대한 우려가 제기되면서 정부 차원의 규제를 요구하는 학부모들이 늘었습니다. 이에 대한 당신의 견해는 어떻습니까?",
        choices:[
            {
                description: "게임은 중독을 유발할 수 있고 이는 보건 문제로 다뤄져야 합니다.",
                effect:{
                    "capCom": -0.1,
                },
            },
            {
                description: "게임은 하나의 산업으로 섣불리 정부가 규제하기보단 내부 방침에 따르는 것이 옳습니다.",
                effect: {
                    "capCom": 0.2,
                },
            }
        ]
    },
    {
        name: "난민",
        description: "우리나라에 난민으로 체류를 신청하는 사람들이 늘고 있습니다. 이들을 받아들여야 하는가에 대한 찬반 논란이 거셉니다.",
        choices:[
            {
                description: "국제 사회의 일원으로서 난민 문제 해결에 우리나라가 적극 나서야 합니다.",
                effect:{
                    "libCons": 0.2,
                },
            },
            {
                description: "우리 국민의 이익이 우선시되어야 한다고 생각합니다.",
                effect: {
                    "libCons": -0.2
                },
            }
        ]
    },
    {
        name: "대북 정책",
        description: "북한이 핵 포기 선언을 하면서 남북관계가 빠른 양상으로 변하고 있습니다. 대통령 후보로서 북한에 대해 어떤 외교적 태도를 보일 것입니까?",
        choices:[
            {
                description: "강경하게 압박을 해서 전면적이고 비가역적인 탈핵화를 이뤄야 합니다.",
                effect:{
                    "libCons": -0.2
                },
            },
            {
                description: "북한과의 타협점을 잘 찾아 북핵 문제를 주체적으로 해결해야 합니다.",
                effect: {
                    "libCons": 0.1,
                },
            }
        ]
    },
    {
        name: "국공립 유치원",
        description: "요즘 국립 유치원에 들어가기 위한 추첨의 경쟁률이 하늘을 찌른다고 합니다. 이에 대해 주부들은 정부의 대책을 요구하고 있습니다.",
        choices:[
            {
                description: "국비를 지출해 공립 유치원을 신설하겠습니다.",
                effect:{
                    "유치원 신설": '',
                },
            },
            {
                description: "매입식 민영화를 진행해 유치원의 수를 늘리겠습니다.",
                effect: {
                    "capCom": 0.2,
                },
            }
        ]
    },
    {
        name: "선거제도 개편",
        description: "국회의원 선거제도 개편은 매 대선 시즌마다 나오는 단골 소재입니다. 이에 대한 후보의 고견은 어떻습니까?",
        choices:[
            {
                description: "대선거구제를 도입합니다.",
                effect:{
                    "libCons": 0.1,
                },
            },
            {
                description: "연동형 비례대표제를 시행해야 합니다.",
                effect: {
                    "libCons": 0.3,
                },
            },
            {
                description: "현행을 유지하되 국회의원의 수를 줄여야 합니다.",
                effect: {
                    "libCons": -0.2,
                },
            }
        ]
    },
    {
        name: "사랑의 추적자",
        description: "어느 한 여배우가 당신의 사생활에 대해 폭로할 것이 있다면서 기자회견을 요청합니다. 당신이 뭐라 반응하던 이미지에는 안 좋은 영향을 미치겠군요...",
        choices:[
            {
                description: "난 당신같은 사람 몰라!",
                effect: {
                    "사랑의 추적자": '',
                },
            }
        ]
    },
    {
        name: "베트남전 학살",
        description: "베트남전에서 한국군이 저지른 양민 학살 사건은 우리 현대사의 잊히지 않는 오점으로 남아 있습니다. 최근 국민들 사이에서도 이에 대한 인식이 증가하면서 공식적인 사과와 보상의 필요성이 대두되고 있습니다.",
        choices:[
            {
                description: "양국 간의 불행한 역사에 대해 깊은 유감을 느낍니다.",
                effect:{
                },
            },
            {
                description: "정부 차원에서의 진상 조사와 배상 등을 검토할 예정입니다.",
                effect: {
                    libCons: 0.5,
                },
            }
        ]
    },
    {
        name: "담배와의 싸움",
        description: "몇 해 전부터 금연은 새로운 사회 기조가 되었습니다. 이에 국민들은 찬반 양론을 펼치고 있는데요, 후보님께서는 어떻게 생각하십니까?",
        choices:[
            {
                description: "담배 가격을 올릴 예정입니다.",
                effect:{
                    "capCom": 0.1,
                },
            },
            {
                description: "담뱃갑의 디자인을 교체합니다.",
                effect: {
                    "libCons": -0.2,
                },
            }
        ]
    },
    {
        name: "정치자금법",
        description: "상대 후보가 네거티브 전략을 폈습니다. 후보님의 선거 자금이 터무늬없이 크다는 지적인데요, 정치자금법 위반 사항이 없는지 진상규명을 요구하고 있습니다.",
        choices:[
            {
                description: "성실히 조사에 임하고 법의 심판을 받겠습니다.",
                effect:{
                    "정치자금법 위반": '',
                },
            },
            {
                description: "지적하신 지출은 순전히 제 돈입니다. 보전 안 받아도 상관없음.",
                effect: {
                    "금괴왕": '',
                },
            }
        ]
    },
    {
        name: "댓글공작",
        description: "참모가 귀띔을 합니다. 요즘 인터넷 커뮤니티에 댓글을 달아 여론을 주도하는게 유행이랍니다.",
        choices:[
            {
                description: "보수성향 커뮤니티에 글을 올린다.",
                effect:{
                    "안보 교육": '',
                    "댓글공작": '',
                },
            },
            {
                description: "진보성향 커뮤니티에 글을 올린다.",
                effect: {
                    "여권 심판론": '',
                    "댓글공작": '',
                },
            }
        ]
    },
    {
        name: "HTTPS 감청",
        description: "새로운 방식의 HTTPS 감청 방식이 발표되자마자 반응이 시끌시끌합니다. 이에 대한 당신의 입장을 발표하세요.",
        choices:[
            {
                description: "불법영상물 유통을 막기 위한 조치로서 필요했다고 봅니다.",
                effect:{
                    "libCons": -0.2
                },
            },
            {
                description: "정부가 인터넷 통신에 개입하는 것은 그 자체로 적절치 못한 조치입니다.",
                effect: {
                    "libCons": 0.2,
                },
            }
        ]
    },
    {
        name: "K-POP",
        description: "대통령 후보가 되면 가끔 이상한 질문도 받습니다. 좋아하는 아이돌은 누구인가요?",
        choices:[
            {
                description: "최근에 빌보드 무대에 선 자랑스러운 방수소년단...",
                effect:{
                    "libCons": -0.1,
                    "요즘 세대": '',
                },
            },
            {
                description: "제 마음속의 영원한 아이돌은 나훈아입니다.",
                effect: {
                    "늙은이": '',
                },
            }
        ]
    },
    {
        name: "미투 운동",
        description: "전세계적으로 여성들이 처한 현실을 고발하는 미투 운동 열풍이 불고 있습니다. 정치인들의 페미니스트 선언이 줄을 이으면서, 당신도 이에 응답할 의무가 생겼습니다.",
        choices:[
            {
                description: "성별 간 갈등을 봉합하고 모두가 안전할 수 있는 대한민국을 만들겠습니다.",
                effect:{
                    "libCons": -0.3,
                },
            },
            {
                description: "여성이 처한 현실에 깊은 우려를 표하며 페미니스트 대통령이 될 것임을 선언합니다.",
                effect: {
                    "libCons": 0.5,
                },
            }
        ]
    },
    {
        name: "아들의 군대 의혹",   // fill out later
        description: "또 들어닥친 네거티브 의혹입니다. 아들이 4급 판정을 받고 사회복무요원으로 복무한 사실에 대해 의혹을 제기하고 있습니다.",
        choices:[
            {
                description: "모두의 앞에서 아들의 키와 체중을 잰다.",
                effect:{
                    "군대는 다녀왔니?": '',
                },
            },
            {
                description: "전 독신이라니까요...",
                effect: {
                },
            }
        ]
    },
    {
        name: "배신의 계절", // fill out later
        description: "당권 싸움이 팽팽합니다. 당내 경선을 통과하지 못하면 후보 등록도 놓치게 될 텐데요. 아예 당적을 바꿀까 하는 생각이 당신의 머리 속을 스쳐갑니다.",
        choices:[
            {
                description: "그래도 배신은 할 수 없소.",
                effect:{
                },
            },
            {
                description: "",
                effect: {

                },
            },
            {
                description: "",
                effect: {

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "사드는 아닙니다",
        description: "종말고고도지역방어체계, 일명 사드의 한국 배치를 둘러싸고 각국의 긴장이 팽팽합니다. 이에 대한 후보님의 의견은 어떠합니까?",
        choices:[
            {
                description: "사드 배치는 한미 동맹을 공고하게 하고 북방을 압박할 수 있는 중요한 수단입니다.",
                effect:{
                    "libCons": -0.5,
                },
            },
            {
                description: "우리 국민이 피해를 보는 일이 없게, 전략적으로 모호하게 접근하려고 합니다.",
                effect: {
                    "libCons": -0.1,
                },
            },
            {
                description: "사드 배치는 한국의 외교적 자주성을 해치는 결단입니다. 이를 반대합니다.",
                effect: {
                    "libCons": 0.3,
                    "파란나비": '',
                },
            }
        ]
    },
    {
        name: "최저임금 인상",
        description: "매해 오르는 물가와 벌어지는 소득격차를 바로잡기 위한 임금체계 재편이 필요합니다. 최저임금 정책을 어떻게 할 것인지 질문이 쏟아져 들어옵니다.",
        choices:[
            {
                description: "섣부른 최저임금 인상은 오히려 고용을 줄일 여지가 있습니다.",
                effect:{
                    "capCom": 0.3,
                },
            },
            {
                description: "저임금 노동자의 생활 수준을 끌어올리기 위해서는 최저임금 인상이 꼭 이루어져야 합니다.",
                effect: {
                    "capCom": -0.5,
                },
            }
        ]
    },
    {
        name: "국가 전복?",
        description: "모 국회의원이 현 정부에 강한 불신을 표시하며 청와대에 폭탄을 떨어뜨려야 한다 발언한 것이 구설수에 오르고 있습니다. 이것이 내란선동죄에 해당되지 않는지 주장하는 사람들도 있는데요, 이에 대한 당신의 생각은 어떻습니까?",
        choices:[
            {
                description: "현행법에 저촉될 소지가 있는 발언입니다.",
                effect:{
                    "libCons": -0.1, 
                },
            },
            {
                description: "단순 발언만으로는 내란의 의도가 있었다고 유추할 수 없습니다.",
                effect: {
                    "libCons": 0.1,
                },
            }
        ]
    },
    {
        name: "공수처 신설",
        description: "검찰의 비리와 유착이 문제가 되면서 검찰의 수사권 분할을 위한 고위공직자비리수사처를 신설하자는 주장이 나오고 있습니다. 이에 대한 후보님의 의견을 피력하십시오.",
        choices:[
            {
                description: "셀프개혁만으로는 소용이 없습니다. 공수처 신설 필요합니다.",
                effect:{
                    "libCons": 0.3,
                },
            },
            {
                description: "공수처 신설은 기소독점주의를 해칠 위험이 있는 제도입니다.",
                effect: {
                    "libCons": -0.3,
                },
            }
        ]
    },
    {
        name: "사라지는 택시",
        description: "새로운 승합차공유 플랫폼의 등장으로 기존의 택시 산업과의 마찰이 예상됩니다. 이에 대한 입장 표명이 필요해보입니다.",
        choices:[
            {
                description: "기존 산업과 신 산업의 공정한 경쟁을 도모하겠습니다.",
                effect:{
                    "capCom": 0.5,
                },
            },
            {
                description: "기존 택시노동자들의 노동권을 보호할 필요가 있습니다.",
                effect: {
                    "capCom": -0.3,
                },
            }
        ]
    },
    {
        name: "장애인등급제",
        description: "장애인등급은 기존의 활동보조 서비스를 적용하는 절대적인 기준이었습니다. 최근 장애인 단체 등은 이러한 등급제를 폐지하고 서비스 대상을 가리는 별도의 심사를 도입하기를 요구했습니다.",
        choices:[
            {
                description: "장애인 등급제의 전면적인 폐지를 이루어내겠습니다.",
                effect:{
                    "libCons": 0.3,
                },
            },
            {
                description: "복지 예산이 더 효율적으로 운용될 수 있도록 등급제를 개편하도록 하겠습니다.",
                effect: {
                    "libCons": -0.3,
                },
            }
        ]
    },
    {
        name: "전교조",
        description: "전국교직원노동조합이 법외노조로 밀려난 것에 대한 투쟁을 계속 진행 중에 있습니다. 이들은 각 대통령 후보자에게 성명서를 보내, 공식적인 입장 표명을 요구합니다.",
        choices:[
            {
                description: "대통령령으로 노동조합 아님을 통보하는 것은 노조할 권리에 대한 침해입니다. 시정토록 하겠습니다.",
                effect:{
                    "capCom": -0.5,
                },
            },
            {
                description: "해직자의 노조 가입권과 관련한 시정명령에 대해 제대로 된 합의가 선행되어야 합니다.",
                effect: {
                    "capCom": 0.3,
                },
            }
        ]
    },
    {
        name: "차별금지법 제정",
        description: "예전부터 차별로부터 소수자를 법적으로 보호할 수 있는 차별금지법의 제정에 대한 이야기가 나왔으나, 실제로 법제화 된 적은 없었습니다. 이에 대한 후보님의 생각은 어떠합니까?",
        choices:[
            {
                description: "차별금지법은 오히려 역으로 사적 자치의 자유를 제한할 여지가 있습니다.",
                effect:{
                    "libCons": -0.5,
                },
            },
            {
                description: "명확하게 차별로 명시할 수 있는 사례가 발견된 부분에 대해 개별적 차별금지법을 도입해야 합니다.",
                effect: {
                    "libCons": 0.1,
                },
            },
            {
                description: "차별 행위의 미시함을 고려해 포괄적 차별금지법을 제정해야 합니다.",
                effect: {
                    "libCons": 0.3,
                },
            }
        ]
    },
    {
        name: "경제 성장은?",
        description: "결국 대통령의 업무는 경제를 살리는 것이라고 할 수 있겠습니다. 하지만 진영 별로 어떻게 경제를 성장시킬 것인지에 대해서는 의견이 갈리고 있는데요. 인터뷰에서 당신은 당신이 펼칠 경제 정책의 기조를 밝혀야 합니다.",
        choices:[
            {
                description: "규제의 철폐와 기업 경쟁력 증대를 통한 혁신주도성장",
                effect:{
                    "capCom": 0.5,
                },
            },
            {
                description: "생활소득수준을 끌어올려 성장과 분배를 동시에 이루는 소득주도성장",
                effect: {
                    "capCom": -0.3,
                },
            },
            {
                description: "부르주아들의 불의한 재산을 무상몰수 무상분배해야 합니다!!",
                effect: {
                    "capCom": -0.9,
                    "빨갱이": '',
                },
            },
        ]
    },
    {
        name: "대체복무제",
        description: "유엔의 권고에 따르면 양심적 병역거부자 등을 위한 대체복무제를 마련해야 합니다. 이를 두고 찬반 논란이 거세지고 있습니다. 이에 대해 어떤 입장을 가지고 있습니까?",
        choices:[
            {
                description: "대상자를 엄격하게 심사하고, 복무 기간을 늘려 공정성을 지키도록 하겠습니다.",
                effect:{
                    "libCons": -0.5,
                },
            },
            {
                description: "국제인권기준을 엄격하게 준수해 복무자들의 인권을 지킬 수 있도록 하겠습니다.",
                effect: {
                    "libCons": 0.3,
                },
            }
        ]
    },
    {
        name: "ILO 비준, 입법 먼저?",
        description: "국제노동기구 핵심협약 비준을 둘러싼 논의가 진행되고 있습니다. 쟁점이 되는 몇가지 조항을 비준하면 현행법의 수정이 필요하기 때문입니다. 이에 대한 당신은 어떠합니까?",
        choices:[
            {
                description: "군 복무와 노조로 인해 초래되는 혼란을 막기 위해 입법은 신중히 진행해야 합니다.",
                effect:{
                    "capCom": 0.3,
                },
            },
            {
                description: "노동부에서 권고한 바와 같이 입법과 비준을 동시에 진행토록 하겠습니다.",
                effect: {
                    "capCom": -0.2,
                },
            }
        ]
    },
    {
        name: "민주화 운동",
        description: "모 정당의 모 의원이 민주화 운동을 시민운동이 아닌 폭동이라고 발언하는 일이 일어났습니다. 유력 정치인들이 모두 한 마디씩 우려를 표하고 있는 상황입니다.",
        choices:[
            {
                description: "민주화 운동은 부정하지는 않지만 역사의 해석은 모두에게 열려 있어야...",
                effect:{
                    "libCons": -0.5,
                },
            },
            {
                description: "해당 의원은 반드시 호남 시민들께 사과하십시오!",
                effect: {
                    "libCons": 0.1,
                    "민주화의 성지": '',
                },
            },
            {
                description: "당과 의회 차원에서 엄벌을 내려야 합니다!",
                effect: {
                    "libCons": 0.2,
                }
            }
        ]
    },
    {
        name: "중소기업 육성",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "일감 몰아주기",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "전문연",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "커뮤니티 폐쇄",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "공시지가 파동",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "공휴일 제정",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "행정수도 이전",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "첫 유세는?",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "명예회복",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "친일청산",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "특혜채용 논란",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "4차산업혁명",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "주가조작 의혹",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "TV 토론회에서 첫 마디",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "당내 경선",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "공보물",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "트위터는 인생의 낭비",
        description: "",
        choices:[
            {
                description: "",
                effect:{

                },
            },
            {
                description: "",
                effect: {

                },
            }
        ]
    },
    {
        name: "조폭과의 유착?",
        description: "어젯 밤 모 시사프로그램에서 조폭과 정계의 유착을 다루었습니다. 그런데 당신이 지지자 모임에서 찍은 사진도 문제가 되었다더군요. 그 사진에 나온 사람들 중 하나가 조폭이라나요?",
        choices:[
            {
                description: "문제의 그 지지자는 현재 다른 정치인(이 모씨)의 지지 모임에 있으면 저는 관련이 없습니다. 크흠.",
                effect:{
                    "달변가": '',
                },
            },
            {
                description: "그냥 폭풍 한 번 지나가는거야! 시련을 통해서 나는 더 강해지는 거라고!",
                effect: {
                    "후보님 사랑합니다": '',
                },
            }
        ]
    },
    {
        name: "서민 체험",
        description: "참모가 친서민 이미지를 위해 서민 생활을 체험해보는 이벤트를 제안합니다. 어떤 것을 하시겠습니까?",
        choices:[
            {
                description: "일반 사병 훈련 참가",
                effect:{
			    	"멋진 사나이": '',
                },
            },
            {
                description: "전통 시장 가서 국밥 먹기",
                effect: {
				    "먹방의 패왕": '',
                },
            },
            {
                description: "단칸방에서 생활",
                effect: {
			    	"서민 대통령": '',
                },
            }
        ]
    },
]


