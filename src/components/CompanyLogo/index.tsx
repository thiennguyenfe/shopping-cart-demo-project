const CompanyLogo = () => (
  <div className="company-logo-container">
    <div className="company-logo-wrapper">
      {listCompany?.length > 0 &&
        listCompany.map((item) => {
          return (
            <div className="company-logo-item" key={item.id}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
    </div>
  </div>
);

export default CompanyLogo;

const listCompany = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/e003/5d05/6ad3c88d4b1a3fd03dfcde28119a604f?Expires=1667174400&Signature=MGpZJ8XZEAfwfA7hw~E06MJPnF-~sfYZ5sh574UvIiKUB-Hdg29xph6KgJnV~PDqjU-SGvzMCNpKAeQzA6MXu0bVWF6rUXFFSCUiqua3OL8~kxXMguaVJDJfYjSwEC2tXm4k4rXMv0296WCYai-SsvkdqdT3mptkcXCiRBSnktqx3LvjkI3obfbhHUKNe7PEsNiHno23CP-qCAsn66ahJG8id5daZB7lopvPOGQcPLY~2HETpQAcvggbKwpkJv8MjL6LwU0dkS0CrjP0~j71eP7QRiPsl~GyEDHnYSKFBPW1o-URMV3X4o1pdvHMMVqJQwjVzcLvZdooGLxyYINJbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/ad05/4e76/6ecba134b5274ba3fd49187dd5fe9cc8?Expires=1667174400&Signature=DbMeFnoyLtrK2cTEVeijkLaxPsVURnMY1C1Km8J-RmXbdRzH5TiDZpAouykKrnl7bhOnLYs3-X1e-~jClwZxYiatumpjRHucvNjf5iVOIv7NVpSQz41q6Q5HPOaNrryb~ACIxxcLcqKDt3zr89mNxadmTyc1G5F4ABvLXYWvdmacP6MeEEsJ56diCuvBcd50TM5HuDEoZp6ISFK610VH6Z0Zv54f0YdO7sV9oFsgaUpJixR2WWu6RExKMawE4bhxqYudZSv1STLlFJRiKAcrAL7-hxKEpUlN332bKfxyc4ut8paVY5J-x-DhRp~YowXa6HkszlYGueViryXoAiEZZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/16da/f308/8b9c3b477d787fd38a8b0505754f70ba?Expires=1667174400&Signature=FTwz8TzE-4GKyCfZoJE-O0PDo7JK6T6rFedu2nkGLSBQlcpEOjHJp73m0gy7EA2qwqVqJIIpgPOvA~6BleKU7mDIGfTYXfvNSKjEqr8fikAfgMncNIktHIV-TILIOH4C2mvhQoXoiyuIIuRdLj6xe~r2np9x4xwhygiu6AHUN0iskTOcCDn8Sdtl7R4QmwjTHJ88g7--MdOaK0CvK36hlnD7xiDoQvHRoRS8A5ih7cp72~WZoNzUT74ya5tKI7RujQk4gjoyidzNUB07xHOQ9jKPN3CvIl8ldYS79PVtEA7Z~0Y9wKPUpE8scjlIgiOJWCCsrbwz-MWeNLIJhoIq9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 4,
    img: "https://s3-alpha-sig.figma.com/img/95af/e41b/6a234b7ab7899f5ce91b9737a351e249?Expires=1667174400&Signature=Lp9abB26P3LyX44kSBrfRHmU4hkf5UAP8S7seNTO37bhbV6gIjGZLBnNlSjOySWwRy88~ZcZ6yQMhkefsl4VeCU-2ZjGhr8Xy3HPdNfsSRGvHCWN1liVfx5iTKIWWfi2QjfwKDPvFYfysM8G68j-jmvx-tYO9IK4AmIyKvHSjvkJa58sSSrewSL8j7BRZaGjt62XK9nWqoDTUjWlyHs8ubCLhrdnaGV8FREq3i3clYUvb5Xx8Lgta7MJWvhwhmWMNtGmzBkOuIDJP~AWMXdN6-QRql8jZnl3lEQaGt18HzhphlbDU-ZGuJsUBb1PwULJvf4Kqissl7t5yUM0FO8vxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 5,
    img: "https://s3-alpha-sig.figma.com/img/427e/6a38/b9f21cabf9f278b8d278b378ad645ab1?Expires=1667174400&Signature=QEfyoqYr3Z~dZUKQHAQnOY6MpovyRoYoXrlCYLAucQaqxP0KsME7KiIjwqd7qbWueT-CvpfV5zz-gnIzU5tW83Z5g3bimAHXstm2VOKNZ3E4NZ-zBxVVZfi~47z4INbpoU0sFn9PLHLY68iB5QdH-FjpolDhZJnJhuLEjR4JYJPJ1rueP30ZILcp43WzFdvosrX3YAMgDRXJTjP4lHuI5YY5T2km6Hh6W3juYar5X0WeQqzxhV6EGeJ-i248Sp4u7M3nYLCC63O4Z-mSX2499GGyQOlS0Dz8QthJt9XAli~IA9DHFJsNEH9UWMVePP9qi3UiZrMdOPJOZ5Kaz-S7IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 6,
    img: "https://s3-alpha-sig.figma.com/img/e93d/e3d5/c4ca4b2a87029abf68283a355c0d4a6c?Expires=1667174400&Signature=cb5pZseMDs1JKa0rt7U-~hhjFKZSQQxlebMUPuVn0nY8uw9J7e~NpRIyZR1hDatktolfgBBzJ62KiUkorv-yiAh7lXh8bOcymbW4mlH1L58dTMpsuwmaAXj4F-wN8bcxXh-z7-O2CeoPcWJZFOur26uuXih4gSzmsuKrwi0ZNwLuV730vqrDxX1PZqV5Adw1pNnu6xsc5cy1MaOd3beAXHF8w4rF6n6Ure9-sv9wjSlUnL-FjsAppanr7mINQc~Gn0fK8nkm3XClHlr9qbF2pFDktOeahBYR8d4KvfsleHkqCNzkxmhIjOd6R9Hqul4YGZ90Rsx3~Bo9aVFCG0g8yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 7,
    img: "https://s3-alpha-sig.figma.com/img/42ee/325c/8d4f3f8e36f3ac85a6e5dd1187b451a2?Expires=1667174400&Signature=fwRW9-tq8PCBbIIJI8~Wwpt3hml~47OX9fgt1k8gyITn2JKDzYyPpMsfc1Tve-KFRNfZHg73-ynsuONbSqS1f8QAv10TQr8vItknFSlFlRMWzs5qaKn-JeISDegIw0ldzGYpT-TTWUb0veeeahVAnqiZfxt8gLnnkgTIrWsaVD3a4nEcj0TMZ5wWi8ZEYOAosA2ffUuhlChNg35VkdgLN21N9IvmqpUiv9kejOMJHuJouN0irB9ofMHzaQExUs2N8FXTgl3C3D9juqjqoedBETg1oD0hIo2TqaNWRP1q3ygfLU0VAZrarxRut13N699hQadoD-WLYf0fD54urv~Kjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];
