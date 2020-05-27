/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopingEditComponent } from './shoping-edit.component';

describe('ShopingEditComponent', () => {
  let component: ShopingEditComponent;
  let fixture: ComponentFixture<ShopingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
