document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const toggleHeaders = document.querySelectorAll('.nav-toggle'); // 获取所有可折叠的父级标题

    // 视图切换函数
    const switchView = (roleFilter = 'all', typeFilter = 'all') => {
        landingView.style.display = 'none';
        portfolioGridView.style.display = 'block';

        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // 激活正确的链接：尝试激活二级链接，如果不是二级链接，则只运行筛选
        const activeLinkSelector = typeFilter !== 'all' 
                                 ? `[data-role="${roleFilter}"][data-type="${typeFilter}"]` 
                                 : `[data-filter="${roleFilter}"]`;

        const activeLink = document.querySelector(activeLinkSelector);
        if (activeLink) activeLink.classList.add('active');


        if (gridContainer) {
            // 运行筛选
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
    };

    // ⬇️ 核心功能：折叠菜单逻辑 ⬇️
    toggleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const category = header.getAttribute('data-category');
            const submenu = document.querySelector(`.submenu[data-category="${category}"]`);
            
            if (submenu) {
                // 检查是否已展开
                if (submenu.style.height === '0px' || submenu.style.height === '') {
                    // 展开菜单：计算内容高度
                    submenu.style.height = submenu.scrollHeight + 'px';
                } else {
                    // 折叠菜单
                    submenu.style.height = '0px';
                }
            }
        });
    });

    // ⬇️ 核心功能：筛选逻辑 ⬇️
    // 监听导航栏的所有点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const singleFilter = e.target.getAttribute('data-filter'); // 用于 'all', 'showcase', 'branded'
            const roleFilter = e.target.getAttribute('data-role'); // 用于 'editing', 'color'
            const typeFilter = e.target.getAttribute('data-type'); // 用于 'narrative', 'commercial'

            // 逻辑分支
            if (singleFilter === 'all') {
                // 'All Projects' 按钮
                switchView('all', 'all'); 
            } else if (singleFilter) {
                // 'showcase' 或 'branded' 按钮 (一级筛选)
                switchView(singleFilter); 
            } else if (roleFilter && typeFilter) {
                // 二级菜单筛选 (Role AND Type)
                switchView(roleFilter, typeFilter);
            }
        });
    });

    // 初始化时，让主页加载并确保子菜单是关闭的
    if (landingView) {
        landingView.style.display = 'flex';
        portfolioGridView.style.display = 'none';
    }
    document.querySelectorAll('.submenu').forEach(sub => sub.style.height = '0px'); // 确保初始折叠


    // 确保 detail 页面功能不变
    const detailContainer = document.getElementById('project-detail-container');
    if (detailContainer) {
        generateProjectDetail(detailContainer);
    }
});
// (确保将你之前完整的 generateProjectGrid 和 generateProjectDetail 函数代码粘贴到 app.js 中)
// (因为篇幅限制，这里省略了 generateProjectGrid 和 generateProjectDetail 函数的代码，请从你之前的 app.js 中复制。)
