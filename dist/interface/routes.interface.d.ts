export interface Routes {
    create<Payload>(data: Payload, routeurl: string, ratingId: string): any;
    update<Payload>(data: Payload, ratingUrl: string, ratingId: string): any;
    delete(routeurl: string, ratingId: string): any;
    getOne(routeurl: string, ratingId: string): any;
}
