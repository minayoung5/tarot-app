export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  meaning: string;
  reversedMeaning: string;
  image: string;
  type: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  number?: number;
  element?: string;
}

const majorArcana: TarotCard[] = [
  {
    id: 1,
    name: '愚者',
    nameEn: 'The Fool',
    meaning: '开始、冒险、天真、活在当下、无限可能',
    reversedMeaning: '鲁莽、轻率、逃避现实、停滞不前、不负责任',
    image: '',
    type: 'major',
    element: '风'
  },
  {
    id: 2,
    name: '魔术师',
    nameEn: 'The Magician',
    meaning: '能力、专注、行动、资源具足、化想法为现实',
    reversedMeaning: '欺骗、花招、才能误用、缺乏动力、不自信',
    image: '',
    type: 'major',
    element: '风'
  },
  {
    id: 3,
    name: '女祭司',
    nameEn: 'The High Priestess',
    meaning: '直觉、奥秘、潜意识、内在智慧、静默',
    reversedMeaning: '忽视直觉、压抑情感、秘密暴露、肤浅',
    image: '',
    type: 'major',
    element: '水'
  },
  {
    id: 4,
    name: '女皇',
    nameEn: 'The Empress',
    meaning: '丰盛、母性、创造力、感官享受、自然滋养',
    reversedMeaning: '依赖、缺乏成长、创造力受阻、过度追求物质',
    image: '',
    type: 'major',
    element: '土'
  },
  {
    id: 5,
    name: '皇帝',
    nameEn: 'The Emperor',
    meaning: '权威、秩序、领导力、结构、稳定',
    reversedMeaning: '独裁、控制欲过强、缺乏纪律、不成熟',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 6,
    name: '教皇',
    nameEn: 'The Hierophant',
    meaning: '传统、教育、信仰体系、精神指引、遵循规则',
    reversedMeaning: '挑战传统、非正统、限制性信念、盲目服从',
    image: '',
    type: 'major',
    element: '土'
  },
  {
    id: 7,
    name: '恋人',
    nameEn: 'The Lovers',
    meaning: '爱、和谐、选择、关系、价值观结合',
    reversedMeaning: '冲突、不和谐、失衡选择、分离、沟通不良',
    image: '',
    type: 'major',
    element: '风'
  },
  {
    id: 8,
    name: '战车',
    nameEn: 'The Chariot',
    meaning: '意志力、决心、胜利、自我控制、通过挑战',
    reversedMeaning: '失控、冲突内耗、缺乏方向、鲁莽行动',
    image: '',
    type: 'major',
    element: '水'
  },
  {
    id: 9,
    name: '力量',
    nameEn: 'Strength',
    meaning: '勇气、耐心、柔软控制、韧性、以柔克刚',
    reversedMeaning: '自我怀疑、软弱、失控、情绪化、缺乏内在力量',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 10,
    name: '隐士',
    nameEn: 'The Hermit',
    meaning: '内省、指引、寻求真理、孤独、深思熟虑',
    reversedMeaning: '孤立、逃避人群、拒绝指引、过度封闭',
    image: '',
    type: 'major',
    element: '土'
  },
  {
    id: 11,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    meaning: '转变、命运、转折点、好运、自然流动',
    reversedMeaning: '坏运、抗拒变化、中断、失控的局势',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 12,
    name: '正义',
    nameEn: 'Justice',
    meaning: '公正、因果、法律、责任、清晰决策',
    reversedMeaning: '不公、推卸责任、偏袒、失衡裁决',
    image: '',
    type: 'major',
    element: '风'
  },
  {
    id: 13,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    meaning: '暂停、换位思考、牺牲、新视角、放手',
    reversedMeaning: '无谓牺牲、拖延、固执己见、无法行动',
    image: '',
    type: 'major',
    element: '水'
  },
  {
    id: 14,
    name: '死神',
    nameEn: 'Death',
    meaning: '结束、转变、放手、必然改变、重生前奏',
    reversedMeaning: '抗拒改变、停滞、无法摆脱过去、痛苦结束',
    image: '',
    type: 'major',
    element: '水'
  },
  {
    id: 15,
    name: '节制',
    nameEn: 'Temperance',
    meaning: '平衡、调和、耐心、适度、结合创造整体',
    reversedMeaning: '失衡、急躁、冲突、无法协调',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 16,
    name: '恶魔',
    nameEn: 'The Devil',
    meaning: '束缚、物质主义、上瘾、依赖、黑暗面',
    reversedMeaning: '挣脱束缚、觉醒、看清本质、重获自由',
    image: '',
    type: 'major',
    element: '土'
  },
  {
    id: 17,
    name: '高塔',
    nameEn: 'The Tower',
    meaning: '突变、崩溃、觉醒、颠覆、清除旧结构',
    reversedMeaning: '避免灾难、压抑改变、恐惧剧变、勉强维持',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 18,
    name: '星星',
    nameEn: 'The Star',
    meaning: '希望、疗愈、灵感、平静、指引之光',
    reversedMeaning: '绝望、缺乏信心、失望、创造力受阻',
    image: '',
    type: 'major',
    element: '风'
  },
  {
    id: 19,
    name: '月亮',
    nameEn: 'The Moon',
    meaning: '幻觉、恐惧、潜意识、不安、模糊不清',
    reversedMeaning: '拨云见日、克服恐惧、隐藏真相浮现',
    image: '',
    type: 'major',
    element: '水'
  },
  {
    id: 20,
    name: '太阳',
    nameEn: 'The Sun',
    meaning: '快乐、成功、活力、清晰、积极能量',
    reversedMeaning: '暂时阴霾、缺乏热情、延迟快乐、过于乐观',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 21,
    name: '审判',
    nameEn: 'Judgement',
    meaning: '召唤、觉醒、因果报应、再生、原谅过去',
    reversedMeaning: '自我怀疑、拒绝召唤、害怕决定、无法释怀',
    image: '',
    type: 'major',
    element: '火'
  },
  {
    id: 22,
    name: '世界',
    nameEn: 'The World',
    meaning: '完成、完整、成就、旅行、圆满结局',
    reversedMeaning: '未完成、缺乏闭环、延迟成功、还需努力',
    image: '',
    type: 'major',
    element: '土'
  }
];

const minorArcana: TarotCard[] = [
  {
    id: 23,
    name: '权杖一',
    nameEn: 'Ace of Wands',
    meaning: '新开始、行动、创造力、机会、热情',
    reversedMeaning: '延迟、犹豫、缺乏方向、机会落空',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 1,
    element: '火'
  },
  {
    id: 24,
    name: '权杖二',
    nameEn: 'Two of Wands',
    meaning: '计划、决定、展望未来、个人力量',
    reversedMeaning: '恐惧未知、计划停滞、退缩、犹豫不决',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 2,
    element: '火'
  },
  {
    id: 25,
    name: '权杖三',
    nameEn: 'Three of Wands',
    meaning: '远见、领导、贸易、初步成功、探索',
    reversedMeaning: '延误、过度自负、缺乏合作、看不到全局',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 3,
    element: '火'
  },
  {
    id: 26,
    name: '权杖四',
    nameEn: 'Four of Wands',
    meaning: '庆祝、稳定、和谐、回家、里程碑',
    reversedMeaning: '不稳定、家庭冲突、过渡期、缺乏庆祝',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 4,
    element: '火'
  },
  {
    id: 27,
    name: '权杖五',
    nameEn: 'Five of Wands',
    meaning: '冲突、竞争、分歧、混乱、较劲',
    reversedMeaning: '内部冲突、避免争执、达成共识、暴力化解',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 5,
    element: '火'
  },
  {
    id: 28,
    name: '权杖六',
    nameEn: 'Six of Wands',
    meaning: '胜利、认可、自信、好消息、前进',
    reversedMeaning: '失败、骄傲、叛变、消息延迟',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 6,
    element: '火'
  },
  {
    id: 29,
    name: '权杖七',
    nameEn: 'Seven of Wands',
    meaning: '坚守立场、防御、挑战、勇气、不放弃',
    reversedMeaning: '放弃、压力过大、被击垮、优柔寡断',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 7,
    element: '火'
  },
  {
    id: 30,
    name: '权杖八',
    nameEn: 'Eight of Wands',
    meaning: '迅速行动、信息到达、旅行、进展飞速',
    reversedMeaning: '延迟、急刹车、混乱、失控加速',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 8,
    element: '火'
  },
  {
    id: 31,
    name: '权杖九',
    nameEn: 'Nine of Wands',
    meaning: '坚守、警觉、边界、最后一搏、受伤但未倒',
    reversedMeaning: '偏执、防御过当、疲惫放弃、疑心重',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 9,
    element: '火'
  },
  {
    id: 32,
    name: '权杖十',
    nameEn: 'Ten of Wands',
    meaning: '负担、压力、责任、承担过多、耗尽',
    reversedMeaning: '崩溃、卸下责任、逃避、无法承担',
    image: '',
    type: 'minor',
    suit: 'wands',
    number: 10,
    element: '火'
  },
  {
    id: 33,
    name: '权杖侍从',
    nameEn: 'Page of Wands',
    meaning: '新消息、热情青年、探索、好奇心',
    reversedMeaning: '坏消息、不成熟、冲动、缺乏方向',
    image: '',
    type: 'minor',
    number: 11,
    suit: 'wands',
    element: '火'
  },
  {
    id: 34,
    name: '权杖骑士',
    nameEn: 'Knight of Wands',
    meaning: '行动力、冒险、热情、旅行、变化',
    reversedMeaning: '冲突、鲁莽、急躁、破坏性行动',
    image: '',
    type: 'minor',
    number: 12,
    suit: 'wands',
    element: '火'
  },
  {
    id: 35,
    name: '权杖王后',
    nameEn: 'Queen of Wands',
    meaning: '自信、活力、独立、吸引力、热情领导',
    reversedMeaning: '嫉妒、控制欲、暴躁、情绪化',
    image: '',
    type: 'minor',
    number: 13,
    suit: 'wands',
    element: '火'
  },
  {
    id: 36,
    name: '权杖国王',
    nameEn: 'King of Wands',
    meaning: '领导力、远见、事业成就、成熟激情',
    reversedMeaning: '专制、傲慢、不耐烦、事业受挫',
    image: '',
    type: 'minor',
    number: 14,
    suit: 'wands',
    element: '火'
  },
  {
    id: 37,
    name: '圣杯一',
    nameEn: 'Ace of Cups',
    meaning: '爱、新感情、喜悦、直觉、丰沛情感',
    reversedMeaning: '情感受阻、空虚、压抑、关系萌芽夭折',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 1,
    element: '水'
  },
  {
    id: 38,
    name: '圣杯二',
    nameEn: 'Two of Cups',
    meaning: '平等关系、恋情、友谊、结合、吸引',
    reversedMeaning: '失衡、误解、关系破裂、沟通不畅',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 2,
    element: '水'
  },
  {
    id: 39,
    name: '圣杯三',
    nameEn: 'Three of Cups',
    meaning: '庆祝、友谊、聚会、合作、喜悦',
    reversedMeaning: '过度放纵、八卦、孤立、三角关系',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 3,
    element: '水'
  },
  {
    id: 40,
    name: '圣杯四',
    nameEn: 'Four of Cups',
    meaning: '厌倦、冷漠、不满足、思虑、错过机会',
    reversedMeaning: '新可能、自我觉醒、打破停滞、接受邀请',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 4,
    element: '水'
  },
  {
    id: 41,
    name: '圣杯五',
    nameEn: 'Five of Cups',
    meaning: '悲伤、失落、后悔、聚焦失去',
    reversedMeaning: '走出悲伤、接纳、看见希望、开始前进',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 5,
    element: '水'
  },
  {
    id: 42,
    name: '圣杯六',
    nameEn: 'Six of Cups',
    meaning: '回忆、童年、单纯、赠予、保护',
    reversedMeaning: '活在过去、依恋、不成熟、无法前进',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 6,
    element: '水'
  },
  {
    id: 43,
    name: '圣杯七',
    nameEn: 'Seven of Cups',
    meaning: '幻想、选择多、迷惑、白日梦、混乱',
    reversedMeaning: '清醒、做决定、摆脱幻想、现实面对',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 7,
    element: '水'
  },
  {
    id: 44,
    name: '圣杯八',
    nameEn: 'Eight of Cups',
    meaning: '离开、寻找更高意义、勇敢前行、放手',
    reversedMeaning: '害怕离开、困在原地、逃避变化、犹豫',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 8,
    element: '水'
  },
  {
    id: 45,
    name: '圣杯九',
    nameEn: 'Nine of Cups',
    meaning: '愿望成真、满足、快乐、自我欣赏',
    reversedMeaning: '贪婪、过度自满、愿望落空、表面满足',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 9,
    element: '水'
  },
  {
    id: 46,
    name: '圣杯十',
    nameEn: 'Ten of Cups',
    meaning: '家庭和谐、幸福、情感圆满、归属感',
    reversedMeaning: '家庭冲突、不和谐、疏离、表面幸福',
    image: '',
    type: 'minor',
    suit: 'cups',
    number: 10,
    element: '水'
  },
  {
    id: 47,
    name: '圣杯侍从',
    nameEn: 'Page of Cups',
    meaning: '感性、创意、善意消息、温柔少年',
    reversedMeaning: '情绪不稳、不成熟、失望、缺乏创意',
    image: '',
    type: 'minor',
    number: 11,
    suit: 'cups',
    element: '水'
  },
  {
    id: 48,
    name: '圣杯骑士',
    nameEn: 'Knight of Cups',
    meaning: '浪漫、邀请、理想情人、温柔行动',
    reversedMeaning: '情绪波动、欺骗、逃避承诺、不靠谱',
    image: '',
    type: 'minor',
    number: 12,
    suit: 'cups',
    element: '水'
  },
  {
    id: 49,
    name: '圣杯王后',
    nameEn: 'Queen of Cups',
    meaning: '直觉、共情、滋养、倾听、温柔力量',
    reversedMeaning: '多愁善感、情绪勒索、依赖、不安全感',
    image: '',
    type: 'minor',
    number: 13,
    suit: 'cups',
    element: '水'
  },
  {
    id: 50,
    name: '圣杯国王',
    nameEn: 'King of Cups',
    meaning: '情感成熟、慈悲、平衡、家庭领袖',
    reversedMeaning: '情绪操控、冷暴力、压抑情感、不忠',
    image: '',
    type: 'minor',
    number: 14,
    suit: 'cups',
    element: '水'
  },
  {
    id: 51,
    name: '宝剑一',
    nameEn: 'Ace of Swords',
    meaning: '清晰、真相、智力突破、决断、公正',
    reversedMeaning: '混乱、残酷真相、被误解、逃避',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 1,
    element: '风'
  },
  {
    id: 52,
    name: '宝剑二',
    nameEn: 'Two of Swords',
    meaning: '僵局、逃避、拒绝面对、内心矛盾',
    reversedMeaning: '放下防御、接受真相、做出决定',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 2,
    element: '风'
  },
  {
    id: 53,
    name: '宝剑三',
    nameEn: 'Three of Swords',
    meaning: '心碎、悲伤、背叛、痛苦、分离',
    reversedMeaning: '疗愈、释放痛苦、原谅、走出阴霾',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 3,
    element: '风'
  },
  {
    id: 54,
    name: '宝剑四',
    nameEn: 'Four of Swords',
    meaning: '休息、恢复、静养、暂停思考',
    reversedMeaning: '疲惫、焦虑无法休息、反复思考',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 4,
    element: '风'
  },
  {
    id: 55,
    name: '宝剑五',
    nameEn: 'Five of Swords',
    meaning: '冲突赢但空虚、不择手段、人际紧张',
    reversedMeaning: '和解、放下、承认失败、吸取教训',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 5,
    element: '风'
  },
  {
    id: 56,
    name: '宝剑六',
    nameEn: 'Six of Swords',
    meaning: '过渡、离开困难、逐渐平静、疗愈之旅',
    reversedMeaning: '困在过去、无法前进、问题拖延',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 6,
    element: '风'
  },
  {
    id: 57,
    name: '宝剑七',
    nameEn: 'Seven of Swords',
    meaning: '策略、掩饰、智取、小聪明、隐秘行动',
    reversedMeaning: '暴露、诚实面对、策略失败、自我欺骗',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 7,
    element: '风'
  },
  {
    id: 58,
    name: '宝剑八',
    nameEn: 'Eight of Swords',
    meaning: '限制、自我束缚、无助感、被困',
    reversedMeaning: '解放、看清出路、打破限制、接受帮助',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 8,
    element: '风'
  },
  {
    id: 59,
    name: '宝剑九',
    nameEn: 'Nine of Swords',
    meaning: '噩梦、焦虑、内疚、深夜痛苦',
    reversedMeaning: '走出阴霾、寻求帮助、恐惧减轻',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 9,
    element: '风'
  },
  {
    id: 60,
    name: '宝剑十',
    nameEn: 'Ten of Swords',
    meaning: '终结、触底、牺牲、被迫结束',
    reversedMeaning: '绝处逢生、恢复、慢慢好转、不愿接受结束',
    image: '',
    type: 'minor',
    suit: 'swords',
    number: 10,
    element: '风'
  },
  {
    id: 61,
    name: '宝剑侍从',
    nameEn: 'Page of Swords',
    meaning: '警觉、新想法、观察、好奇心',
    reversedMeaning: '八卦、轻率、攻击性言语、多疑',
    image: '',
    type: 'minor',
    number: 11,
    suit: 'swords',
    element: '风'
  },
  {
    id: 62,
    name: '宝剑骑士',
    nameEn: 'Knight of Swords',
    meaning: '快速行动、直言、激烈、追求真相',
    reversedMeaning: '冲动、鲁莽言语、冲突升级、失控',
    image: '',
    type: 'minor',
    number: 12,
    suit: 'swords',
    element: '风'
  },
  {
    id: 63,
    name: '宝剑王后',
    nameEn: 'Queen of Swords',
    meaning: '理性、独立、清晰判断、敏锐',
    reversedMeaning: '冷酷、尖酸、偏见、情感隔绝',
    image: '',
    type: 'minor',
    number: 13,
    suit: 'swords',
    element: '风'
  },
  {
    id: 64,
    name: '宝剑国王',
    nameEn: 'King of Swords',
    meaning: '智力权威、公正、战略、理性领导',
    reversedMeaning: '独断、滥用逻辑、残酷、思想控制',
    image: '',
    type: 'minor',
    number: 14,
    suit: 'swords',
    element: '风'
  },
  {
    id: 65,
    name: '星币一',
    nameEn: 'Ace of Pentacles',
    meaning: '新机会、财富、健康、安全感、实际开始',
    reversedMeaning: '错过机会、贪心、物质匮乏、浪费',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 1,
    element: '土'
  },
  {
    id: 66,
    name: '星币二',
    nameEn: 'Two of Pentacles',
    meaning: '平衡财务、适应变化、多任务',
    reversedMeaning: '失衡、超支、混乱、无力应对',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 2,
    element: '土'
  },
  {
    id: 67,
    name: '星币三',
    nameEn: 'Three of Pentacles',
    meaning: '团队合作、技能展现、规划、初步成果',
    reversedMeaning: '缺乏合作、技能不足、懒散、不受认可',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 3,
    element: '土'
  },
  {
    id: 68,
    name: '星币四',
    nameEn: 'Four of Pentacles',
    meaning: '控制、保守、占有、稳定但僵化',
    reversedMeaning: '过度吝啬、不放手、财务失控、失去稳定',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 4,
    element: '土'
  },
  {
    id: 69,
    name: '星币五',
    nameEn: 'Five of Pentacles',
    meaning: '贫困、孤立、不安、精神或物质匮乏',
    reversedMeaning: '走出困境、恢复、寻找帮助、情况好转',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 5,
    element: '土'
  },
  {
    id: 70,
    name: '星币六',
    nameEn: 'Six of Pentacles',
    meaning: '分享、慷慨、给予与接受、公平',
    reversedMeaning: '不平等、债务、自私、接受不当',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 6,
    element: '土'
  },
  {
    id: 71,
    name: '星币七',
    nameEn: 'Seven of Pentacles',
    meaning: '评估、收成、耐心、投资回报',
    reversedMeaning: '急躁、回报不佳、缺乏规划、半途而废',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 7,
    element: '土'
  },
  {
    id: 72,
    name: '星币八',
    nameEn: 'Eight of Pentacles',
    meaning: '专注、精进、学徒、注重细节',
    reversedMeaning: '低质量、缺乏热情、马虎、技能不足',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 8,
    element: '土'
  },
  {
    id: 73,
    name: '星币九',
    nameEn: 'Nine of Pentacles',
    meaning: '自足、享受、优雅、物质独立',
    reversedMeaning: '过度依赖、挥霍、虚假安全、不安',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 9,
    element: '土'
  },
  {
    id: 74,
    name: '星币十',
    nameEn: 'Ten of Pentacles',
    meaning: '家族财富、传承、稳定、长期成功',
    reversedMeaning: '家族争斗、财务崩溃、表面风光',
    image: '',
    type: 'minor',
    suit: 'pentacles',
    number: 10,
    element: '土'
  },
  {
    id: 75,
    name: '星币侍从',
    nameEn: 'Page of Pentacles',
    meaning: '学习、新工作、务实、专注目标',
    reversedMeaning: '懒惰、缺乏务实、浪费机会、不专注',
    image: '',
    type: 'minor',
    number: 11,
    suit: 'pentacles',
    element: '土'
  },
  {
    id: 76,
    name: '星币骑士',
    nameEn: 'Knight of Pentacles',
    meaning: '勤奋、责任、稳定前进、务实行动',
    reversedMeaning: '懒惰、固执、毫无进展、财务拖延',
    image: '',
    type: 'minor',
    number: 12,
    suit: 'pentacles',
    element: '土'
  },
  {
    id: 77,
    name: '星币王后',
    nameEn: 'Queen of Pentacles',
    meaning: '务实、丰盛、滋养、居家、自然力量',
    reversedMeaning: '过度节俭、控制、财务焦虑、忽视自我',
    image: '',
    type: 'minor',
    number: 13,
    suit: 'pentacles',
    element: '土'
  },
  {
    id: 78,
    name: '星币国王',
    nameEn: 'King of Pentacles',
    meaning: '财富、成功、务实领导、商业头脑',
    reversedMeaning: '贪婪、物质主义、守财、事业失败',
    image: '',
    type: 'minor',
    number: 14,
    suit: 'pentacles',
    element: '土'
  }
];

export const tarotCards: TarotCard[] = [...majorArcana, ...minorArcana];

export const drawCards = (cards: TarotCard[], count: number, question?: string): TarotCard[] => {
  const timestamp = performance.now() * 1000;

  let charSeed = 0;
  if (question) {
    for (let i = 0; i < question.length; i++) {
      charSeed += question.charCodeAt(i) * (i + 1);
    }
  }

  let seed = (timestamp + charSeed + Math.random() * 1000000) % 1000000;

  const pseudoRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const result: TarotCard[] = [];
  const availableCards = [...cards];

  for (let i = 0; i < count; i++) {
    for (let s = 0; s < 5; s++) {
      for (let j = availableCards.length - 1; j > 0; j--) {
        const k = Math.floor(pseudoRandom() * (j + 1));
        [availableCards[j], availableCards[k]] = [availableCards[k], availableCards[j]];
      }
    }

    const randomIndex = Math.floor(pseudoRandom() * availableCards.length);
    result.push(availableCards[randomIndex]);
    availableCards.splice(randomIndex, 1);
  }

  return result;
};

export const getRandomReversed = (): boolean => Math.random() < 0.5;
