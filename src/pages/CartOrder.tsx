import type { MenuItem } from '../data/menu';

interface CartOrderProps {
  cart: Record<string, number>;
  items: MenuItem[];
  tableNumber: string;
  total: number;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onPlaceOrder: () => void;
  onBack: () => void;
}

export function CartOrder({ cart, items, tableNumber, total, onAdd, onRemove, onPlaceOrder, onBack }: CartOrderProps) {
  const cartItems = items.filter((item) => cart[item.id] > 0);

  return (
    <section className="screen-card">
      <div className="section-title">
        <div>
          <h2>السلة و الطلب</h2>
          <p>{tableNumber ? `طاولة ${tableNumber}` : 'لم يتم تحديد طاولة'}</p>
        </div>
      </div>

      <div className="cart-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-header">
                <div>
                  <p className="product-name">{item.name}</p>
                  <p className="product-english">{item.enName}</p>
                </div>
                <span>{item.price} ر.س</span>
              </div>
              <div className="cart-actions">
                <span className="action-pill">{cart[item.id]}</span>
                <button type="button" className="btn-secondary" onClick={() => onRemove(item.id)}>
                  -
                </button>
                <button type="button" className="btn-secondary" onClick={() => onAdd(item.id)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>السلة فارغة. أضف عناصر من القائمة للمتابعة.</p>
        )}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span>المجموع</span>
          <strong>{total} ر.س</strong>
        </div>
        <div className="summary-row">
          <span>رقم الطاولة</span>
          <strong>{tableNumber || 'غير محدد'}</strong>
        </div>
      </div>

      <div className="bottom-actions">
        <button type="button" className="btn-secondary" onClick={onBack}>
          العودة إلى القائمة
        </button>
        <button type="button" className="btn-primary" onClick={onPlaceOrder}>
          تأكيد الطلب
        </button>
      </div>
    </section>
  );
}
