import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssJsComponent } from './html-css-js.component';

describe('HtmlCssJsComponent', () => {
  let component: HtmlCssJsComponent;
  let fixture: ComponentFixture<HtmlCssJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
