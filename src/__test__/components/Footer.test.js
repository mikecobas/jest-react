/* eslint-disable */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    test('Render del component Footer', () => {
        expect(footer.length).toEqual(1);
    });

    test('Render del titulo', () => { 
        expect(footer.find(".Footer-title").text()).toEqual('Platzi Store')
    });
});

describe('Snapshot de Footer', () => {
    test('Comprobando la UI del componente', () => {
        const footer = create(<Footer />)
        expect(footer.toJSON()).toMatchSnapshot()
    })
})
