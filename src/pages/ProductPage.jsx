import NavBar from "../component/navbar/NavBar";
import './PagesStyle.css'
import pic1 from "../assets/images/pic1.png"
import pic2 from "../assets/images/pic2.png"
import pic3 from "../assets/images/pic3.png"
import pic4 from "../assets/images/pic4.png"

const ProductArray = [
    {  src: pic1,  name: "Product 1", price: 300 },
    { src: pic2, name: "Product 2", price: 100 },
    { src: pic3, name: "Product 3", price: 200 },
    { src: pic4, name: "Product 4", price: 22200 },
];

let ProductItem2 = (props) => {
    return (<div className="cardview">
        <img src={props.mydata.src} />
        <h1>{props.mydata.name}</h1>
        <h2>{props.mydata.price}</h2>
    </div>);
}

let ProductItem = ({src,name,price}) => {
    return (<div className="cardview">
        <img src={src} />
        <h1>{name}</h1>
        <h2>{price}</h2>
    </div>);
}

let dblink="localhost:3306/signup"

let ProductPage = () => {
    return (
        <>
            <NavBar />
            <div className="mainDiv">
                {


                    ProductArray.map((data, index) => {
                        return (
                        <ProductItem key={index}
                            mydata={data}
                            src={data.src}
                            name={data.name}
                            price={data.price}

                        />
                    )
                })
            }
            </div>
        </>

    );
}

export default ProductPage;
