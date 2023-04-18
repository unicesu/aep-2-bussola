import StockModel from './stock.schema';
import ProductModel from '../products/product.schema'

export class StockService {
    async getStock() {
        const productList = await ProductModel.find()

        const stockProducts = productList.map(item => {
            let stock = {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                stockValue: item.quantity * item.price,
            }
            return stock
        })
        const stockList = await StockModel.create(stockProducts)
        return stockList
    }

    async getRandomFromStock() {
        const productList = await StockModel.find().limit(10)
        let randomList

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * productList.length)
            randomList.push(productList[randomIndex])
        }

        return randomList
    }

    async getTotalValueFromStock() {
        const productList = await StockModel.find()

        const totalValue = productList.reduce((prev, curr) => {
            return prev + curr.stockValue
        }, 0)

        return totalValue
    }
}