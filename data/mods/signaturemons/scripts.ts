export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["Sign", "NoSign"],
	},
	init() {
		//Add signature moves to learnsets (by dex number order)
		//Gen 1
		this.modData('Learnsets', 'venusaur').learnset.greatflower = ['9L1'];
		this.modData('Learnsets', 'charizard').learnset.greatflame = ['9L1'];
		this.modData('Learnsets', 'blastoise').learnset.greatflood = ['9L1'];
		this.modData('Learnsets', 'dugtrio').learnset.tripledig = ['9L1'];
		this.modData('Learnsets', 'dugtrioalola').learnset.tripledig = ['9L1'];
		this.modData('Learnsets', 'tentacruel').learnset.tentacoil = ['9L1'];
		this.modData('Learnsets', 'electrode').learnset.electroblast = ['9L1'];
		this.modData('Learnsets', 'snorlax').learnset.bellyflop = ['9L1'];
		this.modData('Learnsets', 'articuno').learnset.icestorm = ['9L1'];
		this.modData('Learnsets', 'zapdos').learnset.thunderstorm = ['9L1'];
		this.modData('Learnsets', 'moltres').learnset.firestorm = ['9L1'];
		this.modData('Learnsets', 'dragonite').learnset.dracoforce = ['9L1'];

		//Gen 2
		this.modData('Learnsets', 'lanturn').learnset.stunlight = ['9L1'];
		this.modData('Learnsets', 'azumarill').learnset.bubbleball = ['9L1'];
		this.modData('Learnsets', 'sudowoodo').learnset.fakebranch = ['9L1'];
		this.modData('Learnsets', 'tyranitar').learnset.landslide = ['9L1'];

		//Gen 3
		this.modData('Learnsets', 'linoone').learnset.linedash = ['9L1'];
		this.modData('Learnsets', 'slaking').learnset.procrastinate = ['9L1'];
		this.modData('Learnsets', 'spinda').learnset.spintowin = ['9L1'];
		this.modData('Learnsets', 'cacturne').learnset.scarecrow = ['9L1'];
		this.modData('Learnsets', 'zangoose').learnset.whiteclaw = ['9L1'];
		this.modData('Learnsets', 'seviper').learnset.blackstab = ['9L1'];
		this.modData('Learnsets', 'absol').learnset.badomen = ['9L1'];
		this.modData('Learnsets', 'relicanth').learnset.stillwater = ['9L1'];
		this.modData('Learnsets', 'luvdisc').learnset.loveadvice = ['9L1'];

		//Gen 4
		this.modData('Learnsets', 'roserade').learnset.secretthorns = ['9L1'];
		this.modData('Learnsets', 'mothim').learnset.razzia = ['9L1'];
		this.modData('Learnsets', 'gastrodon').learnset.stickyslime = ['9L1'];
		this.modData('Learnsets', 'honchkrow').learnset.vileorders = ['9L1'];
		this.modData('Learnsets', 'lucario').learnset.aurastorm = ['9L1'];
		this.modData('Learnsets', 'carnivine').learnset.flytrap = ['9L1'];
		this.modData('Learnsets', 'weavile').learnset.sinisterclaw = ['9L1'];
		this.modData('Learnsets', 'froslass').learnset.curseofsnow = ['9L1'];

		//Gen 5
		this.modData('Learnsets', 'scolipede').learnset.poisonwheel = ['9L1'];
		this.modData('Learnsets', 'lilligant').learnset.sublimescent = ['9L1'];
		this.modData('Learnsets', 'darmanitan').learnset.burningwill = ['9L1'];
		this.modData('Learnsets', 'darmanitangalar').learnset.burningwill = ['9L1'];
		this.modData('Learnsets', 'eelektross').learnset.exhaustion = ['9L1'];
		this.modData('Learnsets', 'durant').learnset.frontguard = ['9L1'];
		this.modData('Learnsets', 'hydreigon').learnset.triplethreat = ['9L1'];

		//Gen 6
		this.modData('Learnsets', 'talonflame').learnset.airstrike = ['9L1'];
		this.modData('Learnsets', 'clawitzer').learnset.waterbombshell = ['9L1'];
		this.modData('Learnsets', 'noivern').learnset.killerwail = ['9L1'];

		//Gen 7
		this.modData('Learnsets', 'gumshoos').learnset.finaldeduction = ['9L1'];
		this.modData('Learnsets', 'passimian').learnset.touchdown = ['9L1'];
		this.modData('Learnsets', 'mimikyu').learnset.snuggle = ['9L1'];

		//Gen 8
		this.modData('Learnsets', 'greedent').learnset.berrysnack = ['9L1'];
		this.modData('Learnsets', 'corviknight').learnset.armorwing = ['9L1'];
		this.modData('Learnsets', 'thievul').learnset.callingcard = ['9L1'];
		this.modData('Learnsets', 'cursola').learnset.ghastlywail = ['9L1'];

		//Gen 9
		this.modData('Learnsets', 'lokix').learnset.evilkick = ['9L1'];
		this.modData('Learnsets', 'dachsbun').learnset.breadflavor = ['9L1'];
		this.modData('Learnsets', 'bellibolt').learnset.bellyspot = ['9L1'];
		this.modData('Learnsets', 'toedscruel').learnset.tentacoil = ['9L1'];
		this.modData('Learnsets', 'orthworm').learnset.pummeling = ['9L1'];

		//Remove reworked signature moves to Pokémon who got them in later generations (by move, then dex order)
		//Hyper Fang (Raticate/Raticate-Alola)
		delete this.modData('Learnsets', 'bidoof').learnset.hyperfang;
		delete this.modData('Learnsets', 'bibarel').learnset.hyperfang;
		delete this.modData('Learnsets', 'pachirisu').learnset.hyperfang;
		delete this.modData('Learnsets', 'patrat').learnset.hyperfang;
		delete this.modData('Learnsets', 'watchog').learnset.hyperfang;
		delete this.modData('Learnsets', 'yungoos').learnset.hyperfang;
		delete this.modData('Learnsets', 'gumshoos').learnset.hyperfang;
	}
};
