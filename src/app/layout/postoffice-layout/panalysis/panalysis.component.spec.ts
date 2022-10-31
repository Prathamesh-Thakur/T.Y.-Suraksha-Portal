import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanalysisComponent } from './panalysis.component';

describe('PanalysisComponent', () => {
  let component: PanalysisComponent;
  let fixture: ComponentFixture<PanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
