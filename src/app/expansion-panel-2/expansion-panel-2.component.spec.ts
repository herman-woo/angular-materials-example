import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanel2Component } from './expansion-panel-2.component';

describe('ExpansionPanel2Component', () => {
  let component: ExpansionPanel2Component;
  let fixture: ComponentFixture<ExpansionPanel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
