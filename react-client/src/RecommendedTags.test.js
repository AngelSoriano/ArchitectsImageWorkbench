/**
 * Created by anaperez on 3/8/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RecommendedTags from './RecommendedTags';

describe(RecommendedTags, () => {
    //tests go here
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <RecommendedTags/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
