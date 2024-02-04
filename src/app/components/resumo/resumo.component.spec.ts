/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResumoComponent } from './resumo.component';

describe('ResumoComponent', () => {
  let component: ResumoComponent;
  let fixture: ComponentFixture<ResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
