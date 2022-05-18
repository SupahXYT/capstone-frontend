import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavigatorComponent } from './portal-navigator.component';

describe('PortalNavigatorComponent', () => {
  let component: PortalNavigatorComponent;
  let fixture: ComponentFixture<PortalNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
