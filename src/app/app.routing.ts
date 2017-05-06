import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'artist/:id',
    component:ArtistComponent
  },
  {
    path:'album/:id',
    component:AlbumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
