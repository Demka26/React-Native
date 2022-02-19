export default class Foods{
    constructor(id,categoryIds,title,imgUrl,price,delivery,description,size,review){
        this.id=id;
        this.categoryIds=categoryIds;
        this.title=title;
        this.imgUrl=imgUrl;
        this.price=price;
        this.delivery=delivery;
        this.description=description;
        this.size=size;
        this.review=review;
    }
}