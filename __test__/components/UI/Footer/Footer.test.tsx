import { render } from '@testing-library/react';
import Footer from '@/components/UI/Footer/Footer';

describe('Footer component', () => {
  test('renders footer with correct text', () => {
    const { getByText } = render(<Footer />);
    
    // Check if the text "Copytight 2024" is rendered
    const textElement = getByText('Copytight 2024');
    expect(textElement).toBeInTheDocument();
  });
});
