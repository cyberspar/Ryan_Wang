document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const toggleHeaders = document.querySelectorAll('.nav-toggle'); 
    const siteTitle = document.querySelector('.site-title'); 
    const detailContainer = document.getElementById('project-detail-container');

    // 视图切换函数
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

    // ⬇️ 核心功能：折叠菜单逻辑 (功能已整合在 app.js 中) ⬇️
    if (toggleHeaders.length > 0) {
        toggleHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const category = header.getAttribute('data-category');
                const submenu = document.querySelector(`.submenu[data-category="${category}"]`);
                
                if (submenu) {
                    if (submenu.style.height === '0px' || submenu.style.height === '') {
                        submenu.style.height = submenu.scrollHeight + 'px';
                    } else {
                        submenu.style.height = '0px';
                    }
                }
            });
        });
    }

    // ⬇️ 核心功能：筛选逻辑 - 点击子菜单链接时，切换到网格视图 ⬇️
    if (navLinks.length > 0) {
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
    }

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
        // 如果是详情页，不显示 Landing View
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'block'; 
        generateProjectDetail(detailContainer);
    } else {
        // 否则，显示 Landing View
        switchToLanding();
    }
});


// **********************************************
// * 核心筛选函数 (已添加不区分大小写逻辑) *
// **********************************************

function generateProjectGrid(container, roleFilter, typeFilter) {
    if (!container) return;
    container.innerHTML = ''; 
    
    const data = window.projectsData || [];
    
    // ⬇️ 关键修复：将筛选条件和数据内容都转为小写进行比较 ⬇️
    const lowerRoleFilter = roleFilter.toLowerCase();
    const lowerTypeFilter = typeFilter.toLowerCase();

    const filteredProjects = data.filter(project => {
        // 将项目数据中的 roles 数组元素全部转为小写进行比较
        const lowerCaseRoles = (project.roles || []).map(r => String(r).toLowerCase());
        
        const roleMatch = lowerCaseRoles.includes(lowerRoleFilter);
        const typeMatch = lowerCaseRoles.includes(lowerTypeFilter);
        
        // 只有同时匹配 Role 和 Type 才显示
        return roleMatch && typeMatch;
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
    const project = window.projectsData.find(p => p.id === projectId); 

    if (project) {
        document.title = `${project.title} - Ryan Wang`;
        
        const videoHtml = project.youtubeId && !project.youtubeId.startsWith('[') ? `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>` : '';

        container.innerHTML = `
            ${videoHtml}
            
            <h1>${project.title}</h1>
            <div class="project-info-box">
                ${project.description}
            </div>
        `;
    } else {
        container.innerHTML = `<h1>Project Not Found</h1><p>The requested project could not be found. Please return to the <a href="index.html">Homepage</a></p>`;
    }
}
