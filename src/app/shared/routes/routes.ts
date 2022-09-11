import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
  },
  {
    path: 'ui-kits',
    loadChildren: () => import('../../components/ui-kits/ui-kits.module').then(m => m.UiKitsModule)
  },
  {
    path: 'base',
    loadChildren: () => import('../../components/bonus-ui/base/base.module').then(m => m.BaseModule)
  },
  {
    path: 'advance',
    loadChildren: () => import('../../components/bonus-ui/advance/advance.module').then(m => m.AdvanceModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('../../components/buttons/buttons.module').then(m => m.ButtonsModule)
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../components/apps/todo/todo.module').then(m => m.TodoModule),
  },
  {
    path: 'to-do-firebase',
    loadChildren: () => import('../../components/apps/to-do-firebase/to-do-firebase.module').then(m => m.ToDoFirebaseModule)
  },
  {
    path: 'editor',
    loadChildren: () => import('../../components/editors/editor.module').then(m => m.EditorModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule),
  },
  {
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'knowledgebase',
    loadChildren: () => import('../../components/apps/knowledge-base/knowledge-base.module').then(m => m.KnowledgeBaseModule)
  },
  {
    path: 'job',
    loadChildren: () => import('../../components/apps/job-search/job-search.module').then(m => m.JobSearchModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../../components/apps/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'learning',
    loadChildren: () => import('../../components/apps/learning/learning.module').then(m => m.LearningModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('../../components/apps/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('../../components/apps/gallery/gallery.module').then(m => m.GalleryDemoModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../../components/apps/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'social-app',
    loadChildren: () => import('../../components/apps/social-app/social-app.module').then(m => m.SocialAppModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../../components/apps/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'email',
    loadChildren: () => import('../../components/apps/email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('../../components/apps/calender/calender.module').then(m => m.CalenderModule)
  },
  {
    path: 'file-manager',
    loadChildren: () => import('../../components/apps/file-manager/file-manager.module').then(m => m.FileManagerModule)
  },
  {
    path: 'project',
    loadChildren: () => import('../../components/apps/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('../../components/apps/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('../../components/apps/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('../../components/apps/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'map',
    loadChildren: () => import('../../components/apps/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'support-ticket',
    loadChildren: () => import('../../components/apps/support-ticket/support-ticket.module').then(m => m.SupportTicketModule)
  },
  {
    path: 'form',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'table',
    loadChildren: () => import('../../components/table/table.module').then(m => m.TableModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('../../components/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'search-pages',
    loadChildren: () => import('../../components/others/search-result/search-result.module').then(m => m.SearchResultModule)
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/others/sample/sample.module').then(m => m.SampleModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../components/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  }
];
