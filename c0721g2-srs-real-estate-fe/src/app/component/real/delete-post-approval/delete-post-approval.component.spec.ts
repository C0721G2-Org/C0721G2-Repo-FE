import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostApprovalComponent } from './delete-post-approval.component';

describe('DeletePostApprovalComponent', () => {
  let component: DeletePostApprovalComponent;
  let fixture: ComponentFixture<DeletePostApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
