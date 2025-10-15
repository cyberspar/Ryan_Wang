const projectsData = [
    // ------------------- [ 编辑与调色 (E+C) / Showcase ] -------------------------
    {
        id: "first-frame", 
        title: "Behind the scenes: FIRST FRAME - NOWNESS",
        coverImage: "https://img.youtube.com/vi/AFQcEFzcZXE/maxresdefault.jpg", 
        youtubeId: "AFQcEFzcZXE",
        roles: ["editing", "color", "showcase"],
        description: `
            <p>In the latest episode of the NOWNESS "Behind the Scenes" series, actors Zhou Xun, Jing Boran, and Zhang Junning give an insight into the 15th FIRST Youth Film Festival and Chanel's "FIRST FRAME" from their own perspectives. They also shared their perspectives on the film. They also talked with several short film directors and shared their "behind-the-scenes" stories.</p>
            <p>In these six different works, we jumped into the hearts of the characters, explored and pursued beauty, let our emotions ebb and flow, and experienced our genuine emotions as human beings; we saw different women exploring the future in the "rivers" of the times and and grew up with them in the long stream of images. Whether in a particular context of the times or confronting the rules of the town, these images start from an everyday perspective, measuring the sorrows and joys of individuals and families at a mundane pace. Life's various thoughts and perceptions are finally integrated into one frame and become one video story.</p>
            <p>Edited and color-graded by me</p>
        `
    },
    // ------------------- [ 商业广告 (默认 E+C) ] -------------------------
    {
        id: "estee-revitalizing", 
        title: "ESTĒE LAUDER Revitalizing Supreme+ Campaign Video (China)",
        coverImage: "https://img.youtube.com/vi/XyqD1a-X1rc/maxresdefault.jpg", 
        youtubeId: "XyqD1a-X1rc",
        roles: ["editing", "color", "commercial"], // 假设同时负责
        description: `<p></p>`
    },
    {
        id: "estee-futurist", 
        title: "ESTĒE LAUDER Futurist Campaign Video (China)",
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
        description: `<p>Contains two video links in the original file: https://youtu.be/rYbYrR_1k-w and https://youtube.com/shorts/UHPbdLy7JpQ?feature=share</p>`
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
        id: "kilian-x-bai-yu-1", 
        title: "Kilian X Bai Yu",
        coverImage: "https://img.youtube.com/vi/25zF7-Nk8jE/maxresdefault.jpg",
        youtubeId: "25zF7-Nk8jE",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "kilian-x-bai-yu-2", 
        title: "Killian x Bai Yu - APPLE BRANDY",
        coverImage: "https://img.youtube.com/vi/25zF7-Nk8jE/maxresdefault.jpg",
        youtubeId: "25zF7-Nk8jE",
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
        roles: ["editing", "color", "commercial"], // 原始文件标注 Edited and color graded by myself
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
    // ------------------- [ 叙事短片 (Narrative) - 按实际贡献标签 ] -------------------------
    {
        id: "child-far-away", 
        title: "Child from far away",
        coverImage: "https://img.youtube.com/vi/U_oRSHk-UtQ/maxresdefault.jpg",
        youtubeId: "U_oRSHk-UtQ",
        roles: ["color", "narrative"], // 原始文件未明确标注，假设为调色
        description: `<p>Logline: A story about a Tibetan child and his prosecutor friend.<br>Directed by Cang Hai<br>Edited by Yuzhou Wang</p>`
    },
    {
        id: "cold-call-img",
        title: "Cold Call",
        coverImage: "../image/Cold Call/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"], // 原始文件标注 Colorist: Ryan Wang
        description: `<p>Logline: An overworked real estate employee, frazzled by her demanding boss, signs her up for a relentless automated messaging service, teaching her a lesson in boundaries and reclaiming her work-life balance.</p><p>Director: Manni “Nebula” Li<br>Writer: Rob Bogin<br>Producer: Nic Cáceres<br>DOP: Jacob Chen<br>Editor: Zhiyi “Zoey” Zhu<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "ambient-noise-img",
        title: "Ambient Noise",
        coverImage: "../image/Ambient Noise/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"], // 原始文件标注 Colorist: Ryan Wang
        description: `<p>Logline: A father and son engage in a heartfelt conversation about the meaning of life following the passing of the grandfather.</p><p>Director: Joel Bonilla<br>Writer: Connor McCahan<br>Producer: Patrick Shannon<br>DOP: Jason Miao<br>Editor: Zhaoxinyue Li<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "wanna-dance", 
        title: "Wanna Dance",
        coverImage: "../image/Wanna Dance/1.jpg", 
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"], // 原始文件标注 Colorist: Ryan Wang
        description: `<p>Logline: In the disco dance party, a man and a woman who secretly have feelings for each other but are unaware of the other's feelings are interrupted by a third party. They try to express their feelings to each other.</p><p>Director: AJ Thames<br>Writer: Erika Dunn<br>Producer: Margot Moore & Isabelle Rivera<br>DOP: Mia Ge<br>Editor: Roy Cheng<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "stranger", 
        title: "Stranger",
        coverImage: "../image/Stranger/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["editing", "narrative"], // 原始文件标注 Editor: Ryan Wang
        description: `<p>Director: Qingyi “Evey” Yu<br>Writer: Eva McConnell<br>Producer: Huiqi Kuang<br>DOP: Modak Karani Devi Sathyanarayanan<br><strong>Editor: Ryan Wang</strong><br>Production Designer: Claire Choi<br>Sound Designer: Jialiang Sun</p>`
    },
    {
        id: "killher", 
        title: "Killher",
        coverImage: "../image/Killher/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"], // 原始文件标注 Colorist: Ryan Wang
        description: `<p>Logline: [原文件无 Logline]</p><p>Director:Roze JC Zepeda<br>Writer: Kiyanti Schlank
