import { useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { TableSelection } from './pages/TableSelection';
import { MenuPage } from './pages/MenuPage';
import { CartOrder } from './pages/CartOrder';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { menuItems } from './data/menu';

export type PageKey = 'table' | 'menu' | 'cart' | 'confirmation';

function App() {
  const [page, setPage] = useState<PageKey>('table');
  const [tableNumber, setTableNumber] = useState<string>('');
  const [category, setCategory] = useState('Hot Coffee');
  const [cart, setCart] = useState<Record<string, number>>({});

  const selectedItems = useMemo(
    () => menuItems.filter((item) => item.category === category),
    [category]
  );

  const cartItems = useMemo(
    () => menuItems.filter((item) => cart[item.id] > 0),
    [cart]
  );

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.price * (cart[item.id] || 0)), 0),
    [cartItems, cart]
  );

  const handleAddToCart = (id: string) => {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((current) => {
      const amount = (current[id] || 0) - 1;
      if (amount <= 0) {
        const next = { ...current };
        delete next[id];
        return next;
      }
      return { ...current, [id]: amount };
    });
  };

  const handlePlaceOrder = () => {
    if (!tableNumber) {
      setPage('table');
      return;
    }
    setPage('confirmation');
  };

  return (
    <div className="app-shell" dir="rtl">
      <header className="app-header">
        <div>
          <p className="app-brand">جلاس</p>
          <p className="app-subtitle">@GLASSCAFE</p>
        </div>
        <span className="app-chip">QR Ordering</span>
      </header>

      <main className="app-content">
        {page === 'table' && (
          <TableSelection
            tableNumber={tableNumber}
            onSelectTable={(value) => {
              setTableNumber(value);
              setPage('menu');
            }}
            onSkip={() => setPage('menu')}
          />
        )}

        {page === 'menu' && (
          <MenuPage
            items={selectedItems}
            category={category}
            onChangeCategory={setCategory}
            onAddToCart={handleAddToCart}
            tableNumber={tableNumber}
            onOpenCart={() => setPage('cart')}
          />
        )}

        {page === 'cart' && (
          <CartOrder
            cart={cart}
            items={menuItems}
            tableNumber={tableNumber}
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
            onPlaceOrder={handlePlaceOrder}
            onBack={() => setPage('menu')}
            total={total}
          />
        )}

        {page === 'confirmation' && (
          <OrderConfirmation
            tableNumber={tableNumber}
            total={total}
            onRestart={() => {
              setCart({});
              setPage('table');
              setTableNumber('');
            }}
          />
        )}
      </main>

      <BottomNav
        active={page}
        onNavigate={(target) => {
          if (target === 'menu') {
            setPage('menu');
          }
          if (target === 'cart') {
            setPage('cart');
          }
        }}
      />
    </div>
  );
}

export default App;
