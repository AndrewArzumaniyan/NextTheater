import { render, fireEvent } from '@testing-library/react';
import Header from '@/components/UI/Header/Header';

describe('Header component', () => {
  test('renders header with correct title', () => {
    const { getByText } = render(<Header title="Test Title" />);
    
    // Check if the title is rendered
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('clicking back button calls handleGoBack function', () => {
    const mockGoBack = jest.fn();
    jest.mock('next/router', () => ({
      useRouter: () => ({
        back: mockGoBack
      })
    }));

    const { getByRole } = render(<Header title="Test Title" />);
    const backButton = getByRole('button');

    fireEvent.click(backButton);

    expect(mockGoBack).toHaveBeenCalled();
  });
});
