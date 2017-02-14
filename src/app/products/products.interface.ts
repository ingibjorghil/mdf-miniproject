export interface isPopularProduct {
	popularproduct: boolean
};
export interface Products {
	id: number,
	name: string,
	imgthumb: string,
	category: string,
	brandlogo: string,
	shortdescription: string,
	longdescription: string,
	fullprice: number,
	discount: number,
	stars: number,
	size: number[],
	isfavorite: boolean,
	popularproduct: boolean
}