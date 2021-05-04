/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import renderer from 'react-test-renderer';
import InputField from '../components/shared/InputField';

const mockFunction = jest.fn((x) => x === 'value is changed');
const createTestProps = () => ({
  select: false,
  multiline: true,
  title: 'this is a test',
  name: 'test',
  value: 'value',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => mockFunction(event),
});

describe('<InputField />', () => {
  describe('rendering', () => {
    const props = createTestProps();

    it('renders correctly', () => {
      const tree = renderer.create(<InputField {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should change the value to', () => {
      expect(mockFunction.mock.results.values).toBe('value is changed');
    });
  });
});
