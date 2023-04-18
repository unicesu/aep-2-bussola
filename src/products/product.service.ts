import {ProductType} from "./types/product.types";
import ProductModel from "./product.schema";
import {readFile, writeFile} from 'fs/promises'
export class ProductService {
    async create(data: ProductType) {
        const product = await ProductModel.create(data)
        return product
    }

    async listProducts() {
        const productList = await ProductModel.find()
        return productList
    }

    async writeFile() {
        const list = await this.listProducts()
        await writeFile('products.json', JSON.stringify(list, null, 2))
    }

    async readFile() {
        const products = await readFile('products.json', 'utf8')
        return products
    }
}