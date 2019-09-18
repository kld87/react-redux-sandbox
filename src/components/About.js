import React from 'react';
import {
	Segment,
	Label,
	Message
} from 'semantic-ui-react';

function About() {
	return (
		<Segment>
			<Label color="teal" ribbon>About</Label>
			<p>After doing some intro to React tutorials and playing around with the framework a bit, I found myself questioning the "<a href="https://reactjs.org/docs/lifting-state-up.html">lifting state up</a>" concept, especially in the context of large apps like SPAs. Coming from frameworks with two-way bindings, I felt that in some cases React's ideology could be counter-intuitive to the idea of "reusable" components. Additionally, it seemed like it could lead to a lot of refactoring of existing components as an app evolved just to "lift state" (and pass props down a large component tree). I wanted to see how compartmentalized components could work, while still being able to share some info with other parts of an app. From some quick research (and despite the existence of "<a href="https://reactjs.org/docs/context.html">context</a>"), it seems like this is where Redux comes in, so I decided to give it a try.</p>
			<Message info>
				<Message.Header>Dependencies</Message.Header>
				<ul>
					<li>All the obvious ones for using React + Redux together (and bootstrapped via <a href="https://github.com/facebook/create-react-app">create-react-app</a>)</li>
					<li>I'm trying out <a href="https://semantic-ui.com/">Semantic UI</a> (the react-specific version) for a change vs. Bootstrap. I'll probably try <a href="https://material-ui.com/">Material UI</a> for another project to get a feel for it. These three libs seem to be the most commonly used ones with React projects these days.</li>
					<li>On top of that, <a href="https://highlightjs.org/">highlightjs</a> for the (minimal) code colouring</li>
				</ul>
			</Message>
			<p>To test things out, I composed a simple keypad-like React component with toggeable numeric buttons. The component tracks the "total" of all toggled-on numbers. I wanted to implement the component multiple times while keeping it in control of its own state, but also create a "grand total" of all the implementation's totals, <strong>without</strong> "lifting state up" (even though that's what <strong>should</strong> be done in a simple case like this). Instead, I computed the grand total via Redux. On top of that, I added some Redux debugging into the UI (even though it's available via the associated dev tools) to make things more transparent; this involved abusing Redux's actions flow a little bit - to theoretically capture all actions, and then store the most recent one in Redux &lt;insert Inception noise&gt;.</p>
		</Segment>
	);
}

export default About;

