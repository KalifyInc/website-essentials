import React from 'react';
import DefaultLayout from '../src/components/DefaultLayout';
import items from '../src/items/utility';
import CardContent from '../src/components/CardContent';
import ContainerDetails from '../src/components/ContainerDetails'

export function Utility(){
    return(
        <>
            <DefaultLayout/>
            <ContainerDetails>
                {items.map((item) => (
                    <Link href={item.url}>
                        <a>
                            <CardContent key={item} name={item.name} corporation={item.corporation} 
                            img={item.img}/>
                        </a>
                    </Link>
                ))}
            </ContainerDetails>
        </>
    )
}

export default Utility