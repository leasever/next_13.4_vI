export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full md:py-20">{children}</div>
    </>
  );
}
