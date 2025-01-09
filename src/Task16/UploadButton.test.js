// src/components/UploadButton.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UploadButton from './UploadButton';
import MockAdapter from 'axios-mock-adapter';

// Create a mock for Axios
const mockAxios = new MockAdapter(axios);

describe('UploadButton', () => {
  beforeEach(() => {
    mockAxios.reset(); // Reset mock before each test
  });

  test('renders the button and checks initial text', () => {
    render(<UploadButton />);
    expect(screen.getByText('Upload Image')).toBeInTheDocument();
  });

  test('shows loading text when button is clicked', async () => {
    render(<UploadButton />);
    fireEvent.click(screen.getByText('Upload Image'));
    
    // Check if the button text changes to "Uploading..."
    expect(screen.getByText('Uploading...')).toBeInTheDocument();
  });

  test('displays a success message after successful upload', async () => {
    render(<UploadButton />);
    
    // Mock the successful API response
    mockAxios.onPost('https://api.example.com/upload').reply(200, {
      message: 'Upload successful',
    });

    fireEvent.click(screen.getByText('Upload Image'));

    // Wait for the success message to be displayed
    await waitFor(() => screen.getByText('Upload successful'));

    expect(screen.getByText('Upload successful')).toBeInTheDocument();
  });

  
  test('displays an error message if upload fails', async () => {
    render(<UploadButton />);
    
    // Mock the failed API response
    mockAxios.onPost('https://api.example.com/upload').reply(500);

    fireEvent.click(screen.getByText('Upload Image'));

    // Wait for the error message to be displayed
    await waitFor(() => screen.getByText('Upload failed'));

    expect(screen.getByText('Upload failed')).toBeInTheDocument();
  });

  test('button is disabled during the upload process', async () => {
    render(<UploadButton />);
    
    // Mock the successful API response
    mockAxios.onPost('https://api.example.com/upload').reply(200, {
      message: 'Upload successful',
    });

    fireEvent.click(screen.getByText('Upload Image'));

    // Button should be disabled while uploading
    expect(screen.getByText('Uploading...')).toBeDisabled();
  });
});
