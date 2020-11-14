import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import Container from "react-bootstrap/cjs/Container";
import "../styles/home.css"
export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center"> Buy where it suits you! </h2>
                    <p className="text-center">
                        Buy where it suits you!
                        Search for the cheapest place to buy hockeypucks? Welcome to the site of
                        discounts and sales of hockeypucks, save now! View hockeypucks which are suitable for you and
                        save your budget. Always up-to-date information about advantageous offers on our site.</p>
                    <img

                        className="d-block"
                        src="https://www.aiox.com/wp-content/uploads/2018/07/Cheap-sneaker-bot-price-tag.jpg"
                        alt="mainImage"
                    />
                </Container>
                <Container>
                    <h2 className="text-center"> Here are teams which we cooparate with </h2>

                    <img

                        className="d-block"
                        src="https://static.tildacdn.com/tild6166-3764-4662-b838-663866316130/ff4ad5459f660431f1ea.jpg"
                        alt="mainImage"
                    />
                </Container>

                <div className="footer">
                    <p className="year">2020@SportOP</p>
                </div>
            </>
        );
    }
}
