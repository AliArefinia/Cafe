interface TableSelectionProps {
  tableNumber: string;
  onSelectTable: (table: string) => void;
  onSkip: () => void;
}

const tables = Array.from({ length: 12 }, (_, index) => `${index + 1}`);

export function TableSelection({ tableNumber, onSelectTable, onSkip }: TableSelectionProps) {
  return (
    <section className="screen-card">
      <div className="section-title">
        <div>
          <h2>اختر رقم الطاولة</h2>
          <p>ابدأ الطلب من الطاولة الخاصة بك</p>
        </div>
      </div>

      <div className="table-grid">
        {tables.map((table) => (
          <div
            key={table}
            className={`table-card ${tableNumber === table ? 'selected' : ''}`}
          >
            <button type="button" onClick={() => onSelectTable(table)}>
              طاولة {table}
            </button>
          </div>
        ))}
      </div>

      <div className="bottom-actions">
        <button type="button" className="btn-secondary" onClick={onSkip}>
          المتابعة بدون طاولة
        </button>
      </div>
    </section>
  );
}
