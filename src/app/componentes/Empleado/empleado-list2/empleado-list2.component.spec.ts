import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoList2Component } from './empleado-list2.component';

describe('EmpleadoList2Component', () => {
  let component: EmpleadoList2Component;
  let fixture: ComponentFixture<EmpleadoList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoList2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
