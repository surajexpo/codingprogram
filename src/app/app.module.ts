import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpcomingBatchesComponent } from './components/upcoming-batches/upcoming-batches.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CComponent } from './components/courses/c/c.component';
import { JavaComponent } from './components/courses/java/java.component';
import { WebDesignComponent } from './components/courses/web-design/web-design.component';
import { DataStructureComponent } from './components/courses/data-structure/data-structure.component';
import { PythonComponent } from './components/courses/python/python.component';
import { CppComponent } from './components/courses/cpp/cpp.component';
import { AngularComponent } from './components/courses/angular/angular.component';
import { ReactComponent } from './components/courses/react/react.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    UpcomingBatchesComponent,
    CoursesComponent,
    FooterComponent,
    NavbarComponent,
    CComponent,
    JavaComponent,
    WebDesignComponent,
    DataStructureComponent,
    PythonComponent,
    CppComponent,
    AngularComponent,
    ReactComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
