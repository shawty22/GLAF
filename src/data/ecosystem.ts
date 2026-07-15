import { institutionLinks } from "./institutionLinks";

// Curated public directory of organizations shaping the future of AI.
// Inclusion here does not imply partnership or endorsement — see the
// intro copy on the Ecosystem page itself.
//
// Logos are sourced the same way as institutionLinks.ts: verified against
// Wikipedia/Wikidata's public APIs, not guessed. Where no verifiable logo
// file exists, `logo` is omitted and the page falls back to a favicon.
//
// Organizations already present in institutionLinks.ts (because GLAF cites
// their research) are reused directly rather than re-defined, per the
// no-duplication instruction.

export interface EcosystemOrg {
  name: string;
  domain: string;
  logo?: string;
  description: string;
}

export interface EcosystemSection {
  title: string;
  orgs: EcosystemOrg[];
}

const commons = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=200`;

// Pull domain/logo from the existing institution record for orgs GLAF
// already cites, rather than duplicating that data here.
function reuse(key: string, name: string, description: string): EcosystemOrg {
  const link = institutionLinks[key];
  return { name, domain: link.domain, logo: link.logo, description };
}

export const ecosystemSections: EcosystemSection[] = [
  {
    title: "AI Research",
    orgs: [
      reuse(
        "Stanford HAI",
        "Stanford HAI",
        "Stanford's cross-disciplinary institute studying AI's societal impact, and publisher of the widely cited annual AI Index."
      ),
      {
        name: "MIT Media Lab",
        domain: "media.mit.edu",
        logo: commons("MIT Media Lab logo.svg"),
        description:
          "An MIT research lab exploring the boundaries of technology, media, science, and design, including AI-driven human-computer interaction.",
      },
      reuse(
        "Alan Turing Institute",
        "The Alan Turing Institute",
        "The United Kingdom's national institute for data science and artificial intelligence."
      ),
      {
        name: "Epoch AI",
        domain: "epochai.org",
        description:
          "An independent research institute investigating trends in AI development, compute, and long-term forecasting.",
      },
      {
        name: "METR",
        domain: "metr.org",
        description:
          "A nonprofit that develops evaluations to assess whether frontier AI models pose catastrophic risks.",
      },
      reuse(
        "Partnership on AI",
        "Partnership on AI",
        "A multi-stakeholder nonprofit uniting industry, academia, and civil society to develop best practices for responsible AI."
      ),
    ],
  },
  {
    title: "AI Safety & Ethics",
    orgs: [
      {
        name: "Center for Humane Technology",
        domain: "humanetech.com",
        description:
          "Advocates for technology design that protects human attention, wellbeing, and democracy, including AI's societal effects.",
      },
      {
        name: "AI Now Institute",
        domain: "ainowinstitute.org",
        description:
          "A research institute examining the social implications of AI, with a focus on power, accountability, and labor.",
      },
      {
        name: "Center for AI Safety",
        domain: "safe.ai",
        logo: commons("Center for AI Safety logo.png"),
        description:
          "A research and field-building nonprofit focused on reducing societal-scale risks from artificial intelligence.",
      },
      {
        name: "Future of Life Institute",
        domain: "futureoflife.org",
        description:
          "A nonprofit working to steer transformative technologies, including AI, toward benefiting life rather than causing harm.",
      },
    ],
  },
  {
    title: "Digital Rights & Privacy",
    orgs: [
      {
        name: "Electronic Frontier Foundation",
        domain: "eff.org",
        logo: commons("EFF Logo.svg"),
        description:
          "A leading nonprofit defending civil liberties in the digital world, including privacy and free expression in AI systems.",
      },
      {
        name: "Mozilla Foundation",
        domain: "foundation.mozilla.org",
        logo: commons("Mozilla Wordmark.svg"),
        description:
          "A nonprofit supporting an open and healthy internet, including research and advocacy on trustworthy AI.",
      },
      {
        name: "Wikimedia Foundation",
        domain: "wikimediafoundation.org",
        logo: commons("Wikimedia Foundation logo - vertical.svg"),
        description:
          "The nonprofit that operates Wikipedia and its sister projects, a major source of open knowledge used to train and evaluate AI systems.",
      },
      {
        name: "Creative Commons",
        domain: "creativecommons.org",
        logo: commons("CC-logo.svg"),
        description:
          "A nonprofit providing free legal tools for sharing knowledge and creativity, central to debates over AI training-data licensing.",
      },
      {
        name: "Internet Archive",
        domain: "archive.org",
        logo: commons("Internet Archive logo and wordmark.svg"),
        description:
          "A nonprofit digital library preserving billions of web pages, books, and media as a public record and research resource.",
      },
    ],
  },
  {
    title: "Open Source & Standards",
    orgs: [
      {
        name: "Linux Foundation",
        domain: "linuxfoundation.org",
        logo: commons("Linux Foundation logo 2013.svg"),
        description:
          "A nonprofit supporting open-source software infrastructure, including major AI and machine learning frameworks.",
      },
      {
        name: "Apache Software Foundation",
        domain: "apache.org",
        logo: commons("The ASF Logo (2025).svg"),
        description:
          "A nonprofit that stewards hundreds of open-source software projects, including widely used data and AI infrastructure tools.",
      },
      {
        name: "Open Source Initiative",
        domain: "opensource.org",
        logo: commons("Open Source Initiative.svg"),
        description:
          "Steward of the Open Source Definition, and an active participant in defining what qualifies as open-source AI.",
      },
      {
        name: "OpenSSF",
        domain: "openssf.org",
        logo: commons("OpenSSF logo.svg"),
        description:
          "A cross-industry initiative focused on improving the security of open-source software supply chains.",
      },
      reuse(
        "NIST",
        "NIST",
        "The U.S. federal agency behind the AI Risk Management Framework, a widely referenced standard for trustworthy AI."
      ),
      {
        name: "IEEE",
        domain: "ieee.org",
        logo: commons("IEEE logo.svg"),
        description:
          "A global professional association that develops technical standards, including ethical and technical standards for AI systems.",
      },
      reuse(
        "ISO",
        "ISO",
        "The international standards body behind ISO/IEC 42001, the global standard for AI management systems."
      ),
      reuse(
        "OECD",
        "OECD",
        "An intergovernmental organization whose AI Principles have shaped national AI policy frameworks worldwide."
      ),
    ],
  },
  {
    title: "AI Companies & Research Labs",
    orgs: [
      {
        name: "OpenAI",
        domain: "openai.com",
        logo: commons("OpenAI logo 2025.svg"),
        description: "An AI research and deployment company known for the GPT model series and ChatGPT.",
      },
      {
        name: "Anthropic",
        domain: "anthropic.com",
        logo: commons("Anthropic logo.svg"),
        description:
          "An AI safety company that developed the Claude model family, with a research focus on interpretability and alignment.",
      },
      {
        name: "Google DeepMind",
        domain: "deepmind.google",
        logo: commons("DeepMind logo.png"),
        description:
          "Google's AI research lab, known for foundational work in reinforcement learning, protein structure prediction, and large-scale models.",
      },
      reuse(
        "Meta AI Research",
        "Meta AI Research",
        "Meta's AI research division, known for open-weight model releases and foundational research in computer vision and language."
      ),
      {
        name: "Microsoft Research",
        domain: "microsoft.com/research",
        logo: commons("Segoe msr logo.png"),
        description:
          "Microsoft's research division, conducting foundational work across AI, computing systems, and human-computer interaction.",
      },
      {
        name: "NVIDIA Research",
        domain: "research.nvidia.com",
        logo: commons("NVIDIA logo.svg"),
        description:
          "NVIDIA's research division, driving advances in AI hardware, accelerated computing, and generative AI models.",
      },
    ],
  },
  {
    title: "Sustainability",
    orgs: [
      {
        name: "Climate Change AI",
        domain: "climatechange.ai",
        description:
          "A nonprofit initiative connecting researchers and practitioners applying machine learning to climate change mitigation and adaptation.",
      },
      {
        name: "Green Software Foundation",
        domain: "greensoftware.foundation",
        description:
          "A nonprofit foundation building tools, standards, and best practices for reducing the carbon footprint of software, including AI systems.",
      },
    ],
  },
];
