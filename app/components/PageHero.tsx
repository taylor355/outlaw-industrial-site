type PageHeroProps = {
  label: string;
  title: string;
  children: React.ReactNode;
};

export function PageHero({ label, title, children }: PageHeroProps) {
  return (
    <section className="section-dark page-hero">
      <div className="container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
