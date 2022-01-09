import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailOfCustomerComponent } from './post-detail-of-customer.component';

describe('PostDetailOfCustomerComponent', () => {
  let component: PostDetailOfCustomerComponent;
  let fixture: ComponentFixture<PostDetailOfCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailOfCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
