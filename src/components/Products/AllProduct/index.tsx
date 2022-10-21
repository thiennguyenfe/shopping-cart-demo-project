import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const AllProduct = () => {
  return (
    <div className="all-product-container">
      <div className="all-product-wrapper">
        <div className="product-list">
          {allProduct.map((item, index) => {
            return (
              <div className="product-item" key={index}>
                <img src={item.img} alt="" />
                <div className="actions"></div>
                <div className="product-info">
                  <div>
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                  </div>
                  <div className="add-to-cart">
                    <CiShoppingCart style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

const allProduct = [
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
    img: "https://s3-alpha-sig.figma.com/img/e222/3ac4/9ef838bf1b2e6eb27237306ca911c590?Expires=1667174400&Signature=dqhJHL5eWQbgQM5BPU-jAEQgmtkxBFWgxW7nqyPrBw18PIfOtT0I5EQyKOFBIoljCihUL~sX5NNzl7YsOrJy8y9Bb7keCCiRjb7Asm68~6d~dKMHzxqT4pRlz7zHUoIvRUOZUMi8PWA3J3qOzeZZ-lrKVnne2ABOiznpECGBu4xNxM0OUwZauKZJfZ11GC8D6UCdcchqIDTpjUUmUxxR08Z9IjleUNruW6kKaj-ytH6A7Jkutqip7chAAzCZVDuHGQyouKDKctUx2Uk56mzdEa9kqpJlXdJ7zjXa9lT6Nm8cYqZxAzW0DMBtRiOHcb0mHmoYfyA1U4uhSlZ6V4XBdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "40",
    prevPrice: "",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/64ce/fe53/d4cbc3805c414ce9f76aa8bdd2a3cc8d?Expires=1667174400&Signature=PAlCsIRX9UZRj3k2NF7ynfZqNkEbE5iHB6gImM8h2z-Lek7pVd0IYzfbFKKkmLApUOeeHIKVF2CYqLpvqde~-RYWeadYE3TJMAT7rMq9Pg4Rq8KzbE16UFYzzzGmW8Ix4b6NwdtXm3Yn~yMlaxIiC9ZWAM3qBXxfnaaMVWswwuEa0JmA-HYDLqNsI0WaL5sWlAi8DQxZi34nm4ngZk8xSMP8ynWTPyEkMv3LdQYxP4V0rYOoi~vQlpCwzWEiYao73mAC7FJcJL9gPjerr-LGh7jKz5gTCerjqr4HYIoFShVPtHa7utmYB1~QrhGHf1IyD0WrjjSTqSmi4F046m~Qvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "45",
    prevPrice: "",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/a507/8479/3410e47eab61c559fa971045f11bb3a9?Expires=1667174400&Signature=LQ3PdPlYKQ3iqkgbCwM9nsoFyJgMkaOh-J3-9Uqje8Awp2AcmXOkD6clV1moURLT6mCFwG1KnutdzXwtQphKbNvAbI0Zuy~-S-euN8AyIGMHQsDDUcOXrYaqb62FrsXVhEXIdd8wB2gpLEaeU-BzYvoRh-Ep273wf~8ne0quIATKKEu1dq0dHkRmI-iOqUMQsnRxt5GrWU5AqBDoHAC507nFxiaGmcBQ4mVgz37D3VH2~-OAexJqA4O86~6yRU4B4Clb2Yh-XIU32MEnlez5jOBWvWumsIt3ZowjSrCcJDaF5oRCi267sesBcsT9e1MdejFYvfmLEcSh-fzY4GvcTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "30",
    prevPrice: "",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/8b88/947a/31903acf7eec7cd336119f1ea0b4587b?Expires=1667174400&Signature=SlLGzNsd-c65ZZkgmSccJW4UeGJ63dChSlAspZXEDaB8ZhMkGWSUQ3a0mPHkRX5mqTqGe2wnapwHgyptMurMxXqpzgnSvX6yyo6puzz65qcP71bNHLSQBDqE~gIUCoG0sFvx-bhjR2MJs2SZbdpv7oFqPtlQ7YS1Ea9uFDACGniWg9PxBRq9IlTQTQQOMo8jITyx0qOiehmSsg8g0odapLsV3i7Bqzq2LIa3FLh44vUMOLjyHERCJQ~tkfNCKcv3Cb8lUEqTAM-SE0hWa7Rs~hrVmKlJuOLTPHJ12a2jSqDnFFnQlqi~pDIV~AupOJykptZDpqcJi8~flCZr1Yk~8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "40",
    prevPrice: "",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/b120/dd35/afa230d9c7854e8904bff707a459d920?Expires=1667174400&Signature=gSrJ06~dG-drT8W8141hKG6e7wGaI7wT7oxF6drZOo48aqDCQcJxwLNPemXxrJk2tPVcM9AVZVs2tQAD6onbWzPaA54jwCfN~dwcOD2fs23WEUClvgN8njcrDdCmaIpxpxKeQVew4~4XK8sdAuR~Oxsx-GcF~FGUn6ZxyhhF4O3kcFqvyjtgnwdr33-5SMLEtPlZE091Zp1HT2sZYky61ex7XM1bdaJqW~MsvQZGL910D0FfWiGlEIU-DozbknV~JmPFI41mnvNl6yaiYdG95l5MLtPYy3z32m4BP4MBxLFJj29iEHrvYbyeFtc1rgrfH4jZyBhHZ4VEO1ZMeHFIOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "45",
    prevPrice: "",
  },
];
