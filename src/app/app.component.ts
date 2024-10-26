import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { AppService } from './app.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService, private toast: ToastController) {}

  async ngOnInit() {
    const screenWidth = window.innerWidth;
    const isTablet = screenWidth > 800;

    if (!isTablet) {
      ScreenOrientation.lock({ orientation: 'portrait' });
    } else {
      ScreenOrientation.unlock();
    }

    await this.appService.initDb();

  }
}
