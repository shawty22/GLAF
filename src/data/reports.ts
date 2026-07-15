import type { Report } from "./types";

export const reports: Report[] = [
  {
    slug: "state-of-ai-infrastructure",
    title: "State of AI Infrastructure",
    description: "Our flagship annual assessment of global AI infrastructure.",
    longDescription:
      "A comprehensive global index evaluating the nexus of data center build-out, semiconductor concentration, and national grid stability. GLAF's annual flagship centerpiece report.",
    status: "Coming Soon",
    relatedCategorySlugs: ["ai-infrastructure", "ai-esg"],
  },
  {
    slug: "sovereign-ai-spectrum",
    title: "The Sovereign AI Spectrum",
    description:
      "How nations are balancing technological independence with global collaboration.",
    longDescription:
      "A practical playbook for middle-power nations to balance technological autonomy with managed foreign dependencies using \"Digital Embassies.\"",
    status: "Published",
    publishedDate: "July 15, 2026",
    relatedCategorySlugs: ["ai-infrastructure"],
    body: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Public debate over \"AI sovereignty\" typically treats it as a binary: a nation either controls its own artificial intelligence capability or it does not. The evidence does not support that framing. National AI capability is better understood as a position on a spectrum, ranging from National Autarky — full self-sufficiency across every layer of the AI stack — to Collaborative Multipolarity, in which sovereignty is achieved through open standards and strategic alliances rather than total self-reliance.",
          "Full autarky is not a realistic policy goal for almost any nation. Semiconductor fabrication is hyper-concentrated: a single foundry in Taiwan (TSMC) fabricates nearly every leading AI chip in use today. No plausible national policy changes that in the near term. Instead, states are pursuing what this report calls managed interdependence — securing meaningful control over the layers of the stack that matter most to them, while accepting calculated dependency elsewhere.",
        ],
      },
      {
        heading: "The Spectrum, Not the Binary",
        paragraphs: [
          "GLAF's research identifies national AI strategies as occupying positions along a spectrum rather than one of two fixed states. At one pole, National Autarky, a state would control chip design and fabrication, compute infrastructure, model training, and data governance entirely within its own borders. At the other pole, Collaborative Multipolarity, sovereignty is pursued through participation in open standards and alliances rather than ownership of the full stack.",
          "In practice, no major economy sits at either extreme. Even the United States — which holds an estimated 75% of global AI supercomputer performance and hosts more than 5,000 data centers, over ten times any other single nation — pursues compute leadership \"through global partnerships\" rather than isolation, according to strategy research reviewed for this report. If the country with the largest capability advantage still relies on alliances, autarky is not a realistic aspiration for smaller or mid-sized economies.",
        ],
      },
      {
        heading: "Why Autarky Is Structurally Unachievable",
        paragraphs: [
          "The concentration data is stark. NVIDIA holds roughly 92% of data center GPU revenue. The three largest cloud providers — AWS, Azure, and Google Cloud — control a combined 63–74% of the global cloud market. Underneath all of it sits a single chokepoint: advanced chip fabrication capacity concentrated in Taiwan. A nation can write whatever AI policy it wants; it cannot legislate its way around a global supply chain this concentrated.",
          "Emerging frameworks compound the problem. Hardware-level tracking and export controls — the kind introduced by measures such as the Chip Security Act — are increasingly built into the silicon layer itself, meaning sovereignty questions now extend below the software and model layer into the physical hardware nations depend on. This is a structural constraint, not a temporary market condition, and it is the central reason GLAF's research treats full sovereignty as effectively unattainable for all but one or two states.",
        ],
      },
      {
        heading: "Managed Interdependence in Practice",
        paragraphs: [
          "If autarky is off the table, the practical question becomes how states secure meaningful agency without it. The evidence points to a few recurring patterns. One is the \"Digital Embassy\" model — arrangements, introduced in recent infrastructure-sovereignty research, that give a nation operational and legal control over specific infrastructure without requiring it to own the full stack that infrastructure depends on.",
          "A second is bloc-level alternative infrastructure. Research reviewed for this report documents an active proposal for a European-led \"third AI stack\" — a deliberate attempt to build technology infrastructure aligned with democratic governance norms as an alternative to the two dominant national ecosystems. Whether or not this specific proposal succeeds, it illustrates the pattern: middle powers pooling resources at bloc scale rather than attempting national self-sufficiency alone.",
          "A third is bilateral and multilateral compute strategy. Canada's national sovereign AI compute strategy, for example, functions as a policy template for infrastructure independence that does not require domestic chip fabrication — it focuses on the layers of the stack where national control is actually achievable.",
        ],
      },
      {
        heading: "Sovereignty Is Layered, Not Monolithic",
        paragraphs: [
          "Perhaps the most practically useful finding in the underlying research is that sovereignty should be assessed layer by layer rather than as a single national score. One framework reviewed for this report maps AI dependency across ten distinct layers of the stack — from chip fabrication up through compute, models, and data. A state can hold genuine sovereignty at some layers (for instance, over the models it trains and the data those models are trained on) while remaining structurally dependent at others (the chips those models run on, or the cloud infrastructure that hosts them).",
          "This reframes the policy question. \"Is this country AI-sovereign?\" is not answerable and not especially useful. \"Which layers does this country control, and which dependencies are acceptable versus strategically dangerous?\" is answerable, and is the question this report's underlying research is built to support. A related framework proposes as many as 103 discrete capabilities for assessing how much genuine agency — not just infrastructure ownership — a nation actually holds.",
        ],
      },
      {
        heading: "The Open Tension: Sovereign Clouds or Sovereign Washing?",
        paragraphs: [
          "One question the evidence base does not resolve, and which GLAF is not taking a position on, is whether \"sovereign cloud\" offerings represent genuine autonomy or a marketing label placed on unchanged dependency. When a foreign hyperscaler opens a data center inside a nation's borders and brands it \"sovereign,\" the nation gains data residency and some legal jurisdiction — but the underlying hardware, software stack, and often the parent company's ultimate control remain foreign. Whether that constitutes meaningful sovereignty or what critics call \"sovereign washing\" is a live and unsettled debate in the source material, and it is precisely the kind of question a layered, spectrum-based framework is built to help policymakers interrogate rather than answer by assumption.",
        ],
      },
      {
        heading: "Implications for Policymakers",
        paragraphs: [
          "For middle-power and smaller nations, the practical takeaway is to stop budgeting for autarky and start budgeting for leverage: identify which layers of the AI stack are strategically non-negotiable for your country (frequently data governance and model control), and pursue alliances, standards participation, or bloc-level infrastructure for the rest. Measuring progress against a national \"AI independence\" scorecard is less useful than tracking layer-by-layer dependency and its associated risk.",
          "For larger economies, including those with genuine hardware advantages, the evidence suggests that compute leadership itself is increasingly pursued through global partnership rather than unilateral control — meaning even leading nations face a version of the same layered-dependency calculus, just from a stronger negotiating position.",
        ],
      },
      {
        heading: "Research Gaps",
        paragraphs: [
          "Two limitations are worth stating plainly. First, there is no granular public data on what share of any given nation's data center workloads are actually AI-attributable versus general cloud computing, which makes precise sovereignty accounting difficult in practice. Second, the \"local-first\" software paradigm — architectures designed from the outset to minimize cross-border dependency — remains significantly underdeveloped relative to the cloud-first default most infrastructure is still built on. Both are areas GLAF intends to track as the evidence base develops.",
        ],
      },
    ],
  },
  {
    slug: "twin-transformation-index",
    title: "Twin Transformation Index",
    description: "Measuring AI through sustainability, infrastructure and resilience.",
    longDescription:
      "An annual ranking of foundation models and data centers based on integrated Carbon Intensity (CCI) and Water-Use Effectiveness (WUE).",
    status: "Coming Soon",
    relatedCategorySlugs: ["environmental-impact", "ai-esg"],
  },
  {
    slug: "privacy-beyond-boundaries",
    title: "Privacy Beyond Boundaries",
    description: "Understanding privacy in the era of OS-integrated AI.",
    longDescription:
      "A policy framework for auditable assurance of OS-integrated AI agents, operationalizing standards for preventing \"context collapse.\"",
    status: "Coming Soon",
    relatedCategorySlugs: ["privacy-society"],
  },
  {
    slug: "world-models-whitepaper",
    title: "World Models Whitepaper",
    description: "Exploring the next generation of intelligent systems.",
    longDescription:
      "A technical and policy synthesis evaluating the shift from LLMs to physical reality simulations in industrial robotics and embodied agents.",
    status: "Coming Soon",
    relatedCategorySlugs: ["ai-safety-future-intelligence"],
  },
  {
    slug: "rural-prosperity-data-centres",
    title: "Rural Prosperity & Data Centres",
    description: "Understanding the opportunities and challenges for communities.",
    longDescription:
      "A community negotiation framework mapping how local leaders can trade infrastructure access for shared wealth models and academic partnerships.",
    status: "Coming Soon",
    relatedCategorySlugs: ["privacy-society", "environmental-impact"],
  },
];

export function getReport(slug: string): Report | undefined {
  return reports.find((r) => r.slug === slug);
}
