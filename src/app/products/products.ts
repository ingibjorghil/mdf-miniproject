export interface isPopularProduct {
	popularproduct: boolean
};
export interface Product {
	id: number,
	name: string,
	imgthumb: string,
	img1: string,
	img2: string,
	img3: string,
	category: string,
	brandlogo: string,
	shortdescription: string,
	longdescription: string,
	fullprice: number,
	discount: number,
	stars: number,
	size: string[],
	isfavorite: boolean,
	popularproduct: boolean
}