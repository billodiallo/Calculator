import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
    it('should render the Calculator App  component', () => {
      const tree = ReactTestRenderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });