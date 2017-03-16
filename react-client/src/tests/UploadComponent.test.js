/**
 * Created by anaperez on 3/8/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import UploadedComponent from '../components/UploadComponent';

describe(UploadedComponent, () => {
    const mockShowUploadModal = jest.fn();
    const component = shallow(
        <UploadedComponent showUploadModal = {mockShowUploadModal}/>
    )
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <UploadedComponent/>
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('calls the passed in showUploadModal function when the upload button is clicked', () => {
        component.find('button.Upload').simulate('click');
        expect(mockShowUploadModal).toBeCalled();
    });
});