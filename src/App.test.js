import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import '@testing-library/jest-dom';
import App from './App';
import PostSection from './components/PostSection/view';
import GetSection from './components/GetSection/view';

test('App renders React Axios example - netlify hihihihihih ', async () => {
	render(<App />);
	const text = await screen.findByText(
		'React Axios example - netlify hihihihihih'
	);
	expect(text).toBeInTheDocument();
});

test('renders text', async () => {
	const testText = 'hehe';
	const resultText = 'hehe';
	render(<PostSection />);

	// cari elemen input
	const input = screen.getByTestId('title');

	// elemen input ketik "hehe"
	userEvent.type(input, testText);

	// pastiin elemen dengan text "hehe" ada di dokumen
	const textElement = await screen.findByText(resultText);
	expect(textElement).toBeInTheDocument();
});

const testText = 'hehe';
const mockResponse = {
	data: {
		data: [
			{
				id: 1,
				name: 'Kue Kering',
				price: 10000,
				stock: 100,
				imageUrl: '',
			},
		],
	},
};
test('renders fact', async () => {
	await act(async () => {
		await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
		render(<GetSection />);
	});
	const textElement = await screen.getByText(testText);
	expect(textElement).toBeInTheDocument();
});
