// Maps each institution string used in sources.ts to its real homepage domain
// and, where a genuine official logo/seal file exists on Wikimedia Commons,
// a direct link to that file.
//
// Logo URLs were resolved via Wikipedia/Wikidata's public APIs (looking up
// each institution's actual page image or its P154 "logo image" property),
// not guessed or fabricated. Where no verifiable logo file exists, `logo` is
// omitted and the UI falls back to a favicon.
//
// `group` classifies what the institution actually *is* (university,
// government body, think tank, or industry lab) for the homepage's grouped
// source wall. This is deliberately independent from the per-source
// Peer-Reviewed/University/Government/Standards/Think Tank/Industry tags in
// sources.ts — those tags describe how the original bibliography classified
// one specific paper, which can differ from the institution's actual type
// (e.g. RAND's energy-capacity report was filed under "Government •
// Standards" in the source bibliography even though RAND itself is a think
// tank). The per-source tags are preserved exactly as supplied; `group` here
// is an editorial judgment about the organization itself.

export type InstitutionGroup = "Universities" | "Government" | "Think Tanks" | "Industry Research";

export interface InstitutionLink {
  domain: string;
  logo?: string;
  group: InstitutionGroup;
}

const commons = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=200`;

export const institutionLinks: Record<string, InstitutionLink> = {
  "AAAI / Princeton": { domain: "aaai.org", logo: commons("AAAI logo (2023).svg"), group: "Universities" },
  "Alan Turing Institute": { domain: "turing.ac.uk", logo: commons("Alan_Turing_Institute_logo.svg"), group: "Universities" },
  "Alphabet": { domain: "abc.xyz", logo: commons("Alphabet Inc Logo 2015.svg"), group: "Industry Research" },
  "Berkeley BAIR": { domain: "bair.berkeley.edu", logo: commons("Seal_of_University_of_California,_Berkeley.svg"), group: "Universities" },
  "Brookings": { domain: "brookings.edu", logo: commons("Brookings logo small.png"), group: "Think Tanks" },
  "CNAS": { domain: "cnas.org", logo: commons("CNAS_logo.svg"), group: "Think Tanks" },
  "Congressional Research Service": { domain: "crsreports.congress.gov", logo: commons("Congressional_Research_Service.svg"), group: "Government" },
  "Cornell Law": { domain: "lawschool.cornell.edu", logo: commons("Cornell_University_seal.svg"), group: "Universities" },
  "Cornell University": { domain: "cornell.edu", logo: commons("Cornell_University_seal.svg"), group: "Universities" },
  "DOE": { domain: "energy.gov", logo: commons("Seal_of_the_Department_of_Energy.svg"), group: "Government" },
  "ETH Zurich / University of Stockholm": { domain: "ethz.ch", logo: commons("ETH Zürich Logo black.svg"), group: "Universities" },
  "Egyptian Center for Responsible AI": { domain: "ai.gov.eg", group: "Government" },
  "European Union": { domain: "europa.eu", logo: commons("Flag_of_Europe.svg"), group: "Government" },
  "FAS": { domain: "fas.org", logo: commons("Federation of American Scientists (logo).gif"), group: "Think Tanks" },
  "Freemindtronic R&D": { domain: "freemindtronic.com", group: "Industry Research" },
  "GSMA / United Kingdom": { domain: "gsma.com", logo: commons("GSMA logo (red).svg"), group: "Industry Research" },
  "Google Research": { domain: "research.google", logo: commons("Google 2026 logo.svg"), group: "Industry Research" },
  "Government of Canada": { domain: "canada.ca", logo: commons("Government of Canada signature.svg"), group: "Government" },
  "Harvard Berkman Klein": { domain: "cyber.harvard.edu", logo: commons("Berman_Klein_Center_logo.svg"), group: "Universities" },
  "IJRMEET": { domain: "ijrmeet.org", group: "Universities" },
  "IRE Journals / Amity University": { domain: "irejournals.com", group: "Universities" },
  "ISO": { domain: "iso.org", logo: commons("ISO_Logo_(Red_square).svg"), group: "Government" },
  "Intelligence Brief": { domain: "decodingai-report.com", group: "Industry Research" },
  "LeCun / NYU": { domain: "nyu.edu", logo: commons("New_York_University_Seal.svg"), group: "Universities" },
  "Luxembourg Institute of Science and Technology": { domain: "list.lu", group: "Universities" },
  "MDPI / Processes": { domain: "mdpi.com", group: "Universities" },
  "MDPI / University of Tetuan": { domain: "mdpi.com", group: "Universities" },
  "Meta AI Research": { domain: "ai.meta.com", logo: commons("Facebook, Inc. Logo 2019.svg"), group: "Industry Research" },
  "Minderoo Centre / Cambridge": { domain: "cam.ac.uk", logo: commons("Coat_of_Arms_of_the_University_of_Cambridge.svg"), group: "Universities" },
  "NIST": { domain: "nist.gov", logo: commons("NIST logo.svg"), group: "Government" },
  "NYU / Ranzato et al": { domain: "nyu.edu", logo: commons("New_York_University_Seal.svg"), group: "Universities" },
  "Nanyang Technological University": { domain: "ntu.edu.sg", logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg", group: "Universities" },
  "Next 10 / Berkeley Lab": { domain: "next10.org", logo: commons("Berkeley Lab Logo Large.jpg"), group: "Government" },
  "OECD": { domain: "oecd.org", logo: commons("OECD logo.svg"), group: "Government" },
  "Oxford Academic / PNAS Nexus": { domain: "academic.oup.com", logo: commons("OUP logo.svg"), group: "Universities" },
  "Oxford Law Blogs": { domain: "blogs.law.ox.ac.uk", logo: commons("Arms_of_University_of_Oxford.svg"), group: "Universities" },
  "Partnership on AI": { domain: "partnershiponai.org", logo: commons("Partnership_on_AI_logo.svg"), group: "Think Tanks" },
  "Queen Mary University of London": { domain: "qmul.ac.uk", logo: "https://upload.wikimedia.org/wikipedia/en/1/17/Arms_of_Queen_Mary_University_of_London.png", group: "Universities" },
  "RAND": { domain: "rand.org", logo: commons("RAND_logo.svg"), group: "Think Tanks" },
  "Resources, Conservation & Recycling": { domain: "sciencedirect.com", group: "Universities" },
  "Rutgers University": { domain: "rutgers.edu", logo: commons("Rutgers_University_seal.svg"), group: "Universities" },
  "Stanford / Facebook Research": { domain: "stanford.edu", logo: commons("Seal_of_Leland_Stanford_Junior_University.svg"), group: "Universities" },
  "Stanford HAI": { domain: "hai.stanford.edu", logo: commons("Seal_of_Leland_Stanford_Junior_University.svg"), group: "Universities" },
  "TPDI": { domain: "techpolicy.au", group: "Think Tanks" },
  "Tsinghua University": { domain: "tsinghua.edu.cn", logo: commons("Tsinghua_University_Logo.svg"), group: "Universities" },
  "UN University": { domain: "unu.edu", logo: commons("United Nations University logo.svg"), group: "Universities" },
  "United Nations": { domain: "un.org", logo: commons("Flag_of_the_United_Nations.svg"), group: "Government" },
  "University of Potsdam": { domain: "uni-potsdam.de", logo: commons("Universität_Potsdam_logo.svg"), group: "Universities" },
  "University of Toronto / Hugging Face": { domain: "utoronto.ca", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg", group: "Universities" },
  "University of Washington / ACM": { domain: "washington.edu", logo: "https://upload.wikimedia.org/wikipedia/en/5/58/University_of_Washington_seal.svg", group: "Universities" },
  "WEF / Loughborough University": { domain: "weforum.org", logo: commons("World_Economic_Forum_logo.svg"), group: "Think Tanks" },
};

// Author-only citations with no organizational homepage to link to — still
// need a semantic bucket for the grouped source wall, so they're classified
// here without a `domain`/`logo` (they render as plain text).
export const institutionGroupOverrides: Record<string, InstitutionGroup> = {
  "Acharya et al": "Universities",
  "Hafner et al.": "Universities",
};

export function faviconUrl(domain: string, size = 64): string {
  return `https://www.google.com/s2/favicons?sz=${size}&domain=${domain}`;
}
