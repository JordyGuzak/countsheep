import { products} from "../../../mock/data";

export default function handler({query: { productId }}, res) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({message: `${productId} not found`});
    }
}