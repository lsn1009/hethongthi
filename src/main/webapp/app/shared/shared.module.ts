import { NgModule } from '@angular/core';
import { HethongthiSharedLibsModule } from './shared-libs.module';
import { JhiAlertComponent } from './alert/alert.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';
import { JhiLoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [HethongthiSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent, JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HethongthiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent, JhiLoginModalComponent, HasAnyAuthorityDirective]
})
export class HethongthiSharedModule {}
