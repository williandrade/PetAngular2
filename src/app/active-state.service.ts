import { Injectable } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";

@Injectable()
export class ActiveStateService {

	public name : string;
	public header : number;

	constructor(router : Router, route : ActivatedRoute)
	{
		router.events.subscribe(event => {
			if(event instanceof NavigationEnd){
				// Traverse the active route tree
				var snapshot = route.snapshot;
				var activated = route.firstChild;
				if(activated != null) {
					while (activated != null) {
						snapshot = activated.snapshot;
						activated = activated.firstChild;
					}
				}

				// Try finding the 'stateName' from the data
				this.name = snapshot.data['stateName'] || "unnamed";
				this.header = snapshot.data['header'] || "header";
			}
		});
	}

	is(name : string) : boolean
	{
		return this.name === name;
	}

}
