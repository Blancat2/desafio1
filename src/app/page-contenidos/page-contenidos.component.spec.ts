import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContenidosComponent } from './page-contenidos.component';

describe('PageContenidosComponent', () => {
  let component: PageContenidosComponent;
  let fixture: ComponentFixture<PageContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContenidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
