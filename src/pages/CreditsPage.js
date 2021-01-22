import React from "react";
import "../styles/styles.scss";

function CreditsPage(props) {
	return (
		<section className="credits">
			<h1>Credits</h1>
			<p>
				This site was created by{"\n"}
				<a href="https://www.andrewevans.dev">Andrew Evans</a>
			</p>
			<p>
				The image on the home page was copied from{"\n"}
				<a href="https://starwars.fandom.com/wiki/The_Mandalorian">
					https://starwars.fandom.com/wiki/The_Mandalorian
				</a>
			</p>
			<p>
				Episodes Summaries were originally copied from{"\n"}
				<a href="https://en.wikipedia.org/wiki/The_Mandalorian">
					https://en.wikipedia.org/wiki/The_Mandalorian
				</a>
			</p>
			<p>
				Quotes were originally copied from{"\n"}
				<a href="https://www.magicalquote.com/best-mandalorian-quotes/">
					https://www.magicalquote.com/best-mandalorian-quotes/
				</a>
			</p>
			<p>
				Character information and images was copied from{"\n"}
				<a href="https://starwars.fandom.com">starwars.fandom.com</a>
			</p>
			<p>
				Vehicle information and images were copied from{"\n"}
				<a href="https://starwars.fandom.com">starwars.fandom.com</a>
			</p>
		</section>
	);
}

export default CreditsPage;
