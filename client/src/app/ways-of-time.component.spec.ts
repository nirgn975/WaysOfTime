import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WaysOfTimeAppComponent } from '../app/ways-of-time.component';

beforeEachProviders(() => [WaysOfTimeAppComponent]);

describe('App: WaysOfTime', () => {
  it('should create the app',
      inject([WaysOfTimeAppComponent], (app: WaysOfTimeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ways-of-time works!\'',
      inject([WaysOfTimeAppComponent], (app: WaysOfTimeAppComponent) => {
    expect(app.title).toEqual('ways-of-time works!');
  }));
});
