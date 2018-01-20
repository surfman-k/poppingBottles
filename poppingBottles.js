var input = Number(process.argv.slice(2));

function poppingBottles(cash){

	var pop = {
		bottles: (cash / 2),
		empties: 0,
		caps: 0,
		drank: 0,
		totalEarned: {
			bottle: 0,
			caps: 0
		}
	};

	if(pop.bottles > 0){
		pop.empties = pop.bottles;
		pop.drank = pop.bottles;
		pop.caps = pop.bottles;
		pop.bottles = 0;
	}

	for(i = 0; i < pop.drank ; i++){
		
		if(pop.bottles > 0){
			pop.bottles -= 1;
			pop.drank += 1;
			pop.empties += 1;
			pop.caps += 1;
		}

		if(pop.empties > 1){
			pop.bottles += 1;
			pop.totalEarned.bottle += 1;
			pop.empties -= 2;
			i = 0;
		}

		if(pop.caps > 3){
			pop.caps -= 4;
			pop.totalEarned.caps += 1;
			pop.bottles += 1;
			i = 0;
		}


	}


	console.log("TOTAL BOTTLES: " + pop.drank + "\nREMAINING BOTTLES: " + pop.empties + "\nREMAINING CAPS: " + pop.caps + "\nTOTAL EARNED: \n  BOTTLES: " + pop.totalEarned.bottle + "\n  CAPS: " + pop.totalEarned.caps);
}

poppingBottles(input);