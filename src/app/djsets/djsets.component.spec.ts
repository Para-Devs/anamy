import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjsetsComponent } from './djsets.component';

describe('DjsetsComponent', () => {
  let component: DjsetsComponent;
  let fixture: ComponentFixture<DjsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjsetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DjsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
