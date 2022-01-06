import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPostApprovalComponent } from './detail-post-approval.component';

describe('DetailPostApprovalComponent', () => {
  let component: DetailPostApprovalComponent;
  let fixture: ComponentFixture<DetailPostApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPostApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPostApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
