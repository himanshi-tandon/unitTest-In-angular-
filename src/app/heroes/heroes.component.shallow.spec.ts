import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
describe ('HeroesComponent(shallow test)', ()=>{
     let mockHeroService;
    let fixture : ComponentFixture<HeroesComponent>;
    let HEROES;
   
    beforeEach(()=>{
        HEROES= [
            {id:1, name: 'SpiderDude', strength:8},
            {id:2, name: 'wonderful women', strength:24},
            {id:3, name: 'SuperDude', strength:55}
        ]
        mockHeroService= jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
    declarations: [HeroesComponent] , 
    providers:[
        
     { provide:  HeroService, useValue: mockHeroService }],
     schemas:[NO_ERRORS_SCHEMA] 
        });
        fixture=TestBed.createComponent(HeroesComponent);
    });
    it('Should set heros correctly from services', ()=>{
        mockHeroService.getHeroes.and.returnValues(of(HEROES))
fixture.detectChanges();
expect(fixture.componentInstance.heroes.length).toBe(3);
    })

    it('should create one li for hero for each', ()=>{
        mockHeroService.getHeroes.and.returnValues(of(HEROES))
        fixture.detectChanges();
        
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })

})