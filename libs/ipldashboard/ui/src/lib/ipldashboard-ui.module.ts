import { material } from './ui-material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, ...material],
  declarations: [AppLayoutComponent],
  exports: [...material, AppLayoutComponent]
})
export class IpldashboardUiModule {}
