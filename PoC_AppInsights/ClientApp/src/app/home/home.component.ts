import { Component } from '@angular/core';
import { AppMonitorService } from './../services/appMonitor.service';
import { IPerson, ICfdi } from '../../models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  private person: IPerson;
  private cfdis: ICfdi[] = [
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 9, 1), Numero: 1, Saldo: 120, Nombre: 'Héctor Aguirre', EsVisible: true},
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 9, 15), Numero: 3, Saldo: 130, Nombre: 'Héctor Aguirre', EsVisible: true },
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 10, 1), Numero: 4, Saldo: 140, Nombre: 'Héctor Aguirre', EsVisible: true },
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 10, 15), Numero: 5, Saldo: 150, Nombre: 'Héctor Aguirre', EsVisible: true },
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 11, 1), Numero: 6, Saldo: 160, Nombre: 'Héctor Aguirre', EsVisible: true },
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 11, 15), Numero: 7, Saldo: 170, Nombre: 'Héctor Aguirre', EsVisible: true },
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 12, 1), Numero: 8, Saldo: 180, Nombre: 'Héctor Aguirre', EsVisible: true },
    { RFC: 'AUSH880311C44', Fecha: new Date(2018, 12, 15), Numero: 9, Saldo: 190, Nombre: 'Héctor Aguirre', EsVisible: true }
  ];

  constructor(private appInsightsService: AppMonitorService) {
    this.person = <IPerson>
      {
        firstName: 'Héctor',
        lastName: 'Aguirre',
        phone: '1234567890',
        cfdiArray: this.cfdis,
        rfc: 'AUSH880311C44'
      };
  }

  GuardarInformacion() {
    console.log('Evento de prueba');
    if (this.appInsightsService.EnabledStudy()) {
      console.log('Guardando información de persona en ApplicationInsights');
      this.appInsightsService.LogEvent('GuardarInformación', this.person);
      for (let cfdi of this.person.cfdiArray) {
        console.log('Guardando información de cfdi en ApplicationInsights');
        this.appInsightsService.LogEvent('GuardarInformación', cfdi);
      }
    }
    else {
      console.log('Bandera del estudio apagada')
    }
  }
}
