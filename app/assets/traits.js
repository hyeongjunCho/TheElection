export default {
    "달변가": {
      "description": "당신은 말을 매우 잘 합니다. 질문에 대한 답변으로 받는 영향의 크기가 증가합니다.",
      "effect": {
          "factor": 0.015,
      },
      "duration": 50,
    },
    "정치의 새바람": {
        "description": "정치에 신선한 바람을 일으킬 사람 누굽니까아아아아아!!!! 일시적으로 사람들의 기대감이 증가합니다.",
        "effect": {
            "correctionDown": 0.005,
            "inflow": 0.0005,
        },
        "duration": 30,
    },
    "트러블메이커": {
        "description": "잦은 구설수에 올라 표심의 유입과 유출이 급격하게 변동합니다.",
        "effect": {
            "inflow": 0.0005,
            "outflow": 0.001,
            "factor": 0.015,
        },
        "duration": 30,
    },
    "충청도 핫바지": {
        "description": "당신은 충청도가 정치판에서 소외되었다는 주장을 적극적으로 펼쳐, 충청 지역에서 지지도 보정을 받습니다.",
        "effect": {
            "NorthChungcheong": 0.0005,
            "SouthChungcheong": 0.0005,
            "Daejeon": 0.0005,
        },
        "duration": -1,
    },
    "호남향우회": {
        "description": "홀대받던 호남을 다시 부흥시킬 기회입니다. 호남에서 지지도 보정을 받습니다.",
        "effect": {
            "NorthJeolla": 0.0005,
            "SouthJeolla": 0.0005,
            "Gwangju": 0.0005,
        },
        "duration": -1,
    },
    "피닉스": {
        "description": "수많은 선거를 치룬 당신은 이미 인지도가 충분히 높은 정치인입니다. 초반 지지율이 높게 책정됩니다.",
        "effect": {
            "correctionUp": 0.005,
        },
        "duration": 30,
    },
    "잘생김": {
        "description": "인정하고 싶지 않지만 외모는 정치에서 중요합니다. 사람들의 호감이 약간 상승합니다.",
        "effect": {
            "inflow": 0.0002,
        },
        "duration": -1,
    },
    "여자대통령": {
        "description": "아직 대한민국은 또 다른 여자대통령을 맞을 준비가 되지 않았습니다. 지지율 상승도가 일시적으로 둔화됩니다.",
        "effect": {
            "correctionDown": 0.005,
        },
        "duration": 30,
    },
    "경기고 출신": {
        "description": "당신은 전형적인 정치 엘리트로, 상위계층의 사람들과 학연으로 얽혀 좋은 인상을 남깁니다.",
        "effect": {
            2: 0.0005,
        },
        "duration": 50,
    },
    "독신": {
        "description": "당신은 가족과 친척, 그리고 친구도 딱히 없습니다. 네거티브 스캔들로부터 면역을 얻습니다.",
        "effect": {
        },
        "duration": -1,
    },
    "전직 운동권": {
        "description": "오랜 운동의 경험을 지나 기성 정치판에 등장한 당신은 노동계층의 열광적인 지지를 얻습니다.",
        "effect": {
            0: 0.0005,
        },
        "duration": 50,
    },
    "사랑의 추적자": {
        "description": "이런! 바람을 피우셨군요. 비호감을 사지만 어쨌든 사람들은 천천히 잊어버릴 겁니다.",
        "effect": {
            "correctionDown": 0.002,
            "outflow": 0.001,
        },
        "duration": 50,
    },
    "금괴왕": {
        "description": "당신이 금괴를 보유하고 있다는 괴소문이 돕니다. 노년층의 지지율에 영향을 줍니다.",
        "effect": {
            "outflow": -0.001,
            70: -0.0005,
        }
    },
    "젊은 피": {
        "description": "청년 정치인 출신인 당신은 청년 정책을 많이 내놓아 20대의 지지율이 급상승합니다.",
        "effect": {
            20: 0.01,
        },
        "duration": 30,
    },
    "걸어다니는 공익광고": {
        "description": "자기 PR도 좋지만 일단 투표를 독려하는 것이 먼저입니다. 국민의 정치에 대한 관심도가 증가합니다.",
        "effect": {
        },
        "duration": -1,
    },
    "특례채용": {
        "description": "자식이 채용에 특혜를 받았다는 의혹이 불거졌습니다. 20대부터 50대의 지지도가 하락합니다.",
        "effect": {
            20: -0.005,
            30: -0.005,
            40: -0.005,
            50: -0.005,
        },
        "duration": 50,
    },
    "유치원 신설": {
        "description": "국립 유치원 신설 계획을 발표하고 나서 30-40대 중하위계층 국민들의 호응을 얻었습니다.",
        "effect": {
            30: 0.001,
            40: 0.001,
            0: 0.001,
            1: 0.001,
        }
    },
    "정치자금법 위반": {
        "description": "정치자금법 위반 사실이 드러나 이미지에 타격을 입었습니다.. 지지율이 급격히 하락합니다.",
        "effect": {
            "correctionDown": 0.003,
            "outflow": 0.005
        },
        "duration": 50,
    },
    "여권 심판론": {
        "description": "현 정권 심판 카드는 매 대선마다 효과를 발휘합니다. 국민의 일부가 좌편향됩니다.",
        "effect": {
            "electorates": {
                "probability": 0.05,
                "capCom": -0.25,
                "libCons": -0.25,
            }
        },
        "duration": 10,
    },
    "안보 교육": {
        "description": "안보가 얼마나 중요한지 사람들을 설득하는데에 성공했습니다. 국민의 일부가 우편향됩니다.",
        "effect": {
            "electorates": {
                "probability": 0.05,
                "capCom": 0.25,
                "libCons": 0.25,
            }
        },
        "duration": 10,
    },
    "정정당당": {
        "description": "네거티브 없이 선거를 이끌겠다는 선언은 소신있지만 위험한 발언입니다. 표 유입이 줄지만 유출도 줍니다.",
        "effect": {
            "inflow": -0.0005,
            "outflow": -0.001,
        },
        "duration": 30,
    },
    "프로탈당러": {
        "description": "당신은 다른 당에서 이적해 왔습니다. 표방하는 정치 성향이 급격히 변화합니다.",
        "effect": {
        },
        "duration": -1,
    },
    "댓글공작": {
        "description": "캠프 상직자 중 몇을 시켜 인터넷 커뮤니티에 댓글을 올리도록 했습니다. 효과는 성공적이었습니다!",
        "effect": {
            "correctionUp": 0.005,
        },
        "duration": 30,
    },
    "요즘 세대": {
        "description": "정치인으로서 젊은 세대와 교감하는 것은 중요합니다. 2030의 지지율이 상승합니다.",
        "effect": {
            20: 0.005,
            30: 0.005
        },
        "duration": 15,
    },
    "늙은이": {
        "description": "중장년층의 문화 소비가 늘면서 이들의 향수를 자극하는 전략도 좋은 전략이 되었죠. 4050의 지지율이 상승하지만 2030에서의 지지율은 하락합니다.",
        "effect": {
            20: -0.003,
            30: -0.003,
            40: 0.005,
            50: 0.005,
        },
        "duration": 15,
    },
    "군대는 다녀왔니?": {
        "description": "아들의 병역 기피 의혹은 한국인에게 민감한 소재입니다. 모든 나이대에 영향을 미칩니다.",
        "effect": {
            20: -0.005,
            30: -0.002,
            40: -0.002,
            50: -0.002,
            60: -0.003,
            70: -0.002,
        },
        "duration": 30,
    },
    "파란나비": {
        "description": "사드 배치를 반대한 것에 대해 경상북도의 일부 주민은 감사를 표하고 있습니다.",
        "effect":{
            "NorthGyeongsang": 0.007,
        },
        "duration": 30,
    },
    "빨갱이": {
        "description": "한국에서 공산주의는 아직도 금기시됩니다. 빨갱이로 찍힌 당신은 지지율이 떨어지지만, 일부 사람들은 당신의 생각에 찬동합니다.",
        "effect": {
            "correctionDown": 0.003,
            0: 0.005,
            "Jeju": 0.005,
            "electorates": {
                "probability": 0.01,
                "capCom": -0.5,
                "libCons": 0,
            },
        },
        "duration": 20,
    },
    "후보님 사랑합니다": {
        "description": "당신은 열성적인 지지자를 거느렸습니다. 표의 유출이 줄어듭니다.",
        "effect": {
            "outflow": -0.0075,
        },
        "duration": 45,
    },
    "민주화의 성지": {
        "description": "호남의 민주화 정신을 강조한 당신은 호남에서 호감을 얻기 시작합니다.",
        "effect": {
            "NorthJeolla": 0.005,
            "SouthJeolla": 0.005,
            "Gwangju": 0.005,
        },
        "duration": 15,
    }
}