import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage as testComponent } from './home';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../test-config/mocks-ionic';

describe('Page1', () => {
    let de: DebugElement;
    let comp: testComponent;
    let fixture: ComponentFixture<testComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [testComponent],
            imports: [
                IonicModule.forRoot(testComponent)
            ],
            providers: [
                NavController,
                { provide: Platform, useClass: PlatformMock},
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(testComponent);
        comp = fixture.componentInstance;
    });

    it('should create component', () => expect(comp).toBeDefined());

});