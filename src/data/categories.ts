import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "ai-infrastructure",
    number: 1,
    title: "AI Infrastructure",
    shortTitle: "AI Infrastructure",
    shortDescription: "Cloud, Edge, Local, Sovereign and Hybrid AI architectures.",
    evidenceStrength: "Moderate to High",
    executiveSummary:
      "Current evidence suggests that AI infrastructure is evolving into a spatial continuum that balances centralized cloud power with localized edge autonomy. While cloud architectures provide the unmatched scale necessary for training frontier models, they are structurally limited by network latency, high bandwidth demands, and a complete dependency on wide-area connectivity. Conversely, Edge AI processes data at the source, offering latency as low as 10ms and enhanced privacy, though it remains constrained by hardware-level memory and power limits. Evidence indicates a dominant shift toward \"Hybrid AI\" and \"Edge-Cloud Collaboration,\" where real-time perception occurs at the edge while complex analytics are offloaded to the cloud. Simultaneously, \"Sovereign AI\" has emerged as a strategic priority for nations seeking to reduce foreign technological dependencies. Because global supply chains for GPUs and high-precision lithography are hyper-concentrated—with a single foundry in Taiwan (TSMC) fabricating nearly every leading AI chip—absolute national autarky is structurally unachievable for most. Instead, states are adopting models of \"managed interdependence\" through strategic alliances and the establishment of \"Digital Embassies\".",
    implications:
      "Infrastructure choices determine the boundary between technological autonomy and systemic dependency. A hybrid approach optimizes resource utilization while mitigating the risks of centralized cloud failures and vendor lock-in, which currently affects over 60% of the global market.",
    keyStatistics: [
      { value: "92%", label: "NVIDIA's share of data center GPU revenue as of 2023." },
      { value: "63–74%", label: "Combined market share of the \"Big Three\" cloud providers (AWS, Azure, Google Cloud)." },
      { value: "10–30ms", label: "Typical latency range for Edge AI compared to 150ms+ for Cloud AI." },
      { value: "75%", label: "The United States' share of global AI supercomputer performance." },
      { value: "5,427", label: "Number of data centers hosted in the U.S., more than 10x any other single nation." },
    ],
    majorFindings: [
      { title: "The Sovereign AI Spectrum", text: "National strategies range from \"National Autarky\" to \"Collaborative Multipolarity\" through open standards." },
      { title: "Hardware Choke Points", text: "Emerging global frameworks like the Chip Security Act introduce tracking controls directly into the silicon layer, complicating sovereign autonomy claims." },
      { title: "Edge Autonomy", text: "Future edge devices are anticipated to function with limited human oversight, using local data to adapt to novel physical circumstances." },
    ],
    consensus: [
      "Hybrid architectures are the optimal solution for applications requiring both real-time decision-making and exascale processing.",
      "Absolute digital sovereignty is currently unattainable due to extreme concentration in the semiconductor manufacturing sector.",
    ],
    competingViewpoints: [
      { title: "Sovereign Clouds vs. \"Sovereign Washing\"", text: "Debate exists over whether nominally sovereign facilities operated by foreign hyperscalers provide genuine autonomy or merely an illusion of control." },
    ],
    researchGaps: [
      "The \"local-first\" software paradigm remains underdeveloped compared to the dominant cloud-first model.",
      "There is a lack of granular data on what percentage of data center workloads are directly attributable to AI vs. traditional cloud services.",
    ],
    topics: [
      "Cloud", "Edge", "Local AI", "Hybrid AI", "Sovereign AI", "Distributed AI",
      "Inference", "Hardware", "Networking", "Semiconductors", "Digital Sovereignty",
    ],
  },
  {
    slug: "environmental-impact",
    number: 2,
    title: "Environmental Impact",
    shortTitle: "Environmental Impact",
    shortDescription: "Energy, water, carbon, materials and data centre sustainability.",
    evidenceStrength: "High",
    executiveSummary:
      "Current evidence characterizes AI infrastructure as one of the largest physical build-outs in history, creating a high-stakes \"energy-water-minerals-land nexus\". Data centers in the U.S. consumed approximately 4.4% of national electricity in 2023, with demand projected to rise to 12% by 2028 due to AI scaling. Globally, data centers were responsible for 0.5% of energy-related emissions in 2025, a figure projected to reach 1% by 2030. Beyond carbon, evidence indicates that AI has a substantial \"hidden\" water footprint; a single session of 20 queries can indirectly consume 0.5 liters of water through cooling systems. In California, data center water consumption reached nearly 50 billion liters in 2023, nearly double 2019 levels. Lifecycle assessments (LCA) reveal that while operational emissions dominate (~87% of footprints), embodied carbon from semiconductor manufacturing is a critical \"one-time\" impact that remains sparsely quantified by most vendors. Mitigation efforts are shifting toward 24/7 carbon-free electricity matching, advanced liquid cooling, and circular economy practices for retired hardware.",
    implications:
      "AI's material footprint is a governance and justice challenge, as its benefits flow across borders while environmental burdens (water depletion, noise, grid strain) are concentrated in specific host communities. Standardized, mandatory metrics are required to prevent AI infrastructure from derailing national net-zero goals.",
    keyStatistics: [
      { value: "0.5 Liters", label: "Indirect water consumption for 20 interactive AI queries." },
      { value: "12%", label: "Projected portion of U.S. electricity consumption by data centers by 2028." },
      { value: "700,000 Liters", label: "Water evaporated directly to train GPT-3 in Microsoft's U.S. facilities." },
      { value: "662%", label: "The amount by which actual Big Tech carbon footprints may exceed reported figures due to uncounted credits." },
      { value: "20%", label: "The portion of national power in Ireland currently consumed by the Dublin data center cluster." },
    ],
    majorFindings: [
      { title: "The Jevons Paradox", text: "Evidence suggests that as AI becomes more efficient, it is used more often, causing total energy consumption to soar rather than decline." },
      { title: "Scope 3 Dominance", text: "Manufacturing stages dominate human toxicity and mineral depletion metrics, even when carbon impacts appear lower." },
      { title: "Water-Carbon Trade-offs", text: "Carbon-efficient daytime scheduling (using solar) often conflicts with water-efficient nighttime cooling." },
    ],
    consensus: [
      "Legacy metrics like PUE are insufficient because they fail to track water use, e-waste, or computational efficiency.",
      "AI's rapid growth is outpacing clean energy interconnection timelines, which can now exceed seven years.",
    ],
    competingViewpoints: [
      { title: "Offset vs. Absolute Increase", text: "Tech advocates argue AI breakthroughs in climate science will offset its costs, while independent researchers warn the build-out is actively derailing decarbonization." },
    ],
    researchGaps: [],
    topics: [
      "Energy", "Water", "Carbon", "Lifecycle Assessment", "Data Centres",
      "Power Grids", "Cooling", "Rare Earth Minerals", "Circular Economy",
    ],
  },
  {
    slug: "ai-esg",
    number: 3,
    title: "AI & ESG",
    shortTitle: "AI & ESG",
    shortDescription:
      "Understanding AI through the environmental, social and governance lens.",
    evidenceStrength: "High",
    executiveSummary:
      "Current evidence indicates that the integration of Artificial Intelligence (AI) into Environmental, Social, and Governance (ESG) frameworks has matured from a focus on predictive performance (\"Red AI\") to a \"Sustainable AI\" paradigm. This transition is anchored in four technical and operational pillars: model-level algorithmic efficiency, hardware optimization, lifecycle data-centricity, and operational policy. Research identifies a \"Twin Transformation\" paradox, where AI acts as both an essential tool for cross-sector decarbonization and a primary driver of global energy and resource demand. Organizations are increasingly adopting \"Integrated Management Frameworks\" to align technical AI optimization with corporate ESG reporting requirements, particularly as mandates like the EU AI Act transition from ethical guidance to binding law. There is a robust consensus that AI sustainability must be evaluated through a \"Triple Bottom Line\" that links computational metrics directly to environmental Key Performance Indicators (KPIs). However, evidence suggests a significant \"Transparency Gap\" remains, as model developers frequently omit granular data regarding training footprints and hardware telemetry, which are essential for third-party validation of ESG claims.",
    implications:
      "Standardizing the nexus between infrastructure and ESG allows organizations to move beyond speculative claims regarding AI's climate benefits. It provides a data-driven roadmap for balancing rapid technological adoption with measurable sustainability commitments and global regulatory compliance.",
    keyStatistics: [
      { value: "$2.52 Trillion", label: "Projected global AI spending by late 2026." },
      { value: "47.4 GW", label: "Global data center electricity consumption attributable to AI workloads by late 2025." },
      { value: "24-fold", label: "Expected increase in global electricity used for AI activities by 2030." },
      { value: "88%", label: "Adoption rate of AI among surveyed global organizations as of 2026." },
      { value: "4,600x", label: "The power disparity between some modern foundation models and traditional machine learning techniques." },
    ],
    majorFindings: [
      { title: "Compliance-Innovation Nexus", text: "Regulatory frameworks, such as the EU AI Act, are successfully driving the development of energy-efficient generative structures rather than stifling growth." },
      { title: "Integrated Management", text: "Leading organizations are coordinating technical AI optimization (e.g., pruning, quantization) with high-level ESG strategies." },
      { title: "Strategic National Assets", text: "High-growth economies (e.g., UAE, Saudi Arabia) are utilizing AI governance as a pillar for economic diversification and national strategy." },
    ],
    consensus: [
      "AI development must align with the 17 UN Sustainable Development Goals (SDGs) to be classified as truly sustainable.",
      "Technical standards like ISO/IEC 42001 are the emerging \"universal language\" for ESG operationalization.",
    ],
    competingViewpoints: [
      { title: "AI as Accelerator vs. Resource Drain", text: "Some researchers argue AI's efficiency gains in industrial sectors will offset its infrastructure costs, while others warn that emissions from the build-out may outstrip environmental gains." },
    ],
    researchGaps: [
      "Lack of standardized evaluations for the combined social and environmental responsibility of foundation models.",
      "Inconsistent metrics across geographic regions hinder cross-domain validation of corporate ESG disclosures.",
    ],
  },
  {
    slug: "governance-policy",
    number: 4,
    title: "Governance & Policy",
    shortTitle: "Governance & Policy",
    shortDescription: "Risk management, standards, regulation and responsible AI.",
    evidenceStrength: "High",
    executiveSummary:
      "Current evidence identifies a fundamental shift in AI governance from abstract ethical principles to concrete \"hard-law\" implementation and geopolitical alliances. The global landscape has evolved into a \"Three-Tiered Reality,\" where compliance rigor is determined by the tool's function rather than its industry sector. High-stakes sectors (e.g., healthcare, finance) are increasingly governed by binding statutes like the EU AI Act, while industrial sectors rely on international standards (ISO/IEC 42001), and emerging sectors utilize strategic \"soft law\". Evidence reveals a \"Compliance Divide\": while the Global North focuses on market safety, the Global South and BRICS prioritize digital sovereignty and infrastructure independence. Despite these legal differences, there is \"near-universal\" convergence on technical standards like the NIST AI Risk Management Framework (RMF), which serves as a global \"trade passport\" for AI exports. However, governance remains challenged by a \"compliance theater\" problem where documented controls often fail to reflect production-level operational reality.",
    implications:
      "Effective governance reverse-engineers regulation from national KPIs, balancing safety with economic growth. Interoperable standards allow nations to secure immediate market access for local AI firms without waiting for complex international treaties.",
    keyStatistics: [
      { value: "25", label: "Number of AI-related regulations enacted in the U.S. in 2023, up from one in 2016." },
      { value: "400+", label: "Mitigating actions outlined in the NIST Generative AI Profile (NIST AI 600-1)." },
      { value: "86%", label: "Organizations agreeing that generative AI threats warrant global governance." },
      { value: "€35 Million", label: "Potential maximum fine under the EU AI Act for non-compliance." },
      { value: "10 Years", label: "Required duration for retaining model documentation after deployment under EU law." },
    ],
    majorFindings: [
      { title: "The Horizontal Shift", text: "Regulations like the EU AI Act are \"horizontal\"—they regulate the AI function (e.g., biometrics) across all sectors." },
      { title: "Standardization as Geopolitics", text: "Technical standards (ISO/NIST) are becoming the \"de facto global currency\" for AI governance." },
      { title: "Enforcement Intensity", text: "Compliance rigor now scales directly with the potential for harm, a principle accepted across both statutory and voluntary regimes." },
    ],
    consensus: [
      "Governance intensity must scale directly with the potential for harm.",
      "Robust, standardized evaluations for foundation model responsibility are currently lacking.",
    ],
    competingViewpoints: [
      { title: "Static vs. Agile Regulation", text: "High-stakes sectors often treat AI as a fixed product, while \"Best Practice\" models increasingly view AI as an evolving, continuous service." },
    ],
    researchGaps: [],
    topics: [
      "AI Risk", "Standards", "NIST", "ISO 42001", "EU AI Act",
      "Responsible AI", "Auditing", "Compliance", "National Strategy", "Policy",
    ],
  },
  {
    slug: "privacy-society",
    number: 5,
    title: "Privacy & Society",
    shortTitle: "Privacy & Society",
    shortDescription: "Privacy, communities, workforce, digital inclusion and human impacts.",
    evidenceStrength: "Moderate to High",
    executiveSummary:
      "Current evidence indicates that privacy is the human right most significantly impacted by AI, with current effects leaning negative. The rise of OS-integrated AI agents has fundamentally altered the privacy landscape, as these systems access a \"platform-level mediation layer\" that combines signals from a user's entire device environment. Empirical research reveals a \"privacy disconnect\": while 82% of users rate chat logs as more sensitive than social media, nearly half discuss health and finance with chatbots. Furthermore, evidence suggests the rise of \"preemptive technologies\" in governance—used to predict criminal propensity or hiring potential—risks eroding individual autonomy and replicating historical injustices. The impact on the global workforce is entering its most dynamic decade; while 170 million new roles could be created by 2030, 92 million roles face elimination, making reskilling a foundation for state capacity. In local settings, data center build-outs are creating \"rural land friction,\" where residents weigh promised tax revenue against resource competition and rising electricity costs.",
    implications:
      "AI systems can be \"accurate and unfair at the same time,\" embedding historical biases into modern automated services. Ensuring social license for AI depends on making the benefits of infrastructure build-out attainable for local residents rather than just global entities.",
    keyStatistics: [
      { value: "82%", label: "ChatGPT users who rate chat logs as \"highly sensitive\" personal data." },
      { value: "78 Million", label: "Projected net gain in global jobs by 2030 despite AI-driven automation." },
      { value: "250%", label: "Increase in potable water consumption reported by local utilities in data center clusters." },
      { value: "37%", label: "Global public who believe AI will improve their specific job." },
      { value: "123", label: "AI-related incidents reported in 2023, a twentyfold increase over the prior decade." },
    ],
    majorFindings: [
      { title: "Algorithmic Affirmative Action", text: "Evidence indicates that unless AI is designed to counter historical disadvantage, it will replicate deep-seated inequality." },
      { title: "The Skill-Gap Bridge", text: "Studies demonstrate that AI enabled low-skilled workers to bridge the performance gap with high-skilled counterparts more effectively than traditional tools." },
      { title: "Public Opinion Divide", text: "While 66% of people anticipate AI will profoundly change their lives, 52% express nervousness, a 13-point increase in one year." },
    ],
    consensus: [
      "\"Local is not a sufficient privacy boundary\"; on-device execution does not eliminate the risks of context collapse and unauthorized data access.",
      "Public sentiment in Western nations regarding AI benefits is significantly lower than in high-growth emerging economies.",
    ],
    competingViewpoints: [
      { title: "Market Growth vs. Social Stability", text: "Some argue innovation speed is the primary national priority, while cross-national survey data shows citizens prioritize safety and oversight." },
    ],
    researchGaps: [],
    topics: [
      "Privacy", "Communities", "Digital Inclusion", "Employment", "Education",
      "Accessibility", "Human Rights", "Workforce", "Local Communities",
    ],
  },
  {
    slug: "ai-safety-future-intelligence",
    number: 6,
    title: "AI Safety & Future Intelligence",
    shortTitle: "AI Safety & Future Intelligence",
    shortDescription:
      "AI alignment, safety, long-term governance and the technical frontier of embodied and autonomous intelligence.",
    evidenceStrength: "Emerging to Moderate",
    executiveSummary:
      "Current evidence suggests the \"next frontier\" of AI involves a transition from text-centric Large Language Models (LLMs) toward \"World Models\" that internalize physical reality. While LLMs excel at pattern matching in text, an emerging view is that they often lack a grounded understanding of physical dynamics and causal relationships. World Models seek to address these limitations by learning compact internal simulations of environments, allowing agents to predict the consequences of actions (\"simulate, plan, act\") rather than just the next token. This paradigm is foundational for \"Embodied AI\"—agents instantiated in physical forms (e.g., robots, wearables) that learn through sensory interaction. Breakthroughs like Joint-Embedding Predictive Architectures (JEPA) enable models to learn in abstract latent spaces, which many researchers argue will improve sample efficiency and stability. However, long-horizon planning remains \"fragile,\" as current evidence indicates modern models are prone to consistent physical reasoning failures. The future state of intelligence is hypothesized to be a \"Composite Architecture\" merging language fluency with perception, persistent agentic memory, and neuro-symbolic reasoning.",
    implications:
      "World Models represent a transition from \"imitating intelligence to possessing it,\" potentially matching the physics intuition necessary for true autonomy. This evolution is essential for addressing industrial labor shortages through robust robotics that can generalize beyond their training data. As systems gain autonomy, the same research trajectory raises long-term questions of alignment, control and oversight that GLAF tracks as part of this program, even where the evidence base is still forming.",
    keyStatistics: [
      { value: "73%", label: "Turing test success rate for GPT-4.5, exceeding human benchmarks in language." },
      { value: "10x", label: "Increase in AI-related GitHub projects in three years, indicating rapid developer shifts to agents." },
      { value: "4 Years", label: "Age at which a human child has received more sensory data than a standard LLM's entire text corpus." },
      { value: "80%", label: "Government agencies projected to deploy AI agents for routine decision-making by 2028." },
    ],
    majorFindings: [
      { title: "Grounding through Experience", text: "Evidence suggests language alone cannot produce robust intelligence; embodied learning via sensory inputs is necessary for grounded reasoning." },
      { title: "Mental World Modeling", text: "Research proposes that future agents must learn the \"mental states\" of users (Theory of Mind) to enable effective collaboration." },
      { title: "Neuro-symbolic Synergy", text: "Merging neural networks with logic-based rules allows for verifiable model behavior in safety-critical domains." },
    ],
    consensus: [
      "Foundation models provide fluency across knowledge, while World Models provide fluency across experience.",
      "Autonomous agents must internalize predictive models of their environment to generalize to unseen tasks.",
    ],
    competingViewpoints: [
      { title: "LLMs as Obsolete vs. Planning Layers", text: "Debate persists over whether World Models will replace LLMs or if LLMs will remain as the high-level planning layer in multi-tier systems." },
    ],
    researchGaps: [
      "The \"Simulation-to-Reality\" gap remains a major barrier for the industrial use of World Models in robotics.",
      "Current models struggle to distinguish epistemic uncertainty (lack of knowledge) from aleatoric uncertainty (randomness).",
      "GLAF's current bibliography for this program is weighted toward the technical architecture of world models and embodiment; peer-reviewed literature specifically on long-horizon alignment, catastrophic-risk forecasting, and control/oversight mechanisms is thinner and is an active collection priority.",
    ],
    topics: [
      "AI Alignment", "AI Safety", "Long-Term AI Governance", "Autonomous Systems",
      "World Models", "Embodied AI", "Catastrophic & Existential Risk",
      "Control, Oversight & Resilience", "JEPA", "Neuro-symbolic AI", "Robotics",
      "Agentic AI", "Distributed Intelligence", "Alternative Architectures",
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
