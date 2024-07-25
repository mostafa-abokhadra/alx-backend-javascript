import Building  from './5-building'
export default class SkyHighBuilding  extends Building {
    constructor(sqft, floors){
        this.sqft = sqft;
        this.floors = floors;
    }
    get sqft(){
        return this.sqft;
    }
    get floors(){
        return this.floors;
    }
    evacuationWarningMessage(){
        return "Evacuate slowly the NUMBER_OF_FLOORS floors";
    }
}
