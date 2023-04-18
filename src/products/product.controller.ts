import {Request, Response} from 'express'
import {ProductService} from './product.service'

class ProductController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const product = await new ProductService().listProducts()

        return res.status(200).json(product)
    }

    async writeFile(req: Request, res: Response) {
        const product = await new ProductService().writeFile()

        return res.status(200).json(product)
    }

    async readFile(req: Request, res: Response) {
        const product = await new ProductService().readFile()

        return res.status(200).json(product)
    }
}

export default new ProductController()