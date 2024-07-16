import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeStoreComponent } from './anime-store.component';

describe('AnimeStoreComponent', () => {
  let component: AnimeStoreComponent;
  let fixture: ComponentFixture<AnimeStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeStoreComponent]
    });
    fixture = TestBed.createComponent(AnimeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
