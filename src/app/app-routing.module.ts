import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpcomingBatchesComponent } from './components/upcoming-batches/upcoming-batches.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CComponent } from './components/courses/c/c.component';
import { JavaComponent } from './components/courses/java/java.component';
import { WebDesignComponent } from './components/courses/web-design/web-design.component';
import { DataStructureComponent } from './components/courses/data-structure/data-structure.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { AngularComponent } from './components/courses/angular/angular.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'UpcomingBatches',
    component: UpcomingBatchesComponent,
  },
  {
    path: 'trainers',
    component:TrainerComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },

  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'c-programming',
    component: CComponent,
  },
  {
    path: 'java',
    component: JavaComponent,
  },
  {
    path: 'web-designing',
    component: WebDesignComponent,
  },
  {
    path: 'data-structure',
    component: DataStructureComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'course-detail',
    component: CourseDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
