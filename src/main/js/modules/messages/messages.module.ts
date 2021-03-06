import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { InboxViewComponent }    from './components/inboxView.component';
import { ListMessagesComponent }  from './components/listMessages.component';
import { SentViewComponent }  from './components/sentView.component';
import { ShowMessageComponent }  from './components/showMessage.component';

// import { HeroService } from './hero.service';

import { MessageRoutingModule } from './messages.routes';
import {FilterByNamePipe} from './pipes/filterByName.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessageRoutingModule
  ],
  declarations: [
    InboxViewComponent,
    ListMessagesComponent,
    SentViewComponent,
    ShowMessageComponent,
    FilterByNamePipe
  ],
  providers: [
    // HeroService
  ]
})
export class MessagesModule {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
