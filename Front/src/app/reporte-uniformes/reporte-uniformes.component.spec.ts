import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUniformesComponent } from './reporte-uniformes.component';

describe('ReporteUniformesComponent', () => {
  let component: ReporteUniformesComponent;
  let fixture: ComponentFixture<ReporteUniformesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteUniformesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteUniformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
