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
                effect: {
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
                    'capCom': -0.001,
                },
            },
            {
                description: "대한민국 청년이 텅텅 빌 정도로 한번 해 보세요. 다 어디 갔냐고. 중동에 갔다고.",
                effect: {
                    'capCom': 0.002,
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
                description: "동성애는 성병 확산과 군 기강 해이의 원인입니다. 그렇다고 동성애자를 차별하는건 아니지만요...",
                effect:{
                    "libCons": -0.005,
                },
            },
            {
                description: "외람된 말씀이십니다. 지금은 안보에 관한 이야기를 하고 있습니다. 그리고 동성애는 지지하고 말고의 문제가 아닙니다.",
                effect: {
                    "libCons": 0.005,
                },
            },
            {
                description: "어... 아니요...",
                effect: {
                    "libCons": -0.001,
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
                    "capCom": -0.005,
                },
            },
            {
                description: "일자리는 민간에서 만들어야 하는 것입니다. 경기를 살리는 것이 먼저입니다.",
                effect: {
                    "capCom": 0.005,
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
                    "capCom": -0.001,
                },
            },
            {
                description: "게임은 하나의 산업으로 섣불리 정부가 규제하기보단 내부 방침에 따르는 것이 옳습니다.",
                effect: {
                    "capCom": 0.002,
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
                    "libCons": 0.002,
                },
            },
            {
                description: "우리 국민의 이익이 우선시되어야 한다고 생각합니다.",
                effect: {
                    "libCons": -0.002
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
                    "libCons": -0.002
                },
            },
            {
                description: "북한과의 타협점을 잘 찾아 북핵 문제를 주체적으로 해결해야 합니다.",
                effect: {
                    "libCons": 0.001,
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
                    "capCom": 0.002,
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
                    "libCons": 0.001,
                },
            },
            {
                description: "연동형 비례대표제를 시행해야 합니다.",
                effect: {
                    "libCons": 0.003,
                },
            },
            {
                description: "현행을 유지하되 국회의원의 수를 줄여야 합니다.",
                effect: {
                    "libCons": -0.002,
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
                    libCons: 0.005,
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
                    "capCom": 0.001,
                },
            },
            {
                description: "담뱃갑의 디자인을 교체합니다.",
                effect: {
                    "libCons": -0.002,
                },
            }
        ]
    },
    {
        name: "정치자금법 위반",
        description: "상대 후보가 네거티브 전략을 폈습니다. 보좌관의 월급을 캠프 활동비로 빼돌려 썼다는 지적인데요.",
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
        name: "댓글공작",
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
        name: "HTTPS 감청",
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
        name: "K-POP",
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
        name: "미투 운동",
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
        name: "아들의 군대 의혹",
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
        name: "배신의 계절",
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
        name: "사드는 아닙니다",
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
        name: "최저임금 인상",
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
        name: "국가 전복?",
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
        name: "공수처 신설",
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
        name: "사라지는 택시",
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
        name: "장애인등급제",
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
        name: "전교조",
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
        name: "차별금지법 제정",
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
        name: "경제 성장은?",
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
        name: "대체복무제",
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
        name: "ILO 비준, 입법 먼저?",
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
        name: "민주화 운동",
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
        name: "손흥민",
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


