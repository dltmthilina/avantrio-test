import { Card, CardContent, CardHeader } from "../ui/card"

type Props = {
    productName: string
    productImage: string
    productPrice: number
}

const ProductCard = (props: Props) =>    {
    const { productName, productImage, productPrice } = props

    return (
      <Card>
        <CardHeader>{productName}</CardHeader>
        <CardContent>
          <div>
            <div>{productImage}</div>
            <div>{productPrice}</div>
          </div>
        </CardContent>
      </Card>
    );
}

export default ProductCard
