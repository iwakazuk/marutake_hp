import type { Room } from '@/types';
// Local assets for rooms and shared spaces
import living1 from '@/assets/image/share/share-living1.jpg';
import living2 from '@/assets/image/share/share-living2.jpg';
import living3 from '@/assets/image/share/share-living3.jpg';
import kitchen1 from '@/assets/image/share/share-kitchen1.jpg';
import kitchen2 from '@/assets/image/share/share-kitchen2.jpg';
import kitchen3 from '@/assets/image/share/share-kitchen3.jpg';
import bath1 from '@/assets/image/share/share-bath1.jpg';
import bath2 from '@/assets/image/share/share-bath2.jpg';
import bath3 from '@/assets/image/share/share-bath3.jpg';

import room101_1 from '@/assets/image/rooms/room101-1.jpg';
import room101_2 from '@/assets/image/rooms/room101-2.jpg';
import room101_3 from '@/assets/image/rooms/room101-3.jpg';
import room201_1 from '@/assets/image/rooms/room201-1.jpg';
import room201_2 from '@/assets/image/rooms/room201-2.jpg';
import room202_1 from '@/assets/image/rooms/room202-1.jpg';
import room203_1 from '@/assets/image/rooms/room203-1.jpg';
import room203_2 from '@/assets/image/rooms/room203-2.jpg';
import room203_3 from '@/assets/image/rooms/room203-3.jpg';
import room206_1 from '@/assets/image/rooms/room206-1.jpg';
import room207_1 from '@/assets/image/rooms/room207-1.jpg';
import room207_2 from '@/assets/image/rooms/room207-2.jpg';
import room208_1 from '@/assets/image/rooms/room208-1.jpg';
import room208_2 from '@/assets/image/rooms/room208-2.jpg';
import room208_3 from '@/assets/image/rooms/room208-3.jpg';
import room212_1 from '@/assets/image/rooms/room212-1.jpg';
import room212_2 from '@/assets/image/rooms/room212-2.jpg';

export const rooms: Room[] = [
  // 追加: ナンバリング個室 101, 102, 201-212
  {
    id: 'room-101',
    name: '101号室',
    price: 44000,
    size: 8,
    floor: 1,
    available: true,
    availableDate: '即入居可',
    features: ['1階', 'エアコン完備', '収納スペース', 'アクセス便利'],
    images: [room101_1, room101_2, room101_3],
    description: '1階のシンプルで使いやすい個室。初めての一人暮らしにも最適です。',
  },
  {
    id: 'room-102',
    name: '102号室',
    price: 46000,
    size: 8.5,
    floor: 1,
    available: false,
    features: ['1階', 'エアコン完備', '収納充実', '日当たり良好'],
    images: [
      'https://readdy.ai/api/search-image?query=ground%20floor%20bedroom%20in%20share%20house%2C%20convenient%20access%2C%20single%20bed%2C%20modern%20furniture%2C%20natural%20light%2C%20practical%20design%2C%20comfortable%20living%20space&width=800&height=600&seq=roomd001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=bedroom%20entrance%20and%20storage%20area%2C%20organized%20space%2C%20clean%20design%2C%20easy%20access&width=800&height=600&seq=roomd002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=cozy%20single%20room%20with%20efficient%20layout%2C%20comfortable%20bed%2C%20study%20area%2C%20warm%20atmosphere&width=800&height=600&seq=roomd003&orientation=landscape',
    ],
    description: '日当たりの良い1階のお部屋。収納が多く、生活動線もスムーズです。',
  },
  {
    id: 'room-201',
    name: '201号室',
    price: 47000,
    size: 9,
    floor: 2,
    available: true,
    features: ['南向き', '日当たり良好', 'エアコン完備', '収納スペース'],
    images: [room201_1, room201_2],
    description: '南向きで明るい2階の個室。自然光がたっぷり差し込みます。',
  },
  {
    id: 'room-202',
    name: '202号室',
    price: 52000,
    size: 10,
    floor: 2,
    available: false,
    features: ['広々スペース', 'ダブルベッド', 'エアコン完備', '大型収納'],
    images: [room202_1],
    description: 'ゆったり過ごせる広めの個室。ダブルベッドと大型収納で快適です。',
  },
  {
    id: 'room-203',
    name: '203号室',
    price: 48000,
    size: 9,
    floor: 2,
    available: true,
    features: ['静かな環境', 'デスク付き', 'エアコン完備', '収納スペース'],
    images: [room203_1, room203_2, room203_3],
    description: '勉強や在宅ワークに最適なデスク付きの個室。静かに過ごせます。',
  },
  {
    id: 'room-204',
    name: '204号室',
    price: 50000,
    size: 9.5,
    floor: 2,
    available: true,
    features: ['南向き', '日当たり良好', 'エアコン完備', '収納充実'],
    images: [
      'https://readdy.ai/api/search-image?query=modern%20minimalist%20private%20bedroom%20in%20share%20house%2C%20single%20bed%20with%20clean%20white%20bedding%2C%20wooden%20desk%20and%20chair%2C%20large%20window%20with%20natural%20light%2C%20simple%20clean%20design%2C%20warm%20atmosphere%2C%20cozy%20personal%20space&width=800&height=600&seq=rooma001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=bedroom%20window%20view%20with%20natural%20sunlight%2C%20bright%20airy%20room%2C%20clean%20minimalist%20design%2C%20comfortable%20personal%20space%20in%20share%20house&width=800&height=600&seq=rooma002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=organized%20closet%20and%20storage%20space%20in%20share%20house%20bedroom%2C%20clean%20minimal%20design%2C%20efficient%20use%20of%20space&width=800&height=600&seq=rooma003&orientation=landscape',
    ],
    description: '収納力が高く、日差しの入る快適な2階の個室です。',
  },
  {
    id: 'room-205',
    name: '205号室',
    price: 45000,
    size: 8,
    floor: 2,
    available: false,
    features: ['エアコン完備', '収納スペース', '静かな環境'],
    images: [
      'https://readdy.ai/api/search-image?query=quiet%20peaceful%20bedroom%20on%20top%20floor%20of%20share%20house%2C%20single%20bed%2C%20study%20desk%2C%20natural%20light%2C%20calm%20atmosphere%2C%20minimalist%20design%2C%20comfortable%20personal%20space&width=800&height=600&seq=roomc001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=study%20desk%20area%20in%20bedroom%20with%20natural%20light%2C%20organized%20workspace%2C%20comfortable%20chair%2C%20modern%20design&width=800&height=600&seq=roomc002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=top%20floor%20bedroom%20with%20skylight%20window%2C%20bright%20natural%20lighting%2C%20peaceful%20atmosphere%2C%20clean%20minimal%20design&width=800&height=600&seq=roomc003&orientation=landscape',
    ],
    description: '静かに落ち着いて過ごしたい方におすすめのシンプルなお部屋です。',
  },
  {
    id: 'room-206',
    name: '206号室',
    price: 54000,
    size: 10.5,
    floor: 2,
    available: true,
    features: ['広々スペース', 'ダブルベッド', '大型収納', 'エアコン完備'],
    images: [room206_1],
    description: '広めのフロアでゆったり過ごせるお部屋。荷物が多い方にも安心。',
  },
  {
    id: 'room-207',
    name: '207号室',
    price: 47000,
    size: 9,
    floor: 2,
    available: true,
    features: ['デスク付き', '静かな環境', 'エアコン完備', '収納スペース'],
    images: [room207_1, room207_2],
    description: '作業しやすいデスク付き。静かで集中できる環境が整っています。',
  },
  {
    id: 'room-208',
    name: '208号室',
    price: 50000,
    size: 9.5,
    floor: 2,
    available: false,
    features: ['南向き', '日当たり良好', '収納充実', 'エアコン完備'],
    images: [room208_1, room208_2, room208_3],
    description: '日差しが心地よい南向きのお部屋。収納が多く生活しやすい設計です。',
  },
  {
    id: 'room-209',
    name: '209号室',
    price: 46000,
    size: 8.5,
    floor: 2,
    available: true,
    features: ['エアコン完備', '収納スペース', '静かな環境'],
    images: [
      'https://readdy.ai/api/search-image?query=modern%20minimalist%20private%20bedroom%20in%20share%20house%2C%20single%20bed%20with%20clean%20white%20bedding%2C%20wooden%20desk%20and%20chair%2C%20large%20window%20with%20natural%20light%2C%20simple%20clean%20design%2C%20warm%20atmosphere%2C%20cozy%20personal%20space&width=800&height=600&seq=rooma001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=bedroom%20window%20view%20with%20natural%20sunlight%2C%20bright%20airy%20room%2C%20clean%20minimalist%20design%2C%20comfortable%20personal%20space%20in%20share%20house&width=800&height=600&seq=rooma002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=organized%20closet%20and%20storage%20space%20in%20share%20house%20bedroom%2C%20clean%20minimal%20design%2C%20efficient%20use%20of%20space&width=800&height=600&seq=rooma003&orientation=landscape',
    ],
    description: '落ち着いた雰囲気の個室。コンパクトながら収納も確保しています。',
  },
  {
    id: 'room-210',
    name: '210号室',
    price: 53000,
    size: 10,
    floor: 2,
    available: true,
    features: ['広々スペース', 'ダブルベッド', '大型収納', 'エアコン完備'],
    images: [
      'https://readdy.ai/api/search-image?query=spacious%20private%20bedroom%20in%20share%20house%20with%20double%20bed%2C%20modern%20furniture%2C%20large%20window%2C%20natural%20light%2C%20minimalist%20design%2C%20comfortable%20personal%20space%2C%20warm%20wooden%20accents%2C%20clean%20organized%20room&width=800&height=600&seq=roomb001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=double%20bed%20with%20comfortable%20bedding%20in%20modern%20share%20house%20room%2C%20cozy%20atmosphere%2C%20natural%20lighting&width=800&height=600&seq=roomb002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=spacious%20bedroom%20with%20work%20desk%20and%20storage%2C%20modern%20minimalist%20design%2C%20natural%20light%2C%20comfortable%20living%20space&width=800&height=600&seq=roomb003&orientation=landscape',
    ],
    description: 'ゆとりのあるスペースで快適に過ごせる個室です。',
  },
  {
    id: 'room-211',
    name: '211号室',
    price: 48000,
    size: 9,
    floor: 2,
    available: false,
    features: ['デスク付き', '静かな環境', '収納スペース', 'エアコン完備'],
    images: [
      'https://readdy.ai/api/search-image?query=quiet%20peaceful%20bedroom%20on%20top%20floor%20of%20share%20house%2C%20single%20bed%2C%20study%20desk%2C%20natural%20light%2C%20calm%20atmosphere%2C%20minimalist%20design%2C%20comfortable%20personal%20space&width=800&height=600&seq=roomc001&orientation=landscape',
      'https://readdy.ai/api/search-image?query=study%20desk%20area%20in%20bedroom%20with%20natural%20light%2C%20organized%20workspace%2C%20comfortable%20chair%2C%20modern%20design&width=800&height=600&seq=roomc002&orientation=landscape',
      'https://readdy.ai/api/search-image?query=top%20floor%20bedroom%20with%20skylight%20window%2C%20bright%20natural%20lighting%2C%20peaceful%20atmosphere%2C%20clean%20minimal%20design&width=800&height=600&seq=roomc003&orientation=landscape',
    ],
    description: '勉強や仕事に集中しやすい静かな環境のお部屋です。',
  },
  {
    id: 'room-212',
    name: '212号室',
    price: 50000,
    size: 9.5,
    floor: 2,
    available: true,
    features: ['南向き', '日当たり良好', '収納充実', 'エアコン完備'],
    images: [room212_1, room212_2],
    description: '日当たりの良い明るい個室。収納も多く住みやすいです。',
  },
];

export const sharedSpaces = [
  {
    name: 'リビングルーム',
    description:
      'みんなが集まる憩いの場所。大きなソファとプロジェクターがあり、映画鑑賞会やゲーム大会が開かれます。',
    features: ['大型ソファ', 'プロジェクター', 'テレビ', 'ボードゲーム', 'エアコン'],
    images: [living1, living2, living3],
  },
  {
    name: 'キッチン・ダイニング',
    description:
      '広々としたキッチンスペース。料理好きな住民が腕を振るい、各国の料理が楽しめます。',
    features: ['IHコンロ', '冷蔵庫（大型）', '電子レンジ', 'オーブン', '食器・調理器具完備', 'ダイニングテーブル'],
    images: [kitchen1, kitchen2, kitchen3],
  },
  {
    name: 'バスルーム・シャワー',
    description: '清潔で広々としたバスルーム。シャワーブースは2つあり、朝の混雑も安心です。',
    features: ['シャワーブース×2', '洗面台×2', 'トイレ×2', '洗濯機', '乾燥機'],
    images: [bath1, bath2, bath3],
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
