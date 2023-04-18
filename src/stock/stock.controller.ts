import {Request, Response} from 'express'
import {StockService} from './stock.service'

class StockController {
    async stock(req: Request, res: Response) {
        const stock = await new StockService().getStock()

        return res.status(200).json(stock)
    }

    async getRandomFromStock(req: Request, res: Response) {
        const stock = await new StockService().getRandomFromStock()

        return res.status(200).json(stock)
    }

    async getTotalValueFromStock(req: Request, res: Response) {
        const totalValue = await new StockService().getTotalValueFromStock()

        return res.status(200).json({totalValue: totalValue})
    }
}

export default new StockController()