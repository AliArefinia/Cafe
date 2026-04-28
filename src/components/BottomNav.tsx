import type { PageKey } from '../App';

const navItems: Array<{ key: PageKey; label: string; icon: string }> = [
  { key: 'menu', label: 'القائمة', icon: '☕' },
  { key: 'cart', label: 'السلة', icon: '🛒' }
];

interface BottomNavProps {
  active: PageKey;
  onNavigate: (target: PageKey) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.key}
          type="button"
          className={`nav-button ${active === item.key ? 'active' : ''}`}
          onClick={() => onNavigate(item.key)}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
