export const Items: {[itemid: string]: ModdedItemData} = {

		narwanite: {
			name: "Narwanite",
			shortDesc: "If held by Narwa, this item allows it to Mega Evolve in battle.",
			spritenum: 596,
			megaStone: "Allmother Narwa",
			megaEvolves: "Narwa",
			itemUser: ["Narwa"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1000,
			gen: 9,
	},
		magnamalite: {
			name: "Magnamalite",
			shortDesc: "If held by Magnamalo, this item allows it to Mega Evolve in battle.",
			spritenum: 614,
			megaStone: "Scorned Magnamalo",
			megaEvolves: "Magnamalo",
			itemUser: ["Magnamalo"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1001,
			gen: 9,
	},
		astalite: {
			name: "Astalite",
			shortDesc: "If held by Astalos, this item allows it to Mega Evolve in battle.",
			spritenum: 613,
			megaStone: "Boltreaver Astalos",
			megaEvolves: "Astalos",
			itemUser: ["Astalos"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1002,
			gen: 9,
	},
		mizutsunite: {
			name: "Mizutsunite",
			shortDesc: "If held by Mizutsune, this item allows it to Mega Evolve in battle.",
			spritenum: 624,
			megaStone: "Soulseer Mizutsune",
			megaEvolves: "Mizutsune",
			itemUser: ["Mizutsune"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1003,
			gen: 9,
	},
		rajanite: {
			name: "Rajanite",
			shortDesc: "If held by Rajang, this item allows it to Mega Evolve in battle.",
			spritenum: 602,
			megaStone: "Furious Rajang",
			megaEvolves: "Rajang",
			itemUser: ["Rajang"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1004,
			gen: 9,
	},
		rathianite: {
			name: "Rathianite",
			shortDesc: "If held by Rathian, this item allows it to Mega Evolve in battle.",
			spritenum: 607,
			megaStone: "Dreadqueen Rathian",
			megaEvolves: "Rathian",
			itemUser: ["Rathian"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1005,
			gen: 9,
	},
		rathalosite: {
			name: "Rathalosite",
			shortDesc: "If held by Rathalos, this item allows it to Mega Evolve in battle.",
			spritenum: 586,
			megaStone: "Dreadking Rathalos",
			megaEvolves: "Rathalos",
			itemUser: ["Rathalos"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1006,
			gen: 9,
	},
		zinogrite: {
			name: "Zinogrite",
			shortDesc: "If held by Zinogre, this item allows it to Mega Evolve in battle.",
			spritenum: 590,
			megaStone: "Thunderlord Zinogre",
			megaEvolves: "Zinogre",
			itemUser: ["Zinogre"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1007,
			gen: 9,
	},
		arzurite: {
			name: "Arzurite",
			shortDesc: "If held by Arzuros, this item allows it to Mega Evolve in battle.",
			spritenum: 585,
			megaStone: "Redhelm Arzuros",
			megaEvolves: "Arzuros",
			itemUser: ["Arzuros"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1008,
			gen: 9,
	},
		lagombite: {
			name: "Lagombite",
			shortDesc: "If held by Lagombi, this item allows it to Mega Evolve in battle.",
			spritenum: 583,
			megaStone: "Snowbaron Lagombi",
			megaEvolves: "Lagombi",
			itemUser: ["Lagombi"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1009,
			gen: 9,
	},
		bazelnite: {
			name: "Bazelnite",
			shortDesc: "If held by Bazelgeuse, this item allows it to Mega Evolve in battle.",
			spritenum: 591,
			megaStone: "Seething Bazelgeuse",
			megaEvolves: "Bazelgeuse",
			itemUser: ["Bazelgeuse"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1010,
			gen: 9,
		},
		diablite: {
			name: "Diablite",
			shortDesc: "If held by Diablos, this item allows it to Mega Evolve in battle.",
			spritenum: 589,
			megaStone: "Massacre Diablos",
			megaEvolves: "Diablos",
			itemUser: ["Diablos"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1011,
			gen: 9,
	},
		valstraxite: {
			name: "Valstraxite",
			shortDesc: "If held by Valstrax, this item allows it to Mega Evolve in battle.",
			spritenum: 605,
			megaStone: "Crimson Glow Valstrax",
			megaEvolves: "Valstrax",
			itemUser: ["Valstrax"],
			onTakeItem(item, source) {
				if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
				return true;
			},
			num: 1012,
			gen: 9,
	},
	crimsongem: {
		name: "Crimson Gem",
		shortDesc: "If held by Fatalis, this item triggers its Crimson Form in battle.",
		spritenum: 141,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Fatalis') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Crimson-Fatalis', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Fatalis') return false;
			return true;
		},
		itemUser: ["Fatalis"],
		num: 1013,
		gen: 9,
	},
		whitegem: {
		name: "White Gem",
		shortDesc: "If held by Fatalis, this item triggers its White Form in battle.",
		spritenum: 307,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Fatalis') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('White-Fatalis', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Fatalis') return false;
			return true;
		},
		itemUser: ["Fatalis"],
		num: 1014,
		gen: 9,
	},
	frostorb: {
		name: "Frost Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'frz',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('frz', pokemon);
		},
		desc: "At the end of each turn, tries to freeze the holder.",
		shortDesc: "At the end of each turn, tries to freeze the holder.",
		num: 1015,
		gen: 4,
	}
};