import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayouthVotersChatgptComponent } from './payouth-voters-chatgpt.component';

describe('PayouthVotersChatgptComponent', () => {
  let component: PayouthVotersChatgptComponent;
  let fixture: ComponentFixture<PayouthVotersChatgptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayouthVotersChatgptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayouthVotersChatgptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
