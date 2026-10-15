import { homeFaq } from "@/data/faq";
import { jsonLdFaq } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { Container, H2, Section } from "@/components/ui/Container";

export function HomeFaq() {
  return (
    <Section>
      <JsonLd data={jsonLdFaq(homeFaq)} />
      <Container>
        <H2>Часто задаваемые вопросы</H2>
        <FaqAccordion />
      </Container>
    </Section>
  );
}
