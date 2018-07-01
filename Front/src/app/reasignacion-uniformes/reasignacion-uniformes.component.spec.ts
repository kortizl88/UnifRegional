import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasignacionUniformesComponent } from './reasignacion-uniformes.component';

describe('ReasignacionUniformesComponent', () => {
  let component: ReasignacionUniformesComponent;
  let fixture: ComponentFixture<ReasignacionUniformesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasignacionUniformesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasignacionUniformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
