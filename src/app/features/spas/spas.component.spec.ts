import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpasComponent } from './spas.component';

describe('SpasComponent', () => {
  let component: SpasComponent;
  let fixture: ComponentFixture<SpasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
