import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'; 
import { ResourceReference } from './components/resources/resource-reference/resource-reference';
import { ResourceSelect } from './components/resources/resource-select/resource-select';
import { CardInfo } from './components/cards/card-info/card-info';
import { ViewCard } from './components/cards/view-card/view-card';


@NgModule({
  declarations: [
  ],
  imports: [
    ResourceSelect, 
    ViewCard, 
    CardInfo, 
    MatCardModule, 
    FormsModule, 
    MatButtonModule,
    MatTableModule, 
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSidenavModule,
  ],
})
export class AppModule { }
