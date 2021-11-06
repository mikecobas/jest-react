/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme'; // shallow nos permite traer elementos y probarlos como una unidad sin traer todo el dom
import ProviderMock from '../../__mocks__/ProviderMock';
import {create} from 'react-test-renderer'
import Header from '../../components/Header'



describe('<Header />', () => {
   
    test('Render del componente Header', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>,
        );
        expect(header.length).toEqual(1);
    });
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.find('.Header-title').text()).toEqual('Platzi Store')
    })
    
});

describe('Snapshot Header', () => {
    test('Comprobando la UI del Header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot()
    })
})