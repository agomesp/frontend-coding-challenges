export const Item = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-base text-amber-50/30">{label}</p>
    <p className="mt-2 font-light tracking-wide capitalize">{value}</p>
  </div>
);
