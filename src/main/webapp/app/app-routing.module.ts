import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { MyticketsComponent } from 'app/mytickets/mytickets.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'jhi-mytickets',
          component: MyticketsComponent
        },
        {
          path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(m => m.BugTrackerJHipsterAdminModule)
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class BugTrackerJHipsterAppRoutingModule {}
