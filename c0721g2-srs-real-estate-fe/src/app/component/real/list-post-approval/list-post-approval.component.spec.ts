import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostApprovalComponent } from './list-post-approval.component';

describe('ListPostApprovalComponent', () => {
  let component: ListPostApprovalComponent;
  let fixture: ComponentFixture<ListPostApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
