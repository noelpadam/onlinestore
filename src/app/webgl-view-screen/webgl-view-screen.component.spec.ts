import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebglViewScreenComponent } from './webgl-view-screen.component';

describe('WebglViewScreenComponent', () => {
  let component: WebglViewScreenComponent;
  let fixture: ComponentFixture<WebglViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebglViewScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebglViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
