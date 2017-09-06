import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header.component'
import { BodyComponent } from './components/body.component'
import { FooterComponent } from './components/footer.component'
import { AlbumComponent } from './components/album.component'
import { CreatorComponent } from './components/creator.component'


const routes: Routes = [
    { path: '', redirectTo: '/albums', pathMatch: 'full' },
    { path: 'albums', component: BodyComponent },
    { path: 'albums/:id', component: AlbumComponent},
    { path: 'createalbum', component: CreatorComponent }
]


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {  }