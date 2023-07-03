import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

describe('AppComponent', () => {
  let components= AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let upperPipe:UpperCasePipe;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    upperPipe= new UpperCasePipe
  });



  it('pipe transform ',()=>{
    expect(upperPipe.transform(components.title)).toEqual("MOHAN KUMAR");
  })
});
 