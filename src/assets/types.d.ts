type CounrtyInfo = {
	_id: number;
	iso2: string;
	iso3: string;
	lat: number;
	long: number;
};

export interface Counrty {
	active: number;
	activePerOneMillion: number;
	cases: number;
	casesPerOneMillion: number;
	continent: string;
	country: string;
	countryInfo: CounrtyInfo;
	critical: number;
	criticalPerOneMillion: number;
	deaths: number;
	deathsPerOneMillion: number;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	population: number;
	recovered: number;
	recoveredPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	todayCases: number;
	todayDeaths: number;
	todayRecovered: number;
	updated: number;
}

export interface LineGrap {
	active: number;
	cases: number;
	population: number;
	recovered: number;
	tests: number;
}
