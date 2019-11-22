
import HomePage from '../Pages/HomePage';


const page = require('../Pages/HomePage');

test('HomePage', () => {  

    const component = renderer.create(page = <HomePage/>);
    let page = component.toJSON();
    expect(page).toMatchSnapshot();

});