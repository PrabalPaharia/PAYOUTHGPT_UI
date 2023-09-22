import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamaGenAIComponent } from './llama-gen-ai.component';

describe('LlamaGenAIComponent', () => {
  let component: LlamaGenAIComponent;
  let fixture: ComponentFixture<LlamaGenAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamaGenAIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamaGenAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
