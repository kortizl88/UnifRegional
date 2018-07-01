
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBackOfficeRegionalComponent } from './menu-back-office-regional.component';

describe('MenuBackOfficeRegionalComponent', () => {
  let component: MenuBackOfficeRegionalComponent;
  let fixture: ComponentFixture<MenuBackOfficeRegionalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBackOfficeRegionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBackOfficeRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
