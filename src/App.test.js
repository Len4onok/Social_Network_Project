import { render, screen } from '@testing-library/react';
import AppWithRouter from './App';
import ReactDOM from 'react-dom';

ReactDOM
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithRouter />, div)
  ReactDOM.unmountComponentAtNode(div)
});
