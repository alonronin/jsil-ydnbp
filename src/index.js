import $ from 'jquery';
import 'milligram';

$(() => {
	const Body = $('body');
	const Button = $('<button />');

	Body.append(
		Button.clone()
			.text('Click Me!')
			.on('click', async (e) => {
				const { default: text } = await import(/* webpackChunkName: 'text' */'./txt');
				alert(text);
			})
	);
});
