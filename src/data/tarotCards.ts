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

const cardImageStyle = 'vintage%20tarot%20card%20illustration%20ornate%20gold%20border%20dark%20cosmic%20background%20mystical%20ethereal%20art%20nouveau%20style%20high%20detail';

const createMinorArcana = (): TarotCard[] => {
  const suits = [
    { name: '权杖', en: 'Wands', element: '火', color: 'orange' },
    { name: '圣杯', en: 'Cups', element: '水', color: 'blue' },
    { name: '宝剑', en: 'Swords', element: '风', color: 'purple' },
    { name: '星币', en: 'Pentacles', element: '土', color: 'green' }
  ];

  const numbers = ['首牌', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const courtCards = [
    { name: '侍从', en: 'Page' },
    { name: '骑士', en: 'Knight' },
    { name: '王后', en: 'Queen' },
    { name: '国王', en: 'King' }
  ];

  const cards: TarotCard[] = [];
  let id = 23;

  for (const suit of suits) {
    for (let i = 0; i < numbers.length; i++) {
      cards.push({
        id,
        name: `${suit.name}${numbers[i]}`,
        nameEn: `${numbers[i]} of ${suit.en}`,
        meaning: `${suit.name}牌组代表${suit.element}元素的能量，${numbers[i]}号带来平衡与发展的力量。`,
        reversedMeaning: `${suit.name}牌组逆位时能量受阻，${numbers[i]}号暗示需要重新评估当前的局面。`,
        image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${suit.en}%20${numbers[i]}%20tarot%20card%20${suit.color}%20and%20gold%20${cardImageStyle}&image_size=portrait_4_3`,
        type: 'minor',
        suit: suit.en.toLowerCase() as any,
        number: i + 1,
        element: suit.element
      });
      id++;
    }

    for (const court of courtCards) {
      cards.push({
        id,
        name: `${suit.name}${court.name}`,
        nameEn: `${court.en} of ${suit.en}`,
        meaning: `${suit.name}${court.name}代表${suit.element}元素的成熟与掌控，带来稳定的能量。`,
        reversedMeaning: `${suit.name}${court.name}逆位时暗示不成熟或失去方向，需要重新找回平衡。`,
        image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${court.en}%20of%20${suit.en}%20tarot%20card%20${suit.color}%20and%20gold%20${cardImageStyle}&image_size=portrait_4_3`,
        type: 'minor',
        suit: suit.en.toLowerCase() as any,
        element: suit.element
      });
      id++;
    }
  }

  return cards;
};

const majorArcana: TarotCard[] = [
  {
    id: 1,
    name: '愚者',
    nameEn: 'The Fool',
    meaning: '新的开始、纯真、冒险精神、无限可能。代表着放下过去，勇敢地迈向未知的旅程。',
    reversedMeaning: '鲁莽、冒险失败、缺乏计划、误入歧途。提醒你在行动前要深思熟虑。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Fool%20tarot%20card%20young%20person%20on%20cliff%20white%20rose%20small%20dog%20sunrise%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '风'
  },
  {
    id: 2,
    name: '魔术师',
    nameEn: 'The Magician',
    meaning: '创造力、技能、意志力、资源整合。你拥有实现梦想所需的一切能力。',
    reversedMeaning: '欺骗、操纵、能力未发挥、过度自信。警惕虚假的表象和自我膨胀。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Magician%20tarot%20card%20man%20at%20table%20four%20suit%20symbols%20infinity%20symbol%20above%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '风'
  },
  {
    id: 3,
    name: '女祭司',
    nameEn: 'The High Priestess',
    meaning: '直觉、神秘、内在智慧、潜意识。倾听内心的声音，相信你的直觉。',
    reversedMeaning: '隐藏的动机、表面化、拒绝倾听直觉。需要深入探索自己的内心世界。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20High%20Priestess%20tarot%20card%20woman%20between%20two%20pillars%20moon%20crown%20scroll%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '水'
  },
  {
    id: 4,
    name: '皇后',
    nameEn: 'The Empress',
    meaning: '丰饶、创造力、母性、滋养。代表着生命的丰盛和情感的满足。',
    reversedMeaning: '依赖、过度保护、缺乏自律、不安全感。需要建立健康的界限。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Empress%20tarot%20card%20woman%20on%20throne%20flowers%20wheat%20crown%20of%20stars%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '土'
  },
  {
    id: 5,
    name: '皇帝',
    nameEn: 'The Emperor',
    meaning: '权威、稳定、父性、结构。代表着建立秩序和掌控局面的能力。',
    reversedMeaning: '专制、僵化、过度控制、缺乏灵活性。需要学会变通和放手。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Emperor%20tarot%20card%20man%20on%20throne%20ram%20horns%20scepter%20armor%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 6,
    name: '教皇',
    nameEn: 'The Hierophant',
    meaning: '传统、信仰、导师、智慧传承。代表着寻求更高的真理和精神指引。',
    reversedMeaning: '非传统、挑战权威、独立思考、拒绝教条。需要走自己的道路。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Hierophant%20tarot%20card%20priest%20on%20throne%20two%20disciples%20cross%20keys%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '土'
  },
  {
    id: 7,
    name: '恋人',
    nameEn: 'The Lovers',
    meaning: '爱情、和谐、选择、灵魂连接。代表着重要的关系和关键的人生抉择。',
    reversedMeaning: '不和谐、错误的选择、关系问题、诱惑。需要重新审视你的关系和选择。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Lovers%20tarot%20card%20man%20and%20woman%20angel%20above%20tree%20of%20knowledge%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '风'
  },
  {
    id: 8,
    name: '战车',
    nameEn: 'The Chariot',
    meaning: '胜利、意志力、决心、克服障碍。代表着坚定地朝着目标前进。',
    reversedMeaning: '失控、缺乏方向、攻击性、失败。需要重新调整方向和策略。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Chariot%20tarot%20card%20warrior%20in%20chariot%20two%20sphinxes%20crown%20canopy%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '水'
  },
  {
    id: 9,
    name: '力量',
    nameEn: 'Strength',
    meaning: '内在力量、勇气、耐心、温柔的力量。真正的力量来自内心的平静和自信。',
    reversedMeaning: '软弱、自我怀疑、滥用力量、缺乏耐心。需要找回内在的力量和自信。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Strength%20tarot%20card%20woman%20taming%20lion%20infinity%20symbol%20flowers%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 10,
    name: '隐士',
    nameEn: 'The Hermit',
    meaning: '内省、孤独、智慧、自我发现。需要退隐独处，倾听内心的声音。',
    reversedMeaning: '孤独、拒绝帮助、孤立、害怕社交。需要走出孤独，与他人连接。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Hermit%20tarot%20card%20old%20man%20with%20lantern%20mountain%20peak%20cloak%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '土'
  },
  {
    id: 11,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    meaning: '命运、转折点、机遇、无常。代表着生活的起伏和命运的转变。',
    reversedMeaning: '厄运、抗拒变化、错过机会、命运不顺。需要学会接受和顺应变化。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wheel%20of%20Fortune%20tarot%20card%20spinning%20wheel%20sphinx%20snake%20angel%20eagle%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 12,
    name: '正义',
    nameEn: 'Justice',
    meaning: '公正、真相、因果、道德。代表着公平和真理终将显现。',
    reversedMeaning: '不公正、偏见、逃避责任、不诚实。需要面对真相并承担责任。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Justice%20tarot%20card%20woman%20with%20scales%20and%20sword%20crown%20throne%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '风'
  },
  {
    id: 13,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    meaning: '牺牲、等待、放下、新视角。有时候放手是为了获得更高的智慧。',
    reversedMeaning: '拖延、抗拒、牺牲不值得、缺乏耐心。需要做出决定并采取行动。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Hanged%20Man%20tarot%20card%20man%20hanging%20upside%20down%20halo%20tree%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '水'
  },
  {
    id: 14,
    name: '死神',
    nameEn: 'Death',
    meaning: '结束、转变、重生、蜕变。代表着旧事物的结束和新事物的开始。',
    reversedMeaning: '抗拒变化、停滞、恐惧结束、不愿放手。需要接受不可避免的转变。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Death%20tarot%20card%20skeleton%20on%20horse%20scythe%20rising%20sun%20white%20rose%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '水'
  },
  {
    id: 15,
    name: '节制',
    nameEn: 'Temperance',
    meaning: '平衡、耐心、调和、自我控制。代表着适度和和谐的生活态度。',
    reversedMeaning: '失衡、过度、缺乏耐心、自我毁灭。需要找回平衡和节制。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Temperance%20tarot%20card%20angel%20pouring%20water%20between%20cups%20mountain%20path%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 16,
    name: '恶魔',
    nameEn: 'The Devil',
    meaning: '束缚、诱惑、阴影面、物质主义。代表着我们内心的恐惧和执念。',
    reversedMeaning: '解脱、面对恐惧、打破束缚、释放。需要正视并超越自己的恐惧。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Devil%20tarot%20card%20horned%20figure%20inverted%20pentagram%20two%20chained%20figures%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '土'
  },
  {
    id: 17,
    name: '塔',
    nameEn: 'The Tower',
    meaning: '突然变化、觉醒、破坏、释放。代表着旧结构的崩塌和新的觉醒。',
    reversedMeaning: '逃避变化、恐惧、抗拒觉醒、勉强维持。需要勇敢面对变革。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Tower%20tarot%20card%20tower%20struck%20by%20lightning%20falling%20crown%20fire%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 18,
    name: '星星',
    nameEn: 'The Star',
    meaning: '希望、灵感、宁静、疗愈。代表着内心的平静和对未来的希望。',
    reversedMeaning: '失望、缺乏希望、灵感枯竭、孤独。需要重新找回希望和信念。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Star%20tarot%20card%20woman%20pouring%20water%20eight%20stars%20bird%20in%20tree%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '风'
  },
  {
    id: 19,
    name: '月亮',
    nameEn: 'The Moon',
    meaning: '幻觉、潜意识、直觉、周期变化。代表着隐藏的情绪和深层的心理状态。',
    reversedMeaning: '混乱、恐惧、误解、情绪波动。需要理清思路，面对真实的感受。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Moon%20tarot%20card%20full%20moon%20two%20towers%20wolf%20and%20dog%20crayfish%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '水'
  },
  {
    id: 20,
    name: '太阳',
    nameEn: 'The Sun',
    meaning: '喜悦、成功、活力、光明。代表着幸福、成就和积极的能量。',
    reversedMeaning: '消极、延迟成功、缺乏快乐、压力。需要找回生活的乐趣和热情。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Sun%20tarot%20card%20child%20on%20white%20horse%20sunflowers%20radiant%20sun%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 21,
    name: '审判',
    nameEn: 'Judgement',
    meaning: '重生、觉醒、召唤、自我反省。代表着深刻的转变和新的开始。',
    reversedMeaning: '自我怀疑、拒绝召唤、缺乏自我反省、不愿改变。需要倾听内心的召唤。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Judgement%20tarot%20card%20angel%20blowing%20trumpet%20rising%20dead%20red%20cross%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '火'
  },
  {
    id: 22,
    name: '世界',
    nameEn: 'The World',
    meaning: '完成、整合、成就、圆满。代表着一个周期的圆满结束。',
    reversedMeaning: '未完成、缺乏 closure、拖延、不完整。需要完成未竟之事，寻求圆满。',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20World%20tarot%20card%20dancing%20woman%20laurel%20wreath%20four%20living%20creatures%20${cardImageStyle}&image_size=portrait_4_3`,
    type: 'major',
    element: '土'
  }
];

export const tarotCards: TarotCard[] = [...majorArcana, ...createMinorArcana()];

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
