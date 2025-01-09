
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UploadButton from './UploadButton';
import MockAdapter from 'axios-mock-adapter';


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
    
    
    expect(screen.getByText('Uploading...')).toBeInTheDocument();
  });

  test('displays a success message after successful upload', async () => {
    render(<UploadButton />);
    
    
    mockAxios.onPost('https://api.example.com/upload').reply(200, {
      message: 'Upload successful',
    });

    fireEvent.click(screen.getByText('Upload Image'));

    
    await waitFor(() => screen.getByText('Upload successful'));

    expect(screen.getByText('Upload successful')).toBeInTheDocument();
  });

  
  test('displays an error message if upload fails', async () => {
    render(<UploadButton />);
    

    mockAxios.onPost('https://api.example.com/upload').reply(500);

    fireEvent.click(screen.getByText('Upload Image'));

    
    await waitFor(() => screen.getByText('Upload failed'));

    expect(screen.getByText('Upload failed')).toBeInTheDocument();
  });

  test('button is disabled during the upload process', async () => {
    render(<UploadButton />);
    
    
    mockAxios.onPost('https://api.example.com/upload').reply(200, {
      message: 'Upload successful',
    });

    fireEvent.click(screen.getByText('Upload Image'));

  
    expect(screen.getByText('Uploading...')).toBeDisabled();
  });
});
