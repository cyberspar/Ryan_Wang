document.addEventListener("DOMContentLoaded", () => {
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const siteTitle = document.querySelector('.site-title'); 
    const detailContainer = document.getElementById('project-detail-container');

    const switchView = (roleFilter, typeFilter, activeLink) => {
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'block';
        
        navLinks.forEach(nav => nav.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');

        if (gridContainer) {
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
    };
    
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

    // 初始状态设置
    const projectId = new URLSearchParams(window.location.search).get('id');

    if (projectId) {
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'block'; 
        generateProjectDetail(detailContainer);
    } else {
        switchToLanding();
    }
});

function generateProjectGrid(container, roleFilter, typeFilter) {
    if (!container) return;
    container.innerHTML = ''; 
    const data = window.projectsData || [];
    
    // ⬇️ CRITICAL CHECK: 检查数据是否成功加载 ⬇️
    if (data.length === 0) {
         container.innerHTML = `<p style="text-align: center; width: 100%; margin-top: 50px; color: red; font-weight: 700;">
             错误：项目数据未加载。请检查 projects.js 文件是否存在语法错误（例如，缺少逗号或引号）。
         </p>`;
         return;
    }
    
    const lowerRoleFilter = roleFilter.toLowerCase();
    const lowerTypeFilter = typeFilter.toLowerCase();

    const filteredProjects = data.filter(project => {
        const lowerCaseRoles = (project.roles || []).map(r => String(r).toLowerCase());
        
        const roleMatch = lowerCaseRoles.includes(lowerRoleFilter);
        const typeMatch = lowerCaseRoles.includes(lowerTypeFilter);
        
        return roleMatch && typeMatch;
    });

    // 如果项目为空，显示提示
    if (filteredProjects.length === 0) {
        container.innerHTML = `<p style="text-align: center; width: 100%; margin-top: 50px;">当前分类中没有找到项目，请检查 projects.js 文件中的 'roles' 字段是否正确填写。</p>`;
        return;
    }

    // 渲染筛选后的项目
    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `<a href="project.html?id=${project.id}"><img src="${project.coverImage}" alt="${project.title} Cover"><span class="title-overlay">${project.title}</span></a>`;
        container.appendChild(projectItem);
    });
}

function generateProjectDetail(container) {
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
        container.innerHTML = `<h1>Project Not Found</h1><p>The requested project could not be found. Please return to the <a href="index.html">Homepage</a></p>`;
    }
}
