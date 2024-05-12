import { render } from '@testing-library/react';
import Arrow from '@/components/UI/Arrow/Arrow';

describe('Arrow component', () => {
  test('renders arrow with correct direction', () => {
    const { getByTestId } = render(<Arrow width={20} height={30} fill="red" direction="right" />);
    const arrowElement = getByTestId('arrow');
    const transformStyle = arrowElement.style.transform;

    // Check if transform style contains the correct rotation value
    expect(transformStyle).toContain('rotate(180deg)');
  });
});
