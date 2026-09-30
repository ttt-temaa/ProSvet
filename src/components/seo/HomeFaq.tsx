import { homeFaq } from "@/data/faq";
import { jsonLdFaq } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, H2, Section } from "@/components/ui/Container";

export function HomeFaq() {
  return (
    <Section>
      <JsonLd data={jsonLdFaq(homeFaq)} />
      <Container>
        <H2>Частые вопросы по освещению объектов</H2>
        <div className="mt-8 grid gap-3">
          {homeFaq.map((item) => (
            <details key={item.q} className="rounded-3xl border border-line bg-white p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.02em]">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
