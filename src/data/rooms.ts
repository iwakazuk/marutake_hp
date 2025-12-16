import type { Room } from '@/types';

export const rooms: Room[] = [
  {
    id: 'room-a',
    name: 'シングルルーム A',
    price: 45000,
    size: 8,
    floor: 2,
    available: true,
    availableDate: '2025年2月1日',
    features: ['南向き', '日当たり良好', 'エアコン完備', '収納スペース'],
    images: [
      'https://readdy.ai/api/search-image?query=modern%20minimalist%20private%20bedroom%20in%20share%20house%2C%20single%20bed%20with%20clean%20white%20bedding%2C%20wooden%20desk%20and%20chair%2C%20large%20window%20with%20natural%20light%2C%20simple%20clean%20design%2C%20warm%20atmosphere%2C%20cozy%20personal%20space&width=800&height=600&seq=rooma001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=bedroom%20window%20view%20with%20natural%20sunlight%2C%20bright%20airy%20room%2C%20clean%20minimalist%20design%2C%20comfortable%20personal%20space%20in%20share%20house&width=800&height=600&seq=rooma002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=organized%20closet%20and%20storage%20space%20in%20share%20house%20bedroom%2C%20clean%20minimal%20design%2C%20efficient%20use%20of%20space&width=800&height=600&seq=rooma003&orientation=landscape',
    ],
    description: '南向きで日当たりの良い明るいお部屋です。窓からは山王の街並みが見え、朝は気持ちよく目覚められます。',
  },
  {
    id: 'room-b',
    name: 'ダブルルーム B',
    price: 52000,
    size: 10,
    floor: 2,
    available: false,
    features: ['広々スペース', 'ダブルベッド', 'エアコン完備', '大型収納'],
    images: [
      'https://readdy.ai/api/search-image?query=spacious%20private%20bedroom%20in%20share%20house%20with%20double%20bed%2C%20modern%20furniture%2C%20large%20window%2C%20natural%20light%2C%20minimalist%20design%2C%20comfortable%20personal%20space%2C%20warm%20wooden%20accents%2C%20clean%20organized%20room&width=800&height=600&seq=roomb001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=double%20bed%20with%20comfortable%20bedding%20in%20modern%20share%20house%20room%2C%20cozy%20atmosphere%2C%20natural%20lighting&width=800&height=600&seq=roomb002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=spacious%20bedroom%20with%20work%20desk%20and%20storage%2C%20modern%20minimalist%20design%2C%20natural%20light%2C%20comfortable%20living%20space&width=800&height=600&seq=roomb003&orientation=landscape',
    ],
    description: 'ゆったりとしたダブルベッドのお部屋。広めの収納スペースがあり、長期滞在にも最適です。',
  },
  {
    id: 'room-c',
    name: 'シングルルーム C',
    price: 47000,
    size: 9,
    floor: 3,
    available: true,
    availableDate: '即入居可',
    features: ['静かな環境', '最上階', 'エアコン完備', 'デスク付き'],
    images: [
      'https://readdy.ai/api/search-image?query=quiet%20peaceful%20bedroom%20on%20top%20floor%20of%20share%20house%2C%20single%20bed%2C%20study%20desk%2C%20natural%20light%2C%20calm%20atmosphere%2C%20minimalist%20design%2C%20comfortable%20personal%20space&width=800&height=600&seq=roomc001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=study%20desk%20area%20in%20bedroom%20with%20natural%20light%2C%20organized%20workspace%2C%20comfortable%20chair%2C%20modern%20design&width=800&height=600&seq=roomc002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=top%20floor%20bedroom%20with%20skylight%20window%2C%20bright%20natural%20lighting%2C%20peaceful%20atmosphere%2C%20clean%20minimal%20design&width=800&height=600&seq=roomc003&orientation=landscape',
    ],
    description: '最上階の静かなお部屋。集中して勉強や仕事をしたい方におすすめです。',
  },
  {
    id: 'room-d',
    name: 'シングルルーム D',
    price: 46000,
    size: 8.5,
    floor: 1,
    available: true,
    availableDate: '2025年3月1日',
    features: ['1階', 'アクセス便利', 'エアコン完備', '収納充実'],
    images: [
      'https://readdy.ai/api/search-image?query=ground%20floor%20bedroom%20in%20share%20house%2C%20convenient%20access%2C%20single%20bed%2C%20modern%20furniture%2C%20natural%20light%2C%20practical%20design%2C%20comfortable%20living%20space&width=800&height=600&seq=roomd001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=bedroom%20entrance%20and%20storage%20area%2C%20organized%20space%2C%20clean%20design%2C%20easy%20access&width=800&height=600&seq=roomd002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=cozy%20single%20room%20with%20efficient%20layout%2C%20comfortable%20bed%2C%20study%20area%2C%20warm%20atmosphere&width=800&height=600&seq=roomd003&orientation=landscape',
    ],
    description: '1階で出入りしやすいお部屋。荷物が多い方や頻繁に外出する方に便利です。',
  },
];

export const sharedSpaces = [
  {
    name: 'リビングルーム',
    description:
      'みんなが集まる憩いの場所。大きなソファとプロジェクターがあり、映画鑑賞会やゲーム大会が開かれます。',
    features: ['大型ソファ', 'プロジェクター', 'テレビ', 'ボードゲーム', 'エアコン'],
    images: [
      'https://readdy.ai/api/search-image?query=modern%20share%20house%20common%20living%20room%20with%20comfortable%20sofas%2C%20large%20windows%2C%20natural%20light%2C%20plants%2C%20warm%20inviting%20atmosphere%2C%20communal%20space%20for%20gathering%2C%20contemporary%20interior%20design%2C%20cozy%20social%20area&width=800&height=600&seq=living001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=people%20relaxing%20in%20share%20house%20living%20room%2C%20diverse%20group%20chatting%2C%20warm%20atmosphere%2C%20comfortable%20seating%2C%20natural%20lighting&width=800&height=600&seq=living002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=projector%20screen%20in%20living%20room%20for%20movie%20nights%2C%20cozy%20atmosphere%2C%20comfortable%20viewing%20space&width=800&height=600&seq=living003&orientation=landscape',
    ],
  },
  {
    name: 'キッチン・ダイニング',
    description:
      '広々としたキッチンスペース。料理好きな住民が腕を振るい、各国の料理が楽しめます。',
    features: ['IHコンロ', '冷蔵庫（大型）', '電子レンジ', 'オーブン', '食器・調理器具完備', 'ダイニングテーブル'],
    images: [
      'https://readdy.ai/api/search-image?query=modern%20share%20house%20kitchen%20with%20dining%20table%2C%20bright%20spacious%20design%2C%20complete%20cooking%20equipment%2C%20natural%20light%2C%20clean%20organized%20space%2C%20communal%20cooking%20area%2C%20warm%20inviting%20atmosphere&width=800&height=600&seq=kitchen001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=diverse%20people%20cooking%20together%20in%20share%20house%20kitchen%2C%20multicultural%20cooking%2C%20friendly%20atmosphere%2C%20collaborative%20meal%20preparation&width=800&height=600&seq=kitchen002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=dining%20table%20with%20people%20eating%20together%2C%20multicultural%20meal%2C%20warm%20social%20atmosphere%2C%20community%20dining&width=800&height=600&seq=kitchen003&orientation=landscape',
    ],
  },
  {
    name: 'バスルーム・シャワー',
    description: '清潔で広々としたバスルーム。シャワーブースは2つあり、朝の混雑も安心です。',
    features: ['シャワーブース×2', '洗面台×2', 'トイレ×2', '洗濯機', '乾燥機'],
    images: [
      'https://readdy.ai/api/search-image?query=clean%20modern%20bathroom%20in%20share%20house%2C%20bright%20lighting%2C%20white%20tiles%2C%20organized%20space%2C%20multiple%20shower%20booths%2C%20contemporary%20design%2C%20hygienic%20facilities&width=800&height=600&seq=bathroom001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=washing%20machine%20and%20dryer%20area%20in%20share%20house%2C%20clean%20organized%20laundry%20space%2C%20modern%20appliances&width=800&height=600&seq=bathroom002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=bathroom%20vanity%20with%20mirror%20and%20sink%2C%20clean%20modern%20design%2C%20bright%20lighting%2C%20organized%20space&width=800&height=600&seq=bathroom003&orientation=landscape',
    ],
  },
  {
    name: 'ワークスペース',
    description: '静かに集中できる作業スペース。リモートワークや勉強に最適です。',
    features: ['デスク×4', 'WiFi完備', '静音環境', 'エアコン', '充電スポット'],
    images: [
      'https://readdy.ai/api/search-image?query=quiet%20work%20space%20in%20share%20house%2C%20multiple%20desks%2C%20natural%20light%2C%20focused%20atmosphere%2C%20modern%20design%2C%20comfortable%20chairs%2C%20organized%20study%20area%2C%20productive%20environment&width=800&height=600&seq=workspace001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=person%20working%20at%20desk%20in%20share%20house%20workspace%2C%20concentrated%20atmosphere%2C%20natural%20lighting%2C%20comfortable%20environment&width=800&height=600&seq=workspace002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=organized%20workspace%20with%20desk%20and%20chair%2C%20clean%20minimal%20design%2C%20good%20lighting%2C%20productive%20atmosphere&width=800&height=600&seq=workspace003&orientation=landscape',
    ],
  },
  {
    name: '屋上テラス',
    description:
      '開放的な屋上スペース。BBQやパーティー、星空観察など、様々なイベントが楽しめます。',
    features: ['BBQグリル', 'テーブル・椅子', '洗い場', '夜景が見える'],
    images: [
      'https://readdy.ai/api/search-image?query=rooftop%20terrace%20of%20share%20house%2C%20open%20sky%20view%2C%20BBQ%20grill%2C%20outdoor%20furniture%2C%20city%20skyline%2C%20relaxing%20atmosphere%2C%20social%20gathering%20space%2C%20evening%20lighting&width=800&height=600&seq=rooftop001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=people%20having%20BBQ%20party%20on%20rooftop%20terrace%2C%20diverse%20group%20enjoying%20food%2C%20warm%20social%20atmosphere%2C%20outdoor%20gathering&width=800&height=600&seq=rooftop002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=rooftop%20terrace%20at%20sunset%2C%20beautiful%20sky%20view%2C%20comfortable%20seating%20area%2C%20peaceful%20atmosphere%2C%20city%20lights&width=800&height=600&seq=rooftop003&orientation=landscape',
    ],
  },
];

