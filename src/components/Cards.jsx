import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>La plataforma que lleva tus ventas al SIGUIENTE NIVEL</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-91.jpg'
                            text='Mantenimiento y limpieza profesional para un aire acondicionado más eficiente.'
                            label='Servicios'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-21.jpg'
                            text='Reparación y mantenimiento mecánico automotriz para que sigas en movimiento.'
                            label='Servicios'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-311.png'
                            text='Productos de limpieza para un hogar impecable y desinfectado.'
                            label='Productos'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-41.jpg'
                            text='Dulces típicos con el auténtico sabor de la tradición.'
                            label='Productos'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-81.jpg'
                            text='Partes automotrices de calidad para un mejor rendimiento.'
                            label='Productos'
                            path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;