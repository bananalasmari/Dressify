import React from 'react'
import Carousels from '../home/Carousels';
import {ItemList} from '../home/ItemList';
import ItemCard from '../home/ItemCard';
import LastestItems from '../home/LastestItems';

export default function Home() {
    return (
        <div>
           
            <Carousels />
            <ItemList />
            <LastestItems />
             <ItemCard />

        </div>
    )
}

