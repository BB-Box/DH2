export const Items: {[itemid: string]: ModdedItemData} = {
	pearl: {
		name: "Pearl",
		spritenum: 27,
		fling: {
			basePower: 30,
		},
		num: 9000,
		gen: 2,
		rating: 0,
	},

	bigpearl: {
		name: "Big Pearl",
		spritenum: 27,
		fling: {
			basePower: 30,
		},
		num: 9001,
		gen: 2,
		rating: 0,
	},

	pearlstring: {
		name: "Pearl String",
		spritenum: 27,
		fling: {
			basePower: 30,
		},
		num: 9002,
		gen: 5,
		rating: 0,
	},
	//Mental Herb: cures Party Time effect
	mentalherb: {
		inherit: true,
		fling: {
			basePower: 10,
			effect(pokemon) {
				const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock', 'partytime'];
				for (const firstCondition of conditions) {
					if (pokemon.volatiles[firstCondition]) {
						for (const secondCondition of conditions) {
							pokemon.removeVolatile(secondCondition);
							if (firstCondition === 'attract' && secondCondition === 'attract') {
								this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
							}
						}
						return;
					}
				}
			},
		},
		onUpdate(pokemon) {
			const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock', 'partytime'];
			for (const firstCondition of conditions) {
				if (pokemon.volatiles[firstCondition]) {
					if (!pokemon.useItem()) return;
					for (const secondCondition of conditions) {
						pokemon.removeVolatile(secondCondition);
						if (firstCondition === 'attract' && secondCondition === 'attract') {
							this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
						}
					}
					return;
				}
			}
		},
	},
}