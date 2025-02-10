import { Button, Container, Row, Col, Carousel, Image, Form } from 'react-bootstrap';
import 'animate.css';
import Cafe from './cafe';
import Store from './store';
import ScrollButton from '../component/ScrollToTop';

export default function Spapage() {
    return (
        <>
            <Container fluid>
                <section className='cafe'>
                    <Cafe />
                </section>
                <section className='store'>
                    <Store />
                </section>
                <ScrollButton />
            </Container>
        </>
    );
}
