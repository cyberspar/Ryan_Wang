document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const siteTitle = document.querySelector('.site-title'); 
    const detailContainer = document.getElementById('project-detail-container');

    // 视图切换函数 (切换到网格视图并筛选)
    const switchView = (roleFilter, typeFilter, activeLink) => {
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'block';
        
        navLinks.forEach(nav => nav.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');

        if (gridContainer) {
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
    };
    
    // 视图切换函数 (切换回主页图片视图)
    const switchToLanding = () => {
        if (landingView) landingView.style.display = 'flex';
        if (portfolioGridView) portfolioGridView.style.display = 'none';
        navLinks.forEach(nav => nav.classList.remove('active'));
    };

    // 筛选逻辑
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const roleFilter = e.target.getAttribute('data-role');
            const typeFilter = e.target.getAttribute('data-type');
            if (roleFilter && typeFilter) {
                switchView(roleFilter, typeFilter, e.target);
            }
        });
    });

    // 点击标题返回主页
    if (siteTitle) {
        siteTitle.addEventListener('click', (e) => {
            e.preventDefault(); 
            switchToLanding();
        });
    }

    // 判断初始页面状态
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        // 如果是详情页
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'none';
        generateProjectDetail(detailContainer);
    } else {
        // 如果是主页
        switchToLanding();
    }
});

function generateProjectGrid(container, roleFilter, typeFilter) {
    if (!container) return;
    container.innerHTML = ''; 
    const filteredProjects = window.projectsData.filter(project => {
        const roleMatch = project.roles.includes(roleFilter);
        const typeMatch = project.roles.includes(typeFilter);
        return roleMatch && typeMatch;
    });

    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `<a href="project.html?id=${project.id}"><img src="${project.coverImage}" alt="${project.title} Cover"><span class="title-overlay">${project.title}</span></a>`;
        container.appendChild(projectItem);
    });
}

function generateProjectDetail(container) {
    if (!container) return;
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = window.projectsData.find(p => p.id === projectId); 

    if (project) {
        document.title = `${project.title} - Ryan Wang`;
        const videoHtml = project.youtubeId && !project.youtubeId.startsWith('[') ? `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>` : '';
        container.innerHTML = `<div id="portfolio-grid-view">${videoHtml}<h1>${project.title}</h1><div class="project-info-box">${project.description}</div></div>`;
    } else {
        container.innerHTML = `<h1>Project Not Found</h1><p>The requested project could not be found. Please return to the <a href="index.html">Homepage</a>.</p>`;
    }
}
