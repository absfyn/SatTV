import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChannelsComponent } from './view-channels.component';

describe('ViewChannelsComponent', () => {
  let component: ViewChannelsComponent;
  let fixture: ComponentFixture<ViewChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
