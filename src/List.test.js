import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import Card from './Card'
import renderer from 'react-test-renderer'

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header='test' cards={['1', '2']} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List header='test' cards={['1', '2']} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})