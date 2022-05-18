import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerRegistryComponent } from './broker-registry.component';

describe('BrokerRegistryComponent', () => {
  let component: BrokerRegistryComponent;
  let fixture: ComponentFixture<BrokerRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
