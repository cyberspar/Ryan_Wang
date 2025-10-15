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
        // 隐藏主页大图，显示作品网格
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'block';
        
        // 导航链接激活状态管理
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

    // 筛选逻辑 (点击左侧导航栏)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const roleFilter = e.target.getAttribute('data-role');
            const typeFilter = e.target.getAttribute('data-type');
            
            // 确保 data-role 和 data-type 存在
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

    // 判断初始页面状态 (处理带 ID 的详情页或主页默认视图)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        // 如果是详情页
        if (landingView) landingView.style.display = 'none';
        if (portfolioGridView) portfolioGridView.style.display = 'block'; // 详情页使用网格视图的容器
        generateProjectDetail(detailContainer);
    } else {
        // 如果是主页，显示大图
        switchToLanding();
    }
});

// 核心修复函数：项目网格生成 (已增强为不区分大小写)
function generateProjectGrid(container, roleFilter, typeFilter) {
    if (!container) return;
    container.innerHTML = ''; 
    
    const data = window.projectsData || [];
    
    // 将筛选条件转为小写
    const lowerRoleFilter = roleFilter.toLowerCase();
    const lowerTypeFilter = typeFilter.toLowerCase();

    const filteredProjects = data.filter(project => {
        // 将项目数据中的 roles 数组元素全部转为小写进行比较
        const lowerCaseRoles = (project.roles || []).map(r => String(r).toLowerCase());
        
        const roleMatch = lowerCaseRoles.includes(lowerRoleFilter);
        const typeMatch = lowerCaseRoles.includes(lowerTypeFilter);
        
        // 只有同时匹配 Role (editing/color) 和 Type (narrative/commercial) 才显示
        return roleMatch && typeMatch;
    });

    // 如果项目为空，显示提示
    if (filteredProjects.length === 0) {
        container.innerHTML = `<p style="text-align: center; width: 100%; margin-top: 50px;">当前分类中没有找到项目，请检查 projects.js 文件中的 'roles' 字段是否正确填写。</p>`;
        return;
    }

    // 生成项目网格 HTML
    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        // 注意: project.coverImage 需要是正确的图片路径, 例如 "Image/Killher/1.jpg"
        projectItem.innerHTML = `<a href="project.html?id=${project.id}"><img src="${project.coverImage}" alt="${project.title} Cover"><span class="title-overlay">${project.title}</span></a>`;
        container.appendChild(projectItem);
    });
}

// 项目详情页生成函数 (不变)
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
