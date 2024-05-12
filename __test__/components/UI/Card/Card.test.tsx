import { render } from '@testing-library/react';
import Card from '@/components/UI/Card/Card';
import '@testing-library/jest-dom';

const mockCardElement = {
  title: 'Test Title',
  subtitle: 'Test Subtitle',
  btnText: 'Test Button',
  btnHref: '/test',
  bottomText: 'Test Bottom Text'
};

describe('Card component', () => {
  test('renders card with correct content', () => {
    const { getByText } = render(<Card cardElement={mockCardElement} className="custom-class" />);
    
    // Check if title, subtitle, button text, and bottom text are rendered
    const titleElement = getByText('Test Title');
    const subtitleElement = getByText('Test Subtitle');
    const buttonTextElement = getByText('Test Button');
    const bottomTextElement = getByText('Test Bottom Text');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
    expect(bottomTextElement).toBeInTheDocument();
  });
});
