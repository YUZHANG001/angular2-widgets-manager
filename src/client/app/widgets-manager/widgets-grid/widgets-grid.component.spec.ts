import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http, HttpModule
} from '@angular/http';
import {CommonModule} from '@angular/common';

import { MockBackend } from '@angular/http/testing';
import { WidgetsGridComponent } from './widgets-grid.component';
import * as TypeMoq from 'typemoq';

import { WidgetsGridModule } from './widgets-grid.module';

export function main() {
  describe('Widgets Grid component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, WidgetsGridModule],
        declarations: [TestComponent],
        providers: [
          BaseRequestOptions,
          MockBackend,
          {provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
        ]
      });
    });

    it('should work', () => {
      // let mock: TypeMoq.IMock<Bar> = TypeMoq.Mock.ofType(Bar);
      expect(2).toBe(2);

      // let homeInstance = fixture.debugElement.children[0].componentInstance;
      // let homeDOMEl = fixture.debugElement.children[0].nativeElement;
      //
      // expect(homeDOMEl.querySelectorAll('li').length).toEqual(0);
      //
      // homeInstance.newName = 'Minko';
      // homeInstance.addName();
      //
      // fixture.detectChanges();
      //
      // expect(homeDOMEl.querySelectorAll('li').length).toEqual(1);
      // expect(homeDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
      // });
      //
      // }));
      // });
    })
  });
}

@Component({
  selector: 'test-cmp',
  template: '<widgets-grid></widgets-grid>'
})
class TestComponent { }
