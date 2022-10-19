import React from "react";
import FeatureCard from "../FeatureCard";

const FeaturedProduct = () => {
  return (
    <div>
      <FeatureCard title="Featured Product" data={listProduct} slide={4} />
    </div>
  );
};

export default FeaturedProduct;

const listProduct = [
  {
    id: 1,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/b120/dd35/afa230d9c7854e8904bff707a459d920?Expires=1667174400&Signature=gSrJ06~dG-drT8W8141hKG6e7wGaI7wT7oxF6drZOo48aqDCQcJxwLNPemXxrJk2tPVcM9AVZVs2tQAD6onbWzPaA54jwCfN~dwcOD2fs23WEUClvgN8njcrDdCmaIpxpxKeQVew4~4XK8sdAuR~Oxsx-GcF~FGUn6ZxyhhF4O3kcFqvyjtgnwdr33-5SMLEtPlZE091Zp1HT2sZYky61ex7XM1bdaJqW~MsvQZGL910D0FfWiGlEIU-DozbknV~JmPFI41mnvNl6yaiYdG95l5MLtPYy3z32m4BP4MBxLFJj29iEHrvYbyeFtc1rgrfH4jZyBhHZ4VEO1ZMeHFIOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "30",
    prevPrice: "",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/096d/6bf5/080dc137a17c6a407cb7a13d1dcbf2a4?Expires=1667174400&Signature=ETrfPhsgaeFfWa2Z~sg~pg9uO4tEHCOaoz-jQeeud-5-RaiU3tNDvXoFyv5S7pWcyqrYTIhZgzBpDXoMDlGhTiHcxNWukF1L9GF2jPfFuoBBF01cN34QWBg1L2vlkZ5Bgi09K4CS2L1BI9zwuV3LOTz~dbAV28S90yq9ttCrctxmFPMS2RMfdmcqVBOVm2TDP20IMvDk2RWlpU3dYRaEApF4QJb3ZaZqThd9ti-FFWvvM-Z3rWlquWvAXKON2lz~27ZLmQqaz2Y4VrvKQQ7tpmIaIK6GOaYwCMUid~Gfwnxhfi9ZBFj6-kljxYluI2F6ENKBytbI~H2mD9I6nnp~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "20",
    prevPrice: "",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/8ae8/29fe/06cfc69d45f5c9a48462543f1816e9a3?Expires=1667174400&Signature=eKEElF6F28JqK5aW8-ZiXlAOqa9phP2hMzprtlnNWgsPpACpKA4zCcn7PYLd1teDhrCufiwzpyy4Q9dFcbU0EI8yuCbSJ3iiGEX5LfiXR2J~nhh2gf6nQL6CbrUdZVCDK31UL29sDCfgbzpK3i1hSsgwYs6arfnFyqpnjfz4-cdgkxIUzhhPfF4xXzAG09azi~K~FQhBbqKVJURgczIrKgD5YfwheuLD4RBVNyv1EherFQ-sukE0yQ8Y2gXpBkYrvVul4hRDeAU4sOIuYQdBm1kaq6R0~lgYyWsuHVRQjLqxe6KOsZvhCGcyNLuBYz2~yIHrgY95MJIvQ87NhCTafw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "30",
    prevPrice: "",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/096d/6bf5/080dc137a17c6a407cb7a13d1dcbf2a4?Expires=1667174400&Signature=ETrfPhsgaeFfWa2Z~sg~pg9uO4tEHCOaoz-jQeeud-5-RaiU3tNDvXoFyv5S7pWcyqrYTIhZgzBpDXoMDlGhTiHcxNWukF1L9GF2jPfFuoBBF01cN34QWBg1L2vlkZ5Bgi09K4CS2L1BI9zwuV3LOTz~dbAV28S90yq9ttCrctxmFPMS2RMfdmcqVBOVm2TDP20IMvDk2RWlpU3dYRaEApF4QJb3ZaZqThd9ti-FFWvvM-Z3rWlquWvAXKON2lz~27ZLmQqaz2Y4VrvKQQ7tpmIaIK6GOaYwCMUid~Gfwnxhfi9ZBFj6-kljxYluI2F6ENKBytbI~H2mD9I6nnp~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "40",
    prevPrice: "",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/096d/6bf5/080dc137a17c6a407cb7a13d1dcbf2a4?Expires=1667174400&Signature=ETrfPhsgaeFfWa2Z~sg~pg9uO4tEHCOaoz-jQeeud-5-RaiU3tNDvXoFyv5S7pWcyqrYTIhZgzBpDXoMDlGhTiHcxNWukF1L9GF2jPfFuoBBF01cN34QWBg1L2vlkZ5Bgi09K4CS2L1BI9zwuV3LOTz~dbAV28S90yq9ttCrctxmFPMS2RMfdmcqVBOVm2TDP20IMvDk2RWlpU3dYRaEApF4QJb3ZaZqThd9ti-FFWvvM-Z3rWlquWvAXKON2lz~27ZLmQqaz2Y4VrvKQQ7tpmIaIK6GOaYwCMUid~Gfwnxhfi9ZBFj6-kljxYluI2F6ENKBytbI~H2mD9I6nnp~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "45",
    prevPrice: "",
  },
];
