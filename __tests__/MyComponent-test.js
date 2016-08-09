jest.unmock('./../MyComponent');

import MyComponent from './../MyComponent';

describe('MyComponent', () => {
    let myComponent = null;
    let reactInstance = null;

    beforeEach(() => {
        myComponent = new MyComponent({
            propA: 'foo',
            propB: 'bar'
        });
        myComponent.setState = jest.genMockFunction();
        reactInstance = myComponent.render();
    });

    it('should render in an a', () => {
        expect(reactInstance.type).toEqual('a');
    });

    it('should call handleMouseOver when onMouseOver is called on the element', () => {
        myComponent.handleMouseOver = jest.genMockFunction();
        reactInstance = myComponent.render();
        expect(myComponent.handleMouseOver).not.toBeCalled();
        reactInstance.props.onMouseOver();
        expect(myComponent.handleMouseOver).toBeCalled();
    });

    it('should call handleMouseOut when onMouseOut is called on the element', () => {
        myComponent.handleMouseOut = jest.genMockFunction();
        reactInstance = myComponent.render();
        expect(myComponent.handleMouseOut).not.toBeCalled();
        reactInstance.props.onMouseOut();
        expect(myComponent.handleMouseOut).toBeCalled();
    });

    it('should call handleMouseOver to set the state when onMouseOver is called on the element', () => {
        expect(myComponent.setState).not.toBeCalled();
        myComponent.handleMouseOver();
        expect(myComponent.setState).toBeCalledWith({
            hover: true
        });
    });

    it('should call handleMouseOut to set the state when onMouseOut is called on the element', () => {
        expect(myComponent.setState).not.toBeCalled();
        myComponent.handleMouseOut();
        expect(myComponent.setState).toBeCalledWith({
            hover: false
        });
    });
});