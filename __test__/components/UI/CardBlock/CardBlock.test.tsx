import { render, fireEvent } from '@testing-library/react';
import CardBlock from '@/components/UI/CardBlock/CardBlock';

const mockCardElements = [
  {
    title: 'Test Title 1',
    subtitle: 'Test Subtitle 1',
    btnText: 'Test Button 1',
    btnHref: '/test1',
    bottomText: 'Test Bottom Text 1'
  },
  {
    title: 'Test Title 2',
    subtitle: 'Test Subtitle 2',
    btnText: 'Test Button 2',
    btnHref: '/test2',
    bottomText: 'Test Bottom Text 2'
  },
];

describe('CardBlock component', () => {
  test('renders card block with correct title and card elements', () => {
    const { getByText, getAllByTestId } = render(<CardBlock title="Test Title" cardElements={mockCardElements} />);
    
    // Check if title is rendered
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();

    // Check if card elements are rendered
    const cardElements = getAllByTestId('card');
    expect(cardElements.length).toBe(2); // Assuming there are two card elements in mockCardElements
  });

  test('search functionality filters card elements correctly', () => {
    const { getByPlaceholderText, getAllByTestId, queryByText } = render(<CardBlock title="Test Title" cardElements={mockCardElements} />);
    
    // Simulate typing into the search input
    const searchInput = getByPlaceholderText('поиск...');
    fireEvent.change(searchInput, { target: { value: 'Test Title 1' } });

    // Check if only the first card element is rendered
    const cardElements = getAllByTestId('card');
    expect(cardElements.length).toBe(1);
    expect(queryByText('Test Title 2')).toBeNull(); // Second card element should not be rendered
  });
});
