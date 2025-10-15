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
        description: `<p>Logline: [原文件无 Logline]</p><p>Director:Roze JC Zepeda<br>Writer: Kiyanti Schlank<br>Producer: Margot Moore & Isabelle Rivera<br>DOP:
