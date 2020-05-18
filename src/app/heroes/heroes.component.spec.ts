import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";


describe('HeroCOmponent', ()=>{
let component: HeroesComponent;
let HEROES;
let mokeHeroservice;
beforeEach(() => {
HEROES= [
    {id:1, name: 'SpiderDude', strength:8},
    {id:2, name: 'wonderful women', strength:24},
    {id:3, name: 'SuperDude', strength:55}
]
mokeHeroservice = ['getHeroes','addHero','deleteHero'];
component = new HeroesComponent(mokeHeroservice);

describe('delete',()=> {
    it('should remove the indecated heroes from hero list',  ()=>{
        mokeHeroservice.deleteHero.and.returnvalue(of(true));
        component.heroes=HEROES;
        component.delete(HEROES[2]);
        expect(component.heroes.length).toBe(2);
    })

})
})



})