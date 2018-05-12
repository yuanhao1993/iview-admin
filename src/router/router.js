import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};


// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {
            path: 'home',
            title: {i18n: 'home'},
            name: 'home_index',
            component: () => import('@/views/home/home.vue')
        },
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: () => import('@/views/own-space/own-space.vue')
        },
        {
            path: 'order/:order_id',
            title: '订单详情',
            name: 'order-info',
            component: () => import('@/views/advanced-router/component/order-info.vue')
        }, // 用于展示动态路由
        {
            path: 'shopping',
            title: '购物详情',
            name: 'shopping',
            component: () => import('@/views/advanced-router/component/shopping-info.vue')
        }, // 用于展示带参路由
        {
            path: 'message',
            title: '消息中心',
            name: 'message_index',
            component: () => import('@/views/message/message.vue')
        },
        {
            path: '/customer-list/customer-desc/:id',
            title: '客户详情',
            name: 'customer_desc',
            component: () => import('@/views/customer/customer-desc.vue'),
            props: true
        },
        {
            path: '/customeraudit-list/customeraudit-desc/:id',
            title: '审核详情',
            name: 'customeraudit_desc',
            component: () => import('@/views/customeraudit/customeraudit-desc.vue'),
            props: true
        },
        {
            path: '/customerloan-list/customerloan-desc/:id',
            title: '放款详情',
            name: 'customerloan_desc',
            component: () => import('@/views/customerloan/customerloan-desc.vue'),
            props: true
        },
        {
            path: '/customerurge-list/customerurge-desc/:id',
            title: '追款详情',
            name: 'customerurge_desc',
            component: () => import('@/views/customerurge/customerurge-desc.vue'),
            props: true
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/channel-list',
        icon: 'social-dropbox',
        title: '渠道管理',
        name: 'channel-list',
        access: 0,
        component: Main,
        children: [
            {
                path: 'index',
                title: '渠道管理',
                name: 'channel_index',
                component: () => import('@/views/channel/channel.vue')
            }
        ]
    },
    {
        path: '/staff-list',
        icon: 'android-person',
        title: '员工管理',
        name: 'staff-list',
        access: 0,
        component: Main,
        children: [
            {
                path: 'index',
                title: '员工管理',
                name: 'staff_index',
                component: () => import('@/views/staff/staff.vue')
            }
        ]
    },
    {
        path: '/customer-list',
        icon: 'android-people',
        title: '客户管理',
        name: 'customer-list',
        access: 0,
        component: Main,
        children: [
            {
                path: 'index',
                title: '客户管理',
                name: 'customer_index',
                component: () => import('@/views/customer/customer.vue')
            }
        ]
    },
    {
        path: '/customeraudit-list',
        icon: 'ios-filing',
        title: '审核管理',
        name: 'customeraudit-list',
        access: [0,1],
        component: Main,
        children: [
            {
                path: 'index',
                title: '审核管理',
                name: 'customeraudit_index',
                component: () => import('@/views/customeraudit/customeraudit.vue')
            }
        ]
    },
    {
        path: '/customerloan-list',
        icon: 'social-usd',
        title: '放款管理',
        name: 'customerloan-list',
        access: [0,2],
        component: Main,
        children: [
            {
                path: 'index',
                title: '放款管理',
                name: 'customerloan_index',
                component: () => import('@/views/customerloan/customerloan.vue')
            }
        ]
    },
    {
        path: '/customerurge-list',
        icon: 'social-usd-outline',
        title: '追款管理',
        name: 'customerurge-list',
        access: [0,3],
        component: Main,
        children: [
            {
                path: 'index',
                title: '追款管理',
                name: 'customerurge_index',
                component: () => import('@/views/customerurge/customerurge.vue')
            }
        ]
    },
    {
        path: '/black-list',
        icon: 'filing',
        title: '黑名单',
        name: 'black-list',
        component: Main,
        children: [
          {
            path: 'index',
            title: '黑名单',
            name: 'black_index',
            component: () => import('@/views/black/black.vue')
          }
        ]
    },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
