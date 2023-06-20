
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path:'/coop/',
    component: () => import('layouts/commercialLayout.vue'),
    children: [
      {path:'login', component: () => import ('pages/login.vue')},
      {path:'signUp', component: () => import ('pages/signUp.vue')},
      {path:'verify', component: () => import ('pages/verify.vue')},
      {path:'verify2', component: () => import ('pages/verify2.vue')},
      {path:'messageBoard1', component: () => import ('pages/messageBoard.vue')},
      // {path:'messageBoard2', component: () => import ('pages/messageBoard2.vue')},

    ]
  },
  {
    path:'/coop2/',
    component: () => import('layouts/messageBoardLayout.vue'),
    children: [
      {path:'messageBoard2', component: () => import ('pages/messageBoard2.vue')},
      {path:'agentProfile', component: () => import ('pages/agentProfile.vue')},
      {path:'message1', component: () => import ('pages/message1.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
