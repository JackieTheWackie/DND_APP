import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBioComponent } from './create-edit-bio.component';

describe('CreateEditBioComponent', () => {
  let component: CreateEditBioComponent;
  let fixture: ComponentFixture<CreateEditBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
