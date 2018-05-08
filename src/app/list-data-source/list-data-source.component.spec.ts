import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataSourceComponent } from './list-data-source.component';

describe('ListDataSourceComponent', () => {
  let component: ListDataSourceComponent;
  let fixture: ComponentFixture<ListDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
