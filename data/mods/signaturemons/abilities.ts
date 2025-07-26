export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	//Modified so that Procrastinate can be used on natural Truant turns
	truant: {
		inherit: true,
		onBeforeMove(pokemon, target, move) {
			/*if (move.id === 'procrastinate') {
				pokemon.addVolatile('truant');
				return true;
			} */
			if (pokemon.removeVolatile('truant')) {
				//Procrastinate exception
				if (move.id === 'procrastinate') return true;
				
				else {
					this.add('cant', pokemon, 'ability: Truant');
					return false;
				}
			}
			pokemon.addVolatile('truant');
		},
	},
}