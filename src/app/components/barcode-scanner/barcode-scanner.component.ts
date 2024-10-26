import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {
  BarcodeScanner,
  CameraDirection,
} from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'c-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements AfterViewInit, OnDestroy {
  scannedResult: string | null = null;
  isScanning: boolean = false;

  constructor() {}
  ngOnDestroy(): void {
    BarcodeScanner.stopScan();
  }
  ngAfterViewInit(): void {
    BarcodeScanner.prepare({
      cameraDirection: CameraDirection.BACK,
    });
  }

  async startScan() {
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      this.isScanning = true;

      // Oculta la interfaz de la aplicación mientras escanea (opcional)
      // document.body.classList.add('scanner-active');
      document
        .getElementById('scannerContainer')
        ?.classList.add('scanner-active');
      await BarcodeScanner.showBackground();

      // Inicia el escaneo
      const result = await BarcodeScanner.startScan();

      // Si se obtiene un resultado válido
      if (result.hasContent) {
        this.scannedResult = result.content; // Guardar el contenido escaneado
        console.log('Código escaneado:', this.scannedResult);
      }

      // Terminar el escaneo
      this.stopScan();
    } else if (status.denied) {
      // Si los permisos están denegados permanentemente, abrir la configuración de la app
      BarcodeScanner.openAppSettings();
    }
  }

  // Método para detener el escaneo
  stopScan() {
    BarcodeScanner.stopScan();
    this.isScanning = false;
    document
      .getElementById('scannerContainer')
      ?.classList.remove('scanner-active');
    // document.body.classList.remove('scanner-active');
  }
}
