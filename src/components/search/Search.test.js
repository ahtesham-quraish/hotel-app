import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePicker from 'react-datepicker';
import moment from 'moment';
Enzyme.configure({ adapter: new Adapter() });

// it('it simulate the startDate selection handlerrs', async () => {
//     const startDateHandlerMock = jest.fn();
//     const event = {
//       preventDefault() {},
//       target: { value: 'A' }
//     };
//     let startDate =  moment();
//     const wrapper = mount(<DatePicker  selected={startDate}
//     onChange={startDateHandlerMock} />);
//     wrapper.simulate('change', event);
//     console.log("========", wrapper.find('input'))
//     expect(startDateHandlerMock).toBeCalledWith('A');
//     // expect(startDateHandlerMock).toHaveBeenCalled();
// });

it('it simulate the startDate selection handlerrs', () => {
    const searchHotelHandler = jest.fn();
    const searchHotelCallBackMock = jest.fn();
    const event = {
      target: { value: 'A' }
    };
    let startDate =  moment();
    const wrapper = mount(<Search  searchHotelCallBack={searchHotelCallBackMock} />);
    expect(wrapper.state('counter')).toBe(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('counter')).toBe(1);
    //expect(searchHotelHandler.mock.calls.length).toEqual(1);
    //console.log(searchHotelHandler.mock.calls,"=================")
    //expect(searchHotelHandlerMock).toBeCalledWith('A');
    //expect(searchHotelHandlerMock).toHaveBeenCalled();
});






// export default class InputBox extends React.Component {
//   onSearch(event) {
//     event.preventDefault();
//     this.props.onSearch(event.target.value.trim());
//   }
//   render () { return <input onChange={this.onSearch.bind(this)} />; }
// }

// it('should call onChange prop', () => {
//     const onSearchMock = jest.fn();
//     const event = {
//       preventDefault() {},
//       target: { value: 'the-value' }
//     };
//     const component = enzyme.shallow(<InputBox onSearch={onSearchMock} />);
//     component.find('input').simulate('change', event);
//     expect(onSearchMock).toBeCalledWith('the-value');
//   });
  