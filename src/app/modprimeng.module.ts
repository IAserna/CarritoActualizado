import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DataViewModule } from 'primeng/dataview';




const misModulos = [
  ButtonModule,
  CardModule,
  SidebarModule,
  ToastModule,
  CalendarModule,
  TagModule,
  DynamicDialogModule,
  DataViewModule,

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    
  ],
  exports: [
    misModulos,
    
  ]
})
export class ModprimengModule { }
