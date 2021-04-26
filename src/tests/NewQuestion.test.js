import React from 'react';
import { mount, shallow } from 'enzyme';
import NewQuestion from "../containers/NewQuestion";

it('renders without crashing', ()=>{
    const signedUser = 'tylermcginnis';
    const wrapper = mount(<NewQuestion signedUser={signedUser}/>);
    const welcome =<label> Complete the question</label>;
    const title =  <h1>Would You Rather...</h1>
    
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper.contains(title)).toEqual(true);
    expect(wrapper.props().signedUser).toEqual(signedUser)
})