import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickmortyComponent } from './rickmorty.component';

describe('RickmortyComponent', () => {
  let component: RickmortyComponent;
  let fixture: ComponentFixture<RickmortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickmortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickmortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
