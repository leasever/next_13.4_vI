export class ProductNotFound extends Error {
    constructor (message = 'El producto que busca no existe'){
        super(message)
        this.name = "ProductNotFound";
    }
}

export class PageNotFound extends Error {
  constructor(message = "La página que busca no existe boundary") {
    super(message);
    this.name = "PageNotFound";
  }
}

export class CategoryProductsNotFound extends Error {
  constructor(message = "La página de categoría no existe") {
    super(message);
    this.name = "CategoryProductsNotFound";
  }
}