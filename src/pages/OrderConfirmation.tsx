interface OrderConfirmationProps {
  tableNumber: string;
  total: number;
  onRestart: () => void;
}

export function OrderConfirmation({ tableNumber, total, onRestart }: OrderConfirmationProps) {
  return (
    <section className="screen-card">
      <div className="section-title">
        <div>
          <h2>تم استلام الطلب</h2>
          <p>سيتم إرساله إلى المطبخ الآن.</p>
        </div>
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span>رقم الطاولة</span>
          <strong>{tableNumber || 'غير محدد'}</strong>
        </div>
        <div className="summary-row">
          <span>المجموع المطلوب</span>
          <strong>{total} ر.س</strong>
        </div>
      </div>

      <div className="bottom-actions">
        <button type="button" className="btn-primary" onClick={onRestart}>
          طلب جديد
        </button>
      </div>
    </section>
  );
}
