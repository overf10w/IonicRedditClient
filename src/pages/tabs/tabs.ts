import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RedditsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
