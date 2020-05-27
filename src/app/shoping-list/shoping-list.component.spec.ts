/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopingListComponent } from './shoping-list.component';

describe('ShopingListComponent', () => {
  let component: ShopingListComponent;
  let fixture: ComponentFixture<ShopingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
