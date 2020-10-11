import * as React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import ApplyLoan from './Components/applyloan';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Registration from '../Registration';
//import Login from '../Login';
//import RegisterScreen from '../RegisterScreen';
Enzyme.configure({ adapter: new Adapter() });
describe('Test when form is submitted', () => {
    it('should submit form data', () => {
        let form = shallow(<Registration />); 
        form.handleSubmit = jest.fn();
        form.handleSubmit();
        form.update(); 
        form.find('#registsubmit').simulate('submit');
        expect(form.find('#registsubmit').length).toEqual(1);
        expect(form.handleSubmit).toHaveBeenCalled();
    });
    
    it('renders correctly', () => {
        const tree = renderer.create(<BrowserRouter><Registration /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});