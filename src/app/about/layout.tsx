export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <h5>About page layout</h5>
        <nav></nav>
   
        {children}
      </section>
    )
  }