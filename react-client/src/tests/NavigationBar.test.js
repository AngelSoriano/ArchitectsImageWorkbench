/**
 * Created by anaperez on 3/8/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NavigationBar from '../components/NavigationBar';

describe(NavigationBar, () => {
    //tests go here
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <NavigationBar/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});