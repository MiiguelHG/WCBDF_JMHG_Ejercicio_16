import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirardadosComponent } from './tirardados.component';

describe('TirardadosComponent', () => {
  let component: TirardadosComponent;
  let fixture: ComponentFixture<TirardadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirardadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirardadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
