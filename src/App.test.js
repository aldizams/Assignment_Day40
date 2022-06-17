import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import '@testing-library/jest-dom';
import App from './App';
import PostSection from './components/PostSection/view';

test('App renders React Axios example - netlify hihihihihih ', async () => {
	render(<App />);
	const text = await screen.findByText(
		'React Axios example - netlify hihihihihih'
	);
	expect(text).toBeInTheDocument();
});

const testText = 'inijudul';
const mockResponse = {
	postData: {
		title: testText,
	},
};

test('Check Input Post Section', async () => {
	await act(async () => {
		await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
		render(<PostSection />);
	});
	const textElement = await screen.getByText(testText);
	expect(textElement).toBeInTheDocument();
});
