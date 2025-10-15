// ======================================================================
// 你的项目数据库 (根据您在 Google Sheet 中的分类最终更新)
// ======================================================================

const projectsData = [
    {
        id: "first-frame", 
        title: "Behind the scenes: FIRST FRAME - NOWNESS",
        coverImage: "https://img.youtube.com/vi/AFQcEFzcZXE/maxresdefault.jpg", 
        youtubeId: "AFQcEFzcZXE",
        roles: ["editing", "color", "showcase"],
        description: `
            <p>In the latest episode of the NOWNESS "Behind the Scenes" series, actors Zhou Xun, Jing Boran, and Zhang Junning give an insight into the 15th FIRST Youth Film Festival and Chanel's "FIRST FRAME" from their own perspectives. They also shared their perspectives on the film. They also talked with several short film directors and shared their "behind-the-scenes" stories.</p>
            <p>Edited and color-graded by me</p>
        `
    },
    {
        id: "estee-revitalizing", 
        title: "ESTĒE LAUDER Revitalizing Supreme+",
        coverImage: "https://img.youtube.com/vi/XyqD1a-X1rc/maxresdefault.jpg", 
        youtubeId: "XyqD1a-X1rc",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "estee-futurist", 
        title: "ESTĒE LAUDER Futurist",
        coverImage: "https://img.youtube.com/vi/msERsg_S-K4/maxresdefault.jpg", 
        youtubeId: "msERsg_S-K4",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "ikea-meatball", 
        title: "IKEA Meatball (China)",
        coverImage: "https://img.youtube.com/vi/ZPgv5OVN8zo/maxresdefault.jpg", 
        youtubeId: "ZPgv5OVN8zo",
        roles: ["editing", "color", "branded"],
        description: `<p></p>`
    },
    {
        id: "bebe-aw22", 
        title: "BEBE 2022 AUTUMN / WINTER",
        coverImage: "https://img.youtube.com/vi/rYbYrR_1k-w/maxresdefault.jpg",
        youtubeId: "rYbYrR_1k-w",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "bebe-winter22", 
        title: "BEBE 2022 WINTER",
        coverImage: "https://img.youtube.com/vi/UHPbdLy7JpQ/maxresdefault.jpg",
        youtubeId: "UHPbdLy7JpQ",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "child-far-away", 
        title: "Child from far away",
        coverImage: "https://img.youtube.com/vi/U_oRSHk-UtQ/maxresdefault.jpg",
        youtubeId: "U_oRSHk-UtQ",
        roles: ["color", "narrative"],
        description: `
            <p>Logline: A story about a Tibetan child and his prosecutor friend.<br>Directed by Cang Hai<br>Edited by Yuzhou Wang</p>
        `
    },
    {
        id: "kilian-x-bai-yu", 
        title: "Kilian X Bai Yu",
        coverImage: "https://img.youtube.com/vi/25zF7-Nk8jE/maxresdefault.jpg",
        youtubeId: "25zF7-Nk8jE",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "kilian-apple-brandy", 
        title: "Killian x Bai Yu - APPLE BRANDY",
        coverImage: "https://img.youtube.com/vi/Dncc9YtR__8/maxresdefault.jpg",
        youtubeId: "Dncc9YtR__8",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "uniqlo-fall21", 
        title: "Uniqlo 2021 Beijing fall version",
        coverImage: "https://img.youtube.com/vi/oFINYU4OH1A/maxresdefault.jpg",
        youtubeId: "oFINYU4OH1A",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "skap-2023", 
        title: "SKAP 2023",
        coverImage: "https://img.youtube.com/vi/T7th9-jyCIk/maxresdefault.jpg",
        youtubeId: "T7th9-jyCIk",
        roles: ["editing", "color", "commercial"],
        description: `<p>1 min shoe-brand commercial. Edited and color graded by myself.</p>` 
    },
    {
        id: "quark-x-xiaohui", 
        title: "夸克x赵晓卉",
        coverImage: "https://img.youtube.com/vi/D3K-oH05yck/maxresdefault.jpg",
        youtubeId: "D3K-oH05yck",
        roles: ["editing", "color", "branded"],
        description: `<p></p>` 
    },
    {
        id: "temptation", 
        title: "Temptation",
        coverImage: "https://img.youtube.com/vi/d_pRl5GpFSU/maxresdefault.jpg",
        youtubeId: "d_pRl5GpFSU",
        roles: ["editing", "color", "narrative"],
        description: `
            <p>A character through action assignment at Chapman University<br>
            Logline: A 3 mintues short film use no dialogue or music to tell how a young student can’t resist the temptation of game and skip his assignment.</p>
            <p><strong>Directed & filmed & edited & color graded by me.</strong></p>
        `
    },
    {
        id: "broke-my-shell", 
        title: "The Day I Broke My Shell",
        coverImage: "https://img.youtube.com/vi/Sl8FUGhCuR4/maxresdefault.jpg",
        youtubeId: "Sl8FUGhCuR4",
        roles: ["editing", "color", "narrative"],
        description: `
            <p>Logline: This 9 mintues short film takes place in a fictional world where everyone lives in a bubble shell. (Editor Edition)</p>
            <p>Director - Yuntong Dai<br>
            <strong>Editor - Yuzhou Wang （me）</strong><br>
            <strong>Colorist - Yuzhou Wang（me）</strong><br>
            <strong>Sound Designer - Yuzhou Wang（me）</strong></p>
        `
    },
    {
        id: "shameful-things", 
        title: "The Shameful Things in the Classroom",
        coverImage: "https://img.youtube.com/vi/BHWG_gGqfy8/maxresdefault.jpg",
        youtubeId: "BHWG_gGqfy8",
        roles: ["editing", "color", "narrative"],
        description: `
            <p>Logline: This is a short film about the mental struggle of a high school student Jin who has studied art for a long time. (Editor Edition)</p>
            <p>Director - Yuqian Zhang <br>
            <strong>Editor - Yuzhou Wang （me）</strong><br>
            <strong>Colorist - Yuzhou Wang（me）</strong><br>
            <strong>Sound Designer - Yuzhou Wang（me）</strong></p>
        `
    },
    {
        id: "wanna-dance", 
        title: "Wanna Dance",
        coverImage: "image/Wanna Dance/1.jpg", 
        youtubeId: "[待提供视频ID]",
        roles: ["color", "narrative"],
        description: `
            <p>Logline: In the disco dance party, a man and a woman who secretly have feelings for each other but are unaware of the other's feelings are interrupted by a third party.</p>
            <p><strong>Colorist: Ryan Wang</strong></p>
        `
    },
    {
        id: "stranger", 
        title: "Stranger",
        coverImage: "image/Stranger/1.jpg",
        youtubeId: "[待提供视频ID]",
        roles: ["editing", "narrative"],
        description: `
            <p><strong>Editor: Ryan Wang</strong></p>
        `
    },
    {
        id: "killher", 
        title: "Killher",
        coverImage: "image/Killher/1.jpg",
        youtubeId: "[待提供视频ID]",
        roles: ["color", "narrative"],
        description: `
            <p><strong>Colorist: Ryan Wang</strong></p>
        `
    },
    {
        id: "lights-out", 
        title: "Lights Out",
        coverImage: "image/Lights out/1.jpg",
        youtubeId: "[待提供视频ID]",
        roles: ["color", "narrative"],
        description: `
            <p>Logline: A retired professional boxer infiltrates into his opponent's home to seek revenge, and they engage in a fight in the garage.</p>
            <p><strong>Colorist: Ryan Wang</strong></p>
        `
    },
    {
        id: "cold-call",
        title: "Cold Call",
        coverImage: "image/Cold Call/1.jpg",
        youtubeId: "[待提供视频ID]",
        roles: ["color", "narrative"],
        description: `
            <p>Logline: An overworked real estate employee, frazzled by her demanding boss, signs her up for a relentless automated messaging service.</p>
            <p><strong>Colorist: Ryan Wang</strong></p>
        `
    },
    {
        id: "ambient-noise",
        title: "Ambient Noise",
        coverImage: "image/Ambient Noise/1.jpg",
        youtubeId: "[待提供视频ID]",
        roles: ["color", "narrative"],
        description: `
            <p>Logline: A father and son engage in a heartfelt conversation about the meaning of life following the passing of the grandfather.</p>
            <p><strong>Colorist: Ryan Wang</strong></p>
        `
    }
];
