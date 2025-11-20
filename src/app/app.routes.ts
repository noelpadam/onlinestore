import { Routes } from '@angular/router';
import { WebglViewerComponent } from './webgl-scene/webgl-viewer.component';
import { WebglViewScreenComponent } from './webgl-view-screen/webgl-view-screen.component';

export const routes: Routes = [
     { path: '', component: WebglViewerComponent },
     { path: 'viewitem/:id', component: WebglViewScreenComponent },
];
