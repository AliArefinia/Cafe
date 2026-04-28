export interface MenuItem {
  id: string;
  category: string;
  name: string;
  enName: string;
  price: number;
  image: string;
}

export const categories = [
  'Hot Coffee',
  'Iced Coffee',
  'Signature Drinks',
  'Pastries',
  'Cold Brew'
];

export const menuItems: MenuItem[] = [
  {
    id: '001',
    category: 'Hot Coffee',
    name: 'إسبريسو دبل',
    enName: 'Double Espresso',
    price: 18,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '002',
    category: 'Hot Coffee',
    name: 'كابتشينو',
    enName: 'Cappuccino',
    price: 22,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '003',
    category: 'Iced Coffee',
    name: 'قهوة مثلجة',
    enName: 'Iced Coffee',
    price: 20,
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '004',
    category: 'Iced Coffee',
    name: 'موكا مثلجة',
    enName: 'Iced Mocha',
    price: 24,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '005',
    category: 'Signature Drinks',
    name: 'لاتيه الفانيليا',
    enName: 'Vanilla Latte',
    price: 25,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '006',
    category: 'Signature Drinks',
    name: 'تشيك تشاينا',
    enName: 'Chai Latte',
    price: 26,
    image: 'https://images.unsplash.com/photo-1510626176961-4b75f5e7d355?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '007',
    category: 'Pastries',
    name: 'كرواسون',
    enName: 'Croissant',
    price: 15,
    image: 'https://images.unsplash.com/photo-1516685018646-549d7e1ee5d8?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '008',
    category: 'Cold Brew',
    name: 'كولد برو كلاسيك',
    enName: 'Classic Cold Brew',
    price: 23,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80'
  }
];
