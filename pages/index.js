import React from "react";
import Link from "../src/components/Link";



function Title({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title as="h2">Alura Case - Home</Title>
      <Link href="/faq">Ir para a página do faq </Link>
    </div>
  );
}
