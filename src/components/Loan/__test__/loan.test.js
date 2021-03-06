import * as React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Loan from '../Loan';


Enzyme.configure({ adapter: new Adapter() });
describe('Test when form is submitted', () => {

    it('should submit form data', () => {
        let form = shallow(<Loan />); 
        form.submitHandler = jest.fn();
        form.submitHandler();
        form.update(); 

        form.find('#loansubmit').simulate('submit');

        expect(form.find('#loansubmit').length).toEqual(1);
        expect(form.submitHandler).toHaveBeenCalled();
    });
    
    it('renders correctly', () => {
        const tree = renderer.create(<BrowserRouter><Loan /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});