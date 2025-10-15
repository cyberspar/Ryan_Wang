document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const toggleHeaders = document.querySelectorAll('.nav-toggle'); 
    const siteTitle = document.querySelector('.site-title'); 

    // 视图切换函数
    const switchView = (roleFilter = 'editing', typeFilter = 'narrative', activeLink = null) => {
        // 1. 切换视图：Landing View 消失，Grid View 出现
        if (landingView && portfolioGridView) {
            landingView.style.display = 'none';
            portfolioGridView.style.display = 'block';
        }

        // 2. 运行筛选
        if (gridContainer) {
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
        
        // 3. 激活正确的链接
        navLinks.forEach(nav => nav.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    // ⬇️ 核心功能：折叠菜单逻辑 (修复点击无反应的 Bug) ⬇️
    if (toggleHeaders.length > 0) { // 确保元素存在，避免 JS 报错
        toggleHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const category = header.getAttribute('data-category');
                const submenu = document.querySelector(`.submenu[data-category="${category}"]`);
                
                if (submenu) {
                    // 检查是否已展开
                    if (submenu.style.height === '0px' || submenu.style.height === '') {
                        // 展开菜单
                        submenu.style.height = submenu.scrollHeight + 'px';
                    } else {
                        // 折叠菜单
                        submenu.style.height = '0px';
                    }
                }
            });
        });
    }

    // ⬇️ 核心功能：筛选逻辑 - 点击子菜单链接时，切换到网格视图 ⬇️
    if (navLinks.length > 0) { // 确保链接存在
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const singleFilter = e.target.getAttribute('data-filter');
                const roleFilter = e.target.getAttribute('data-role');
                const typeFilter = e.target.getAttribute('data-type');

                // 逻辑分支
                if (singleFilter) {
                    // 辅助筛选 (Showcase / Branded)
                    switchView(singleFilter, 'all', e.target); 
                } else if (roleFilter && typeFilter) {
                    // 二级菜单筛选 (Role AND Type)
                    switchView(roleFilter, typeFilter, e.target);
                }
            });
        });
    }

    // ⬇️ 修正 3: 点击左上角标题，回到图片主页 ⬇️
    siteTitle.addEventListener('click', (e) => {
        e.preventDefault(); 
        switchToLanding();
    });
    
    // 视图切换函数 (切换回主页图片视图)
    const switchToLanding = () => {
        if (landingView && portfolioGridView) {
            landingView.style.display = 'block';
            portfolioGridView.style.display = 'none';
        }
        // 移除所有 active 状态并确保子菜单折叠
        navLinks.forEach(nav => nav.classList.remove('active'));
        document.querySelectorAll('.submenu').forEach(sub => sub.style.height = '0px');
    };

    // ⬇️ 修正 4: 初始状态设置 ⬇️
    if (window.location.search === "") {
         switchToLanding();
    }
    
    // 确保 detail 页面功能不变
    const detailContainer = document.getElementById('project-detail-container');
    if (detailContainer) {
        generateProjectDetail(detailContainer);
        landingView.style.display = 'none';
        portfolioGridView.style.display = 'block';
    }
});
// **********************************************
// * 核心筛选函数 (请确保 app.js 中包含此部分代码) *
// **********************************************

function generateProjectGrid(container, roleFilter, typeFilter) {
    container.innerHTML = ''; 

    const filteredProjects = projectsData.filter(project => {
        // 1. 单标签筛选 ('showcase', 'branded')
        if (typeFilter === 'all' || typeFilter === undefined) { 
            return roleFilter === 'all' || project.roles.includes(roleFilter);
        }
        
        // 2. 二级菜单 (Role AND Type) 筛选
        if (roleFilter && typeFilter) {
            const roleMatch = project.roles.includes(roleFilter);
            const typeMatch = project.roles.includes(typeFilter);
            return roleMatch && typeMatch;
        }

        return true; 
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
