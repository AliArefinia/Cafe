import type { MenuItem } from '../data/menu';
import { categories } from '../data/menu';

interface MenuPageProps {
  items: MenuItem[];
  category: string;
  onChangeCategory: (category: string) => void;
  onAddToCart: (id: string) => void;
  tableNumber: string;
  onOpenCart: () => void;
}

export function MenuPage({
  items,
  category,
  onChangeCategory,
  onAddToCart,
  tableNumber,
  onOpenCart
}: MenuPageProps) {
  return (
    <section className="screen-card">
      <div className="section-title">
        <div>
          <h2>القائمة الرئيسية</h2>
          <p>{tableNumber ? `طاولة ${tableNumber}` : 'حدد رقم الطاولة أولاً'}</p>
        </div>
        <button type="button" className="btn-secondary" onClick={onOpenCart}>
          فتح السلة
        </button>
      </div>

      <div className="menu-shell">
        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`category-item ${category === item ? 'active' : ''}`}
              onClick={() => onChangeCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {items.map((product) => (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.enName} />
              <div className="product-body">
                <p className="product-name">{product.name}</p>
                <p className="product-english">{product.enName}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price} ر.س</span>
                  <button type="button" className="btn-primary" onClick={() => onAddToCart(product.id)}>
                    أضف
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
