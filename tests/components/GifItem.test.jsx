import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en  <GifItem />', () => { 
    
    const title = 'Athenas';
    const url = 'https://www.google.com.ve';

    test('debe hacer pruebas con el snapshot', () => { 

           const { container } = render( <GifItem title={ title } url={ url } /> );
           expect( container ).toMatchSnapshot();
     });
});