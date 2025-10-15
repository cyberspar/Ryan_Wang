// ======================================================================
// 你的项目数据库 (最终版本 - 仅包含核心角色和类型标签)
// ======================================================================

const projectsData = [
    // ------------------- [ 叙事短片 (Narrative) - 剪辑和调色 ] -------------------------
    {
        id: "temptation", 
        title: "Temptation",
        coverImage: "https://img.youtube.com/vi/d_pRl5GpFSU/maxresdefault.jpg",
        youtubeId: "d_pRl5GpFSU",
        roles: ["editing", "color", "narrative"],
        description: `<p>A character through action assignment at Chapman University<br>Logline: A 3 mintues short film use no dialogue or music to tell how a young student can’t resist the temptation of game and skip his assignment.</p><p><strong>Directed & filmed & edited & color graded by me.</strong><br><br>Special thanks to Willem Wang</p>`
    },
    {
        id: "broke-my-shell", 
        title: "The Day I Broke My Shell",
        coverImage: "https://img.youtube.com/vi/Sl8FUGhCuR4/maxresdefault.jpg",
        youtubeId: "Sl8FUGhCuR4",
        roles: ["editing", "color", "narrative"],
        description: `<p>Logline: This 9 mintues short film takes place in a fictional world where everyone lives in a bubble shell. (Editor Edition)</p><p>Director - Yuntong Dai<br>1st Assistant Director - Jina Miao <br>Director of photography - Xiaotang Wang<br><strong>Editor - Yuzhou Wang （me）</strong><br><strong>Colorist - Yuzhou Wang（me）</strong><br><strong>Sound Designer - Yuzhou Wang（me）</strong><br><br>*None of the music belongs to me<br>Music Credits: [List of music credits]<br><br>Special thanks to Tailai Yuan.</p>`
    },
    {
        id: "shameful-things", 
        title: "The Shameful Things in the Classroom",
        coverImage: "https://img.youtube.com/vi/BHWG_gGqfy8/maxresdefault.jpg",
        youtubeId: "BHWG_gGqfy8",
        roles: ["editing", "color", "narrative"],
        description: `<p>Logline: This is a short film about the mental struggle of a high school student Jin who has studied art for a long time. Before he took the college entrance exam, a new art teacher, Chen, arrived. Chen might help Jin get a high score, but the unexpected sexual harassment in the painting room puts Jin into a dilemma. (Editor Edition)</p><p>Director - Yuqian Zhang <br>1st Assistant Director - Dekang Liu<br>Director of photography - Yifan Wen<br><strong>Editor - Yuzhou Wang （me）</strong><br><strong>Colorist - Yuzhou Wang（me）</strong><br><strong>Sound Designer - Yuzhou Wang（me）</strong><br><br>*None of the music belongs to me<br>Music Credits: [List of music credits]<br><br>Special thanks to Tailai Yuan.</p>`
    },
    
    // ------------------- [ 叙事短片 (Narrative) - 调色或剪辑为主 ] -------------------------
    {
        id: "child-far-away", 
        title: "Child from far away",
        coverImage: "https://img.youtube.com/vi/U_oRSHk-UtQ/maxresdefault.jpg",
        youtubeId: "U_oRSHk-UtQ",
        roles: ["color", "narrative"],
        description: `<p>Logline: A story about a Tibetan child and his prosecutor friend.<br>Directed by Cang Hai<br>Edited by Yuzhou Wang</p>`
    },
    {
        id: "wanna-dance", 
        title: "Wanna Dance",
        coverImage: "image/Wanna Dance/1.jpg", 
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: In the disco dance party, a man and a woman who secretly have feelings for each other but are unaware of the other's feelings are interrupted by a third party. They try to express their feelings to each other.</p><p>Director: AJ Thames<br>Writer: Erika Dunn<br>Producer: Margot Moore & Isabelle Rivera<br>DOP: Mia Ge<br>Editor: Roy Cheng<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "stranger", 
        title: "Stranger",
        coverImage: "image/Stranger/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["editing", "narrative"],
        description: `<p>Director: Qingyi “Evey” Yu<br>Writer: Eva McConnell<br>Producer: Huiqi Kuang<br>DOP: Modak Karani Devi Sathyanarayanan<br><strong>Editor: Ryan Wang</strong><br>Production Designer: Claire Choi<br>Sound Designer: Jialiang Sun</p>`
    },
    {
        id: "killher", 
        title: "Killher",
        coverImage: "image/Killher/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: [原文件无 Logline]</p><p>Director:Roze JC Zepeda<br>Writer: Kiyanti Schlank<br>Producer: Margot Moore & Isabelle Rivera<br>DOP: Ziyue Hu<br>Editor: Aastha Kotak<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "lights-out", 
        title: "Lights Out",
        coverImage: "image/Lights out/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: A retired professional boxer infiltrates into his opponent's home to seek revenge, and they engage in a fight in the garage.</p><p>Director: Tims Tsaia<br>Writer: Erika Dunn<br>Producer: Tims Tsai<br>DOP: Jacob Chen<br>Editor: Willem Alec Wang<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "cold-call-img",
        title: "Cold Call",
        coverImage: "image/Cold Call/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: An overworked real estate employee, frazzled by her demanding boss, signs her up for a relentless automated messaging service, teaching her a lesson in boundaries and reclaiming her work-life balance.</p><p>Director: Manni “Nebula” Li<br>Writer: Rob Bogin<br>Producer: Nic Cáceres<br>DOP: Jacob Chen<br>Editor: Zhiyi “Zoey” Zhu<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "ambient-noise-img",
        title: "Ambient Noise",
        coverImage: "image/Ambient Noise/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: A father and son engage in a heartfelt conversation about the meaning of life following the passing of the grandfather.</p><p>Director: Joel Bonilla<br>Writer: Connor McCahan<br>Producer: Patrick Shannon<br>DOP: Jason Miao<br>Editor: Zhaoxinyue Li<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "stranger", 
        title: "Stranger",
        coverImage: "image/Stranger/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["editing", "narrative"],
        description: `<p>Director: Qingyi “Evey” Yu<br>Writer: Eva McConnell<br>Producer: Huiqi Kuang<br>DOP: Modak Karani Devi Sathyanarayanan<br><strong>Editor: Ryan Wang</strong><br>Production Designer: Claire Choi<br>Sound Designer: Jialiang Sun</p>`
    },
    {
        id: "killher", 
        title: "Killher",
        coverImage: "image/Killher/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: [原文件无 Logline]</p><p>Director:Roze JC Zepeda<br>Writer: Kiyanti Schlank<br>Producer: Margot Moore & Isabelle Rivera<br>DOP: Ziyue Hu<br>Editor: Aastha Kotak<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    {
        id: "lights-out", 
        title: "Lights Out",
        coverImage: "image/Lights out/1.jpg",
        youtubeId: "[待提供视频ID，原文件为图集]",
        roles: ["color", "narrative"],
        description: `<p>Logline: A retired professional boxer infiltrates into his opponent's home to seek revenge, and they engage in a fight in the garage.</p><p>Director: Tims Tsaia<br>Writer: Erika Dunn<br>Producer: Tims Tsai<br>DOP: Jacob Chen<br>Editor: Willem Alec Wang<br><strong>Colorist: Ryan Wang</strong></p>`
    },
    // ------------------- [ 商业广告 (Commercial) - 默认同时负责 ] -------------------------
    {
        id: "estee-revitalizing-c", 
        title: "ESTĒE LAUDER Revitalizing Supreme+",
        coverImage: "https://img.youtube.com/vi/XyqD1a-X1rc/maxresdefault.jpg", 
        youtubeId: "XyqD1a-X1rc",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "estee-futurist-c", 
        title: "ESTĒE LAUDER Futurist",
        coverImage: "https://img.youtube.com/vi/msERsg_S-K4/maxresdefault.jpg", 
        youtubeId: "msERsg_S-K4",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "ikea-meatball-c", 
        title: "IKEA Meatball (China)",
        coverImage: "https://img.youtube.com/vi/ZPgv5OVN8zo/maxresdefault.jpg", 
        youtubeId: "ZPgv5OVN8zo",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "bebe-aw22-c", 
        title: "BEBE 2022 AUTUMN / WINTER",
        coverImage: "https://img.youtube.com/vi/rYbYrR_1k-w/maxresdefault.jpg",
        youtubeId: "rYbYrR_1k-w",
        roles: ["editing", "color", "commercial"],
        description: `<p>Contains two video links in the original file: https://youtu.be/rYbYrR_1k-w and https://youtube.com/shorts/UHPbdLy7JpQ?feature=share</p>`
    },
    {
        id: "bebe-winter22-c", 
        title: "BEBE 2022 WINTER",
        coverImage: "https://img.youtube.com/vi/UHPbdLy7JpQ/maxresdefault.jpg",
        youtubeId: "UHPbdLy7JpQ",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>`
    },
    {
        id: "kilian-x-bai-yu-c1", 
        title: "Kilian X Bai Yu",
        coverImage: "https://img.youtube.com/vi/25zF7-Nk8jE/maxresdefault.jpg",
        youtubeId: "25zF7-Nk8jE",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "kilian-x-bai-yu-c2", 
        title: "Killian x Bai Yu - APPLE BRANDY",
        coverImage: "https://img.youtube.com/vi/25zF7-Nk8jE/maxresdefault.jpg",
        youtubeId: "25zF7-Nk8jE",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "uniqlo-fall21-c", 
        title: "Uniqlo 2021 Beijing fall version",
        coverImage: "https://img.youtube.com/vi/oFINYU4OH1A/maxresdefault.jpg",
        youtubeId: "oFINYU4OH1A",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "skap-2023-c", 
        title: "SKAP 2023",
        coverImage: "https://img.youtube.com/vi/T7th9-jyCIk/maxresdefault.jpg",
        youtubeId: "T7th9-jyCIk",
        roles: ["editing", "color", "commercial"],
        description: `<p>1 min shoe-brand commercial. Edited and color graded by myself.</p>` 
    },
    {
        id: "quark-x-xiaohui-c", 
        title: "夸克x赵晓卉",
        coverImage: "https://img.youtube.com/vi/D3K-oH05yck/maxresdefault.jpg",
        youtubeId: "D3K-oH05yck",
        roles: ["editing", "color", "commercial"],
        description: `<p></p>` 
    },
    {
        id: "first-frame-c", 
        title: "Behind the scenes: FIRST FRAME - NOWNESS",
        coverImage: "https://img.youtube.com/vi/AFQcEFzcZXE/maxresdefault.jpg", 
        youtubeId: "AFQcEFzcZXE",
        roles: ["editing", "color", "commercial"], // 视为商业项目的一种 showcase
        description: `<p>Edited and color-graded by me</p>`
    }
];

window.projectsData = projectsData;
