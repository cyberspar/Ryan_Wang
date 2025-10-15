document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('project-grid-container');
    const detailContainer = document.getElementById('project-detail-container');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (gridContainer) {
        // 初始化时显示所有项目
        generateProjectGrid(gridContainer, 'all'); 

        // 添加导航栏点击事件监听器
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                const filter = e.target.getAttribute('data-filter');
                
                // 移除所有 active 类，只给当前点击的链接添加 active 类
                navLinks.forEach(nav => nav.classList.remove('active'));
                e.target.classList.add('active');

                // 重新生成网格，并应用筛选
                generateProjectGrid(gridContainer, filter);
            });
        });
    }

    if (detailContainer) {
        generateProjectDetail(detailContainer);
    }
});

function generateProjectGrid(container, filter) {
    container.innerHTML = ''; // 清空当前网格
    
    // 筛选项目：如果 filter 是 'all'，或项目的 roles 数组中包含 filter 标签
    const filteredProjects = projectsData.filter(project => {
        // 注意：project.roles.includes() 实现了“同时出现”的功能
        return filter === 'all' || project.roles.includes(filter);
    });

    // 渲染筛选后的项目
    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        projectItem.innerHTML = `
            <a href="project.html?id=${project.id}">
                <img src="${project.coverImage}" alt="${project.title} Cover">
                <span class="title-overlay">${project.title}</span>
            </a>
        `;
        container.appendChild(projectItem);
    });
}

function generateProjectDetail(container) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectsData.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.title} - Ryan Wang`;
        
        const videoHtml = project.youtubeId && project.youtubeId.startsWith('[') === false ? `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        ` : '';

        container.innerHTML = `
            ${videoHtml}
            
            <h1>${project.title}</h1>
            <div class="project-info-box">
                ${project.description}
            </div>
        `;
    } else {
        container.innerHTML = `<h1>Project Not Found</h1><p>The requested project could not be found. Please return to the <a href="index.html">Homepage</a>.</p>`;
    }
}
