export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section style={{ border: "1px solid green", margin: "2rem" }}>{children}</section>
  }