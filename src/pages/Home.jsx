import React from "react";
import Navbar from "./Navbar";

const Home = () => {

	return (
		<>
			<Navbar />
			<div style={{ lineHeight: 5 ,marginTop: 80, height: 1000, textAlign: "center" }}>
				<h1>Welcome Home!</h1>
				<p>You have successfully logged in.</p>

				{/* Section with light background */}
				<div style={{ background: "#fceabb", padding: "30px", margin: "20px 0", borderRadius: "12px" }}>
					<h2>Yellow Section</h2>
					<p>
						This section has a warm yellow background to check contrast with the glass
						navbar. Light colors usually show off the blur effect more clearly.
					</p>
				</div>

				{/* Inline image with text */}
				<div style={{ margin: "20px 0" }}>
					<p>
						Here’s an inline image with text wrapped around it. Notice how the navbar
						stays visible while scrolling.
						<img
							src="https://picsum.photos/200/150"
							alt="sample"
							style={{
								float: "right",
								margin: "0 0 10px 15px",
								borderRadius: "8px"
							}}
						/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
						ligula nec justo viverra egestas. Cras lacinia ante eu diam pharetra
						posuere. Duis ac neque at metus eleifend tristique.
					</p>
				</div>

				{/* Section with dark background */}
				<div style={{ background: "#1a2a6c", color: "#fff", padding: "30px", margin: "20px 0", borderRadius: "12px" }}>
					<h2>Dark Section</h2>
					<p>
						Dark colors help you see how shadows and borders of the glass navbar
						appear. Text readability is important here.
					</p>
				</div>

				{/* Gradient background section */}
				<div
					style={{
						background: "linear-gradient(135deg, #ff6a00, #ee0979)",
						color: "white",
						padding: "30px",
						margin: "20px 0",
						borderRadius: "12px"
					}}
				>
					<h2>Gradient Section</h2>
					<p>
						A gradient background is perfect to test how the navbar handles more
						complex backgrounds. The blur should smooth things out without killing the
						vibrancy.
					</p>
				</div>

				{/* Another image block */}
				<div style={{ margin: "20px 0", textAlign: "center" }}>
					<img
						src="https://picsum.photos/600/200"
						alt="wide sample"
						style={{ width: "100%", borderRadius: "12px" }}
					/>
					<p>Wide image for testing glass transparency over pictures.</p>
				</div>
			</div>

		</>
	);
};

export default Home;
