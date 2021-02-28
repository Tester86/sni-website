import "./Header.css";

export default function Header() {
	return (
		<div className="header__container">
			<div className="logo__container">
				<div className="image">
					<img
						id="logo"
						src="https://sni.world/wp-content/uploads/2020/10/SNI-Logo-Transparent-1536x368.png"
					/>
				</div>
			</div>
			<div className="menu__options">
				<a className="menu__option">Home</a>
				<a className="menu__option">About</a>
				<a className="menu__option">Schedule</a>
				<a className="menu__option">Speakers</a>
				<a className="menu__option">Organizer</a>
				<a className="menu__option">Venue</a>
				<a className="menu__option">Sponsors</a>
			</div>
		</div>
	);
}
